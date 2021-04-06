

var numeriTot = 0;

var bombeTot = 16;

var possibilita = numeriTot - bombe;

var campo = document.getElementById('campo');

var bombe = [];

var difficolta =  prompt('Inserire un tipo di difficoltà \n facile \n medio \n difficile');


   while((difficolta !== 'difficile' && difficolta !== 'medio' && difficolta !== 'facile') || (!isNaN(difficolta)) ){
    difficolta =  prompt('Dato errato , prego inserire un tipo di  difficoltà \n facile \n medio \n difficile');
   }


   switch(difficolta){
       case 'facile' :
           numeriTot = 100;
           break

           case 'medio' :
           numeriTot = 80;
           break

           case 'difficile' :
           numeriTot = 50;
           break
   }


    


  while(bombe.length < bombeTot){
        
    var randomNumber = numberRandom(1 , 100);

       if(! bombe.includes(randomNumber)){
          bombe.push(randomNumber);

         }
  }


for(var i = 1 ; i <= numeriTot ; i++){

    if(! bombe.includes(i)){
        campo.innerHTML += '<li>' + '<p class="minibox">' + i + '</p>' + '</li>' ;
    }
    else{
        campo.innerHTML += '<li>' + '<p class="covid minibox">'+ '</p>' + '</li>' ; 
    }



}

    

    var miniBoxes = document.getElementsByClassName('minibox');

   console.log(miniBoxes);



    for(var i = 0 ; i < miniBoxes.length ; i++){

        var thisBox = miniBoxes[i];

        var thisBomb = bombe[i];

        thisBox.addEventListener('click', 

                    function(){
                        
                        this.className = this.classList + " visibility";

                        var thisNum = parseInt(this.innerHTML);
                        console.log(thisNum);

                        if(isNaN(thisNum)){
                            // console.log(true);
                            alert('Mi dispiace hai preso il covid-19 , RIMETTITI PRESTO !!!! :D');
                            setTimeout(function(){ window.location.reload() }, 3000);
                        }else{
                            // console.log(false);
                            alert('Bravo hai trovato il numero salvo , continua a cercare');
                        }
        
                    })

                  
    }



    







/******************************************************
 *  Functions
 ******************************************************/ 

function numberRandom(min,max){

    return Math.floor(Math.random() * (max - min) +1) + min;


}







        




