// Q1) Write one example explaining how you can write a callback function ?

const message = function() {  
    console.log("This is a callback function");
}
 
setTimeout(message, 3000);



//  Q2) "Write callback function to print numbers from 1 to 7, in which 1 should be printed after 1 sec , 2 should be printed after 2 sec, 3 should be printed after 3 sec and so on. 

/* Explain callback hell.
Numbers
1
2
3
4
5
6
7" */

const getNumbers = () => {
    console.log("Printing the numbers");
    setTimeout(() => {
        console.log("1")
        setTimeout(() => {
            console.log("2");
            setTimeout(() => {
                console.log("3");
                setTimeout(() => {
                    console.log("4");
                    setTimeout(() => {
                        console.log("5");
                        setTimeout(() => {
                            console.log("6");
                            setTimeout(() => {
                                console.log("7");
                            }, 1000);
                        }, 1000);
                    }, 1000);
                }, 1000);
            }, 1000);
        }, 1000);
    }, 1000);
}

getNumbers();





/* 
Q3)"Write promise function to print numbers from 1 to 7, in which 1 should be printed after 1 sec , 2 should be printed after 2 sec, 3 should be printed after 3 sec and so on. 

Numbers
1
2
3
4
5
6
7"
*/



let print =new Promise((resolve,reject)=>{
     
    setTimeout(()=>{
        resolve(console.log("1"))
    },1000)
   
}).then( ()=> new Promise((resolve,reject)=>{

   setTimeout(()=>{
    resolve(console.log("2"))
   },2000)

}) ).then( ()=> new Promise((resolve,reject)=>{

   setTimeout(()=>{
    resolve(console.log("3"))
   },3000)

}) ).then(()=> new Promise((resolve,reject)=>{
   
    setTimeout(()=>{
        resolve(console.log("4"))
    },4000)

})).then(()=> new Promise((resolve,reject)=>{
   
    setTimeout(()=>{
        resolve(console.log("5"))
    },5000)
})).then( ()=> new Promise((res,rej)=>{
   
    setTimeout(()=>{
       res(console.log("6"))
    },6000)

})).then(()=> new Promise((res,rej)=>{
    
    setTimeout(()=>{
        res(console.log("7"))
        console.log("end of promises");
    },7000)
}));




/* 

Q4)Create a promise function accepting a argument, if yes is passed to the function then it should go to resolved state and print Promise Resolved, and if nothing is passed then it should go to reject state and catch the error and print Promise Rejected 

*/

const getPromise =(val) => {
 
    return new Promise((resolve,reject) =>{
 
     if(val =="yes"){
         resolve(val)
     }else{
         reject("Promise Rejected")
     }
    })
 }
 
 getPromise("ye").then((data)=>{
     console.log(data);
 }).catch((err)=>{
     console.log(err);
 })


//Q5)Create examples to explain callback function

const message1 = function() {  
    console.log("This is a callback function");
}
 
setTimeout(message1, 3000);




/* Q8)Create examples to explain async await function
 */

async function tryingPromises() {

    console.log("Inside the function");

    const response = await fetch("https://api.github.com/users");

    console.log("Before response");

    const users = await response.json();

    console.log("user resolved");

    return users;

}

console.log("Before calling the function");

let data = tryingPromises();

console.log("After calling the function ");

console.log(data);
data.then((res) => {

    console.log(res);

});




















