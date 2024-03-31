import React, { useEffect, useState } from 'react'
import appwriteService from "../appwrite/config";
import { Container, PostCard } from '../components'
import { Link } from 'react-router-dom'
import { useNavigate } from 'react-router-dom'

function Home() {
    const navigate = useNavigate()
    const [posts, setPosts] = useState([])

    useEffect(() => {
        appwriteService.getPosts().then((posts) => {
            if (posts) {
                setPosts(posts.documents)
            }
        })
    }, [])

    if (posts.length === 0) {
        return (
            <div className="w-full py-8 mt-4 text-center">
                <Container>
                    <div className="flex flex-wrap">
                        <div className="p-2 w-full">
                            <h1 className="my-36 text-3xl font-semibold">

                                Ready to Explore?
                                {"  "}
                                <Link onClick={() => navigate('login')} className='text-[#FCA311] duration-100 hover:underline underline-offset-[3px]'>
                                    Login
                                </Link>
                                {"  "}
                                and Let's begin!
                            </h1>
                        </div>
                    </div>
                </Container>
            </div>
        )
    }
    return (
        <div className='w-full py-3 md:py-8'>
            <Container>
                <div className='flex flex-wrap'>
                    {posts.map((post) => (
                        <div key={post.$id} className='p-2 sm:p-2 sm:w-1/4 w-full'>
                            <PostCard {...post} />
                        </div>
                    ))}
                </div>
            </Container>
        </div>
    )
}

export default Home