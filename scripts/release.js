const fs = require('fs-extra');
const path = require('path');
const execSync = require('child_process').execSync;
const version = require('../package.json').version;

const exec = command => execSync(command, { stdio: 'inherit' });

const BUILD_PATH = path.join(__dirname, '..', 'lib');

const getPackageJsonSource = ({ version }) => `{
  "name": "@indiro/react-icons",
  "version": "${version}",
  "peerDependencies": {
    "react": ">=16.2.0",
    "react-native-web": ">=0.3.4"
  }
}`;

const publishLib = () => {
  const pj = {
    filepath: 'package.json',
    source: getPackageJsonSource({ version })
  }

  fs.outputFile(path.join(BUILD_PATH, pj.filepath), pj.source);

  console.log('publish')

  exec('git status');
  exec('git add -A');
  exec('git commit -m "Add images"');
  exec('git push');
  exec(`cd ${BUILD_PATH} && npm publish --access=public`);
}

publishLib();