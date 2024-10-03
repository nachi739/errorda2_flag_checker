/* 記事詳細ページ */

import React from "react";
import { getAllPosts, getSinglePost } from "@/lib/notionAPI";
import ReactMarkdown from "react-markdown";
import { Prism as SyntaxHighlighter } from "react-syntax-highlighter";
import Link from "next/link";
import { GetStaticProps } from "next";
import { vscDarkPlus } from "react-syntax-highlighter/dist/cjs/styles/prism";

export const getStaticPaths = async () => {
    const allPosts = await getAllPosts();
    const paths = allPosts.map(({ slug }) => ({ params: { slug } }));
    return {
        paths: paths,
        fallback: "blocking",
    };
};

export const getStaticProps: GetStaticProps = async ({ params }) => {
    const post = params && typeof params.slug === "string" ? await getSinglePost(params.slug) : null;

    return {
        props: {
            post,
        },
        revalidate: 60 * 60 * 6,
    };
};

interface PostProps {
    post: {
        metadata: {
            title: string;
            date: string;
            tags: string[];
        };
        markdown: {
            parent: string;
        };
    };
}

const Post: React.FC<PostProps> = ({ post }) => {
    return (
        <section className="container lg:px-2 h-screen lg:w-2/5 mx-auto mt-20 ">
            {post.metadata.tags.map((tag: string, index: number) => (
                <p
                    className="inline-flex items-center gap-x-1.5 py-1.5 px-3 rounded-full text-xs font-medium bg-black text-white mr-2"
                    key={index}
                >
                    <span className="size-1.5 inline-block rounded-full bg-white"></span>
                    <Link href={`/posts/tag/${tag}/page/1`}>{tag}</Link>
                </p>
            ))}

            <h2 className="w-full text-2x1 font-medium">{post.metadata.title}</h2>
            <span className="text-gray-500 float-right relative bottom-3">Posted date at {post.metadata.date}</span>
            <div className="border-b-2  mt-2 border-gray-600"></div>

            <div className="mt-10 font-medium">
                <ReactMarkdown
                    children={post.markdown.parent}
                    components={{
                        code(props) {
                            const { children, className, node, ...rest } = props;
                            const match = /language-(\w+)/.exec(className || "");
                            return match ? (
                                <SyntaxHighlighter
                                    PreTag="div"
                                    children={String(children).replace(/\n$/, "")}
                                    language={match[1]}
                                    style={vscDarkPlus}
                                />
                            ) : (
                                <code {...rest} className={className}>
                                    {children}
                                </code>
                            );
                        },
                    }}
                ></ReactMarkdown>

                <Link href="/">
                    <span className="pb-20 block mt-3 text-right underline">to Home</span>
                </Link>
            </div>
        </section>
    );
};

export default Post;
