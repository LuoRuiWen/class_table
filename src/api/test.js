import * as API from './'

export default{
    hello:params=>{
        return API.POST('hello',params)
    }
}