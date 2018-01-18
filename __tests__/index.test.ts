import * as logger from '../lib/index';
logger.options.enabled = true;

test('logger', () => {
  const log = logger.getLogger('label');
  log.warn('warn log');
  log.info('info log');
  log.error('error log');
  log.debug('debug log');
  const log2 = logger.getLogger('label');
  expect(log).toBe(log2);
  logger.options.enabled = false;
  log.info('not shown');
});

test('logger disabled', () => {  
  logger.options.enabled = false;
  const log = logger.getLogger('label');
  log.info('not shown');
});
