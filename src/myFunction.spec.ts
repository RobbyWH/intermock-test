import myFunction from './myFunction';
import {generateMockData} from './utils/mockData';
import * as path from 'path';

describe('generate mocked types', () => {
  it('should generate mocked types', () => {
      const mockData = generateMockData({
        filePath: path.join(__dirname, 'types.ts'),
        interfaces: ['TypeA'],
      });
      console.log(mockData)
      const typeA = mockData.TypeA;
      const {info} = typeA || {};
      const {id, name} = info || {};
      expect(myFunction(id, name)).toEqual({
        info: {
          id,
          name,
        }
      });
  })
})