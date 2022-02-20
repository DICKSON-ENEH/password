// let key = 737;
// let response;

// while( response !=key){
//    response = prompt ("enter key here")
// }
// alert("you have succesfully opened the vault")

const open = (n)=>{
for(i=0; i<=n; i++){
   for(j=0; i<=n; j++){
      for(k=0; i<=n; k++){
         if(i===7 && j===3 && k===5){
         console.log("keyfound");
      }else{
         console.log(i,j,k)
      }
   }
}
}
}
open(10);
