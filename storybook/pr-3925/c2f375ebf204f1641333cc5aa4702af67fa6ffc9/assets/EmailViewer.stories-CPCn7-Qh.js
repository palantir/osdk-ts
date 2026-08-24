import{j as o}from"./iframe-D7uYHMK5.js";import{E as x,B as i}from"./EmailViewer-2vYkExR5.js";import{w as u}from"./withOsdkMetrics-D9_ognri.js";import"./preload-helper-DiAZcfZm.js";import"./index-BzC45Lga.js";import"./useMediaContents-CCiR7isa.js";import"./spin-aA3fmfjy.js";import"./svgIconContainer-BznKxTlt.js";import"./error-DJXRLU5K.js";const g=u(x,"EmailViewer"),w={subject:"Q3 Project Update - Action Items",from:{name:"Alice Johnson",address:"alice@example.com"},to:[{name:"Bob Smith",address:"bob@example.com"},{name:"Carol Davis",address:"carol@example.com"}],cc:[{name:"Dave Wilson",address:"dave@example.com"}],date:"2026-03-15T14:30:00Z",html:`
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
Bob`},b=`From: Alice Johnson <alice@example.com>
To: Bob Smith <bob@example.com>
Subject: Test Email
Date: Sat, 15 Mar 2026 14:30:00 +0000
MIME-Version: 1.0
Content-Type: text/html; charset=utf-8

<html><body><p>Hello Bob!</p><p>This is a <strong>test email</strong>.</p></body></html>
`;function M(e){return{fetchContents:()=>Promise.resolve(new Response(e)),fetchMetadata:()=>Promise.resolve({path:"email.eml",sizeBytes:e.length,mediaType:"message/rfc822"}),getMediaReference:()=>({mimeType:"message/rfc822",reference:{type:"mediaSetViewItem",mediaSetViewItem:{mediaItemRid:"ri.mio.main.media-item.mock-email",mediaSetRid:"ri.mio.main.media-set.mock-set",mediaSetViewRid:"ri.mio.main.media-set-view.mock-view"}}})}}const j={title:"Components/DocumentViewer/Renderers/EmailViewer",component:i,tags:["beta"],args:{content:w},render:e=>o.jsx("div",{style:{height:"500px"},children:o.jsx(i,{...e})}),parameters:{controls:{expanded:!0}},argTypes:{content:{description:"The parsed email to render",control:!1},className:{description:"Additional CSS class name for the root element",control:"text"}}},t={args:{media:M(b)},render:e=>o.jsx("div",{style:{height:"500px"},children:o.jsx(g,{...e})}),parameters:{docs:{source:{code:`import { EmailViewer } from "@osdk/react-components/experimental/email-viewer";

<EmailViewer media={myOsdkMedia} />`}}}},a={parameters:{docs:{source:{code:`import { BaseEmailViewer } from "@osdk/react-components/experimental/email-viewer";

<BaseEmailViewer content={parsedEmail} />`}}}},r={args:{content:f},parameters:{docs:{source:{code:`import { BaseEmailViewer } from "@osdk/react-components/experimental/email-viewer";

// A ParsedEmail with no html part renders its text body as preformatted text
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
/>`}}}};var n,s,m;t.parameters={...t.parameters,docs:{...(n=t.parameters)==null?void 0:n.docs,source:{originalSource:`{
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
}`,...(m=(s=t.parameters)==null?void 0:s.docs)==null?void 0:m.source}}};var c,d,l;a.parameters={...a.parameters,docs:{...(c=a.parameters)==null?void 0:c.docs,source:{originalSource:`{
  parameters: {
    docs: {
      source: {
        code: \`import { BaseEmailViewer } from "@osdk/react-components/experimental/email-viewer";

<BaseEmailViewer content={parsedEmail} />\`
      }
    }
  }
}`,...(l=(d=a.parameters)==null?void 0:d.docs)==null?void 0:l.source}}};var p,h,E;r.parameters={...r.parameters,docs:{...(p=r.parameters)==null?void 0:p.docs,source:{originalSource:`{
  args: {
    content: SAMPLE_TEXT_EMAIL
  },
  parameters: {
    docs: {
      source: {
        code: \`import { BaseEmailViewer } from "@osdk/react-components/experimental/email-viewer";

// A ParsedEmail with no html part renders its text body as preformatted text
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
}`,...(E=(h=r.parameters)==null?void 0:h.docs)==null?void 0:E.source}}};const H=["Default","HtmlEmail","PlainTextEmail"];export{t as Default,a as HtmlEmail,r as PlainTextEmail,H as __namedExportsOrder,j as default};
