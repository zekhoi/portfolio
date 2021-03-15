import Link from 'next/link';
import { useState } from "react"
import { format, parseISO } from 'date-fns';
import { getAllPosts } from '../lib/data';

import Bloglayout from '../components/blog/Layout'


export default function Blog({ posts }) {

    const [click, setClick] = useState(false)
    const handleClick = () => {
        setClick(!click)
    }
    const [navBackground, setNavBackground] = useState(false)
    const changeBackground = () => {
        if(window.scrollY <= 96){
            setNavBackground(true)
        }else{
            setNavBackground(false)
        }
    }
    
    const componentDidMount = () => {
        window.addEventListener('scroll', changeBackground);
    }
    return (
        <div>
            <Bloglayout title="Blog - Khoironi Kurnia Syah">
                <div className="bg-white">
                    <div className="mt-32">
                        <div className="container md:mx-auto mx-4">
                            <h5 className="font-semibold text-3xl md:w-3/5 w-auto md:mx-auto">Daily Note</h5>
                            <div className="md:w-3/5 w-auto mx-auto flex my-4 items-center">
                                <input type="search" name="serch" placeholder="Search . . ." className="bg-white h-10 md:w-11/12 w-4/5 p-3 border-2 rounded text-sm focus:outline-none focus:border-one"/>
                                <h3 className="text-two font-bold text-2xl mx-auto">{posts.length}</h3>
                            </div>
                            <div className="grid grid-cols-1">
                                {posts.map((item) => (
                                <BlogListItem key={item.slug} {...item} />
                                ))}
                            </div>
                        </div>
                    </div>
                </div>
            </Bloglayout>
        </div>
    );
}
export async function getStaticProps() {
    const allPosts = getAllPosts();
    return {
        props: {
            posts: allPosts.map(({ data, content, slug }) => ({
                ...data,
                date: data.date.toISOString(),
                content,
                slug,
            })),
        },
    };
}


const BlogListItem = ({ slug, title, date, content }) => {
    return (
        <Link href={`/${slug}`}>
                <div className="cursor-pointer rounded p-4 md:w-3/5 w-auto md:mx-auto hover:bg-gray-300 hover:bg-opacity-20 border-b border-opacity-10">
                    <p className="text-black">{title}</p>
                    <p className="text-gray-300">{format(parseISO(date), 'MMMM do, uuu')}</p>
                </div>
        </Link>
    );
}