import { configure } from '@scaffoldly/serverless-express';
import app from './app';

// import { AWS } from '@scaffoldly/serverless-util';
// AWS.config.logger = console;

exports.handler = configure({
  app,
  eventSourceRoutes: {
    AWS_DYNAMODB: '/events/dynamodb',
  },
});
