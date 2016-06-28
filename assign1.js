/**
 * Created by lladefian on 6/24/2016.
 */
//loop through 100-0
for (var beer = 99; beer > 0; --beer){
//if beer is greater than 1 and less than or equal to 99 display lyrics, looping through beer
    if (beer > 1 && beer <=99){
        console.log(beer , 'bottles of beer on the wall,' , beer ,"bottles of beer, take one down pass it around," , beer-1 , "bottles of beer on the wall");
//all else fails print
    }  else {
        console.log(beer , "bottle of beer on the wall");

    }
}