document.querySelector(".start-button").onclick=function (){

   let yourname = prompt("What's you name?")

   if (yourname== null || yourname== " "|| yourname=="") {
    
    document.querySelector(".name span").innerHTML="Unknown";

   } else {
    document.querySelector(".name span").innerHTML=yourname;
    
   }

   document.querySelector(".starter").remove();

   flipstart(blocks);

}


let blockContainer=document.querySelector(".card-container");
let blocks=Array.from(document.querySelector(".card-container").children);
let orderList=Array.from(blocks.keys());

function shuffle(array){

    let current=array.length;
    let temp
    let random;

    while(current>0){

        current--;
        temp=array[current];
        random=Math.floor(Math.random()*19)+1;
        array[current]=array[random];
        
        array[random]=temp;
    }
   
}

shuffle(orderList);


blocks.forEach((block,index) => {

    index=orderList[index];

    block.style.order=index;

    block.addEventListener("click",function(){

        flipCard(block);


    })
});




function flipCard(b){

    b.classList.add("IsFlipped");
    
    let flippedCards = blocks.filter(fblock => fblock.classList.contains('IsFlipped'));
    if (flippedCards.length===2){

        check(flippedCards[0],flippedCards[1]);
        stopclick();
        
    }

}
let wrong=0;

let wrongtrials=document.querySelector(".tries span")
//check if 2 cards alike
function check(card1,card2){

    if(card1.dataset.technology===card2.dataset.technology)
    {

        card1.classList.remove("IsFlipped");
        card2.classList.remove("IsFlipped");  

        card1.classList.add("has-match");
        card2.classList.add("has-match");

    }

    else{


        wrong++
        wrongtrials.innerHTML=wrong;
        setTimeout( ()=> card1.classList.remove("IsFlipped"),1000)
        setTimeout( ()=> card2.classList.remove("IsFlipped"),1000)
    }
}

//stop clicking function
function stopclick(){

    blockContainer.classList.add("no-click");
    setTimeout( () => {blockContainer.classList.remove("no-click")} 
    ,1000);
}

//starting flip
function flipstart(b){

    b.forEach((blk) => {

        blk.classList.add("IsFlipped")
        setTimeout( ()=> blk.classList.remove("IsFlipped"),1250)
        
    })
}