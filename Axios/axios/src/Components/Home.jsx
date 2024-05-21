import axios from 'axios'
import React, { useEffect, useState } from 'react'

function Home() {
    const [data, setData] = useState([])
    const [filter,setFilter] = useState(null)
    const[sort,setShort]=useState(null)
    const[page,setPage]=useState(1)
    const[search,setSearch]=useState("")

    const fetch = () => {
        axios.get("http://localhost:8080/data" ,{
            params:
            {
                category:filter,
                _sort:"price",
                _order:sort,
                _limit:"4",
                _page:page,
                q:search

            }
        })
            .then((res) => setData(res.data))
            .catch((err) => console.log(err))
    }
    useEffect(() => {
        fetch()
    }, [filter,sort,page,search])


    return (
        <div >
        <div>
        {/* filter */}
            <select name="" id="" onChange={(e)=>setFilter(e.target.value)}>
                <option value="" disabled>Select</option>
                <option value="men's clothing">men's clothing</option>
                <option value="women's clothing">women's clothing</option>
                <option value="jewelery">jewelery</option>
                <option value="electronics">electronics</option>
            </select>
            {/* Sort */}
            <button onClick={(e)=>setShort("asc")} >Low To Hight</button>
            <button onClick={(e)=>setShort("desc")}>Hight To Low</button>
            {/* Pagination */}
            <button disabled={page==1} onClick={()=>setPage(page-1)}>Pre</button>
            <button disabled>{page}</button>
            <button disabled={page ==4} onClick={()=>setPage(page+1)}>Next</button>
            {/* Search */}
            <input type="text" onChange={(e)=>setSearch(e.target.value)} placeholder='Search Here' />
            </div>
            
            <div className='maindiv'>
                {data.map((el) => (<div className='scDiv' key={el.id}>
                    <img src={el.image} alt="" className='img' />
                    <h3>{el.title}</h3>
                    <h3>Price $ {el.price}</h3>
                    <p>{el.description}</p>
                    <h4>{el.category}</h4>
                </div>))}
            </div>
        </div>
    )
}

export default Home
