import { hello } from 'net.ringoz.unity.nodeapi';

console.log('Hello from Node.js');
hello('Hello world!');

let running = true;
while (running) {
  console.log(Date.now());
  queueMicrotask(() => console.log('a'));
  await Promise.resolve();
  queueMicrotask(() => console.log('b'));
  await new Promise((resolve) => setTimeout(resolve, 1000));
}
