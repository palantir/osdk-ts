import{j as o}from"./iframe-BVyCc2AC.js";import{E as u,B as r}from"./EmailViewer-Dgqv4Ah-.js";import{w as g}from"./withOsdkMetrics-B82QxFXL.js";import"./preload-helper--HBo1d6L.js";import"./index-BNzHGqwC.js";import"./useMediaContents-BYeefpHr.js";import"./spin-Bs6_7YSH.js";import"./svgIconContainer-C1dTG25d.js";import"./error-QOEmR757.js";const x=g(u,"EmailViewer"),b={subject:"Q3 Project Update - Action Items",from:{name:"Alice Johnson",address:"alice@example.com"},to:[{name:"Bob Smith",address:"bob@example.com"},{name:"Carol Davis",address:"carol@example.com"}],cc:[{name:"Dave Wilson",address:"dave@example.com"}],date:"2026-03-15T14:30:00Z",html:`
    <div style="font-family: Arial, sans-serif; padding: 16px;">
      <p>Hi team,</p>
      <p>Here's a quick update on our Q3 project milestones:</p>
      <ul>
        <li><strong>Phase 1</strong> — Completed on schedule</li>
        <li><strong>Phase 2</strong> — In progress, 80% done</li>
        <li><strong>Phase 3</strong> — Starting next week</li>
      </ul>
      <p>Please review the attached documents and respond by Friday.</p>
      <p>Best regards,<br/>Alice</p>
    </div>
  `,text:void 0},f={subject:"Meeting Notes",from:{name:"Bob Smith",address:"bob@example.com"},to:[{name:"Alice Johnson",address:"alice@example.com"}],cc:[],date:"2026-03-16T09:00:00Z",html:void 0,text:`Hi Alice,

Here are the meeting notes from today:

1. Discussed budget allocation
2. Reviewed timeline
3. Assigned action items

Thanks,
Bob`},w=`From: Alice Johnson <alice@example.com>
To: Bob Smith <bob@example.com>
Subject: Test Email
Date: Sat, 15 Mar 2026 14:30:00 +0000
MIME-Version: 1.0
Content-Type: text/html; charset=utf-8

<html><body><p>Hello Bob!</p><p>This is a <strong>test email</strong>.</p></body></html>
`;function M(e){return{fetchContents:()=>Promise.resolve(new Response(e)),fetchMetadata:()=>Promise.resolve({path:"email.eml",sizeBytes:e.length,mediaType:"message/rfc822"}),getMediaReference:()=>({mimeType:"message/rfc822",reference:{type:"mediaSetViewItem",mediaSetViewItem:{mediaItemRid:"ri.mio.main.media-item.mock-email",mediaSetRid:"ri.mio.main.media-set.mock-set",mediaSetViewRid:"ri.mio.main.media-set-view.mock-view"}}})}}const k={title:"Components/DocumentViewer/Renderers/EmailViewer",component:r,tags:["beta"],args:{content:b},render:e=>o.jsx("div",{style:{height:"500px"},children:o.jsx(r,{...e})}),parameters:{controls:{expanded:!0}},argTypes:{content:{description:"The parsed email to render",control:!1},className:{description:"Additional CSS class name for the root element",control:"text"}}},t={args:{media:M(w)},render:e=>o.jsx("div",{style:{height:"500px"},children:o.jsx(x,{...e})}),parameters:{docs:{source:{code:"<EmailViewer media={myOsdkMedia} />"}}}},a={parameters:{docs:{source:{code:"<BaseEmailViewer content={parsedEmail} />"}}}},s={args:{content:f},parameters:{docs:{source:{code:`// A ParsedEmail with no html part renders its text body as preformatted text
<BaseEmailViewer
  content={{
    subject: "Meeting Notes",
    from: { name: "Bob Smith", address: "bob@example.com" },
    to: [{ name: "Alice Johnson", address: "alice@example.com" }],
    cc: [],
    date: "2026-03-16T09:00:00Z",
    html: undefined,
    text: "Hi Alice,\\n\\nHere are the meeting notes from today.\\n\\nThanks,\\nBob",
  }}
/>`}}}};var n,i,m;t.parameters={...t.parameters,docs:{...(n=t.parameters)==null?void 0:n.docs,source:{originalSource:`{
  args: {
    media: createMockEmailMedia(SAMPLE_EML_CONTENT)
  },
  render: (args: EmailViewerProps) => <div style={{
    height: "500px"
  }}>
      <EmailViewer {...args} />
    </div>,
  parameters: {
    docs: {
      source: {
        code: \`<EmailViewer media={myOsdkMedia} />\`
      }
    }
  }
}`,...(m=(i=t.parameters)==null?void 0:i.docs)==null?void 0:m.source}}};var d,c,l;a.parameters={...a.parameters,docs:{...(d=a.parameters)==null?void 0:d.docs,source:{originalSource:`{
  parameters: {
    docs: {
      source: {
        code: \`<BaseEmailViewer content={parsedEmail} />\`
      }
    }
  }
}`,...(l=(c=a.parameters)==null?void 0:c.docs)==null?void 0:l.source}}};var p,h,E;s.parameters={...s.parameters,docs:{...(p=s.parameters)==null?void 0:p.docs,source:{originalSource:`{
  args: {
    content: SAMPLE_TEXT_EMAIL
  },
  parameters: {
    docs: {
      source: {
        code: \`// A ParsedEmail with no html part renders its text body as preformatted text
<BaseEmailViewer
  content={{
    subject: "Meeting Notes",
    from: { name: "Bob Smith", address: "bob@example.com" },
    to: [{ name: "Alice Johnson", address: "alice@example.com" }],
    cc: [],
    date: "2026-03-16T09:00:00Z",
    html: undefined,
    text: "Hi Alice,\\\\n\\\\nHere are the meeting notes from today.\\\\n\\\\nThanks,\\\\nBob",
  }}
/>\`
      }
    }
  }
}`,...(E=(h=s.parameters)==null?void 0:h.docs)==null?void 0:E.source}}};const H=["Default","HtmlEmail","PlainTextEmail"];export{t as Default,a as HtmlEmail,s as PlainTextEmail,H as __namedExportsOrder,k as default};
