import{j as r,h as n,H as S}from"./iframe-DqNwpodn.js";import{D as s}from"./document-viewer-ahwTPDBM.js";import{u as v,w as le}from"./SpreadsheetViewer-Cc3BlwM4.js";import{p as b}from"./passthrough-6sm3BHV7.js";import"./preload-helper-Cozt92uG.js";import"./index-CQGcEopW.js";import"./EmailViewer-BDGzW6dV.js";import"./useMediaContents-DBhMi8j9.js";import"./spin-DgK4jNW3.js";import"./svgIconContainer-C0i7IGlc.js";import"./error-QvLeIger.js";import"./ImageViewer-DRkjIvOD.js";import"./BaseImageViewer-D4HTD7-o.js";import"./TiffRenderer-BF1b3pBr.js";import"./index-YkV0U4e7.js";import"./MarkdownRenderer-C4IT9-U4.js";import"./PdfRenderer-Ify7HnKL.js";import"./PdfViewer-lGGiGnaz.js";import"./PdfViewer.module.css-s3TVGSFt.js";import"./PdfViewerAnnotationLayer-DWQuV1fO.js";import"./constants-DsXMS3N3.js";import"./usePdfDocument-0GoUxPNL.js";import"./PdfViewerOutlineSidebar-BhZ5atkJ.js";import"./PdfViewerSidebarHeader-Dsz0IDdR.js";import"./useBaseUiId-D0IRY_xq.js";import"./useControlled-5kZb40iP.js";import"./CompositeRoot-CUxVXGgt.js";import"./CompositeItem-DRCpZxZT.js";import"./ToolbarRootContext-DNu-sflf.js";import"./composite-CSLCI2p4.js";import"./PdfViewerSearchBar-_i8imDzh.js";import"./chevron-up-BJm3pwjp.js";import"./chevron-down-CkHwZ2js.js";import"./cross-ZDjiMYg9.js";import"./PdfViewerSidebar-IGqtrp-z.js";import"./index-Bd8jGuQf.js";import"./index-Bhsl5-6I.js";import"./index-Bhb5doz-.js";import"./PdfViewerToolbar-BeEuU5-H.js";import"./Button-yW5WqrcK.js";import"./chevron-right-Vzo34KKZ.js";import"./Input-dxlaYnFR.js";import"./search-iXI7_iDk.js";import"./assertUnreachable-tCT10eXl.js";import"./VideoViewer-BetPhNfF.js";import"./XmlViewer-giqHUAHQ.js";import"./useOsdkClient-DJJkzB6p.js";import"./withOsdkMetrics-DueETg7y.js";const me="/osdk-ts/storybook/pr-3859/3ecbcddc4e072fba997cb1613d75c322085c9c17/compressed.tracemonkey-pldi-09.pdf",fe="/osdk-ts/storybook/pr-3859/3ecbcddc4e072fba997cb1613d75c322085c9c17/example.mp4",ue="/osdk-ts/storybook/pr-3859/3ecbcddc4e072fba997cb1613d75c322085c9c17/multi-page-tiff.tiff";function ge(){const e=document.createElement("canvas");e.width=200,e.height=200;const t=e.getContext("2d"),a=t.createLinearGradient(0,0,200,200);a.addColorStop(0,"#3b82f6"),a.addColorStop(.5,"#8b5cf6"),a.addColorStop(1,"#ec4899"),t.fillStyle=a,t.fillRect(0,0,200,200),t.fillStyle="white",t.font="bold 24px sans-serif",t.textAlign="center",t.textBaseline="middle",t.fillText("Sample",100,90),t.fillText("Image",100,120);const ce=e.toDataURL("image/png"),k=atob(ce.split(",")[1]),P=new Uint8Array(k.length);for(let i=0;i<k.length;i++)P[i]=k.charCodeAt(i);return new Blob([P],{type:"image/png"})}const he=`# Sample Document

This is a **sample markdown** document rendered by the DocumentViewer.

- Item 1
- Item 2
- Item 3
`;function o(e,t,a){return{fetchContents:t,fetchMetadata:()=>Promise.resolve({path:a,sizeBytes:1024,mediaType:e}),getMediaReference:()=>({mimeType:e,reference:{type:"mediaSetViewItem",mediaSetViewItem:{mediaItemRid:"ri.mio.main.media-item.mock",mediaSetRid:"ri.mio.main.media-set.mock-set",mediaSetViewRid:"ri.mio.main.media-set-view.mock-view"}}})}}const we=ge(),y=o("application/pdf",()=>fetch(me),"document.pdf"),Me=o("image/png",()=>Promise.resolve(new Response(we)),"photo.png"),xe=o("text/markdown",()=>Promise.resolve(new Response(he)),"readme.md"),be=o("video/mp4",()=>fetch(fe),"example.mp4"),ke=`From: Alice <alice@example.com>
To: Bob <bob@example.com>
Subject: Test Email
Date: Sun, 15 Mar 2026 14:30:00 +0000
Content-Type: text/html; charset=utf-8

<html><body><p>Hello Bob!</p></body></html>
`,Se=o("message/rfc822",()=>Promise.resolve(new Response(ke)),"message.eml"),ve=`<?xml version="1.0"?>
<catalog>
  <book id="1">
    <title>XML Developer's Guide</title>
    <price>44.95</price>
  </book>
</catalog>`,ye=o("application/xml",()=>Promise.resolve(new Response(ve)),"data.xml");function Pe(){const e=v.aoa_to_sheet([["Name","Department","Salary"],["Alice","Engineering","$145,000"],["Bob","Marketing","$120,000"]]),t=v.book_new();v.book_append_sheet(t,e,"Sheet1");const a=le(t,{type:"array",bookType:"xlsx"});return o("application/vnd.openxmlformats-officedocument.spreadsheetml.sheet",()=>Promise.resolve(new Response(a)),"report.xlsx")}const De=Pe(),de=o("image/tiff",()=>fetch(ue),"multi-page-tiff.tiff"),pe=o("application/octet-stream",()=>Promise.resolve(new Response("")),"data.bin"),kt={title:"Components/DocumentViewer",component:s,tags:["beta"],args:{media:y},render:e=>r.jsx("div",{style:{height:"600px",width:"100%"},children:r.jsx(s,{...e})}),parameters:{controls:{expanded:!0}},argTypes:{media:{description:"The OSDK Media object to render",control:!1},className:{description:"Additional CSS class name for the root element",control:"text"},mimeTypeOverride:{description:"Override the auto-detected MIME type",control:"text"}}},m={args:{media:y},parameters:{docs:{source:{code:`import { DocumentViewer } from "@osdk/react-components/experimental/document-viewer";

<DocumentViewer media={employee.trainingMaterial} />`}}}},d={args:{media:Me},render:e=>r.jsx("div",{style:{height:"400px",width:"400px"},children:r.jsx(s,{...e})})},p={args:{media:xe}},c={args:{media:be},render:e=>r.jsx("div",{style:{height:"400px",width:"600px"},children:r.jsx(s,{...e})}),parameters:{msw:{handlers:[n.get("*/example.mp4",()=>b())]}}},l={args:{media:pe},render:e=>r.jsx("div",{style:{height:"200px",width:"400px"},children:r.jsx(s,{...e})})},f={args:{media:Se}},u={args:{media:De}},g={args:{media:ye},render:e=>r.jsx("div",{style:{height:"400px",width:"600px"},children:r.jsx(s,{...e})})},h={args:{media:de},parameters:{msw:{handlers:[n.get("*/multi-page-tiff.tiff",()=>b())]}}},w={args:{media:de,enableTiffToPdf:!0,fileName:"multi-page-tiff.tiff"},parameters:{msw:{handlers:[n.get("*/multi-page-tiff.tiff",()=>b()),n.get("*/compressed.tracemonkey-pldi-09.pdf",()=>b()),n.post("*/api/v2/mediasets/*/items/*/transform",()=>S.json({jobId:"mock-job-id",status:"SUCCESSFUL"})),n.get("*/api/v2/mediasets/*/items/*/transformationJobs/*/result",async()=>{const t=await(await fetch(me)).arrayBuffer();return new S(t,{headers:{"Content-Type":"application/pdf"}})}),n.get("*/api/v2/mediasets/*/items/*/transformationJobs/*",()=>S.json({status:"SUCCESSFUL"}))]},docs:{source:{code:`import { DocumentViewer } from "@osdk/react-components/experimental/document-viewer";

// Multi-page TIFFs are detected and converted to PDF via MIO transform API
// Falls back to TiffRenderer if transform fails or for single-page TIFFs
<DocumentViewer media={myMedia} enableTiffToPdf fileName="scan.tiff" />`}}}},M={args:{media:pe,mimeTypeOverride:"text/markdown"},parameters:{docs:{source:{code:`import { DocumentViewer } from "@osdk/react-components/experimental/document-viewer";

// Override auto-detected MIME type
<DocumentViewer media={myMedia} mimeTypeOverride="text/markdown" />`}}}},x={args:{media:y,pdfViewerProps:{initialSidebarOpen:!0,enableDownload:!0}},parameters:{docs:{source:{code:`import { DocumentViewer } from "@osdk/react-components/experimental/document-viewer";

<DocumentViewer
  media={myMedia}
  pdfViewerProps={{
    initialSidebarOpen: true,
    enableDownload: true,
  }}
/>`}}}};var D,T,V;m.parameters={...m.parameters,docs:{...(D=m.parameters)==null?void 0:D.docs,source:{originalSource:`{
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
}`,...(V=(T=m.parameters)==null?void 0:T.docs)==null?void 0:V.source}}};var I,E,R;d.parameters={...d.parameters,docs:{...(I=d.parameters)==null?void 0:I.docs,source:{originalSource:`{
  args: {
    media: mockImageMedia
  },
  render: (args: DocumentViewerProps) => <div style={{
    height: "400px",
    width: "400px"
  }}>
      <DocumentViewer {...args} />
    </div>
}`,...(R=(E=d.parameters)==null?void 0:E.docs)==null?void 0:R.source}}};var j,O,C;p.parameters={...p.parameters,docs:{...(j=p.parameters)==null?void 0:j.docs,source:{originalSource:`{
  args: {
    media: mockMarkdownMedia
  }
}`,...(C=(O=p.parameters)==null?void 0:O.docs)==null?void 0:C.source}}};var F,L,U;c.parameters={...c.parameters,docs:{...(F=c.parameters)==null?void 0:F.docs,source:{originalSource:`{
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
    }
  }
}`,...(U=(L=c.parameters)==null?void 0:L.docs)==null?void 0:U.source}}};var A,_,B;l.parameters={...l.parameters,docs:{...(A=l.parameters)==null?void 0:A.docs,source:{originalSource:`{
  args: {
    media: mockUnsupportedMedia
  },
  render: (args: DocumentViewerProps) => <div style={{
    height: "200px",
    width: "400px"
  }}>
      <DocumentViewer {...args} />
    </div>
}`,...(B=(_=l.parameters)==null?void 0:_.docs)==null?void 0:B.source}}};var N,W,H;f.parameters={...f.parameters,docs:{...(N=f.parameters)==null?void 0:N.docs,source:{originalSource:`{
  args: {
    media: mockEmailMedia
  }
}`,...(H=(W=f.parameters)==null?void 0:W.docs)==null?void 0:H.source}}};var X,$,J;u.parameters={...u.parameters,docs:{...(X=u.parameters)==null?void 0:X.docs,source:{originalSource:`{
  args: {
    media: mockSpreadsheetMedia
  }
}`,...(J=($=u.parameters)==null?void 0:$.docs)==null?void 0:J.source}}};var G,K,z;g.parameters={...g.parameters,docs:{...(G=g.parameters)==null?void 0:G.docs,source:{originalSource:`{
  args: {
    media: mockXmlMedia
  },
  render: (args: DocumentViewerProps) => <div style={{
    height: "400px",
    width: "600px"
  }}>
      <DocumentViewer {...args} />
    </div>
}`,...(z=(K=g.parameters)==null?void 0:K.docs)==null?void 0:z.source}}};var q,Q,Y;h.parameters={...h.parameters,docs:{...(q=h.parameters)==null?void 0:q.docs,source:{originalSource:`{
  args: {
    media: mockTiffMedia
  },
  parameters: {
    msw: {
      handlers: [http.get("*/multi-page-tiff.tiff", () => passthrough())]
    }
  }
}`,...(Y=(Q=h.parameters)==null?void 0:Q.docs)==null?void 0:Y.source}}};var Z,ee,te;w.parameters={...w.parameters,docs:{...(Z=w.parameters)==null?void 0:Z.docs,source:{originalSource:`{
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
// Falls back to TiffRenderer if transform fails or for single-page TIFFs
<DocumentViewer media={myMedia} enableTiffToPdf fileName="scan.tiff" />\`
      }
    }
  }
}`,...(te=(ee=w.parameters)==null?void 0:ee.docs)==null?void 0:te.source}}};var re,oe,ae;M.parameters={...M.parameters,docs:{...(re=M.parameters)==null?void 0:re.docs,source:{originalSource:`{
  args: {
    media: mockUnsupportedMedia,
    mimeTypeOverride: "text/markdown"
  },
  parameters: {
    docs: {
      source: {
        code: \`import { DocumentViewer } from "@osdk/react-components/experimental/document-viewer";

// Override auto-detected MIME type
<DocumentViewer media={myMedia} mimeTypeOverride="text/markdown" />\`
      }
    }
  }
}`,...(ae=(oe=M.parameters)==null?void 0:oe.docs)==null?void 0:ae.source}}};var ne,se,ie;x.parameters={...x.parameters,docs:{...(ne=x.parameters)==null?void 0:ne.docs,source:{originalSource:`{
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
}`,...(ie=(se=x.parameters)==null?void 0:se.docs)==null?void 0:ie.source}}};const St=["Pdf","Image","Markdown","Video","UnsupportedType","Email","Spreadsheet","Xml","Tiff","TiffWithPdfConversion","WithMimeTypeOverride","WithPdfViewerProps"];export{f as Email,d as Image,p as Markdown,m as Pdf,u as Spreadsheet,h as Tiff,w as TiffWithPdfConversion,l as UnsupportedType,c as Video,M as WithMimeTypeOverride,x as WithPdfViewerProps,g as Xml,St as __namedExportsOrder,kt as default};
