import { useFirebase } from "../firebase/FirebaseContext";

export const Password = ({ setIsAuthorized }) => {
  const { getPSWD } = useFirebase();

  const verifyPassword = async (event) => {
    event.preventDefault();
    const inputPassword = event.target.password.value;

    try {
      const dbpassword = await getPSWD();
      if (!dbpassword)  {
        throw Error("Password not set in the database.");
      }
      if (dbpassword === inputPassword) {
        localStorage.setItem("authorized", "true");
        setIsAuthorized(true);
      } else {
        alert("Incorrect password. Please try again.");
      }
    } catch (error) {
      console.error("Error fetching password. Please try again later.", error);
      alert("Unexpected error. Please try again later or contact Kami.");
    }
  };

  return (
    <div className="password">
      <h1>Protected</h1>
      <p>This page is protected by a password.</p>
      <p>Enter the password to access the content.</p>
      <form onSubmit={verifyPassword}>
        <input
          name="password"
          autoComplete="yes"
          type="password"
          placeholder="Enter password"
        />
        <button type="submit">Submit</button>
      </form>
    </div>
  );
};
