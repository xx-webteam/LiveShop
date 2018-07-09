/**
 * 接口封装
 */
import axios from '~/untils/axios'

export default {
   //获取商品详情
   getProductDetail(id){
       return axios.get(`item/findDetilItemById?id=${id}`).then(data => {
           return data.data
       })
   },
    //创建订单
    postCreatOrder(data){
        return axios.post('/order/createOrder',data)
    },
    
}