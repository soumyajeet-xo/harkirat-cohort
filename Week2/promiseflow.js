console.log("at the top 1");

function promisifiedTimeout() {
  console.log("function called 3");
  return new Promise(function(resolve) {
    console.log("inside promise callback 4");
    setTimeout(function() {
      console.log("setTimeout called 5");
      resolve("done baby! I am burnt out.");
    }, 5000);
  });
}

console.log("in the middle 2");

promisifiedTimeout().then(function(value) {
  console.log("promisified then 6");
  console.log(value);
});


//  promises are first returned then resolved

// the resolution of the Promise (i.e., when it transitions from pending to either fulfilled or rejected) occurs asynchronously, typically at a later point in time.
