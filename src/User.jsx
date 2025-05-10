import "./SideMenu.css";

export default function User({name, children}) {
    return(
        <>
            <a href="#" className={"links"}>{children} {name}</a>
        </>
    );
}