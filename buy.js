const { exec } = require("child_process");

const curl = `
替换1
`;

const push = "curl  替换2";

// 运力查询
function fullFlag() {
  exec(curl, function (err, stdout, stderr) {
    const final = JSON.parse(stdout).data[0].time[0].times;
    const canBuy = final.some(
      (item) => !item.fullFlag && item.textMsg !== "已约满"
    );
    if (canBuy) {
      console.error(final, "查看结果");
      // 发送push 通知
      exec(push);
    }
  });
}

setInterval(() => {
  fullFlag();
}, 1000 * 3);
