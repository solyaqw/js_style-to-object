'use strict';

/**
 * @param {string} sourceString
 *
 * @return {object}
 */
function convertToObject(sourceString) {
  const styleObject = {};
  const lines = sourceString.split(';').filter((line) => line.trim());

  for (const line of lines) {
    const [key, value] = line.split(':').map((part) => part && part.trim());

    if (key && value) {
      styleObject[key] = value.replace(';', '');
    }
  }

  return styleObject;
}

module.exports = convertToObject;
