// let counter  = 0;
// let yt = 0;
// let fb = 0;
// let FxCounter = () => {
//     counter = counter + 10;
//        fb = fb + 10;
//        yt = yt + 10;

//     document.querySelector(".counter").innerText = counter;
    
//     if (counter < 12000) {
//         setTimeout(FxCounter, 2);
//     }else if (yt < 5000) {
//         setTimeout(FxCounter, 2)
//     }else if (fb < 7500) {
//         setTimeout(FxCounter,)
//     }
// }

// FxCounter();




let counter  = 0;

let FxCounter = () => {
    counter = counter + 10;

    document.querySelector(".counter").innerText = counter;
    
    if (counter < 12000) {
        setTimeout(FxCounter, 2);
    }
}

FxCounter();

let FxCounter2 = () => {
    counter = counter + 10;

    document.querySelector("#yt").innerText = counter;
    
    if (counter < 5000) {
        setTimeout(FxCounter2, 2);
    }
}
FxCounter2()

let FxCounter3 = () => {
    counter = counter + 10;

    document.querySelector("#fb").innerText = counter;
    
    if (counter <= 7500) {
        setTimeout(FxCounter3, 2);
        
    }
}
FxCounter3()

