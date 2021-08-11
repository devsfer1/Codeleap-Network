import { Post } from '../Post'
import { useSelector } from 'react-redux'
import { selectPosts } from '../../redux/postsSlice'

export function PagesHomeList(): JSX.Element {

    const { posts } = useSelector(selectPosts)

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
