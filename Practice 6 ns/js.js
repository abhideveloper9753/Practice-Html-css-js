const cart = ["shoes","Jeans","Kurta"];

const promise =  createorder(cart);

promise.then((order) => {
    console.log(order)
})
.catch((err) => {
    console.log(err.message);
});


//Produce

function createorder(cart){
    const pr = new Promise(function(resolve, reject){
        if(!validcart(cart)){
            const err = new Error("cart is not valid");
            reject(err);
        }
        const order = "123454";
        if(order){
            setTimeout(function(){
                resolve(order);
            }, 5000);
        }
    })
    return pr;
}
function validcart (){
    return true;
}



function getdata(dataid){
    return new Promise((resolve, reject)=>{
        setTimeout(() =>{
            console.log("data", dataid);
            resolve("true")
        }, 1000)
    })
}



async function getalldata() {
    await getdata(1);
    
}
