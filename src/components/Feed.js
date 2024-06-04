import React from 'react'
import './css/feed.css'
import Storyreel from './Storyreel'
import Createpost from './Createpost'
import Post from './Post'
const Feed = () => {
  return (
    <div className='feed'>
{/* Story reels */}
<Storyreel/>
{/* create posts */}
<Createpost/>

{/* posts section */}
<Post photoURl= "https://avatars.githubusercontent.com/u/112004425?v=4" image="https://www.hindustantimes.com/ht-img/img/2023/10/05/1600x900/fushimi-inari-taisha-shrine-1612656_1280_1696498102979_1696498108439.jpg" username="Shivam Patel"  timestamp="12:40 Pm"  message="This is test message"   />


    </div>
  )
}

export default Feed