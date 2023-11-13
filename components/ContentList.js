
import { useState, useEffect } from 'react';

export default function ContentList() {
  const [plugins, setPlugins] = useState([]);

  useEffect(() => {
    // 从API加载插件数据
    // 注意：API路由将在 pages/api 目录下创建
    fetch('/api/plugins')
      .then(response => response.json())
      .then(setPlugins)
      .catch(error => console.error('Error loading plugins:', error));
  }, []);

  return (
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
      <div className="flex justify-between items-center mb-4">
        <h2 className="text-2xl font-semibold">探索GPTs</h2>
        <button id="all-plugins-button" className="bg-gray-200 hover:bg-gray-300 text-gray-700 font-bold py-2 px-4 rounded-full">ALL</button>
      </div>
      <div id="plugin-list" className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
        {/* 插件列表项将在这里动态生成 */}
        {plugins.map((plugin) => (
          <div key={plugin.id} className="bg-white rounded-lg overflow-hidden shadow-lg mb-6 hover:shadow-xl transition-shadow duration-300">
            {/* 插件信息… */}
          </div>
        ))}
      </div>
    </div>
  );
};
