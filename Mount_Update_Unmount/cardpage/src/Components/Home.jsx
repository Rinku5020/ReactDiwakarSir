import React, { useEffect, useState } from 'react'
function Home() {
    const [data, setData] = useState([])


    useEffect(() => {
        function FetchApi() {
            fetch("https://jsonplaceholder.typicode.com/todos")
                .then((res) => res.json())
                .then((data) => setData(data))
                .catch((err) => console.log(err))
        }
        FetchApi();
    }, [])

    return (
        <div>
            <h1 style={{textAlign:"center",backgroundColor:"teal"}}>Mount_Update_Unmount</h1>
            <table>
                <thead>
                    <tr>
                        <th>ID</th>
                        <th>Title</th>
                        <th>Status</th>

                    </tr>
                </thead>
                <tbody>
                    {data.map((el) => (
                        <tr key={el.id}>
                            <td>{el.id}</td>
                            <td>{el.title}</td>
                            <td>{el.completed ? "Completed" : "Not Completed"}</td>
                        </tr>
                    ))}
                </tbody>
            </table>

        </div>
    );
}

export default Home
