import "./Post.css";

export default function Post({title, content}) {
    return(
        <>
            <div className={"post"}>
            <p className={"postHeader"}>{title}</p>
            <hr />
            <p>{content}</p>
            </div>
        </>
    );
}