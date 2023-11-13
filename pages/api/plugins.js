
// 伪造的插件列表数据，实际项目中应从数据库获取数据
const fakePluginsData = [
  {
    id: 1,
    title: '插件1',
    image_url: '/static/image/plugin-1.jpg',
    link_text: '查看详情',
    introduction: '这是第一个插件的简介...',
    url: 'https://example.com/plugin1'
  },
  // 更多插件数据...
];

export default function getPlugins(req, res) {
  if (req.method === 'GET') {
    res.status(200).json(fakePluginsData);
  } else {
    res.setHeader('Allow', ['GET']);
    res.status(405).end(`Method ${req.method} Not Allowed`);
  }
};
