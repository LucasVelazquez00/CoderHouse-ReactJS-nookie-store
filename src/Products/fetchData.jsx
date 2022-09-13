let yes = true;

const fetchData = (time, task) => {
    return new Promise ((resolve, reject)=>{
        setTimeout(()=>{
            if (yes){
                resolve(task)
            }
            else{
                reject('error')
            }
        },time)
    })
}
export default fetchData