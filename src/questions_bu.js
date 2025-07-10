// 100 AWS Cloud Practitioner sample questions
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
    question: "What does the AWS shared responsibility model mean?",
    options: ["AWS is responsible for everything", "Customer is responsible for everything", "AWS and the customer share different responsibilities", "There is no responsibility"],
    answer: 2,
    explanation: "The shared responsibility model means AWS manages security OF the cloud, while customers manage security IN the cloud."
  },
  {
    id: 3,
    question: "Which AWS service provides scalable computing capacity in the cloud?",
    options: ["Amazon EC2", "Amazon S3", "Amazon DynamoDB", "Amazon CloudFront"],
    answer: 0,
    explanation: "Amazon EC2 (Elastic Compute Cloud) provides scalable computing capacity."
  },
  {
    id: 4,
    question: "Which service is best for hosting a relational database on AWS?",
    options: ["Amazon S3", "Amazon RDS", "Amazon DynamoDB", "Amazon Redshift"],
    answer: 1,
    explanation: "Amazon RDS (Relational Database Service) is designed for hosting relational databases."
  },
  {
    id: 5,
    question: "What is the main benefit of using AWS CloudFormation?",
    options: ["Automate infrastructure provisioning", "Monitor application performance", "Store large amounts of data", "Distribute content globally"],
    answer: 0,
    explanation: "AWS CloudFormation automates the provisioning of infrastructure as code."
  },
  // ... 95 more questions ...
];

// Generate 95 more placeholder questions for demo
for (let i = 6; i <= 100; i++) {
  questions.push({
    id: i,
    question: `Sample AWS Cloud Practitioner question #${i}?`,
    options: [
      `Option A for Q${i}`,
      `Option B for Q${i}`,
      `Option C for Q${i}`,
      `Option D for Q${i}`
    ],
    answer: i % 4,
    explanation: `Explanation for sample question #${i}.`
  });
}

export default questions;
