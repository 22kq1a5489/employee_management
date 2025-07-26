// a person want to buy 5 products on amazon you need to find out all products by using functions
// function Amazon(){
//     let p1=Number(prompt("Enter product-1 cost"))
//     let p2=Number(prompt("Enter product-2 cost"))
//     let p3=Number(prompt("Enter product-3 cost"))
//     let p4=Number(prompt("Enter product-4 cost"))
//     let p5=Number(prompt("Enter product-5 cost"))
//     console.log("Total cost:"+(p1+p2+p3+p4+p5));
// }
// Amazon()
// a person want to buy n products on amazon you need to find out all products by using functions
// function Amazon(){
//     let products= Number(prompt("Enter no.of products"));
//     let sum=0;
//     for(i=0;i<products;i++){
//         let cost=Number(prompt('Enter cost  of product'))
//         sum+=cost;
//     }
//     console.log("Total cost of products:",sum);
// }
// Amazon()
  
// program for different apps products total cost
// function Amazon(){
//         let p1=Number(prompt("Enter product-1 cost in Amazon"))
//         let p2=Number(prompt("Enter product-2 cost in Amazon"))
//         let p3=Number(prompt("Enter product-3 cost in Amazon"))
//         let p4=Number(prompt("Enter product-4 cost in Amazon"))
//         let p5=Number(prompt("Enter product-5 cost in Amazon"))
//         return p1+p2+p3+p4+p5
//     }

//     function Flipkart(){
//         let p1=Number(prompt("Enter product-1 cost in Flipkart"))
//         let p2=Number(prompt("Enter product-2 cost in Flipkart"))
//         let p3=Number(prompt("Enter product-3 cost in Flipkart"))
//         let p4=Number(prompt("Enter product-4 cost in Flipkart"))
//         let p5=Number(prompt("Enter product-5 cost in Flipkart"))
//         return p1+p2+p3+p4+p5
//     }

//     function Myntra(){
//         let p1=Number(prompt("Enter product-1 cost in Myntra"))
//         let p2=Number(prompt("Enter product-2 cost in Myntra"))
//         let p3=Number(prompt("Enter product-3 cost in Myntra"))
//         let p4=Number(prompt("Enter product-4 cost in Myntra"))
//         let p5=Number(prompt("Enter product-5 cost in Myntra"))
//         return p1+p2+p3+p4+p5
//     }
//     // Amazon();
//     // Flipkart();
//     // Myntra();
//     console.log("Total cost of all products:",(Amazon()+Flipkart()+Myntra()));

// select one website pand purchase the products
// let web=Number(prompt("Select choice 1.Amazon 2.Flipkart 3.Myntra"))
// function Amazon(){
//     let products= Number(prompt("Enter no.of products"))
//     let sum=0
//     for(i=0;i<products;i++){
//         let cost=Number(prompt('Enter cost of products'))
//         sum+=cost
//     }
// console.log("Total cost:",sum);
// }
// function Flipkart(){
//     let products= Number(prompt("Enter no.of products"))
//     let sum=0
//     for(i=0;i<products;i++){
//         let cost=Number(prompt('Enter cost of products'))
//         sum+=cost
//     }
// console.log("Total cost:",sum);
// }
// function Myntra(){
//     let products= Number(prompt("Enter no.of products"))
//     let sum=0
//     for(i=0;i<products;i++){
//         let cost=Number(prompt('Enter cost of products'))
//         sum+=cost
//     }
// console.log("Total cost:",sum);
// }
// if(web==1){
//     Amazon()
// }else if(web==2){
//     Flipkart()
// }else if(web==3){
// Myntra()
// }else{
//     console.log("Invalid Choice");
// }

// let n=Number(prompt("Enter a number"))
// for(i=1;i<=n;i++){
//    console.log(((-1)**i)*(-i));
// }

let n_win
 function winopen(){
    n_win=window.open("res2.jpg")

 }
 function winclose(){
    n_win.close()
 }
 function checkwin(){
//    if(n_win.closed){
//       console.log("window is closed");
//    }
//    else{
//       console.log("window is opened");
//    }}
   

if(!n_win){
   console.log("Till now window is not opened");
}else if(n_win.closed){
   console.log("window is closed");

}
 else{
   console.log("window is opened")
 }}