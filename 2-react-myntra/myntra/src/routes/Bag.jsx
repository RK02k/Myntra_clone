import Bagsummary from "../components/Bagsummary"
import Bagitem from "../components/Bagitem"
import {useSelector} from "react-redux"

const Bag = () =>{
  const bagItems =  useSelector(state =>state.bag);
  const items = useSelector(state =>state.items)
  const finalItems = items.filter(item =>{
    const itemIndex = bagItems.indexOf(item.id);
    return itemIndex>=0;
  })

    return <>
    {/* <Header></Header> */}
    <main>
      <div className="bag-page">
        <div className="bag-items-container">
          {finalItems.map(item =><Bagitem item={item}/>)}
        </div>
        <Bagsummary/>

      </div>
    </main>
    {/* <Footer></Footer> */}
    </>
}

export default Bag