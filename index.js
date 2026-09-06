#!/usr/bin/env node
const crypto = require('crypto');
function out(ok, data, error) { process.stdout.write(JSON.stringify(ok ? { code: 0, ok: true, data } : { code: 1, ok: false, error }) + '\n'); }
const args = process.argv.slice(2); const cmd = args[0] || '';
try {
  if (cmd === 'status' || cmd === 'auth') return out(true, { ok: 'text-toolbox ready' });
  const s = args.slice(1).join(' ').trim();
  if (cmd === 'count') { if (!s) return out(false, null, '缺少文本：text-toolbox count <文本>'); return out(true, { chars: s.length, words: (s.match(/\S+/g) || []).length, lines: s.split('\n').length }); }
  if (cmd === 'base64') { if (!s) return out(false, null, '缺少输入'); return out(true, { encoded: Buffer.from(s).toString('base64') }); }
  if (cmd === 'base64d') { try { return out(true, { decoded: Buffer.from(s, 'base64').toString('utf-8') }); } catch (e) { return out(false, null, 'base64 解码失败'); } }
  if (cmd === 'url') { if (!s) return out(false, null, '缺少输入'); return out(true, { encoded: encodeURIComponent(s) }); }
  if (cmd === 'urld') { try { return out(true, { decoded: decodeURIComponent(s) }); } catch (e) { return out(false, null, 'URL 解码失败'); } }
  if (cmd === 'json') { try { const j = JSON.parse(s); return out(true, { formatted: JSON.stringify(j, null, 2) }); } catch (e) { return out(false, null, 'JSON 解析失败'); } }
  if (cmd === 'hash') { const al = (args[1] || 'md5').toLowerCase(); const txt = args.slice(2).join(' '); if (!['md5', 'sha1', 'sha256'].includes(al)) return out(false, null, '算法仅支持 md5/sha1/sha256'); return out(true, { algo: al, hash: crypto.createHash(al).update(txt).digest('hex') }); }
  if (cmd === 'case') { if (!s) return out(false, null, '缺少文本'); return out(true, { upper: s.toUpperCase(), lower: s.toLowerCase(), title: s.replace(/\S+/g, w => w[0].toUpperCase() + w.slice(1).toLowerCase()) }); }
  return out(false, null, '未知命令。支持: status/auth/count/base64/base64d/url/urld/json/hash/case');
} catch (e) { out(false, null, '执行错误: ' + e.message); }
