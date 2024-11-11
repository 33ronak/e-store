import ItemProvider from "../store/ItemProvider";
import ProductItems from "../components/Products/ProductItems";


const StorePage = () => {
    return <>
        <ItemProvider>
            <ProductItems />
        </ItemProvider>
    </>
}

export default StorePage;