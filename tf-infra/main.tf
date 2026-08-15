provider "aws"{
    alias = "cali"
    region = "us-west-1"
}
provider "aws" {
  alias = "virginia"
  region = "us-east-1"
}

terraform {
  backend "s3"{
    encrypt = true
    bucket = "state-storage-mjkli"
    use_lockfile = "true"
    key = "pww-tf-state"
    region = "us-west-1"
  }
}