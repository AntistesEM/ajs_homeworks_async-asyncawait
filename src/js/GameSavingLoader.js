import json from './parser';
import read from './reader';

export default class GameSavingLoader {
  static async load() {
    const readData = await read();
    const jsonData = await json(readData);

    return jsonData;
  }
}
