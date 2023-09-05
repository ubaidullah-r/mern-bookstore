import React, {useState, useEffect} from 'react';
import axios from 'axios';
import spinner from '../components/spinner';
import { Link } from 'react-router-dom';
import { AiOutlineEdit } from 'react-icons/ai';
import { BsInfoCircle } from 'react-icons/bs';
import { MdOutlineAddbox, MdOutlineDelete} from 'react-icons/md';

const Home = () => {
  const [books, setBooks] = useState([]);
  const [loading, setLoading] = useState(false);
  return (
    <div>Home</div>
  )
}

export default Home