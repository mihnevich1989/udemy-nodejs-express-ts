#!/usr/bin/env node
import { getArgs } from './helpers/args.js';
import { printError, printSuccess, printHelp } from './services/log-service.js';
import { saveKeyValue } from './services/storage-service.js';

const saveToken = async (token) => {
	try {
		await saveKeyValue('token', token);
		printSuccess('Token save');
	} catch (e) {
		printError(e.message);
	}
};

const initCLI = () => {
	const args = getArgs(process.argv);
	if (args.h) {
		printHelp();
	}
	if (args.s) {
		// сохранить город
	}
	if (args.t) {
		return saveToken(args.t);
	}
	// вывести погоду
};

initCLI();
