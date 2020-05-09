function initPigLatinGenerator() {
    alert("Let's start coding...");
    setTranslateButtonListener();
}

function setTranslateButtonListener(){
    var translateButton = document.getElementById("generate_pig_latin_button");
    translateButton.addEventListener("click", clickedButton);
}

function getInputText(){
    var textInputField = document.getElementById("input_sentence");
    var text = textInputField.value;
    return text;
}

function clickedButton(){
    var text = getInputText();
    var textOutputField = document.getElementById("pig_latin_output");
    var textTranslate = text.toLowerCase();
    textTranslate = translate(textTranslate);
    textOutputField.innerHTML = textTranslate;
}

function translate(str){
    var textOutput = "";
    var startIndexWord = 0;
    for(var i = 0; i < str.length; i++){
        if(str.charAt(i) === " " || i === str.length - 1){
            var word = str.substring(startIndexWord, i+1);
            // übersetzungsregeln
            word = word.trim();
            var bool = true;
            for(var j = 0; j < word.length; j++){
                if(!((word.charCodeAt(j) > 64 && word.charCodeAt(j) < 91) || (word.charCodeAt(j) > 96 && word.charCodeAt(j) < 123)) || (word.charCodeAt(j) == 32)){
                    bool = false
                }
            }
            if(bool){
                word = translateRule(word);
            }
            //console.log(i);
            //console.log(word);
            textOutput = textOutput + " " + word;
            startIndexWord = i+1;
        }
    }
    return textOutput;
}

function translateRule(word){
    if(word.charAt(0) === "a" || word.charAt(0) === "e" || word.charAt(0) === "i" || word.charAt(0) === "o" || word.charAt(0) === "u"){
        return word + "yay";
    }else{
        word = translateRuleExtend(word);
        return word + "ay";
  //      return word.substring(1, word.length) + word.charAt(0) + "ay";
    }
}

function translateRuleExtend(word){
    if(!(word.charAt(0) === "a" || word.charAt(0) === "e" || word.charAt(0) === "i" || word.charAt(0) === "o" || word.charAt(0) === "u")){
        var tmp = word.substring(1, word.length) + word.charAt(0);
        word = translateRuleExtend(tmp);
        return word;
    }
    return word;
}
