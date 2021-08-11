import React, { useCallback, useEffect } from 'react'
import { Post } from '../Post'
import mockServices from '../../actions/mock'
import { useSelector, useDispatch } from 'react-redux'
import { selectPosts, updatePosts } from '../../redux/postsSlice'

export function PagesHomeList(): JSX.Element {

    const { posts } = useSelector(selectPosts)

    const dispatch = useDispatch()

    const handleGetPosts = useCallback(async () => {

        const { _getAll } = mockServices()

        const data = await _getAll()
        dispatch(updatePosts(data.results))
    }, [dispatch])

    useEffect(() => {
        handleGetPosts()
    }, [handleGetPosts])

    return (
        <>
            {posts?.map(item => (
                <Post
                    post={item}
                />
            ))}
        </>
    )
}
