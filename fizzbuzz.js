function fizzbuzz(n) 
{
    let ret
    if (n > 0) {
        if (n % 3 == 0){
            ret = 'Fizz'
        }
        if (n % 5 == 0){
            ret += 'Buzz'
        }
    } else {
        ret = n
    }
    return ret;
}
module.exports = fizzbuzz;
