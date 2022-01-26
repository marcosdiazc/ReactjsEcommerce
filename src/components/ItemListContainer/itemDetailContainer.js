import getProducts from "../../Services/getData";
import itemDetail from "./itemDetail";
import { useState, useEffect } from "react";





const ItemDetailContainer = () => {
    const [item, setitem] = useState({});
    console.log("item", item);
    const { id } = useParams();
    console.log("id de use params", id);
    console.log("tipo de dato id", typeof id);


    useEffect(() => {
        getProducts.then((res) => {
            setitem(res.find((prod) => prod.id === parseInt(id)));
});

    }, [id]);
    return <itemDetail item={item} />;
};

export default ItemDetailContainer;