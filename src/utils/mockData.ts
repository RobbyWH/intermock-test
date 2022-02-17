import {mock} from 'intermock';
import * as fs from 'fs';

interface GenerateMockDataProps {
  filePath: string;
  interfaces: Array<string>;
}

export const generateMockData = (props: GenerateMockDataProps): any => {
  const {filePath, interfaces} = props || {};
  const mck = mock({
    files: [  [
      filePath,
      fs.readFileSync(filePath, 'utf-8')
    ],],
    interfaces,
    isFixedMode: true,
    output: 'object'
  });

  return mck;
}