import "server-only";

export async function getPosts() {
  const response = await fetch(
    `${process.env.STRAPI_URL}/api/posts?sort=createdAt:desc&fields[0]=title&fields[1]=slug&fields[2]=createdAt&fields[3]=introduction&populate[coverPicture][fields][0]=formats`,
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
      introduction: post.attributes.introduction,
      coverPic:
        post.attributes.coverPicture.data?.attributes.formats.medium?.url,
    };
  });
  return postsSimplified;
}

export async function getPost(slug: string) {
  const response = await fetch(
    `${process.env.STRAPI_URL}/api/posts/?filters[slug][$eq]=${slug}&populate=*`
  );
  const post = await response.json();
  const postData = post.data[0].attributes;
  console.log([postData]);
  const postSimplified = {
    title: postData.title,
    createdAt: postData.createdAt,
    introduction: postData.introduction,
    content: postData.content,
    coverPic: postData.coverPicture.data?.attributes.url,
  };
  console.log(postSimplified);
  return postSimplified;
}
