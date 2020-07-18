//Assignment quesion 01 -- feetToMiles

function feetToMile(feet){
    const mile = feet/5280;
    return mile;
}
var nanafeet = 5280;
var result = feetToMile(nanafeet);
console.log(nanafeet,"Feet is equal to ",result, "miles");

//Assignment quesion 02 -- woodCalculator

function woodCalculator(chair, table, bed){
    var chairCount = chair*1;
    var tableCount = table*3;
    var bedCount = bed*5;
    var totalCount = chairCount+tableCount+bedCount;
    return totalCount;
}
var totalWood = woodCalculator(5,6,7);
console.log("You need Total ",totalWood, "feet Wood")

//Assignment quesion 03 -- brickCalculator

function brickCalculator(brickNumber){
   
    var a=0;
    var b=0;
    var c=0;
    var sum = 0;
    if(brickNumber>20){
        a=brickNumber-20;
        b=brickNumber-a-10;
        c=brickNumber-10-a;
        sum=sum+(a*10*1000)+(b*12*1000)+(c*15*1000);
        return sum
    }

    else if(brickNumber>10){
        b=brickNumber-10;
        c=brickNumber-b;
        sum=sum+(b*12*1000)+(c*15*1000);
        return sum
    }

    else{
        sum=sum+(c*15*1000);
        return sum;
    }
}

//Assignment quesion 04 -- tinyFriend

function tinyFriend(names){
    var smallest = names[0];
    for (var i = 0; i < names.length; i++) {
        var currentName = names[i];
        if(currentName.length<smallest.length){
            smallest = currentName;
        }
    }
    return smallest;
}

var smallestName = tinyFriend(['mamun','tifa', 'munk']);
console.log("Smallest name is: ",smallestName)

