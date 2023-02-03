import * as fs from 'fs';

export const folderChecking = (dir: string): Promise<void> => {
  return new Promise((resolve) => {
    if (fs.existsSync(dir)) resolve();
    else {
      fs.mkdirSync(dir);
      resolve();
    }
  });
};
