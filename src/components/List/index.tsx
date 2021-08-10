import { UserData } from '../../interfaces/mock'
import { Post } from '../Post'
import { useSelector } from 'react-redux'
import { selectPosts } from '../../redux/postsSlice'

interface PagesHomeListProps {

}

export function PagesHomeList({

}: PagesHomeListProps): JSX.Element {

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
