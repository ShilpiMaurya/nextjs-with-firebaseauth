import nookies from "nookies";
import { verifyIdToken } from "../firebaseAdmin";
import firebaseClient from "../firebaseClient";
import firebase from "firebase/app";

const Authenticated = ({ session }: any) => {
  firebaseClient();
  if (session) {
    return (
      <>
        <h1>Authenticated</h1>
        <h3>{session}</h3>
        <h3>You can do anything now you are Authenticated</h3>
        <br />
        <button
          onClick={async () => {
            await firebase.auth().signOut();
            window.location.href = "/";
          }}
        >
          Signout
        </button>
      </>
    );
  } else {
    <h2>Loading...</h2>;
  }
};

export async function getServerSideProps(context: any) {
  try {
    const cookies = nookies.get(context);
    const token = await verifyIdToken(cookies.token);
    const { uid, email } = token;
    return {
      props: {
        session: `Your email is ${email} and ur UID is ${uid}.`
      }
    };
  } catch (err) {
    context.res.writeHead(302, { location: "/login" });
    context.res.end();
    return { props: [] };
  }
}

export default Authenticated;
