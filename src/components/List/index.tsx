import { UserData } from '../../interfaces/mock'
import { Post } from '../Post'

interface PagesHomeListProps {
    posts: UserData[] | undefined
    user: string | undefined
    handleDelete(id: number): void
}

export function PagesHomeList({
    posts,
    user,
    handleDelete
}: PagesHomeListProps): JSX.Element {
    return (
        <>
            {posts?.map(item => (
                <Post
                    post={item}
                    user={user}
                    handleDelete={handleDelete}
                />
            ))}
        </>
    )
}
