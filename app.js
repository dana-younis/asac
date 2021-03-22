//data type
// hello in the world of cars
//my name is dana younis and this is 2021

//var yourCarsYear="2021";

var yourFavoriteTypeOfCars="welcome To The World Of Cars";
// console.log('hi------------------>')
// console.log(yourFavoriteTypeOfCars)
alert(yourFavoriteTypeOfCars)
confirm("2021");
var theConditionOfYourCar =" YOU must Have A lot Of Money To Buy One Of These Cars";

alert(theConditionOfYourCar);

var yourCarType= prompt("what is your car type?");
//var cost= prampt("how much is it?");

 alert( "hello" + yourCarType);

 


var yourFavoriteCarType= prompt("what is yourFavorite Type Of Car?");

var getyourFavoriteCarType =function(userschoice){
while(yourFavoriteCarType !=='ferrari' && yourFavoriteCarType!=='bmw')
{yourFavoriteCarType=prompt('please only write bmw/ferrari');}

var numberOfPictures = prompt('how many pictures do you want?');

var pictures ='';
var buy='';

if (yourFavoriteCarType=='ferrari'){pictures=('<img src="https://th.bing.com/th/id/OIP.KCbdnzT2uU13heR5RwejNgHaE8?pid=ImgDet&rs=1" />') ;}

else if(yourFavoriteCarType=='bmw'){pictures=('<img src="https://th.bing.com/th/id/OIP.nvcFt1-KD7y-m9pKAxeftgHaE7?w=242&h=180&c=7&o=5&pid=1.7" />') ;}
    

//else{alert('choose between ferrari  or bmw');}
 console.log(pictures);
 for (var j=0;j < numberOfPictures;j++){buy += pictures;}
 console.log(buy);
 document.write(buy);
}
getyourFavoriteCarType();

