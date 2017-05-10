// document.onload = function(){
 var bb = document.getElementById("butt-1");
// console.log("BB is" + bb);
 bb.onclick= ()=>{
   console.log("Button clicked");
 };
// };

var arr = ["as","df","gh","jk"];

let t02=document.getElementById("butt-2");
t02.onclick=()=>{
  spread(arr);
};

let t03=document.getElementById("butt-3");
t03.onclick=()=>{
  array(arr);
};

let t04=document.getElementById("butt-4");
t04.onclick=()=>{
  argument(arr);
};

// let t05=document.getElementById("butt-5");
// t05.onlick=(var s = 2)=>{
//   console.log(arguments[0]);
// }

var spread= (...array_nums)=> {
  console.log("the arugment is: " + array_nums + " and " );
    array_nums.foreach((i)=>{
      console.log(array_num[i]);
    });
    // for(var i=0; i<array_nums.length;i++){
    //   console.log(array_nums[i]);
    // }
  };
  
var array = (arr)=>{
  console.log("Arr is : " + arr);
  for(var s in arr){
    console.log(arr[s]);
  }
};

var argument =function(){ //Using ()=> produces an 'argument is not defined' error
  // for(var s : arr){
  //   console.log(arr[s]);
  // }

  
  console.log(arguments[0]);
};