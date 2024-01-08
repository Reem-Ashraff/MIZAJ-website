function openTeaWin(){
        window.open('drink-tea.html','_self');
}

function openJuiceWin(){
        window.open('drink-juice.html','_self');
}

function openCoffeeWin(){
        window.open('drink-coffee.html','_self');
}

function openAllDrinksWin(){
        window.open('drinks.html','_self');
}

function openSweetWin(){
        window.open('snacks-sweet.html','_self');
}

function openSaltyWin(){
        window.open('snacks-salty.html','_self');
}

function openNutsWin(){
        window.open('snacks-nuts.html','_self');
}

function openAllSnacksWin(){
        window.open('snacks.html','_self');
}

function addCarrot(ev){
        document.querySelector("#num-of-carrot").value++;
}

function removeCarrot(ev){
        if(document.querySelector("#num-of-carrot").value>0){
                document.querySelector("#num-of-carrot").value--;
        }
}

function addGreenTea(ev){
        document.querySelector("#num-of-green-tea").value++;
}

function removeGreenTea(ev){
        if(document.querySelector("#num-of-green-tea").value>0){
                document.querySelector("#num-of-green-tea").value--;
        }
}

function addWatermelon(ev){
        document.querySelector("#num-of-watermelon").value++;
}

function removeWatermelon(ev){
        if(document.querySelector("#num-of-watermelon").value>0){
                document.querySelector("#num-of-watermelon").value--;
        }
}

function addTurkish(ev){
        document.querySelector("#num-of-turkish-coffee").value++;
}

function removeTurkish(ev){
        if(document.querySelector("#num-of-turkish-coffee").value>0){
                document.querySelector("#num-of-turkish-coffee").value--;
        }
}

function addOrange(ev){
        document.querySelector("#num-of-orange").value++;
}

function removeOrange(ev){
        if(document.querySelector("#num-of-orange").value>0){
                document.querySelector("#num-of-orange").value--;
        }
}

function addTea(ev){
        document.querySelector("#num-of-tea").value++;
}

function removeTea(ev){
        if(document.querySelector("#num-of-tea").value>0){
                document.querySelector("#num-of-tea").value--;
        }
}

function addCelery(ev){
        document.querySelector("#num-of-celery").value++;
}

function removeCelery(ev){
        if(document.querySelector("#num-of-celery").value>0){
                document.querySelector("#num-of-celery").value--;
        }
}

function addLatte(ev){
        document.querySelector("#num-of-latte").value++;
}

function removeLatte(ev){
        if(document.querySelector("#num-of-latte").value>0){
                document.querySelector("#num-of-latte").value--;
        }
}

function addStrawberry(ev){
        document.querySelector("#num-of-strawberry").value++;
}

function removeStrawberry(ev){
        if(document.querySelector("#num-of-strawberry").value>0){
                document.querySelector("#num-of-strawberry").value--;
        }
}

function addCappuccino(ev){
        document.querySelector("#num-of-cappuccino").value++;
}

function removeCappuccino(ev){
        if(document.querySelector("#num-of-cappuccino").value>0){
                document.querySelector("#num-of-cappuccino").value--;
        }
}

function addAmericano(ev){
        document.querySelector("#num-of-americano").value++;
}

function removeAmericano(ev){
        if(document.querySelector("#num-of-americano").value>0){
                document.querySelector("#num-of-americano").value--;
        }
}

function addPineapple(ev){
        document.querySelector("#num-of-pineapple").value++;
}

function removePineapple(ev){
        if(document.querySelector("#num-of-pineapple").value>0){
                document.querySelector("#num-of-pineapple").value--;
        }
}

function addEspresso(ev){
        document.querySelector("#num-of-espresso").value++;
}

function removeEspresso(ev){
        if(document.querySelector("#num-of-espresso").value>0){
                document.querySelector("#num-of-espresso").value--;
        }
}

function addKarak(ev){
        document.querySelector("#num-of-karak").value++;
}

function removeKarak(ev){
        if(document.querySelector("#num-of-karak").value>0){
                document.querySelector("#num-of-karak").value--;
        }
}

function addMacchiato(ev){
        document.querySelector("#num-of-macchiato").value++;
}

function removeMacchiato(ev){
        if(document.querySelector("#num-of-macchiato").value>0){
                document.querySelector("#num-of-macchiato").value--;
        }
}

function addBlackCake(ev){
        document.querySelector("#num-of-black-cake").value++;
}

function removeBlackCake(ev){
        if(document.querySelector("#num-of-black-cake").value>0){
                document.querySelector("#num-of-black-cake").value--;
        }
}

function addPeanutButterBanana(ev){
        document.querySelector("#num-of-Peanut-butter-banana").value++;
}

function removePeanutButterBanana(ev){
        if(document.querySelector("#num-of-Peanut-butter-banana").value>0){
                document.querySelector("#num-of-Peanut-butter-banana").value--;
        }
}

function addPizza(ev){
        document.querySelector("#num-of-pizza").value++;
}

function removePizza(ev){
        if(document.querySelector("#num-of-pizza").value>0){
                document.querySelector("#num-of-pizza").value--;
        }
}

function addDeviledEggs(ev){
        document.querySelector("#num-of-eggs").value++;
}

function removeDeviledEggs(ev){
        if(document.querySelector("#num-of-eggs").value>0){
                document.querySelector("#num-of-eggs").value--;
        }
}

function addFroyoFruitCups(ev){
        document.querySelector("#num-of-froyo-cups").value++;
}

function removeFroyoFruitCups(ev){
        if(document.querySelector("#num-of-froyo-cups").value>0){
                document.querySelector("#num-of-froyo-cups").value--;
        }
}

function addFries(ev){
        document.querySelector("#num-of-fries").value++;
}

function removeFries(ev){
        if(document.querySelector("#num-of-fries").value>0){
                document.querySelector("#num-of-fries").value--;
        }
}

function addPralines(ev){
        document.querySelector("#num-of-pralines").value++;
}

function removePralines(ev){
        if(document.querySelector("#num-of-pralines").value>0){
                document.querySelector("#num-of-pralines").value--;
        }
}

function usernameValidation(ev){
        if(ev.key==" "){
                ev.preventDefault();
                document.getElementById("user-warn").innerHTML="Spaces are not available.";
        }

        var reg=/^[0-9]/;
        if(reg.test(document.getElementById("username").value)){
                document.getElementById("user-warn").innerHTML="Username should not start with number.";
        }
}

function passwordValidation(ev){
        if(ev.key==" "){
                ev.preventDefault();
                document.querySelector("#warning").innerHTML="You should not enter spaces.";
        }
        else if(document.getElementById("pass").value.length<8){
                document.querySelector("#warning").innerHTML="Password should be more than 8 digits.";
        }
        else if(document.getElementById("pass").value.length>=8){
                document.querySelector("#warning").innerHTML="";
        }
}

function signinValidation(ev){
        if(document.querySelector("#pass1").value!=document.querySelector("#pass").value){
                document.querySelector("#warn").innerHTML="The password and confirmation password do not match.";
                ev.preventDefault();
        }

        var reg=/^[0-9]/;
        if(reg.test(document.getElementById("username").value)){
                document.getElementById("user-warn").innerHTML="Username should not start with number.";
                ev.preventDefault();
        }

        if(document.getElementById("pass").value.length<8){
                document.querySelector("#warning").innerHTML="Password should be more than 8 digits.";
                ev.preventDefault();
        }
        else if(document.getElementById("pass").value.length>=8){
                document.querySelector("#warning").innerHTML="";
        }
}

function backPage(){
        window.history.back();
}

function pageUp(){
        window.scrollTo(0,0)
}