import{j as i}from"./iframe-C5plkjSh.js";import{E as g,B as o}from"./EmailViewer-BspHyj7c.js";import{w as u}from"./withOsdkMetrics-CfCFI9Ho.js";import"./preload-helper-D2IaZEKn.js";import"./index-D9wyEakh.js";import"./useMediaContents-DzmuD-Hh.js";import"./spin-CZDovIOL.js";import"./svgIconContainer-EWLL2EhA.js";import"./error-BgKA35zl.js";const x=u(g,"EmailViewer"),w={subject:"Q3 Project Update - Action Items",from:{name:"Alice Johnson",address:"alice@example.com"},to:[{name:"Bob Smith",address:"bob@example.com"},{name:"Carol Davis",address:"carol@example.com"}],cc:[{name:"Dave Wilson",address:"dave@example.com"}],date:"2026-03-15T14:30:00Z",html:`
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
`;function v(e){return{fetchContents:()=>Promise.resolve(new Response(e)),fetchMetadata:()=>Promise.resolve({path:"email.eml",sizeBytes:e.length,mediaType:"message/rfc822"}),getMediaReference:()=>({mimeType:"message/rfc822",reference:{type:"mediaSetViewItem",mediaSetViewItem:{mediaItemRid:"ri.mio.main.media-item.mock-email",mediaSetRid:"ri.mio.main.media-set.mock-set",mediaSetViewRid:"ri.mio.main.media-set-view.mock-view"}}})}}const j={title:"Components/DocumentViewer/Renderers/EmailViewer",component:o,tags:["beta"],args:{content:w},render:e=>i.jsx("div",{style:{height:"500px"},children:i.jsx(o,{...e})}),parameters:{controls:{expanded:!0}},argTypes:{content:{description:"The parsed email to render",control:!1},className:{description:"Additional CSS class name for the root element",control:"text"}}},a={args:{media:v(M)},render:e=>i.jsx("div",{style:{height:"500px"},children:i.jsx(x,{...e})}),parameters:{docs:{source:{code:`import { EmailViewer } from "@osdk/react-components/experimental/email-viewer";

<EmailViewer media={myOsdkMedia} />`}}}},t={parameters:{docs:{source:{code:`import { BaseEmailViewer } from "@osdk/react-components/experimental/email-viewer";

<BaseEmailViewer content={parsedEmail} />`}}}},r={args:{content:f}};var s,m,n;a.parameters={...a.parameters,docs:{...(s=a.parameters)==null?void 0:s.docs,source:{originalSource:`{
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
        code: \`import { EmailViewer } from "@osdk/react-components/experimental/email-viewer";

<EmailViewer media={myOsdkMedia} />\`
      }
    }
  }
}`,...(n=(m=a.parameters)==null?void 0:m.docs)==null?void 0:n.source}}};var c,d,l;t.parameters={...t.parameters,docs:{...(c=t.parameters)==null?void 0:c.docs,source:{originalSource:`{
  parameters: {
    docs: {
      source: {
        code: \`import { BaseEmailViewer } from "@osdk/react-components/experimental/email-viewer";

<BaseEmailViewer content={parsedEmail} />\`
      }
    }
  }
}`,...(l=(d=t.parameters)==null?void 0:d.docs)==null?void 0:l.source}}};var p,E,h;r.parameters={...r.parameters,docs:{...(p=r.parameters)==null?void 0:p.docs,source:{originalSource:`{
  args: {
    content: SAMPLE_TEXT_EMAIL
  }
}`,...(h=(E=r.parameters)==null?void 0:E.docs)==null?void 0:h.source}}};const _=["Default","HtmlEmail","PlainTextEmail"];export{a as Default,t as HtmlEmail,r as PlainTextEmail,_ as __namedExportsOrder,j as default};
