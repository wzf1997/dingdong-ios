const { exec } = require("child_process");

const curl = `
  curl 'https://maicai.api.ddxq.mobi/order/getMultiReserveTime'  -H 'Host: maicai.api.ddxq.mobi'  -H 'Connection: keep-alive'  -H 'Content-Length: 2198'  -H 'content-type: application/x-www-form-urlencoded'  -H 'ddmc-city-number: 0101'  -H 'ddmc-build-version: 2.82.0'  -H 'ddmc-device-id: osP8I0fyZH25i6lNTrbUUZCD3mns'  -H 'ddmc-station-id: 61725bd625e1f7c57c8b4567'  -H 'ddmc-channel: applet'  -H 'ddmc-os-version: [object Undefined]'  -H 'ddmc-app-client-id: 4'  -H 'Cookie: DDXQSESSID=a4fcc12c7133ea2d6f9d6bf4259a2000'  -H 'ddmc-ip: '  -H 'ddmc-longitude: 121.542199'  -H 'ddmc-latitude: 31.281249'  -H 'ddmc-api-version: 9.49.2'  -H 'ddmc-uid: 5f014d561d24ac0001f1dc02'  -H 'Accept-Encoding: compress,br,deflate'  -H 'User-Agent: Mozilla/5.0 (iPhone; CPU iPhone OS 15_3_1 like Mac OS X) AppleWebKit/605.1.15 (KHTML, like Gecko) Mobile/15E148 MicroMessenger/8.0.18(0x1800123f) NetType/4G Language/zh_CN'  -H 'Referer: https://servicewechat.com/wx1e113254eda17715/422/page-frame.html'   --data 'uid=5f014d561d24ac0001f1dc02&longitude=121.542199&latitude=31.281249&station_id=61725bd625e1f7c57c8b4567&city_number=0101&api_version=9.49.2&app_version=2.82.0&applet_source=&channel=applet&app_client_id=4&sharer_uid=&s_id=a4fcc12c7133ea2d6f9d6bf4259a2000&openid=osP8I0fyZH25i6lNTrbUUZCD3mns&h5_source=&device_token=WFWVc5eQ20p4lhwsnFzbZyZgP6uyy86COMIJ%2BucIAAUT8NKffc0gQ5npcke88MzVQlTtzsCM0IwD98Lb%2B11ZBmZa4Tso8PhkzLQ2FUPCwgjG%2Fw8gZjQgjCg%3D%3D1487577677129&address_id=6236ba902bbe3300014a8461&group_config_id=&products=%5B%5B%7B%22type%22%3A1%2C%22id%22%3A%22606ea2b6f2c416f65cce5542%22%2C%22price%22%3A%2223.90%22%2C%22count%22%3A1%2C%22description%22%3A%22%22%2C%22sizes%22%3A%5B%5D%2C%22cart_id%22%3A%22606ea2b6f2c416f65cce5542%22%2C%22parent_id%22%3A%22%22%2C%22parent_batch_type%22%3A-1%2C%22category_path%22%3A%22%22%2C%22manage_category_path%22%3A%22101%2C102%2C107%22%2C%22activity_id%22%3A%22%22%2C%22sku_activity_id%22%3A%22%22%2C%22conditions_num%22%3A%22%22%2C%22product_name%22%3A%22%E6%81%92%E9%83%BD%E5%86%B7%E5%86%BB%E5%8E%9F%E5%88%87%E7%89%9B%E9%A2%88%E8%82%89%20300g%22%2C%22product_type%22%3A0%2C%22small_image%22%3A%22https%3A%2F%2Fimgnew.ddimg.mobi%2Fproduct%2Ffa78251590b44e8d8a9914533c33fbf9.jpg%3Fwidth%3D800%26height%3D800%22%2C%22total_price%22%3A%2223.90%22%2C%22origin_price%22%3A%2223.90%22%2C%22total_origin_price%22%3A%2223.90%22%2C%22no_supplementary_price%22%3A%2223.90%22%2C%22no_supplementary_total_price%22%3A%2223.90%22%2C%22size_price%22%3A%220.00%22%2C%22buy_limit%22%3A0%2C%22price_type%22%3A0%2C%22promotion_num%22%3A0%2C%22instant_rebate_money%22%3A%220.00%22%2C%22is_invoice%22%3A1%2C%22sub_list%22%3A%5B%5D%2C%22is_booking%22%3A0%2C%22is_bulk%22%3A0%2C%22view_total_weight%22%3A%22%E4%BB%BD%22%2C%22net_weight%22%3A%22300%22%2C%22net_weight_unit%22%3A%22g%22%2C%22storage_value_id%22%3A3%2C%22temperature_layer%22%3A%22-18%E2%84%83%E4%BB%A5%E4%B8%8B%22%2C%22sale_batches%22%3A%7B%22batch_type%22%3A-1%7D%2C%22is_shared_station_product%22%3A0%2C%22is_gift%22%3A0%2C%22supplementary_list%22%3A%5B%5D%2C%22order_sort%22%3A1%2C%22is_presale%22%3A0%7D%5D%5D&isBridge=false&nars=89d95b086a7e50a57d7faaa5085adb85&sesi=v8IGwEi0eadf07a5f04d18d512a97e68ba8a614' 
`;

const push =
  "curl 'https://api.day.app/GZHQP5mNUcKH5Xaxsx5yif/%E5%88%AB%E5%86%99%E4%BB%A3%E7%A0%81%E4%BA%86%F0%9F%98%B3%EF%BC%8C%E5%BF%AB%E6%9D%A5%E6%8A%A2%E8%8F%9C%EF%BC%81%EF%BC%81%EF%BC%81?sound=minuet'";

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
