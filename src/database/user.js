const usersDatabase = [
    {
        id: 1,
        login: 'admin',
        password: 'admin'
    },
]

export const loginUser = (user) => usersDatabase.find(x => x.login === user.login && x.password === user.password)

export const registerUser = (user) => {
        usersDatabase.push({
            ...user, id: usersDatabase.length + 1
        })
}
export const getAllUsers = () => usersDatabase