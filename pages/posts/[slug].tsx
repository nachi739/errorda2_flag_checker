import React from "react";

const Post = () => {
    return (
        <section className="container lg:px-2 h-screen lg:w-2/5 mx-auto mt-20">
            <h2 className="w-full text-2x1 font-medium">タイトルを表示する</h2>
            <div className="border-b-2 w-1/3 mt-1 border-sky-900"></div>
            <span className="text-gray-500">投稿日を表示する</span>
            <br />
            <p className="text-white bg-sky-900 rounded-xl font-medium mt-2 px-2 inline-block">タグを表示する</p>
            <div className="mt-10 font-medium">記事の内容を表示する</div>
        </section>
    );
};

export default Post;
