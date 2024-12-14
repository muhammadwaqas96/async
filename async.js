// const one = () => {
//     setTimeout(()=>{  
//         console.log("one")
//     },3000)
// }
// const two = () => {
//     console.log("tow")
// }
// const three = () => {
//     console.log("three")
// }

// one();
// two();
// three()

// callback Hell 
// const f1 = (callback) => {
//     setTimeout(() => {
//         console.log("one");
//         callback();
//     }, 2000);
// }
// const f2 = (callback) => {
//     setTimeout(() => {
//         console.log("two")
//         callback()
//     }, 5000);
// }
// const f3 = (callback) => {
//     console.log("three");
//     callback()
// }

// f1 (() => {
//     f2(() => {
//          f3(() => {
//             console.log("done");
//         })
//     })
// })

// const fun1 = (calB) => {
//     setTimeout(()=> {
//         console.log("function one was called.")
//         calB();
//     },2000)
    
// }
// const fun2 = (calB) => {
//     setTimeout(()=>{
//         console.log("function two was called.")
//         calB()
//     },1000)
// }
// const fun3 = () => {
//     console.log("function three was called.")
// }

// fun1(
//     ()=>{
//         fun2(
//             () => {
//                 fun3();
//                 console.log("function has completed.")
//             }
//         )
//     }
// )


// const oneFun = () => {
//     return new Promise((resolve, reject)=>{
//         setTimeout(()=>{
//             console.log("one")
//             resolve();
//         },2000)
//     })
// }

// const twoFun = () => {
//     return new Promise((res, rej)=>{
//         setTimeout(()=>{
//             console.log("two")
//             res();
//         },3000)
//     })
// }

// const threeFun = () => {
//     return new Promise((reso, reje)=>{
//         setTimeout(()=>{
//             console.log("three")
//             reso();
//         })
//     })
// }

// oneFun().then(()=>{
//     twoFun().then(()=>{
//         threeFun().then(()=>{
//             console.log("function have completed.")
//         })
//     })
// })




// colors function 

const red = () => {
   return new Promise((res, rej)=>{
    setTimeout(() => {
        const createEl = document.createElement("img")
        // createEl.innerHTML = "this is a red";
        document.querySelector("body").appendChild(createEl)
    
        const createId = document.createAttribute("id")
        createId.value = "redBox";
        document.querySelector("img").setAttributeNode(createId)
    
        const createWidth = document.createAttribute("width")
        createWidth.value = "200px";
        document.querySelector("#redBox").setAttributeNode(createWidth)
    
        const createHeight = document.createAttribute("height")
        createHeight.value = "200px";
        document.querySelector("#redBox").setAttributeNode(createHeight)
        document.querySelector("#redBox").style.backgroundColor = "red"
        res();
    }, 1000);
   
   })
}

const green = () => {
    return new Promise((resole, reject)=>{
        setTimeout(() => {
            const createEl = document.createElement("img")
            document.querySelector("body").appendChild(createEl)
            
            const createId = document.createAttribute("id")
            createId.value = "greenBox";
            document.querySelector("img").setAttributeNode(createId)
            
            const createWidth = document.createAttribute("width")
            createWidth.value = "200";
            document.querySelector("#greenBox").setAttributeNode(createWidth)
            
            const createHeight = document.createAttribute("height")
            createHeight.value = "200";
            document.querySelector("#greenBox").setAttributeNode(createHeight)
            document.querySelector("#greenBox").style.backgroundColor = "green"
            resole();
        },1000)
        
    })
}


const black = () => {
    return new Promise((res, rej)=>{
        setTimeout(()=>{
            const createEl = document.createElement("img")
    // createEl.value = "This is black box"
    document.querySelector("body").appendChild(createEl);

    const createId = document.createAttribute("id");
    createId.value = "blackBox";
    document.querySelector("img").setAttributeNode(createId);

    const createWidth = document.createAttribute("width");
    createWidth.value = "200";
    document.querySelector("#blackBox").setAttributeNode(createWidth)

    const createHeight = document.createAttribute("height")
    createHeight.value = "200";
    document.querySelector("#blackBox").setAttributeNode(createHeight)

    document.querySelector("#blackBox").style.backgroundColor = "black"
    res();
        },1000)
        
    })
}


const blue = () => {
    return new Promise((resole, reject)=>{
        setTimeout(()=>{
            const createEl = document.createElement("img")
    createEl.value = "this is blue box"
    document.querySelector("body").appendChild(createEl)

    const createId = document.createAttribute("id")
    createId.value = "blueBox"
    document.querySelector("img").setAttributeNode(createId)

    const createWidth = document.createAttribute("width")
    createWidth.value = "200"
    document.querySelector("#blueBox").setAttributeNode(createWidth)

    const createHeight = document.createAttribute("height")
    createHeight.value = "200"
    document.querySelector("#blueBox").setAttributeNode(createHeight)

    document.querySelector("#blueBox").style.backgroundColor = "blue"
    resole();
        },1000)
    })
}

const yellow = () => {
    return new Promise((res, rej)=>{
        setTimeout(() => {
            const createEl = document.createElement("img")
    createEl.value = "this is yellow box"
    document.querySelector("body").appendChild(createEl)

    const createId = document.createAttribute("id")
    createId.value = "yellowBox"
    document.querySelector("img").setAttributeNode(createId)

    const createWidth = document.createAttribute("width")
    createWidth.value = "200"
    document.querySelector("#yellowBox").setAttributeNode(createWidth)

    const createHeight = document.createAttribute("height")
    createHeight.value = "200"
    document.querySelector("#yellowBox").setAttributeNode(createHeight)
    document.querySelector("#yellowBox").style.backgroundColor = "yellow"
        }, 1000);
    })
}

const clickFor = () => {
    red().then(()=>{
        green().then(()=>{
            black().then(()=>{
                blue().then(()=>{
                    yellow();
                    console.log("complete the function.")
                })
            })
        })
    })
}