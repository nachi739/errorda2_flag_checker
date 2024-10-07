import Link from "next/link";
import React from "react";

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
        <section className="bg-gray-500 mb-8 mx-auto rounded-md p-5 shadow-2x1 hover:shadow-none hover:translate-y-1 transition-all duration-300">
            <div className="lg:flex items-center">
                {tags.map((tag: string, index: number) => (
                    <Link href={`/posts/tag/${tag}/page/1`} key={index}>
                        <span
                            className="inline-flex items-center gap-x-1.5 py-1.5 px-3 rounded-full text-xs font-medium bg-black text-white mr-1"
                            key={index}
                        >
                            <span className="size-1.5 inline-block rounded-full bg-white"></span>
                            {tag}
                        </span>
                    </Link>
                ))}
            </div>
            <div className="lg:flex">
                <h2 className="text-2x1 font-medium mb-2 mr-2 underline underline-offset-8">
                    <Link href={`/posts/${slug}`} className="text-white">
                        {title}
                    </Link>
                </h2>
                <div className="ml-auto text-white">{date}</div>
            </div>

            <p className="text-white">{description}</p>
        </section>
    ) : (
        <section className="lg:w-1/2 bg-gray-500 mb-8 mx-auto rounded-md p-5 shadow-2x1 hover:shadow-none hover:translate-y-1 transition-all duration-300">
            <div className="flex items-center gap-3">
                {tags.map((tag: string, index: number) => (
                    <Link href={`/posts/tag/${tag}/page/1`} key={index}>
                        <p
                            className="inline-flex items-center gap-x-1.5 py-1.5 px-3 rounded-full text-xs font-medium bg-black text-white mr-1"
                            key={index}
                        >
                            <span className="size-1.5 inline-block rounded-full bg-white"></span>
                            {tag}
                        </p>
                    </Link>
                ))}
            </div>
            <div className="lg:flex">
                <h2 className="text-2x1 font-medium mb-2 underline underline-offset-8">
                    <Link href={`/posts/${slug}`} className="text-white">
                        {title}
                    </Link>
                </h2>
                <div className="ml-auto text-white">{date}</div>
            </div>

            <p className="text-white">{description}</p>
        </section>
    );
};

export default SinglePost;
