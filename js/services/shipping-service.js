export function shipment(order){
    let shippingTax = 0.0;
    if(order.basic < 100.0){
        shippingTax = 20.0;
    }
    else if(order.basic < 200.0){
        shippingTax = 12.0;
    }
    else{
        shippingTax = 0.0;
    }
    return shippingTax;   
}