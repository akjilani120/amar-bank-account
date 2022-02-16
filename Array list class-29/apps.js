const products=[
    'Dell Laptop',
    'Hp Laptop',
    'Asus laptop',
    'Macbook Laptop',
    'Dell phone',
    'realme phone',
    'Dell  Phone',
    'iphone Phone'
];
const phoneAdded=[];
const specialProduct="dell";
for(const product of products){
//    if(product.toLocaleLowerCase() . indexOf("phone" .toLocaleLowerCase()) != -1){
//       phoneAdded.push(product);
//    }
const specialProduct="dell";
// if( product.toLocaleLowerCase().includes(specialProduct.toLocaleLowerCase())){
//     phoneAdded.push(product);
// }
if( product.toLocaleLowerCase().startsWith(specialProduct.toLocaleLowerCase())){
    phoneAdded.push(product);
}
}
console.log(phoneAdded)
