import { configQuestions } from './util/questions';
import {setPluginNames} from './util/namer';
async function init() {

  try {
    configQuestions()
      .then(() => {
        setPluginNames()
    })
  } catch (err) {
    log.error(err);
  }
}

init();
