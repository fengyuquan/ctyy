// pages/list-item/index.js
Page({
  /**
   * 页面的初始数据
   */
  data: {
    time: '17:00',
    date: '2022-06-25',
    showCalendar: true,
    items: [
      {
        img: 'https://img2.baidu.com/it/u=3051112845,3596907403&fm=253&fmt=auto&app=138&f=JPEG?w=749&h=500',
      },
      {
        img: 'https://img1.baidu.com/it/u=2713010882,1491761646&fm=253&fmt=auto&app=138&f=JPEG?w=650&h=500',
      },
      {
        img: 'https://img1.baidu.com/it/u=3811465454,3039909959&fm=253&fmt=auto&app=138&f=JPEG?w=667&h=500',
      },
    ],
  },
  // 放大预览图片
  preview(e) {
    const imgList = this.data.items.map(item=>item.img)
    const currentUrl = e.currentTarget.dataset.src
    wx.previewImage({
      current: currentUrl,
      urls: imgList,
    })
  },
  // 选择日期和时间
  TimeChange(e) {
    this.setData({
      time: e.detail.value
    })
  },
  DateChange(e) {
    this.setData({
      date: e.detail.value
    })
  },
  // 选择人数
  countChange(e) {
    this.count = e.detail.count
  },
  // 备注
  handleComment(e) {
    this.comment = e.detail.value
  },
  // 提交预定
  handleCommit() {

  },
  /**
   * 生命周期函数--监听页面加载
   */
  onLoad(options) {},

  /**
   * 生命周期函数--监听页面初次渲染完成
   */
  onReady() {},

  /**
   * 生命周期函数--监听页面显示
   */
  onShow() {},

  /**
   * 生命周期函数--监听页面隐藏
   */
  onHide() {},

  /**
   * 生命周期函数--监听页面卸载
   */
  onUnload() {},

  /**
   * 页面相关事件处理函数--监听用户下拉动作
   */
  onPullDownRefresh() {},

  /**
   * 页面上拉触底事件的处理函数
   */
  onReachBottom() {},

  /**
   * 用户点击右上角分享
   */
  onShareAppMessage() {},
})
