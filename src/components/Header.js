import { signOut, onAuthStateChanged } from "firebase/auth";
import { auth } from "../utils/firebase";
import { useNavigate } from "react-router-dom";
import { useSelector, useDispatch } from "react-redux";
import { useEffect } from "react";
import { addUser, removeUser } from "../utils/userSlice";
import { LOGO, SUPPORTED_LANGUAGES } from "../utils/constants";
import { toggleSearchView } from "../utils/gptSlice";
import { changeLanguage } from "../utils/configSlice";

const Header = () => {
  const navigate = useNavigate();

  const dispatch = useDispatch();

  const user = useSelector((store) => store.user);

  const showGptSearch = useSelector((store) => store.gpt.showGptSearch);

  const handleSignout = () => {
    signOut(auth)
      .then(() => {
        // Sign-out successful
      })
      .catch((error) => {
        // An error happened.
        navigate("/error");
      });
  };

  useEffect(() => {
    const unsubscribe = onAuthStateChanged(auth, (user) => {
      if (user) {
        // User is Signed in
        const { uid, email, displayName, photoURL } = user;
        dispatch(
          addUser({
            uid: uid,
            email: email,
            displayName: displayName,
            photoURL: photoURL,
          })
        );
        navigate("/browse");
      } else {
        // User is signed out
        dispatch(removeUser());
        navigate("/login");
      }
    });

    // Unsubscribe when component unmounts
    return () => unsubscribe();
  }, []);

  const handleGPTSearchClick = () => {
    dispatch(toggleSearchView());
  };

  const handleLanguageChange = (e) => {
    dispatch(changeLanguage(e.target.value));
  };

  return (
    <div className="absolute w-screen flex align-middle justify-between px-8 py-2 bg-gradient-to-b from-black z-10 flex-col md:flex-row ">
      <img className="w-44 mx-auto md:mx-0" src={LOGO} alt="logo" />
      {user && (
        <div className="flex items-center gap-3 justify-center mt-2 md:mt-0">
          {showGptSearch && (
            <select
              className="p-2 rounded-md text-md font-bold  bg-neutral-950 text-neutral-200 border-2 border-stone-800"
              onChange={handleLanguageChange}
            >
              {SUPPORTED_LANGUAGES.map((lng) => (
                <option key={lng.identifier} value={lng.identifier}>
                  {lng.name}
                </option>
              ))}
            </select>
          )}

          <button
            className="p-2 bg-neutral-950 text-neutral-200 rounded-md font-bold border-2 border-stone-800"
            onClick={handleGPTSearchClick}
          >
            {showGptSearch ? "Home" : "Suggestions"}
          </button>
          <img
            className="w-11 h-11 rounded-md"
            alt="usericon"
            src={user?.photoURL}
          />
          <button
            className="font-bold text-neutral-100"
            onClick={handleSignout}
          >
            (Sign Out)
          </button>
        </div>
      )}
    </div>
  );
};

export default Header;
