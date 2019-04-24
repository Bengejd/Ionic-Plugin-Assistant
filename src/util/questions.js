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
      message: 'What is your plugins name? Example: image-picker',
      type: 'input',
    },
    {
      name: 'AUTHOR_NAME',
      message: 'What is your name? Tip: Your github username is always a good choice.',
      type: 'input',
    },
    {
      name: 'PLATFORMS',
      message: 'What devices are you targeting?',
      type: 'checkbox',
      choices: ['iOS', 'Android'],
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
    global.PASCAL_NAME = '';

    if (opts.CONFIRM === 'YES') resolve();
    else reject('IPA Aborted: Because you did not confirm choices.');
  });
}
