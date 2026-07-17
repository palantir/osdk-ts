import{j as o}from"./iframe-CTWtvW7G.js";import{E as h,B as s}from"./EmailViewer-BLNUgVB1.js";import{w as x}from"./withOsdkMetrics-B9XS-cmH.js";import"./preload-helper-1oxodiua.js";import"./index-B5ZJn9Gm.js";import"./useMediaContents-BikMVlZy.js";import"./spin-0T8XHhxE.js";import"./svgIconContainer-BmXJ4UZQ.js";import"./error-C-PnV0Ll.js";const y=x(h,"EmailViewer"),g=`From: Alice Johnson <alice@example.com>
To: Bob Smith <bob@example.com>, Carol Davis <carol@example.com>
Cc: Dave Wilson <dave@example.com>
Subject: Q3 Project Update - Action Items
Date: Sun, 15 Mar 2026 14:30:00 +0000
MIME-Version: 1.0
Content-Type: text/html; charset=utf-8

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
`,M=`From: Bob Smith <bob@example.com>
To: Alice Johnson <alice@example.com>
Subject: Meeting Notes
Date: Mon, 16 Mar 2026 09:00:00 +0000
MIME-Version: 1.0
Content-Type: text/plain; charset=utf-8

Hi Alice,

Here are the meeting notes from today:

1. Discussed budget allocation
2. Reviewed timeline
3. Assigned action items

Thanks,
Bob
`;function w(e){const t=new TextEncoder().encode(e);return t.buffer.slice(t.byteOffset,t.byteOffset+t.byteLength)}function b(e){return{fetchContents:()=>Promise.resolve(new Response(e)),fetchMetadata:()=>Promise.resolve({path:"email.eml",sizeBytes:e.length,mediaType:"message/rfc822"}),getMediaReference:()=>({mimeType:"message/rfc822",reference:{type:"mediaSetViewItem",mediaSetViewItem:{mediaItemRid:"ri.mio.main.media-item.mock-email",mediaSetRid:"ri.mio.main.media-set.mock-set",mediaSetViewRid:"ri.mio.main.media-set-view.mock-view"}}})}}const j={title:"Components/DocumentViewer/Renderers/EmailViewer",component:s,tags:["beta"],args:{content:w(g)},render:e=>o.jsx("div",{style:{height:"500px"},children:o.jsx(s,{...e})}),parameters:{controls:{expanded:!0}},argTypes:{content:{description:"Raw .eml bytes to parse and display",control:!1},className:{description:"Additional CSS class name for the root element",control:"text"}}},r={args:{media:b(g)},render:e=>o.jsx("div",{style:{height:"500px"},children:o.jsx(y,{...e})}),parameters:{docs:{source:{code:`import { EmailViewer } from "@osdk/react-components/experimental/email-viewer";

<EmailViewer media={myOsdkMedia} />`}}}},a={parameters:{docs:{source:{code:`import { BaseEmailViewer } from "@osdk/react-components/experimental/email-viewer";

// content is raw .eml bytes (e.g. from media.fetchContents())
<BaseEmailViewer content={emlBytes} />`}}}},i={args:{content:w(M)}};var n,m,c;r.parameters={...r.parameters,docs:{...(n=r.parameters)==null?void 0:n.docs,source:{originalSource:`{
  args: {
    media: createMockEmailMedia(SAMPLE_HTML_EML)
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
}`,...(c=(m=r.parameters)==null?void 0:m.docs)==null?void 0:c.source}}};var l,d,p;a.parameters={...a.parameters,docs:{...(l=a.parameters)==null?void 0:l.docs,source:{originalSource:`{
  parameters: {
    docs: {
      source: {
        code: \`import { BaseEmailViewer } from "@osdk/react-components/experimental/email-viewer";

// content is raw .eml bytes (e.g. from media.fetchContents())
<BaseEmailViewer content={emlBytes} />\`
      }
    }
  }
}`,...(p=(d=a.parameters)==null?void 0:d.docs)==null?void 0:p.source}}};var f,u,E;i.parameters={...i.parameters,docs:{...(f=i.parameters)==null?void 0:f.docs,source:{originalSource:`{
  args: {
    content: emlToArrayBuffer(SAMPLE_TEXT_EML)
  }
}`,...(E=(u=i.parameters)==null?void 0:u.docs)==null?void 0:E.source}}};const _=["Default","HtmlEmail","PlainTextEmail"];export{r as Default,a as HtmlEmail,i as PlainTextEmail,_ as __namedExportsOrder,j as default};
