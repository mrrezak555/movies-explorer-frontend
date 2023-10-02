import "./MoreMovies.css"

function MoreMovies({ isMore }) {
    const loaderStyle = isMore ? "load-more" : "spacer";

    return (
        <section className="more">
            {isMore && <button type='button' className="more-button">Еще</button>}
        </section>
    );
}

export default MoreMovies;