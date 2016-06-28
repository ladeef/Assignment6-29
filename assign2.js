/**
 * Created by lladefian on 6/28/2016.
 */
//declare arrays
    var streetnum =['123', '788','2235','160','998'];
    var streetname = ['evergreen terr', 'elm st', 'fake st', 'park dr'];
    var cityname = ['LegoLand', 'Toronto','Pyongyang', 'Atlanta'];
    var statename = ['Texas','Georgia','New York','Alabamy'];
    var zipcode = ['90210','30030','75007','56984'];{

//generate random value from array
    var rannum = streetnum[Math.floor(Math.random()*streetnum.length)];
    var ranstreet = streetname[Math.floor(Math.random()*streetname.length)];
    var rancity = cityname[Math.floor(Math.random()*cityname.length)];
    var ranstate = statename[Math.floor(Math.random()*statename.length)];
    var ranzip = zipcode[Math.floor(Math.random()*zipcode.length)];
//print conc values as address
    console.log(rannum + ' ' + ranstreet + ' ' + rancity + ' ' + ranstate + ' ' + ranzip );

}