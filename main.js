const parent = document.getElementById("parent")
const items = document.getElementsByClassName("item")
const T = document.getElementsByClassName("total-p")
let prixT = document.getElementById("prix-total")
//console.log(items[0].children[5].children[0]);

for(let i=0; i<items.length; i++){
    let btnPlus = items[i].children[5].children[0]
    let btnmoins = items[i].children[5].children[2]
    let quantity = items[i].children[5].children[1]
    let qty= parseInt(quantity.innerHTML)
    let like = items[i].children[9]
    let trash = items[i].children[10]
    
    
    let prix = items[i].children[3];
    let prixInNumber = parseInt(prix.innerHTML)
    //console.log(prix);
    // console.log(prixInNumber);
    let total = items[i].children[7]

    btnPlus.addEventListener("click", function(){
        qty++
        quantity.innerHTML = qty
        total.innerHTML = prixInNumber*qty 
        totalPrice();        
    })
    
    btnmoins.addEventListener("click", function(){
        if(qty !== 0){
            qty--
        }
        quantity.innerHTML = qty
        total.innerHTML = prixInNumber*qty
        totalPrice();
    })

    like.style.color = "gray"
    like.addEventListener("click", function(){
        if(like.style.color == "gray"){
            like.style.color = "red"
        }else{
            like.style.color = "gray"
        }
    })
    
    trash.style.color = "gray"
    trash.addEventListener("click", ()=>{
        trash.parentElement.remove()
    })
    
    
}

function totalPrice(){
    let tprice = 0
    for(let i=0; i < T.length; i++){
        let tpinNum = parseInt(T[i].innerHTML)
        tprice += tpinNum
        prixT.innerHTML = tprice
    }
    
    
}







