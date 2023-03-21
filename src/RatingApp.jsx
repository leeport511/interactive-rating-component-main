import React, { useState } from "react";
import { RatingForm } from "./components/RatingForm";
import { ThankYouPage } from "./components/ThankYouPage";

const initialStateRatings = [
    {
        ranking: "1",
        isSelected: false,
    },
    {
        ranking: "2",
        isSelected: false,
    },
    {
        ranking: "3",
        isSelected: false,
    },
    {
        ranking: "4",
        isSelected: false,
    },
    {
        ranking: "5",
        isSelected: false,
    },
];



export const RatingApp = () => {
    const [ratings, setRating] = useState(initialStateRatings);
    const [selectedRatings, setSelectedRatings] = useState(null);
    const [formSubmitted, setFormSubmitted] = useState(false);

    const handleSelectRating = (ranking) => {
        const updatedRatings = ratings.map((r) =>
            r.ranking === ranking
                ? { ...r, isSelected: true }
                : { ...r, isSelected: false }
        );

        setRating(updatedRatings);
        setSelectedRatings(ranking);
    };

    const handleSubmit = (e) => {
        e.preventDefault();
        const selected = ratings.find((r) => r.isSelected);
        if (selected) {
            setSelectedRatings(selected.ranking);
            console.log(selected.ranking);
        }
        setFormSubmitted(true);
    };

   

    return (
        <>
            
            {
                formSubmitted 
                    ? <ThankYouPage rating={selectedRatings} />
                    : <RatingForm
                        handleSelectRating={handleSelectRating}
                        ratings={ratings}
                        handleSubmit={handleSubmit}
                        />
            }
        </>
    );
};
