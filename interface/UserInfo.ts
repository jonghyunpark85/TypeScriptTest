//UserInfo.ts
interface UserInfo {
    username: string;
    password: string;
    age?    : number;
    address?: string;
}

const userInfo: UserInfo = {
    username: 'aaaa@gmail.com',
    password: '123456'
}

console.log(userInfo);
