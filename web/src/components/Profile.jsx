import { Link } from 'react-router-dom';

import DefaultAvatar from '../assets/default_avatar.png';

const Profile = ({ user }) => {
  return (
    <div className='p-3 max-w-lg mx-auto'>
      <h1 className='text-3xl font-semibold text-center my-7'>Profile</h1>
      <form className='flex flex-col gap-4'>
        <img
          src={user.profilePicture}
          alt={user.userName}
          className='h-24 w-24 self-center rounded-full object-cover mt-2'
          onError={(e) => { e.target.src = DefaultAvatar }}
        />
        <input
          defaultValue={user.username}
          type='text'
          id='username'
          placeholder='Username'
          className='bg-slate-100 rounded-lg p-3'
        />
        <input
          defaultValue={user.email}
          type='email'
          id='email'
          placeholder='Email'
          className='bg-slate-100 rounded-lg p-3'
        />
      </form>
      <div className='flex justify-between mt-5'>
        <span
          // onClick={handleDeleteAccount}
          className='text-gray-700'
        >
          Delete Account (soon!)
        </span>
        <Link
          to="/logout"
          className='text-red-700 cursor-pointer'>
          Sign out
        </Link>
      </div>
    </div>
  )
}

export default Profile;
