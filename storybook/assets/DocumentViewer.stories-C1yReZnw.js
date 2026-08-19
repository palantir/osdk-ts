import{j as r,h as n,H as v}from"./iframe-6GPNG9Xi.js";import{D as i}from"./document-viewer-BI9HgOXO.js";import{u as b,w as le}from"./SpreadsheetViewer-CnmHIYm1.js";import{p as S}from"./passthrough-6sm3BHV7.js";import"./preload-helper-Dp1pzeXC.js";import"./index-BLLT78dd.js";import"./EmailViewer-CYZg3645.js";import"./useMediaContents-Bct_o9ws.js";import"./spin-BwCruDoN.js";import"./svgIconContainer-BdQnszdm.js";import"./error-DBj4FgTN.js";import"./ImageViewer-C02FxvR9.js";import"./BaseImageViewer-DwLWEOi1.js";import"./BaseTiffViewer-CL8RkoVy.js";import"./index-YkV0U4e7.js";import"./BaseMarkdownViewer-BXYe3SX5.js";import"./PdfViewer-hVqlDKDE.js";import"./BasePdfViewer-Dz3HT0Dv.js";import"./BasePdfViewer.module.css-QGwGorfO.js";import"./PdfViewerAnnotationLayer-Dtx5r-EE.js";import"./constants-DsXMS3N3.js";import"./usePdfDocument-JV-jJcMG.js";import"./PdfViewerOutlineSidebar-CIkKCgfY.js";import"./PdfViewerSidebarHeader-CswzbKTq.js";import"./useBaseUiId-N7eZ68O9.js";import"./useControlled-DGTBEOub.js";import"./CompositeRoot-DhcrqFvT.js";import"./CompositeItem-BOpE1HX7.js";import"./ToolbarRootContext-qHXZhovw.js";import"./composite-BYxN19ZW.js";import"./PdfViewerSearchBar-17ffZy9V.js";import"./chevron-up-BE8XyiRL.js";import"./chevron-down-Dnhw5Ae_.js";import"./cross-CDqWfoJU.js";import"./PdfViewerSidebar-CbJ7ie-o.js";import"./index-DXeIJDVP.js";import"./index-DZlFhs1y.js";import"./index-BHQMMX4F.js";import"./PdfViewerToolbar-DYWhwcl4.js";import"./Button-vhjBY76J.js";import"./chevron-right-DILHtkjA.js";import"./Input-DQenBszh.js";import"./search-BbrW5BKI.js";import"./assertUnreachable-tCT10eXl.js";import"./VideoViewer-8aZelVB6.js";import"./XmlViewer-CI7HF0Jl.js";import"./useOsdkClient-CFj73qoH.js";import"./withOsdkMetrics-DeEkmlIV.js";const me="./compressed.tracemonkey-pldi-09.pdf",fe="./example.mp4",ue="./multi-page-tiff.tiff";function ge(){const e=document.createElement("canvas");e.width=200,e.height=200;const t=e.getContext("2d"),a=t.createLinearGradient(0,0,200,200);a.addColorStop(0,"#3b82f6"),a.addColorStop(.5,"#8b5cf6"),a.addColorStop(1,"#ec4899"),t.fillStyle=a,t.fillRect(0,0,200,200),t.fillStyle="white",t.font="bold 24px sans-serif",t.textAlign="center",t.textBaseline="middle",t.fillText("Sample",100,90),t.fillText("Image",100,120);const ce=e.toDataURL("image/png"),k=atob(ce.split(",")[1]),P=new Uint8Array(k.length);for(let s=0;s<k.length;s++)P[s]=k.charCodeAt(s);return new Blob([P],{type:"image/png"})}const he=`# Sample Document

This is a **sample markdown** document rendered by the DocumentViewer.

- Item 1
- Item 2
- Item 3
`;function o(e,t,a){return{fetchContents:t,fetchMetadata:()=>Promise.resolve({path:a,sizeBytes:1024,mediaType:e}),getMediaReference:()=>({mimeType:e,reference:{type:"mediaSetViewItem",mediaSetViewItem:{mediaItemRid:"ri.mio.main.media-item.mock",mediaSetRid:"ri.mio.main.media-set.mock-set",mediaSetViewRid:"ri.mio.main.media-set-view.mock-view"}}})}}const we=ge(),y=o("application/pdf",()=>fetch(me),"document.pdf"),Me=o("image/png",()=>Promise.resolve(new Response(we)),"photo.png"),xe=o("text/markdown",()=>Promise.resolve(new Response(he)),"readme.md"),Se=o("video/mp4",()=>fetch(fe),"example.mp4"),ke=`From: Alice <alice@example.com>
To: Bob <bob@example.com>
Subject: Test Email
Date: Sun, 15 Mar 2026 14:30:00 +0000
Content-Type: text/html; charset=utf-8

<html><body><p>Hello Bob!</p></body></html>
`,ve=o("message/rfc822",()=>Promise.resolve(new Response(ke)),"message.eml"),be=`<?xml version="1.0"?>
<catalog>
  <book id="1">
    <title>XML Developer's Guide</title>
    <price>44.95</price>
  </book>
</catalog>`,ye=o("application/xml",()=>Promise.resolve(new Response(be)),"data.xml");function Pe(){const e=b.aoa_to_sheet([["Name","Department","Salary"],["Alice","Engineering","$145,000"],["Bob","Marketing","$120,000"]]),t=b.book_new();b.book_append_sheet(t,e,"Sheet1");const a=le(t,{type:"array",bookType:"xlsx"});return o("application/vnd.openxmlformats-officedocument.spreadsheetml.sheet",()=>Promise.resolve(new Response(a)),"report.xlsx")}const De=Pe(),de=o("image/tiff",()=>fetch(ue),"multi-page-tiff.tiff"),pe=o("application/octet-stream",()=>Promise.resolve(new Response("")),"data.bin"),kt={title:"Components/DocumentViewer",component:i,tags:["beta"],args:{media:y},render:e=>r.jsx("div",{style:{height:"600px",width:"100%"},children:r.jsx(i,{...e})}),parameters:{controls:{expanded:!0}},argTypes:{media:{description:"The OSDK Media object to render",control:!1},className:{description:"Additional CSS class name for the root element",control:"text"},mimeTypeOverride:{description:"Override the auto-detected MIME type",control:"text"}}},m={args:{media:y},parameters:{docs:{source:{code:`import { DocumentViewer } from "@osdk/react-components/experimental/document-viewer";

<DocumentViewer media={employee.trainingMaterial} />`}}}},d={args:{media:Me},render:e=>r.jsx("div",{style:{height:"400px",width:"400px"},children:r.jsx(i,{...e})})},p={args:{media:xe}},c={args:{media:Se},render:e=>r.jsx("div",{style:{height:"400px",width:"600px"},children:r.jsx(i,{...e})}),parameters:{msw:{handlers:[n.get("*/example.mp4",()=>S())]}}},l={args:{media:pe},render:e=>r.jsx("div",{style:{height:"200px",width:"400px"},children:r.jsx(i,{...e})})},f={args:{media:ve}},u={args:{media:De}},g={args:{media:ye},render:e=>r.jsx("div",{style:{height:"400px",width:"600px"},children:r.jsx(i,{...e})})},h={args:{media:de},parameters:{msw:{handlers:[n.get("*/multi-page-tiff.tiff",()=>S())]}}},w={args:{media:de,enableTiffToPdf:!0,fileName:"multi-page-tiff.tiff"},parameters:{msw:{handlers:[n.get("*/multi-page-tiff.tiff",()=>S()),n.get("*/compressed.tracemonkey-pldi-09.pdf",()=>S()),n.post("*/api/v2/mediasets/*/items/*/transform",()=>v.json({jobId:"mock-job-id",status:"SUCCESSFUL"})),n.get("*/api/v2/mediasets/*/items/*/transformationJobs/*/result",async()=>{const t=await(await fetch(me)).arrayBuffer();return new v(t,{headers:{"Content-Type":"application/pdf"}})}),n.get("*/api/v2/mediasets/*/items/*/transformationJobs/*",()=>v.json({status:"SUCCESSFUL"}))]},docs:{source:{code:`import { DocumentViewer } from "@osdk/react-components/experimental/document-viewer";

// Multi-page TIFFs are detected and converted to PDF via MIO transform API
// Falls back to TiffViewer if transform fails or for single-page TIFFs
<DocumentViewer media={myMedia} enableTiffToPdf fileName="scan.tiff" />`}}}},M={args:{media:pe,mimeTypeOverride:"text/markdown"},parameters:{docs:{source:{code:`import { DocumentViewer } from "@osdk/react-components/experimental/document-viewer";

// Override auto-detected MIME type
<DocumentViewer media={myMedia} mimeTypeOverride="text/markdown" />`}}}},x={args:{media:y,pdfViewerProps:{initialSidebarOpen:!0,enableDownload:!0}},parameters:{docs:{source:{code:`import { DocumentViewer } from "@osdk/react-components/experimental/document-viewer";

<DocumentViewer
  media={myMedia}
  pdfViewerProps={{
    initialSidebarOpen: true,
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
}`,...(ae=(oe=M.parameters)==null?void 0:oe.docs)==null?void 0:ae.source}}};var ne,ie,se;x.parameters={...x.parameters,docs:{...(ne=x.parameters)==null?void 0:ne.docs,source:{originalSource:`{
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
}`,...(se=(ie=x.parameters)==null?void 0:ie.docs)==null?void 0:se.source}}};const vt=["Pdf","Image","Markdown","Video","UnsupportedType","Email","Spreadsheet","Xml","Tiff","TiffWithPdfConversion","WithMimeTypeOverride","WithPdfViewerProps"];export{f as Email,d as Image,p as Markdown,m as Pdf,u as Spreadsheet,h as Tiff,w as TiffWithPdfConversion,l as UnsupportedType,c as Video,M as WithMimeTypeOverride,x as WithPdfViewerProps,g as Xml,vt as __namedExportsOrder,kt as default};
