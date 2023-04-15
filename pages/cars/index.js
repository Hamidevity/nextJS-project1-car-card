import Categories from "@/components/module/Categories"
import CarsPage from "@/components/templates/CarsPage"
import carsData from "@/data/carsData"
import SearchBar from "@/components/module/SearchBar"
function index() {
  return (
    <div>
       <SearchBar/>
       <Categories/>
       <CarsPage data={carsData} />
    </div>
  )
}

export default index