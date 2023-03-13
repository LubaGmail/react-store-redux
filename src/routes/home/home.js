import CategoryList from '../../components/checkout-list/checkout-list'

/**
  <Route path='/' element={<Home />} >
    <Route path='toys' element={<Toys />} />
 */
const Home = () => {
  return (
    <>
       <CategoryList />
    </>
     
  );
}

export default Home
