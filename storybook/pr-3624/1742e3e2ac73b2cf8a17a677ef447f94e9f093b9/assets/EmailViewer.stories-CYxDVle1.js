import{j as t}from"./iframe-BeCKStTi.js";import{E as h,B as s}from"./EmailViewer-CIdXsX1s.js";import{w as u}from"./withOsdkMetrics-DoKVZacI.js";import"./preload-helper-BICrzKRt.js";import"./index-BfYzXW_3.js";import"./useMediaContents-kF_r5JHt.js";import"./spin-Dc6yxLwi.js";import"./svgIconContainer-D-9_AOAs.js";import"./error-DvUULirA.js";const x=u(h,"EmailViewer"),w={cc:[{address:"dave@example.com",name:"Dave Wilson"}],date:"2026-03-15T14:30:00Z",from:{address:"alice@example.com",name:"Alice Johnson"},html:`
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
  `,subject:"Q3 Project Update - Action Items",text:void 0,to:[{address:"bob@example.com",name:"Bob Smith"},{address:"carol@example.com",name:"Carol Davis"}]},f={cc:[],date:"2026-03-16T09:00:00Z",from:{address:"bob@example.com",name:"Bob Smith"},html:void 0,subject:"Meeting Notes",text:`Hi Alice,

Here are the meeting notes from today:

1. Discussed budget allocation
2. Reviewed timeline
3. Assigned action items

Thanks,
Bob`,to:[{address:"alice@example.com",name:"Alice Johnson"}]},M=`From: Alice Johnson <alice@example.com>
To: Bob Smith <bob@example.com>
Subject: Test Email
Date: Sat, 15 Mar 2026 14:30:00 +0000
MIME-Version: 1.0
Content-Type: text/html; charset=utf-8

<html><body><p>Hello Bob!</p><p>This is a <strong>test email</strong>.</p></body></html>
`;function v(e){return{fetchContents:()=>Promise.resolve(new Response(e)),fetchMetadata:()=>Promise.resolve({mediaType:"message/rfc822",path:"email.eml",sizeBytes:e.length}),getMediaReference:()=>({mimeType:"message/rfc822",reference:{mediaSetViewItem:{mediaItemRid:"ri.mio.main.media-item.mock-email",mediaSetRid:"ri.mio.main.media-set.mock-set",mediaSetViewRid:"ri.mio.main.media-set-view.mock-view"},type:"mediaSetViewItem"}})}}const j={argTypes:{className:{control:"text",description:"Additional CSS class name for the root element"},email:{control:!1,description:"Parsed email data"}},args:{email:w},component:s,parameters:{controls:{expanded:!0}},render:e=>t.jsx("div",{style:{height:"500px"},children:t.jsx(s,{...e})}),tags:["beta"],title:"Components/DocumentViewer/Renderers/EmailViewer"},a={args:{media:v(M)},parameters:{docs:{source:{code:`import { EmailViewer } from "@osdk/react-components/experimental/email-viewer";

<EmailViewer media={myOsdkMedia} />`}}},render:e=>t.jsx("div",{style:{height:"500px"},children:t.jsx(x,{...e})})},i={parameters:{docs:{source:{code:`import { BaseEmailViewer } from "@osdk/react-components/experimental/email-viewer";

<BaseEmailViewer email={parsedEmail} />`}}}},r={args:{email:f}};var o,m,n;a.parameters={...a.parameters,docs:{...(o=a.parameters)==null?void 0:o.docs,source:{originalSource:`{
  args: {
    media: createMockEmailMedia(SAMPLE_EML_CONTENT)
  },
  parameters: {
    docs: {
      source: {
        code: \`import { EmailViewer } from "@osdk/react-components/experimental/email-viewer";

<EmailViewer media={myOsdkMedia} />\`
      }
    }
  },
  render: (args: EmailViewerMediaProps) => <div style={{
    height: "500px"
  }}>
      <EmailViewer {...args} />
    </div>
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
}`,...(g=(E=r.parameters)==null?void 0:E.docs)==null?void 0:g.source}}};const _=["Default","HtmlEmail","PlainTextEmail"];export{a as Default,i as HtmlEmail,r as PlainTextEmail,_ as __namedExportsOrder,j as default};
