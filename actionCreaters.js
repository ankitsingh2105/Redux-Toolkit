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
const reStock = (quantity =1) =>{
    return{
        type : "restocking",
        quantity : quantity,
        string : "ankit singh chauhan"
    }
}
module.exports = { orderCake, addedNewCake, reStock };