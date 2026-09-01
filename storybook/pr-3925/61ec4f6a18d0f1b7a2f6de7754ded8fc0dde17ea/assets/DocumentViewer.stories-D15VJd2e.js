import{j as t,h as i,H as V}from"./iframe-C3MdTHLQ.js";import{D as n}from"./document-viewer-DRvAm15e.js";import{u as S,w as le}from"./SpreadsheetViewer-BO0LUkjA.js";import{p as k}from"./passthrough-6sm3BHV7.js";import"./preload-helper-3M0V84kL.js";import"./index-BgVlrX6R.js";import"./EmailViewer-CFAo-s7d.js";import"./useMediaContents-BNq26yUV.js";import"./spin-DC042GIK.js";import"./svgIconContainer-CipT1sHW.js";import"./error-Kr8BQL-e.js";import"./ImageViewer-DmtqI_89.js";import"./BaseImageViewer-Bbehauvm.js";import"./BaseTiffViewer-BhcR1D_2.js";import"./index-YkV0U4e7.js";import"./BaseMarkdownViewer-CHCyvYat.js";import"./PdfViewer-fY-oIv-6.js";import"./BasePdfViewer-nDnH3zlH.js";import"./BasePdfViewer.module.css-DbNCORdZ.js";import"./PdfViewerAnnotationLayer-BLz6qaKO.js";import"./constants-DsXMS3N3.js";import"./usePdfDocument-DS0zskdb.js";import"./PdfViewerOutlineSidebar-CoHkFs7w.js";import"./PdfViewerSidebarHeader-DV2QTITJ.js";import"./useBaseUiId-BY9bLyd_.js";import"./useControlled-BVKJ7vS7.js";import"./CompositeRoot-BbWpjOq1.js";import"./CompositeItem-DM0NOOVO.js";import"./ToolbarRootContext-DIyGn2ca.js";import"./composite-BNzQ7X-x.js";import"./PdfViewerSearchBar-ZhwO2D4-.js";import"./chevron-up-DjCQxjNB.js";import"./chevron-down-kdwD8AzF.js";import"./cross-Bgd4sC_w.js";import"./PdfViewerSidebar-Bxjxt0w7.js";import"./index-CoAkWlDV.js";import"./index-CbVfK8fT.js";import"./index-BHAP5gqn.js";import"./PdfViewerToolbar-DO2HdC7p.js";import"./Button-cJHIlP8z.js";import"./chevron-right-Dphc1biU.js";import"./Input-Dv1jlKn1.js";import"./search-7cyOXxuf.js";import"./assertUnreachable-tCT10eXl.js";import"./VideoViewer-mnkBxXW9.js";import"./XmlViewer-aRZTZyHb.js";import"./useOsdkClient-D17MJqfm.js";import"./withOsdkMetrics-C_vOiZra.js";const me="/osdk-ts/storybook/pr-3925/61ec4f6a18d0f1b7a2f6de7754ded8fc0dde17ea/compressed.tracemonkey-pldi-09.pdf",fe="/osdk-ts/storybook/pr-3925/61ec4f6a18d0f1b7a2f6de7754ded8fc0dde17ea/example.mp4",ue="/osdk-ts/storybook/pr-3925/61ec4f6a18d0f1b7a2f6de7754ded8fc0dde17ea/multi-page-tiff.tiff";function he(){const e=document.createElement("canvas");e.width=200,e.height=200;const r=e.getContext("2d"),a=r.createLinearGradient(0,0,200,200);a.addColorStop(0,"#3b82f6"),a.addColorStop(.5,"#8b5cf6"),a.addColorStop(1,"#ec4899"),r.fillStyle=a,r.fillRect(0,0,200,200),r.fillStyle="white",r.font="bold 24px sans-serif",r.textAlign="center",r.textBaseline="middle",r.fillText("Sample",100,90),r.fillText("Image",100,120);const d=e.toDataURL("image/png"),s=atob(d.split(",")[1]),D=new Uint8Array(s.length);for(let m=0;m<s.length;m++)D[m]=s.charCodeAt(m);return new Blob([D],{type:"image/png"})}const ce=`# Sample Document

This is a **sample markdown** document rendered by the DocumentViewer.

- Item 1
- Item 2
- Item 3
`;function o(e,r,a){return{fetchContents:r,fetchMetadata:()=>Promise.resolve({path:a,sizeBytes:1024,mediaType:e}),getMediaReference:()=>({mimeType:e,reference:{type:"mediaSetViewItem",mediaSetViewItem:{mediaItemRid:"ri.mio.main.media-item.mock",mediaSetRid:"ri.mio.main.media-set.mock-set",mediaSetViewRid:"ri.mio.main.media-set-view.mock-view"}}})}}const we=he(),v=o("application/pdf",()=>fetch(me),"document.pdf"),ge=o("image/png",()=>Promise.resolve(new Response(we)),"photo.png"),xe=o("text/markdown",()=>Promise.resolve(new Response(ce)),"readme.md"),Me=o("video/mp4",()=>fetch(fe),"example.mp4"),ye=`From: Alice <alice@example.com>
To: Bob <bob@example.com>
Subject: Test Email
Date: Sun, 15 Mar 2026 14:30:00 +0000
Content-Type: text/html; charset=utf-8

<html><body><p>Hello Bob!</p></body></html>
`,be=o("message/rfc822",()=>Promise.resolve(new Response(ye)),"message.eml"),ke=`<?xml version="1.0"?>
<catalog>
  <book id="1">
    <title>XML Developer's Guide</title>
    <price>44.95</price>
  </book>
</catalog>`,Ve=o("application/xml",()=>Promise.resolve(new Response(ke)),"data.xml");function Se(){const e=S.aoa_to_sheet([["Name","Department","Salary"],["Alice","Engineering","$145,000"],["Bob","Marketing","$120,000"]]),r=S.book_new();S.book_append_sheet(r,e,"Sheet1");const a=le(r,{type:"array",bookType:"xlsx"});return o("application/vnd.openxmlformats-officedocument.spreadsheetml.sheet",()=>Promise.resolve(new Response(a)),"report.xlsx")}const ve=Se(),pe=o("image/tiff",()=>fetch(ue),"multi-page-tiff.tiff"),De=o("application/octet-stream",()=>Promise.resolve(new Response("")),"data.bin"),Pe=o("application/octet-stream",()=>Promise.resolve(new Response(ce)),"notes.dat"),Vr={title:"Components/DocumentViewer",component:n,tags:["beta"],args:{media:v},render:e=>t.jsx("div",{style:{height:"600px",width:"100%"},children:t.jsx(n,{...e})}),parameters:{controls:{expanded:!0}},argTypes:{media:{description:"The OSDK Media object to render",control:!1},className:{description:"Additional CSS class name for the root element",control:"text"},mimeTypeOverride:{description:"Override the auto-detected MIME type",control:"text"}}},c={args:{media:v},parameters:{docs:{source:{code:"<DocumentViewer media={employee.trainingMaterial} />"}}}},p={args:{media:ge},render:e=>t.jsx("div",{style:{height:"400px",width:"400px"},children:t.jsx(n,{...e})}),parameters:{docs:{source:{code:`// image/* media renders with the pan and zoom ImageViewer
<DocumentViewer media={employee.profilePhoto} />`}}}},l={args:{media:xe},parameters:{docs:{source:{code:`// text/markdown media renders with MarkdownViewer
<DocumentViewer media={project.readme} />`}}}},f={args:{media:Me},render:e=>t.jsx("div",{style:{height:"400px",width:"600px"},children:t.jsx(n,{...e})}),parameters:{msw:{handlers:[i.get("*/example.mp4",()=>k())]},docs:{source:{code:`// video/* media renders with VideoViewer
<DocumentViewer media={incident.bodyCamFootage} />`}}}},u={args:{media:De},render:e=>t.jsx("div",{style:{height:"200px",width:"400px"},children:t.jsx(n,{...e})}),parameters:{docs:{source:{code:`// MIME types with no matching renderer fall back to a download prompt
<DocumentViewer media={record.rawAttachment} />`}}}},h={args:{media:be},parameters:{docs:{source:{code:`// message/rfc822 media renders with EmailViewer
<DocumentViewer media={thread.originalMessage} />`}}}},w={args:{media:ve},parameters:{docs:{source:{code:`// xlsx / xls / csv media renders with SpreadsheetViewer
<DocumentViewer media={quarter.headcountReport} />`}}}},g={args:{media:Ve},render:e=>t.jsx("div",{style:{height:"400px",width:"600px"},children:t.jsx(n,{...e})}),parameters:{docs:{source:{code:`// application/xml media renders with the collapsible-tree XmlViewer
<DocumentViewer media={shipment.manifest} />`}}}},x={args:{media:pe},parameters:{msw:{handlers:[i.get("*/multi-page-tiff.tiff",()=>k())]},docs:{source:{code:`// image/tiff media renders with TiffViewer, which decodes in the browser.
// See "Tiff With Pdf Conversion" for server-side PDF conversion instead.
<DocumentViewer media={claim.scannedForm} />`}}}},M={args:{media:pe,enableTiffToPdf:!0,fileName:"multi-page-tiff.tiff"},parameters:{msw:{handlers:[i.get("*/multi-page-tiff.tiff",()=>k()),i.get("*/compressed.tracemonkey-pldi-09.pdf",()=>k()),i.post("*/api/v2/mediasets/*/items/*/transform",()=>V.json({jobId:"mock-job-id",status:"SUCCESSFUL"})),i.get("*/api/v2/mediasets/*/items/*/transformationJobs/*/result",async()=>{const r=await(await fetch(me)).arrayBuffer();return new V(r,{headers:{"Content-Type":"application/pdf"}})}),i.get("*/api/v2/mediasets/*/items/*/transformationJobs/*",()=>V.json({status:"SUCCESSFUL"}))]},docs:{source:{code:`// Multi-page TIFFs are detected and converted to PDF via MIO transform API
// Falls back to TiffViewer if transform fails or for single-page TIFFs
<DocumentViewer media={myMedia} enableTiffToPdf fileName="scan.tiff" />`}}}};function Te({media:e,mimeTypeOverride:r,...a}){const d=e.getMediaReference().mimeType,s=r??d;return t.jsxs("div",{style:{display:"flex",flexDirection:"column",gap:"8px",height:"600px"},children:[t.jsxs("dl",{style:{display:"grid",gridTemplateColumns:"auto 1fr",gap:"4px 12px",margin:0,padding:"12px",border:"1px solid currentColor",borderRadius:"4px",fontSize:"12px",lineHeight:1.5,opacity:.85},children:[t.jsx("dt",{style:{opacity:.7},children:"Reported by media"}),t.jsx("dd",{style:{margin:0,fontFamily:"monospace"},children:d}),t.jsx("dt",{style:{opacity:.7},children:"mimeTypeOverride"}),t.jsx("dd",{style:{margin:0,fontFamily:"monospace"},children:r??"(unset)"}),t.jsx("dt",{style:{opacity:.7},children:"Dispatched on"}),t.jsxs("dd",{style:{margin:0,fontFamily:"monospace"},children:[s,r!=null?" (from the override)":""]})]}),t.jsx("div",{style:{flex:1,minHeight:0},children:t.jsx(n,{media:e,mimeTypeOverride:r,...a})})]})}const y={args:{media:Pe,mimeTypeOverride:"text/markdown"},render:e=>t.jsx(Te,{...e}),parameters:{docs:{source:{code:`// This media item reports "application/octet-stream", which would hit the
// unsupported-type fallback. The override makes DocumentViewer dispatch on
// "text/markdown" instead, so MarkdownViewer handles it.
<DocumentViewer media={myMedia} mimeTypeOverride="text/markdown" />`}}}},b={args:{media:v,pdfViewerProps:{initialSidebarOpen:!0,enableDownload:!0}},parameters:{docs:{source:{code:`<DocumentViewer
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
        code: \`<DocumentViewer media={employee.trainingMaterial} />\`
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
        code: \`// image/* media renders with the pan and zoom ImageViewer
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
        code: \`// text/markdown media renders with MarkdownViewer
<DocumentViewer media={project.readme} />\`
      }
    }
  }
}`,...(A=(E=l.parameters)==null?void 0:E.docs)==null?void 0:A.source}}};var O,L,U;f.parameters={...f.parameters,docs:{...(O=f.parameters)==null?void 0:O.docs,source:{originalSource:`{
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
        code: \`// video/* media renders with VideoViewer
<DocumentViewer media={incident.bodyCamFootage} />\`
      }
    }
  }
}`,...(U=(L=f.parameters)==null?void 0:L.docs)==null?void 0:U.source}}};var _,B,W;u.parameters={...u.parameters,docs:{...(_=u.parameters)==null?void 0:_.docs,source:{originalSource:`{
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
        code: \`// MIME types with no matching renderer fall back to a download prompt
<DocumentViewer media={record.rawAttachment} />\`
      }
    }
  }
}`,...(W=(B=u.parameters)==null?void 0:B.docs)==null?void 0:W.source}}};var H,X,N;h.parameters={...h.parameters,docs:{...(H=h.parameters)==null?void 0:H.docs,source:{originalSource:`{
  args: {
    media: mockEmailMedia
  },
  parameters: {
    docs: {
      source: {
        code: \`// message/rfc822 media renders with EmailViewer
<DocumentViewer media={thread.originalMessage} />\`
      }
    }
  }
}`,...(N=(X=h.parameters)==null?void 0:X.docs)==null?void 0:N.source}}};var $,z,J;w.parameters={...w.parameters,docs:{...($=w.parameters)==null?void 0:$.docs,source:{originalSource:`{
  args: {
    media: mockSpreadsheetMedia
  },
  parameters: {
    docs: {
      source: {
        code: \`// xlsx / xls / csv media renders with SpreadsheetViewer
<DocumentViewer media={quarter.headcountReport} />\`
      }
    }
  }
}`,...(J=(z=w.parameters)==null?void 0:z.docs)==null?void 0:J.source}}};var q,G,K;g.parameters={...g.parameters,docs:{...(q=g.parameters)==null?void 0:q.docs,source:{originalSource:`{
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
        code: \`// application/xml media renders with the collapsible-tree XmlViewer
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
        code: \`// image/tiff media renders with TiffViewer, which decodes in the browser.
// See "Tiff With Pdf Conversion" for server-side PDF conversion instead.
<DocumentViewer media={claim.scannedForm} />\`
      }
    }
  }
}`,...(Z=(Y=x.parameters)==null?void 0:Y.docs)==null?void 0:Z.source}}};var ee,re,te;M.parameters={...M.parameters,docs:{...(ee=M.parameters)==null?void 0:ee.docs,source:{originalSource:`{
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
        code: \`// Multi-page TIFFs are detected and converted to PDF via MIO transform API
// Falls back to TiffViewer if transform fails or for single-page TIFFs
<DocumentViewer media={myMedia} enableTiffToPdf fileName="scan.tiff" />\`
      }
    }
  }
}`,...(te=(re=M.parameters)==null?void 0:re.docs)==null?void 0:te.source}}};var ae,oe,ie;y.parameters={...y.parameters,docs:{...(ae=y.parameters)==null?void 0:ae.docs,source:{originalSource:`{
  args: {
    media: mockMislabeledMarkdownMedia,
    mimeTypeOverride: "text/markdown"
  },
  render: (args: DocumentViewerProps) => <MimeTypeOverrideDemo {...args} />,
  parameters: {
    docs: {
      source: {
        code: \`// This media item reports "application/octet-stream", which would hit the
// unsupported-type fallback. The override makes DocumentViewer dispatch on
// "text/markdown" instead, so MarkdownViewer handles it.
<DocumentViewer media={myMedia} mimeTypeOverride="text/markdown" />\`
      }
    }
  }
}`,...(ie=(oe=y.parameters)==null?void 0:oe.docs)==null?void 0:ie.source}}};var ne,se,de;b.parameters={...b.parameters,docs:{...(ne=b.parameters)==null?void 0:ne.docs,source:{originalSource:`{
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
        code: \`<DocumentViewer
  media={myMedia}
  pdfViewerProps={{
    initialSidebarOpen: true,
    enableDownload: true,
  }}
/>\`
      }
    }
  }
}`,...(de=(se=b.parameters)==null?void 0:se.docs)==null?void 0:de.source}}};const Sr=["Pdf","Image","Markdown","Video","UnsupportedType","Email","Spreadsheet","Xml","Tiff","TiffWithPdfConversion","WithMimeTypeOverride","WithPdfViewerProps"];export{h as Email,p as Image,l as Markdown,c as Pdf,w as Spreadsheet,x as Tiff,M as TiffWithPdfConversion,u as UnsupportedType,f as Video,y as WithMimeTypeOverride,b as WithPdfViewerProps,g as Xml,Sr as __namedExportsOrder,Vr as default};
