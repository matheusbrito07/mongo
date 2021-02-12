    export default async function getapi() {
    const url="http://localhost:4000/mongoprodutos"
    const response=await fetch(url)
    const dados=await response.json()
    return dados
}