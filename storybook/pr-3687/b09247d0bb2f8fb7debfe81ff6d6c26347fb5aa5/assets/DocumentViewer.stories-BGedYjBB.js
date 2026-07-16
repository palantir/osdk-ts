import{j as r,h as n,H as v}from"./iframe-CrHOx1Q8.js";import{D as i}from"./document-viewer-CcZvIJ7G.js";import{u as y,w as fe}from"./ExcelViewer-Cl61a8qF.js";import{p as M}from"./passthrough-6sm3BHV7.js";import"./preload-helper-CXayWngK.js";import"./index-DMCG3xvS.js";import"./EmailViewer-BdpSrFoq.js";import"./useMediaContents-a6e0gEjF.js";import"./spin-tRdp2H9W.js";import"./svgIconContainer-BKZ-ijoV.js";import"./error-KJx9m7U_.js";import"./ImageViewer-X6eQM55J.js";import"./BaseImageViewer-BLnnxumc.js";import"./TiffRenderer-LlGCzOAv.js";import"./index-YkV0U4e7.js";import"./MarkdownRenderer-B5vvjURk.js";import"./PdfRenderer-DLJm86fb.js";import"./PdfViewer-HTL38dhr.js";import"./PdfViewer.module.css-DCmAn4Vl.js";import"./PdfViewerAnnotationLayer-hmf-cyaH.js";import"./constants-DsXMS3N3.js";import"./usePdfDocument-BZypxpfz.js";import"./PdfViewerOutlineSidebar-Cb6Rscd3.js";import"./PdfViewerSidebarHeader-poVkXEbm.js";import"./useBaseUiId-DArlA0u-.js";import"./useControlled-B9N8AMtZ.js";import"./CompositeRoot-D8CMOf3c.js";import"./CompositeItem-DspzOklw.js";import"./ToolbarRootContext-DDfVXNE2.js";import"./composite-DFN3xlZh.js";import"./PdfViewerSearchBar-Cc1duUme.js";import"./chevron-up-CagCttpi.js";import"./chevron-down-DEWPOpLL.js";import"./cross-uK5bFuWa.js";import"./PdfViewerSidebar-tfb8uPI8.js";import"./index-6M1Fb5iF.js";import"./index-CTyGD713.js";import"./index-4uRgCZRg.js";import"./PdfViewerToolbar-VMcElzlU.js";import"./Button-DaCY62TH.js";import"./chevron-right-CWomVVBi.js";import"./Input-BAmvIJ-v.js";import"./search-qTaTsUfJ.js";import"./assertUnreachable-tCT10eXl.js";import"./VideoViewer-D8FoaAsC.js";import"./XmlViewer-CEkhVlSi.js";import"./useOsdkClient-BMoajR4u.js";import"./withOsdkMetrics-DgOo0yPz.js";const me="/osdk-ts/storybook/pr-3687/b09247d0bb2f8fb7debfe81ff6d6c26347fb5aa5/compressed.tracemonkey-pldi-09.pdf",le="/osdk-ts/storybook/pr-3687/b09247d0bb2f8fb7debfe81ff6d6c26347fb5aa5/example.mp4",ue="/osdk-ts/storybook/pr-3687/b09247d0bb2f8fb7debfe81ff6d6c26347fb5aa5/multi-page-tiff.tiff";function ge(){const e=document.createElement("canvas");e.width=200,e.height=200;const t=e.getContext("2d"),a=t.createLinearGradient(0,0,200,200);a.addColorStop(0,"#3b82f6"),a.addColorStop(.5,"#8b5cf6"),a.addColorStop(1,"#ec4899"),t.fillStyle=a,t.fillRect(0,0,200,200),t.fillStyle="white",t.font="bold 24px sans-serif",t.textAlign="center",t.textBaseline="middle",t.fillText("Sample",100,90),t.fillText("Image",100,120);const ce=e.toDataURL("image/png"),k=atob(ce.split(",")[1]),P=new Uint8Array(k.length);for(let s=0;s<k.length;s++)P[s]=k.charCodeAt(s);return new Blob([P],{type:"image/png"})}const he=`# Sample Document

This is a **sample markdown** document rendered by the DocumentViewer.

- Item 1
- Item 2
- Item 3
`;function o(e,t,a){return{fetchContents:t,fetchMetadata:()=>Promise.resolve({path:a,sizeBytes:1024,mediaType:e}),getMediaReference:()=>({mimeType:e,reference:{type:"mediaSetViewItem",mediaSetViewItem:{mediaItemRid:"ri.mio.main.media-item.mock",mediaSetRid:"ri.mio.main.media-set.mock-set",mediaSetViewRid:"ri.mio.main.media-set-view.mock-view"}}})}}const we=ge(),S=o("application/pdf",()=>fetch(me),"document.pdf"),be=o("image/png",()=>Promise.resolve(new Response(we)),"photo.png"),xe=o("text/markdown",()=>Promise.resolve(new Response(he)),"readme.md"),Me=o("video/mp4",()=>fetch(le),"example.mp4"),ke=`From: Alice <alice@example.com>
To: Bob <bob@example.com>
Subject: Test Email
Date: Sun, 15 Mar 2026 14:30:00 +0000
Content-Type: text/html; charset=utf-8

<html><body><p>Hello Bob!</p></body></html>
`,ve=o("message/rfc822",()=>Promise.resolve(new Response(ke)),"message.eml"),ye=`<?xml version="1.0"?>
<catalog>
  <book id="1">
    <title>XML Developer's Guide</title>
    <price>44.95</price>
  </book>
</catalog>`,Se=o("application/xml",()=>Promise.resolve(new Response(ye)),"data.xml");function Pe(){const e=y.aoa_to_sheet([["Name","Department","Salary"],["Alice","Engineering","$145,000"],["Bob","Marketing","$120,000"]]),t=y.book_new();y.book_append_sheet(t,e,"Sheet1");const a=fe(t,{type:"array",bookType:"xlsx"});return o("application/vnd.openxmlformats-officedocument.spreadsheetml.sheet",()=>Promise.resolve(new Response(a)),"report.xlsx")}const De=Pe(),de=o("image/tiff",()=>fetch(ue),"multi-page-tiff.tiff"),pe=o("application/octet-stream",()=>Promise.resolve(new Response("")),"data.bin"),kt={title:"Components/DocumentViewer",component:i,tags:["beta"],args:{media:S},render:e=>r.jsx("div",{style:{height:"600px",width:"100%"},children:r.jsx(i,{...e})}),parameters:{controls:{expanded:!0}},argTypes:{media:{description:"The OSDK Media object to render",control:!1},className:{description:"Additional CSS class name for the root element",control:"text"},mimeTypeOverride:{description:"Override the auto-detected MIME type",control:"text"}}},m={args:{media:S},parameters:{docs:{source:{code:`import { DocumentViewer } from "@osdk/react-components/experimental/document-viewer";

<DocumentViewer media={employee.trainingMaterial} />`}}}},d={args:{media:be},render:e=>r.jsx("div",{style:{height:"400px",width:"400px"},children:r.jsx(i,{...e})})},p={args:{media:xe}},c={args:{media:Me},render:e=>r.jsx("div",{style:{height:"400px",width:"600px"},children:r.jsx(i,{...e})}),parameters:{msw:{handlers:[n.get("*/example.mp4",()=>M())]}}},f={args:{media:pe},render:e=>r.jsx("div",{style:{height:"200px",width:"400px"},children:r.jsx(i,{...e})})},l={args:{media:ve}},u={args:{media:De}},g={args:{media:Se},render:e=>r.jsx("div",{style:{height:"400px",width:"600px"},children:r.jsx(i,{...e})})},h={args:{media:de},parameters:{msw:{handlers:[n.get("*/multi-page-tiff.tiff",()=>M())]}}},w={args:{media:de,enableTiffToPdf:!0,fileName:"multi-page-tiff.tiff"},parameters:{msw:{handlers:[n.get("*/multi-page-tiff.tiff",()=>M()),n.get("*/compressed.tracemonkey-pldi-09.pdf",()=>M()),n.post("*/api/v2/mediasets/*/items/*/transform",()=>v.json({jobId:"mock-job-id",status:"SUCCESSFUL"})),n.get("*/api/v2/mediasets/*/items/*/transformationJobs/*/result",async()=>{const t=await(await fetch(me)).arrayBuffer();return new v(t,{headers:{"Content-Type":"application/pdf"}})}),n.get("*/api/v2/mediasets/*/items/*/transformationJobs/*",()=>v.json({status:"SUCCESSFUL"}))]},docs:{source:{code:`import { DocumentViewer } from "@osdk/react-components/experimental/document-viewer";

// Multi-page TIFFs are detected and converted to PDF via MIO transform API
// Falls back to TiffRenderer if transform fails or for single-page TIFFs
<DocumentViewer media={myMedia} enableTiffToPdf fileName="scan.tiff" />`}}}},b={args:{media:pe,mimeTypeOverride:"text/markdown"},parameters:{docs:{source:{code:`import { DocumentViewer } from "@osdk/react-components/experimental/document-viewer";

// Override auto-detected MIME type
<DocumentViewer media={myMedia} mimeTypeOverride="text/markdown" />`}}}},x={args:{media:S,pdfViewerProps:{initialSidebarOpen:!0,enableDownload:!0}},parameters:{docs:{source:{code:`import { DocumentViewer } from "@osdk/react-components/experimental/document-viewer";

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
}`,...(te=(ee=w.parameters)==null?void 0:ee.docs)==null?void 0:te.source}}};var re,oe,ae;b.parameters={...b.parameters,docs:{...(re=b.parameters)==null?void 0:re.docs,source:{originalSource:`{
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
}`,...(ae=(oe=b.parameters)==null?void 0:oe.docs)==null?void 0:ae.source}}};var ne,ie,se;x.parameters={...x.parameters,docs:{...(ne=x.parameters)==null?void 0:ne.docs,source:{originalSource:`{
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
}`,...(se=(ie=x.parameters)==null?void 0:ie.docs)==null?void 0:se.source}}};const vt=["Pdf","Image","Markdown","Video","UnsupportedType","Email","Excel","Xml","Tiff","TiffWithPdfConversion","WithMimeTypeOverride","WithPdfViewerProps"];export{l as Email,u as Excel,d as Image,p as Markdown,m as Pdf,h as Tiff,w as TiffWithPdfConversion,f as UnsupportedType,c as Video,b as WithMimeTypeOverride,x as WithPdfViewerProps,g as Xml,vt as __namedExportsOrder,kt as default};
