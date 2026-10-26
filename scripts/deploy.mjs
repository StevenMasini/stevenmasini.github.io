import { execSync } from 'node:child_process';
import { existsSync, rmSync } from 'node:fs';
import { resolve } from 'node:path';

const distDir = resolve(process.cwd(), 'dist');

if (!existsSync(distDir)) {
  console.error('Error: dist/ directory not found. Run "npm run build" first.');
  process.exit(1);
}

const remoteUrl = execSync('git config --get remote.origin.url', {
  encoding: 'utf-8',
}).trim();

if (!remoteUrl) {
  console.error('Error: No git remote "origin" found.');
  process.exit(1);
}

const distGitDir = resolve(distDir, '.git');
if (existsSync(distGitDir)) {
  rmSync(distGitDir, { recursive: true, force: true });
}

const timestamp = new Date().toISOString().replace('T', ' ').slice(0, 16);

try {
  console.log(`Deploying static build from ./dist to ${remoteUrl} (master)...`);
  execSync('git init', { cwd: distDir, stdio: 'inherit' });
  execSync('git add -A', { cwd: distDir, stdio: 'inherit' });
  execSync(`git commit -m "Deploy Astro portfolio ${timestamp}"`, {
    cwd: distDir,
    stdio: 'inherit',
  });
  execSync(`git push -f "${remoteUrl}" HEAD:refs/heads/master`, {
    cwd: distDir,
    stdio: 'inherit',
  });
  console.log('✅ Successfully deployed to master! https://stevenmasini.github.io will update in ~30-60 seconds.');
} finally {
  if (existsSync(distGitDir)) {
    rmSync(distGitDir, { recursive: true, force: true });
  }
}
