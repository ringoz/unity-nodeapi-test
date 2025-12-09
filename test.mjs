import { hello } from './unode-module/index.mjs';

console.log('Hello from Node.js');
hello();

while (true) {
  console.log(Date.now());
  queueMicrotask(() => console.log('a'));
  await Promise.resolve();
  queueMicrotask(() => console.log('b'));
  await new Promise(setTimeout);
}
