import { Link } from "react-router-dom";


const NewsCard = ({ news }) => {

    const { title, image_url, details, _id } = news;


    console.log(news)

    return (
        <div className="card card-compact  bg-base-100 shadow-xl">

            <div className="card-body">
                <h2 className="card-title">{title}</h2>
                <figure><img src={image_url} alt="Shoes" /></figure>
                {
                    details.length > 200 ? <p>{details.slice(0, 200)} <Link to={`/news/${_id}`} className="text-blue-600 font-bold">Read More</Link></p>
                        : <p>{details}</p>
                }

            </div>
        </div>
    );
};

export default NewsCard;