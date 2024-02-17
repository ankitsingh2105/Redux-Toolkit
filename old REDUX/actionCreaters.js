function orderCake() { // this is action creater
    return {
        type: "CAKE_ORDERED", // this is a action
        quantity: 3
    }
}

const addedNewCake = () => {
    return {
        type: "AddingNewCake"
    }
}
const reStock = (quantity = 1) =>{
    return{
        type : "restocking",
        quantity : quantity,
        string : "ankit singh chauhan"
    }
}
const addnewIceCream = () =>{
    return{
        type: "addingNewIceCream",
    }
}
module.exports = { orderCake, addedNewCake, reStock,addnewIceCream };