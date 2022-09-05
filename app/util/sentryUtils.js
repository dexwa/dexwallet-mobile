/* eslint-disable import/no-namespace */
import * as Sentry from '@sentry/react-native';
import { Dedupe, ExtraErrorData } from '@sentry/integrations';

const METAMASK_ENVIRONMENT = 'production'; // eslint-disable-line dot-notation
const SENTRY_DSN_PROD =
  'https://acd50db992874487a28e5e7e2ea9c98c@o1395217.ingest.sentry.io/6719156'; // metamask-mobile
const SENTRY_DSN_DEV =
  'https://acd50db992874487a28e5e7e2ea9c98c@o1395217.ingest.sentry.io/6719156'; // test-metamask-mobile
/**
 * Required instrumentation for Sentry Performance to work with React Navigation
 */
export const routingInstrumentation =
  new Sentry.ReactNavigationV5Instrumentation();

// Setup sentry remote error reporting
export function setupSentry() {
  const environment =
    __DEV__ || !METAMASK_ENVIRONMENT ? 'development' : METAMASK_ENVIRONMENT;
  const dsn = environment === 'production' ? SENTRY_DSN_PROD : SENTRY_DSN_DEV;
  Sentry.init({
    dsn,
    debug: __DEV__,
    environment,
    enabled:false,
    integrations: [
      new Dedupe(),
      new ExtraErrorData(),
      new Sentry.ReactNativeTracing({
        routingInstrumentation,
      }),
    ],
    tracesSampleRate: 0.2,
  });
}

// eslint-disable-next-line no-empty-function
export function deleteSentryData() {}
