import "./SideMenu.css"
import User from "./User";
import cam from "./assets/cam1.jpg";
import lap from "./assets/lap5.jpg";
import phone from "./assets/phone2.jpg";

export default function SideMenu() {
    return(
        <>
            <div className={"sideMenu"}>
                <User name="Camera">
                    <img style={{width: "50px", height: "50px"}} src={cam} alt="this is an img" />
                    <div>
                        <i className="fas fa-star" style={{ color: "gold" }}></i>
                        <i className="fas fa-star" style={{ color: "gold" }}></i>
                        <i className="fas fa-star" style={{ color: "gold" }}></i>
                    </div>
                </User>
                <User name="Laptops">
                    <img style={{width: "50px", height: "50px"}} src={lap} alt="this is an img" />
                    <div>
                        <i className="fas fa-star" style={{ color: "gold" }}></i>
                        <i className="fas fa-star" style={{ color: "gold" }}></i>
                        <i className="fas fa-star" style={{ color: "gold" }}></i>
                        <i className="fas fa-star" style={{ color: "gold" }}></i>
                    </div>
                </User>
                <User name="Phones">
                    <img style={{width: "50px", height: "50px"}} src={phone} alt="this is an img" />
                    <div>
                        <i className="fas fa-star" style={{ color: "gold" }}></i>
                        <i className="fas fa-star" style={{ color: "gold" }}></i>
                        <i className="fas fa-star" style={{ color: "gold" }}></i>
                        <i className="fas fa-star" style={{ color: "gold" }}></i>
                        <i className="fas fa-star" style={{ color: "gold" }}></i>
                    </div>
                </User>
            </div>
        </>
    );
}