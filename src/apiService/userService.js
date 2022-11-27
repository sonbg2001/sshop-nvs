import request from '~/utils/request';

export const user = async () => {
    try {
        const res = await request.get('users').then(function (response) {
            console.log(response.data);
            // setListUser(response.data);
        });
        console.log(res.data);
        return res.data;
    } catch (error) {
        console.log('Có lỗi:', error);
    }
};
