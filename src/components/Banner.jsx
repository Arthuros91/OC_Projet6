import "../styles/banner.sass";

export default function Banner({ text, imageURL }) {
    return (
        <div className="banner" style={{ backgroundImage: `url(${imageURL})` }}>
            <div className="mask">
                <h1> {text} </h1>
            </div>
        </div>
    );
}
