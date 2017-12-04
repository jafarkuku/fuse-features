const fs = require('fs');
const express = require('express');

function updateEntryPoint() {
  const entry = {
      default: 'app.js'
    }

  /**
  Return all folders in the specified directory
  */
  const dirToRead= './src/Company';
  var folders= fs.readdirSync(dirToRead);
  folders.shift();
  var looper = folders.map(el => {
    let entryPoint = 'app.js';
    entry[el] = entryPoint
  });
  return entry;
};
