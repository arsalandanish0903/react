import React, { useEffect, useState } from 'react'
import { Container, PostCard } from '../components'
import appWriteService from '../appwrite/conf'
function Home() {
    const [posts, setPosts] = useState([])
    useEffect(() => {
        appWriteService.getPosts().then((post) => {
            if (post) {
                setPosts(post.documents)
            }
        })
    }, [])
    if (posts.length === 0) {
        return (
            <div className='w-full py-8 mt-4 text-center'>
                <Container>
                    <div className='flex flex-wrap'>
                        <div className='p-2 w-full'>
                            <h2 className='text-2xl font-bold hover:text-gray-500'>
                                Login To Read Posts
                            </h2>
                        </div>
                    </div>
                </Container>
            </div>
        )
    }
    return (
        <div className='w-full py-8'>
            <Container>
                <div className='flex flex-wrap'>
                    {posts.map((post) => (
                        <div className='p-2 w-1/2' key={post.$id}>
                            <PostCard {...post} />
                        </div>
                    ))}
                </div>
            </Container>
        </div>
    )
}

export default Home