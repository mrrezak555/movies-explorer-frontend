import "./MoreMovies.css"

function MoreMovies({ isMore, onClick }) {
    return (
        <section className="more">
            {isMore && <button type='button' className="more-button" onClick={onClick}>Еще</button>}
        </section>
    );
}

export default MoreMovies;