import Navber from "@/Components/Navber";


const Home = () => {
  return (
    <div className='pr-2.5 pt-4'>
      <Navber/>
      <div className='rounded-2xl p-10 mt-6  flex justify-between items-center bg-gray-200'>
        <div>
       
          <h1>total Employees</h1>
          
        </div>
        <div>
           <h1>Total Users</h1>
        </div>
        <div>
          <h1>Total Client</h1>

        </div>

      </div>
      
    </div>
  );
};

export default Home;