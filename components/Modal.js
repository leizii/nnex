
import { useState } from 'react';

export default function Modal({ onClose, onSubmit }) {
  const [urlInput, setUrlInput] = useState('');

  const handleSubmit = () => {
    onSubmit(urlInput);
    setUrlInput(''); // 清空输入
  };

  return (
    <div id="modal-overlay" className="hidden fixed inset-0 bg-black bg-opacity-80 flex items-center justify-center">
      <div className="bg-white rounded-lg p-8 max-w-sm mx-auto">
        <h2 className="text-lg font-semibold mb-4">提交您的GPTs，让更多人使用吧！</h2>
        <input
          type="text"
          id="modal-input"
          className="border border-gray-300 rounded p-2 w-full mb-4"
          placeholder="请输入链接..."
          value={urlInput}
          onChange={(e) => setUrlInput(e.target.value)}
        />
        <button id="modal-submit" className="bg-green-500 hover:bg-green-600 text-white font-bold py-2 px-4 rounded w-full" onClick={handleSubmit}>
          提交
        </button>
        <button id="close-modal-btn" className="absolute top-2 right-2 text-gray-500 hover:text-gray-700" onClick={onClose}>
          <i className="fas fa-times"></i>
        </button>
      </div>
    </div>
  );
};
