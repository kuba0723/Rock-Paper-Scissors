console.log("do ilu gramy?");
let rundy = prompt("gramy do:");
console.log("ok gramy do "+rundy+" rund")

function KomputerRuch(){
    let ranInt =  Math.floor(Math.random() * 3) + 1
    if(ranInt == 1){
        return "KAMIEŃ"
    }
    else if(ranInt == 2){
        return "NOŻYCE"
    }
    else
        return "PAPIER"
}

let array = ["KAMIEŃ","PAPIER","NOŻYCE"]

function GraczRuch(){
    let gracz = prompt("wybierz kamień, papier lub nożyce")
    gracz = gracz.toUpperCase()
    while(!array.includes(gracz)){
        gracz = prompt("Ej ale to musi być KAMIEŃ, PAPIER albo NOŻYCE!!!")
        gracz = gracz.toUpperCase()
    }
    return gracz
}

function gra(RuchGracz, RuchKomputer){
    console.log("gracz: " + RuchGracz)
    console.log("komputer: " + RuchKomputer)
        if(RuchGracz == "KAMIEŃ"){
            if(RuchKomputer == "PAPIER"){
                return "nie";
            }
            else if(RuchKomputer == "NOŻYCE"){
                return "tak";
            }}
        if(RuchGracz == "PAPIER"){
            if(RuchKomputer == "NOŻYCE"){
                return "nie"
            }
            else if(RuchKomputer == "KAMIEŃ"){
                return "tak"
            }
        }
        if(RuchGracz == "NOŻYCE"){
            if(RuchKomputer == "KAMIEŃ"){
                return "nie"
            }
            else if(RuchKomputer == "PAPIER"){
                return "tak"
            }
        }
    }

    
    let scoreGracz = 0
    let scoreKomputer = 0
    let mecz

while(scoreGracz < rundy || scoreKomputer < rundy){
    mecz = gra(GraczRuch(), KomputerRuch())
        if(mecz == "tak"){
            scoreGracz += 1
        console.log("KOMPUTER vs GRACZ\n    "+scoreKomputer+"         "+scoreGracz)
        }
        else if(mecz == "nie"){
        scoreKomputer += 1
        console.log("KOMPUTER vs GRACZ\n    "+scoreKomputer+"         "+scoreGracz)
        }
        else{
            console.log("KOMPUTER vs GRACZ\n    "+scoreKomputer+"         "+scoreGracz)
        }
    if(scoreGracz == rundy){
        alert("gracz wygrał")
        break;
    }
    else if(scoreKomputer == rundy){
        alert("Komputer wygrał")
        break;
    }
}