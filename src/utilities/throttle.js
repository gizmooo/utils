export function throttle(func, wait) {
    let isThrottled = false, savedArgs, savedThis;
    function wrapper(...args) {
        if (isThrottled) {
            savedArgs = args;
            savedThis = this;
            return;
        }
        func.apply(this, args);
        isThrottled = true;
        setTimeout(function () {
            isThrottled = false;
            if (savedArgs) {
                wrapper.apply(savedThis, savedArgs);
                savedArgs = savedThis = null;
            }
        }, wait);
    }
    return wrapper;
}
//# sourceMappingURL=throttle.js.map