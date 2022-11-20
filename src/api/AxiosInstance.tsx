import axios from 'axios';

const AxiosInstance = axios.create({
    //caso esteja usando o emulador no pc
    //baseURL:"http://10.0.2.2:8080"
    
    //caso esteja usando o celular via USB
    baseURL:"http://192.168.1.10:8080"
});


export default AxiosInstance;