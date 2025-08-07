const UserProfile = () => {
  return (
    <div className="mx-auto bg-white p-4 sm:p-4 md:p-8 rounded-lg shadow-md text-center max-w-xs sm:max-w-xs md:max-w-sm">
      <img
        src="https://via.placeholder.com/150"
        alt="User Profile"
        className="mx-auto rounded-full w-24 h-24 sm:w-24 sm:h-24 md:w-36 md:h-36 object-cover"
      />
      <h2 className="mt-4 text-base sm:text-lg md:text-xl font-semibold text-gray-800">
        Jane Doe
      </h2>
      <p className="mt-2 text-xs sm:text-sm md:text-base text-gray-600">
        Frontend Developer with a passion for clean design and efficient code.
      </p>
    </div>
  );
};

export default UserProfile;
