const ReviewsPage = () => {
    return (
        <div className="pt-5">
            <h1>Оставьте отзыв!</h1>
            <form className="">
                <label for="name">Ваше Имя:</label>
                <input type="text" id="name" placeholder="введите ваше Имя..." /><br />
                <label for="review">Отзыв:</label>
                <textarea type="text" id="review" placeholder="" /><br />
                <input  type="submit"/>
            </form>

        </div>

    );
};

export default ReviewsPage;