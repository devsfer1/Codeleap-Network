import { api } from '../api'
import { serviceErrorHandler } from '../../utils/helpers'

import { MockData, UserData, CreateUserFormData, UpdateUserFormData } from '../../interfaces/mock'

interface MockServicesProps {
    _getAll(): Promise<MockData>
    _create(values: CreateUserFormData): Promise<UserData>
    _update(values: UpdateUserFormData, id: number): Promise<UserData>
    _delete(id: number): Promise<void>
}

const _getAll = async(): Promise<MockData> => {
    const { data } = await api.get('')

    return data
}

const _create = async(values: CreateUserFormData): Promise<UserData> => {
    try {
        const obj = { ...values }

        const { data } = await api.post('', obj)

        return data
    } catch (err) {
        throw serviceErrorHandler(err)
    }
}

const _update = async(values: UpdateUserFormData, id: number): Promise<UserData> => {
    try {
        const obj = { ...values }

        const { data } = await api.patch(`${id}`, obj)

        return data
    } catch (err) {
        throw serviceErrorHandler(err)
    }
}

const _delete = async(id: number): Promise<void> => {
    try {
        const { data } = await api.delete(`${id}`)

        return data
    } catch (err) {
        throw serviceErrorHandler(err)
    }
}

const mockServices = (): MockServicesProps => ({
    _getAll,
    _create,
    _update,
    _delete
})

export default mockServices
