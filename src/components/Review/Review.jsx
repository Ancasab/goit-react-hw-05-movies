import React, { useEffect, useState } from 'react'
import { useParams } from 'react-router-dom';
import api from 'services/api'



const Review = () => {
    const [review, setReview] = useState([]);
    const { movieId } = useParams();
    const [reviewStatus, setReviewStatus] = useState(true);

    useEffect(() => {
        try {
            const response = api.fetchReview(movieId);
            response.then(data => {
                data.data.results.map(({ author, content }) =>
                    setReview(r => [...r, { author, content }])
                );
                data.data.results.length === 0
                    ? setReviewStatus(false)
                    : setReviewStatus(true);
            });
        } catch (error) { }
    }, [movieId]);




    return (
        <>
            <ul>
                {review.map(({ author, content }, index) => {
                    return (
                        <li key={index}>
                            <h4>Author: {author}</h4>
                            <p>{ content}</p>
                        </li>
                    )
                })}
            </ul>
            {!reviewStatus && <p>We do not have any review for this movie.</p>}
        </>
    )
}

export default Review