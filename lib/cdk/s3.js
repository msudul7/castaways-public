/**
 * Builds the S3 resources for the Castways FC Site stack.
 */
const s3 = require('aws-cdk-lib/aws-s3');
const { CfnOutput, RemovalPolicy } = require('aws-cdk-lib');

function s3Setup(scope, props) {
  console.log('Setting up S3 resources...');


  /**
   * Creates an Amazon S3 bucket named according to the provided environment variable.
   *
   * Bucket configuration:
   * - Access control: Bucket owner preferred.
   * - Public access: Blocked except for ACLs only.
   * - Encryption: S3 managed encryption.
   * - Removal policy: Bucket and its contents are destroyed upon stack deletion.
   * - Auto-delete objects: Enabled.
   * - CORS: Allows all origins, all headers, and HTTP methods GET, PUT, POST, DELETE.
   *
   * @type {s3.Bucket}
   * @param {Construct} scope - The scope in which this resource is defined.
   * @param {string} id - The scoped construct ID.
   * @param {Object} props - Properties for bucket configuration.
   * @param {Object} props.env - Environment variables, including S3_BUCKET_NAME.
   */
  const castawaysfcDistBucket = new s3.Bucket(scope, 'CastawaysFCDistBucket', {
    bucketName: `${props.env.S3_BUCKET_NAME}`,
    accessControl: s3.BucketAccessControl.BUCKET_OWNER_PREFERRED,
    blockPublicAccess: s3.BlockPublicAccess.BLOCK_ACLS_ONLY,
    encryption: s3.BucketEncryption.S3_MANAGED,
    removalPolicy: RemovalPolicy.DESTROY,
    autoDeleteObjects: true,
    cors: [
      {
        allowedOrigins: ['*'],
        allowedMethods: [s3.HttpMethods.GET, s3.HttpMethods.PUT, s3.HttpMethods.POST, s3.HttpMethods.DELETE],
        allowedHeaders: ['*'],
      }
    ],
  });

  /**
   * Amazon S3 bucket for storing CastwaysFC logs.
   *
   * @constant
   * @type {s3.Bucket}
   * @name castwaysfcLogsBucket
   * @description
   *   - Bucket name is derived from the environment variable `S3_BUCKET_NAME` with a `-logs` suffix.
   *   - Access control is set to prefer the bucket owner.
   *   - Public access is blocked except for ACLs.
   *   - The bucket and its objects are automatically deleted when the stack is destroyed.
   *   - Object ownership is set to bucket owner preferred.
   */
  const castwaysfcLogsBucket = new s3.Bucket(scope, 'CastwaysFCLogsBucket', {
    bucketName: `${props.env.S3_BUCKET_NAME}-logs`,
    accessControl: s3.BucketAccessControl.BUCKET_OWNER_PREFERRED,
    blockPublicAccess: s3.BlockPublicAccess.BLOCK_ACLS_ONLY,
    removalPolicy: RemovalPolicy.DESTROY,
    autoDeleteObjects: true,
    objectOwnership: s3.ObjectOwnership.BUCKET_OWNER_PREFERRED,
  });

  // Outputs
  new CfnOutput(scope, 'CastwaysFCDistBucketName', {
    value: castawaysfcDistBucket.bucketName,
    description: 'Castaways FC Distribution Bucket',
    exportName: 'CastwaysFCDistBucketName'
  });
  new CfnOutput(scope, 'CastawaysFCLogsBucket', {
    value: castwaysfcLogsBucket.bucketName,
    description: 'Castaways FC Log Bucket',
    exportName: 'CastawaysFCLogsBucket'
  });

  return {
    castawaysfcDistBucket: castawaysfcDistBucket,
    castwaysfcLogsBucket: castwaysfcLogsBucket,
  };
}

module.exports = {
  s3Setup,
}