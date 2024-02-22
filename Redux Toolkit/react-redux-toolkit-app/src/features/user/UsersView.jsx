import { useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux'
import { fetchUsers } from './userSlice';
export default function UsersView() {
  const dispatch = useDispatch();
  const user = useSelector((state) => state.user);
  useEffect(() => {
    dispatch(fetchUsers());
  }, [])
  return (
    <>
      <main> <b>List of Users</b> </main>
      <br />
      {
        user.loading ?
          <div>loading..............</div>
          :
          <>
            {
              user.error ? <div>
                Error is here
              </div> :
                <div>
                  {
                    user.users.map((elem, index) => {
                      const {name , email , phone , webiste} = elem;
                      return (
                        <>
                        <main>
                          <b>User Email : {email}</b>
                          <div>{index + 1}. {name}</div>
                          <br />
                        </main>
                        </>
                      )
                    })
                  }
                </div>
            }
          </>
      }
    </>
  )
}
