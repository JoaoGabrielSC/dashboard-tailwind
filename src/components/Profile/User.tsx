import userLogo from "../../assets/me.jfif"

const User = () => {
  return (
    <div
			className="flex gap-3 items-center bg-white p-4 rounded-full 
			dark:bg-gray-600 dark:text-gray-300"
    >
			<img src={userLogo} alt="user image" className="w-14 h-14 rounded-full"/>
			<div>
				<h3 className="font-semibold text-2xl">John Johnes</h3>
				<p>Principal Enginner</p>
			</div>
    </div>
  )
}

export default User
