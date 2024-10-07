/* ...See moreで表示されるページ */

import { GetStaticPaths, GetStaticProps } from "next";
import Head from "next/head";

import Pagination from "@/components/Pagination/Pagination";
import { SinglePost } from "@/components/Post/SinglePost";
import Tag from "@/components/Tag/Tag";
import { getAllTags, getNumberOfPages, getPostsByPage } from "@/lib/notionAPI";

export const getStaticPaths: GetStaticPaths = async () => {
    const numberOfPage = await getNumberOfPages();

    const params = [];
    for (let i = 1; i <= numberOfPage; i++) {
        params.push({ params: { page: i.toString() } });
    }
    return {
        paths: params,
        fallback: "blocking",
    };
};

export const getStaticProps: GetStaticProps = async (context) => {
    const currentPage = context.params?.page;
    if (!currentPage) {
        return {
            notFound: true,
        };
    }
    const postsByPage = await getPostsByPage(parseInt(currentPage.toString(), 10));
    const numberOfPage = await getNumberOfPages();

    const allTags = await getAllTags();

    return {
        props: {
            postsByPage,
            numberOfPage,
            allTags,
        },
        revalidate: 60 * 60 * 6,
    };
};

interface Post {
    id: string;
    title: string;
    description: string;
    date: string;
    tags: string[];
    slug: string;
}

interface PageListProps {
    postsByPage: Post[];
    numberOfPage: number;
    allTags: string[];
}

const PageList = ({ postsByPage, numberOfPage, allTags }: PageListProps) => {
    return (
        <div className="container h-full w-full mx-auto">
            <Head>
                <title>Errorda2</title>
                <meta name="description" content="Generated by create next app" />
                <link rel="icon" href="/favicon.ico" />
            </Head>

            <main className="container w-full mt-16">
                <h1 className="text-5x1 font-medium text-center mb-16">Output-list</h1>
                <section className="sm:grid grid-cols-1 w-1/2 gap-3 mx-auto">
                    {postsByPage.map((post: Post) => (
                        <div key={post.id}>
                            <SinglePost
                                title={post.title}
                                description={post.description}
                                date={post.date}
                                tags={post.tags}
                                slug={post.slug}
                                isPaginationPage={true}
                            />
                        </div>
                    ))}
                </section>
                <Pagination numberOfPage={numberOfPage} tag="" />
                <Tag tags={allTags} />
            </main>
        </div>
    );
};

export default PageList;
