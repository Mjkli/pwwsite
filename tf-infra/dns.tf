resource "aws_acm_certificate" "pww" {
  provider = aws.us_east_1

  domain_name       = "pww.mjkli.com"
  validation_method = "DNS"

  lifecycle {
    create_before_destroy = true
  }
}

data "aws_route53_zone" "mjkli" {
  name = "mjkli.com"
}

resource "aws_route53_record" "pww_cert_validation" {
  for_each = {
    for dvo in aws_acm_certificate.pww.domain_validation_options :
    dvo.domain_name => {
      name   = dvo.resource_record_name
      record = dvo.resource_record_value
      type   = dvo.resource_record_type
    }
  }

  zone_id = data.aws_route53_zone.mjkli.zone_id

  name    = each.value.name
  type    = each.value.type
  records = [each.value.record]

  ttl = 60
}

resource "aws_acm_certificate_validation" "pww" {
  provider = aws.us_east_1

  certificate_arn = aws_acm_certificate.pww.arn

  validation_record_fqdns = [
    for record in aws_route53_record.pww_cert_validation :
    record.fqdn
  ]
}

resource "aws_route53_record" "pww" {
  zone_id = data.aws_route53_zone.mjkli.zone_id
  name    = "pww.mjkli.com"
  type    = "A"

  alias {
    name                   = aws_cloudfront_distribution.pww_cdn.domain_name
    zone_id                = aws_cloudfront_distribution.pww_cdn.hosted_zone_id
    evaluate_target_health = false
  }
}