var shangskr = {
    applyFlink: function() {
        var input = document.getElementsByClassName('el-textarea__inner')[0];
        let evt = document.createEvent('HTMLEvents');
        evt.initEvent('input', true, true);
        input.value = '昵称（请勿包含博客等字样）：\n网站地址（要求博客地址，请勿提交个人主页）：\n头像图片url（请提供尽可能清晰的图片，我会上传到我自己的图床）：\n描述：\n';
        input.dispatchEvent(evt);
        var targetElement = document.getElementById("post-comment");
        if (targetElement) {
            targetElement.scrollIntoView({ behavior: "smooth", block: "start" });
        }
        input.focus();
        input.setSelectionRange(-1, -1);
    },
};

/* post chat */
var postChatConfig = {
  backgroundColor: "#3e86f6",
  bottom: "16px",
  left: "16px",
  fill: "#FFFFFF",
  width: "44px",
  frameWidth: "375px",
  frameHeight: "600px",
  defaultInput: true,
  upLoadWeb: true,
  showInviteLink: true
};

/* 文章统计图js */
function switchPostChart () {
  // 这里为了统一颜色选取的是“明暗模式”下的两种字体颜色，也可以自己定义
  let color = document.documentElement.getAttribute('data-theme') === 'light' ? '#4C4948' : 'rgba(255,255,255,0.7)'
  if (document.getElementById('posts-chart') && postsOption) {
    try {
      let postsOptionNew = postsOption
      postsOptionNew.title.textStyle.color = color
      postsOptionNew.xAxis.nameTextStyle.color = color
      postsOptionNew.yAxis.nameTextStyle.color = color
      postsOptionNew.xAxis.axisLabel.color = color
      postsOptionNew.yAxis.axisLabel.color = color
      postsOptionNew.xAxis.axisLine.lineStyle.color = color
      postsOptionNew.yAxis.axisLine.lineStyle.color = color
      postsOptionNew.series[0].markLine.data[0].label.color = color
      postsChart.setOption(postsOptionNew)
    } catch (error) {
      console.log(error)
    }
  }
  if (document.getElementById('tags-chart') && tagsOption) {
    try {
      let tagsOptionNew = tagsOption
      tagsOptionNew.title.textStyle.color = color
      tagsOptionNew.xAxis.nameTextStyle.color = color
      tagsOptionNew.yAxis.nameTextStyle.color = color
      tagsOptionNew.xAxis.axisLabel.color = color
      tagsOptionNew.yAxis.axisLabel.color = color
      tagsOptionNew.xAxis.axisLine.lineStyle.color = color
      tagsOptionNew.yAxis.axisLine.lineStyle.color = color
      tagsOptionNew.series[0].markLine.data[0].label.color = color
      tagsChart.setOption(tagsOptionNew)
    } catch (error) {
      console.log(error)
    }
  }
  if (document.getElementById('categories-chart') && categoriesOption) {
    try {
      let categoriesOptionNew = categoriesOption
      categoriesOptionNew.title.textStyle.color = color
      categoriesOptionNew.legend.textStyle.color = color
      if (!categoryParentFlag) { categoriesOptionNew.series[0].label.color = color }
      categoriesChart.setOption(categoriesOptionNew)
    } catch (error) {
      console.log(error)
    }
  }
}
document.getElementById("mode-button").addEventListener("click", function () { setTimeout(switchPostChart, 100) })