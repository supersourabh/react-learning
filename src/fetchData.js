export default async function fetchData(id){
    return await fetch('https://jsonplaceholder.typicode.com/todos/'+id).then((res)=> res.json());
}