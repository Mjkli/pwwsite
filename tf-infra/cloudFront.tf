resource "aws_cloudfront_origin_access_control" "pww_oac" {
  name                              = "pww-oac"
  description                       = "CloudFront access to S3"
  origin_access_control_origin_type = "s3"
  signing_behavior                  = "always"
  signing_protocol                  = "sigv4"
}

resource "aws_cloudfront_distribution" "pww_cdn" {
  enabled             = true
  default_root_object = "index.html"

  aliases = [
    "pww.mjkli.com"
  ]


  origin {
    domain_name              = aws_s3_bucket.pww_bucket.bucket_regional_domain_name
    origin_id                = "pww-s3-origin"
    origin_access_control_id = aws_cloudfront_origin_access_control.pww_oac.id
  }

  default_cache_behavior {
    target_origin_id       = "pww-s3-origin"
    viewer_protocol_policy = "redirect-to-https"

    allowed_methods = ["GET", "HEAD"]
    cached_methods  = ["GET", "HEAD"]

    forwarded_values {
      query_string = false

      cookies {
        forward = "none"
      }
    }
  }

  restrictions {
    geo_restriction {
      restriction_type = "none"
    }
  }

  viewer_certificate {
    acm_certificate_arn = aws_acm_certificate_validation.pww.certificate_arn

    ssl_support_method       = "sni-only"
    minimum_protocol_version = "TLSv1.2_2021"
  }
}

output "cloudfront_url" {
  value = aws_cloudfront_distribution.pww_cdn.domain_name
}