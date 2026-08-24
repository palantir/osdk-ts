import{j as t,h as i,H as M}from"./iframe-h1qnQQVx.js";import{D as a}from"./document-viewer-4I7jjkff.js";import{u as D,w as le}from"./SpreadsheetViewer-DXYb58BJ.js";import{p as V}from"./passthrough-6sm3BHV7.js";import"./preload-helper-ADovFD1C.js";import"./index-DD5KPom6.js";import"./EmailViewer-6GYv541R.js";import"./useMediaContents-DH2WD3Lb.js";import"./spin-EKFZA19f.js";import"./svgIconContainer-Ca3ASY3c.js";import"./error-DJpMatiu.js";import"./ImageViewer-D_8AO4YK.js";import"./BaseImageViewer-DJ7L80d6.js";import"./BaseTiffViewer-BGVmvV-T.js";import"./index-YkV0U4e7.js";import"./BaseMarkdownViewer-FSGrDIUG.js";import"./PdfViewer-CrMG5rvp.js";import"./BasePdfViewer-BntKwv4u.js";import"./BasePdfViewer.module.css-CYTvYHYd.js";import"./PdfViewerAnnotationLayer-AWh8kJjx.js";import"./constants-DsXMS3N3.js";import"./usePdfDocument-DKd31f_Y.js";import"./PdfViewerOutlineSidebar-C42a_IcY.js";import"./PdfViewerSidebarHeader-C9azxCeF.js";import"./useBaseUiId-hqOZCtk1.js";import"./useControlled-BQy-u6tQ.js";import"./CompositeRoot-D588C_s6.js";import"./CompositeItem-CTw2DdEJ.js";import"./ToolbarRootContext-BYONpLtc.js";import"./composite-DEzICmec.js";import"./PdfViewerSearchBar-Bhdx89El.js";import"./chevron-up-Bzvysagl.js";import"./chevron-down-CivjtU0i.js";import"./cross-D4ej-8wY.js";import"./PdfViewerSidebar-BZw26NMA.js";import"./index-BlgrCeK6.js";import"./index-YrVkhqd3.js";import"./index-XQODY1Mp.js";import"./PdfViewerToolbar-BuC5HsS3.js";import"./Button-dm1NzbtL.js";import"./chevron-right-whRUAWwG.js";import"./Input-Cf0RIFeN.js";import"./search-DcazpnHi.js";import"./assertUnreachable-tCT10eXl.js";import"./VideoViewer-CgUIEJxv.js";import"./XmlViewer-BvpTkz35.js";import"./useOsdkClient-D3paodEw.js";import"./withOsdkMetrics-DQ_0oDdX.js";const me="/osdk-ts/storybook/pr-3925/c8f3d99c08e2c72749135fbb7e204097239e21f3/compressed.tracemonkey-pldi-09.pdf",ue="/osdk-ts/storybook/pr-3925/c8f3d99c08e2c72749135fbb7e204097239e21f3/example.mp4",fe="/osdk-ts/storybook/pr-3925/c8f3d99c08e2c72749135fbb7e204097239e21f3/multi-page-tiff.tiff";function we(){const e=document.createElement("canvas");e.width=200,e.height=200;const r=e.getContext("2d"),n=r.createLinearGradient(0,0,200,200);n.addColorStop(0,"#3b82f6"),n.addColorStop(.5,"#8b5cf6"),n.addColorStop(1,"#ec4899"),r.fillStyle=n,r.fillRect(0,0,200,200),r.fillStyle="white",r.font="bold 24px sans-serif",r.textAlign="center",r.textBaseline="middle",r.fillText("Sample",100,90),r.fillText("Image",100,120);const pe=e.toDataURL("image/png"),v=atob(pe.split(",")[1]),S=new Uint8Array(v.length);for(let s=0;s<v.length;s++)S[s]=v.charCodeAt(s);return new Blob([S],{type:"image/png"})}const de=`# Sample Document

This is a **sample markdown** document rendered by the DocumentViewer.

- Item 1
- Item 2
- Item 3
`;function o(e,r,n){return{fetchContents:r,fetchMetadata:()=>Promise.resolve({path:n,sizeBytes:1024,mediaType:e}),getMediaReference:()=>({mimeType:e,reference:{type:"mediaSetViewItem",mediaSetViewItem:{mediaItemRid:"ri.mio.main.media-item.mock",mediaSetRid:"ri.mio.main.media-set.mock-set",mediaSetViewRid:"ri.mio.main.media-set-view.mock-view"}}})}}const he=we(),b=o("application/pdf",()=>fetch(me),"document.pdf"),ge=o("image/png",()=>Promise.resolve(new Response(he)),"photo.png"),xe=o("text/markdown",()=>Promise.resolve(new Response(de)),"readme.md"),ke=o("video/mp4",()=>fetch(ue),"example.mp4"),Ve=`From: Alice <alice@example.com>
To: Bob <bob@example.com>
Subject: Test Email
Date: Sun, 15 Mar 2026 14:30:00 +0000
Content-Type: text/html; charset=utf-8

<html><body><p>Hello Bob!</p></body></html>
`,ve=o("message/rfc822",()=>Promise.resolve(new Response(Ve)),"message.eml"),Me=`<?xml version="1.0"?>
<catalog>
  <book id="1">
    <title>XML Developer's Guide</title>
    <price>44.95</price>
  </book>
</catalog>`,De=o("application/xml",()=>Promise.resolve(new Response(Me)),"data.xml");function be(){const e=D.aoa_to_sheet([["Name","Department","Salary"],["Alice","Engineering","$145,000"],["Bob","Marketing","$120,000"]]),r=D.book_new();D.book_append_sheet(r,e,"Sheet1");const n=le(r,{type:"array",bookType:"xlsx"});return o("application/vnd.openxmlformats-officedocument.spreadsheetml.sheet",()=>Promise.resolve(new Response(n)),"report.xlsx")}const Se=be(),ce=o("image/tiff",()=>fetch(fe),"multi-page-tiff.tiff"),ye=o("application/octet-stream",()=>Promise.resolve(new Response("")),"data.bin"),Pe=o("application/octet-stream",()=>Promise.resolve(new Response(de)),"notes.dat"),Mr={title:"Components/DocumentViewer",component:a,tags:["beta"],args:{media:b},render:e=>t.jsx("div",{style:{height:"600px",width:"100%"},children:t.jsx(a,{...e})}),parameters:{controls:{expanded:!0}},argTypes:{media:{description:"The OSDK Media object to render",control:!1},className:{description:"Additional CSS class name for the root element",control:"text"},mimeTypeOverride:{description:"Override the auto-detected MIME type",control:"text"}}},m={args:{media:b},parameters:{docs:{source:{code:`import { DocumentViewer } from "@osdk/react-components/experimental/document-viewer";

<DocumentViewer media={employee.trainingMaterial} />`}}}},d={args:{media:ge},render:e=>t.jsx("div",{style:{height:"400px",width:"400px"},children:t.jsx(a,{...e})}),parameters:{docs:{source:{code:`import { DocumentViewer } from "@osdk/react-components/experimental/document-viewer";

// image/* media renders with the pan and zoom ImageViewer
<DocumentViewer media={employee.profilePhoto} />`}}}},c={args:{media:xe},parameters:{docs:{source:{code:`import { DocumentViewer } from "@osdk/react-components/experimental/document-viewer";

// text/markdown media renders with MarkdownViewer
<DocumentViewer media={project.readme} />`}}}},p={args:{media:ke},render:e=>t.jsx("div",{style:{height:"400px",width:"600px"},children:t.jsx(a,{...e})}),parameters:{msw:{handlers:[i.get("*/example.mp4",()=>V())]},docs:{source:{code:`import { DocumentViewer } from "@osdk/react-components/experimental/document-viewer";

// video/* media renders with VideoViewer
<DocumentViewer media={incident.bodyCamFootage} />`}}}},l={args:{media:ye},render:e=>t.jsx("div",{style:{height:"200px",width:"400px"},children:t.jsx(a,{...e})}),parameters:{docs:{source:{code:`import { DocumentViewer } from "@osdk/react-components/experimental/document-viewer";

// MIME types with no matching renderer fall back to a download prompt
<DocumentViewer media={record.rawAttachment} />`}}}},u={args:{media:ve},parameters:{docs:{source:{code:`import { DocumentViewer } from "@osdk/react-components/experimental/document-viewer";

// message/rfc822 media renders with EmailViewer
<DocumentViewer media={thread.originalMessage} />`}}}},f={args:{media:Se},parameters:{docs:{source:{code:`import { DocumentViewer } from "@osdk/react-components/experimental/document-viewer";

// xlsx / xls / csv media renders with SpreadsheetViewer
<DocumentViewer media={quarter.headcountReport} />`}}}},w={args:{media:De},render:e=>t.jsx("div",{style:{height:"400px",width:"600px"},children:t.jsx(a,{...e})}),parameters:{docs:{source:{code:`import { DocumentViewer } from "@osdk/react-components/experimental/document-viewer";

// application/xml media renders with the collapsible-tree XmlViewer
<DocumentViewer media={shipment.manifest} />`}}}},h={args:{media:ce},parameters:{msw:{handlers:[i.get("*/multi-page-tiff.tiff",()=>V())]},docs:{source:{code:`import { DocumentViewer } from "@osdk/react-components/experimental/document-viewer";

// image/tiff media renders with TiffViewer, which decodes in the browser.
// See "Tiff With Pdf Conversion" for server-side PDF conversion instead.
<DocumentViewer media={claim.scannedForm} />`}}}},g={args:{media:ce,enableTiffToPdf:!0,fileName:"multi-page-tiff.tiff"},parameters:{msw:{handlers:[i.get("*/multi-page-tiff.tiff",()=>V()),i.get("*/compressed.tracemonkey-pldi-09.pdf",()=>V()),i.post("*/api/v2/mediasets/*/items/*/transform",()=>M.json({jobId:"mock-job-id",status:"SUCCESSFUL"})),i.get("*/api/v2/mediasets/*/items/*/transformationJobs/*/result",async()=>{const r=await(await fetch(me)).arrayBuffer();return new M(r,{headers:{"Content-Type":"application/pdf"}})}),i.get("*/api/v2/mediasets/*/items/*/transformationJobs/*",()=>M.json({status:"SUCCESSFUL"}))]},docs:{source:{code:`import { DocumentViewer } from "@osdk/react-components/experimental/document-viewer";

// Multi-page TIFFs are detected and converted to PDF via MIO transform API
// Falls back to TiffViewer if transform fails or for single-page TIFFs
<DocumentViewer media={myMedia} enableTiffToPdf fileName="scan.tiff" />`}}}},x={args:{media:Pe,mimeTypeOverride:"text/markdown"},parameters:{docs:{source:{code:`import { DocumentViewer } from "@osdk/react-components/experimental/document-viewer";

// This media item reports "application/octet-stream", which would hit the
// unsupported-type fallback. The override forces the markdown renderer.
<DocumentViewer media={myMedia} mimeTypeOverride="text/markdown" />`}}}},k={args:{media:b,pdfViewerProps:{initialSidebarOpen:!0,enableDownload:!0}},parameters:{docs:{source:{code:`import { DocumentViewer } from "@osdk/react-components/experimental/document-viewer";

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
}`,...(R=(C=c.parameters)==null?void 0:C.docs)==null?void 0:R.source}}};var A,O,L;p.parameters={...p.parameters,docs:{...(A=p.parameters)==null?void 0:A.docs,source:{originalSource:`{
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
}`,...(L=(O=p.parameters)==null?void 0:O.docs)==null?void 0:L.source}}};var U,_,B;l.parameters={...l.parameters,docs:{...(U=l.parameters)==null?void 0:U.docs,source:{originalSource:`{
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
    media: mockMislabeledMarkdownMedia,
    mimeTypeOverride: "text/markdown"
  },
  parameters: {
    docs: {
      source: {
        code: \`import { DocumentViewer } from "@osdk/react-components/experimental/document-viewer";

// This media item reports "application/octet-stream", which would hit the
// unsupported-type fallback. The override forces the markdown renderer.
<DocumentViewer media={myMedia} mimeTypeOverride="text/markdown" />\`
      }
    }
  }
}`,...(ne=(oe=x.parameters)==null?void 0:oe.docs)==null?void 0:ne.source}}};var ie,ae,se;k.parameters={...k.parameters,docs:{...(ie=k.parameters)==null?void 0:ie.docs,source:{originalSource:`{
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
}`,...(se=(ae=k.parameters)==null?void 0:ae.docs)==null?void 0:se.source}}};const Dr=["Pdf","Image","Markdown","Video","UnsupportedType","Email","Spreadsheet","Xml","Tiff","TiffWithPdfConversion","WithMimeTypeOverride","WithPdfViewerProps"];export{u as Email,d as Image,c as Markdown,m as Pdf,f as Spreadsheet,h as Tiff,g as TiffWithPdfConversion,l as UnsupportedType,p as Video,x as WithMimeTypeOverride,k as WithPdfViewerProps,w as Xml,Dr as __namedExportsOrder,Mr as default};
