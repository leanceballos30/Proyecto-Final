import { useState, useEffect } from "react";
import axios from "axios";
import UsersTabla from "./UsersTabla";
import Pagination from "./Pagination";
import { Button } from "react-bootstrap";

const AdminUsers = () => {
    const [arraySearch, setArraySearch] = useState([])
    const [test, setTest] = useState([]);
    const [loading, setLoading] = useState(false);
    const [currentPage, setCurrentPage] = useState(1);
    const [postsPerPage] = useState(10);

    useEffect(() => {
        fetchPosts();
      }, []);
    
      const fetchPosts = async () => {
        setLoading(true);
        const res = await axios.get(
          "https://jsonplaceholder.typicode.com/todos"
        );
        setTest(res.data);
        setLoading(false);
      };

      const indexOfLastPost = currentPage * postsPerPage;
      const indexOfFirstPost = indexOfLastPost - postsPerPage;
      const currentPosts = arraySearch.length > 0 ? arraySearch.slice(indexOfFirstPost, indexOfLastPost) : test.slice(indexOfFirstPost, indexOfLastPost) ;
    
      const paginate = (pageNumber) => setCurrentPage(pageNumber);

      const buscarProducto = (e) => {
        e.preventDefault()
        const search = e.target.search.value
        let productoEncontrado = test.filter(producto => {
          return producto.title.toLowerCase().includes(search.toLowerCase())
        })
        setArraySearch(productoEncontrado)
      }
  return (
    <div>
         <div className="d-flex container justify-content-around mt-2">
        <div className="d-none d-lg-block col-6 justify-content-center align-items-center">
          <Pagination
            postsPerPage={postsPerPage}
            totalPosts={arraySearch.length > 0 ? arraySearch.length : test.length}
            paginate={paginate}
          />
        </div>
        <form onSubmit={buscarProducto} className="d-flex flex-column col-12 justify-content-around col-md-6 my-2 align-items-center">
        <input
        name="search"
          type="text"
          placeholder="Buscar producto"
          className="d-flex align-self-center rounded border w-75"
        />
        <div className="d-flex justify-content-evenly mt-2 container">
        <Button type="submit">Buscar</Button>
        <Button variant="success" onClick={()=> {setArraySearch([])}}>Refresh</Button>
        </div>
        </form>
      </div>
        <UsersTabla  posts={currentPosts} loading={loading}/>
        </div>
  );
}

export default AdminUsers