import $ from 'jquery';

export function submitForm(
  email,
  pageName,
  first = null,
  last = null,
  company = null,
  followBlog = false,
) {
  if (!validEmail(email)) {
    // alert('Please enter a valid work email');
    alert('Please enter a valid email');
    return;
  }

  const fields = [
    {
      name: 'email',
      value: email,
    },
  ];
  if (first && last && company) {
    fields.push(
      {
        name: 'firstname',
        value: first,
      },
      {
        name: 'lastname',
        value: last,
      },
      {
        name: 'company',
        value: company,
      },
    );
  }

  const data = {
    submittedAt: Date.now(),
    fields,
    context: {
      hutk: null,
      pageUri: 'rockset.com',
      ipAddress: null,
      pageName,
      sfdcCampaignId: '701f40000012ZlrAAE',
    },
    skipValidation: false,
  };

  const formId = followBlog
    ? 'f56cdcb5-965a-4e6e-b4ea-54e8e118231c'
    : 'f36fdc6d-c19a-49ec-855e-b9b5fe113bc2';
  const redirect = followBlog
    ? 'https://rockset.com/followed'
    : `https://console.rockset.com/create?email=${email}`;
  $.ajax({
    type: 'POST',
    url: `https://api.hsforms.com/submissions/v3/integration/submit/5321663/${formId}`,
    contentType: 'application/json',
    data: JSON.stringify(data),
    processData: false,
    success: () => {
      try {
        if (!followBlog) {
          window.analytics.track('website-email');
          window.qp('track', 'Purchase');
          window.gtag('event', 'website-email');
        }
      } finally {
        window.setTimeout(() => {
          window.location.href = redirect;
        }, 500);
      }
    },
  });
}

function validEmail(email, workAllowed = true) {
  // the 'almost perfect' email regex: https://emailregex.com/
  let reg;
  if (!workAllowed) {
    reg = /^((([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@(?!gmail.com)(?!yahoo.com)(?!hotmail.com)(?!yahoo.co.in)(?!aol.com)(?!abc.com)(?!xyz.com)(?!pqr.com)(?!rediffmail.com)(?!live.com)(?!outlook.com)(?!me.com)(?!msn.com)(?!ymail.com)([\w-]+\.)+[\w-]{2,4})?$/;
  } else {
    reg = /^((([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@([\w-]+\.)+[\w-]{2,10})?$/;
  }
  return email && reg.test(email);
}
