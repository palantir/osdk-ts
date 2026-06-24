import{j as t}from"./iframe-UjnPmym4.js";import{E as h,B as s}from"./EmailViewer-DKyayVUj.js";import{w as u}from"./withOsdkMetrics-CGkt44o9.js";import"./preload-helper-CLHd68ts.js";import"./index-oS1D2jKp.js";import"./useMediaContents-DHWkOfMY.js";import"./spin-eGc4hqQZ.js";import"./svgIconContainer-B7LpGeRx.js";import"./error-Cs-1jvn8.js";import"./useRegisterUserAgent-Plw6EKRx.js";const x=u(h,"EmailViewer"),w={subject:"Q3 Project Update - Action Items",from:{name:"Alice Johnson",address:"alice@example.com"},to:[{name:"Bob Smith",address:"bob@example.com"},{name:"Carol Davis",address:"carol@example.com"}],cc:[{name:"Dave Wilson",address:"dave@example.com"}],date:"2026-03-15T14:30:00Z",html:`
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
Bob`},M=`From: Alice Johnson <alice@example.com>
To: Bob Smith <bob@example.com>
Subject: Test Email
Date: Sat, 15 Mar 2026 14:30:00 +0000
MIME-Version: 1.0
Content-Type: text/html; charset=utf-8

<html><body><p>Hello Bob!</p><p>This is a <strong>test email</strong>.</p></body></html>
`;function v(e){return{fetchContents:()=>Promise.resolve(new Response(e)),fetchMetadata:()=>Promise.resolve({path:"email.eml",sizeBytes:e.length,mediaType:"message/rfc822"}),getMediaReference:()=>({mimeType:"message/rfc822",reference:{type:"mediaSetViewItem",mediaSetViewItem:{mediaItemRid:"ri.mio.main.media-item.mock-email",mediaSetRid:"ri.mio.main.media-set.mock-set",mediaSetViewRid:"ri.mio.main.media-set-view.mock-view"}}})}}const _={title:"Components/DocumentViewer/Renderers/EmailViewer",component:s,tags:["beta"],args:{email:w},render:e=>t.jsx("div",{style:{height:"500px"},children:t.jsx(s,{...e})}),parameters:{controls:{expanded:!0}},argTypes:{email:{description:"Parsed email data",control:!1},className:{description:"Additional CSS class name for the root element",control:"text"}}},a={args:{media:v(M)},render:e=>t.jsx("div",{style:{height:"500px"},children:t.jsx(x,{...e})}),parameters:{docs:{source:{code:`import { EmailViewer } from "@osdk/react-components/experimental/email-viewer";

<EmailViewer media={myOsdkMedia} />`}}}},i={parameters:{docs:{source:{code:`import { BaseEmailViewer } from "@osdk/react-components/experimental/email-viewer";

<BaseEmailViewer email={parsedEmail} />`}}}},r={args:{email:f}};var o,m,n;a.parameters={...a.parameters,docs:{...(o=a.parameters)==null?void 0:o.docs,source:{originalSource:`{
  args: {
    media: createMockEmailMedia(SAMPLE_EML_CONTENT)
  },
  render: (args: EmailViewerMediaProps) => <div style={{
    height: "500px"
  }}>
      <EmailViewer {...args} />
    </div>,
  parameters: {
    docs: {
      source: {
        code: \`import { EmailViewer } from "@osdk/react-components/experimental/email-viewer";

<EmailViewer media={myOsdkMedia} />\`
      }
    }
  }
}`,...(n=(m=a.parameters)==null?void 0:m.docs)==null?void 0:n.source}}};var l,d,c;i.parameters={...i.parameters,docs:{...(l=i.parameters)==null?void 0:l.docs,source:{originalSource:`{
  parameters: {
    docs: {
      source: {
        code: \`import { BaseEmailViewer } from "@osdk/react-components/experimental/email-viewer";

<BaseEmailViewer email={parsedEmail} />\`
      }
    }
  }
}`,...(c=(d=i.parameters)==null?void 0:d.docs)==null?void 0:c.source}}};var p,E,g;r.parameters={...r.parameters,docs:{...(p=r.parameters)==null?void 0:p.docs,source:{originalSource:`{
  args: {
    email: SAMPLE_TEXT_EMAIL
  }
}`,...(g=(E=r.parameters)==null?void 0:E.docs)==null?void 0:g.source}}};const L=["Default","HtmlEmail","PlainTextEmail"];export{a as Default,i as HtmlEmail,r as PlainTextEmail,L as __namedExportsOrder,_ as default};
