export const request=(params)=>{
    // 定义公共的url
    // url:https://api-hmugo-web.itheima.net/api/public/v1
    const baseUrl="https://api-hmugo-web.itheima.net/api/public/v1"
    return new Promise((resolve,reject)=>{
        wx.request({
            ...params,
            url:baseUrl+params.url,
            success:(result)=>{
                resolve(result.data.message);
            },
            fail:(err)=>{
                reject(err);
            }
        });
    })
}