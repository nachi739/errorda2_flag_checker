import React from "react";
import Link from "next/link";

type Props = {
    title: string;
    description: string;
    date: string;
    tags: string[];
    slug: string;
    isPaginationPage: boolean;
};

export const SinglePost = (props: Props) => {
    const { title, description, date, tags, slug, isPaginationPage } = props;

    return isPaginationPage ? (
        <section className="bg-sky-900 mb-8 mx-auto rounded-md p-5 shadow-2x1 hover:shadow-none hover:translate-y-1 transition-all duration-300">
            <div className="lg:flex items-center">
                <h2 className="text-gray-100 text-2x1 font-medium mb-2 mr-2">
                    <Link href={`/posts/${slug}`}>{title}</Link>
                </h2>
                <div className="text-gray-400 mr-2">{date}</div>
                {tags.map((tag: string, index: number) => (
                    <span className="text-white bg-gray-500 rounded-xl px-2 pb-0.5 font-medium mr-2" key={index}>
                        {tag}
                    </span>
                ))}
            </div>
            <p className="text-white">{description}</p>
        </section>
    ) : (
        <section className="lg:w-1/2 bg-sky-900 mb-8 mx-auto rounded-md p-5 shadow-2x1 hover:shadow-none hover:translate-y-1 transition-all duration-300">
            <div className="flex items-center gap-3">
                <h2 className="text-gray-100 text-2x1 font-medium mb-2">
                    <Link href={`/posts/${slug}`}>{title}</Link>
                </h2>
                <div className="text-gray-100">{date}</div>
                {tags.map((tag: string, index: number) => (
                    <span className="text-white bg-gray-500 rounded-xl px-2 pb-0.5 font-medium" key={index}>
                        {tag}
                    </span>
                ))}
            </div>
            <p className="text-white">{description}</p>
        </section>
    );
};
