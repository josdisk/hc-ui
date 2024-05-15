import axios from 'axios';
import { ApiResponse } from '../types';
import { User } from '../types';


const baseURL = 'https://9e06da9a-97cf-4701-adfc-9b9a5713bbb9.mock.pstmn.io/users';

export const fetchUsers = async (): Promise<User[]> => {
  try {  
    const response = (await axios.get<ApiResponse>(baseURL));
    // console.log(response.data.data.users);
    return (response.data.data.users);
  } catch (error) {
    console.error('Error fetching users:', error);
    return [];
  }
}
