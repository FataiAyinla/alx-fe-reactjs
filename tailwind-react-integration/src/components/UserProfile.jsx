const UserProfile = () => {
  return (
    <div className="max-w-xs md:max-w-sm mx-auto bg-white p-4 md:p-8 rounded-lg shadow-md text-center">
      <img
        src="https://via.placeholder.com/150"
        alt="User Profile"
        className="mx-auto rounded-full w-24 h-24 md:w-36 md:h-36 object-cover"
      />
      <h2 className="mt-4 text-lg md:text-xl font-semibold text-gray-800">
        Jane Doe
      </h2>
      <p className="mt-2 text-sm md:text-base text-gray-600">
        Frontend Developer with a passion for clean design and efficient code.
      </p>
    </div>
  );
};

export default UserProfile;
