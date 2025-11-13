import banner from '../assets/banner.png'
export default function Home() {
  return (
    <>
    <h1 className="bg-green-200 text-red-500 hover:bg-blue-400">Welcome to Our Site</h1>
    <img src={banner}/>
    <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Harum culpa ab delectus architecto distinctio exercitationem saepe totam illum quisquam, quia modi cumque doloremque, magnam natus, mollitia repellendus at tempora necessitatibus.</p>
    </>
  )
}
