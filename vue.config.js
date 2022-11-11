module.exports = {
  devServer: {
    https: true,
	proxy: 'https://localhost:8081',
	public: 'https://10.106.21.23:8081'  // 本地ip
  }
};
