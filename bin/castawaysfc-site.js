#!/usr/bin/env node

const cdk = require('aws-cdk-lib');
const { CastawaysfcSiteStack } = require('../lib/castawaysfc-site-stack');

const app = new cdk.App();
new CastawaysfcSiteStack(app, 'CastawaysfcSiteStack', {
  env: {
    // Specify the AWS account and region for the stack deployment
    // This is optional; if not specified, the stack will be environment-agnostic.
    account: process.env.CDK_DEFAULT_ACCOUNT,
    region: process.env.CDK_DEFAULT_REGION,

    // Custom environment variables can be passed here
    S3_BUCKET_NAME: process.env.S3_BUCKET_NAME || 'castaways-public',
  }
  /* For more information, see https://docs.aws.amazon.com/cdk/latest/guide/environments.html */
});
