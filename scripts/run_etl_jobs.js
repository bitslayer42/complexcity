/* eslint-disable no-console, spaced-comment */
require('dotenv').config();
const processAndValidateArgs = require('./run_etl_jobs/processAndValidateArgs');
const createRunner = require('./run_etl_jobs/createRunner');

// Initialize
const args = processAndValidateArgs(process.argv.slice(2));
const runner = createRunner(args);

// Do the runs
runner.initializeRun();
runner.harvestRunningJobs();
runner.fillJobQueue(args.loadPoints);
process.exit(0);

