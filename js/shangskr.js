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