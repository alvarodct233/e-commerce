import PageLayout from '../../components/layout/pagelayout';
import React from 'react';


export const LoginPage: React.FC = () => {

  const [username, setUsername] = React.useState('');
  const [password, setPassword] = React.useState('');

  const handleSubmit = (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    console.log('username:', username);
    console.log('password:', password);
  };


  return (
    <PageLayout>
      <form className="flex flex-col items-center mt-10 mb-20 bg-blue-500" onSubmit={handleSubmit}>
      <label className="text-lg mb-4 mr-20">
        Username:
        <input className="p-4 rounded border  border-gray-300 mt-11 mb-20" type="text" value={username} onChange={(event) => setUsername(event.target.value)} />
      </label>
      <label className="text-lg mb-4 mr-20">
        Password:
        <input className="p-4 rounded border border-gray-300 mb-8" type="password" value={password} onChange={(event) => setPassword(event.target.value)} />
      </label>
      <button className="bg-black text-white py-4 px-8 rounded border-none cursor-pointer mb-11" type="submit">Login</button>
    </form>
    </PageLayout>
  )
}