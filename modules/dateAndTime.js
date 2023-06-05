import { DateTime } from '../node_modules/luxon/src/luxon.js';

const getDateTime = () => {
  const dateTime = DateTime.now().toLocaleString(DateTime.DATETIME_MED);
  const dateElement = document.querySelector('.date');
  dateElement.innerHTML = dateTime;
};

export { getDateTime as default };