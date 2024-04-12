import axios from 'axios';

function getAllData(){
    return axios.get('data/datas.json')
    .then(function (response) {
        // handle success
        return response.data;
    })
    .catch(function (error) {
        // handle error
        console.log(error.request);
        return;
    })
    .finally(function () {
        // always executed
    });
};

export default getAllData;