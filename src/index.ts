import { rendererPackageName, rendererVersion } from 'net.ringoz.unity.nodeapi';
console.log(`${rendererPackageName} v${rendererVersion}`);

const running = true;
while (running) {
  console.log(Date.now());
  queueMicrotask(() => console.log('a'));
  await Promise.resolve();
  queueMicrotask(() => console.log('b'));
  await new Promise((resolve) => setTimeout(resolve, 1000));
}
