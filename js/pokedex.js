const fetchPokemon = () => {
    const pokeName = document.getElementById("idName","idNumber");
    let pokeInput= pokeName.value.toLowerCase();
    const url = `https://pokeapi.co/api/v2/pokemon/${pokeInput}`;
    fetch(url).then((res) => {
        if(res.status!=200){
            console.log(res)
            pokeImageError("./img/error.png")
            pokeNumber("???")
            Name("???")
            principalType("???")
            secondaryType("???")
            height("???")
            weight("???")
            base("??????")
            effort("??????")
            pokemonMoves("????")
        }
        else{
            return res.json();
            
        }
        
    }).then((data) => {
        console.log(data);
        //Image
        let pokeImg=data.sprites.other.home.front_default;
        console.log(pokeImg);
        pokeImage(pokeImg);
        //Number
        let pokeNum=data.id
        console.log("N.°"+pokeNum);
        pokeNumber(pokeNum);
        //Name
        let pokeName=data.name
        console.log("Name: "+pokeName)
        Name(pokeName)
        //Principal Type
        let pokeType1=data.types[0].type.name;
            console.log("Principal Type: "+pokeType1);
            principalType(pokeType1);
        //Secondary Type
        let pokeType2;
        if(typeof data.types[1]=="undefined"){
            pokeType2="-";
            console.log("Secondary Type: "+pokeType2)
            secondaryType(pokeType2)
        }
        else{
            if(data.types[1]=='bug','dark','dragon','steel','electric','fairy','fighting','fire','flying','ghost','grass','ground','ice','normal','poison','psychic','rock','water'){
                pokeType2=data.types[1].type.name;
                console.log("Secondary Type: "+pokeType2);
                secondaryType(pokeType2);
            }  
            
        }
        //Height
        let pokeHeight=data.height;
            pokeHeight=pokeHeight/10;
            console.log("Height: "+pokeHeight+"m");
            height(pokeHeight);
        //Weight
        let pokeWeight=data.weight;
            pokeWeight=pokeWeight/10;
            console.log("Weight: "+pokeWeight+"Kg");
            weight(pokeWeight);
        //Base Stat
        let baseStat=[];
        for(i=0;i<6;i++){
        baseStat[i]=data.stats[i].base_stat;
            console.log(data.stats[i].stat.name+" Base: "+baseStat[i]);
            base(baseStat,i)
        }
        //Effort Stat
        let effortStat=[];
        for(i=0;i<6;i++){
        effortStat[i]=data.stats[i].effort;
            console.log(data.stats[i].stat.name+" Effort: "+effortStat[i]);
            effort(effortStat, i);
        }
        //moves
        let pokeMoves=[];
        for(i=0;i<3;i++){
        pokeMoves[i]=data.moves[i].move.name;
            console.log(pokeMoves[i]);
            pokemonMoves(pokeMoves, i);
            
        }
        //button1(pokeMoves[0]) 
        //console.log(this, pokeMoves[0]);
        
        
    })
}

//-------------------------Display on HTML---------------------

//Images
const pokeImage = (url) => {

    const pokeImg=document.getElementById("pokeImg");
    pokeImg.className="pokeImage";
    pokeImg.src=url;

}

const pokeImageError = (url) => {

    const pokeImg=document.getElementById("pokeImg");
    pokeImg.className="pokeball";
    pokeImg.src=url;

}

//Number
const pokeNumber = (pokeNum) => {

    const pokeNumb=document.getElementById("pokeNum");
    
    if(pokeNum!="???"){
        pokeNumb.classList.remove("null")
        pokeNumb.className="pokeNumber"
        pokeNumb.innerHTML="N.°"+ pokeNum;
    }
    else{
        pokeNumb.className="null"
    }
    
}

//Name
const Name = (pokeName) => {

    const pokemonName=document.getElementById("Name");
    if(pokeName!="???"){
    pokemonName.classList.remove("null")
    pokemonName.className="pokeName";
    pokemonName.innerHTML=`${pokeName}`;
    }
    else{
        pokemonName.className="null"
    }
}

//Principal Type
const principalType = (pokeType1) => {

    const pokemonType1=document.getElementById("type1");

    switch (pokeType1){

        case '???':
            pokemonType1.classList.remove('typeBug','typeDark','typeDragon','typeSteel','typeElectric','typeFairy','typeFighting','typeFire','typeFlying','typeGhost','typeGrass','typeGround','typeIce','typeNormal','typePoison','typePsychic','typeRock','typeWater')
            pokemonType1.className='null';
        break
        
        case 'bug':
            pokemonType1.classList.remove('null','typeDark','typeDragon','typeSteel','typeElectric','typeFairy','typeFighting','typeFire','typeFlying','typeGhost','typeGrass','typeGround','typeIce','typeNormal','typePoison','typePsychic','typeRock','typeWater')
            pokemonType1.classList.add('typeBug');
            pokemonType1.innerHTML=`${pokeType1}`;
        break

        case 'dark':
            pokemonType1.classList.remove('null','typeBug','typeDragon','typeSteel','typeElectric','typeFairy','typeFighting','typeFire','typeFlying','typeGhost','typeGrass','typeGround','typeIce','typeNormal','typePoison','typePsychic','typeRock','typeWater')
            pokemonType1.classList.add('typeDark');
            pokemonType1.innerHTML=`${pokeType1}`;
        break

        
        case 'dragon':
            pokemonType1.classList.remove('null','typeBug','typeDark','typeSteel','typeElectric','typeFairy','typeFighting','typeFire','typeFlying','typeGhost','typeGrass','typeGround','typeIce','typeNormal','typePoison','typePsychic','typeRock','typeWater')
            pokemonType1.classList.add('typeDragon');
            pokemonType1.innerHTML=`${pokeType1}`;
        break


        case 'steel':
            pokemonType1.classList.remove('null','typeBug','typeDark','typeDragon','typeElectric','typeFairy','typeFighting','typeFire','typeFlying','typeGhost','typeGrass','typeGround','typeIce','typeNormal','typePoison','typePsychic','typeRock','typeWater')
            pokemonType1.classList.add('typeSteel');
            pokemonType1.innerHTML=`${pokeType1}`;
            
        break

        case 'electric':
            pokemonType1.classList.remove('null','typeBug','typeDark','typeDragon','typeSteel','typeFairy','typeFighting','typeFire','typeFlying','typeGhost','typeGrass','typeGround','typeIce','typeNormal','typePoison','typePsychic','typeRock','typeWater')
            pokemonType1.classList.add('typeElectric');
            pokemonType1.innerHTML=`${pokeType1}`;
        break

        case 'fairy':
            pokemonType1.classList.remove('null','typeBug','typeDark','typeDragon','typeSteel','typeElectric','typeFighting','typeFire','typeFlying','typeGhost','typeGrass','typeGround','typeIce','typeNormal','typePoison','typePsychic','typeRock','typeWater')
            pokemonType1.classList.add('typeFairy');
            pokemonType1.innerHTML=`${pokeType1}`;
        break

        case 'fighting':
            pokemonType1.classList.remove('null','typeBug','typeDark','typeDragon','typeSteel','typeElectric','typeFairy','typeFire','typeFlying','typeGhost','typeGrass','typeGround','typeIce','typeNormal','typePoison','typePsychic','typeRock','typeWater')
            pokemonType1.classList.add('typeFighting');
            pokemonType1.innerHTML=`${pokeType1}`;
        break

        case 'fire':
            pokemonType1.classList.remove('null','typeBug','typeDark','typeDragon','typeSteel','typeElectric','typeFairy','typeFighting','typeFlying','typeGhost','typeGrass','typeGround','typeIce','typeNormal','typePoison','typePsychic','typeRock','typeWater')
            pokemonType1.classList.add('typeFire');
            pokemonType1.innerHTML=`${pokeType1}`;
        break

        case 'flying':
            pokemonType1.classList.remove('null','typeBug','typeDark','typeDragon','typeSteel','typeElectric','typeFairy','typeFighting','typeFire','typeGhost','typeGrass','typeGround','typeIce','typeNormal','typePoison','typePsychic','typeRock','typeWater')
            pokemonType1.classList.add('typeFlying');
            pokemonType1.innerHTML=`${pokeType1}`;
        break

        case 'ghost':
            pokemonType1.classList.remove('null','typeBug','typeDark','typeDragon','typeSteel','typeElectric','typeFairy','typeFighting','typeFire','typeFlying','typeGrass','typeGround','typeIce','typeNormal','typePoison','typePsychic','typeRock','typeWater')
            pokemonType1.classList.add('typeGhost');
            pokemonType1.innerHTML=`${pokeType1}`;
        break

        case 'grass':
            pokemonType1.classList.remove('null','typeBug','typeDark','typeDragon','typeSteel','typeElectric','typeFairy','typeFighting','typeFire','typeFlying','typeGhost','typeGround','typeIce','typeNormal','typePoison','typePsychic','typeRock','typeWater')
            pokemonType1.classList.add('typeGrass');
            pokemonType1.innerHTML=`${pokeType1}`;
        break

        case 'ground':
            pokemonType1.classList.remove('null','typeBug','typeDark','typeDragon','typeSteel','typeElectric','typeFairy','typeFighting','typeFire','typeFlying','typeGhost','typeGrass','typeIce','typeNormal','typePoison','typePsychic','typeRock','typeWater')
            pokemonType1.classList.add('typeGround');
            pokemonType1.innerHTML=`${pokeType1}`;
        break

        case 'ice':
            pokemonType1.classList.remove('null','typeBug','typeDark','typeDragon','typeSteel','typeElectric','typeFairy','typeFighting','typeFire','typeFlying','typeGhost','typeGrass','typeGround','typeNormal','typePoison','typePsychic','typeRock','typeWater')
            pokemonType1.classList.add('typeIce');
            pokemonType1.innerHTML=`${pokeType1}`;
        break

        case 'normal':
            pokemonType1.classList.remove('null','typeBug','typeDark','typeDragon','typeSteel','typeElectric','typeFairy','typeFighting','typeFire','typeFlying','typeGhost','typeGrass','typeGround','typeIce','typePoison','typePsychic','typeRock','typeWater')
            pokemonType1.classList.add('typeNormal');
            pokemonType1.innerHTML=`${pokeType1}`;
        break

        case 'poison':
            pokemonType1.classList.remove('null','typeBug','typeDark','typeDragon','typeSteel','typeElectric','typeFairy','typeFighting','typeFire','typeFlying','typeGhost','typeGrass','typeGround','typeIce','typeNormal','typePsychic','typeRock','typeWater')
            pokemonType1.classList.add('typePoison');
            pokemonType1.innerHTML=`${pokeType1}`;
        break

        case 'psychic':
            pokemonType1.classList.remove('null','typeBug','typeDark','typeDragon','typeSteel','typeElectric','typeFairy','typeFighting','typeFire','typeFlying','typeGhost','typeGrass','typeGround','typeIce','typeNormal','typePoison','typeRock','typeWater')
            pokemonType1.classList.add('typePsychic');
            pokemonType1.innerHTML=`${pokeType1}`;
        break

        case 'rock':
            pokemonType1.classList.remove('null','typeBug','typeDark','typeDragon','typeSteel','typeElectric','typeFairy','typeFighting','typeFire','typeFlying','typeGhost','typeGrass','typeGround','typeIce','typeNormal','typePoison','typePsychic','typeWater')
            pokemonType1.classList.add('typeRock');
            pokemonType1.innerHTML=`${pokeType1}`;
        break

        case 'water':
            pokemonType1.classList.remove('null','typeBug','typeDark','typeDragon','typeSteel','typeElectric','typeFairy','typeFighting','typeFire','typeFlying','typeGhost','typeGrass','typeGround','typeIce','typeNormal','typePoison','typePsychic','typeRock')
            pokemonType1.classList.add('typeWater');
            pokemonType1.innerHTML=`${pokeType1}`;
        break

    }

}

//Secondary Type
const secondaryType = (pokeType2) => {

    const pokemonType2=document.getElementById("type2");
    
    switch (pokeType2){

        case '???':
            pokemonType2.classList.remove('noneType','typeBug','typeDark','typeDragon','typeSteel','typeElectric','typeFairy','typeFighting','typeFire','typeFlying','typeGhost','typeGrass','typeGround','typeIce','typeNormal','typePoison','typePsychic','typeRock','typeWater')
            pokemonType2.className='null';
        break
        
        case '-':
            pokemonType2.classList.remove('typeBug','typeDark','typeDragon','typeSteel','typeElectric','typeFairy','typeFighting','typeFire','typeFlying','typeGhost','typeGrass','typeGround','typeIce','typeNormal','typePoison','typePsychic','typeRock','typeWater')
            pokemonType2.classList.add('noneType');
            pokemonType2.innerHTML=`${pokeType2}`;
        break
        
        case 'bug':
            pokemonType2.classList.remove('noneType','null','typeDark','typeDragon','typeSteel','typeElectric','typeFairy','typeFighting','typeFire','typeFlying','typeGhost','typeGrass','typeGround','typeIce','typeNormal','typePoison','typePsychic','typeRock','typeWater')
            pokemonType2.classList.add('typeBug');
            pokemonType2.innerHTML=`${pokeType2}`;
        break
    
        case 'dark':
            pokemonType2.classList.remove('noneType','null','typeBug','typeDragon','typeSteel','typeElectric','typeFairy','typeFighting','typeFire','typeFlying','typeGhost','typeGrass','typeGround','typeIce','typeNormal','typePoison','typePsychic','typeRock','typeWater')
            pokemonType2.classList.add('typeDark');
            pokemonType2.innerHTML=`${pokeType2}`;
        break
    
        
        case 'dragon':
            pokemonType2.classList.remove('noneType','null','typeBug','typeDark','typeSteel','typeElectric','typeFairy','typeFighting','typeFire','typeFlying','typeGhost','typeGrass','typeGround','typeIce','typeNormal','typePoison','typePsychic','typeRock','typeWater')
            pokemonType2.classList.add('typeDragon');
            pokemonType2.innerHTML=`${pokeType2}`;
        break
    
    
        case 'steel':
            pokemonType2.classList.remove('noneType','null','typeBug','typeDark','typeDragon','typeElectric','typeFairy','typeFighting','typeFire','typeFlying','typeGhost','typeGrass','typeGround','typeIce','typeNormal','typePoison','typePsychic','typeRock','typeWater')
            pokemonType2.classList.add('typeSteel');
            pokemonType2.innerHTML=`${pokeType2}`;
            
        break
    
        case 'electric':
            pokemonType2.classList.remove('noneType','null','typeBug','typeDark','typeDragon','typeSteel','typeFairy','typeFighting','typeFire','typeFlying','typeGhost','typeGrass','typeGround','typeIce','typeNormal','typePoison','typePsychic','typeRock','typeWater')
            pokemonType2.classList.add('typeElectric');
            pokemonType2.innerHTML=`${pokeType2}`;
        break
    
        case 'fairy':
            pokemonType2.classList.remove('noneType','null','typeBug','typeDark','typeDragon','typeSteel','typeElectric','typeFighting','typeFire','typeFlying','typeGhost','typeGrass','typeGround','typeIce','typeNormal','typePoison','typePsychic','typeRock','typeWater')
            pokemonType2.classList.add('typeFairy');
            pokemonType2.innerHTML=`${pokeType2}`;
        break
    
        case 'fighting':
            pokemonType2.classList.remove('noneType','null','typeBug','typeDark','typeDragon','typeSteel','typeElectric','typeFairy','typeFire','typeFlying','typeGhost','typeGrass','typeGround','typeIce','typeNormal','typePoison','typePsychic','typeRock','typeWater')
            pokemonType2.classList.add('typeFighting');
            pokemonType2.innerHTML=`${pokeType2}`;
        break
    
        case 'fire':
            pokemonType2.classList.remove('noneType','null','typeBug','typeDark','typeDragon','typeSteel','typeElectric','typeFairy','typeFighting','typeFlying','typeGhost','typeGrass','typeGround','typeIce','typeNormal','typePoison','typePsychic','typeRock','typeWater')
            pokemonType2.classList.add('typeFire');
            pokemonType2.innerHTML=`${pokeType2}`;
        break
    
        case 'flying':
            pokemonType2.classList.remove('noneType','null','typeBug','typeDark','typeDragon','typeSteel','typeElectric','typeFairy','typeFighting','typeFire','typeGhost','typeGrass','typeGround','typeIce','typeNormal','typePoison','typePsychic','typeRock','typeWater')
            pokemonType2.classList.add('typeFlying');
            pokemonType2.innerHTML=`${pokeType2}`;
        break
    
        case 'ghost':
            pokemonType2.classList.remove('noneType','null','typeBug','typeDark','typeDragon','typeSteel','typeElectric','typeFairy','typeFighting','typeFire','typeFlying','typeGrass','typeGround','typeIce','typeNormal','typePoison','typePsychic','typeRock','typeWater')
            pokemonType2.classList.add('typeGhost');
            pokemonType2.innerHTML=`${pokeType2}`;
        break
    
        case 'grass':
            pokemonType2.classList.remove('noneType','null','typeBug','typeDark','typeDragon','typeSteel','typeElectric','typeFairy','typeFighting','typeFire','typeFlying','typeGhost','typeGround','typeIce','typeNormal','typePoison','typePsychic','typeRock','typeWater')
            pokemonType2.classList.add('typeGrass');
            pokemonType2.innerHTML=`${pokeType2}`;
        break
    
        case 'ground':
            pokemonType2.classList.remove('noneType','null','typeBug','typeDark','typeDragon','typeSteel','typeElectric','typeFairy','typeFighting','typeFire','typeFlying','typeGhost','typeGrass','typeIce','typeNormal','typePoison','typePsychic','typeRock','typeWater')
            pokemonType2.classList.add('typeGround');
            pokemonType2.innerHTML=`${pokeType2}`;
        break
    
        case 'ice':
            pokemonType2.classList.remove('noneType','null','typeBug','typeDark','typeDragon','typeSteel','typeElectric','typeFairy','typeFighting','typeFire','typeFlying','typeGhost','typeGrass','typeGround','typeNormal','typePoison','typePsychic','typeRock','typeWater')
            pokemonType2.classList.add('typeIce');
            pokemonType2.innerHTML=`${pokeType2}`;
        break
    
        case 'normal':
            pokemonType2.classList.remove('noneType','null','typeBug','typeDark','typeDragon','typeSteel','typeElectric','typeFairy','typeFighting','typeFire','typeFlying','typeGhost','typeGrass','typeGround','typeIce','typePoison','typePsychic','typeRock','typeWater')
            pokemonType2.classList.add('typeNormal');
            pokemonType2.innerHTML=`${pokeType2}`;
        break
    
        case 'poison':
            pokemonType2.classList.remove('noneType','null','typeBug','typeDark','typeDragon','typeSteel','typeElectric','typeFairy','typeFighting','typeFire','typeFlying','typeGhost','typeGrass','typeGround','typeIce','typeNormal','typePsychic','typeRock','typeWater')
            pokemonType2.classList.add('typePoison');
            pokemonType2.innerHTML=`${pokeType2}`;
        break
    
        case 'psychic':
            pokemonType2.classList.remove('noneType','null','typeBug','typeDark','typeDragon','typeSteel','typeElectric','typeFairy','typeFighting','typeFire','typeFlying','typeGhost','typeGrass','typeGround','typeIce','typeNormal','typePoison','typeRock','typeWater')
            pokemonType2.classList.add('typePsychic');
            pokemonType2.innerHTML=`${pokeType2}`;
        break
    
        case 'rock':
            pokemonType2.classList.remove('noneType','null','typeBug','typeDark','typeDragon','typeSteel','typeElectric','typeFairy','typeFighting','typeFire','typeFlying','typeGhost','typeGrass','typeGround','typeIce','typeNormal','typePoison','typePsychic','typeWater')
            pokemonType2.classList.add('typeRock');
            pokemonType2.innerHTML=`${pokeType2}`;
        break
    
        case 'water':
            pokemonType2.classList.remove('noneType','null','typeBug','typeDark','typeDragon','typeSteel','typeElectric','typeFairy','typeFighting','typeFire','typeFlying','typeGhost','typeGrass','typeGround','typeIce','typeNormal','typePoison','typePsychic','typeRock')
            pokemonType2.classList.add('typeWater');
            pokemonType2.innerHTML=`${pokeType2}`;
        break
    
    }

}

//Height
const height= (pokeHeight) =>{

    const pokemonHeight=document.getElementById("height");
    if(pokeHeight!="???"){
        pokemonHeight.classList.remove("null")
        pokemonHeight.className="pokeHeight"
        pokemonHeight.innerHTML="Altura: "+pokeHeight+"m";
    }
    else{
        pokemonHeight.classList.add("null");
    }

}

//Weight
const weight= (pokeWeight) =>{

    const pokemonWeight=document.getElementById("weight");
    if(pokeWeight!="???"){
        pokemonWeight.classList.remove("null")
        pokemonWeight.className="pokeWeight"
        pokemonWeight.innerHTML="Peso: "+pokeWeight+"Kg";
    }
    else{
        pokemonWeight.classList.add("null")
    }  
}

//Base Stats
const base = (baseStat, i) => {
    const pokemonBase=[];
    for(i=0;i<6;i++){
        
        if(baseStat[i]!="?"){
        switch(i){
            case 0:
                pokemonBase[i]=document.getElementById("hpBase");
                pokemonBase[i].classList.remove("null")
                pokemonBase[i].classList.add("divpoints")
                pokemonBase[i].innerHTML=baseStat[i];
            break
            case 1:
                pokemonBase[i]=document.getElementById("attackBase");
                pokemonBase[i].classList.remove("null")
                pokemonBase[i].classList.add("divpoints")
                pokemonBase[i].innerHTML=baseStat[i];
            break
            case 2:
                pokemonBase[i]=document.getElementById("defenseBase");
                pokemonBase[i].classList.remove("null")
                pokemonBase[i].classList.add("divpoints")
                pokemonBase[i].innerHTML=baseStat[i];
            break
            case 3:
                pokemonBase[i]=document.getElementById("spAtkBase");
                pokemonBase[i].classList.remove("null")
                pokemonBase[i].classList.add("divpoints")
                pokemonBase[i].innerHTML=baseStat[i];
            break
            case 4:
                pokemonBase[i]=document.getElementById("spDefBase");
                pokemonBase[i].classList.remove("null")
                pokemonBase[i].classList.add("divpoints")
                pokemonBase[i].innerHTML=baseStat[i];
            break
            case 5:
                pokemonBase[i]=document.getElementById("speedBase");
                pokemonBase[i].classList.remove("null")
                pokemonBase[i].classList.add("divpoints")
                pokemonBase[i].innerHTML=baseStat[i];
            break
        }
        }
        else{
            
            console.log(pokemonBase)
            pokemonBase[i]=document.getElementById("hpBase");
            pokemonBase[i].classList.remove("divpoints")
            pokemonBase[i].classList.add("null");

            pokemonBase[i]=document.getElementById("attackBase");
            pokemonBase[i].classList.remove("divpoints")
            pokemonBase[i].classList.add("null");

            pokemonBase[i]=document.getElementById("defenseBase");
            pokemonBase[i].classList.remove("divpoints")
            pokemonBase[i].classList.add("null");

            pokemonBase[i]=document.getElementById("spAtkBase");
            pokemonBase[i].classList.remove("divpoints")
            pokemonBase[i].classList.add("null");

            pokemonBase[i]=document.getElementById("spDefBase");
            pokemonBase[i].classList.remove("divpoints")
            pokemonBase[i].classList.add("null");

            pokemonBase[i]=document.getElementById("speedBase")
            pokemonBase[i].classList.remove("divpoints")
            pokemonBase[i].classList.add("null");
          
           
        }  
    }
    
}

//Effort Stats
const effort = (effortStat, i) => {
    const pokemonEffort=[];
    for(i=0;i<6;i++){

        if(effortStat[i]!="?"){
        
        switch(i){
            case 0:
                pokemonEffort[i]=document.getElementById("hpEffort");
                pokemonEffort[i].classList.remove("null")
                pokemonEffort[i].classList.add("divpoints")
                pokemonEffort[i].innerHTML=effortStat[i];
            break
            case 1:
                pokemonEffort[i]=document.getElementById("attackEffort");
                pokemonEffort[i].classList.remove("null")
                pokemonEffort[i].classList.add("divpoints")
                pokemonEffort[i].innerHTML=effortStat[i];
            break
            case 2:
                pokemonEffort[i]=document.getElementById("defenseEffort");
                pokemonEffort[i].classList.remove("null")
                pokemonEffort[i].classList.add("divpoints")
                pokemonEffort[i].innerHTML=effortStat[i];
            break
            case 3:
                pokemonEffort[i]=document.getElementById("spAtkEffort");
                pokemonEffort[i].classList.remove("null")
                pokemonEffort[i].classList.add("divpoints")
                pokemonEffort[i].innerHTML=effortStat[i];
            break
            case 4:
                pokemonEffort[i]=document.getElementById("spDefEffort");
                pokemonEffort[i].classList.remove("null")
                pokemonEffort[i].classList.add("divpoints")
                pokemonEffort[i].innerHTML=effortStat[i];
            break
            case 5:
                pokemonEffort[i]=document.getElementById("speedEffort");
                pokemonEffort[i].classList.remove("null")
                pokemonEffort[i].classList.add("divpoints")
                pokemonEffort[i].innerHTML=effortStat[i];
            break
        }
    }
    else{
            
        console.log(pokemonEffort)
        pokemonEffort[i]=document.getElementById("hpEffort");
        pokemonEffort[i].classList.remove("divpoints")
        pokemonEffort[i].classList.add("null")
        
        pokemonEffort[i]=document.getElementById("attackEffort");
        pokemonEffort[i].classList.remove("divpoints")
        pokemonEffort[i].classList.add("null")
        
        pokemonEffort[i]=document.getElementById("defenseEffort");
        pokemonEffort[i].classList.remove("divpoints")
        pokemonEffort[i].classList.add("null")
        
        pokemonEffort[i]=document.getElementById("spAtkEffort");
        pokemonEffort[i].classList.remove("divpoints")
        pokemonEffort[i].classList.add("null")
        
        pokemonEffort[i]=document.getElementById("spDefEffort");
        pokemonEffort[i].classList.remove("divpoints")
        pokemonEffort[i].classList.add("null");

        pokemonEffort[i]=document.getElementById("speedEffort")
        pokemonEffort[i].classList.remove("divpoints")
        pokemonEffort[i].classList.add("null");
      
       
    }  
        
    }
}

//Moves

const pokemonMoves = (pokeMoves,i) => {

    const pokemonMoves=[];
    for(i=0;i<3;i++){

        if(pokeMoves[i]!="?"){
        
        switch(i){
            case 0:
                pokemonMoves[i]=document.getElementById("move1");
                pokemonMoves[i].classList.remove("null")
                pokemonMoves[i].classList.add("moveName")
                pokemonMoves[i].innerHTML=pokeMoves[i];
            break
            case 1:
                pokemonMoves[i]=document.getElementById("move2");
                pokemonMoves[i].classList.remove("null")
                pokemonMoves[i].classList.add("moveName")
                pokemonMoves[i].innerHTML=pokeMoves[i];
            break
            case 2:
                pokemonMoves[i]=document.getElementById("move3");
                pokemonMoves[i].classList.remove("null")
                pokemonMoves[i].classList.add("moveName")
                pokemonMoves[i].innerHTML=pokeMoves[i];
            break
            case 3:
                pokemonMoves[i]=document.getElementById("move4");
                pokemonMoves[i].classList.remove("null")
                pokemonMoves[i].classList.add("moveName")
                pokemonMoves[i].innerHTML=pokeMoves[i];
            break
            
        }
    }
    else{
            
        console.log(pokemonMoves)
        pokemonMoves[i]=document.getElementById("move1");
        pokemonMoves[i].classList.remove("moveName")
        pokemonMoves[i].classList.add("null")
        
        pokemonMoves[i]=document.getElementById("move2");
        pokemonMoves[i].classList.remove("moveName")
        pokemonMoves[i].classList.add("null")
        
        pokemonMoves[i]=document.getElementById("move3");
        pokemonMoves[i].classList.remove("moveName")
        pokemonMoves[i].classList.add("null")
        
        pokemonMoves[i]=document.getElementById("move4");
        pokemonMoves[i].classList.remove("moveName")
        pokemonMoves[i].classList.add("null")
    
      
       
    }  
        
    }


}

/*const button1 = (pokeMoves) => {

    let Move;
    console.log(pokeMoves);
    Move=document.getElementById("move1");
    Move.classList.remove("null")
    Move.classList.add("moveName")
    Move.innerHTML=pokeMoves;
    

}*/

/*const button2 = (numMove) =>{

    numMove=1;

}

const pokemonMoves = (pokeMoves) => {
    const Move=[];
    let numMove;
    console.log(numMove);
        switch(numMove){

            case 0:
                Move[0]=document.getElementById("move1");
                Move[0].classList.remove("null")
                Move[0].classList.add("moveName")
                Move[0].innerHTML=pokeMoves[0];
            break
            case 1:
                Move[1]=document.getElementById("move2");
                Move[1].classList.remove("null")
                Move[1].classList.add("moveName")
                Move[1].innerHTML=pokeMoves[1];
            break
            case 2:
                Move[2]=document.getElementById("move3");
                Move[2].classList.remove("null")
                Move[2].classList.add("moveName")
                Move[2].innerHTML=pokeMoves[2];
            break
            case 3:
                Move[3]=document.getElementById("move4");
                Move[3].classList.remove("null")
                Move[3].classList.add("moveName")
                Move[3].innerHTML=pokeMoves[3];
            break
            case 4:
                Move[4]=document.getElementById("move5");
                Move[4].classList.remove("null")
                Move[4].classList.add("moveName")
                Move[4].innerHTML=pokeMoves[4];
            break
            case 5:
                Move[5]=document.getElementById("move6");
                Move[5].classList.remove("null")
                Move[5].classList.add("moveName")
                Move[5].innerHTML=pokeMoves[5];
            break
            case 6:
                Move[6]=document.getElementById("move7");
                Move[6].classList.remove("null")
                Move[6].classList.add("moveName")
                Move[6].innerHTML=pokeMoves[6];
            break
            case 7:
                Move[7]=document.getElementById("move8");
                Move[7].classList.remove("null")
                Move[7].classList.add("moveName")
                Move[7].innerHTML=pokeMoves[7];
            break
            case 8:
                Move[8]=document.getElementById("move9");
                Move[8].classList.remove("null")
                Move[8].classList.add("moveName")
                Move[8].innerHTML=pokeMoves[8];
            break
            case 9:
                Move[9]=document.getElementById("move10");
                Move[9].classList.remove("null")
                Move[9].classList.add("moveName")
                Move[9].innerHTML=pokeMoves[9];
            break
        } 
}*/

