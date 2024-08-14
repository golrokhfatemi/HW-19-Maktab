import { BASE_URL, PRODUCTS_URL } from "../Constant"
import httpRequest from "../Services/Http-request"


export const getProducts = async() => {
    const url = `${PRODUCTS_URL}`
    const response = await httpRequest.get(url)

    return response.data
}