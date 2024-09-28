import { Client } from "@notionhq/client";
import { NotionToMarkdown } from "notion-to-md";

const notion = new Client({
    auth: process.env.NOTION_TOKEN,
});

const n2m = new NotionToMarkdown({ notionClient: notion });

export const getAllPosts = async () => {
    const posts = await notion.databases.query({
        database_id: process.env.NOTION_DATABASE_ID || "",
        page_size: 100,
    });

    const allPosts = posts.results;

    return allPosts.map((post) => {
        return getPageMetaData(post);
    });
};

//今後修正する。
const getPageMetaData = (post) => {
    const getTags = (tags: { name: string }[]) => {
        const allTags = tags.map((tag: { name: string }) => {
            return tag.name;
        });

        return allTags;
    };

    return {
        id: post.id,
        title: post.properties.Name.title[0].plain_text,
        description: post.properties.Description.rich_text[0].plain_text,
        date: post.properties.Date.date.start,
        slug: post.properties.Slug.rich_text[0].plain_text,
        tags: getTags(post.properties.Tags.multi_select),
    };
};

export const getSinglePost = async (slug: string) => {
    const response = await notion.databases.query({
        database_id: process.env.NOTION_DATABASE_ID || "",
        filter: {
            property: "Slug",
            formula: {
                string: {
                    equals: slug,
                },
            },
        },
    });

    const page = response.results[0];
    const metadata = getPageMetaData(page);
    const mdBlocks = await n2m.pageToMarkdown(page.id);
    const mdString = n2m.toMarkdownString(mdBlocks);

    return {
        metadata,
        markdown: mdString,
    };
};

/* Topページ用記事の取得(4) */
export const getPostsForTopPage = async (pageSize: number) => {
    const allPosts = await getAllPosts();
    const displayPosts = allPosts.slice(0, pageSize);

    return displayPosts;
};
