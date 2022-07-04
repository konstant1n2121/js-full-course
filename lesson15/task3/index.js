const createLogger = () => {
  const warns = [];
  const logs = [];
  const errors = [];

  const warn = text => {
    warns.push({ message: text, dateTime: new Date(), type: 'warn' });
  };
  const log = text => {
    logs.push({ message: text, dateTime: new Date(), type: 'log' });
  };
  const error = text => {
    errors.push({ message: text, dateTime: new Date(), type: 'error' });
  };
  const getRecords = typ => {
    const arr = [...warns, ...logs, ...errors].sort(
      (a, b) => new Date(b.dateTime).getTime() - new Date(a.dateTime).getTime(),
    );
    return typ ? arr.filter(el => el.type === typ) : arr;
  };

  return {
    warn,
    error,
    log,
    getRecords,
  };
};
const logger = createLogger();
logger.log('User logged in');
logger.warn('User is trying to enter restricted page');
logger.log('User logged out');
logger.error('Unexpected error on the site');

// logger.getRecords().forEach(e => console.log(e));

console.log(logger.getRecords());
console.log(logger.getRecords('log'));
console.log(logger.getRecords('error'));
console.log(logger.getRecords('warn'));
