
import Link from 'next/link';

export default function Navbar() {
  return (
    <nav className="bg-white shadow-md flex items-center justify-between p-4">
      <div>
        <Link href="#">
          <a className="text-gray-700 mr-4 hover:text-gray-900">HOME</a>
        </Link>
      </div>
      <img className="h-5" src="/static/image/NNex.love.svg" alt="Logo" />
      <div>
        <button id="open-modal-btn" className="bg-green-500 hover:bg-green-600 text-white font-bold py-2 px-4 rounded">
          提交GPTs
        </button>
      </div>
    </nav>
  );
};
