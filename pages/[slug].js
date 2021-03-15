import { format, parseISO } from 'date-fns';
import renderToString from 'next-mdx-remote/render-to-string';
import hydrate from 'next-mdx-remote/hydrate';
import Link from 'next/link'

import { getAllPosts } from '../lib/data';
import Bloglayout from '../components/blog/Layout';

export default function BlogPage({ title, date, content }) {
  const hydratedContent = hydrate(content);

  return (
    <div>
      <Bloglayout title={title}>
          <div className="bg-white">
            <div className="mt-24">
              <div className="container md:mx-auto px-4">

                <div class="md:w-3/5 w-auto mx-auto my-4 items-center">
                <Link href="/blog">
                    <button className="text-yellow-400 bg-transparent font-bold px-3 py-2 md:px-5 md:py-2 rounded outline-none focus:outline-none mr-1 mb-1" type="button" style={{ transition: "all .15s ease" }}>
                        <i className="fas fa-arrow-left"></i> Go Back
                    </button>
                </Link>
                  <div class="mb-8">
                    <h5 className="font-semibold text-3xl w-auto md:mx-auto">{title}</h5>
                    <div className="text-gray-600 text-md">
                      {format(parseISO(date), 'MMMM do, uuu')}
                    </div>
                  </div>

                  <article className="prose lg:prose-xl">
                    {hydratedContent}
                  </article>
                </div>
              </div>
            </div>
          </div>
      </Bloglayout>
    </div>
  );
}



export async function getStaticProps(context) {
  const { params } = context;
  const allPosts = getAllPosts();
  const { data, content } = allPosts.find((item) => item.slug === params.slug);
  const mdxSource = await renderToString(content);

  return {
    props: {
      ...data,
      date: data.date.toISOString(),
      content: mdxSource,
    },
  };
}

export async function getStaticPaths() {
  return {
    paths: getAllPosts().map((post) => ({
      params: {
        slug: post.slug,
      },
    })),
    fallback: false,
  };
}