interface RegisterAPIInterface {
    apiName: string,
    apiVersion?: string,
    apiDescription?: string,
    apiEndpoint: string,
    apiMethod: string,
    apiRequestHeaders?: string[] | undefined,
    apiRequestBodyType?: string,
    apiRequestBody?: string | undefined,
    apiResponseHeaders?: string[] | undefined,
    apiResponse?: string | undefined
}

export default RegisterAPIInterface;