const parent = document.getElementById('parent')
console.log(parent);
const items = document.querySelectorAll(".item")
console.log(items)
const contain = document.querySelectorAll(".like-container")
console.log(contain)
const button =document.getElementById('like-button')
console.log(button)
for (let i=0 ; i<items.length ; i++){
    let btnPlus = items[i].children[5].children[0]

    let quantity = items[i].children[5].children[1]
    let qty = parseInt(quantity.innerHTML)

    let btnMoins = items[i].children[5].children[2]

    let price= items[i].children[3]
    let prix =parseInt(price.innerHTML)
    let total= items[i].children[7]
    let likebutton = items[i].children[9]
    
    

    

    btnPlus.addEventListener('click', function (){
        
        qty= qty+1

        quantity.innerHTML=qty
        total.innerHTML=prix*qty
    })
    console.log(quantity.innerHTML);
    btnMoins.addEventListener('click', function (){
        if (qty !==0){
            qty= qty - 1
         total.innerHTML=prix*qty
        }
    
        quantity.innerHTML=qty
    })
    console.log(quantity.innerHTML)
    console.log(total.innerHTML);
    
    

}
document.addEventListener('click', () => {
    const likeButton = document.getElementById('like-Button');

    like-button.addEventListener('click', () => {
        like-button.classList.toggle('red');
    });
});




 