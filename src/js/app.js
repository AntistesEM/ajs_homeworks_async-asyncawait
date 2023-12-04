import GameSavingLoader from './GameSavingLoader';
import GameSaving from './GameSaving';

(async () => {
  try {
    const saving = await GameSavingLoader.load();
    const data = JSON.parse(saving);

    return new GameSaving(data);
  } catch (error) {
    return error;
  }
})();
