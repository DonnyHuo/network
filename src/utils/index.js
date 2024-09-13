export const throttle = (func, delay) => {
  let prev = Date.now();
  return function(){
    const context = this;
    const args    = arguments;
    const now     = Date.now();
    if(now - prev >= delay){
      func.apply(context, args);
      prev = Date.now();
    }
  }
};

export const shortStr = (address, first = 7, last = 5) => {
  return address && address.slice(0, first) + "..." + address.slice(-last);
};
