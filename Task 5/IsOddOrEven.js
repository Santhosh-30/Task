function OddEven(){
for( let i=1;i<=15;i++){
   let modulus=[i]%2;
   if( modulus=== 0){
    console.log([i]+" "+ "It is Even");
   }
   else{
    console.log([i]+ " "+"It is Odd");
   };
};
}
OddEven();