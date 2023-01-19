'use strict';
const fs = require('fs-extra');
const path = require("path");
const version = require('../package.json').version;
/**
 * Template: package.json
 */
const getPackageJsonSource = ({ version }) => `{
  "name": "@indiro/react-icons",
  "version": "${version}",
  "peerDependencies": {
    "react": ">=16.2.0",
    "react-native-web": ">=0.3.4"
  }
}`;
const BUILD_PATH = path.join(__dirname, '..', 'lib');
const createReactPackage = () => {

  const pj = {
    filepath: 'package.json',
    source: getPackageJsonSource({ version })
  }

  fs.outputFile(path.join(BUILD_PATH, pj.filepath), pj.source);

  return {
    name: 'react-icons',
    files
  }
}

module.exports = createReactPackage;
