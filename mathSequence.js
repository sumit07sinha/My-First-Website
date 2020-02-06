function mathSequence(arr){
let arith=new Set();
let geo= new Set();
    for(let i=1;i<arr.length; i++){
      let arithmetic= arr[i]-arr[i-1];
      let geometric = arr[i]/arr[i-1];
      arith.add(arithmetic);
      geo.add(geometric);
    }
  if(arith.size==1){
  return "arithmetic expression";}
  if(geo.size===1){
  return "geometric expression";}
  else{
  return -1;}
}
console.log([2,4,6,8]);
console.log([4,16,64});
console.log([5,6,13,14]);
