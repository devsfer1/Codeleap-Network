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
    results: [UserData]
}

export interface CreateUserFormData {
    username: string
    title: string
    content: string
}

export interface UpdateUserFormData {
    title: string
    content: string
}
