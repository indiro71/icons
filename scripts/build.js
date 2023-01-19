'use strict';
const fs = require('fs-extra');
const path = require("path");
const execSync = require('child_process').execSync;

const exec = command => execSync(command, { stdio: 'inherit' });

/**
 * Template: package.json
 */

const BUILD_PATH = path.join(__dirname, '..', 'lib');

const createReactPackage = () => {
  console.log(BUILD_PATH);
  exec('npm run clean && npm run svgr && rollup -c');
  const pj = {
    filepath: 'package.json',
    source: getPackageJsonSource({ version })
  }

  fs.outputFile(path.join(BUILD_PATH, pj.filepath), pj.source);
}

createReactPackage();
