let x = ["He","Hello","Hi"]
let obj = {
    name:"hello",
    age:28
}
function App(){
    return (
        <div className="App">
            {
                x.map(item => (
                <h1>{item}</h1>
                )
            }
            <h1>{obj.name}</h1>
            <h1>{obj.age}</h1>
        </div>
    )
}
