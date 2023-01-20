const execSync = require('child_process').execSync;
const exec = command => execSync(command, { stdio: 'inherit' });

const publishLib = async () => {
  console.log('publish')

  exec('git stash');
  exec('npm version patch');
  exec('git stash pop');
  exec('git add -A');
  exec('git commit -m "Add images"');
  exec('git push');
  exec(`npm publish --access=public`);
}

publishLib();