terraform {
  required_version = ">= 0.13"

  required_providers {
    aws = {
      source  = "hashicorp/aws"
      version = "5.68.0"
    }
  }
}

provider "aws" {
  region = "us-west-1"
}

resource "aws_security_group" "web" {
  name        = "allow_web_traffic"
  description = "Security group for web service"

  ingress {
    from_port   = 80
    to_port     = 80
    protocol    = "tcp"
    cidr_blocks = ["0.0.0.0/0"]
  }

  ingress {
    from_port   = 443
    to_port     = 443
    protocol    = "tcp"
    cidr_blocks = ["0.0.0.0/0"]
  }

  ingress {
    from_port   = 22
    to_port     = 22
    protocol    = "tcp"
    cidr_blocks = ["0.0.0.0/0"]
  }

  ingress {
    from_port   = 3001
    to_port     = 3001
    protocol    = "tcp"
    cidr_blocks = ["0.0.0.0/0"]
    description = "Allow for web"
  }

  ingress {
    from_port   = 5000
    to_port     = 5000
    protocol    = "tcp"
    cidr_blocks = ["0.0.0.0/0"]
    description = "Allow for web"
  }

  egress {
    from_port   = 0
    to_port     = 0
    protocol    = "-1"
    cidr_blocks = ["0.0.0.0/0"]
  }
}

resource "aws_instance" "coach_seqoiya_web" {
  ami           = "ami-047d7c33f6e7b4bc4"
  instance_type = "t2.micro"
  key_name      = "coachseqoiyakeypair"
  vpc_security_group_ids = [aws_security_group.web.id]

  user_data = <<-EOF
                #!/bin/bash
                sudo yum update -y
                sudo yum install git -y
                sudo amazon-linux-extras install docker -y
                sudo systemctl start docker
                sudo systemctl enable docker
                sudo curl -L "https://github.com/docker/compose/releases/download/v2.5.0/docker-compose-$(uname -s)-$(uname -m)" -o /usr/local/bin/docker-compose
                sudo chmod +x /usr/local/bin/docker-compose
                sudo ln -s /usr/local/bin/docker-compose /usr/bin/docker-compose
              EOF

  tags = {
    Name = "CoachSeqoiya-web"
  }
}

resource "aws_eip_association" "eip_assoc" {
  instance_id   = aws_instance.coach_seqoiya_web.id
  allocation_id = "eipalloc-0b5b918a7c49d3e69"
}

output "ec2_public_ip" {
  value = aws_instance.coach_seqoiya_web.public_ip
}

output "elastic_ip" {
  value = aws_eip_association.eip_assoc.public_ip
}

