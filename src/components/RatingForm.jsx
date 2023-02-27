import React from "react";
import { StarIcon } from "./icons/StarIcon";

const arrayRating = [1, 2, 3, 4, 5];

export const RatingForm = () => {
    return (
        <div className="container flex h-screen items-center justify-center bg-very-dark-blue">
            <div className="m-auto w-[85%]">
                <section className="rounded-2xl bg-dark-blue p-6">
                    <div className="mb-7 flex h-[50px] w-[50px] items-center justify-center rounded-full bg-gray-800">
                        <StarIcon />
                    </div>
                    <div className="mb-7">
                        <h2 className="mb-3 text-3xl text-white">
                            How did we do?
                        </h2>
                        <p className="text-[15px] text-light-grey">
                            Please let us know how we did with your support
                            request. All feedback is appreciated to help us
                            improve our offering!
                        </p>
                    </div>
                    <form className="mb-3">
                        <div className="mb-5 flex justify-between ">
                            {arrayRating.map((rating, i) => {
                                return (
                                    <div className="mb-3 flex h-[50px] w-[50px] items-center justify-center rounded-full bg-gray-700">
                                        <button
                                            className="text-light-grey text-[15px]"
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
                            className="w-[100%] rounded-full bg-orange p-4 text-white tracking-[0.35rem]"
                        >
                            SUBMIT
                        </button>
                    </form>
                </section>
            </div>
        </div>
    );
};
