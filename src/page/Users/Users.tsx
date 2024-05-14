import axios from 'axios';
import { useQuery, useMutation, useQueryClient } from "@tanstack/react-query";
import './Users.scss';
import { useState } from 'react';

const Users = () => {
  const queryClient = useQueryClient();

  const { isLoading, isError, data } = useQuery({
    queryKey: ['users'],
    queryFn: () =>
      axios.get('https://6490bc9e1e6aa71680cbb786.mockapi.io/TeachersInfo/teacher').then(
        (res) => res.data
      ),
    staleTime: 120000,
    refetchOnWindowFocus: false,
  });

  const mutation = useMutation({
    mutationFn: (id) => axios.delete(`https://6490bc9e1e6aa71680cbb786.mockapi.io/TeachersInfo/teacher/${id}`),
    onSuccess: () => {
      queryClient.invalidateQueries(['users']);
    }
  });

  const handleDelete = (id) => {
    mutation.mutate(id);
  };

  if (isLoading) return <h1>loading....</h1>;
  if (isError) return <h1>Error loading data</h1>;

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
              <button onClick={() => handleDelete(item.id)} className='btn btn-danger'>delete</button>
              <button className='btn btn-success'>edit</button>
            </div>
          </div>
        </div>
      ))}
    </div>
  );
};

export default Users;
