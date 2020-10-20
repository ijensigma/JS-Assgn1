function billingFunction(f) {
    if(f.same.checked == true){
        f.billingName.value = f.shippingName.value;
        f.billingZip.value = f.shippingZip.value;
    }
    else{
        f.billingName.value = "";
        f.billingZip.value = "";
    }

}

