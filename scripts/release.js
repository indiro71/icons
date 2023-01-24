const fs = require('fs-extra');
const path = require('path');
const execSync = require('child_process').execSync;

const exec = command => execSync(command, { stdio: 'inherit' });

const BUILD_PATH = path.join(__dirname, '..', 'lib');


const publishLib = async () => {
  console.log('publish')

  exec('npm run build');
  exec('git stash');
  exec('npm version patch');
  exec('git stash pop');
  await fs.copyFile(path.join(__dirname, '..', 'package.json'), path.join(BUILD_PATH, 'package.json'));
  exec('git status');
  exec('git add -A');
  exec('git commit -m "Add images"');
  exec('git push');
  exec(`cd ${BUILD_PATH} && npm publish --access=public`);
}

publishLib();