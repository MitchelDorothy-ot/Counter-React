let data = [
    {id: 1, name: "Cookies", price: 300},
    {id: 2, name: "Phone", price: 13000},
    {id: 3, name: "Case", price: 500},
    {id: 4, name: "Charger", price: 150},
]

export function Products() {
    let productList = data.map(product => <div>
        <h2>{product.name}</h2>
        <p>Ksh.{product.price}</p>
    </div>)

    let productList2 = data.map(({id, name, price}) => <div>
        <h2>{name}</h2>
        <p>Ksh.{price}</p>
    </div>)
    return (
        <div className="container">
            <div className="row">
                {productList}
            </div>
        </div>
    )
}