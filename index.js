// console.log("Hey....using JS development")
// console.log("Using JS")

// var a=34;
// if(a>10){
//    var a=40;
//    console.log("Hi a inside the block:"+a);
// }
// console.log("Heyy... a is now outside the block"+a)


// function sum(a,b){
//     return a+b;
// }
// console.log(sum(230,30))


// const sum=(a,b)=>{return a+b};
//   console.log(sum(12,30));

//   const data=function(msg){
//     return "Hello, I m using JS"+msg
//   }
//   data("and Node")

//   //IIFE

//   (()=>{console.log("Hey..using and Calling by IIFE ")})();



//callback

// function sum(a,b){
//     return a+b;
// }

// function sumWithMsg(clbk,msg){
//      const result=clbk(2,6);
//      console.log("Hey, Your result="+result+"!! Well Done"+msg)

// }

// sumWithMsg(sum,"Rahul")

function login(msg,error){
    if(error){
        console.log("Error is"+error)
    }
    else{
        console.log(msg)
    }
}

function loginHandler(username,password,clbk){
    if(username=="ptomer40" && password=="12345"){
        clbk("success",null);
    }else{
        clbk(null,"Username or password is incorrect")
    }
}
loginHandler("ptomer40","12345",login)