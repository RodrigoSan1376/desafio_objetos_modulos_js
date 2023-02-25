import * as shippingService from "./shipping-service.js";

export function total(order){    
    const discountValue = order.basic * (order.discount / 100.0);
    const total = (order.basic - discountValue) + shippingService.shipment(order);  
    return total;
}