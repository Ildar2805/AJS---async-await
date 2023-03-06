import json from './parser';
import read from './reader';

export default class GameSavingLoader {
  static load() {
    return (async () => {
      try {
        const data = await read();
        const value = await json(data);
        return value;
      } catch (e) {
        console.log(e);
      }
      return '';
    })();
  }
}
