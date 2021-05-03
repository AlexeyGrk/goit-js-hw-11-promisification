import './sass/main.scss';

const myPromise = new Promise((resolve, reject) => {
  const result = Math.random() > 0.5;
  setTimeout(() => {
    if (result) {
      resolve('This is success resolve');
    }
    reject('This is failed promise');
  }, 2000);
});
myPromise.then(
  result => {
    console.log(result);
  },
  error => {
    console.log(error);
  },
);
