console.log("do ilu gramy?");
let maxScore = prompt("gramy do:");
if(maxScore < 1){
    console.log("ok to nie gramy");
}
else if(maxScore == 1)
    console.log("ok gramy do 1 punkta");
else{
    console.log("ok gramy do "+maxScore+" punktów");
}


let scoreGracz = 0;
let scoreKomputer = 0;
const Body = document.querySelector("#Body");
const Wygrał = document.createElement("div")

const Fire = document.createElement("button")
Fire.setAttribute("id","Fire")
Fire.textContent = "Fire"  
Body.appendChild(Fire)

const Water = document.createElement("button")
Water.setAttribute("id","Water")
Water.textContent = "Water"  
Body.appendChild(Water)

const Grass = document.createElement("button")
Grass.setAttribute("id","Grass")
Grass.textContent = "Grass"  
Body.appendChild(Grass)

const Punkty = document.createElement("div")
Punkty.setAttribute("id","Punkty")
Punkty.textContent = "KOMPUTER vs GRACZ";
Body.appendChild(Punkty)

const Komputer = document.createElement("div")
Komputer.setAttribute("id","Komputer")
Komputer.textContent = scoreKomputer;
Body.appendChild(Komputer)

const Gracz = document.createElement("div")
Gracz.setAttribute("id","Gracz")
Gracz.textContent = scoreGracz;
Body.appendChild(Gracz)

function KomputerRuch(){
    let randomInt =  Math.floor(Math.random() * 3) + 1;
    if(randomInt == 1){
        return "FIRE";
    }
    else if(randomInt == 2){
        return "GRASS";
    }
    else
        return "WATER";
} 

function gra(ruchGracza, ruchKomputera){
    console.log("gracz: " + ruchGracza);
    console.log("komputer: " + ruchKomputera);
    if(ruchGracza == "FIRE"){
        if(ruchKomputera == "WATER"){
            return "nie";
        }
        else if(ruchKomputera == "GRASS"){
            return "tak";
        }
    }
    if(ruchGracza == "WATER"){
        if(ruchKomputera == "GRASS"){
            return "nie";
        }
        else if(ruchKomputera == "FIRE"){
            return "tak";
        }
    }
    if(ruchGracza == "GRASS"){
        if(ruchKomputera == "FIRE"){
            return "nie";
        }
        else if(ruchKomputera == "WATER"){
            return "tak";
        }
    }
}

    function RundeWygrał(RuchGracza){
    if(scoreKomputer == maxScore || scoreGracz == maxScore){
        return
    }
    else{
    let rundeWygrałGracz = gra(RuchGracza, KomputerRuch());
    if(rundeWygrałGracz == "tak"){
        scoreGracz += 1;
        Gracz.textContent = scoreGracz;
        Komputer.textContent = scoreKomputer;
    }
    else if(rundeWygrałGracz == "nie"){
        scoreKomputer += 1;
        Gracz.textContent = scoreGracz;
        Komputer.textContent = scoreKomputer;
    }
    else{
        Gracz.textContent = scoreGracz;
        Komputer.textContent = scoreKomputer;
    }
    if(scoreGracz == maxScore){
        Wygrał.textContent = "GRACZ WYGRAŁ"
        Body.appendChild(Wygrał)
        return;
    }
    else if(scoreKomputer == maxScore){
        Wygrał.textContent = "KOMPUTER WYGRAŁ"
        Body.appendChild(Wygrał)
        return;
    }
    }
}
Fire.addEventListener("click", () => {
    let ruchGracza = "FIRE";
    RundeWygrał(ruchGracza);
});

Water.addEventListener("click", () => {
    let ruchGracza = "WATER";
    RundeWygrał(ruchGracza);
});

Grass.addEventListener("click", () => {
    let ruchGracza = "GRASS";
    RundeWygrał(ruchGracza);
});

