export interface PostData {
    id: number
    username: string
    created_datetime: string
    title: string
    content: string
}

export interface PostArrayData {
    count: number
    next: string
    previous: null
    results: PostData[]
}

export interface CreateFormData {
    title: string
    content: string
}

export interface CreateData {
    title: string
    content: string
    username: string | undefined
}

export interface UpdatePostFormData {
    title: string
    content: string
}

export interface SignUpFormData {
    name: string
}
