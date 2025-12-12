import { hello } from '../unode-module/index.ts';

console.log('Hello from Node.js');
hello('Hello world!');

while (true) {
  console.log(Date.now());
  queueMicrotask(() => console.log('a'));
  await Promise.resolve();
  queueMicrotask(() => console.log('b'));
  await new Promise((resolve) => setTimeout(resolve, 0));
}
