import { useEffect } from "react";
import { useNavigate } from "react-router-dom";

export const MoviesList = () => {

  const navigate = useNavigate();

  useEffect(() => {
    const token = localStorage.getItem('token');
    if(token === null){
      navigate('/');
    }
  }, []);


  return (
    <div>MoviesList</div>
  )
}
