import {TypeA} from './types';

const test = (id: number, name: string): TypeA => {
  return {
    info: {
      id,
      name
    }
  }
} 

export default test;