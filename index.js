import getFormatter from './formatters/index.js';
import parse from './src/parsers.js';
import diffAST from './src/diffAST.js';

const genDiff = (pathToFile1, pathToFile2, format = 'stylish') => {
  const obj1 = parse(pathToFile1);
  const obj2 = parse(pathToFile2);
  const AST = diffAST(obj1, obj2);
  const formatter = getFormatter(format);
  const formatted = formatter(AST);
  return formatted;
};

export default genDiff;
