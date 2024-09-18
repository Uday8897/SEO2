import React, { useState } from 'react';

function SignIn() {
  const [userName, setUserName] = useState('');
  const [password, setPassword] = useState('');

  const handleUserNameChange = (e) => {
    setUserName(e.target.value);
  };

  const handlePasswordChange = (e) => {
    setPassword(e.target.value);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    // Handle form submission logic here, e.g., API call or validation
    console.log('Form submitted:', { userName, password });
    // Reset form fields if needed
    setUserName('');
    setPassword('');
  };

  return (
    <div className='bg-darkNavy h-screen flex items-center justify-center'>
      <div className='text-8xl text-white  font-bold absolute top-[150px] left-[750px]'>Sign in</div>
      <div className="w-[500px] bg-navy2 shadow-2xl p-8 text-white">
        <form className='flex flex-col space-y-5' onSubmit={handleSubmit}>
          <div className="flex flex-col space-y-2">
            <label htmlFor="name" className='text-2xl font-medium'>Username:</label>
            <input
              type="text"
              id="name"
              value={userName}
              onChange={handleUserNameChange}
              className='p-2 border border-gray-300 rounded-md'
              required
            />
          </div>
     
          <div className="flex flex-col space-y-2">
            <label htmlFor="password" className='text-2xl font-medium outline-none active:outline-gray-950'>Password:</label>
            <input
              type="password"
              value={password}
              onChange={handlePasswordChange}
              className='p-2 border border-gray-300 rounded-md outline-none'
              required
            />
          </div>

          <button type="submit" className='bg-blue-500 text-white py-2 px-4 rounded-md shadow-md hover:bg-blue-600 transition-colors'>
            Log In
          </button>
          <div>No account</div>
        </form>
      </div>
    </div>
  );
}

export default SignIn;
