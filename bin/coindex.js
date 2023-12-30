#!/usr/bin/env node
import { program } from 'commander';
import {pkg} from '../utils/pkg.js';

program
    .version(pkg.version)
    .command('key', 'Manage API key -- https://cryptocointracker.com/')
    .command('check', 'Check coin price info')
    .parse(process.argv)

