function myAsync(duration){
  let p=new Promise(function(resolve){
    setTimeout(function(){
      resolve();
    },duration);
  });
  return p;
}



myAsync(5000).then(function(){
  console.log("Async operation completed");
});

console.log("No Async");
