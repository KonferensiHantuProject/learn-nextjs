import Layout from "../../components/Layout"

interface UserProps{
  dataUsers: Array<any>;
}

export default function index(props: UserProps) {
  const {dataUsers} = props

  return (
      <Layout pageTitle="User Page">
        {dataUsers.map(user => {
          return(
            <div  key={user.id}>
              <p>{user.name}</p>
              <p>{user.email}</p>
            </div>
          )
        })}
      </Layout>
  )
}

export async function getStaticProps() {
  const res = await fetch('https://jsonplaceholder.typicode.com/users');
  const dataUsers = await res.json();
  return {
    props: {
      dataUsers
    }
  }
}