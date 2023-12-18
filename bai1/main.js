// bai 1
function getStringHasMaxLength(arr){
    let max_length = 0;
    let res = []
    for(let i=0 ; i < arr.length; i++){
        if (arr[i].length > max_length){
            max_length = arr[i].length;
            res = [arr[i]];
        }else if (arr[i].length == max_length){
            res = [...res, arr[i]];
        }else{
            continue;
        }
    }
    return res;
}

console.log(getStringHasMaxLength(['aba', 'aa', 'ad', 'c', 'vcd']))

// bai 2
users = [
    {
        name: "Bùi Công Sơn",
        age: 30,
        isStatus: true
    },
    {
        name: "Nguyễn Thu Hằng",
        age: 27,
        isStatus: false
    },
    {
        name: "Phạm Văn Dũng",
        age: 20,
        isStatus: false
    }
]
function getAgeUsers(users){
    return users.filter(u => u.age>25 && u.isStatus)
}
console.log(getAgeUsers(users));
function getAgeASC(users){
    return users.sort((a,b) => a.age - b.age)
}
console.log(getAgeASC(users));

// bai 3
function getCountElement(arr){
   let counter = {}
    for (let i = 0; i < arr.length; i++){
        if (arr[i] in counter){
            counter = {...counter, [arr[i]]: counter[arr[i]] + 1};
        }else{
            counter = {...counter, [arr[i]]:1}
        }
    }
    return counter;
}
console.log(getCountElement(["one", "two", "three", "one", "one", "three"]))