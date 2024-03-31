import React from 'react'
import appwriteService from "../appwrite/config"
import { Link } from 'react-router-dom'

function PostCard({ $id, title, featuredImage, userName }) {

    return (
        <Link to={`/post/${$id}`}>

            <div className="h-full w-full md:h-auto md:w-[300px] rounded-md border transition bg-white shadow-lg active:scale-[99%] active:shadow-sm">

                <img src={appwriteService.getFilePreview(featuredImage)} alt={title}
                    className="h-[200px] md:h-[180px] w-full rounded-md object-cover" />

                <div className="p-4 space-y-2">
                    <h2 className='text-xl font-semibold line-clamp-2 text-ellipsis' >
                        {title}
                    </h2>
                    <p className='text-sm text-slate-500 font-medium'>{userName}</p>
                </div>

            </div>

        </Link>
    )
}


export default PostCard


// xbsi7y44mvizm1oqjslzq1o4y8zjjhzxby7rg3rblrpjdr7s