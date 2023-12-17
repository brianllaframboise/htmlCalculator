let step = 1;
let angleChoice = 0;
let sideLength = 0;
let base = 0;
let height = 0;
let hypotenuse = 0;
let locale = "enUS";
//let locale = "koKR";
let alertMessage = "";

const outputHTML = {
    "alerts":{
        "pleaseEnterNumber":{
            "enUS": "This should be a positive number. Please try again.",
            "koKR": "양수여야 합니다. 다시 시도해 주세요."
        }
    },
    "beginHTML":{
        "enUS":`
            <div id="localeSelect">
                <img src="includes/images/koKR.png">
                <img src="includes/images/enUS.png">
            </div>
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
            <p class="refLink"><a href="https://www.notion.so/Main-project-2a43b00ca07c4b48ae99d87e09191e4f" >What is "The reference angle?" 🧐</a></p>
        `,
        "koKR": `
            <div id="localeSelect">
                <img src="includes/images/koKR.png">
                <img src="includes/images/enUS.png">
            </div>
            <h1>운명의 삼각 기둥</h1>
            <h2>: 계산기</h2>
            <hr>
            <p id="introCopy">도움이 필요하신가요?🤔<br>제가 변의 길이를 계산해드릴게요!!!!</p>
            <hr>
            <div class="instructions">
                <p>아래 기준각 중 하나를 클릭합니다.</p>
            </div>
            <div id="ref_angles">
                <button class="greyBtn" value="30">30&deg;</button>
                <button class="greyBtn" value="45">45&deg;</button>
                <button class="greyBtn" value="60">60&deg;</button>
            </div>
            <hr>
            <p class="refLink"><a href="https://www.notion.so/Main-project-2a43b00ca07c4b48ae99d87e09191e4f">기준각이란 무엇인가요? 🧐</a></p>`
    },
    "stepOne":{
        "enUS": `
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
        `,
        "koKR": `
            <h1>{{angleChoice}}˚ 📐</h1>
            <p>기준각는 {{angleChoice}}˚입니다. <span class="emoji">🤔</span></p> 
            <hr>
            <div class="instructions">
                <div>
                    <label for="num">측면의 길이를 입력합니다:</label>
                    <input type="text" name="num" id="sideLengthValue">
                    <button class="greyBtn">엔터</button>
                </div>
            </div>
        `
    },
    "stepTwo": {
        "enUS": `
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
        `,
        "koKR": `
            <h1>{{angleChoice}}˚ 📐</h1>
            <p>기준각는 {{angleChoice}}˚입니다. <span class="emoji">🤔</span></p> 
            <p>입력한 변의 길이는 {{sideLength}}입니다.</p> 
            <hr>
            <div class="instructions">            
                <p>측면의 위치를 선택합니다:</p>
            </div>        
            <button class="greyBtn">기본</button>
            <button class="greyBtn">빗변</button>
            <button class="greyBtn">높이</button>
        `
    },
    "stepThree": {
        "enUS":`
            <h1>About {{angleChoice}}˚📐</h1>
            <hr>
            <p>The base is {{base}} <br>The height is {{height}} <br>The hypotenuse is {{hypotenuse}}</p> 
            <hr>
            <button class="greyBtn">Calculate another angle?</button>
        `,
        "koKR": `
            <h1>{{angleChoice}}˚ 📐</h1>
            <hr>
            <p>밑변은 {{base}} <br>높이는 {{height}} <br>밑변은 {{hypotenuse}}입니다.</p> 
            <hr>
            <button class="greyBtn">다른 각도를 계산하시겠습니까?</button>
        `
    }
};