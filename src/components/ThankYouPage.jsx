import React from "react";

export const ThankYouPage = ({rating}) => {

    

    return (
        <div className="flex h-screen flex-1 items-center justify-center bg-very-dark-blue">
            <div className="m-auto w-[80%] sm:w-[50%] md:w-[45%] lg:w-[35%] xl:w-[22%] text-center">
                <section className="rounded-2xl bg-dark-blue p-6">
                    <div className="mb-8 flex items-center justify-center mt-4">
                        <img src="./images/illustration-thank-you.svg" alt="" />
                    </div>
                    <div className="text-orange bg-gray-700 rounded-full mb-8 text-[15px] w-[230px] text-center p-2 m-auto">
                      <p className="">{`You selected ${rating} out of 5`}</p>
                    </div>
                    <div className="mb-7">
                        <h2 className="mb-5 text-3xl font-semibold text-white">
                            Thank you!
                        </h2>
                        <p className="text-[15px] text-light-grey">
                            We appreciate you taking the time to give a rating.
                            If you ever need more support, don’t hesitate to get
                            in touch!
                        </p>
                    </div>
                </section>
            </div>
        </div>
    );
};
