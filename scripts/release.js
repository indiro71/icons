const fs = require('fs-extra');
const path = require('path');
const execSync = require('child_process').execSync;
const pkg = require('../package.json');

const exec = command => execSync(command, { stdio: 'inherit' });

const BUILD_PATH = path.join(__dirname, '..', 'lib');

const getPackageJsonSource = () => `{
  "name": "${pkg.name}",
  "version": "${pkg.version}",
  "main": "${pkg.main}",
  "types": "${pkg.types}",
  "homepage": "${pkg.homepage}",
  "repository": ${pkg.repository},
  "author": "${pkg.author}",
  "license": "${pkg.license}",
  "keywords": ${pkg.keywords}
}`;

const publishLib = async () => {
  const pj = {
    filepath: 'package.json',
    source: getPackageJsonSource()
  }

  await fs.outputFile(path.join(BUILD_PATH, pj.filepath), pj.source);
  await fs.copyFile(path.join(__dirname, '..', 'README.md'), path.join(BUILD_PATH, 'README.md'));
  console.log('publish')

  exec('git status');
  exec('git add -A');
  exec('git commit -m "Add images"');
  exec('git push');
  exec(`cd ${BUILD_PATH} && npm publish --access=public`);
}

await publishLib();