// Begin here...
document.addEventListener("DOMContentLoaded", (event) => {
    //Display the beginning html...
    displayHTML(beginHTML);
});

const showStepOne = () => {
    //Increment the step
    step = 2; //change the step so we can make sure the buttons work properly
    
    // Modify the html
    // replace all instances of {{angleChoice}} in the html with the actual value
    let stepOneHTML = stepOne.replaceAll("{{angleChoice}}", angleChoice);
    
    // display the final html
    displayHTML(stepOneHTML);

    // safe guarding the buttons the same way as before...
    if (step === 2){
        // add the event listener for the only button
        // document.querySelector only returns the first instance
        document.querySelector(".greyBtn").addEventListener("click",() => {
            // Make sure we actually have a number... 
            if( !isNaN(document.querySelector("#sideLengthValue").value)){
                sideLength = document.querySelector("#sideLengthValue").value;
                showStepTwo();
            }else{
                alert("Please enter a number...");
            }
            
        });
    }
}

// modify the html in the variable and display it...
const showStepTwo = () => {
    //Increment the step
    step = 3; 

    // Modify the html
    let stepTwoHTML = stepTwo.replaceAll("{{angleChoice}}", angleChoice);
    stepTwoHTML = stepTwoHTML.replaceAll("{{sideLength}}", sideLength);
    displayHTML(stepTwoHTML);

    // Add the button functions...
    // safe guarding the buttons the same way as before...
    if (step === 3){
        let listOfButtons = document.querySelectorAll(".greyBtn");
        listOfButtons.forEach((button) => {
            button.addEventListener("click",(e) => {
                //assign the value of sideLength to base, hypotenuse, or height
                let thisSide = e.target.innerHTML.toLowerCase();
                switch (thisSide){
                    case "base": base = sideLength; break;
                    case "height": height = sideLength; break;
                    case "hypotenuse": hypotenuse = sideLength; break;
                }                
                showFinalCalculation();
            });
        });
    }
}

const showFinalCalculation = () => {
    //Increment the step
    step = 4;

    // CODE TO UPDATE THE VALUES OF BASE, HEIGHT, AND HYPOTENUSE SHOULD GO HERE OR BE CALLED HERE
    //calculateFinal();

    let root3 = Math.pow(3, .5);
    let root2 = Math.pow(2, 0.5);

    switch (angleChoice){
        case "30":
           if (base !== 0){
               //BASE
               height = base;
               //let root3 = Math.pow(3, .5);
               height /= root3;
               hypotenuse = height * 2;
           }else if(hypotenuse !== 0){
               //HYPOTENUSE
               base = hypotenuse;
               //base를 2로 나눈 뒤, √3을 곱하기
               base *= root3 / 2;
               height = hypotenuse / 2;
           }else if(height !== 0){
               //HEIGHT
               base = height;
               //base에 √3을 곱하기
               base *= root3;
               hypotenuse = height * 2;
           }        
        break;

        case "45":
            if (base !== 0){
                //BASE
                height = base;
                //√2 만들기
                //let root2 = Math.pow(2, 0.5);
                //hypotenuse에 √2를 곱하기
                hypotenuse = base * root2;
            }else if(hypotenuse !== 0){
                //HYPOTENUSE
                //base에 √2를 나누기
                base = hypotenuse / root2;
                height = hypotenuse / root2;
            }else if(height !== 0){
                //HEIGHT
                base = height;
                hypotenuse = height * root2;
            }
        break;

        case "60":
            if (base !== 0){
                //BASE
                height = base;
                //√3 만들기
                let root3 = Math.pow(3, 0.5);
                //height에 √3를 곱하기
                height *= root3;
                hypotenuse = base * 2;
            }else if(hypotenuse !== 0){
                //HYPOTENUSE
                base = hypotenuse / 2;
                height = hypotenuse;
                // height에 √3을 곱하고 2로 나누기
                height *= root3 / 2;
            }else if(height !== 0){
                //HEIGHT
                base = height / root3;
                hypotenuse = height * 2 / root3;
            }
        break;
       }

    //    console.log("base =", base);
    //    console.log("hypotenuse =", hypotenuse);
    //    console.log("height =", height);

    base = Number(base).toFixed(2);
    height = Number(height).toFixed(2);
    hypotenuse = Number(hypotenuse).toFixed(2);

    // Modify the html
    let stepThreeHTML = stepThree.replaceAll("{{angleChoice}}", angleChoice); //show the Angle
    stepThreeHTML = stepThreeHTML.replaceAll("{{base}}", Number(base).toFixed(2)); //show the base
    stepThreeHTML = stepThreeHTML.replaceAll("{{height}}", Number(height).toFixed(2)); //show the height
    stepThreeHTML = stepThreeHTML.replaceAll("{{hypotenuse}}", Number(hypotenuse).toFixed(2)); //show the hypotenuse

    // let stepThreeHTML = stepThree.replaceAll("{{angleChoice}}", angleChoice); //show the Angle
    // stepThreeHTML = stepThreeHTML.replaceAll("{{base}}", base); //show the base
    // stepThreeHTML = stepThreeHTML.replaceAll("{{height}}", height); //show the height
    // stepThreeHTML = stepThreeHTML.replaceAll("{{hypotenuse}}", hypotenuse); //show the hypotenuse
    
    displayHTML(stepThreeHTML);

    // safe guarding the buttons the same way as before...
    if (step === 4){
        // add the event listener for the only button
        document.querySelector(".greyBtn").addEventListener("click",() => {
            //RESET ALL THE VARIABLES
            step = 1;
            angleChoice = 0;
            sideLength = 0;
            base = 0;
            height = 0;
            hypotenuse = 0;            
            //Display the beginning html...
            displayHTML(beginHTML);
        });
    }

}

//As a function so that we can reset it later...
const displayHTML = (html) => {
    document.querySelector("#container").innerHTML = html;

    // Set the functions to get the angl value from the button
    if(step === 1){
        // make an array of all the buttons
        let listOfButtons = document.querySelectorAll(".greyBtn");
        // add the eventListener to each button...
        // "e" is the placeholder for "event"
        listOfButtons.forEach((button) => {
            button.addEventListener("click",(e) => {
                angleChoice = e.target.value;
                showStepOne();
            });
        });
    }
}

    // From Part30.java----------------
    // let x = 1.73;
    // base = x;
    // height = base;
    // let root3 = Math.pow(3, .5);
    // height /= root3;
    // hypotenuse = height * 2;

    // let y = 2;
    // hypotenuse = y;
    // base = hypotenuse;
    // //base를 2로 나눈 뒤, √3을 곱하기
    // base *= root3 / 2;
    // height = hypotenuse / 2;

    // let z = 1;
    // height = z;
    // base = height;
    // //base에 √3을 곱하기
    // base *= root3;
	// hypotenuse = height * 2;


    // From Part45.java----------------
    // let x = 1;
	// base = x;
	// height = base;
    // //√2 만들기
    // let root2 = Math.pow(2, 0.5);
    // //hypotenuse에 √2를 곱하기
    // hypotenuse = base * root2;

    // let y = 1;
    // hypotenuse = y;
    // //base에 √2를 나누기
    // base = hypotenuse / root2;
    // height = hypotenuse / root2;
    
    // let z = 1;
    // height = z;
    // base = height;
    // hypotenuse = height * root2;


    //From Part60.java----------------
    // let x = 1;
    // double base = x;
    // double height = base;
    // //√3 만들기
    // let root3 = Math.pow(3, 0.5);
    // //height에 √3를 곱하기
    // height *= root3;
    // hypotenuse = base * 2;

    // let y = 2;
    // hypotenuse = y;
    // base = hypotenuse / 2;
    // height = hypotenuse;
    // // height에 √3을 곱하고 2로 나누기
    // height *= root3 / 2;
    
    // let z = root3;
    // height = z;
    // base = height / root3;
    // hypotenuse = height * 2 / root3;