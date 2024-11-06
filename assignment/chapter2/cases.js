// Exerciser 2.1 : Number of Cases Calculating Module


const permutation = (n,r) => {
    for (result =1, i = n-r+1; i< n+1; i++){
        result = result*i;
    }
    return result;
}

const combination = (n,r) => {
    for (result =1, i = n-r+1; i< n+1; i++){
        result = result*i;
    }
    const cal1 = result;
    for (cal2 = 1, i = r; i > 0; i--){
        cal2 = cal2*i;
    }
    return cal1/cal2;
}

const multiPermutation = (n,r) => n**r

const multiCombination = (n,r) => {
    for (result =1, i = n; i< n+r; i++){
        result = result*i;
    }
    const cal1 = result;
    for (cal2 = 1, i = r; i > 0; i--){
        cal2 = cal2*i;
    }
    return cal1/cal2;
}

module.exports = {
    permutation,
    combination,
    multiPermutation,
    multiCombination
};