let step = 1;

let angleChoice = 0;
let sideLength = 0;
let base = 0;
let height = 0;
let hypotenuse = 0;

const beginHTML = `
    <h1>Tri Pillar of Destiny</h1>
    <h2>: The calculator</h2>
    <hr>
    <p id="introCopy">Do you need help?🤔<br>I will calculate the lengths of the sides for you!!</p>
    <hr>
    <div class="instructions">
        <p>Click on one of the reference angles below.</p>
    </div>
    <div id="ref_angles">
        <button class="greyBtn" value="30">30&deg;</button>
        <button class="greyBtn" value="45">45&deg;</button>
        <button class="greyBtn" value="60">60&deg;</button>
    </div>
    <hr>
    <p class="refLink"><a href="https://www.notion.so/Main-project-2a43b00ca07c4b48ae99d87e09191e4f" >What is "The reference angle?"🧐</a></p>
`;

const stepOne =  `
    <h1>About {{angleChoice}}˚📐</h1>
    <p>The reference angle is {{angleChoice}}˚ <span class="emoji">🤔</span></p> 
    <hr>
    <div class="instructions">
        <div>
            <label for="num">Enter the length of the side:</label>
            <input type="text" name="num" id="sideLengthValue">
            <button class="greyBtn">Enter</button>
        </div>
    </div>
`;

let stepTwo = `
    <h1>About {{angleChoice}}˚📐</h1>
    <p>The reference angle is {{angleChoice}}˚ <span class="emoji">🤔</span></p> 
    <p>The length of the side you entered is {{sideLength}}.</p> 
    <hr>
    <div class="instructions">            
        <p>Choose the location of the side:</p>
    </div>        
    <button class="greyBtn">Base</button>
    <button class="greyBtn">Hypotenuse</button>
    <button class="greyBtn">Height</button>
`;

let stepThree = `
    <h1>About {{angleChoice}}˚📐</h1>
    <hr>
    <p>The base is {{base}}, \n The height is {{height}} and \n The hypotenuse is {{hypotenuse}}</p> 
    <hr>
    <button class="greyBtn">Calculate another angle?</button>
`;

