import "./Post.css";

export default function Post() {
    return(
        <>
            <div className={"post"}>
            <p className={"postHeader"}>This is the post title</p>
            <hr />
            <p>This is the post body</p>
            </div>
        </>
    );
}