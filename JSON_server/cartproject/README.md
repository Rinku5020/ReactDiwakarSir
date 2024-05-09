

    const [Updatetitle, setTitle] = useState(title);
    const [Updateimage, setImage] = useState(image);
    const [Updateprice, setPrice] = useState(price);
    const [Updatecategory, setCategory] = useState(category);
    const [Updatedescription, setDescription] = useState(description);

// ! Update Function

    const handleUpdate = () => {
        const updateData = {
            title: title,
            image: image,
            price: price,
            description: description,
            category: category

        }
        fetch(`http://localhost:8081/data/${id}`, {
            method: 'PUT',
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify({updateData})
        })
            .then(response => response.json())
            .then(data => console.log(data))
            .catch(error => console.error(error));
        console.log(updateData)
    }



