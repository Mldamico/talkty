export const ProfileHeader = () => {
  return (
    <div className="flex justify-between p-3 bg-white shadow-md">
      <div className="flex items-center gap-4">
        <img
          src={"/assets/user.png"}
          alt="User"
          className="w-24 rounded-full"
        />
        <h1 className="text-4xl">Display name</h1>
      </div>
      <div className="flex flex-col">
        <div className="flex gap-10 border-b border-gray-600">
          <div className="text-center">
            <p className="text-3xl">5</p>
            <p>Followers</p>
          </div>
          <div className="text-center">
            <p className="text-3xl">50</p>
            <p>Following</p>
          </div>
        </div>
        <button className="py-2 mt-2 text-white bg-blue-600 ">Following</button>
      </div>
    </div>
  );
};
