import * as _ from 'lodash';
import * as pino from 'pino';
import * as util from 'util';

export const options = { enabled: process.env.NODE_ENV === 'test' ? false : true };

export interface Logger {
  debug: (s: string | object, ...args: any[]) => void;
  info: (s: string | object, ...args: any[]) => void;
  warn: (s: string | object, ...args: any[]) => void;
  error: (s: string | object, ...args: any[]) => void;
}

const logger = pino({ level: 'debug' });
const cache = new Map();

export function getLogger(label: string): Logger {
  if (!options.enabled) {
    return new Proxy({}, { get: () => _.noop }) as Logger;
  }
  if (cache.has(label)) {
    return cache.get(label);
  }
  const childLogger = logger.child({ label });
  const wrappedLogger = {
    debug: (s: string | object, ...args) => {
      if (typeof s === 'string') {
        childLogger.debug(util.format(s, ...args));
      } else if (args.length > 0) {
        childLogger.debug(s, util.format(args[0], ..._.tail(args)));
      }
    },
    info: (s: string | object, ...args) => {
      if (typeof s === 'string') {
        childLogger.info(util.format(s, ...args));
      } else if (args.length > 0) {
        childLogger.info(s, util.format(args[0], ..._.tail(args)));
      }
    },
    warn: (s: string | object, ...args) => {
      if (typeof s === 'string') {
        childLogger.warn(util.format(s, ...args));
      } else if (args.length > 0) {
        childLogger.warn(s, util.format(args[0], ..._.tail(args)));
      }
    },
    error: (s: string | object, ...args) => {
      if (typeof s === 'string') {
        childLogger.error(util.format(s, ...args));
      } else if (args.length > 0) {
        childLogger.error(s, util.format(args[0], ..._.tail(args)));
      }
    }
  };
  cache.set(label, wrappedLogger);
  return wrappedLogger;
}
