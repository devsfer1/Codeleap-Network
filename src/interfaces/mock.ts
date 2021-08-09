export interface UserData {
    id: number
    username: string
    created_datetime: string
    title: string
    content: string
}

export interface MockData {
    count: number
    next: string
    previous: null
    results: UserData[]
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

export interface UpdateUserFormData {
    title: string
    content: string
}

export interface SignUpFormData {
    name: string
}
