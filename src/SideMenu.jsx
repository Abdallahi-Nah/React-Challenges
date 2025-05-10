import "./SideMenu.css";
import User from "./User";

import camera from "./assets/cam1.jpg";
import laptop from "./assets/lap5.jpg";
import phone from "./assets/phone2.jpg";

// Map des noms vers les images importées
const images = {
    camera: camera,
    laptop: laptop,
    phone: phone,
};

let products = [
    { id: 1, name: "camera", ratings: 3 },
    { id: 2, name: "laptop", ratings: 4 },
    { id: 3, name: "phone", ratings: 5 },
    { id: 4, name: "phone", ratings: 6 },
];

function RatingsComponent({ ratings }) {
    const stars = [];

    for (let i = 1; i <= ratings; i++) {
        stars.push(
            <i
                key={i}
                className="fas fa-star"
                style={{ color: "gold", marginRight: 2 }}
            ></i>
        );
    }

    return <div>{stars}</div>;
}


let productsComponents = products.map((product) => {
    return (
        <User key={product.id} name={product.name}>
            <img
                style={{ width: "50px", height: "50px" }}
                src={images[product.name]}
                alt={product.name}
            />
            <div>
                <RatingsComponent ratings={product.ratings} />
            </div>
        </User>
    );
});

export default function SideMenu() {
    return(
        <>
            <div className={"sideMenu"}>
                {productsComponents}
            </div>
        </>
    );
}