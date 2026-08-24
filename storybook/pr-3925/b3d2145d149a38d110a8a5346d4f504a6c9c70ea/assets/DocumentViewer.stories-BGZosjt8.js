import{j as t,h as a,H as M}from"./iframe-c92eWBTm.js";import{D as i}from"./document-viewer-YZ5JYhW6.js";import{u as D,w as le}from"./SpreadsheetViewer-DJITHHGA.js";import{p as k}from"./passthrough-6sm3BHV7.js";import"./preload-helper-C_mEB70A.js";import"./index-BNyL3dmc.js";import"./EmailViewer-D6MPTDSP.js";import"./useMediaContents-CcuXRVPd.js";import"./spin-CDYJIpma.js";import"./svgIconContainer-BR-sWY_B.js";import"./error-10PygTue.js";import"./ImageViewer-4Lzjgqvw.js";import"./BaseImageViewer-DUqadQjQ.js";import"./BaseTiffViewer-ETfjEcuQ.js";import"./index-YkV0U4e7.js";import"./BaseMarkdownViewer-CRJj4qHc.js";import"./PdfViewer-B7pvAB0f.js";import"./BasePdfViewer-CnEdd_9r.js";import"./BasePdfViewer.module.css-_jPKhLNB.js";import"./PdfViewerAnnotationLayer-DoffVJZm.js";import"./constants-DsXMS3N3.js";import"./usePdfDocument-CJARqCVu.js";import"./PdfViewerOutlineSidebar-DUZN-W3i.js";import"./PdfViewerSidebarHeader-xpBUIlNu.js";import"./useBaseUiId-CZByDVJ8.js";import"./useControlled-Caf6eOHS.js";import"./CompositeRoot-B1tqGphE.js";import"./CompositeItem-DP3vosw0.js";import"./ToolbarRootContext-BOIsQ_kh.js";import"./composite-DB4Ar6eT.js";import"./PdfViewerSearchBar-BY5lpwvR.js";import"./chevron-up-OPw4HblS.js";import"./chevron-down-Bx1a8QAg.js";import"./cross-DLdKHUYj.js";import"./PdfViewerSidebar-J17Claia.js";import"./index-wu_kXnGO.js";import"./index-DNCjgZgw.js";import"./index-DpNu15BD.js";import"./PdfViewerToolbar-DuGKXkJZ.js";import"./Button-BhSQs9el.js";import"./chevron-right-BlID4yDB.js";import"./Input-DX2QK7C5.js";import"./search-DUI8Keyd.js";import"./assertUnreachable-tCT10eXl.js";import"./VideoViewer-CoTdplsC.js";import"./XmlViewer-Dgsaynag.js";import"./useOsdkClient-C_evHfwa.js";import"./withOsdkMetrics-3UcJmunM.js";const me="/osdk-ts/storybook/pr-3925/b3d2145d149a38d110a8a5346d4f504a6c9c70ea/compressed.tracemonkey-pldi-09.pdf",ue="/osdk-ts/storybook/pr-3925/b3d2145d149a38d110a8a5346d4f504a6c9c70ea/example.mp4",fe="/osdk-ts/storybook/pr-3925/b3d2145d149a38d110a8a5346d4f504a6c9c70ea/multi-page-tiff.tiff";function we(){const e=document.createElement("canvas");e.width=200,e.height=200;const r=e.getContext("2d"),n=r.createLinearGradient(0,0,200,200);n.addColorStop(0,"#3b82f6"),n.addColorStop(.5,"#8b5cf6"),n.addColorStop(1,"#ec4899"),r.fillStyle=n,r.fillRect(0,0,200,200),r.fillStyle="white",r.font="bold 24px sans-serif",r.textAlign="center",r.textBaseline="middle",r.fillText("Sample",100,90),r.fillText("Image",100,120);const pe=e.toDataURL("image/png"),v=atob(pe.split(",")[1]),S=new Uint8Array(v.length);for(let s=0;s<v.length;s++)S[s]=v.charCodeAt(s);return new Blob([S],{type:"image/png"})}const he=`# Sample Document

This is a **sample markdown** document rendered by the DocumentViewer.

- Item 1
- Item 2
- Item 3
`;function o(e,r,n){return{fetchContents:r,fetchMetadata:()=>Promise.resolve({path:n,sizeBytes:1024,mediaType:e}),getMediaReference:()=>({mimeType:e,reference:{type:"mediaSetViewItem",mediaSetViewItem:{mediaItemRid:"ri.mio.main.media-item.mock",mediaSetRid:"ri.mio.main.media-set.mock-set",mediaSetViewRid:"ri.mio.main.media-set-view.mock-view"}}})}}const ge=we(),b=o("application/pdf",()=>fetch(me),"document.pdf"),xe=o("image/png",()=>Promise.resolve(new Response(ge)),"photo.png"),Ve=o("text/markdown",()=>Promise.resolve(new Response(he)),"readme.md"),ke=o("video/mp4",()=>fetch(ue),"example.mp4"),ve=`From: Alice <alice@example.com>
To: Bob <bob@example.com>
Subject: Test Email
Date: Sun, 15 Mar 2026 14:30:00 +0000
Content-Type: text/html; charset=utf-8

<html><body><p>Hello Bob!</p></body></html>
`,Me=o("message/rfc822",()=>Promise.resolve(new Response(ve)),"message.eml"),De=`<?xml version="1.0"?>
<catalog>
  <book id="1">
    <title>XML Developer's Guide</title>
    <price>44.95</price>
  </book>
</catalog>`,be=o("application/xml",()=>Promise.resolve(new Response(De)),"data.xml");function Se(){const e=D.aoa_to_sheet([["Name","Department","Salary"],["Alice","Engineering","$145,000"],["Bob","Marketing","$120,000"]]),r=D.book_new();D.book_append_sheet(r,e,"Sheet1");const n=le(r,{type:"array",bookType:"xlsx"});return o("application/vnd.openxmlformats-officedocument.spreadsheetml.sheet",()=>Promise.resolve(new Response(n)),"report.xlsx")}const ye=Se(),de=o("image/tiff",()=>fetch(fe),"multi-page-tiff.tiff"),ce=o("application/octet-stream",()=>Promise.resolve(new Response("")),"data.bin"),vr={title:"Components/DocumentViewer",component:i,tags:["beta"],args:{media:b},render:e=>t.jsx("div",{style:{height:"600px",width:"100%"},children:t.jsx(i,{...e})}),parameters:{controls:{expanded:!0}},argTypes:{media:{description:"The OSDK Media object to render",control:!1},className:{description:"Additional CSS class name for the root element",control:"text"},mimeTypeOverride:{description:"Override the auto-detected MIME type",control:"text"}}},m={args:{media:b},parameters:{docs:{source:{code:`import { DocumentViewer } from "@osdk/react-components/experimental/document-viewer";

<DocumentViewer media={employee.trainingMaterial} />`}}}},d={args:{media:xe},render:e=>t.jsx("div",{style:{height:"400px",width:"400px"},children:t.jsx(i,{...e})}),parameters:{docs:{source:{code:`import { DocumentViewer } from "@osdk/react-components/experimental/document-viewer";

// image/* media renders with the pan and zoom ImageViewer
<DocumentViewer media={employee.profilePhoto} />`}}}},c={args:{media:Ve},parameters:{docs:{source:{code:`import { DocumentViewer } from "@osdk/react-components/experimental/document-viewer";

// text/markdown media renders with MarkdownViewer
<DocumentViewer media={project.readme} />`}}}},p={args:{media:ke},render:e=>t.jsx("div",{style:{height:"400px",width:"600px"},children:t.jsx(i,{...e})}),parameters:{msw:{handlers:[a.get("*/example.mp4",()=>k())]},docs:{source:{code:`import { DocumentViewer } from "@osdk/react-components/experimental/document-viewer";

// video/* media renders with VideoViewer
<DocumentViewer media={incident.bodyCamFootage} />`}}}},l={args:{media:ce},render:e=>t.jsx("div",{style:{height:"200px",width:"400px"},children:t.jsx(i,{...e})}),parameters:{docs:{source:{code:`import { DocumentViewer } from "@osdk/react-components/experimental/document-viewer";

// MIME types with no matching renderer fall back to a download prompt
<DocumentViewer media={record.rawAttachment} />`}}}},u={args:{media:Me},parameters:{docs:{source:{code:`import { DocumentViewer } from "@osdk/react-components/experimental/document-viewer";

// message/rfc822 media renders with EmailViewer
<DocumentViewer media={thread.originalMessage} />`}}}},f={args:{media:ye},parameters:{docs:{source:{code:`import { DocumentViewer } from "@osdk/react-components/experimental/document-viewer";

// xlsx / xls / csv media renders with SpreadsheetViewer
<DocumentViewer media={quarter.headcountReport} />`}}}},w={args:{media:be},render:e=>t.jsx("div",{style:{height:"400px",width:"600px"},children:t.jsx(i,{...e})}),parameters:{docs:{source:{code:`import { DocumentViewer } from "@osdk/react-components/experimental/document-viewer";

// application/xml media renders with the collapsible-tree XmlViewer
<DocumentViewer media={shipment.manifest} />`}}}},h={args:{media:de},parameters:{msw:{handlers:[a.get("*/multi-page-tiff.tiff",()=>k())]},docs:{source:{code:`import { DocumentViewer } from "@osdk/react-components/experimental/document-viewer";

// image/tiff media renders with TiffViewer, which decodes in the browser.
// See "Tiff With Pdf Conversion" for server-side PDF conversion instead.
<DocumentViewer media={claim.scannedForm} />`}}}},g={args:{media:de,enableTiffToPdf:!0,fileName:"multi-page-tiff.tiff"},parameters:{msw:{handlers:[a.get("*/multi-page-tiff.tiff",()=>k()),a.get("*/compressed.tracemonkey-pldi-09.pdf",()=>k()),a.post("*/api/v2/mediasets/*/items/*/transform",()=>M.json({jobId:"mock-job-id",status:"SUCCESSFUL"})),a.get("*/api/v2/mediasets/*/items/*/transformationJobs/*/result",async()=>{const r=await(await fetch(me)).arrayBuffer();return new M(r,{headers:{"Content-Type":"application/pdf"}})}),a.get("*/api/v2/mediasets/*/items/*/transformationJobs/*",()=>M.json({status:"SUCCESSFUL"}))]},docs:{source:{code:`import { DocumentViewer } from "@osdk/react-components/experimental/document-viewer";

// Multi-page TIFFs are detected and converted to PDF via MIO transform API
// Falls back to TiffViewer if transform fails or for single-page TIFFs
<DocumentViewer media={myMedia} enableTiffToPdf fileName="scan.tiff" />`}}}},x={args:{media:ce,mimeTypeOverride:"text/markdown"},parameters:{docs:{source:{code:`import { DocumentViewer } from "@osdk/react-components/experimental/document-viewer";

// Override auto-detected MIME type
<DocumentViewer media={myMedia} mimeTypeOverride="text/markdown" />`}}}},V={args:{media:b,pdfViewerProps:{initialSidebarOpen:!0,enableDownload:!0}},parameters:{docs:{source:{code:`import { DocumentViewer } from "@osdk/react-components/experimental/document-viewer";

<DocumentViewer
  media={myMedia}
  pdfViewerProps={{
    initialSidebarOpen: true,
    enableDownload: true,
  }}
/>`}}}};var y,P,T;m.parameters={...m.parameters,docs:{...(y=m.parameters)==null?void 0:y.docs,source:{originalSource:`{
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
}`,...(T=(P=m.parameters)==null?void 0:P.docs)==null?void 0:T.source}}};var I,E,F;d.parameters={...d.parameters,docs:{...(I=d.parameters)==null?void 0:I.docs,source:{originalSource:`{
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
}`,...(F=(E=d.parameters)==null?void 0:E.docs)==null?void 0:F.source}}};var j,C,R;c.parameters={...c.parameters,docs:{...(j=c.parameters)==null?void 0:j.docs,source:{originalSource:`{
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
}`,...(R=(C=c.parameters)==null?void 0:C.docs)==null?void 0:R.source}}};var O,A,L;p.parameters={...p.parameters,docs:{...(O=p.parameters)==null?void 0:O.docs,source:{originalSource:`{
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
}`,...(L=(A=p.parameters)==null?void 0:A.docs)==null?void 0:L.source}}};var U,_,B;l.parameters={...l.parameters,docs:{...(U=l.parameters)==null?void 0:U.docs,source:{originalSource:`{
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
}`,...(B=(_=l.parameters)==null?void 0:_.docs)==null?void 0:B.source}}};var W,X,N;u.parameters={...u.parameters,docs:{...(W=u.parameters)==null?void 0:W.docs,source:{originalSource:`{
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
}`,...(N=(X=u.parameters)==null?void 0:X.docs)==null?void 0:N.source}}};var H,$,J;f.parameters={...f.parameters,docs:{...(H=f.parameters)==null?void 0:H.docs,source:{originalSource:`{
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
}`,...(J=($=f.parameters)==null?void 0:$.docs)==null?void 0:J.source}}};var z,q,G;w.parameters={...w.parameters,docs:{...(z=w.parameters)==null?void 0:z.docs,source:{originalSource:`{
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
}`,...(G=(q=w.parameters)==null?void 0:q.docs)==null?void 0:G.source}}};var K,Q,Y;h.parameters={...h.parameters,docs:{...(K=h.parameters)==null?void 0:K.docs,source:{originalSource:`{
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
}`,...(Y=(Q=h.parameters)==null?void 0:Q.docs)==null?void 0:Y.source}}};var Z,ee,re;g.parameters={...g.parameters,docs:{...(Z=g.parameters)==null?void 0:Z.docs,source:{originalSource:`{
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
}`,...(re=(ee=g.parameters)==null?void 0:ee.docs)==null?void 0:re.source}}};var te,oe,ne;x.parameters={...x.parameters,docs:{...(te=x.parameters)==null?void 0:te.docs,source:{originalSource:`{
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
}`,...(ne=(oe=x.parameters)==null?void 0:oe.docs)==null?void 0:ne.source}}};var ae,ie,se;V.parameters={...V.parameters,docs:{...(ae=V.parameters)==null?void 0:ae.docs,source:{originalSource:`{
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
}`,...(se=(ie=V.parameters)==null?void 0:ie.docs)==null?void 0:se.source}}};const Mr=["Pdf","Image","Markdown","Video","UnsupportedType","Email","Spreadsheet","Xml","Tiff","TiffWithPdfConversion","WithMimeTypeOverride","WithPdfViewerProps"];export{u as Email,d as Image,c as Markdown,m as Pdf,f as Spreadsheet,h as Tiff,g as TiffWithPdfConversion,l as UnsupportedType,p as Video,x as WithMimeTypeOverride,V as WithPdfViewerProps,w as Xml,Mr as __namedExportsOrder,vr as default};
