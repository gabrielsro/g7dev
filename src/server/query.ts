import "server-only";

export async function getPosts() {
  const response = await fetch(
    `${process.env.STRAPI_URL}/api/posts?fields[0]=title&fields[1]=slug&fields[2]=createdAt&populate[coverPicture][fields][0]=formats`,
    {
      cache: "no-store",
    }
  );
  const posts = await response.json();
  const postsSimplified = posts.data.map((post: any) => {
    return {
      id: post.id,
      title: post.attributes.title,
      slug: post.attributes.slug,
      createdAt: post.attributes.createdAt,
      coverPic:
        post.attributes.coverPicture.data.attributes.formats.medium?.url,
    };
  });
  console.log(postsSimplified);
  return postsSimplified;
}
