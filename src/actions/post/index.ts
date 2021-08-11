import { api } from '../api'
import { serviceErrorHandler } from '../../utils/helpers'

import { PostArrayData, PostData, CreateData, UpdatePostFormData } from '../../interfaces/post'

interface PostServicesProps {
    _getAll(): Promise<PostArrayData>
    _create(values: CreateData, username: string | undefined): Promise<PostData>
    _update(values: UpdatePostFormData, id: number): Promise<PostData>
    _delete(id: number): Promise<void>
}

const _getAll = async(): Promise<PostArrayData> => {
    const { data } = await api.get('')

    return data
}

const _create = async(values: CreateData, username: string | undefined): Promise<PostData> => {
    try {
        const obj = { ...values }

        obj.username = username

        const { data } = await api.post('', obj)

        return data
    } catch (err) {
        throw serviceErrorHandler(err)
    }
}

const _update = async(values: UpdatePostFormData, id: number): Promise<PostData> => {
    try {
        const obj = { ...values }

        const { data } = await api.patch(`${id}/`, obj)

        return data
    } catch (err) {
        throw serviceErrorHandler(err)
    }
}

const _delete = async(id: number): Promise<void> => {
    try {
        const { data } = await api.delete(`${id}/`)

        return data
    } catch (err) {
        throw serviceErrorHandler(err)
    }
}

const postServices = (): PostServicesProps => ({
    _getAll,
    _create,
    _update,
    _delete
})

export default postServices
