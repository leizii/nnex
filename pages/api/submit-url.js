
export default function submitUrl(req, res) {
  if (req.method === 'POST') {
    // 这是一个简化的示例，实际项目中需要包含数据验证和数据库操作等逻辑
    const { url } = req.body;

    // 伪造的返回值，实际中应返回数据库中的新插件ID
    const newPluginId = Date.now();

    res.status(200).json({ id: newPluginId });
  } else {
    res.setHeader('Allow', ['POST']);
    res.status(405).end(`Method ${req.method} Not Allowed`);
  }
};
