import React from "react";
import { getAllPosts, getSinglePost } from "@/lib/notionAPI";
import ReactMarkdown from "react-markdown";
import { Prism as SyntaxHighlighter } from "react-syntax-highlighter";
import { vsDark } from "react-syntax-highlighter/dist/cjs/styles/prism";
import Link from "next/link";
import { GetStaticProps } from "next";

export const getStaticPaths = async () => {
    const allPosts = await getAllPosts();
    const paths = allPosts.map(({ slug }) => ({ params: { slug } }));
    return {
        paths: paths,
        fallback: "blocking",
    };
};

export const getStaticProps: GetStaticProps = async ({ params }) => {
    const post = params ? await getSinglePost(params.slug) : null;

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
        <section className="container lg:px-2 h-screen lg:w-2/5 mx-auto mt-20">
            <h2 className="w-full text-2x1 font-medium">{post.metadata.title}</h2>
            <div className="border-b-2 w-1/3 mt-1 border-sky-900"></div>
            <span className="text-gray-500">Posted date at {post.metadata.date}</span>
            <br />
            {post.metadata.tags.map((tag: string) => (
                <p className="text-white bg-sky-900 rounded-xl font-medium mt-2 px-2 inline-block mr-2">{tag}</p>
            ))}

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
                                    style={vsDark}
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
                    <span className="pb-20 block mt-3 text-sky-900">←ホームに戻る</span>
                </Link>
            </div>
        </section>
    );
};

export default Post;
