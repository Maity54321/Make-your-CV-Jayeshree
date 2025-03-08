window.onload = (e) =>{
    if(e.currentTarget.performance.navigation.type == 1){
        localStorage.clear();
    }
    
    // console.log(e.currentTarget.performance.navigation.type);
}


const checkbox1 = document.getElementById("checkbox1");
const checkbox2 = document.getElementById("checkbox2");
const checkbox3 = document.getElementById("checkbox3");
const secondary = document.getElementById("secondary");
const hs = document.getElementById("hs");
const Graduation = document.getElementById("Graduation");
const button = document.getElementById("button");

let userName = document.getElementById("userName");
let address = document.getElementById("address");
let number = document.getElementById("number");

let Myear = document.getElementById("Myear");
let Mper = document.getElementById("Mper");
let Msch = document.getElementById("Msch");
let Mboard = document.getElementById("Mboard");

let Hyear = document.getElementById("Hyear");
let Hper = document.getElementById("Hper");
let Hstr = document.getElementById("Hstr");
let Hboard = document.getElementById("Hboard");

let Gyear = document.getElementById("Gyear");
let Gcgpa = document.getElementById("Gcgpa");
let Gsub = document.getElementById("Gsub");
let Gdeg = document.getElementById("Gdeg");
let Guni = document.getElementById("Guni");

// secName.innerText = "Trial"                                 // This is working outside of function but not inside of a function
// secName.innerText = userName.value;

// let numVal = number.value;
// secondary.style.visibility = "hidden";


const secondaryShow = () => {
    if(checkbox1 && checkbox1.checked == true){
        secondary.style.display = "block";
    }
    else if ((checkbox2 && checkbox2.checked == true) || (checkbox3 && checkbox3.checked == true)){
        alert('Please uncheck 12th and Graduation checkbox first!');
        checkbox1.checked = true;
    }
    else{
        if(secondary){
            secondary.style.display = "none";
        }
    }
    
}
const hsShow =() => {
    if(checkbox2 && checkbox2.checked == true){
        hs.style.display = "block";
    }
    else if (checkbox3 && checkbox3.checked == true){
        alert('Please uncheck Graduation checkbox first!');
        checkbox2.checked = true;
    }
    else{
        if(hs){
            hs.style.display = "none";
        }
    }
}
const grShow = () => {
    if(checkbox3 && checkbox3.checked == true){
        Graduation.style.display = "block";
    }
    else{
        if(Graduation){
            Graduation.style.display = "none";
        }
    }
}

// const hsUncheck = () => {
//     if(checkbox2.checked == false){
//         hyearVal = "";
//         hperVal = "";
//         hstrVal = "";
//         hboardVal = "";
//     }
// }

// const grUncheck = () => {
//     if(checkbox3.checked == false){
//         gyearVal = "";
//         gcgpaVal = "";
//         gsubVal = "";
//         gdegVal = "";
//         guniVal = "";
//     }                                                                     // RE-DEPLOY
// }


if(checkbox1 !== null){
    checkbox1.addEventListener('click', () => {
        secondaryShow();
        // else{
        //     secondary.style.display = "none";
        // }
    //     // userVal = userName.value;
    //     // addVal = address.value;
    //     // numVal = number.value;
    })
    
}

if(checkbox2 !== null){
    checkbox2.addEventListener('click', () => {
        hsShow();
        // myearVal = Myear.value;
        // mperVal = Mper.value;
        // mschVal = Msch.value;
        // mboardVal = Mboard.value;
    })
}

if(checkbox3 !== null){
    checkbox3.addEventListener('click', () => {
        grShow();
        // hyearVal = Hyear.value;
        // hperVal = Hper.value;
        // hstrVal = Hstr.value;
        // hboardVal = Hboard.value;
    })
}

let letter = /^[a-zA-Z ]*$/;
let checkNumber = /[0-9]/g;

let userVal;
let addVal;
let numVal;

let myearVal;
let mperVal;
let mschVal;
let mboardVal;

let hyearVal;
let hperVal;
let hstrVal;
let hboardVal;

let gyearVal;
let gcgpaVal;
let gsubVal;
let gdegVal;
let guniVal;

let isValidated = false;


const fullValidation = () => {

    if(userVal == "" || addVal == "" || numVal == ""){
        alert('Please fill all the details!!');
        // e.preventDefault();
    }
    else if(!checkbox1.checked){                                     // after checked and filled up the values in 10th , problem of being unchecked
        alert('Minimum 10th pass required for making your CV here!');
    }
    else if(myearVal == "" || mperVal == "" || mschVal == "" || mboardVal == ""){
        alert('Fill up all the details for 10th!');
        // e.preventDefault();
    }
    else if(checkbox2.checked && (!hyearVal || !hperVal || !hstrVal || !hboardVal )){
        isValidated = false;
        alert('Fill up all the details for 12th!');
    }
    else if(checkbox3.checked && (gyearVal == "" || gcgpaVal == "" || gsubVal == "" || gdegVal == "" || guniVal == "")){
        alert('Fill up all the details for Graduation!');
    }
    else if((!userVal.match(letter)) || (!hstrVal.match(letter)) || (!gdegVal.match(letter))){
        alert('Only alphabets are allowed in "Name" , "Stream" , "Degree" areas!!');
        // e.preventDefault();
    }
    else if(numVal.length != 10){
        alert('Phone_no. must have 10 digits!!');
        // e.preventDefault();
    }
    else if(mschVal.match(checkNumber) || (mboardVal.match(checkNumber)) || (hboardVal.match(checkNumber)) || (gsubVal.match(checkNumber)) || (guniVal.match(checkNumber))){
        alert('Numbers not allowed in "School" , "Board" , "Subject" , "University" areas!!');
        // e.preventDefault();
    }
    else{
        isValidated = true;
    }

}

// const mDetails = () => {
//     // e.preventDefault();

//     if(!checkbox1.checked){                                     // after checked and filled up the values in 10th , problem of being unchecked
//         alert('Minimum 10th pass required for making your CV here!');
//     }
//     else if(myearVal == "" || mperVal == "" || mschVal == "" || mboardVal == ""){
//         alert('Fill up all the details for 10th!');
//         // e.preventDefault();
//     }
//     else{
//         // location.href = "index2.html";
//         isValidated = true;
//     }
// }

// const hgDetails = () => {
//     if(checkbox2.checked){
//         if(hyearVal == "" || hperVal == "" || hstrVal == "" || hboardVal == ""){
//             alert('Fill up all the details for 12th!');
//             // e.preventDefault();
//         }
//         else{
//             isValidated = true;
//         }
//     }


//     if(checkbox3.checked){
//         if(gyearVal == "" || gcgpaVal == "" || gsubVal == "" || gdegVal == "" || guniVal == ""){
//             alert('Fill up all the details for Graduation!');
//             // e.preventDefault();                                               // problem this all e
//         }
//         else{
//             isValidated = true;
//         }
//     }
    
// }

// const validation = () => {

//     if(userVal == "" || addVal == "" || numVal == ""){
//         alert('Please fill all the details!!');
//         // e.preventDefault();
//     }
//     else if((!userVal.match(letter)) || (!hstrVal.match(letter)) || (!gdegVal.match(letter))){
//         alert('Only alphabets are allowed in "Name" , "Stream" , "Degree" areas!!');
//         // e.preventDefault();
//     }
//     else if(numVal.length != 10){
//         alert('Phone_no. must have 10 digits!!');
//         // e.preventDefault();
//     }
//     else if(mschVal.match(checkNumber) || (mboardVal.match(checkNumber)) || (hboardVal.match(checkNumber)) || (gsubVal.match(checkNumber)) || (guniVal.match(checkNumber))){
//         alert('Numbers not allowed in "School" , "Board" , "Subject" , "University" areas!!');
//         // e.preventDefault();
//     }
//     else{
//         isValidated = true;
//     }
    
// }


// const nameExc = () => {
//     let userVal = userName.value;
//     let addVal = address.value;
//     let numVal = number.value;
//     console.log(userVal)
//     console.log(addVal)
//     console.log(numVal)
//     // secName.innerText = "Trial"                                   // not working inside of a function
// }


        // console.log(checkbox1.checked)
// if(checkbox1 && checkbox1.checked == true){
//     secondary.style.display = "block";
// }

if(button !== null){
    button.addEventListener('click', (e) => {
        e.preventDefault();
        // console.log(userVal)                                    // why am I getting this undefined?

        userVal = userName.value;
        addVal = address.value;
        numVal = number.value;

        myearVal = Myear.value;
        mperVal = Mper.value;
        mschVal = Msch.value;
        mboardVal = Mboard.value;

        hyearVal = Hyear.value;
        hperVal = Hper.value;
        hstrVal = Hstr.value;
        hboardVal = Hboard.value;

        gyearVal = Gyear.value;
        gcgpaVal = Gcgpa.value;
        gsubVal = Gsub.value;
        gdegVal = Gdeg.value;
        guniVal = Guni.value;

        // validation();
        // mDetails();
        // hgDetails();
        fullValidation();
        localStorage.clear();
        // hsUncheck();
        // grUncheck();

        // console.log(addVal)
        // console.log(numVal)
        // nameExc();
        localStorage.setItem('Name-value',userVal);
        localStorage.setItem('Add-value',addVal);
        localStorage.setItem('Num-value', numVal);

        localStorage.setItem('Myear-value',myearVal);
        localStorage.setItem('Mper-value',mperVal);
        localStorage.setItem('Msch-value', mschVal);
        localStorage.setItem('Mboard-value', mboardVal);


        if(checkbox2.checked == true){
            localStorage.setItem('Hyear-value',hyearVal);
            localStorage.setItem('Hper-value',hperVal);
            localStorage.setItem('Hstr-value', hstrVal);
            localStorage.setItem('Hboard-value', hboardVal);
        }

        if(checkbox3.checked == true){
            localStorage.setItem('Gyear-value',gyearVal);
            localStorage.setItem('Gcgpa-value',gcgpaVal);
            localStorage.setItem('Gsub-value', gsubVal);
            localStorage.setItem('Gdeg-value', gdegVal);
            localStorage.setItem('Guni-value', guniVal);
        }

        if(isValidated == true){
            // console.log(isValidated);
            location.href = 'index2.html';
        }
        // document.getElementById("gridContainer1").innerHTML = "<div><h1>Jayeshree Dey</h1></div>"

    })
}

const secName = document.getElementById("secName");
const secAdd = document.getElementById("secAdd");
const secNum = document.getElementById("secNum");

const secMyear = document.getElementById("secMyear");
const secMper = document.getElementById("secMper");
const secMsch = document.getElementById("secMsch");
const secMboard = document.getElementById("secMboard");

const secHyear = document.getElementById("secHyear");
const secHper = document.getElementById("secHper");
const secHstr = document.getElementById("secHstr");
const secHboard = document.getElementById("secHboard");

const secGryear = document.getElementById("secGryear");
const secGrcgpa = document.getElementById("secGrcgpa");
const secGrsub = document.getElementById("secGrsub");
const secGrdeg = document.getElementById("secGrdeg");
const secGruni = document.getElementById("secGruni");



const NameVal = localStorage.getItem('Name-value');
const AddVal = localStorage.getItem('Add-value');
const NumVal = localStorage.getItem('Num-value');

const MyearVal = localStorage.getItem('Myear-value');
const MperVal = localStorage.getItem('Mper-value');
const MschVal = localStorage.getItem('Msch-value');
const MboardVal = localStorage.getItem('Mboard-value');

const HyearVal = localStorage.getItem('Hyear-value');
const HperVal = localStorage.getItem('Hper-value');
const HstrVal = localStorage.getItem('Hstr-value');
const HboardVal = localStorage.getItem('Hboard-value');

const GyearVal = localStorage.getItem('Gyear-value');
const GcgpaVal = localStorage.getItem('Gcgpa-value');
const GsubVal = localStorage.getItem('Gsub-value');
const GdegVal = localStorage.getItem('Gdeg-value');
const GuniVal = localStorage.getItem('Guni-value');


// if(document.getElementById("gridContainer2") !== null){
//     if(HyearVal){
//         document.getElementById("gridContainer2").innerHTML = `<h4>12th:</h4>
//                         <div>YEAR:</div>
//                         <div id="secHyear">${HyearVal}</div>
//                         <h4></h4>
//                         <div>PERCENTAGE:</div>
//                         <div id="secHper">${HperVal}</div>
//                         <h4></h4>                                          // *** IMPORTANT making html grid
//                         <div>STREAM:</div>
//                         <div id="secHstr">${HstrVal}</div>
//                         <h4></h4>
//                         <div>BOARD:</div>
//                         <div id="secHboard">${HboardVal}</div>`
//     }
// }

if(checkbox2 !== null){
    if(HyearVal){
        checkbox2.checked = true;
        // console.log(checkbox2.checked)
        hsShow();
    }
}

if(checkbox1 !== null){
    if(MyearVal){
        checkbox1.checked = true;
        secondaryShow();
    }
}

if(checkbox3 !== null){
    if(GyearVal){
        checkbox3.checked = true;
        grShow();
    }
}


if(secName !== null || secAdd !== null || secNum !== null || secMyear !== null || secMper !== null || secMsch !== null || secMboard !== null || secHyear !== null || secHper !== null || secHstr !== null || secHboard !== null || secGryear !== null || secGrcgpa !== null || secGrsub !== null || secGrdeg !== null || secGruni !== null){
    secName.textContent = NameVal;
    secAdd.textContent = AddVal;
    secNum.textContent = NumVal;

    secMyear.textContent = MyearVal;
    secMper.textContent = MperVal;
    secMsch.textContent = MschVal;
    secMboard.textContent = MboardVal;

    // if(checkbox2.checked == true){
        secHyear.textContent = HyearVal;
        secHper.textContent = HperVal;
        secHstr.textContent = HstrVal;
        secHboard.textContent = HboardVal;
    // }

    // if(checkbox3.checked == true){
        secGryear.textContent = GyearVal;
        secGrcgpa.textContent = GcgpaVal;
        secGrsub.textContent = GsubVal;
        secGrdeg.textContent = GdegVal;
        secGruni.textContent = GuniVal;
    // }

}


const gridContainerSec = document.getElementById("gridContainer2");
const gridContainerTh = document.getElementById("gridContainer3");

if(gridContainerSec !== null){
    if(HyearVal){
        gridContainerSec.style.visibility = "visible";
    }
}

if(gridContainerTh !== null){
    if(GyearVal){
        gridContainerTh.style.visibility = "visible";
    }
}



const refreshButton = document.getElementById("refreshButton");
const mainCV = document.getElementById("main");
const downloadBTN = document.getElementById("downloadCV");

if(refreshButton !== null){
    refreshButton.addEventListener('click', () => {
        // location.href = 'index.html';
        window.history.back();
        // e.currentTarget.performance.navigation.type = 2;
        // e.preventDefault();                          // not working, refresh automatically on this button, opposite of page main back arrow <-
    } )
}


// Download pdf

// downloadBTN.addEventListener('click', () => {
//     downloadPDF();
// })

// const downloadPDF = () => {
//     window.jsPDF = window.jspdf.jsPDF;

//     let doc = new jsPDF();

//     doc.html(mainCV, {
//         callback: function(doc) {
//             doc.save('sample-document.pdf');
//         },
//         x: 15,
//         y: 15,
//         width: 170,
//         windowWidth: 650
//     });
// }

// // doc.html(downloadCV, (doc) =>{
// //     doc.save('sample-document.pdf');
// // })