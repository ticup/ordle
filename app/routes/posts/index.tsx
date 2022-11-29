import { Link, useLoaderData } from "@remix-run/react";
import { json } from "@remix-run/server-runtime";
import { getPosts } from "~/models/post.server";



type LoaderData = {
    posts: Awaited<ReturnType<typeof getPosts>>;
}

export async function loader() {
    return json<LoaderData>({
      posts: await getPosts(),
    });
  };

export default function Posts() {
    const { posts } = useLoaderData<LoaderData>();
    console.log(posts);

    return (
      <main>
        <h1>Posts</h1>
        <ul>
        {posts.map((post) => (
          <li key={post.slug}>
            <Link
              to={post.slug}
              className="text-blue-600 underline"
            >
              {post.title}
            </Link>
          </li>
        ))}
      </ul>
      </main>
    );
  }