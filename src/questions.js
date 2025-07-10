const questions = [
  {
    id: 1,
    question: "Which AWS service is used to store objects (files, images, videos)?",
    options: ["Amazon EC2", "Amazon S3", "Amazon RDS", "AWS Lambda"],
    answer: 1,
    explanation: "Amazon S3 (Simple Storage Service) is used to store and retrieve objects like files, images, and videos."
  },
  {
    id: 2,
    question: "What does EC2 stand for?",
    options: ["Elastic Compute Cloud", "Elastic Container Cloud", "Enhanced Compute Cloud", "Elastic Cluster Cloud"],
    answer: 0,
    explanation: "EC2 stands for Elastic Compute Cloud, which provides resizable compute capacity in the cloud."
  },
  {
    id: 3,
    question: "Which AWS service is used for content delivery and caching?",
    options: ["Amazon S3", "Amazon CloudFront", "Amazon Route 53", "AWS Lambda"],
    answer: 1,
    explanation: "Amazon CloudFront is a content delivery network (CDN) service that delivers content to users with low latency."
  },
  {
    id: 4,
    question: "What is the AWS shared responsibility model?",
    options: ["AWS is responsible for everything", "Customer is responsible for everything", "AWS handles infrastructure, customer handles data and applications", "Both share equal responsibility for all aspects"],
    answer: 2,
    explanation: "In the shared responsibility model, AWS is responsible for security OF the cloud (infrastructure), while customers are responsible for security IN the cloud (data, applications, etc.)."
  },
  {
    id: 5,
    question: "Which AWS service is used for DNS management?",
    options: ["Amazon CloudFront", "Amazon Route 53", "AWS Direct Connect", "Amazon VPC"],
    answer: 1,
    explanation: "Amazon Route 53 is a scalable DNS web service that translates domain names to IP addresses."
  },
  {
    id: 6,
    question: "What is the maximum size of an object that can be stored in Amazon S3?",
    options: ["5 GB", "5 TB", "1 TB", "10 TB"],
    answer: 1,
    explanation: "The maximum size of an object that can be stored in Amazon S3 is 5 TB."
  },
  {
    id: 7,
    question: "Which AWS service provides serverless computing?",
    options: ["Amazon EC2", "AWS Lambda", "Amazon RDS", "Amazon EBS"],
    answer: 1,
    explanation: "AWS Lambda provides serverless computing, allowing you to run code without provisioning or managing servers."
  },
  {
    id: 8,
    question: "What is Amazon RDS?",
    options: ["Relational Database Service", "Remote Desktop Service", "Real-time Data Service", "Redundant Data Storage"],
    answer: 0,
    explanation: "Amazon RDS (Relational Database Service) is a managed database service that supports multiple database engines."
  },
  {
    id: 9,
    question: "Which AWS service is used for virtual private cloud networking?",
    options: ["Amazon VPC", "AWS Direct Connect", "Amazon CloudFront", "AWS VPN"],
    answer: 0,
    explanation: "Amazon VPC (Virtual Private Cloud) allows you to create isolated network environments in the AWS cloud."
  },
  {
    id: 10,
    question: "What is the AWS Well-Architected Framework based on?",
    options: ["3 pillars", "5 pillars", "6 pillars", "7 pillars"],
    answer: 2,
    explanation: "The AWS Well-Architected Framework is based on 6 pillars: Operational Excellence, Security, Reliability, Performance Efficiency, Cost Optimization, and Sustainability."
  },
  {
    id: 11,
    question: "Which AWS service provides monitoring and observability?",
    options: ["Amazon CloudWatch", "AWS CloudTrail", "AWS Config", "Amazon Inspector"],
    answer: 0,
    explanation: "Amazon CloudWatch provides monitoring and observability for AWS resources and applications."
  },
  {
    id: 12,
    question: "What is the default storage class for Amazon S3?",
    options: ["S3 Standard", "S3 Standard-IA", "S3 Glacier", "S3 One Zone-IA"],
    answer: 0,
    explanation: "S3 Standard is the default storage class, designed for frequently accessed data with high durability and availability."
  },
  {
    id: 13,
    question: "Which AWS service is used for identity and access management?",
    options: ["AWS IAM", "Amazon Cognito", "AWS Directory Service", "AWS SSO"],
    answer: 0,
    explanation: "AWS IAM (Identity and Access Management) is used to manage access to AWS services and resources securely."
  },
  {
    id: 14,
    question: "What is the benefit of using Availability Zones?",
    options: ["Cost reduction", "High availability and fault tolerance", "Faster processing", "Better security"],
    answer: 1,
    explanation: "Availability Zones provide high availability and fault tolerance by distributing resources across multiple isolated locations."
  },
  {
    id: 15,
    question: "Which AWS service is used for load balancing?",
    options: ["Amazon Route 53", "Elastic Load Balancing", "Amazon CloudFront", "AWS Auto Scaling"],
    answer: 1,
    explanation: "Elastic Load Balancing distributes incoming application traffic across multiple targets to ensure high availability."
  },
  {
    id: 16,
    question: "What is Amazon EBS?",
    options: ["Elastic Block Store", "Elastic Bean Stalk", "Enhanced Backup Service", "Elastic Bandwidth Service"],
    answer: 0,
    explanation: "Amazon EBS (Elastic Block Store) provides persistent block storage volumes for EC2 instances."
  },
  {
    id: 17,
    question: "Which AWS service is used for API management?",
    options: ["AWS Lambda", "Amazon API Gateway", "Amazon CloudFront", "AWS App Runner"],
    answer: 1,
    explanation: "Amazon API Gateway is a managed service for creating, publishing, and managing APIs at any scale."
  },
  {
    id: 18,
    question: "What is the AWS Free Tier?",
    options: ["Always free services", "12-month free trial", "Free for students only", "Free services with usage limits"],
    answer: 3,
    explanation: "The AWS Free Tier provides free access to many AWS services within certain usage limits, with some services free for 12 months and others always free."
  },
  {
    id: 19,
    question: "Which AWS service is used for container orchestration?",
    options: ["Amazon ECS", "Amazon EC2", "AWS Lambda", "Amazon RDS"],
    answer: 0,
    explanation: "Amazon ECS (Elastic Container Service) is a container orchestration service that manages Docker containers."
  },
  {
    id: 20,
    question: "What is AWS CloudFormation?",
    options: ["Infrastructure as Code service", "Content delivery network", "Database service", "Monitoring service"],
    answer: 0,
    explanation: "AWS CloudFormation is an Infrastructure as Code service that allows you to model and provision AWS resources using templates."
  },
  {
    id: 21,
    question: "Which AWS service provides DDoS protection?",
    options: ["AWS WAF", "AWS Shield", "Amazon CloudFront", "AWS Security Hub"],
    answer: 1,
    explanation: "AWS Shield provides DDoS protection for applications running on AWS, with basic protection included automatically."
  },
  {
    id: 22,
    question: "What is the purpose of AWS Regions?",
    options: ["Cost optimization", "Geographic distribution and compliance", "Performance only", "Security isolation"],
    answer: 1,
    explanation: "AWS Regions provide geographic distribution for low latency, compliance with local regulations, and disaster recovery."
  },
  {
    id: 23,
    question: "Which AWS service is used for NoSQL databases?",
    options: ["Amazon RDS", "Amazon DynamoDB", "Amazon Redshift", "Amazon Aurora"],
    answer: 1,
    explanation: "Amazon DynamoDB is a fully managed NoSQL database service that provides fast and predictable performance."
  },
  {
    id: 24,
    question: "What is Amazon SNS?",
    options: ["Simple Notification Service", "Secure Network Service", "Simple Network Storage", "System Notification Service"],
    answer: 0,
    explanation: "Amazon SNS (Simple Notification Service) is a messaging service for sending notifications to subscribers."
  },
  {
    id: 25,
    question: "Which AWS service is used for message queuing?",
    options: ["Amazon SNS", "Amazon SQS", "Amazon SES", "AWS Step Functions"],
    answer: 1,
    explanation: "Amazon SQS (Simple Queue Service) is a message queuing service that decouples and scales microservices."
  },
  {
    id: 26,
    question: "What is the default maximum number of VPCs per region?",
    options: ["3", "5", "10", "20"],
    answer: 1,
    explanation: "The default maximum number of VPCs per region is 5, though this can be increased through a service request."
  },
  {
    id: 27,
    question: "Which AWS service is used for data warehousing?",
    options: ["Amazon RDS", "Amazon Redshift", "Amazon DynamoDB", "Amazon S3"],
    answer: 1,
    explanation: "Amazon Redshift is a fully managed data warehouse service designed for analytics and reporting."
  },
  {
    id: 28,
    question: "What is AWS CloudTrail?",
    options: ["Performance monitoring", "API logging and auditing", "Cost management", "Security scanning"],
    answer: 1,
    explanation: "AWS CloudTrail provides logging and auditing of API calls and user activity across your AWS infrastructure."
  },
  {
    id: 29,
    question: "Which AWS service is used for email sending?",
    options: ["Amazon SNS", "Amazon SES", "Amazon SQS", "AWS Lambda"],
    answer: 1,
    explanation: "Amazon SES (Simple Email Service) is a service for sending transactional and marketing emails."
  },
  {
    id: 30,
    question: "What is the durability of Amazon S3 Standard storage?",
    options: ["99.9%", "99.99%", "99.999999999%", "99.9999999999%"],
    answer: 2,
    explanation: "Amazon S3 Standard storage is designed for 99.999999999% (11 9's) durability of objects."
  },
  {
    id: 31,
    question: "Which AWS service is used for code deployment?",
    options: ["AWS CodeDeploy", "AWS CodeCommit", "AWS CodePipeline", "AWS CodeBuild"],
    answer: 0,
    explanation: "AWS CodeDeploy is a service that automates code deployments to EC2 instances, on-premises servers, and Lambda functions."
  },
  {
    id: 32,
    question: "What is Amazon ElastiCache?",
    options: ["Content delivery network", "In-memory caching service", "Database service", "Storage service"],
    answer: 1,
    explanation: "Amazon ElastiCache is a web service that provides in-memory caching to improve application performance."
  },
  {
    id: 33,
    question: "Which AWS service is used for serverless workflows?",
    options: ["AWS Lambda", "AWS Step Functions", "Amazon SQS", "AWS Batch"],
    answer: 1,
    explanation: "AWS Step Functions is a serverless workflow service that coordinates multiple AWS services into serverless workflows."
  },
  {
    id: 34,
    question: "What is the AWS pricing model primarily based on?",
    options: ["Fixed monthly fees", "Pay-as-you-go", "Annual contracts only", "Per-user licensing"],
    answer: 1,
    explanation: "AWS pricing is primarily based on a pay-as-you-go model where you pay only for the resources you use."
  },
  {
    id: 35,
    question: "Which AWS service is used for web application firewall?",
    options: ["AWS Shield", "AWS WAF", "Amazon CloudFront", "AWS Security Hub"],
    answer: 1,
    explanation: "AWS WAF (Web Application Firewall) protects web applications from common web exploits and attacks."
  },
  {
    id: 36,
    question: "What is Amazon Glacier?",
    options: ["Compute service", "Database service", "Archive storage service", "Content delivery service"],
    answer: 2,
    explanation: "Amazon Glacier is a secure, durable, and low-cost storage service for data archiving and long-term backup."
  },
  {
    id: 37,
    question: "Which AWS service is used for configuration management?",
    options: ["AWS Config", "AWS Systems Manager", "AWS CloudFormation", "AWS OpsWorks"],
    answer: 0,
    explanation: "AWS Config is a service that tracks resource configurations and changes for compliance and auditing."
  },
  {
    id: 38,
    question: "What is the maximum execution time for AWS Lambda functions?",
    options: ["5 minutes", "15 minutes", "30 minutes", "1 hour"],
    answer: 1,
    explanation: "AWS Lambda functions can run for a maximum of 15 minutes per execution."
  },
  {
    id: 39,
    question: "Which AWS service is used for private network connectivity?",
    options: ["AWS Direct Connect", "AWS VPN", "Amazon VPC", "AWS Transit Gateway"],
    answer: 0,
    explanation: "AWS Direct Connect provides dedicated network connections from your premises to AWS."
  },
  {
    id: 40,
    question: "What is Amazon Aurora?",
    options: ["NoSQL database", "Relational database", "Data warehouse", "In-memory database"],
    answer: 1,
    explanation: "Amazon Aurora is a MySQL and PostgreSQL-compatible relational database built for the cloud."
  },
  {
    id: 41,
    question: "Which AWS service is used for container registry?",
    options: ["Amazon ECR", "Amazon ECS", "Amazon EKS", "AWS Fargate"],
    answer: 0,
    explanation: "Amazon ECR (Elastic Container Registry) is a Docker container registry service for storing and managing container images."
  },
  {
    id: 42,
    question: "What is the benefit of using Reserved Instances?",
    options: ["Better performance", "Cost savings", "Higher availability", "More storage"],
    answer: 1,
    explanation: "Reserved Instances provide significant cost savings (up to 75%) compared to On-Demand pricing for predictable workloads."
  },
  {
    id: 43,
    question: "Which AWS service is used for machine learning?",
    options: ["Amazon SageMaker", "Amazon Comprehend", "Amazon Rekognition", "All of the above"],
    answer: 3,
    explanation: "AWS offers multiple machine learning services including SageMaker for building models, Comprehend for text analysis, and Rekognition for image analysis."
  },
  {
    id: 44,
    question: "What is AWS Trusted Advisor?",
    options: ["Security service", "Cost optimization tool", "Performance monitoring", "All of the above"],
    answer: 3,
    explanation: "AWS Trusted Advisor provides recommendations for cost optimization, security, performance, and fault tolerance."
  },
  {
    id: 45,
    question: "Which AWS service is used for backup?",
    options: ["AWS Backup", "Amazon S3", "Amazon EBS", "All of the above"],
    answer: 3,
    explanation: "AWS Backup is a centralized backup service, but you can also use S3 for backup storage and EBS snapshots for EC2 backups."
  },
  {
    id: 46,
    question: "What is the scope of an IAM user?",
    options: ["Regional", "Global", "Availability Zone", "VPC"],
    answer: 1,
    explanation: "IAM users are global resources that can be used across all AWS regions within an account."
  },
  {
    id: 47,
    question: "Which AWS service is used for search?",
    options: ["Amazon CloudSearch", "Amazon Elasticsearch", "Amazon OpenSearch", "All of the above"],
    answer: 3,
    explanation: "AWS offers multiple search services including CloudSearch for simple search, and OpenSearch (formerly Elasticsearch) for advanced search and analytics."
  },
  {
    id: 48,
    question: "What is Amazon Kinesis?",
    options: ["Database service", "Real-time data streaming service", "Storage service", "Compute service"],
    answer: 1,
    explanation: "Amazon Kinesis is a platform for real-time data streaming and analytics."
  },
  {
    id: 49,
    question: "Which AWS service is used for version control?",
    options: ["AWS CodeCommit", "AWS CodeBuild", "AWS CodePipeline", "AWS CodeDeploy"],
    answer: 0,
    explanation: "AWS CodeCommit is a source control service that hosts secure Git repositories."
  },
  {
    id: 50,
    question: "What is the AWS Support plan that includes access to Cloud Support Engineers?",
    options: ["Basic", "Developer", "Business", "Enterprise"],
    answer: 2,
    explanation: "The Business support plan is the first tier that includes access to Cloud Support Engineers via phone, chat, and email."
  },
  {
    id: 51,
    question: "Which AWS service is used for hybrid cloud storage?",
    options: ["AWS Storage Gateway", "Amazon S3", "Amazon EFS", "Amazon FSx"],
    answer: 0,
    explanation: "AWS Storage Gateway connects on-premises environments to AWS cloud storage services."
  },
  {
    id: 52,
    question: "What is the minimum size for an EBS volume?",
    options: ["1 GB", "4 GB", "8 GB", "10 GB"],
    answer: 0,
    explanation: "The minimum size for an EBS volume is 1 GB."
  },
  {
    id: 53,
    question: "Which AWS service is used for disaster recovery?",
    options: ["AWS CloudFormation", "AWS Backup", "AWS Site Recovery", "Multiple services"],
    answer: 3,
    explanation: "Disaster recovery in AWS involves multiple services including backup, replication, and infrastructure automation tools."
  },
  {
    id: 54,
    question: "What is Amazon WorkSpaces?",
    options: ["Virtual desktop service", "Collaboration platform", "Storage service", "Database service"],
    answer: 0,
    explanation: "Amazon WorkSpaces is a managed, secure cloud desktop service that provides virtual desktops."
  },
  {
    id: 55,
    question: "Which AWS service is used for IoT?",
    options: ["AWS IoT Core", "AWS IoT Device Management", "AWS IoT Analytics", "All of the above"],
    answer: 3,
    explanation: "AWS offers a comprehensive suite of IoT services including Core, Device Management, Analytics, and more."
  },
  {
    id: 56,
    question: "What is the AWS Edge Location?",
    options: ["Data center", "CDN endpoint", "Compute instance", "Database server"],
    answer: 1,
    explanation: "AWS Edge Locations are endpoints for CloudFront CDN that cache content closer to users."
  },
  {
    id: 57,
    question: "Which AWS service is used for media processing?",
    options: ["Amazon Elastic Transcoder", "AWS Elemental MediaConvert", "Both A and B", "Amazon S3"],
    answer: 2,
    explanation: "AWS offers multiple media processing services including Elastic Transcoder and Elemental MediaConvert."
  },
  {
    id: 58,
    question: "What is the AWS Cost Explorer?",
    options: ["Billing service", "Cost analysis tool", "Budget management", "All of the above"],
    answer: 3,
    explanation: "AWS Cost Explorer is a tool for analyzing costs, creating budgets, and managing AWS spending."
  },
  {
    id: 59,
    question: "Which AWS service is used for game development?",
    options: ["Amazon GameLift", "AWS GameSparks", "Amazon Lumberyard", "All of the above"],
    answer: 3,
    explanation: "AWS offers multiple game development services including GameLift for multiplayer games and related tools."
  },
  {
    id: 60,
    question: "What is Amazon Cognito?",
    options: ["Authentication service", "User management service", "Mobile backend service", "All of the above"],
    answer: 3,
    explanation: "Amazon Cognito provides authentication, user management, and mobile backend services for applications."
  },
  {
    id: 61,
    question: "Which AWS service is used for blockchain?",
    options: ["Amazon Managed Blockchain", "AWS Blockchain Templates", "Amazon QLDB", "All of the above"],
    answer: 3,
    explanation: "AWS offers multiple blockchain services including Managed Blockchain and QLDB for ledger applications."
  },
  {
    id: 62,
    question: "What is the AWS Organizations service?",
    options: ["Account management", "Billing consolidation", "Policy management", "All of the above"],
    answer: 3,
    explanation: "AWS Organizations provides account management, billing consolidation, and centralized policy management."
  },
  {
    id: 63,
    question: "Which AWS service is used for satellite communication?",
    options: ["AWS Ground Station", "Amazon Satellite", "AWS Space Service", "Amazon Connect"],
    answer: 0,
    explanation: "AWS Ground Station is a fully managed service that provides satellite communication capabilities."
  },
  {
    id: 64,
    question: "What is Amazon Athena?",
    options: ["Database service", "Analytics service", "Query service", "All of the above"],
    answer: 3,
    explanation: "Amazon Athena is an interactive query service that makes it easy to analyze data in S3 using standard SQL."
  },
  {
    id: 65,
    question: "Which AWS service is used for event-driven architecture?",
    options: ["Amazon EventBridge", "AWS Lambda", "Amazon SNS", "All of the above"],
    answer: 3,
    explanation: "Event-driven architecture in AWS can use EventBridge for event routing, Lambda for processing, and SNS for notifications."
  },
  {
    id: 66,
    question: "What is AWS Fargate?",
    options: ["Container service", "Serverless compute", "Container orchestration", "All of the above"],
    answer: 3,
    explanation: "AWS Fargate is a serverless compute engine for containers that works with both ECS and EKS."
  },
  {
    id: 67,
    question: "Which AWS service is used for quantum computing?",
    options: ["Amazon Braket", "AWS Quantum", "Amazon Q", "AWS Quantum Computing"],
    answer: 0,
    explanation: "Amazon Braket is a quantum computing service that provides access to quantum computers and simulators."
  },
  {
    id: 68,
    question: "What is the AWS Network Load Balancer?",
    options: ["Layer 4 load balancer", "Layer 7 load balancer", "Application load balancer", "Classic load balancer"],
    answer: 0,
    explanation: "Network Load Balancer operates at Layer 4 (transport layer) and is designed for high performance and low latency."
  },
  {
    id: 69,
    question: "Which AWS service is used for secrets management?",
    options: ["AWS Secrets Manager", "AWS Systems Manager Parameter Store", "AWS KMS", "Both A and B"],
    answer: 3,
    explanation: "Both AWS Secrets Manager and Systems Manager Parameter Store can be used for secrets management."
  },
  {
    id: 70,
    question: "What is Amazon EMR?",
    options: ["Elastic MapReduce", "Big data processing", "Hadoop cluster", "All of the above"],
    answer: 3,
    explanation: "Amazon EMR (Elastic MapReduce) is a managed big data processing service that supports Hadoop, Spark, and other frameworks."
  },
  {
    id: 71,
    question: "Which AWS service is used for mobile app testing?",
    options: ["AWS Device Farm", "AWS Mobile Hub", "AWS Amplify", "Amazon Mobile Analytics"],
    answer: 0,
    explanation: "AWS Device Farm is a mobile app testing service that tests apps on real devices in the cloud."
  },
  {
    id: 72,
    question: "What is AWS X-Ray?",
    options: ["Monitoring service", "Tracing service", "Debugging service", "All of the above"],
    answer: 3,
    explanation: "AWS X-Ray is a distributed tracing service that helps with monitoring, debugging, and analyzing applications."
  },
  {
    id: 73,
    question: "Which AWS service is used for data migration?",
    options: ["AWS Database Migration Service", "AWS DataSync", "AWS Snow Family", "All of the above"],
    answer: 3,
    explanation: "AWS offers multiple data migration services including DMS for databases, DataSync for file transfers, and Snow Family for large-scale migrations."
  },
  {
    id: 74,
    question: "What is the AWS Global Infrastructure?",
    options: ["Regions and Availability Zones", "Edge Locations", "Data centers", "All of the above"],
    answer: 3,
    explanation: "AWS Global Infrastructure consists of Regions, Availability Zones, Edge Locations, and data centers worldwide."
  },
  {
    id: 75,
    question: "Which AWS service is used for certificate management?",
    options: ["AWS Certificate Manager", "AWS KMS", "AWS IAM", "AWS Security Hub"],
    answer: 0,
    explanation: "AWS Certificate Manager provides SSL/TLS certificates for AWS services and internal connected resources."
  },
  {
    id: 76,
    question: "What is Amazon QuickSight?",
    options: ["Business intelligence service", "Data visualization tool", "Analytics service", "All of the above"],
    answer: 3,
    explanation: "Amazon QuickSight is a business intelligence service that provides data visualization and analytics capabilities."
  },
  {
    id: 77,
    question: "Which AWS service is used for time series data?",
    options: ["Amazon Timestream", "Amazon DynamoDB", "Amazon RDS", "Amazon Redshift"],
    answer: 0,
    explanation: "Amazon Timestream is a purpose-built time series database for IoT and operational applications."
  },
  {
    id: 78,
    question: "What is AWS Service Catalog?",
    options: ["Service directory", "IT service management", "Product portfolio management", "All of the above"],
    answer: 3,
    explanation: "AWS Service Catalog allows organizations to create and manage catalogs of IT services for consistent deployment."
  },
  {
    id: 79,
    question: "Which AWS service is used for code review?",
    options: ["AWS CodeGuru", "AWS CodeCommit", "AWS CodePipeline", "AWS CodeBuild"],
    answer: 0,
    explanation: "AWS CodeGuru provides intelligent code reviews and application performance recommendations."
  },
  {
    id: 80,
    question: "What is Amazon Macie?",
    options: ["Security service", "Data privacy service", "Content inspection service", "All of the above"],
    answer: 3,
    explanation: "Amazon Macie is a security service that uses machine learning to discover, classify, and protect sensitive data."
  },
  {
    id: 81,
    question: "Which AWS service is used for contact center?",
    options: ["Amazon Connect", "Amazon Chime", "Amazon WorkSpaces", "AWS Support"],
    answer: 0,
    explanation: "Amazon Connect is a cloud-based contact center service that provides customer service capabilities."
  },
  {
    id: 82,
    question: "What is AWS Cloud9?",
    options: ["Cloud IDE", "Development environment", "Code editor", "All of the above"],
    answer: 3,
    explanation: "AWS Cloud9 is a cloud-based integrated development environment (IDE) for writing, running, and debugging code."
  },
  {
    id: 83,
    question: "Which AWS service is used for log management?",
    options: ["Amazon CloudWatch Logs", "AWS CloudTrail", "AWS X-Ray", "All of the above"],
    answer: 3,
    explanation: "AWS provides multiple log management services including CloudWatch Logs for application logs, CloudTrail for API logs, and X-Ray for distributed tracing."
  },
  {
    id: 84,
    question: "What is the AWS Snowball?",
    options: ["Data transfer device", "Edge computing device", "Storage appliance", "All of the above"],
    answer: 3,
    explanation: "AWS Snowball is a data transfer device that can also provide edge computing capabilities and storage."
  },
  {
    id: 85,
    question: "Which AWS service is used for document processing?",
    options: ["Amazon Textract", "Amazon Comprehend", "Amazon Translate", "All of the above"],
    answer: 3,
    explanation: "AWS offers multiple document processing services including Textract for text extraction, Comprehend for analysis, and Translate for language translation."
  },
  {
    id: 86,
    question: "What is Amazon Neptune?",
    options: ["Graph database", "Relational database", "Document database", "Key-value database"],
    answer: 0,
    explanation: "Amazon Neptune is a fully managed graph database service that supports property graph and RDF models."
  },
  {
    id: 87,
    question: "Which AWS service is used for microservices?",
    options: ["Amazon ECS", "AWS Lambda", "Amazon API Gateway", "All of the above"],
    answer: 3,
    explanation: "Microservices architecture in AWS can use ECS for containers, Lambda for serverless functions, and API Gateway for service communication."
  },
  {
    id: 88,
    question: "What is AWS Batch?",
    options: ["Job scheduling service", "Compute service", "Container service", "All of the above"],
    answer: 3,
    explanation: "AWS Batch is a service for running batch computing workloads that can schedule jobs and manage compute resources."
  },
  {
    id: 89,
    question: "Which AWS service is used for voice recognition?",
    options: ["Amazon Transcribe", "Amazon Polly", "Amazon Lex", "All of the above"],
    answer: 3,
    explanation: "AWS offers multiple voice services including Transcribe for speech-to-text, Polly for text-to-speech, and Lex for conversational interfaces."
  },
  {
    id: 90,
    question: "What is Amazon DocumentDB?",
    options: ["Document database", "MongoDB-compatible database", "NoSQL database", "All of the above"],
    answer: 3,
    explanation: "Amazon DocumentDB is a fully managed document database service that is MongoDB-compatible."
  },
  {
    id: 91,
    question: "Which AWS service is used for data lakes?",
    options: ["Amazon S3", "AWS Lake Formation", "AWS Glue", "All of the above"],
    answer: 3,
    explanation: "Data lakes in AWS typically use S3 for storage, Lake Formation for management, and Glue for data processing."
  },
  {
    id: 92,
    question: "What is AWS Amplify?",
    options: ["Mobile development platform", "Web development platform", "Full-stack development platform", "All of the above"],
    answer: 3,
    explanation: "AWS Amplify is a full-stack development platform for building mobile and web applications."
  },
  {
    id: 93,
    question: "Which AWS service is used for image recognition?",
    options: ["Amazon Rekognition", "Amazon Textract", "Amazon Comprehend", "Amazon Translate"],
    answer: 0,
    explanation: "Amazon Rekognition is a service that makes it easy to add image and video analysis to applications."
  },
  {
    id: 94,
    question: "What is AWS Glue?",
    options: ["ETL service", "Data catalog service", "Data preparation service", "All of the above"],
    answer: 3,
    explanation: "AWS Glue is a fully managed extract, transform, and load (ETL) service with data catalog capabilities."
  },
  {
    id: 95,
    question: "Which AWS service is used for streaming analytics?",
    options: ["Amazon Kinesis Analytics", "Amazon Kinesis Data Streams", "Amazon Kinesis Data Firehose", "All of the above"],
    answer: 3,
    explanation: "Amazon Kinesis offers multiple services for streaming data including Analytics for real-time analysis."
  },
  {
    id: 96,
    question: "What is Amazon Forecast?",
    options: ["Weather service", "Machine learning forecasting service", "Business intelligence service", "Analytics service"],
    answer: 1,
    explanation: "Amazon Forecast is a machine learning service that uses historical data to deliver highly accurate forecasts."
  },
  {
    id: 97,
    question: "Which AWS service is used for edge computing?",
    options: ["AWS Outposts", "AWS Wavelength", "AWS Snow Family", "All of the above"],
    answer: 3,
    explanation: "AWS offers multiple edge computing services including Outposts for on-premises, Wavelength for 5G, and Snow Family for edge locations."
  },
  {
    id: 98,
    question: "What is Amazon Personalize?",
    options: ["Recommendation service", "Machine learning service", "Personalization service", "All of the above"],
    answer: 3,
    explanation: "Amazon Personalize is a machine learning service that makes it easy to develop individualized recommendations."
  },
  {
    id: 99,
    question: "Which AWS service is used for data archiving?",
    options: ["Amazon S3 Glacier", "Amazon S3 Glacier Deep Archive", "AWS Backup", "All of the above"],
    answer: 3,
    explanation: "AWS offers multiple archiving options including S3 Glacier storage classes and AWS Backup for comprehensive archiving."
  },
  {
    id: 100,
    question: "What is AWS CodeStar?",
    options: ["Development tool", "Project management service", "CI/CD service", "All of the above"],
    answer: 3,
    explanation: "AWS CodeStar is a service that provides a unified user interface for managing software development activities."
  },
  {
    id: 101,
    question: "Which AWS service is used for content moderation?",
    options: ["Amazon Rekognition", "Amazon Textract", "Amazon Comprehend", "Amazon Translate"],
    answer: 0,
    explanation: "Amazon Rekognition can detect inappropriate content in images and videos for content moderation."
  },
  {
    id: 102,
    question: "What is Amazon Chime?",
    options: ["Communication service", "Video conferencing service", "Messaging service", "All of the above"],
    answer: 3,
    explanation: "Amazon Chime is a communications service that provides online meetings, video conferencing, and messaging."
  },
  {
    id: 103,
    question: "Which AWS service is used for robotic process automation?",
    options: ["AWS RoboMaker", "AWS Step Functions", "AWS Lambda", "Amazon Textract"],
    answer: 0,
    explanation: "AWS RoboMaker is a service that provides a development environment for robotics applications."
  },
  {
    id: 104,
    question: "What is Amazon Kendra?",
    options: ["Search service", "Enterprise search service", "Machine learning search", "All of the above"],
    answer: 3,
    explanation: "Amazon Kendra is an intelligent search service powered by machine learning for enterprises."
  },
  {
    id: 105,
    question: "Which AWS service is used for fraud detection?",
    options: ["Amazon Fraud Detector", "Amazon Rekognition", "Amazon Comprehend", "AWS GuardDuty"],
    answer: 0,
    explanation: "Amazon Fraud Detector is a fully managed service that uses machine learning to identify potentially fraudulent activities."
  },
  {
    id: 106,
    question: "What is AWS DataSync?",
    options: ["Data transfer service", "Data synchronization service", "Data migration service", "All of the above"],
    answer: 3,
    explanation: "AWS DataSync is a data transfer service that simplifies, automates, and accelerates moving data between storage systems."
  },
  {
    id: 107,
    question: "Which AWS service is used for application monitoring?",
    options: ["Amazon CloudWatch", "AWS X-Ray", "AWS Systems Manager", "All of the above"],
    answer: 3,
    explanation: "AWS provides multiple application monitoring services including CloudWatch for metrics, X-Ray for tracing, and Systems Manager for operational insights."
  },
  {
    id: 108,
    question: "What is Amazon HealthLake?",
    options: ["Healthcare data service", "HIPAA-compliant data store", "Healthcare analytics", "All of the above"],
    answer: 3,
    explanation: "Amazon HealthLake is a HIPAA-eligible service that helps healthcare organizations store, transform, and analyze health data."
  },
  {
    id: 109,
    question: "Which AWS service is used for financial services?",
    options: ["Amazon FinSpace", "AWS Financial Services Cloud", "Amazon Managed Blockchain", "All of the above"],
    answer: 3,
    explanation: "AWS offers multiple services for financial services including FinSpace for financial data analysis and Managed Blockchain for financial applications."
  },
  {
    id: 110,
    question: "What is AWS Proton?",
    options: ["Application deployment service", "Container deployment service", "Infrastructure provisioning service", "All of the above"],
    answer: 3,
    explanation: "AWS Proton is a service that helps platform teams provide self-service deployment capabilities to developers."
  },
  {
    id: 111,
    question: "Which AWS service is used for high-performance computing?",
    options: ["AWS Batch", "Amazon EC2", "AWS ParallelCluster", "All of the above"],
    answer: 3,
    explanation: "AWS provides multiple HPC services including Batch for job scheduling, EC2 for compute resources, and ParallelCluster for HPC clusters."
  },
  {
    id: 112,
    question: "What is Amazon Lookout for Vision?",
    options: ["Computer vision service", "Industrial inspection service", "Machine learning service", "All of the above"],
    answer: 3,
    explanation: "Amazon Lookout for Vision is a machine learning service that uses computer vision to find defects in industrial products."
  },
  {
    id: 113,
    question: "Which AWS service is used for network security?",
    options: ["AWS Security Hub", "AWS Network Firewall", "AWS WAF", "All of the above"],
    answer: 3,
    explanation: "AWS provides multiple network security services including Security Hub for central management, Network Firewall for VPC protection, and WAF for web application protection."
  },
  {
    id: 114,
    question: "What is Amazon Honeycode?",
    options: ["No-code application platform", "Spreadsheet application", "Database application", "All of the above"],
    answer: 3,
    explanation: "Amazon Honeycode is a no-code platform that allows users to build applications without programming knowledge."
  },
  {
    id: 115,
    question: "Which AWS service is used for data validation?",
    options: ["AWS Glue DataBrew", "AWS Data Pipeline", "Amazon EMR", "All of the above"],
    answer: 3,
    explanation: "AWS offers multiple data validation services including Glue DataBrew for data preparation and validation."
  },
  {
    id: 116,
    question: "What is AWS App Runner?",
    options: ["Container service", "Serverless service", "Application deployment service", "All of the above"],
    answer: 3,
    explanation: "AWS App Runner is a fully managed service that makes it easy to deploy web applications and APIs from source code or container images."
  },
  {
    id: 117,
    question: "Which AWS service is used for multi-cloud management?",
    options: ["AWS Control Tower", "AWS Organizations", "AWS Systems Manager", "All of the above"],
    answer: 3,
    explanation: "AWS provides multiple services for multi-cloud and multi-account management including Control Tower for governance and Organizations for account management."
  },
  {
    id: 118,
    question: "What is Amazon Monitron?",
    options: ["Industrial monitoring service", "Machine learning service", "IoT service", "All of the above"],
    answer: 3,
    explanation: "Amazon Monitron is an end-to-end system that uses machine learning to detect abnormal behavior in industrial equipment."
  },
  {
    id: 119,
    question: "Which AWS service is used for application integration?",
    options: ["Amazon EventBridge", "AWS Step Functions", "Amazon SQS", "All of the above"],
    answer: 3,
    explanation: "AWS provides multiple application integration services including EventBridge for event routing, Step Functions for workflows, and SQS for messaging."
  },
  {
    id: 120,
    question: "What is AWS Compute Optimizer?",
    options: ["Cost optimization service", "Performance optimization service", "Resource recommendation service", "All of the above"],
    answer: 3,
    explanation: "AWS Compute Optimizer provides recommendations to optimize compute resources for cost and performance."
  },
  {
    id: 121,
    question: "Which AWS service is used for data transformation?",
    options: ["AWS Glue", "Amazon EMR", "AWS Data Pipeline", "All of the above"],
    answer: 3,
    explanation: "AWS offers multiple data transformation services including Glue for ETL, EMR for big data processing, and Data Pipeline for workflow management."
  },
  {
    id: 122,
    question: "What is Amazon CodeWhisperer?",
    options: ["AI coding assistant", "Code review service", "Development tool", "All of the above"],
    answer: 3,
    explanation: "Amazon CodeWhisperer is an AI-powered coding assistant that helps developers write code more efficiently."
  },
  {
    id: 123,
    question: "Which AWS service is used for location-based services?",
    options: ["Amazon Location Service", "AWS IoT Core", "Amazon Kinesis", "AWS Lambda"],
    answer: 0,
    explanation: "Amazon Location Service provides location-based services including maps, places, routes, and tracking."
  },
  {
    id: 124,
    question: "What is AWS Panorama?",
    options: ["Computer vision service", "Edge computing service", "Machine learning service", "All of the above"],
    answer: 3,
    explanation: "AWS Panorama is a service that brings computer vision to on-premises cameras using machine learning."
  },
  {
    id: 125,
    question: "Which AWS service is used for supply chain management?",
    options: ["AWS Supply Chain", "Amazon Forecast", "AWS IoT Core", "All of the above"],
    answer: 3,
    explanation: "AWS provides multiple services for supply chain management including dedicated Supply Chain services and IoT solutions."
  },
  {
    id: 126,
    question: "What is Amazon MemoryDB?",
    options: ["In-memory database", "Redis-compatible database", "Durable database", "All of the above"],
    answer: 3,
    explanation: "Amazon MemoryDB is a Redis-compatible, durable, in-memory database service that provides ultra-fast performance."
  },
  {
    id: 127,
    question: "Which AWS service is used for governance?",
    options: ["AWS Control Tower", "AWS Config", "AWS Organizations", "All of the above"],
    answer: 3,
    explanation: "AWS provides multiple governance services including Control Tower for account setup, Config for compliance, and Organizations for management."
  },
  {
    id: 128,
    question: "What is AWS Clean Rooms?",
    options: ["Data collaboration service", "Privacy-preserving analytics", "Secure data sharing", "All of the above"],
    answer: 3,
    explanation: "AWS Clean Rooms is a service that helps companies collaborate on analytics while keeping underlying data private."
  },
  {
    id: 129,
    question: "Which AWS service is used for identity verification?",
    options: ["Amazon Verified Permissions", "AWS IAM Identity Center", "Amazon Cognito", "All of the above"],
    answer: 3,
    explanation: "AWS provides multiple identity services including Verified Permissions for authorization, IAM Identity Center for workforce identity, and Cognito for customer identity."
  },
  {
    id: 130,
    question: "What is Amazon Omics?",
    options: ["Genomics service", "Bioinformatics service", "Life sciences service", "All of the above"],
    answer: 3,
    explanation: "Amazon Omics is a purpose-built service for storing, querying, and analyzing genomic, transcriptomic, and other omics data."
  },
  {
    id: 131,
    question: "Which AWS service is used for payment processing?",
    options: ["Amazon Payment Cryptography", "AWS Billing", "Amazon Marketplace", "All of the above"],
    answer: 3,
    explanation: "AWS provides multiple payment-related services including Payment Cryptography for secure payment processing."
  },
  {
    id: 132,
    question: "What is AWS Private 5G?",
    options: ["Private network service", "5G network service", "Edge computing service", "All of the above"],
    answer: 3,
    explanation: "AWS Private 5G is a managed service that makes it easy to deploy, operate, and scale private 5G networks."
  },
  {
    id: 133,
    question: "Which AWS service is used for simulation?",
    options: ["AWS SimSpace Weaver", "Amazon GameLift", "AWS RoboMaker", "All of the above"],
    answer: 3,
    explanation: "AWS provides multiple simulation services including SimSpace Weaver for large-scale simulations and RoboMaker for robotics simulation."
  },
  {
    id: 134,
    question: "What is Amazon Security Lake?",
    options: ["Security data lake", "Log aggregation service", "Security analytics service", "All of the above"],
    answer: 3,
    explanation: "Amazon Security Lake is a purpose-built data lake service that automatically centralizes security data from multiple sources."
  },
  {
    id: 135,
    question: "Which AWS service is used for video streaming?",
    options: ["Amazon Kinesis Video Streams", "AWS Elemental MediaLive", "Amazon CloudFront", "All of the above"],
    answer: 3,
    explanation: "AWS provides multiple video streaming services including Kinesis Video Streams for ingestion, MediaLive for processing, and CloudFront for delivery."
  },
  {
    id: 136,
    question: "What is AWS Migration Hub?",
    options: ["Migration tracking service", "Migration planning service", "Migration automation service", "All of the above"],
    answer: 3,
    explanation: "AWS Migration Hub provides a single location to track migration progress and discover migration tools."
  },
  {
    id: 137,
    question: "Which AWS service is used for resource optimization?",
    options: ["AWS Compute Optimizer", "AWS Trusted Advisor", "AWS Cost Explorer", "All of the above"],
    answer: 3,
    explanation: "AWS provides multiple optimization services including Compute Optimizer for resource recommendations and Trusted Advisor for best practices."
  },
  {
    id: 138,
    question: "What is Amazon AppFlow?",
    options: ["Data integration service", "SaaS integration service", "ETL service", "All of the above"],
    answer: 3,
    explanation: "Amazon AppFlow is a fully managed integration service that enables secure transfer of data between SaaS applications and AWS services."
  },
  {
    id: 139,
    question: "Which AWS service is used for mainframe modernization?",
    options: ["AWS Mainframe Modernization", "AWS Migration Hub", "AWS Database Migration Service", "All of the above"],
    answer: 3,
    explanation: "AWS provides multiple mainframe modernization services including dedicated Mainframe Modernization service and migration tools."
  },
  {
    id: 140,
    question: "What is AWS Wickr?",
    options: ["Secure messaging service", "Communication service", "Collaboration service", "All of the above"],
    answer: 3,
    explanation: "AWS Wickr is an end-to-end encrypted messaging service designed for secure communications."
  },
  {
    id: 141,
    question: "Which AWS service is used for threat detection?",
    options: ["Amazon GuardDuty", "Amazon Inspector", "AWS Security Hub", "All of the above"],
    answer: 3,
    explanation: "AWS provides multiple threat detection services including GuardDuty for threat intelligence, Inspector for vulnerability assessment, and Security Hub for centralized security findings."
  },
  {
    id: 142,
    question: "What is Amazon Braket?",
    options: ["Quantum computing service", "Research service", "Development service", "All of the above"],
    answer: 3,
    explanation: "Amazon Braket is a quantum computing service that provides access to quantum computers from multiple quantum hardware providers."
  },
  {
    id: 143,
    question: "Which AWS service is used for disaster recovery testing?",
    options: ["AWS Elastic Disaster Recovery", "AWS Backup", "AWS CloudFormation", "All of the above"],
    answer: 3,
    explanation: "AWS provides multiple disaster recovery services including Elastic Disaster Recovery for application-level DR and CloudFormation for infrastructure recovery."
  },
  {
    id: 144,
    question: "What is Amazon Managed Grafana?",
    options: ["Monitoring service", "Visualization service", "Analytics service", "All of the above"],
    answer: 3,
    explanation: "Amazon Managed Grafana is a fully managed service for Grafana, a popular open-source analytics and monitoring solution."
  },
  {
    id: 145,
    question: "Which AWS service is used for digital user engagement?",
    options: ["Amazon Pinpoint", "Amazon SES", "Amazon SNS", "All of the above"],
    answer: 3,
    explanation: "AWS provides multiple digital engagement services including Pinpoint for targeted messaging, SES for email, and SNS for notifications."
  },
  {
    id: 146,
    question: "What is AWS Nitro System?",
    options: ["Hardware platform", "Virtualization platform", "Security platform", "All of the above"],
    answer: 3,
    explanation: "AWS Nitro System is the underlying platform for EC2 instances that provides enhanced security, performance, and innovation."
  },
  {
    id: 147,
    question: "Which AWS service is used for container security?",
    options: ["Amazon Inspector", "AWS Security Hub", "Amazon GuardDuty", "All of the above"],
    answer: 3,
    explanation: "AWS provides multiple container security services including Inspector for vulnerability assessment and GuardDuty for threat detection."
  },
  {
    id: 148,
    question: "What is Amazon Managed Prometheus?",
    options: ["Monitoring service", "Metrics service", "Observability service", "All of the above"],
    answer: 3,
    explanation: "Amazon Managed Prometheus is a Prometheus-compatible monitoring service for container metrics at scale."
  },
  {
    id: 149,
    question: "Which AWS service is used for compliance management?",
    options: ["AWS Config", "AWS Security Hub", "AWS Audit Manager", "All of the above"],
    answer: 3,
    explanation: "AWS provides multiple compliance services including Config for configuration compliance, Security Hub for security standards, and Audit Manager for audit preparation."
  },
  {
    id: 150,
    question: "What is Amazon Elastic Kubernetes Service (EKS)?",
    options: ["Container orchestration service", "Kubernetes service", "Managed service", "All of the above"],
    answer: 3,
    explanation: "Amazon EKS is a managed Kubernetes service that makes it easy to run Kubernetes on AWS without needing to install and operate your own Kubernetes control plane."
  },
  {
    id: 151,
    question: "Which AWS service is used for real-time communication?",
    options: ["Amazon Chime SDK", "Amazon Kinesis", "AWS IoT Core", "All of the above"],
    answer: 3,
    explanation: "AWS provides multiple real-time communication services including Chime SDK for voice/video, Kinesis for streaming data, and IoT Core for device communication."
  },
  {
    id: 152,
    question: "What is AWS Well-Architected Tool?",
    options: ["Architecture review tool", "Best practices tool", "Assessment tool", "All of the above"],
    answer: 3,
    explanation: "AWS Well-Architected Tool helps you review your architectures against AWS best practices and provides improvement recommendations."
  },
  {
    id: 153,
    question: "Which AWS service is used for file storage?",
    options: ["Amazon EFS", "Amazon FSx", "Amazon S3", "All of the above"],
    answer: 3,
    explanation: "AWS provides multiple file storage services including EFS for NFS, FSx for high-performance workloads, and S3 for object storage."
  },
  {
    id: 154,
    question: "What is Amazon Redshift Serverless?",
    options: ["Serverless data warehouse", "Analytics service", "Data processing service", "All of the above"],
    answer: 3,
    explanation: "Amazon Redshift Serverless is a serverless option for Amazon Redshift that automatically provisions and scales data warehouse capacity."
  },
  {
    id: 155,
    question: "Which AWS service is used for patch management?",
    options: ["AWS Systems Manager", "AWS Config", "Amazon Inspector", "All of the above"],
    answer: 3,
    explanation: "AWS provides multiple patch management services including Systems Manager for automated patching, Config for compliance tracking, and Inspector for vulnerability assessment."
  },
  {
    id: 156,
    question: "What is Amazon Connect Voice ID?",
    options: ["Voice authentication service", "Fraud prevention service", "Contact center service", "All of the above"],
    answer: 3,
    explanation: "Amazon Connect Voice ID is a machine learning-powered service that provides real-time caller authentication and fraud risk detection."
  },
  {
    id: 157,
    question: "Which AWS service is used for event sourcing?",
    options: ["Amazon EventBridge", "Amazon Kinesis", "Amazon DynamoDB", "All of the above"],
    answer: 3,
    explanation: "Event sourcing in AWS can use EventBridge for event routing, Kinesis for event streaming, and DynamoDB for event storage."
  },
  {
    id: 158,
    question: "What is AWS Outposts?",
    options: ["Hybrid cloud service", "Edge computing service", "On-premises service", "All of the above"],
    answer: 3,
    explanation: "AWS Outposts is a fully managed service that extends AWS infrastructure, services, and tools to virtually any datacenter or on-premises facility."
  },
  {
    id: 159,
    question: "Which AWS service is used for data cataloging?",
    options: ["AWS Glue Data Catalog", "Amazon Athena", "AWS Lake Formation", "All of the above"],
    answer: 3,
    explanation: "AWS provides multiple data cataloging services including Glue Data Catalog for metadata management, Athena for querying, and Lake Formation for data lake management."
  },
  {
    id: 160,
    question: "What is Amazon Managed Workflows for Apache Airflow?",
    options: ["Workflow orchestration service", "Data pipeline service", "ETL service", "All of the above"],
    answer: 3,
    explanation: "Amazon MWAA is a managed orchestration service for Apache Airflow that makes it easier to set up and operate end-to-end data pipelines."
  },
  {
    id: 161,
    question: "Which AWS service is used for container image vulnerability scanning?",
    options: ["Amazon Inspector", "Amazon ECR", "AWS Security Hub", "All of the above"],
    answer: 3,
    explanation: "AWS provides container image vulnerability scanning through Inspector, ECR image scanning, and Security Hub for centralized findings."
  },
  {
    id: 162,
    question: "What is Amazon CloudSearch?",
    options: ["Search service", "Indexing service", "Query service", "All of the above"],
    answer: 3,
    explanation: "Amazon CloudSearch is a managed search service that makes it easy to set up, manage, and scale search solutions for websites and applications."
  },
  {
    id: 163,
    question: "Which AWS service is used for log analysis?",
    options: ["Amazon CloudWatch Logs", "Amazon OpenSearch", "AWS CloudTrail", "All of the above"],
    answer: 3,
    explanation: "AWS provides multiple log analysis services including CloudWatch Logs for monitoring, OpenSearch for analytics, and CloudTrail for API activity analysis."
  },
  {
    id: 164,
    question: "What is AWS Resource Groups?",
    options: ["Resource organization service", "Resource management service", "Resource tagging service", "All of the above"],
    answer: 3,
    explanation: "AWS Resource Groups helps you organize and manage AWS resources by grouping resources that share common tags or belong to the same application."
  },
  {
    id: 165,
    question: "Which AWS service is used for application performance monitoring?",
    options: ["Amazon CloudWatch", "AWS X-Ray", "Amazon Inspector", "All of the above"],
    answer: 3,
    explanation: "AWS provides multiple APM services including CloudWatch for metrics, X-Ray for distributed tracing, and Inspector for application assessment."
  },
  {
    id: 166,
    question: "What is Amazon Elastic File System (EFS)?",
    options: ["Network file system", "Shared file storage", "Scalable file storage", "All of the above"],
    answer: 3,
    explanation: "Amazon EFS is a fully managed NFS file system that provides scalable, shared file storage for EC2 instances."
  },
  {
    id: 167,
    question: "Which AWS service is used for database performance monitoring?",
    options: ["Amazon RDS Performance Insights", "Amazon CloudWatch", "AWS X-Ray", "All of the above"],
    answer: 3,
    explanation: "AWS provides multiple database monitoring services including RDS Performance Insights for database-specific metrics and CloudWatch for general monitoring."
  },
  {
    id: 168,
    question: "What is AWS Transfer Family?",
    options: ["File transfer service", "SFTP service", "Data migration service", "All of the above"],
    answer: 3,
    explanation: "AWS Transfer Family provides fully managed file transfer services that support SFTP, FTPS, and FTP protocols."
  },
  {
    id: 169,
    question: "Which AWS service is used for API throttling?",
    options: ["Amazon API Gateway", "AWS WAF", "Amazon CloudFront", "All of the above"],
    answer: 3,
    explanation: "API throttling can be implemented using API Gateway for API-level throttling, WAF for rate limiting, and CloudFront for request rate control."
  },
  {
    id: 170,
    question: "What is Amazon Managed Service for Prometheus?",
    options: ["Monitoring service", "Metrics collection service", "Observability service", "All of the above"],
    answer: 3,
    explanation: "Amazon Managed Service for Prometheus is a Prometheus-compatible monitoring service for container environments."
  },
  {
    id: 171,
    question: "Which AWS service is used for secrets rotation?",
    options: ["AWS Secrets Manager", "AWS Systems Manager", "AWS Lambda", "All of the above"],
    answer: 3,
    explanation: "Secrets rotation can be implemented using Secrets Manager for automatic rotation, Systems Manager for parameter management, and Lambda for custom rotation logic."
  },
  {
    id: 172,
    question: "What is Amazon Detective?",
    options: ["Security investigation service", "Threat analysis service", "Incident response service", "All of the above"],
    answer: 3,
    explanation: "Amazon Detective is a security investigation service that makes it easy to analyze, investigate, and quickly identify the root cause of security findings."
  },
  {
    id: 173,
    question: "Which AWS service is used for capacity planning?",
    options: ["AWS Compute Optimizer", "Amazon CloudWatch", "AWS Trusted Advisor", "All of the above"],
    answer: 3,
    explanation: "AWS provides multiple capacity planning services including Compute Optimizer for resource recommendations, CloudWatch for monitoring, and Trusted Advisor for optimization guidance."
  },
  {
    id: 174,
    question: "What is Amazon Elastic Container Registry (ECR)?",
    options: ["Container registry", "Docker registry", "Image storage service", "All of the above"],
    answer: 3,
    explanation: "Amazon ECR is a fully managed Docker container registry that makes it easy to store, manage, and deploy Docker container images."
  },
  {
    id: 175,
    question: "Which AWS service is used for network load balancing?",
    options: ["Network Load Balancer", "Application Load Balancer", "Classic Load Balancer", "All of the above"],
    answer: 3,
    explanation: "AWS provides multiple load balancing options including Network Load Balancer for Layer 4, Application Load Balancer for Layer 7, and Classic Load Balancer for legacy applications."
  },
  {
    id: 176,
    question: "What is AWS Systems Manager Session Manager?",
    options: ["Remote access service", "Shell access service", "Management service", "All of the above"],
    answer: 3,
    explanation: "AWS Systems Manager Session Manager provides secure shell access to EC2 instances without the need for SSH keys or bastion hosts."
  },
  {
    id: 177,
    question: "Which AWS service is used for database migration?",
    options: ["AWS Database Migration Service", "AWS DataSync", "AWS Snow Family", "All of the above"],
    answer: 3,
    explanation: "AWS provides multiple database migration services including DMS for database migration, DataSync for data transfer, and Snow Family for large-scale migrations."
  },
  {
    id: 178,
    question: "What is Amazon Elastic Transcoder?",
    options: ["Media processing service", "Video transcoding service", "Audio processing service", "All of the above"],
    answer: 3,
    explanation: "Amazon Elastic Transcoder is a media transcoding service that converts media files from their source format into versions that will playback on various devices."
  },
  {
    id: 179,
    question: "Which AWS service is used for distributed caching?",
    options: ["Amazon ElastiCache", "Amazon CloudFront", "AWS Global Accelerator", "All of the above"],
    answer: 3,
    explanation: "AWS provides multiple caching services including ElastiCache for application-level caching, CloudFront for content caching, and Global Accelerator for network optimization."
  },
  {
    id: 180,
    question: "What is AWS Health Dashboard?",
    options: ["Service health monitoring", "Personal health dashboard", "Status page", "All of the above"],
    answer: 3,
    explanation: "AWS Health Dashboard provides personalized information about the health of AWS services and resources in your account."
  }
];

export {questions};