

function pop(){
    var fruits = ["Banana", "Orange", "Apple", "Mango"];
    len=fruits.length
    // console.log(fruits,len);
    pop_output(len)
    function pop_output(x){
        let fruit=fruits[x-1]
        console.log(fruit);
    }
}

function push(){
    var fruits = ["Banana", "Orange", "Apple", "Mango"];
    
    function push_output(){
        fruits.push("kiwi")
        console.log(fruits.length);
    }
    push_output()

}