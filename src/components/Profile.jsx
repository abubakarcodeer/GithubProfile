import React, { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { fetchUserWithLog } from "../features/githubThunk/githubSlice";
import { useGetUserQuery } from "../features/githubRTKQuery/githhubApi";

const Profile = () => {
  const [username, setUsername] = useState("");
  const dispatch = useDispatch();

  const { user: thunkUser, loading, error } = useSelector((state) => state.github);

  // Only fetch RTK Query if username is non-empty
  const { data: rtkUser, error: rtkError, isLoading, refetch } = useGetUserQuery(username, {
    skip: !username, // skip query if input is empty
  });

  const handleFetchBoth = () => {
    if (!username) return; // do nothing if empty
    dispatch(fetchUserWithLog(username));
    refetch();
  };

  // Only render user info if username exists
  // const showThunkUser = thunkUser && username.trim() !== "";
  const showRtkUser = rtkUser && username.trim() !== "";

  return (
    <div style={{ background:"#2a454f", padding: "20px", maxWidth: "400px", margin: "10px auto", borderRadius:'15px' }}>
      <h1>GitHub Profile App</h1>
      <input
        type="text"
        value={username}
        onChange={(e) => setUsername(e.target.value)}
        placeholder="GitHub username"
        style={{ width: "95%" , outline:"none", padding: "8px", marginBottom: "10px" }}
      />
      <button onClick={handleFetchBoth} style={{ width: "100%", padding: "8px" }}>
        Search
      </button>

      {/* Redux Thunk */}
      {loading && <p>Loading (Thunk)...</p>}
      {error && <p>Error (Thunk): {error?.message}</p>}
      {thunkUser && (
        <div style={{ marginTop: "10px" }}>
          <h3>Thunk User:</h3>
          <img src={thunkUser.avatar_url} alt={thunkUser.login} width={80} />
          <p>{thunkUser.name}</p>
          <p>{thunkUser.bio}</p>
        </div>
      )}

      {/* RTK Query */}
      {isLoading && <p>Loading (RTK)...</p>}
      {rtkError && <p>Error (RTK): {rtkError?.status}</p>}
      {showRtkUser && (
        <div style={{ marginTop: "10px" }}>
          <h3>RTK User:</h3>
          <img src={rtkUser.avatar_url} alt={rtkUser.login} width={80} />
          <p>{rtkUser.name}</p>
          <p>{rtkUser.bio}</p>
        </div>
      )}
    </div>
  );
};


export default Profile;
