import EditComponent from "../components/usersEdit";

const SingleUserPage = async ({ params }) => {
  const  {id} = params;
  console.log(id)
  return (
    <EditComponent id={id} />
  );
};

export default SingleUserPage;
