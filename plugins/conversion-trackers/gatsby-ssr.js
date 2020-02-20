const React = require('react');

exports.onRenderBody = ({ setHeadComponents }, pluginOptions) => {
  if (process.env.NODE_ENV === 'production') {
    return setHeadComponents([
      // Cookiebot
      <script
        id="Cookiebot"
        src="https://consent.cookiebot.com/uc.js"
        data-cbid="3a7b9e05-da2e-4848-a1af-0e39e0e08cb3"
        type="text/javascript"
        data-blockingmode="auto"
      />,
      <script async src="https://www.googletagmanager.com/gtag/js?id=UA-127778659-1" />,
      <script async src="//cdn.embedly.com/widgets/platform.js" charset="UTF-8" />,

      // google tag manager
      <script
        dangerouslySetInnerHTML={{
          __html: `
            window.dataLayer = window.dataLayer || [];
            function gtag(){dataLayer.push(arguments);}
            gtag('js', new Date());
          
            gtag('config', 'UA-127778659-1');
          `,
        }}
      />,

      // facebook
      <script
        dangerouslySetInnerHTML={{
          __html: `
            !function(f,b,e,v,n,t,s)
            {if(f.fbq)return;n=f.fbq=function(){n.callMethod?
            n.callMethod.apply(n,arguments):n.queue.push(arguments)};
            if(!f._fbq)f._fbq=n;n.push=n;n.loaded=!0;n.version='2.0';
            n.queue=[];t=b.createElement(e);t.async=!0;
            t.src=v;s=b.getElementsByTagName(e)[0];
            s.parentNode.insertBefore(t,s)}(window,document,'script',
            'https://connect.facebook.net/en_US/fbevents.js');
            fbq('init', '806249779796633');
            fbq('track', 'PageView');
          `,
        }}
      />,
      <noscript>
        <img
          height="1"
          width="1"
          style={{ display: 'none' }}
          src="https://www.facebook.com/tr?id=806249779796633&ev=PageView&noscript=1"
        />
      </noscript>,

      // linkedin
      <script
        dangerouslySetInnerHTML={{
          __html: `
            _linkedin_partner_id = "518332"; 
            window._linkedin_data_partner_ids = window._linkedin_data_partner_ids || []; 
            window._linkedin_data_partner_ids.push(_linkedin_partner_id); 
          `,
        }}
      />,
      <script
        dangerouslySetInnerHTML={{
          __html: `
            (function(){var s = document.getElementsByTagName("script")[0]; 
            var b = document.createElement("script"); 
            b.type = "text/javascript"; b.async = true; 
            b.src = "https://snap.licdn.com/li.lms-analytics/insight.min.js"; 
            s.parentNode.insertBefore(b, s);})(); 
          `,
        }}
      />,
      <noscript>
        <img
          height="1"
          width="1"
          style={{ display: 'none' }}
          alt=""
          src="https://dc.ads.linkedin.com/collect/?pid=518332&fmt=gif"
        />
      </noscript>,

      // twitter
      <script
        dangerouslySetInnerHTML={{
          __html: `
            !function(e,t,n,s,u,a){e.twq||(s=e.twq=function(){s.exe?s.exe.apply(s,arguments):s.queue.push(arguments);
            },s.version='1.1',s.queue=[],u=t.createElement(n),u.async=!0,u.src='//static.ads-twitter.com/uwt.js',
            a=t.getElementsByTagName(n)[0],a.parentNode.insertBefore(u,a))}(window,document,'script');
            // Insert Twitter Pixel ID and Standard Event data below
            twq('init','o0jbj');
            twq('track','PageView');
          `,
        }}
      />,

      // quora
      <script
        dangerouslySetInnerHTML={{
          __html: `
          !function(q,e,v,n,t,s){if(q.qp) return; n=q.qp=function(){n.qp?n.qp.apply(n,arguments):n.queue.push(arguments);}; n.queue=[];t=document.createElement(e);t.async=!0;t.src=v; s=document.getElementsByTagName(e)[0]; s.parentNode.insertBefore(t,s);}(window, 'script', 'https://a.quora.com/qevents.js');
          qp('init', '5e1b2302827046b39b889b5468099b07');
          qp('track', 'ViewContent');
          qp('track', 'Generic');
          `,
        }}
      />,
      <noscript>
        <img
          height="1"
          width="1"
          style={{ display: 'none' }}
          src="https://q.quora.com/_/ad/5e1b2302827046b39b889b5468099b07/pixel?tag=ViewContent&noscript=1"
        />
      </noscript>,

      // reddit
      <script
        dangerouslySetInnerHTML={{
          __html: `
            !function(w,d){if(!w.rdt){var p=w.rdt=function(){p.sendEvent?p.sendEvent.apply(p,arguments):p.callQueue.push(arguments)};p.callQueue=[];var t=d.createElement("script");t.src="https://www.redditstatic.com/ads/pixel.js",t.async=!0;var s=d.getElementsByTagName("script")[0];s.parentNode.insertBefore(t,s)}}(window,document);rdt('init','t2_5b45jn1d');
            rdt('track', 'PageVisit');
          `,
        }}
      />,
    ]);
  }
};
