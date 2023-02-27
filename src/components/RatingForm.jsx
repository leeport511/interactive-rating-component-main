import React from "react";
import { StarIcon } from "./icons/StarIcon";

const arrayRating = [1, 2, 3, 4, 5];

export const RatingForm = () => {
    return (
        <div className="container flex h-screen items-center justify-center bg-very-dark-blue">
            <div className="m-auto w-[80%]">
                <section className="rounded-2xl bg-dark-blue p-6">
                    <div className="mb-7 flex h-[50px] w-[50px] items-center justify-center rounded-full bg-gray-800">
                        <StarIcon />
                    </div>
                    <div className="mb-7">
                        <h2 className="mb-3 text-3xl text-white font-bold">
                            How did we do?
                        </h2>
                        <p className="text-left text-[15px] text-light-grey">
                            Please let us know how we did with your support
                            request. All feedback is appreciated to help us
                            improve our offering!
                        </p>
                    </div>
                    <form className="mb-3">
                        <div className="mb-5 flex justify-between ">
                            {arrayRating.map((rating, i) => {
                                return (
                                    <div className="mb-3 ">
                                        <button
                                            className="flex h-[50px] w-[50px] items-center justify-center rounded-full bg-gray-700 text-[15px] text-light-grey  hover:bg-medium-grey hover:text-dark-blue active:bg-orange active:text-white"
                                            key={i}
                                        >
                                            {rating}
                                        </button>
                                    </div>
                                );
                            })}
                        </div>
                        <button
                            type="submit"
                            className="w-[100%] rounded-full bg-orange p-4 tracking-[0.25rem] text-white active:text-orange active:bg-white font-bold hover:opacity-80"
                        >
                            SUBMIT
                        </button>
                    </form>
                </section>
            </div>
        </div>
    );
};
