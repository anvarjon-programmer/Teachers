import axios from 'axios';
import { useQuery } from "@tanstack/react-query";
import './Users.scss';

const Users = () => {
    const { isLoading, isError, data } = useQuery({
        queryKey: ['users'],
        queryFn: () =>
          axios.get('https://6490bc9e1e6aa71680cbb786.mockapi.io/TeachersInfo/teacher').then(
            (res) => res.data
            ),
          staleTime: 120000,
          refetchOnWindowFocus: false,
      });
      if (isLoading) return <h1>loading....</h1>;
    
      if (isError) throw Error('network');
      console.log('data', data);
  return (
<div className="row">
    {data.map((item, index) => (
        <div className="card col-lg-3" key={index}>
            <img src={item.avatar} className="card-img-top" alt="" />
            <div className="card-body">
                <h5 className="card-title"><i>firstName: </i>{item.firstName}</h5>
                <h6 className="card-title"><i>lastName: </i>{item.lastName}</h6>
                <p className="card-text">{item.isMarried}</p>

                <div className="btn__wraper flex g-5">
                  <button className='btn btn-danger'>delete</button>
                  <button className='btn btn-success'>edit</button>
                </div>
            </div>
        </div>
    ))}
</div>
  )
}

export default Users