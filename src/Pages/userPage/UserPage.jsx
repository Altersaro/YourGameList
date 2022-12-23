import React from 'react';
import{ CardStyle } from '../../components/card/Card.style';
import {Link} from 'react-router-dom';
import axios from 'axios';
import AddButton from '../../components/addButton';
import Completed from '../../components/completed';




function UserPage() {


  
  const [listData, setListData] = React.useState([])
  
    let user =JSON.parse(sessionStorage.getItem('user-info'));

    const sendId = [{
      user_id : user.id
}]
    

    async function getList(){
      const res = await axios.post(`http://localhost:8000/api/get`, sendId);
      setListData(res.data);
      sessionStorage.setItem('usergame', JSON.stringify(res.data))
    }



    React.useEffect(()=>{
      getList()
    },[])

    
  return (
    <div className='ol-10'>
        <h1 className='section-title'>My List</h1>
        <div className=' card-container'>
        {listData.map(data=>{ 
            return(
            <CardStyle key={data.id} className="gamesGenre-card">
                <img  className = 'card-img' src={data.background_image} />
            <div className='card-info-container'>
                <div className='card-info'>
                    <Link to={'/'+data.slug} className='card-title'>{data.name}</Link>
                </div>
            </div>
            <Completed completed ={data.completed} id={data.id} user_id={sendId}/>
            <AddButton game={data}/>
            </CardStyle>
            )
        })}
        </div>
    </div>
  )
}

export default UserPage