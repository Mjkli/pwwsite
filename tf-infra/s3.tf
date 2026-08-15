resource "aws_s3_bucket" "pww_bucket" {
  bucket = "pww-mjkli-bucket"
}

resource "aws_s3_bucket_public_access_block" "pww_pab" {
  bucket = aws_s3_bucket.pww_bucket.id
  block_public_acls       = true
  block_public_policy     = true
  ignore_public_acls      = true
  restrict_public_buckets = true
}

data "aws_iam_policy_document" "pww_bucket_policy" {
  statement {
    actions = [
      "s3:GetObject"
    ]

    resources = [
      "${aws_s3_bucket.pww_bucket.arn}/*"
    ]

    principals {
      type        = "Service"
      identifiers = ["cloudfront.amazonaws.com"]
    }

    condition {
      test     = "StringEquals"
      variable = "AWS:SourceArn"

      values = [
        aws_cloudfront_distribution.pww_cdn.arn
      ]
    }
  }
}

resource "aws_s3_bucket_policy" "pww_bucket_policy" {
  bucket = aws_s3_bucket.pww_bucket.id
  policy = data.aws_iam_policy_document.pww_bucket_policy.json
}