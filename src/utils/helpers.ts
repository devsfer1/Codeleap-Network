type errorObject =
    | {
          response: {
              data:
                  | {
                        message: string
                    }
                  | {
                        errors: { message: string }[]
                    }
          }
      }
    | {
          message: string
      }

export const serviceErrorHandler = (err: errorObject | string): string => {
    if (typeof err === 'object') {
        if ('response' in err) {
            if (
                typeof err.response.data === 'object' &&
                'errors' in err.response.data
            )
                return err.response.data.errors[0].message
            return err.response.data.message
        }
        if ('message' in err) return err.message

        const obj = JSON.parse(JSON.stringify(err))
        if ('message' in obj) return obj.message
        return JSON.stringify(obj)
    }
    return JSON.stringify(err)
}
