
const promise1 = new Promise((resolve, reject) => {
    setTimeout(reject, 1000, 'one');
});

const promise2 = new Promise((resolve, reject) => {
  setTimeout(reject, 2000, 'two');
});

const promise3 = new Promise((resolve, reject) => {
  setTimeout(reject, 3000, 'three');
});

(Promise.allSettled([promise1, promise2, promise3]))
.then(value=>{console.log(value);
})
.catch(error=>{
  console.log(error.errors);
});




