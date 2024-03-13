import Customer from "../models/customer";
import connectDB from "../utils/connectDB";
import HomePage from "../components/template/HomePage";

function Index({customers}) {
  return (
    <HomePage customers={customers} />
  );
}

export default Index;

export async function getServerSideProps(){
  try {
    await connectDB();
    const customers = await Customer.find();
    return {
      props:{
        customers : JSON.parse(JSON.stringify(customers))
      }
    }
  } catch(err){
    return {
      notFound : true ,
    }
  }
}
