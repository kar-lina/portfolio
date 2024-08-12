export function throttle(callback, delay) {
  let lastCall = 0;
  return function (...args) {
    const now = new Date();
    if (now - lastCall < delay) return;
    lastCall = now;
    callback(...args);
  };
}