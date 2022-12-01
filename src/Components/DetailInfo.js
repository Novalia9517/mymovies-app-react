import React from 'react'

const DetailInfo = ({movie}) => {
  return (
    <div className='text-gray-800 h-auto w-full bg-indigo-400 dark:bg-gray-800 dark:text-gray-200'>    
        <div className={`hero h-full  glass p-10 w-full`}>
            <table className="w-full my-10">
                <tbody className='overflow-x-auto'>
                <tr className='mb-5'>
                    <td>Status</td>
                    <td>:</td>
                    <td>{movie.status}</td>
                </tr>
                <tr>
                    <td>Overview</td>
                    <td>:</td>
                    <td>{movie.overview}</td>
                </tr>
                <tr>
                    <td>Homepage</td>
                    <td>:</td>
                    <td><a href={movie.homepage} target='_blank' className="link link-primary dark:link-info">Official Page</a></td>
                </tr>
                <tr>
                    <td>Revenue</td>
                    <td>:</td>
                    <td>{movie.revenue}</td>
                </tr>
                <tr>
                    <td>Review</td>
                    <td>:</td>
                    <td></td>
                </tr>
                </tbody>
            </table>
        </div>
    </div>
  )
}

export default DetailInfo