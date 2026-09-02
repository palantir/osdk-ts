import{j as r,h as n,H as S}from"./iframe-BPFPjQfN.js";import{D as s}from"./document-viewer-BZ4V7uik.js";import{u as v,w as fe}from"./SpreadsheetViewer-BpqK4UHF.js";import{p as k}from"./passthrough-6sm3BHV7.js";import"./preload-helper-BS5sFlIZ.js";import"./index-DLsuK50b.js";import"./EmailViewer-QH43lmjh.js";import"./useMediaContents-_m-ecqAE.js";import"./spin-DcQ8QPd8.js";import"./svgIconContainer-BCrLikms.js";import"./error-DEs_Iieb.js";import"./ImageViewer-D6E77QIA.js";import"./BaseImageViewer-B2j-Vogc.js";import"./BaseTiffViewer-rvpS8dk9.js";import"./index-YkV0U4e7.js";import"./BaseMarkdownViewer-B_iXcCaT.js";import"./PdfViewer-DBwqdjZJ.js";import"./BasePdfViewer-CEjYUJC2.js";import"./BasePdfViewer.module.css-BJvet-r9.js";import"./PdfViewerAnnotationLayer-BLbL9Rld.js";import"./constants-DsXMS3N3.js";import"./usePdfDocument-BMT2PCWX.js";import"./PdfViewerOutlineSidebar-Bk0gwbIi.js";import"./PdfViewerSidebarHeader-BHdqkvT_.js";import"./useBaseUiId-XR0mowR0.js";import"./useControlled-DWmknCjz.js";import"./CompositeRoot-CA970t9z.js";import"./CompositeItem-BU1kZ6Zk.js";import"./ToolbarRootContext-DvfgzgjU.js";import"./composite--6cSo0WV.js";import"./PdfViewerSearchBar-BA4cUbL1.js";import"./chevron-up-Cy7f5Tfh.js";import"./chevron-down-U37QTCrW.js";import"./cross-jacAbTr1.js";import"./PdfViewerSidebar-DxykRtfz.js";import"./index-D2ej1Jb2.js";import"./index-B2XioIrj.js";import"./index-BOMANPh2.js";import"./PdfViewerToolbar-DvFEX25O.js";import"./Button-MukxU7Us.js";import"./chevron-right-CFbmX4Me.js";import"./Input-Cbr4DxDr.js";import"./search-CZtJ4QjI.js";import"./assertUnreachable-tCT10eXl.js";import"./VideoViewer-Gnb4WeYC.js";import"./XmlViewer-DS1xscN-.js";import"./useOsdkClient-e-CK1Pug.js";import"./withOsdkMetrics-DyIxSijK.js";const me="/osdk-ts/storybook/pr-3964/16440df0d8530ed50f3ea29f255762c0a5d13bf1/compressed.tracemonkey-pldi-09.pdf",le="/osdk-ts/storybook/pr-3964/16440df0d8530ed50f3ea29f255762c0a5d13bf1/example.mp4",ue="/osdk-ts/storybook/pr-3964/16440df0d8530ed50f3ea29f255762c0a5d13bf1/multi-page-tiff.tiff";function ge(){const e=document.createElement("canvas");e.width=200,e.height=200;const t=e.getContext("2d"),a=t.createLinearGradient(0,0,200,200);a.addColorStop(0,"#3b82f6"),a.addColorStop(.5,"#8b5cf6"),a.addColorStop(1,"#ec4899"),t.fillStyle=a,t.fillRect(0,0,200,200),t.fillStyle="white",t.font="bold 24px sans-serif",t.textAlign="center",t.textBaseline="middle",t.fillText("Sample",100,90),t.fillText("Image",100,120);const ce=e.toDataURL("image/png"),b=atob(ce.split(",")[1]),P=new Uint8Array(b.length);for(let i=0;i<b.length;i++)P[i]=b.charCodeAt(i);return new Blob([P],{type:"image/png"})}const he=`# Sample Document

This is a **sample markdown** document rendered by the DocumentViewer.

- Item 1
- Item 2
- Item 3
`;function o(e,t,a){return{fetchContents:t,fetchMetadata:()=>Promise.resolve({path:a,sizeBytes:1024,mediaType:e}),getMediaReference:()=>({mimeType:e,reference:{type:"mediaSetViewItem",mediaSetViewItem:{mediaItemRid:"ri.mio.main.media-item.mock",mediaSetRid:"ri.mio.main.media-set.mock-set",mediaSetViewRid:"ri.mio.main.media-set-view.mock-view"}}})}}const we=ge(),y=o("application/pdf",()=>fetch(me),"document.pdf"),Me=o("image/png",()=>Promise.resolve(new Response(we)),"photo.png"),xe=o("text/markdown",()=>Promise.resolve(new Response(he)),"readme.md"),ke=o("video/mp4",()=>fetch(le),"example.mp4"),be=`From: Alice <alice@example.com>
To: Bob <bob@example.com>
Subject: Test Email
Date: Sun, 15 Mar 2026 14:30:00 +0000
Content-Type: text/html; charset=utf-8

<html><body><p>Hello Bob!</p></body></html>
`,Se=o("message/rfc822",()=>Promise.resolve(new Response(be)),"message.eml"),ve=`<?xml version="1.0"?>
<catalog>
  <book id="1">
    <title>XML Developer's Guide</title>
    <price>44.95</price>
  </book>
</catalog>`,ye=o("application/xml",()=>Promise.resolve(new Response(ve)),"data.xml");function Pe(){const e=v.aoa_to_sheet([["Name","Department","Salary"],["Alice","Engineering","$145,000"],["Bob","Marketing","$120,000"]]),t=v.book_new();v.book_append_sheet(t,e,"Sheet1");const a=fe(t,{type:"array",bookType:"xlsx"});return o("application/vnd.openxmlformats-officedocument.spreadsheetml.sheet",()=>Promise.resolve(new Response(a)),"report.xlsx")}const De=Pe(),de=o("image/tiff",()=>fetch(ue),"multi-page-tiff.tiff"),pe=o("application/octet-stream",()=>Promise.resolve(new Response("")),"data.bin"),bt={title:"Components/DocumentViewer",component:s,tags:["beta"],args:{media:y},render:e=>r.jsx("div",{style:{height:"600px",width:"100%"},children:r.jsx(s,{...e})}),parameters:{controls:{expanded:!0}},argTypes:{media:{description:"The OSDK Media object to render",control:!1},className:{description:"Additional CSS class name for the root element",control:"text"},mimeTypeOverride:{description:"Override the auto-detected MIME type",control:"text"}}},m={args:{media:y},parameters:{docs:{source:{code:`import { DocumentViewer } from "@osdk/react-components/experimental/document-viewer";

<DocumentViewer media={employee.trainingMaterial} />`}}}},d={args:{media:Me},render:e=>r.jsx("div",{style:{height:"400px",width:"400px"},children:r.jsx(s,{...e})})},p={args:{media:xe}},c={args:{media:ke},render:e=>r.jsx("div",{style:{height:"400px",width:"600px"},children:r.jsx(s,{...e})}),parameters:{msw:{handlers:[n.get("*/example.mp4",()=>k())]}}},f={args:{media:pe},render:e=>r.jsx("div",{style:{height:"200px",width:"400px"},children:r.jsx(s,{...e})})},l={args:{media:Se}},u={args:{media:De}},g={args:{media:ye},render:e=>r.jsx("div",{style:{height:"400px",width:"600px"},children:r.jsx(s,{...e})})},h={args:{media:de},parameters:{msw:{handlers:[n.get("*/multi-page-tiff.tiff",()=>k())]}}},w={args:{media:de,enableTiffToPdf:!0,fileName:"multi-page-tiff.tiff"},parameters:{msw:{handlers:[n.get("*/multi-page-tiff.tiff",()=>k()),n.get("*/compressed.tracemonkey-pldi-09.pdf",()=>k()),n.post("*/api/v2/mediasets/*/items/*/transform",()=>S.json({jobId:"mock-job-id",status:"SUCCESSFUL"})),n.get("*/api/v2/mediasets/*/items/*/transformationJobs/*/result",async()=>{const t=await(await fetch(me)).arrayBuffer();return new S(t,{headers:{"Content-Type":"application/pdf"}})}),n.get("*/api/v2/mediasets/*/items/*/transformationJobs/*",()=>S.json({status:"SUCCESSFUL"}))]},docs:{source:{code:`import { DocumentViewer } from "@osdk/react-components/experimental/document-viewer";

// Multi-page TIFFs are detected and converted to PDF via MIO transform API
// Falls back to TiffViewer if transform fails or for single-page TIFFs
<DocumentViewer media={myMedia} enableTiffToPdf fileName="scan.tiff" />`}}}},M={args:{media:pe,mimeTypeOverride:"text/markdown"},parameters:{docs:{source:{code:`import { DocumentViewer } from "@osdk/react-components/experimental/document-viewer";

// Override auto-detected MIME type
<DocumentViewer media={myMedia} mimeTypeOverride="text/markdown" />`}}}},x={args:{media:y,pdfViewerProps:{defaultSidebarOpen:!0,enableDownload:!0}},parameters:{docs:{source:{code:`import { DocumentViewer } from "@osdk/react-components/experimental/document-viewer";

<DocumentViewer
  media={myMedia}
  pdfViewerProps={{
    defaultSidebarOpen: true,
    enableDownload: true,
  }}
/>`}}}};var D,V,T;m.parameters={...m.parameters,docs:{...(D=m.parameters)==null?void 0:D.docs,source:{originalSource:`{
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
}`,...(T=(V=m.parameters)==null?void 0:V.docs)==null?void 0:T.source}}};var I,E,j;d.parameters={...d.parameters,docs:{...(I=d.parameters)==null?void 0:I.docs,source:{originalSource:`{
  args: {
    media: mockImageMedia
  },
  render: (args: DocumentViewerProps) => <div style={{
    height: "400px",
    width: "400px"
  }}>
      <DocumentViewer {...args} />
    </div>
}`,...(j=(E=d.parameters)==null?void 0:E.docs)==null?void 0:j.source}}};var O,R,C;p.parameters={...p.parameters,docs:{...(O=p.parameters)==null?void 0:O.docs,source:{originalSource:`{
  args: {
    media: mockMarkdownMedia
  }
}`,...(C=(R=p.parameters)==null?void 0:R.docs)==null?void 0:C.source}}};var F,L,U;c.parameters={...c.parameters,docs:{...(F=c.parameters)==null?void 0:F.docs,source:{originalSource:`{
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
}`,...(U=(L=c.parameters)==null?void 0:L.docs)==null?void 0:U.source}}};var A,_,B;f.parameters={...f.parameters,docs:{...(A=f.parameters)==null?void 0:A.docs,source:{originalSource:`{
  args: {
    media: mockUnsupportedMedia
  },
  render: (args: DocumentViewerProps) => <div style={{
    height: "200px",
    width: "400px"
  }}>
      <DocumentViewer {...args} />
    </div>
}`,...(B=(_=f.parameters)==null?void 0:_.docs)==null?void 0:B.source}}};var N,W,H;l.parameters={...l.parameters,docs:{...(N=l.parameters)==null?void 0:N.docs,source:{originalSource:`{
  args: {
    media: mockEmailMedia
  }
}`,...(H=(W=l.parameters)==null?void 0:W.docs)==null?void 0:H.source}}};var X,$,J;u.parameters={...u.parameters,docs:{...(X=u.parameters)==null?void 0:X.docs,source:{originalSource:`{
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
// Falls back to TiffViewer if transform fails or for single-page TIFFs
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
      defaultSidebarOpen: true,
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
    defaultSidebarOpen: true,
    enableDownload: true,
  }}
/>\`
      }
    }
  }
}`,...(ie=(se=x.parameters)==null?void 0:se.docs)==null?void 0:ie.source}}};const St=["Pdf","Image","Markdown","Video","UnsupportedType","Email","Spreadsheet","Xml","Tiff","TiffWithPdfConversion","WithMimeTypeOverride","WithPdfViewerProps"];export{l as Email,d as Image,p as Markdown,m as Pdf,u as Spreadsheet,h as Tiff,w as TiffWithPdfConversion,f as UnsupportedType,c as Video,M as WithMimeTypeOverride,x as WithPdfViewerProps,g as Xml,St as __namedExportsOrder,bt as default};
