import { prisma } from "~/utils/db.server";

export type Post = {
    slug: string;
    title: string;
  };
  
  export async function getPosts(): Promise<Array<Post>> {
    const x = prisma.post.findMany();
    console.log(x);
    return x;
  }