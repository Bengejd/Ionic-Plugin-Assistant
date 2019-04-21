const log = require('clg-color');
const inquirer = require('inquirer');

/**
 * Asks the user some config questions.
 * @returns Promise<Object>;
 */
export async function configQuestions() {
  /* istanbul ignore next */
  const questions = [
    {
      name: 'PLUGIN_NAME',
      message: 'What is your plugins name?',
      type: 'input',
    },
    {
      name: 'AUTHOR_NAME',
      message: 'What is your name?',
      type: 'input',
    },
    {
      name: 'PLATFORMS',
      message: 'What devices are you targeting?',
      type: 'list',
      choices: ['All', 'Android', 'Browser', 'iOS', 'Windows'],
    },
    {
      name: 'CONFIRM',
      type: 'list',
      message: 'Are you sure you want to proceed with this configuration?',
      when(ANS) {
        log.info(`
        PLUGIN_NAME: ${ANS.PLUGIN_NAME}
        AUTHOR_NAME: ${ANS.AUTHOR_NAME}
        PLATFORMS: ${ANS.PLATFORMS}
        `);
        return true;
      },
      choices: ['YES', 'NO'],
    },
  ];

  const answers = await inquirer.prompt(questions);
  return setOptions(answers);
}

/**
 * Sets the package config options.
 * @param {object} opts - The question answers that we receive.
 * @returns Promise;
 */

export function setOptions(opts) {
  /* istanbul ignore next */
  return new Promise((resolve, reject) => {

    global.PLUGIN_NAME = opts.PLUGIN_NAME.trim();
    global.AUTHOR_NAME = opts.AUTHOR_NAME.trim();
    global.PLATFORMS = opts.PLATFORMS;

    if (opts.CONFIRM === 'YES') resolve(opts);
    else reject('IPA Aborted: Because you did not confirm choices.');
  });
}
