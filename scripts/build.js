const createModulePackage = require('./createModulePackage');
const createReactPackage = require('./createReactPackage');
const del = require('del')
const fs = require('fs-extra');
const path = require('path')
const svgOptimize = require('./svgOptimize');
const version = require('../package.json').version;
// const execSync = require('child_process').execSync;

const BUILD_PATH = path.join(__dirname, '..', 'build');
// const exec = command => execSync(command, { stdio: 'inherit' });

// Build the npm packages
const createPackages = (svgDataList) => {
  // exec('npm version patch');
  const packagers = [ createReactPackage ]; // list other packagers here (createModulePackage)
  const packages = packagers.map((packager) => packager(svgDataList, version));
  del.sync(BUILD_PATH);
  packages.forEach((pack) => {
    console.log(`Building package: "${pack.name}"`);
    pack.files.forEach((file) => {
      fs.outputFile(path.join(BUILD_PATH, pack.name, file.filepath), file.source);
    })
  });
};

svgOptimize('src/*.svg', createPackages);
