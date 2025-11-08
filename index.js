#!/usr/bin/env node
const fs = require("fs-extra");
const path = require("path");
const { execSync } = require("child_process");

const repo = "https://github.com/Abolfazl-JD/Nestjs-ajd-boilderplate.git";
const projectName = process.argv[2] || "nestjs-app";
const dest = path.join(process.cwd(), projectName);

console.log(`📦 Cloning ${repo} into ${projectName}...`);
execSync(`git clone ${repo} ${projectName}`, { stdio: "inherit" });

// Remove old .git folder so user starts fresh
fs.removeSync(path.join(dest, ".git"));

console.log(
    `✅ Done! Now:\n  cd ${projectName}\n  npm install\n  npm run start:dev`,
);
