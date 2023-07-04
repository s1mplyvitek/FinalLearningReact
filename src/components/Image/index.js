const Image = ({ imgSrc, text = "hi", className }) => {
    return (
        <>
            <img src={imgSrc} className={"ImgSrc " + className} />
            <p>{text}</p>
        </>

    )
};

export default Image;