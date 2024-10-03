import Link from "next/link";
import React from "react";

interface Props {
    tags: string[];
}

const Tag = (props: Props) => {
    const { tags } = props;

    return (
        <div className="mx-4">
            <section className="lg:w-1/2 mb-8 mx-auto bg-gray-400 rounded-md p-5 shadow-2xl hover:shadow-none hover:translate-y-1 duration-300 transition-all">
                <div className="font-medium mb-4">Tag-search</div>
                <div className="flex flex-wrap gap-1">
                    {tags.map((tag: string, index: number) => (
                        <Link href={`/posts/tag/${tag}/page/1`} key={index}>
                            <p className="inline-flex items-center gap-x-1.5 py-1.5 px-3 rounded-full text-xs font-medium bg-black text-white ">
                                <span className="size-1.5 inline-block rounded-full bg-white"></span>
                                {tag}
                            </p>
                        </Link>
                    ))}
                </div>
            </section>
        </div>
    );
};

export default Tag;
