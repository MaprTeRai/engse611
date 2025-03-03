 //#
 // + - * /
 //ลำดับความสำคัฐจกน้อยไปมาก
//+ -
// * /
//Div Mod
//()
//แล้วแต่ภาที่ใช้ว่าเป็นอะไรลำดับควมสำคัญจะมีการเปลี่ยนแปลง

console.log((1+2)*2-3);

console.log(6 == 0);

console.log(2 == '2');//convert to same type
console.log(2 === '2');//not covert to same type

if ( 2 =='2') console.log("Ok");

if (!( 2 === '2')) console.log("Not To Be Ok");


//&&
// 0 0 = 0
// 0 1 = 0
// 1 0 = 0
// 1 1 = 1

//||
// 0 0 = 0
// 0 1 = 1
// 1 0 = 1
// 1 1 = 1

//Not
// 0 = 1
// 1 = 0

if (true && true) console.log("Ok");

if (true || false) console.log("Or Ok");

if ( (1 == '1') && (3 == '3') && (4 == '4') )
    console.log("OK");
else
    console.log("Not OK");