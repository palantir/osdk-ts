import{j as r,h as n,H as v}from"./iframe--BTIj_Lo.js";import{D as i}from"./document-viewer-DKBZenra.js";import{u as y,w as le}from"./ExcelViewer-ICHUTWBC.js";import{p as k}from"./passthrough-6sm3BHV7.js";import"./preload-helper-CEmb-Q6f.js";import"./index-5QzPu0zS.js";import"./EmailViewer-DZwA_yyX.js";import"./useMediaContents-CAGYQg4k.js";import"./spin-CPxSG_1l.js";import"./svgIconContainer-C8rvkcgB.js";import"./error-BmvmUc1M.js";import"./ImageViewer-kXSvp-cE.js";import"./BaseImageViewer-Bjxc0xUV.js";import"./TiffRenderer-BXX29ZV4.js";import"./index-YkV0U4e7.js";import"./MarkdownRenderer-Dkc9K79r.js";import"./PdfRenderer-wvcNzh_X.js";import"./PdfViewer-BrJ4IiRf.js";import"./PdfViewer.module.css-DsCvr7Vo.js";import"./PdfViewerAnnotationLayer-CeXAUSwU.js";import"./constants-DsXMS3N3.js";import"./usePdfDocument-BvQMagaP.js";import"./PdfViewerOutlineSidebar-CiAUI5Ky.js";import"./PdfViewerSidebarHeader-COlHRVa5.js";import"./useBaseUiId-DSI_fwKo.js";import"./useControlled-CmpAGulH.js";import"./CompositeRoot-BLZHLJxQ.js";import"./CompositeItem-BRO1zZpY.js";import"./ToolbarRootContext-D91fkyhg.js";import"./composite-T6EOkG9k.js";import"./PdfViewerSearchBar-Dh191Qif.js";import"./chevron-up-Cab7Y0hz.js";import"./chevron-down-BWTwUwIH.js";import"./cross-BVyqMvNZ.js";import"./PdfViewerSidebar-9Prgn1XP.js";import"./index-Dz-4UQu6.js";import"./index-DfEVhqks.js";import"./index-L2eSYA45.js";import"./PdfViewerToolbar-KYDCQXhA.js";import"./Button-BuCVTh2L.js";import"./chevron-right-BKc3pgzy.js";import"./Input-BB8CG86K.js";import"./search-CP4GV30M.js";import"./assertUnreachable-tCT10eXl.js";import"./VideoViewer-DJga-BmA.js";import"./XmlViewer-D-JoeMq1.js";import"./useOsdkClient-Dyw1dsoW.js";import"./withOsdkMetrics-DnOZdfps.js";const me="/osdk-ts/storybook/pr-3625/79c647c9953c6d18e2e890c6c5de52b25fa0d07e/compressed.tracemonkey-pldi-09.pdf",fe="/osdk-ts/storybook/pr-3625/79c647c9953c6d18e2e890c6c5de52b25fa0d07e/example.mp4",ue="/osdk-ts/storybook/pr-3625/79c647c9953c6d18e2e890c6c5de52b25fa0d07e/multi-page-tiff.tiff";function ge(){const e=document.createElement("canvas");e.width=200,e.height=200;const t=e.getContext("2d"),a=t.createLinearGradient(0,0,200,200);a.addColorStop(0,"#3b82f6"),a.addColorStop(.5,"#8b5cf6"),a.addColorStop(1,"#ec4899"),t.fillStyle=a,t.fillRect(0,0,200,200),t.fillStyle="white",t.font="bold 24px sans-serif",t.textAlign="center",t.textBaseline="middle",t.fillText("Sample",100,90),t.fillText("Image",100,120);const pe=e.toDataURL("image/png"),b=atob(pe.split(",")[1]),P=new Uint8Array(b.length);for(let s=0;s<b.length;s++)P[s]=b.charCodeAt(s);return new Blob([P],{type:"image/png"})}const he=`# Sample Document

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
