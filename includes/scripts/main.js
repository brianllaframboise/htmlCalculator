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
                showFinalCalculation();
            });
        });
    }
}

const showFinalCalculation = () => {
    //Increment the step
    step = 4;

    // CODE TO UPDATE THE VALUES OF BASE, HEIGHT, AND HYPOTENUSE SHOULD GO HERE OR BE CALLED HERE
    //
    //

    // Modify the html
    let stepThreeHTML = stepThree.replaceAll("{{angleChoice}}", angleChoice); //show the Angle
    stepThreeHTML = stepThreeHTML.replaceAll("{{base}}", base); //show the base
    stepThreeHTML = stepThreeHTML.replaceAll("{{height}}", height); //show the height
    stepThreeHTML = stepThreeHTML.replaceAll("{{hypotenuse}}", hypotenuse); //show the hypotenuse
    
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