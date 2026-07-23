import{j as r,h as n,H as v}from"./iframe-CguRgO1s.js";import{D as i}from"./document-viewer-DP_vAB1X.js";import{u as y,w as le}from"./ExcelViewer-BvYqhdfl.js";import{p as k}from"./passthrough-6sm3BHV7.js";import"./preload-helper-BMc7U262.js";import"./index-BGS7gDUn.js";import"./EmailViewer-CZzbP7UQ.js";import"./useMediaContents-k9YkbDO2.js";import"./spin-BFrnJqei.js";import"./svgIconContainer-CLJzNlfz.js";import"./error-CW261XEm.js";import"./ImageViewer-CJoOUsuh.js";import"./BaseImageViewer-4SZNENkP.js";import"./TiffRenderer-DT_r9gF3.js";import"./index-YkV0U4e7.js";import"./MarkdownRenderer-DtKISlM9.js";import"./PdfRenderer-Dfby64NE.js";import"./PdfViewer-BuXOJH0-.js";import"./PdfViewer.module.css-CbUYxyIh.js";import"./PdfViewerAnnotationLayer-DDFRVfhs.js";import"./constants-DsXMS3N3.js";import"./usePdfDocument-ChgEjqDV.js";import"./PdfViewerOutlineSidebar-DXF-YVFA.js";import"./PdfViewerSidebarHeader-hhUQQik3.js";import"./useBaseUiId-B2RjeRps.js";import"./useControlled-QGl_Fogg.js";import"./CompositeRoot-B0szNqka.js";import"./CompositeItem-BagBTlO9.js";import"./ToolbarRootContext-BBXfwh82.js";import"./composite-qTi-RAR_.js";import"./PdfViewerSearchBar-BLU3oIFE.js";import"./chevron-up-KP5kQBUn.js";import"./chevron-down-BjgaS9xF.js";import"./cross-Br0Qm67p.js";import"./PdfViewerSidebar-BLCBe52Z.js";import"./index-C2kWb54g.js";import"./index-3k5H_e2z.js";import"./index-But1OdyE.js";import"./PdfViewerToolbar-CVbZCcLP.js";import"./Button-BCDQ8FRu.js";import"./chevron-right-DkoNUdop.js";import"./Input-BbJ-H5cZ.js";import"./search-DZWqHIsG.js";import"./assertUnreachable-tCT10eXl.js";import"./VideoViewer-BXvc7A2g.js";import"./XmlViewer-Dq8Jby5h.js";import"./useOsdkClient-WqhQ7smE.js";import"./withOsdkMetrics-DNdkJlAo.js";const me="/osdk-ts/storybook/pr-3740/6c453a5041b2ec54a9e19325a36f413f3cd41cc3/compressed.tracemonkey-pldi-09.pdf",fe="/osdk-ts/storybook/pr-3740/6c453a5041b2ec54a9e19325a36f413f3cd41cc3/example.mp4",ue="/osdk-ts/storybook/pr-3740/6c453a5041b2ec54a9e19325a36f413f3cd41cc3/multi-page-tiff.tiff";function ge(){const e=document.createElement("canvas");e.width=200,e.height=200;const t=e.getContext("2d"),a=t.createLinearGradient(0,0,200,200);a.addColorStop(0,"#3b82f6"),a.addColorStop(.5,"#8b5cf6"),a.addColorStop(1,"#ec4899"),t.fillStyle=a,t.fillRect(0,0,200,200),t.fillStyle="white",t.font="bold 24px sans-serif",t.textAlign="center",t.textBaseline="middle",t.fillText("Sample",100,90),t.fillText("Image",100,120);const pe=e.toDataURL("image/png"),b=atob(pe.split(",")[1]),P=new Uint8Array(b.length);for(let s=0;s<b.length;s++)P[s]=b.charCodeAt(s);return new Blob([P],{type:"image/png"})}const he=`# Sample Document

This is a **sample markdown** document rendered by the DocumentViewer.

- Item 1
- Item 2
- Item 3
`;function o(e,t,a){return{fetchContents:t,fetchMetadata:()=>Promise.resolve({path:a,sizeBytes:1024,mediaType:e}),getMediaReference:()=>({mimeType:e,reference:{type:"mediaSetViewItem",mediaSetViewItem:{mediaItemRid:"ri.mio.main.media-item.mock",mediaSetRid:"ri.mio.main.media-set.mock-set",mediaSetViewRid:"ri.mio.main.media-set-view.mock-view"}}})}}const we=ge(),S=o("application/pdf",()=>fetch(me),"document.pdf"),xe=o("image/png",()=>Promise.resolve(new Response(we)),"photo.png"),Me=o("text/markdown",()=>Promise.resolve(new Response(he)),"readme.md"),ke=o("video/mp4",()=>fetch(fe),"example.mp4"),be=`From: Alice <alice@example.com>
To: Bob <bob@example.com>
Subject: Test Email
Date: Sun, 15 Mar 2026 14:30:00 +0000
Content-Type: text/html; charset=utf-8

<html><body><p>Hello Bob!</p></body></html>
`,ve=o("message/rfc822",()=>Promise.resolve(new Response(be)),"message.eml"),ye=`<?xml version="1.0"?>
<catalog>
  <book id="1">
    <title>XML Developer's Guide</title>
    <price>44.95</price>
  </book>
</catalog>`,Se=o("application/xml",()=>Promise.resolve(new Response(ye)),"data.xml");function Pe(){const e=y.aoa_to_sheet([["Name","Department","Salary"],["Alice","Engineering","$145,000"],["Bob","Marketing","$120,000"]]),t=y.book_new();y.book_append_sheet(t,e,"Sheet1");const a=le(t,{type:"array",bookType:"xlsx"});return o("application/vnd.openxmlformats-officedocument.spreadsheetml.sheet",()=>Promise.resolve(new Response(a)),"report.xlsx")}const De=Pe(),de=o("image/tiff",()=>fetch(ue),"multi-page-tiff.tiff"),ce=o("application/octet-stream",()=>Promise.resolve(new Response("")),"data.bin"),bt={title:"Components/DocumentViewer",component:i,tags:["beta"],args:{media:S},render:e=>r.jsx("div",{style:{height:"600px",width:"100%"},children:r.jsx(i,{...e})}),parameters:{controls:{expanded:!0}},argTypes:{media:{description:"The OSDK Media object to render",control:!1},className:{description:"Additional CSS class name for the root element",control:"text"},mimeTypeOverride:{description:"Override the auto-detected MIME type",control:"text"}}},m={args:{media:S},parameters:{docs:{source:{code:`import { DocumentViewer } from "@osdk/react-components/experimental/document-viewer";

<DocumentViewer media={employee.trainingMaterial} />`}}}},d={args:{media:xe},render:e=>r.jsx("div",{style:{height:"400px",width:"400px"},children:r.jsx(i,{...e})})},c={args:{media:Me}},p={args:{media:ke},render:e=>r.jsx("div",{style:{height:"400px",width:"600px"},children:r.jsx(i,{...e})}),parameters:{msw:{handlers:[n.get("*/example.mp4",()=>k())]}}},l={args:{media:ce},render:e=>r.jsx("div",{style:{height:"200px",width:"400px"},children:r.jsx(i,{...e})})},f={args:{media:ve}},u={args:{media:De}},g={args:{media:Se},render:e=>r.jsx("div",{style:{height:"400px",width:"600px"},children:r.jsx(i,{...e})})},h={args:{media:de},parameters:{msw:{handlers:[n.get("*/multi-page-tiff.tiff",()=>k())]}}},w={args:{media:de,enableTiffToPdf:!0,fileName:"multi-page-tiff.tiff"},parameters:{msw:{handlers:[n.get("*/multi-page-tiff.tiff",()=>k()),n.get("*/compressed.tracemonkey-pldi-09.pdf",()=>k()),n.post("*/api/v2/mediasets/*/items/*/transform",()=>v.json({jobId:"mock-job-id",status:"SUCCESSFUL"})),n.get("*/api/v2/mediasets/*/items/*/transformationJobs/*/result",async()=>{const t=await(await fetch(me)).arrayBuffer();return new v(t,{headers:{"Content-Type":"application/pdf"}})}),n.get("*/api/v2/mediasets/*/items/*/transformationJobs/*",()=>v.json({status:"SUCCESSFUL"}))]},docs:{source:{code:`import { DocumentViewer } from "@osdk/react-components/experimental/document-viewer";

// Multi-page TIFFs are detected and converted to PDF via MIO transform API
// Falls back to TiffRenderer if transform fails or for single-page TIFFs
<DocumentViewer media={myMedia} enableTiffToPdf fileName="scan.tiff" />`}}}},x={args:{media:ce,mimeTypeOverride:"text/markdown"},parameters:{docs:{source:{code:`import { DocumentViewer } from "@osdk/react-components/experimental/document-viewer";

// Override auto-detected MIME type
<DocumentViewer media={myMedia} mimeTypeOverride="text/markdown" />`}}}},M={args:{media:S,pdfViewerProps:{initialSidebarOpen:!0,enableDownload:!0}},parameters:{docs:{source:{code:`import { DocumentViewer } from "@osdk/react-components/experimental/document-viewer";

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
}`,...(R=(E=d.parameters)==null?void 0:E.docs)==null?void 0:R.source}}};var j,O,C;c.parameters={...c.parameters,docs:{...(j=c.parameters)==null?void 0:j.docs,source:{originalSource:`{
  args: {
    media: mockMarkdownMedia
  }
}`,...(C=(O=c.parameters)==null?void 0:O.docs)==null?void 0:C.source}}};var F,L,U;p.parameters={...p.parameters,docs:{...(F=p.parameters)==null?void 0:F.docs,source:{originalSource:`{
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
}`,...(U=(L=p.parameters)==null?void 0:L.docs)==null?void 0:U.source}}};var A,_,B;l.parameters={...l.parameters,docs:{...(A=l.parameters)==null?void 0:A.docs,source:{originalSource:`{
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
    media: mockExcelMedia
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
}`,...(te=(ee=w.parameters)==null?void 0:ee.docs)==null?void 0:te.source}}};var re,oe,ae;x.parameters={...x.parameters,docs:{...(re=x.parameters)==null?void 0:re.docs,source:{originalSource:`{
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
}`,...(ae=(oe=x.parameters)==null?void 0:oe.docs)==null?void 0:ae.source}}};var ne,ie,se;M.parameters={...M.parameters,docs:{...(ne=M.parameters)==null?void 0:ne.docs,source:{originalSource:`{
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
}`,...(se=(ie=M.parameters)==null?void 0:ie.docs)==null?void 0:se.source}}};const vt=["Pdf","Image","Markdown","Video","UnsupportedType","Email","Excel","Xml","Tiff","TiffWithPdfConversion","WithMimeTypeOverride","WithPdfViewerProps"];export{f as Email,u as Excel,d as Image,c as Markdown,m as Pdf,h as Tiff,w as TiffWithPdfConversion,l as UnsupportedType,p as Video,x as WithMimeTypeOverride,M as WithPdfViewerProps,g as Xml,vt as __namedExportsOrder,bt as default};
