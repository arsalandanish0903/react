import React, { useState, useEffect } from 'react'
import { Container, PostForm } from '../components'
import appWriteService from '../appwrite/conf'
import { useNavigate, useParams } from 'react-router-dom'
function EditPost() {
    const [post, setPost] = useState(null)
    const { slug } = useParams()
    const navigate = useNavigate()

    useEffect(() => {
        appWriteService.getPost(slug).then((post) => {
            if (post) {
                setPost(post)
            } else {
                navigate('/')
            }
        })
    }, [slug, navigate])

    return post ? (
        <div className='py-8'>
            <Container>
                <PostForm post={post} edit={true} />
            </Container>
        </div>
    ) : null
}

export default EditPost