# 文本工具箱（text-toolbox-cli）

本地文本处理：字数统计/Base64与URL编解码/JSON格式化/哈希/大小写转换。纯本地不联网，不采集任何数据。

本工具仅做本地数据/文本处理，不采集任何个人信息。

## 命令
| 命令 | 用途 |
|---|---|
| `text-toolbox status` | 自检（返回含 ok） |
| `text-toolbox auth` | 校验可用（本地工具无需密钥） |
| `text-toolbox unAuth` | 清除本地状态 |
| `text-toolbox count <文本>` | 字数/词数/行数统计 |
| `text-toolbox base64 <文本>` | Base64 编码 |
| `text-toolbox base64d <文本>` | Base64 解码 |
| `text-toolbox url <文本>` | URL 编码 |
| `text-toolbox urld <文本>` | URL 解码 |
| `text-toolbox json <文本>` | JSON 格式化 |
| `text-toolbox hash <md5|sha1|sha256> <文本>` | 哈希计算 |
| `text-toolbox case <文本>` | 大小写转换 |

所有命令输出 JSON：`{"code":0|1,"ok":true|false,"data":...,"error":"人类可读错误"}`。

## AI 使用指引
用户要统计/编码/格式化文本 → 选对应命令；先 status 自检。
