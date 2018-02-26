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
});

test('logger with obj', () => {
  const log = logger.getLogger('obj');
  log.warn({ hidden: true }, '[hidden]warn log');
  log.info({ hidden: true }, '[hidden]info log');
  log.error({ hidden: true }, '[hidden]error log');
  log.debug({ hidden: true }, '[hidden]debug log');
  log.warn({ hidden: true });
  log.info({ hidden: true });
  log.error({ hidden: true });
  log.debug({ hidden: true });
});

test('logger disabled', () => {
  logger.options.enabled = false;
  const log = logger.getLogger('label');
  log.info('not shown');
  logger.options.enabled = true;
});

