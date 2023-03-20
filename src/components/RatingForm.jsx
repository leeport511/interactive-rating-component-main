import React, { useState } from "react";
import { StarIcon } from "./icons/StarIcon";

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

export const RatingForm = () => {
    const [ratings, setRating] = useState(initialStateRatings);

    const handleSelectRating = (ranking) => {
        const updatedRatings = ratings.map((r) =>
            r.ranking === ranking
                ? { ...r, isSelected: true }
                : { ...r, isSelected: false }
        );

        setRating(updatedRatings);
    };

    const handleSubmit = () => {};

    return (
        <div className="flex h-screen flex-1 items-center justify-center bg-very-dark-blue">
            <div className="m-auto w-[80%] sm:w-[50%] md:w-[45%] lg:w-[35%] xl:w-[22%]">
                <section className="rounded-2xl bg-dark-blue p-6">
                    <div className="mb-7 flex h-[50px] w-[50px] items-center justify-center rounded-full bg-gray-800">
                        <StarIcon />
                    </div>
                    <div className="mb-7">
                        <h2 className="mb-3 text-3xl font-bold text-white">
                            How did we do?
                        </h2>
                        <p className="text-left text-[15px] text-light-grey">
                            Please let us know how we did with your support
                            request. All feedback is appreciated to help us
                            improve our offering!
                        </p>
                    </div>
                    <form onSubmit={handleSubmit} className="mb-3">
                        <div className="mb-5 flex justify-between">
                            {ratings.map((rtg, i) => (
                                <button
                                    key={i}
                                    type="button"
                                    onClick={() =>
                                        handleSelectRating(rtg.ranking)
                                    }
                                >
                                    <div
                                        className={`${
                                            rtg.isSelected
                                                ? "bg-medium-grey text-dark-blue"
                                                : "bg-gray-700 text-light-grey "
                                        } mb-4 flex h-[50px] w-[50px] items-center justify-center rounded-full bg-gray-700 text-[15px] text-light-grey  hover:bg-orange hover:text-white active:bg-medium-grey active:text-dark-blue`}
                                    >
                                        {rtg.ranking}
                                    </div>
                                </button>
                            ))}
                        </div>
                        <button
                            type="submit"
                            className="w-[100%] rounded-full bg-orange p-4 font-bold tracking-[0.25rem] text-white hover:opacity-80 active:bg-white active:text-orange"
                        >
                            SUBMIT
                        </button>
                    </form>
                </section>
            </div>
        </div>
    );
};
