import Library from './modules/library.js';
import hundalNavigationClick from './modules/navigation.js';
import getDateAndTime from './modules/dateAndTime.js';

const library = new Library();
library.displayLibrary();

hundalNavigationClick();

getDateAndTime();
