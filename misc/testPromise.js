/*
async function f() {
    return 1;
}
  
f().then(console.log); // 1

*/
async function e() {

    let promise = new Promise((resolve, reject) => {
      setTimeout(() => resolve("done!"), 1000)
    });
  
    let result = await promise; // wait until the promise resolves (*)
    return result ;
  }
  
async function g() {

    return new Promise((resolve, reject) => {
      setTimeout(() => resolve("done!"), 1000)
    });
  
}

async function h(val) {

    return new Promise((resolve, reject) => {
      if(val < 10){
          resolve("success") ;
      }else{
          reject("failed") ;
      }
    });
  
}

async function test(){
    var t = await g();
    console.log(t) ;

    try{
    var status = await h(10) ;
    console.log(status) ;
    }catch(err){
        console.log(err) ;
    }
}

test();