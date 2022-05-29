import axios from "axios";

export default class InfoHome {
    static async getAllHome() {
        const response = await axios.get(`http://localhost:2000/home`)
        return response
    }
    static async getHome(id) {
        const response = await axios.get(`http://localhost:2000/home/${id}`)
        return response
    }
    static async getComment() {
        const response = await axios.get(`http://localhost:2000/comment`,)
        return response
    }
    static async postComment(comment) {
        const response = await axios.post(`http://localhost:2000/comment`, {
            id: comment.id,
            name: comment.name,
            body: comment.body
        })
        return response
    }

    static async postOrder(resolve) {
        const response = await axios.post(`http://localhost:2000/order`, {
            id: resolve.id,
            name: resolve.name,
            email: resolve.email,
            phone: resolve.phone
        })
        return response
    }
}
