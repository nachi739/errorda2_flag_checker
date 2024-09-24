import { link } from "fs";
import { title } from "process";
import React from "react";

type Props = {
    title: string;
    description: string;
    date: string;
    tags: string[];
    slug: string;
};

export const SinglePost = (props: Props) => {
    const { title, description, date, tags, slug } = props;

    return (
        <section className="lg:w-1/2 bg-sky-900 mb-8 mx-auto rounded-md p-5 shadow-2x1 hover:shadow-none hover:translate-y-1 transition-all duration-300">
            <div className="flex items-center gap-3">
                <h2 className="text-gray-100 text-2x1 font-medium mb-2">{title}</h2>
                <div className="text-gray-100">{date}</div>
                {tags.map((tag) => (
                    <span className="text-white bg-gray-500 rounded-xl px-2 pb-0.5 font-medium">{tags}</span>
                ))}
            </div>
            <p className="text-white">{description}</p>
        </section>
    );
};
