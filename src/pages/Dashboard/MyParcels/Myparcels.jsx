import React from 'react';
import {useQuery} from '@tanstack/react-query'
import UseAuth from '../../../hocks/UseAuth';
import useAxiosSecure from '../../../hocks/useAxiosSecure'

const Myparcels = () => {
    const {user} = UseAuth();
    const axiosSecure = useAxiosSecure()
   const {data: parcels=[]} = useQuery({

    queryKey: ['my-parcels',user.email ],
    queryFn: async() =>{
        const res = await axiosSecure.grt(`/parcels?email=${user.email}`);
        return res.data;
    }
   })

   console.log(parcels)

    // MyParcels.jsx
// const { user } = useAuth();
// const axiosSecure = useAxiosSecure();
// const [myParcels, setMyParcels] = useState([]);

// useEffect(() => {
//     if(user?.email){
//         axiosSecure.get(`/my-parcels?email=${user.email}`)
//         .then(res => setMyParcels(res.data))
//     }
// }, [user?.email, axiosSecure])

    return (
        <div>
            <h2>My parcels comming hare{parcels.length}</h2>

            
        </div>
    );
};

export default Myparcels;