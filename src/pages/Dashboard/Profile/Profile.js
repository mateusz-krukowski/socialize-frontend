const Profile = ({ match }) => {
    const { username } = match.params;

    return (<div className='user-profile'>
            <h1>Profile: {username}</h1>
    </div>
    );
};
export default Profile