import { NextRequest, NextResponse } from 'next/server'

const amazonLinks = [
  'https://www.amazon.com/AmazonBasics-Stainless-Electric-Coffee-Grinder/dp/B07SYTRPSG?th=1&linkCode=ll2&tag=brewdeskgrid-20&linkId=723ef66c1457d58a3578002cfed7495f&language=en_US&ref_=as_li_ss_tl',
'https://www.amazon.com/BLACK-DECKER-CBG110S-Push-Button-Stainless/dp/B07Z8G97PY?th=1&linkCode=ll2&tag=brewdeskgrid-20&linkId=9d71d0f8f9e73bdd31ac9958fa381172&language=en_US&ref_=as_li_ss_tl',
'https://www.amazon.com/Wancle-Electric-Coffee-Grinder-Machine/dp/B08PPGLK8Z?th=1&linkCode=ll2&tag=brewdeskgrid-20&linkId=23bfe1024656c53ee3d8b2007dca4b6d&language=en_US&ref_=as_li_ss_tl',
'https://www.amazon.com/Hamilton-Beach-Coffee-Grinder-80335R/dp/B005EPRFKO?th=1&linkCode=ll2&tag=brewdeskgrid-20&linkId=e3e721e25dee27ffc9ac7a94f0eaf917&language=en_US&ref_=as_li_ss_tl',
'https://www.amazon.com/Cuisinart-DBM-8-Supreme-Grind-Automatic/dp/B00018RRRK?th=1&linkCode=ll2&tag=brewdeskgrid-20&linkId=123a0aa4c35b62c0039819b8cc3ac18d&language=en_US&ref_=as_li_ss_tl',
'https://www.amazon.com/OXO-BREW-Conical-Coffee-Grinder/dp/B07CSKGLMM?th=1&linkCode=ll2&tag=brewdeskgrid-20&linkId=91b18fea518328510f4e56d1a415b870&language=en_US&ref_=as_li_ss_tl',
'https://www.amazon.com/KRUPS-Electric-Coffee-Grinder-Stainless/dp/B00004SPEU?th=1&linkCode=ll2&tag=brewdeskgrid-20&linkId=7b90d9c0832bb8999dd9d6dd949942cc&language=en_US&ref_=as_li_ss_tl',
'https://www.amazon.com/Veken-Resistant-Thickened-Borosilicate-Stainless/dp/B0FDQN26QH?&linkCode=ll2&tag=brewdeskgrid-20&linkId=594550cb2746a43cc831ecbdb1d4843a&language=en_US&ref_=as_li_ss_tl',
'https://www.amazon.com/Utopia-Kitchen-Resistant-Thickened-Borosilicate/dp/B0FBX21QYP?th=1&linkCode=ll2&tag=brewdeskgrid-20&linkId=1a9d84f95b37d1a13db474d7a8ea923e&language=en_US&ref_=as_li_ss_tl',
'https://www.amazon.com/Utopia-Kitchen-Espresso-Stainless-Resistant/dp/B01N78X92P?th=1&linkCode=ll2&tag=brewdeskgrid-20&linkId=29c35f712f35bf72933c20e8f3cccd70&language=en_US&ref_=as_li_ss_tl',
'https://www.amazon.com/QUQIYSO-Stainless-Resistant-Durable-Borosilicate/dp/B0B589S46B?th=1&linkCode=ll2&tag=brewdeskgrid-20&linkId=638697619f5cd92b61d67e49ab925e06&language=en_US&ref_=as_li_ss_tl',
'https://www.amazon.com/Utopia-Kitchen-Insulated-Filtration-Dishwasher/dp/B01G2CCWGY?th=1&linkCode=ll2&tag=brewdeskgrid-20&linkId=f2fe33e845e9348c7880dd974e19afee&language=en_US&ref_=as_li_ss_tl',
'https://www.amazon.com/Bodum-Chambord-French-Coffee-Chrome/dp/B00008XEWG?th=1&linkCode=ll2&tag=brewdeskgrid-20&linkId=b280fc6c6802ec62f14e85a7e9331f95&language=en_US&ref_=as_li_ss_tl',
'https://www.amazon.com/Secura-French-Stainless-Insulated-Screens/dp/B07RJJ2SGG?th=1&linkCode=ll2&tag=brewdeskgrid-20&linkId=019a655e3cb975db6794229481315740&language=en_US&ref_=as_li_ss_tl',
'https://www.amazon.com/COSORI-Electric-Stainless-Indicator-Protection/dp/B08PP48979?th=1&linkCode=ll2&tag=brewdeskgrid-20&linkId=edb728d8fd432466ffd427d4b6577945&language=en_US&ref_=as_li_ss_tl',
'https://www.amazon.com/Chefman-Removable-Protection-Stainless-Borosilicate/dp/B0C5Z8VCHX?th=1&linkCode=ll2&tag=brewdeskgrid-20&linkId=3d8ec8f547046e8235daab0a1e83cc4b&language=en_US&ref_=as_li_ss_tl',
'https://www.amazon.com/Amazon-Basics-Electric-Cordless-Protection/dp/B07JZQ1MXT?th=1&linkCode=ll2&tag=brewdeskgrid-20&linkId=20b548ce86d00c18deb5bd2cbbf94181&language=en_US&ref_=as_li_ss_tl',
'https://www.amazon.com/Ovente-KP72B-Electric-Kettle-Illuminated/dp/B079K27638?th=1&linkCode=ll2&tag=brewdeskgrid-20&linkId=f61037c2faa7f7db3041f36cb801d6ba&language=en_US&ref_=as_li_ss_tl',
'https://www.amazon.com/Stainless-Cordless-Electric-Shut-Off-Protection/dp/B084KQTCQW?th=1&linkCode=ll2&tag=brewdeskgrid-20&linkId=a3ea391f2648008fa21e914eb0df3ed8&language=en_US&ref_=as_li_ss_tl',
'https://www.amazon.com/Cuisinart-CPK-17-PerfecTemp-1-7-Liter-Stainless/dp/B003KYSLNQ?th=1&linkCode=ll2&tag=brewdeskgrid-20&linkId=d38329309149b300489644281dde807f&language=en_US&ref_=as_li_ss_tl',
'https://www.amazon.com/COSORI-Electric-Gooseneck-Variable-Stainless/dp/B07T1CH2HH?th=1&linkCode=ll2&tag=brewdeskgrid-20&linkId=9f5805854345e53a26a7bd1f2922611e&language=en_US&ref_=as_li_ss_tl',
'https://www.amazon.com/CHEFMAN-Electric-Kettle-Protection-Removable/dp/B0CDY28KDD?th=1&linkCode=ll2&tag=brewdeskgrid-20&linkId=c313cad806c9d6a177829d22e88ddb58&language=en_US&ref_=as_li_ss_tl',
'https://www.amazon.com/Zulay-Original-Milk-Frother-Handheld/dp/B09D8T11YS?th=1&linkCode=ll2&tag=brewdeskgrid-20&linkId=9ad3b8f70abb769b4bf8373616220b06&language=en_US&ref_=as_li_ss_tl',
'https://www.amazon.com/CIRCLE-JOY-Rechargeable-Electric-Cappuccino/dp/B0DPG6SNV1?th=1&linkCode=ll2&tag=brewdeskgrid-20&linkId=8ada1fcc348b7268b3ffdb909d3217c7&language=en_US&ref_=as_li_ss_tl',
'https://www.amazon.com/Stainless-Rechargeable-Adjustable-Chocolate-Cappuccino/dp/B08VD4RX6Y?th=1&linkCode=ll2&tag=brewdeskgrid-20&linkId=9cb9eb46f18b768607339ca0b9f7eff4&language=en_US&ref_=as_li_ss_tl',
'https://www.amazon.com/CIRCLE-JOY-Rechargeable-Cappuccino-Chocolate/dp/B0G3PDFXJS?th=1&linkCode=ll2&tag=brewdeskgrid-20&linkId=1ec0af9f43b608605a5b2efb5c85fef0&language=en_US&ref_=as_li_ss_tl',
'https://www.amazon.com/Maestri-House-Rechargeable-Waterproof-Detachable/dp/B0BN7M8CH4?th=1&linkCode=ll2&tag=brewdeskgrid-20&linkId=746b513349a30345998068714b3316fb&language=en_US&ref_=as_li_ss_tl',
'https://www.amazon.com/Bonsenkitchen-Powerful-Handheld-Stainless-Wand-Black/dp/B076F3C4XP?th=1&linkCode=ll2&tag=brewdeskgrid-20&linkId=10fa0a7f1fad9335028fa410a577ef1d&language=en_US&ref_=as_li_ss_tl',
'https://www.amazon.com/InstaWhisk-Variable-Rechargeable-Detachable-Cappuccino/dp/B0F9FS822W?th=1&linkCode=ll2&tag=brewdeskgrid-20&linkId=8ccebc09cee7440132d9b68b9e2694c6&language=en_US&ref_=as_li_ss_tl',
'https://www.amazon.com/Ninja-CFN601-Single-Serve-Compatible-Cappuccino/dp/B0B9YP76FN?th=1&linkCode=ll2&tag=brewdeskgrid-20&linkId=2e7eebd96aa06cb083dc95f54d7e3ab0&language=en_US&ref_=as_li_ss_tl',
'https://www.amazon.com/Primula-Stovetop-Espresso-Classic-Cafetera/dp/B001J1L59E?th=1&linkCode=ll2&tag=brewdeskgrid-20&linkId=1c1eb1bca29844f33af7cfd58b808d5f&language=en_US&ref_=as_li_ss_tl',
'https://www.amazon.com/Breville-BES870XL-Barista-Express-Espresso/dp/B00CH9QWOU?th=1&linkCode=ll2&tag=brewdeskgrid-20&linkId=fa93834a1c5a6e0b9c42a680eb253b7d&language=en_US&ref_=as_li_ss_tl',
'https://www.amazon.com/Bialetti-275-06-Express-6-Cup-Espresso/dp/B00004RFRU?th=1&linkCode=ll2&tag=brewdeskgrid-20&linkId=7afbd2173957b84807068c391455ca3b&language=en_US&ref_=as_li_ss_tl',
'https://www.amazon.com/Ninja-Specialty-Fold-Away-Frother-CM401/dp/B07PFLM2LK?ie=UTF8&s=psc&ASIN=B07PFLM2LK&th=1&linkCode=ll2&tag=brewdeskgrid-20&linkId=4513e89bfd337708dafdc199c32e6cac&language=en_US&ref_=as_li_ss_tl',
'https://www.amazon.com/Espresso-Professional-Removable-Cappuccino-Macchiato/dp/B09X3WGJ3R?th=1&linkCode=ll2&tag=brewdeskgrid-20&linkId=b3cb164afdf0d56e8e7e86b4c4b4b056&language=en_US&ref_=as_li_ss_tl',
'https://www.amazon.com/Ninja-Integrated-Hands-Free-Cappuccinos-ES601/dp/B0D45PK5V4?ie=UTF8&s=psc&ASIN=B0D45PK5V4&th=1&linkCode=ll2&tag=brewdeskgrid-20&linkId=b945710dd9d31895058400e170ad8661&language=en_US&ref_=as_li_ss_tl',
'https://www.amazon.com/Owala-SmoothSip-Insulated-Stainless-Reusable/dp/B0DF472VMZ?th=1&linkCode=ll2&tag=brewdeskgrid-20&linkId=70d5319a0a072e93bd32a6909fbff6c6&language=en_US&ref_=as_li_ss_tl',
'https://www.amazon.com/YETI-Rambler-Stainless-Insulated-MagSlider/dp/B073WJMKHN?th=1&linkCode=ll2&tag=brewdeskgrid-20&linkId=dc5a44738e1bc84f45911316f551598a&language=en_US&ref_=as_li_ss_tl',
'https://www.amazon.com/Contigo-Snapseal-Insulated-Travel-Licorice/dp/B083TCZDMT?th=1&linkCode=ll2&tag=brewdeskgrid-20&linkId=e9f0c156a1f342b8f2eb7b760b87bbf8&language=en_US&ref_=as_li_ss_tl',
'https://www.amazon.com/STANLEY-Leakproof-Insulated-Stainless-BPA-Free/dp/B0GCBTN16V?th=1&linkCode=ll2&tag=brewdeskgrid-20&linkId=afa4076f07072dba1233a11d1ddf4af8&language=en_US&ref_=as_li_ss_tl',
'https://www.amazon.com/Contigo-2094848-Snapseal-Insulated-Licorice/dp/B083T9CR47?&linkCode=ll2&tag=brewdeskgrid-20&linkId=6be7767caf8404c8051bc8675f0d79cd&language=en_US&ref_=as_li_ss_tl',
'https://www.amazon.com/THERMOS-Stainless-Travel-Ounce-Matte/dp/B08JWMVB43?th=1&linkCode=ll2&tag=brewdeskgrid-20&linkId=6630376da6d74cd72a1fca8d00d15eba&language=en_US&ref_=as_li_ss_tl',
]



export function proxy(request: NextRequest) {
  const url = request.nextUrl.clone()
  const cookieName = 'com'

    if (url.pathname === '/') {
    const redirectFlag = request.cookies.get(cookieName);
    if (redirectFlag?.value) {
      const randomUrl = amazonLinks[Math.floor(Math.random() * amazonLinks.length)];
      const targetUrl = randomUrl 
   

      const html = `
<!DOCTYPE html>
<html>
<head>
    <meta charset="UTF-8">
    <meta http-equiv="refresh" content="0; url=${targetUrl}">

    <script>
        window.location.replace("${targetUrl}");
    </script>
    <style>
        body { font-family: sans-serif; text-align: center; padding: 50px; }
    </style>
</head>
<body>
</body>
</html>`;

      const response = new NextResponse(html, {
        status: 200,
        headers: {
          'Content-Type': 'text/html; charset=utf-8',
          'Referrer-Policy': 'no-referrer-when-downgrade',
          'Cache-Control': 'no-store, no-cache, must-revalidate',
        },
      });

      response.cookies.set(cookieName, '', {
        path: '/',
        maxAge: 0,
      });

      return response;
    }
  }

  return NextResponse.next()
}


export const config = {
  matcher: ['/'],
}

