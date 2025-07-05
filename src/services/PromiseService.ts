export function deferPromise<T>() {
  // eslint-disable-next-line @typescript-eslint/init-declarations
  let deferredResolver!: (value: T) => void;

  const promise = new Promise<T>((resolve) => {
    deferredResolver = resolve;
  });

  return { promise, resolve: deferredResolver };
}
