import{j as t,h as i,H as y}from"./iframe-uWQw-aoo.js";import{D as a}from"./document-viewer-DYJE7_iD.js";import{u as D,w as le}from"./SpreadsheetViewer-D-nCwfba.js";import{p as M}from"./passthrough-6sm3BHV7.js";import"./preload-helper-DVjylv8h.js";import"./index-00plDTMi.js";import"./EmailViewer-DtQwQwJS.js";import"./useMediaContents-ob-wIfnQ.js";import"./spin-DixUlP-t.js";import"./svgIconContainer-DmbccLJt.js";import"./error-GxXvf_3k.js";import"./ImageViewer-Ieu-SSDu.js";import"./BaseImageViewer-feXqmCnw.js";import"./BaseTiffViewer-CcyruKe0.js";import"./index-YkV0U4e7.js";import"./BaseMarkdownViewer-CKvqZMJn.js";import"./PdfViewer-f2Y8EdaK.js";import"./BasePdfViewer-P7Pc-wA7.js";import"./BasePdfViewer.module.css-BtFeEswD.js";import"./PdfViewerAnnotationLayer-IC071ogX.js";import"./constants-DsXMS3N3.js";import"./usePdfDocument-C1YeoLqr.js";import"./PdfViewerOutlineSidebar-DBPopbyc.js";import"./PdfViewerSidebarHeader-BwxbK-AS.js";import"./useBaseUiId-Ck6WuZAw.js";import"./useControlled-DUIvla77.js";import"./CompositeRoot-9YQeHemU.js";import"./CompositeItem-CDu6JeOP.js";import"./ToolbarRootContext-DVsy_bXc.js";import"./composite-DHcKfgn9.js";import"./PdfViewerSearchBar-B8z5cHMJ.js";import"./chevron-up-CbGYwo0a.js";import"./chevron-down-CbHcQ9sT.js";import"./cross-BoNTQ4Rv.js";import"./PdfViewerSidebar-CEJK55Rj.js";import"./index-DTQn9lDq.js";import"./index-Cf88_5vk.js";import"./index-qKvH1J36.js";import"./PdfViewerToolbar-C3Yktp9h.js";import"./Button-BmUOiVqe.js";import"./chevron-right-BAwVY0T8.js";import"./Input--UpB7VqG.js";import"./search-BdK0N4i0.js";import"./assertUnreachable-tCT10eXl.js";import"./VideoViewer-CUwQnfYR.js";import"./XmlViewer-Dn_RjxBv.js";import"./useOsdkClient-CJzg9cBw.js";import"./withOsdkMetrics-YSsi8cLt.js";const de="/osdk-ts/storybook/pr-3925/40fa748f66ddf0e8ac0d8ad12d7d0c11487bd592/compressed.tracemonkey-pldi-09.pdf",ue="/osdk-ts/storybook/pr-3925/40fa748f66ddf0e8ac0d8ad12d7d0c11487bd592/example.mp4",fe="/osdk-ts/storybook/pr-3925/40fa748f66ddf0e8ac0d8ad12d7d0c11487bd592/multi-page-tiff.tiff";function we(){const e=document.createElement("canvas");e.width=200,e.height=200;const r=e.getContext("2d"),o=r.createLinearGradient(0,0,200,200);o.addColorStop(0,"#3b82f6"),o.addColorStop(.5,"#8b5cf6"),o.addColorStop(1,"#ec4899"),r.fillStyle=o,r.fillRect(0,0,200,200),r.fillStyle="white",r.font="bold 24px sans-serif",r.textAlign="center",r.textBaseline="middle",r.fillText("Sample",100,90),r.fillText("Image",100,120);const m=e.toDataURL("image/png"),s=atob(m.split(",")[1]),S=new Uint8Array(s.length);for(let d=0;d<s.length;d++)S[d]=s.charCodeAt(d);return new Blob([S],{type:"image/png"})}const ce=`# Sample Document

This is a **sample markdown** document rendered by the DocumentViewer.

- Item 1
- Item 2
- Item 3
`;function n(e,r,o){return{fetchContents:r,fetchMetadata:()=>Promise.resolve({path:o,sizeBytes:1024,mediaType:e}),getMediaReference:()=>({mimeType:e,reference:{type:"mediaSetViewItem",mediaSetViewItem:{mediaItemRid:"ri.mio.main.media-item.mock",mediaSetRid:"ri.mio.main.media-set.mock-set",mediaSetViewRid:"ri.mio.main.media-set-view.mock-view"}}})}}const he=we(),b=n("application/pdf",()=>fetch(de),"document.pdf"),ge=n("image/png",()=>Promise.resolve(new Response(he)),"photo.png"),xe=n("text/markdown",()=>Promise.resolve(new Response(ce)),"readme.md"),ke=n("video/mp4",()=>fetch(ue),"example.mp4"),Ve=`From: Alice <alice@example.com>
To: Bob <bob@example.com>
Subject: Test Email
Date: Sun, 15 Mar 2026 14:30:00 +0000
Content-Type: text/html; charset=utf-8

<html><body><p>Hello Bob!</p></body></html>
`,ve=n("message/rfc822",()=>Promise.resolve(new Response(Ve)),"message.eml"),Me=`<?xml version="1.0"?>
<catalog>
  <book id="1">
    <title>XML Developer's Guide</title>
    <price>44.95</price>
  </book>
</catalog>`,ye=n("application/xml",()=>Promise.resolve(new Response(Me)),"data.xml");function De(){const e=D.aoa_to_sheet([["Name","Department","Salary"],["Alice","Engineering","$145,000"],["Bob","Marketing","$120,000"]]),r=D.book_new();D.book_append_sheet(r,e,"Sheet1");const o=le(r,{type:"array",bookType:"xlsx"});return n("application/vnd.openxmlformats-officedocument.spreadsheetml.sheet",()=>Promise.resolve(new Response(o)),"report.xlsx")}const be=De(),pe=n("image/tiff",()=>fetch(fe),"multi-page-tiff.tiff"),Se=n("application/octet-stream",()=>Promise.resolve(new Response("")),"data.bin"),Pe=n("application/octet-stream",()=>Promise.resolve(new Response(ce)),"notes.dat"),yr={title:"Components/DocumentViewer",component:a,tags:["beta"],args:{media:b},render:e=>t.jsx("div",{style:{height:"600px",width:"100%"},children:t.jsx(a,{...e})}),parameters:{controls:{expanded:!0}},argTypes:{media:{description:"The OSDK Media object to render",control:!1},className:{description:"Additional CSS class name for the root element",control:"text"},mimeTypeOverride:{description:"Override the auto-detected MIME type",control:"text"}}},c={args:{media:b},parameters:{docs:{source:{code:`import { DocumentViewer } from "@osdk/react-components/experimental/document-viewer";

<DocumentViewer media={employee.trainingMaterial} />`}}}},p={args:{media:ge},render:e=>t.jsx("div",{style:{height:"400px",width:"400px"},children:t.jsx(a,{...e})}),parameters:{docs:{source:{code:`import { DocumentViewer } from "@osdk/react-components/experimental/document-viewer";

// image/* media renders with the pan and zoom ImageViewer
<DocumentViewer media={employee.profilePhoto} />`}}}},l={args:{media:xe},parameters:{docs:{source:{code:`import { DocumentViewer } from "@osdk/react-components/experimental/document-viewer";

// text/markdown media renders with MarkdownViewer
<DocumentViewer media={project.readme} />`}}}},u={args:{media:ke},render:e=>t.jsx("div",{style:{height:"400px",width:"600px"},children:t.jsx(a,{...e})}),parameters:{msw:{handlers:[i.get("*/example.mp4",()=>M())]},docs:{source:{code:`import { DocumentViewer } from "@osdk/react-components/experimental/document-viewer";

// video/* media renders with VideoViewer
<DocumentViewer media={incident.bodyCamFootage} />`}}}},f={args:{media:Se},render:e=>t.jsx("div",{style:{height:"200px",width:"400px"},children:t.jsx(a,{...e})}),parameters:{docs:{source:{code:`import { DocumentViewer } from "@osdk/react-components/experimental/document-viewer";

// MIME types with no matching renderer fall back to a download prompt
<DocumentViewer media={record.rawAttachment} />`}}}},w={args:{media:ve},parameters:{docs:{source:{code:`import { DocumentViewer } from "@osdk/react-components/experimental/document-viewer";

// message/rfc822 media renders with EmailViewer
<DocumentViewer media={thread.originalMessage} />`}}}},h={args:{media:be},parameters:{docs:{source:{code:`import { DocumentViewer } from "@osdk/react-components/experimental/document-viewer";

// xlsx / xls / csv media renders with SpreadsheetViewer
<DocumentViewer media={quarter.headcountReport} />`}}}},g={args:{media:ye},render:e=>t.jsx("div",{style:{height:"400px",width:"600px"},children:t.jsx(a,{...e})}),parameters:{docs:{source:{code:`import { DocumentViewer } from "@osdk/react-components/experimental/document-viewer";

// application/xml media renders with the collapsible-tree XmlViewer
<DocumentViewer media={shipment.manifest} />`}}}},x={args:{media:pe},parameters:{msw:{handlers:[i.get("*/multi-page-tiff.tiff",()=>M())]},docs:{source:{code:`import { DocumentViewer } from "@osdk/react-components/experimental/document-viewer";

// image/tiff media renders with TiffViewer, which decodes in the browser.
// See "Tiff With Pdf Conversion" for server-side PDF conversion instead.
<DocumentViewer media={claim.scannedForm} />`}}}},k={args:{media:pe,enableTiffToPdf:!0,fileName:"multi-page-tiff.tiff"},parameters:{msw:{handlers:[i.get("*/multi-page-tiff.tiff",()=>M()),i.get("*/compressed.tracemonkey-pldi-09.pdf",()=>M()),i.post("*/api/v2/mediasets/*/items/*/transform",()=>y.json({jobId:"mock-job-id",status:"SUCCESSFUL"})),i.get("*/api/v2/mediasets/*/items/*/transformationJobs/*/result",async()=>{const r=await(await fetch(de)).arrayBuffer();return new y(r,{headers:{"Content-Type":"application/pdf"}})}),i.get("*/api/v2/mediasets/*/items/*/transformationJobs/*",()=>y.json({status:"SUCCESSFUL"}))]},docs:{source:{code:`import { DocumentViewer } from "@osdk/react-components/experimental/document-viewer";

// Multi-page TIFFs are detected and converted to PDF via MIO transform API
// Falls back to TiffViewer if transform fails or for single-page TIFFs
<DocumentViewer media={myMedia} enableTiffToPdf fileName="scan.tiff" />`}}}};function Te({media:e,mimeTypeOverride:r,...o}){const m=e.getMediaReference().mimeType,s=r??m;return t.jsxs("div",{style:{display:"flex",flexDirection:"column",gap:"8px",height:"600px"},children:[t.jsxs("dl",{style:{display:"grid",gridTemplateColumns:"auto 1fr",gap:"4px 12px",margin:0,padding:"12px",border:"1px solid currentColor",borderRadius:"4px",fontSize:"12px",lineHeight:1.5,opacity:.85},children:[t.jsx("dt",{style:{opacity:.7},children:"Reported by media"}),t.jsx("dd",{style:{margin:0,fontFamily:"monospace"},children:m}),t.jsx("dt",{style:{opacity:.7},children:"mimeTypeOverride"}),t.jsx("dd",{style:{margin:0,fontFamily:"monospace"},children:r??"(unset)"}),t.jsx("dt",{style:{opacity:.7},children:"Dispatched on"}),t.jsxs("dd",{style:{margin:0,fontFamily:"monospace"},children:[s,r!=null?" (from the override)":""]})]}),t.jsx("div",{style:{flex:1,minHeight:0},children:t.jsx(a,{media:e,mimeTypeOverride:r,...o})})]})}const V={args:{media:Pe,mimeTypeOverride:"text/markdown"},render:e=>t.jsx(Te,{...e}),parameters:{docs:{source:{code:`import { DocumentViewer } from "@osdk/react-components/experimental/document-viewer";

// This media item reports "application/octet-stream", which would hit the
// unsupported-type fallback. The override makes DocumentViewer dispatch on
// "text/markdown" instead, so MarkdownViewer handles it.
<DocumentViewer media={myMedia} mimeTypeOverride="text/markdown" />`}}}},v={args:{media:b,pdfViewerProps:{initialSidebarOpen:!0,enableDownload:!0}},parameters:{docs:{source:{code:`import { DocumentViewer } from "@osdk/react-components/experimental/document-viewer";

<DocumentViewer
  media={myMedia}
  pdfViewerProps={{
    initialSidebarOpen: true,
    enableDownload: true,
  }}
/>`}}}};var P,T,j;c.parameters={...c.parameters,docs:{...(P=c.parameters)==null?void 0:P.docs,source:{originalSource:`{
  args: {
    media: mockPdfMedia
  },
  parameters: {
    docs: {
      source: {
        code: \`import { DocumentViewer } from "@osdk/react-components/experimental/document-viewer";

<DocumentViewer media={employee.trainingMaterial} />\`
      }
    }
  }
}`,...(j=(T=c.parameters)==null?void 0:T.docs)==null?void 0:j.source}}};var I,F,R;p.parameters={...p.parameters,docs:{...(I=p.parameters)==null?void 0:I.docs,source:{originalSource:`{
  args: {
    media: mockImageMedia
  },
  render: (args: DocumentViewerProps) => <div style={{
    height: "400px",
    width: "400px"
  }}>
      <DocumentViewer {...args} />
    </div>,
  parameters: {
    docs: {
      source: {
        code: \`import { DocumentViewer } from "@osdk/react-components/experimental/document-viewer";

// image/* media renders with the pan and zoom ImageViewer
<DocumentViewer media={employee.profilePhoto} />\`
      }
    }
  }
}`,...(R=(F=p.parameters)==null?void 0:F.docs)==null?void 0:R.source}}};var C,E,A;l.parameters={...l.parameters,docs:{...(C=l.parameters)==null?void 0:C.docs,source:{originalSource:`{
  args: {
    media: mockMarkdownMedia
  },
  parameters: {
    docs: {
      source: {
        code: \`import { DocumentViewer } from "@osdk/react-components/experimental/document-viewer";

// text/markdown media renders with MarkdownViewer
<DocumentViewer media={project.readme} />\`
      }
    }
  }
}`,...(A=(E=l.parameters)==null?void 0:E.docs)==null?void 0:A.source}}};var O,L,U;u.parameters={...u.parameters,docs:{...(O=u.parameters)==null?void 0:O.docs,source:{originalSource:`{
  args: {
    media: mockVideoMedia
  },
  render: (args: DocumentViewerProps) => <div style={{
    height: "400px",
    width: "600px"
  }}>
      <DocumentViewer {...args} />
    </div>,
  parameters: {
    msw: {
      handlers: [http.get("*/example.mp4", () => passthrough())]
    },
    docs: {
      source: {
        code: \`import { DocumentViewer } from "@osdk/react-components/experimental/document-viewer";

// video/* media renders with VideoViewer
<DocumentViewer media={incident.bodyCamFootage} />\`
      }
    }
  }
}`,...(U=(L=u.parameters)==null?void 0:L.docs)==null?void 0:U.source}}};var _,B,W;f.parameters={...f.parameters,docs:{...(_=f.parameters)==null?void 0:_.docs,source:{originalSource:`{
  args: {
    media: mockUnsupportedMedia
  },
  render: (args: DocumentViewerProps) => <div style={{
    height: "200px",
    width: "400px"
  }}>
      <DocumentViewer {...args} />
    </div>,
  parameters: {
    docs: {
      source: {
        code: \`import { DocumentViewer } from "@osdk/react-components/experimental/document-viewer";

// MIME types with no matching renderer fall back to a download prompt
<DocumentViewer media={record.rawAttachment} />\`
      }
    }
  }
}`,...(W=(B=f.parameters)==null?void 0:B.docs)==null?void 0:W.source}}};var H,X,N;w.parameters={...w.parameters,docs:{...(H=w.parameters)==null?void 0:H.docs,source:{originalSource:`{
  args: {
    media: mockEmailMedia
  },
  parameters: {
    docs: {
      source: {
        code: \`import { DocumentViewer } from "@osdk/react-components/experimental/document-viewer";

// message/rfc822 media renders with EmailViewer
<DocumentViewer media={thread.originalMessage} />\`
      }
    }
  }
}`,...(N=(X=w.parameters)==null?void 0:X.docs)==null?void 0:N.source}}};var $,z,J;h.parameters={...h.parameters,docs:{...($=h.parameters)==null?void 0:$.docs,source:{originalSource:`{
  args: {
    media: mockSpreadsheetMedia
  },
  parameters: {
    docs: {
      source: {
        code: \`import { DocumentViewer } from "@osdk/react-components/experimental/document-viewer";

// xlsx / xls / csv media renders with SpreadsheetViewer
<DocumentViewer media={quarter.headcountReport} />\`
      }
    }
  }
}`,...(J=(z=h.parameters)==null?void 0:z.docs)==null?void 0:J.source}}};var q,G,K;g.parameters={...g.parameters,docs:{...(q=g.parameters)==null?void 0:q.docs,source:{originalSource:`{
  args: {
    media: mockXmlMedia
  },
  render: (args: DocumentViewerProps) => <div style={{
    height: "400px",
    width: "600px"
  }}>
      <DocumentViewer {...args} />
    </div>,
  parameters: {
    docs: {
      source: {
        code: \`import { DocumentViewer } from "@osdk/react-components/experimental/document-viewer";

// application/xml media renders with the collapsible-tree XmlViewer
<DocumentViewer media={shipment.manifest} />\`
      }
    }
  }
}`,...(K=(G=g.parameters)==null?void 0:G.docs)==null?void 0:K.source}}};var Q,Y,Z;x.parameters={...x.parameters,docs:{...(Q=x.parameters)==null?void 0:Q.docs,source:{originalSource:`{
  args: {
    media: mockTiffMedia
  },
  parameters: {
    msw: {
      handlers: [http.get("*/multi-page-tiff.tiff", () => passthrough())]
    },
    docs: {
      source: {
        code: \`import { DocumentViewer } from "@osdk/react-components/experimental/document-viewer";

// image/tiff media renders with TiffViewer, which decodes in the browser.
// See "Tiff With Pdf Conversion" for server-side PDF conversion instead.
<DocumentViewer media={claim.scannedForm} />\`
      }
    }
  }
}`,...(Z=(Y=x.parameters)==null?void 0:Y.docs)==null?void 0:Z.source}}};var ee,re,te;k.parameters={...k.parameters,docs:{...(ee=k.parameters)==null?void 0:ee.docs,source:{originalSource:`{
  args: {
    media: mockTiffMedia,
    enableTiffToPdf: true,
    fileName: "multi-page-tiff.tiff"
  },
  parameters: {
    msw: {
      handlers: [http.get("*/multi-page-tiff.tiff", () => passthrough()), http.get("*/compressed.tracemonkey-pldi-09.pdf", () => passthrough()),
      // Mock MIO transform API: submit job
      http.post("*/api/v2/mediasets/*/items/*/transform", () => {
        return HttpResponse.json({
          jobId: "mock-job-id",
          status: "SUCCESSFUL"
        });
      }),
      // Mock MIO transform API: get result — must be before getStatus
      // since the status route pattern also matches the /result suffix
      http.get("*/api/v2/mediasets/*/items/*/transformationJobs/*/result", async () => {
        const pdf = await fetch(SAMPLE_PDF_URL);
        const buffer = await pdf.arrayBuffer();
        return new HttpResponse(buffer, {
          headers: {
            "Content-Type": "application/pdf"
          }
        });
      }),
      // Mock MIO transform API: get status
      http.get("*/api/v2/mediasets/*/items/*/transformationJobs/*", () => {
        return HttpResponse.json({
          status: "SUCCESSFUL"
        });
      })]
    },
    docs: {
      source: {
        code: \`import { DocumentViewer } from "@osdk/react-components/experimental/document-viewer";

// Multi-page TIFFs are detected and converted to PDF via MIO transform API
// Falls back to TiffViewer if transform fails or for single-page TIFFs
<DocumentViewer media={myMedia} enableTiffToPdf fileName="scan.tiff" />\`
      }
    }
  }
}`,...(te=(re=k.parameters)==null?void 0:re.docs)==null?void 0:te.source}}};var oe,ne,ie;V.parameters={...V.parameters,docs:{...(oe=V.parameters)==null?void 0:oe.docs,source:{originalSource:`{
  args: {
    media: mockMislabeledMarkdownMedia,
    mimeTypeOverride: "text/markdown"
  },
  render: (args: DocumentViewerProps) => <MimeTypeOverrideDemo {...args} />,
  parameters: {
    docs: {
      source: {
        code: \`import { DocumentViewer } from "@osdk/react-components/experimental/document-viewer";

// This media item reports "application/octet-stream", which would hit the
// unsupported-type fallback. The override makes DocumentViewer dispatch on
// "text/markdown" instead, so MarkdownViewer handles it.
<DocumentViewer media={myMedia} mimeTypeOverride="text/markdown" />\`
      }
    }
  }
}`,...(ie=(ne=V.parameters)==null?void 0:ne.docs)==null?void 0:ie.source}}};var ae,se,me;v.parameters={...v.parameters,docs:{...(ae=v.parameters)==null?void 0:ae.docs,source:{originalSource:`{
  args: {
    media: mockPdfMedia,
    pdfViewerProps: {
      initialSidebarOpen: true,
      enableDownload: true
    }
  },
  parameters: {
    docs: {
      source: {
        code: \`import { DocumentViewer } from "@osdk/react-components/experimental/document-viewer";

<DocumentViewer
  media={myMedia}
  pdfViewerProps={{
    initialSidebarOpen: true,
    enableDownload: true,
  }}
/>\`
      }
    }
  }
}`,...(me=(se=v.parameters)==null?void 0:se.docs)==null?void 0:me.source}}};const Dr=["Pdf","Image","Markdown","Video","UnsupportedType","Email","Spreadsheet","Xml","Tiff","TiffWithPdfConversion","WithMimeTypeOverride","WithPdfViewerProps"];export{w as Email,p as Image,l as Markdown,c as Pdf,h as Spreadsheet,x as Tiff,k as TiffWithPdfConversion,f as UnsupportedType,u as Video,V as WithMimeTypeOverride,v as WithPdfViewerProps,g as Xml,Dr as __namedExportsOrder,yr as default};
