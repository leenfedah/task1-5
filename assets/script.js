const main=document.querySelector ('.main');
const displayArea=document.querySelector('.display-area');
const button=document.querySelector('.button');
main.addEventListener('click',(e) => {
    if(e.target.nodeName=='Button'){
        switch(e.target.textContent){
            case "c":
            clear();
            break;
            case "":
            deleteOneValue();
            break;
            case"=":
            evaluate();
            break;
            default :
              addToDisplayArea(e.target.textContent);
        }
    }
});
function clear (){
      displayArea.textContent="del ";
}
function addToDisplayArea(value){
    displayArea.textContent=displayArea.textContent+value;
}
function deleteOneValue(){
    let currentContent =displayArea.textContent;
    displayArea .textContent=currentContent.substring(0,currentContent.length-1);

}
function evaluate(){
    let 
    try{
        let calculation= math.evaluate(displayArea.textContent);
        displayArea.textContent=calculation;
    }
    catch(error){
        displayArea.textContent="Invalid Operation ";
        console.error(error);
    }
}
