import React, {useState} from "react";
import { useHistory } from "react-router-dom";


const ImageUpload = ({setImageUrl}) => {

    const [image, setImage] = useState(null);
    const [imageLoading, setImageLoading] = useState(false);


    const handleSubmit = async (e) => {
        e.preventDefault();
        const formData = new FormData();
        const file = e.target.files[0];
        formData.append("image", file);

        // aws uploads can be a bit slow—displaying
        // some sort of loading message is a good idea
        setImageLoading(true);

        const res = await fetch('/api/aws/images', {
            method: "POST",
            body: formData,
        });
        if (res.ok) {
            const url = await res.json();
            setImageLoading(false);
           setImageUrl(url.url)
        }
        else {
            setImageLoading(false);
            // a real app would probably use more advanced
            // error handling
            console.log("error");
        }
    }

    const updateImage = (e) => {
        const file = e.target.files[0];
        setImage(file);
    }

    return (
        <form onSubmit={handleSubmit}>
            <input
              type="file"
              accept="image/*"
              onChange={handleSubmit}
            />
            <button type="submit">Submit</button>
            {(imageLoading)&& <p>Loading...</p>}
        </form>
    )
}

export default ImageUpload;
