// Begin here...
document.addEventListener("DOMContentLoaded", (event) => {
    //Display the beginning html...
    let localeHTML = useLocale(outputHTML.beginHTML);
    displayHTML(localeHTML);
});

const showStepOne = () => {
    //Increment the step
    step = 2; //change the step so we can make sure the buttons work properly

    let localeHTML = useLocale(outputHTML.stepOne);
    // Modify the html -- replace all instances of {{angleChoice}} in the html with the actual value and display it
    displayHTML(localeHTML.replaceAll("{{angleChoice}}", angleChoice));

    // safe guarding the buttons the same way as before...
    if (step === 2){
        // add the event listener for the only button
        // document.querySelector only returns the first instance
        document.querySelector(".greyBtn").addEventListener("click",() => {
            // Make sure we actually have a number AND it's greater than zero
            if( !isNaN(document.querySelector("#sideLengthValue").value) && Number(document.querySelector("#sideLengthValue").value) > 0){
                sideLength = document.querySelector("#sideLengthValue").value;
                showStepTwo();

            //if the input contained something other than a positive number...
            }else{
                alertMessage = useLocale(outputHTML.alerts.pleaseEnterNumber);
                alert(alertMessage);
            }
        });
    }
};

// modify the html in the variable and display it...
const showStepTwo = () => {
    //Increment the step
    step = 3; 

    // Get the HTML to display, 
    let localeHTML = useLocale(outputHTML.stepTwo);
    // Modify the html -- replace all instances of {{angleChoice}} and {{sideLength}}, then display it
    localeHTML = localeHTML.replaceAll("{{angleChoice}}", angleChoice);
    localeHTML = localeHTML.replaceAll("{{sideLength}}", sideLength);
    displayHTML(localeHTML);

    // Add the button functions...
    // safe guarding the buttons the same way as before...
    if (step === 3){
        let listOfButtons = document.querySelectorAll(".greyBtn");
        listOfButtons.forEach((button) => {
            button.addEventListener("click",(e) => {
                //assign the value of sideLength to base, hypotenuse, or height
                let thisSide = e.target.innerHTML.toLowerCase();
                switch (thisSide){
                    case "기본":
                    case "base": base = sideLength; break;
                    case "빗변":
                    case "height": height = sideLength; break;
                    case "높이":
                    case "hypotenuse": hypotenuse = sideLength; break;
                }
                showFinalCalculation();
            });
        });
    }
};

const showFinalCalculation = () => {
    //Increment the step
    step = 4;

    // CODE TO UPDATE THE VALUES OF BASE, HEIGHT, AND HYPOTENUSE SHOULD GO HERE OR BE CALLED HERE
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


    // Modify the html and display it...
    let localeHTML = useLocale(outputHTML.stepThree);
    localeHTML = localeHTML.replaceAll("{{angleChoice}}", angleChoice); //show the Angle
    localeHTML = localeHTML.replaceAll("{{base}}", Number(base).toFixed(2)); //show the base
    localeHTML = localeHTML.replaceAll("{{height}}", Number(height).toFixed(2)); //show the height
    localeHTML = localeHTML.replaceAll("{{hypotenuse}}", Number(hypotenuse).toFixed(2)); //show the hypotenuse
    displayHTML(localeHTML);

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
            let localeHTML = useLocale(outputHTML.beginHTML);
            displayHTML(localeHTML);
        });
    }
};

// Determine the correct language to use...
const useLocale = (html) => {
    let localeHTML;

    switch (locale){
        case "enUS": localeHTML = html["enUS"]; break;
        case "koKR": localeHTML = html["koKR"]; break;
    }
    return localeHTML;
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

        let listOfImages = document.querySelectorAll("img");
        //console.log(listOfImages);
        listOfImages.forEach(image => {
            image.addEventListener("click", (e) => {
                //return US or KO
                //console.log(e.target.src.substring(e.target.src.length - 6, e.target.src.length - 4));
                locale = e.target.src.substring(e.target.src.length - 8, e.target.src.length - 4);
                
                let localeHTML = useLocale(outputHTML.beginHTML);
                
                displayHTML(localeHTML);
            });
        });
    }
};