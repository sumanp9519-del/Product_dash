import { useParams } from "react-router"
function Product (){
    function fetchData(){
        fetch("https://fakestoreapi.com/products")
        .then((res)=>{
            return res.json()
        }).then((data)=>{
            
        })
    }

    const value = useParams()
    return(
        <div>
            <h1>Product page</h1>
            <div className="product-container">
                {
                    productData.map((product)=>{
                        return (
                        <div className="product-card">
                            <img src={product.image} height="200" />
                            <h4>{product.title}</h4>
                            <div>
                                <p>${product.price}</p>
                                <p>{product.rating.rate}</p>
                            </div>
                    </div>
                    )}
                   
                    )
                }
            </div>
        </div>
    )
}

export default Product