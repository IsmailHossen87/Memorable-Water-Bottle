const getItemLs = ()=>{
    const data = localStorage.getItem('data')
    if(data){
        return JSON.parse(data)
    }
    return []
}
// data save korar jonno
const saveLS  = cart =>{
    const stringyfy = JSON.stringify(cart)
    localStorage.setItem('data',stringyfy)
}
const addItem = id =>{
    const beforearray = getItemLs();
    beforearray.push(id)
    saveLS(beforearray)                      
}
export {addItem,getItemLs}