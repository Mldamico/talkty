export const Nav = () => {
  return (
    <div className="fixed top-0 w-full text-white bg-black">
      <div className="container flex items-center max-w-6xl gap-6 p-3 m-auto">
        <header>
          <h3>Talkty</h3>
        </header>
        <div className="">Activities</div>
        <button className="p-2 bg-green-600 rounded-md">Create Activity</button>
      </div>
    </div>
  );
};
