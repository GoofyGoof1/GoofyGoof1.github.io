function pow(x, n) {
    if (n === 0) {
      return 1;
    }
    if (n < 0) {
      return 1 / pow(x, -n);
    }

    if (n > 0) {
        return x**n
    }
  }

function sumTo(n) {
    if (n <= 0) {
    return 0;
    } else {
    return n + sumTo(n - 1);
    }
 }

function factorial(n) {
    if (n === 0) {
    return BigInt(1);
    } else {
    return BigInt(n) * factorial(n - 1);
    }
    }
    function compare(x) {
        return function(y) {
        if (y > x) {
        return true;
        } else if (y < x) {
        return false;
        } else {
        return null;
        }
        };
        }
        function sum() {
            let total = 0;
            
            for (let i = 0; i < arguments.length; i++) {
            total += arguments[i];
            }
            
            return total;
            }
            function fib(n) {
                let fibPrev = 0n;
                let fibNext = 1n;
                let fibArray = [];
                
                for (let i = 0; i < n; i++) {
                fibArray.push(fibPrev);
                let temp = fibPrev;
                fibPrev = fibNext;
                fibNext += temp;
                }
                
                return fibPrev;
                return fibArray;
                }