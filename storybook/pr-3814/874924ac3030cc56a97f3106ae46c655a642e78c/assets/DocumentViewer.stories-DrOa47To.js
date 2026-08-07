import{j as r,h as n,H as k}from"./iframe-B9T5oMDr.js";import{D as i}from"./document-viewer-CbXlVOXk.js";import{u as S,w as he}from"./SpreadsheetViewer-pe1zZ3E6.js";import{p as x}from"./passthrough-6sm3BHV7.js";import"./preload-helper-BPAbrKbo.js";import"./index-BbzHpAd2.js";import"./EmailViewer-DztxpsI7.js";import"./useMediaContents-DFyFANCx.js";import"./spin-b2_RmMc8.js";import"./svgIconContainer-DzM4Ci-u.js";import"./error-Con-Q4S3.js";import"./ImageViewer-dV9rD-qF.js";import"./BaseImageViewer-Dt-V97vv.js";import"./TiffRenderer-BDvOkjo7.js";import"./index-YkV0U4e7.js";import"./MarkdownRenderer-BuvYIPVX.js";import"./PdfRenderer-BGmX4rQJ.js";import"./PdfViewer-bnkLRiw9.js";import"./PdfViewer.module.css-BIINBCee.js";import"./PdfViewerAnnotationLayer-DZxFDp54.js";import"./constants-DsXMS3N3.js";import"./usePdfDocument-CBnnMrmh.js";import"./PdfViewerOutlineSidebar-CQKzl_2W.js";import"./PdfViewerSidebarHeader-BdhPje1P.js";import"./useBaseUiId-B_QbIUqB.js";import"./useControlled-B65L2iRV.js";import"./CompositeRoot-CfHYarVV.js";import"./CompositeItem-_z9g8yfT.js";import"./ToolbarRootContext-BsgfQ9_l.js";import"./composite-youxeV_z.js";import"./PdfViewerSearchBar-LhRHZt0t.js";import"./chevron-up-D5vwwbbJ.js";import"./chevron-down-BEQDQVHr.js";import"./cross-B02AaJUG.js";import"./PdfViewerSidebar-CfARJiRO.js";import"./index-Bq_KCjK9.js";import"./index-BDL1OtV7.js";import"./index-mRe9n3gj.js";import"./PdfViewerToolbar-DtpVDa1Y.js";import"./Button-jzGBL2cN.js";import"./chevron-right-B4MdUrxu.js";import"./Input-k9vi4ZnU.js";import"./search-BibTnjwg.js";import"./assertUnreachable-tCT10eXl.js";import"./VideoViewer-sAQ13w9_.js";import"./XmlViewer-DtvcxQWv.js";import"./isEqual-DgNUFbmc.js";import"./isObject-BgKMqNpZ.js";import"./useOsdkClient-DNxheivJ.js";import"./withOsdkMetrics-D1MjRaaQ.js";const ue="/osdk-ts/storybook/pr-3814/874924ac3030cc56a97f3106ae46c655a642e78c/compressed.tracemonkey-pldi-09.pdf",we="/osdk-ts/storybook/pr-3814/874924ac3030cc56a97f3106ae46c655a642e78c/example.mp4",ye="/osdk-ts/storybook/pr-3814/874924ac3030cc56a97f3106ae46c655a642e78c/multi-page-tiff.tiff";function ve(){const e=document.createElement("canvas");e.width=200,e.height=200;const t=e.getContext("2d"),a=t.createLinearGradient(0,0,200,200);a.addColorStop(0,"#3b82f6"),a.addColorStop(.5,"#8b5cf6"),a.addColorStop(1,"#ec4899"),t.fillStyle=a,t.fillRect(0,0,200,200),t.fillStyle="white",t.font="bold 24px sans-serif",t.textAlign="center",t.textBaseline="middle",t.fillText("Sample",100,90),t.fillText("Image",100,120);const ge=e.toDataURL("image/png"),b=atob(ge.split(",")[1]),P=new Uint8Array(b.length);for(let s=0;s<b.length;s++)P[s]=b.charCodeAt(s);return new Blob([P],{type:"image/png"})}const Me=`# Sample Document

This is a **sample markdown** document rendered by the DocumentViewer.

- Item 1
- Item 2
- Item 3
`;function o(e,t,a){return{fetchContents:t,fetchMetadata:()=>Promise.resolve({path:a,sizeBytes:1024,mediaType:e}),getMediaReference:()=>({mimeType:e,reference:{type:"mediaSetViewItem",mediaSetViewItem:{mediaItemRid:"ri.mio.main.media-item.mock",mediaSetRid:"ri.mio.main.media-set.mock-set",mediaSetViewRid:"ri.mio.main.media-set-view.mock-view"}}})}}const xe=ve(),D=o("application/pdf",()=>fetch(ue),"document.pdf"),be=o("image/png",()=>Promise.resolve(new Response(xe)),"photo.png"),ke=o("text/markdown",()=>Promise.resolve(new Response(Me)),"readme.md"),Se=o("video/mp4",()=>fetch(we),"example.mp4"),De=`From: Alice <alice@example.com>
To: Bob <bob@example.com>
Subject: Test Email
Date: Sun, 15 Mar 2026 14:30:00 +0000
Content-Type: text/html; charset=utf-8

<html><body><p>Hello Bob!</p></body></html>
`,Te=o("message/rfc822",()=>Promise.resolve(new Response(De)),"message.eml"),Pe=`<?xml version="1.0"?>
<catalog>
  <book id="1">
    <title>XML Developer's Guide</title>
    <price>44.95</price>
  </book>
</catalog>`,Ve=o("application/xml",()=>Promise.resolve(new Response(Pe)),"data.xml");function Ie(){const e=S.aoa_to_sheet([["Name","Department","Salary"],["Alice","Engineering","$145,000"],["Bob","Marketing","$120,000"]]),t=S.book_new();S.book_append_sheet(t,e,"Sheet1");const a=he(t,{type:"array",bookType:"xlsx"});return o("application/vnd.openxmlformats-officedocument.spreadsheetml.sheet",()=>Promise.resolve(new Response(a)),"report.xlsx")}const Ee=Ie(),fe=o("image/tiff",()=>fetch(ye),"multi-page-tiff.tiff"),T=o("application/octet-stream",()=>Promise.resolve(new Response("")),"data.bin"),Pt={title:"Components/DocumentViewer",component:i,tags:["beta"],args:{media:D},render:e=>r.jsx("div",{style:{height:"600px",width:"100%"},children:r.jsx(i,{...e})}),parameters:{controls:{expanded:!0}},argTypes:{media:{description:"The OSDK Media object to render",control:!1},className:{description:"Additional CSS class name for the root element",control:"text"},mimeTypeOverride:{description:"Override the auto-detected MIME type",control:"text"}}},m={args:{media:D},parameters:{docs:{source:{code:`import { DocumentViewer } from "@osdk/react-components/experimental/document-viewer";

<DocumentViewer media={employee.trainingMaterial} />`}}}},d={args:{media:be},render:e=>r.jsx("div",{style:{height:"400px",width:"400px"},children:r.jsx(i,{...e})})},p={args:{media:ke}},c={args:{media:Se},render:e=>r.jsx("div",{style:{height:"400px",width:"600px"},children:r.jsx(i,{...e})}),parameters:{msw:{handlers:[n.get("*/example.mp4",()=>x())]}}},l={args:{media:T},render:e=>r.jsx("div",{style:{height:"200px",width:"400px"},children:r.jsx(i,{...e})})},u={args:{media:Te}},f={args:{media:Ee}},g={args:{media:Ve},render:e=>r.jsx("div",{style:{height:"400px",width:"600px"},children:r.jsx(i,{...e})})},h={args:{media:fe},parameters:{msw:{handlers:[n.get("*/multi-page-tiff.tiff",()=>x())]}}},w={args:{media:fe,enableTiffToPdf:!0,fileName:"multi-page-tiff.tiff"},parameters:{msw:{handlers:[n.get("*/multi-page-tiff.tiff",()=>x()),n.get("*/compressed.tracemonkey-pldi-09.pdf",()=>x()),n.post("*/api/v2/mediasets/*/items/*/transform",()=>k.json({jobId:"mock-job-id",status:"SUCCESSFUL"})),n.get("*/api/v2/mediasets/*/items/*/transformationJobs/*/result",async()=>{const t=await(await fetch(ue)).arrayBuffer();return new k(t,{headers:{"Content-Type":"application/pdf"}})}),n.get("*/api/v2/mediasets/*/items/*/transformationJobs/*",()=>k.json({status:"SUCCESSFUL"}))]},docs:{source:{code:`import { DocumentViewer } from "@osdk/react-components/experimental/document-viewer";

// Multi-page TIFFs are detected and converted to PDF via MIO transform API
// Falls back to TiffRenderer if transform fails or for single-page TIFFs
<DocumentViewer media={myMedia} enableTiffToPdf fileName="scan.tiff" />`}}}},y={args:{media:T,mimeTypeOverride:"text/markdown"},parameters:{docs:{source:{code:`import { DocumentViewer } from "@osdk/react-components/experimental/document-viewer";

// Override auto-detected MIME type
<DocumentViewer media={myMedia} mimeTypeOverride="text/markdown" />`}}}},v={args:{media:T,labels:{unsupportedFileType:e=>`We can't preview ${e} files yet`,convertingDocument:"Getting your document ready…"}},render:e=>r.jsx("div",{style:{height:"200px",width:"400px"},children:r.jsx(i,{...e})}),parameters:{docs:{description:{story:"Every user-facing string the `DocumentViewer` itself renders can be overridden through the `labels` prop. Any key left unset falls back to the built-in English default. Strings rendered by the viewer it delegates to for a given MIME type are configured through that viewer's own props, e.g. `pdfViewerProps`."},source:{code:`<DocumentViewer
  media={myMedia}
  labels={{
    unsupportedFileType: (mimeType) => \`We can't preview \${mimeType} files yet\`,
    convertingDocument: "Getting your document ready…",
  }}
/>`}}}},M={args:{media:D,pdfViewerProps:{initialSidebarOpen:!0,enableDownload:!0}},parameters:{docs:{source:{code:`import { DocumentViewer } from "@osdk/react-components/experimental/document-viewer";

<DocumentViewer
  media={myMedia}
  pdfViewerProps={{
    initialSidebarOpen: true,
    enableDownload: true,
  }}
/>`}}}};var V,I,E;m.parameters={...m.parameters,docs:{...(V=m.parameters)==null?void 0:V.docs,source:{originalSource:`{
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
}`,...(E=(I=m.parameters)==null?void 0:I.docs)==null?void 0:E.source}}};var j,F,L;d.parameters={...d.parameters,docs:{...(j=d.parameters)==null?void 0:j.docs,source:{originalSource:`{
  args: {
    media: mockImageMedia
  },
  render: (args: DocumentViewerProps) => <div style={{
    height: "400px",
    width: "400px"
  }}>
      <DocumentViewer {...args} />
    </div>
}`,...(L=(F=d.parameters)==null?void 0:F.docs)==null?void 0:L.source}}};var R,O,A;p.parameters={...p.parameters,docs:{...(R=p.parameters)==null?void 0:R.docs,source:{originalSource:`{
  args: {
    media: mockMarkdownMedia
  }
}`,...(A=(O=p.parameters)==null?void 0:O.docs)==null?void 0:A.source}}};var C,U,_;c.parameters={...c.parameters,docs:{...(C=c.parameters)==null?void 0:C.docs,source:{originalSource:`{
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
}`,...(_=(U=c.parameters)==null?void 0:U.docs)==null?void 0:_.source}}};var W,B,$;l.parameters={...l.parameters,docs:{...(W=l.parameters)==null?void 0:W.docs,source:{originalSource:`{
  args: {
    media: mockUnsupportedMedia
  },
  render: (args: DocumentViewerProps) => <div style={{
    height: "200px",
    width: "400px"
  }}>
      <DocumentViewer {...args} />
    </div>
}`,...($=(B=l.parameters)==null?void 0:B.docs)==null?void 0:$.source}}};var N,G,H;u.parameters={...u.parameters,docs:{...(N=u.parameters)==null?void 0:N.docs,source:{originalSource:`{
  args: {
    media: mockEmailMedia
  }
}`,...(H=(G=u.parameters)==null?void 0:G.docs)==null?void 0:H.source}}};var X,J,z;f.parameters={...f.parameters,docs:{...(X=f.parameters)==null?void 0:X.docs,source:{originalSource:`{
  args: {
    media: mockSpreadsheetMedia
  }
}`,...(z=(J=f.parameters)==null?void 0:J.docs)==null?void 0:z.source}}};var K,q,Q;g.parameters={...g.parameters,docs:{...(K=g.parameters)==null?void 0:K.docs,source:{originalSource:`{
  args: {
    media: mockXmlMedia
  },
  render: (args: DocumentViewerProps) => <div style={{
    height: "400px",
    width: "600px"
  }}>
      <DocumentViewer {...args} />
    </div>
}`,...(Q=(q=g.parameters)==null?void 0:q.docs)==null?void 0:Q.source}}};var Y,Z,ee;h.parameters={...h.parameters,docs:{...(Y=h.parameters)==null?void 0:Y.docs,source:{originalSource:`{
  args: {
    media: mockTiffMedia
  },
  parameters: {
    msw: {
      handlers: [http.get("*/multi-page-tiff.tiff", () => passthrough())]
    }
  }
}`,...(ee=(Z=h.parameters)==null?void 0:Z.docs)==null?void 0:ee.source}}};var te,re,oe;w.parameters={...w.parameters,docs:{...(te=w.parameters)==null?void 0:te.docs,source:{originalSource:`{
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
}`,...(oe=(re=w.parameters)==null?void 0:re.docs)==null?void 0:oe.source}}};var ae,ne,ie;y.parameters={...y.parameters,docs:{...(ae=y.parameters)==null?void 0:ae.docs,source:{originalSource:`{
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
}`,...(ie=(ne=y.parameters)==null?void 0:ne.docs)==null?void 0:ie.source}}};var se,me,de;v.parameters={...v.parameters,docs:{...(se=v.parameters)==null?void 0:se.docs,source:{originalSource:`{
  args: {
    media: mockUnsupportedMedia,
    labels: {
      unsupportedFileType: (mimeType: string) => \`We can't preview \${mimeType} files yet\`,
      convertingDocument: "Getting your document ready…"
    }
  },
  render: (args: DocumentViewerProps) => <div style={{
    height: "200px",
    width: "400px"
  }}>
      <DocumentViewer {...args} />
    </div>,
  parameters: {
    docs: {
      description: {
        story: "Every user-facing string the \`DocumentViewer\` itself renders " + "can be overridden through the \`labels\` prop. Any key left unset " + "falls back to the built-in English default. Strings rendered by " + "the viewer it delegates to for a given MIME type are configured " + "through that viewer's own props, e.g. \`pdfViewerProps\`."
      },
      source: {
        code: \`<DocumentViewer
  media={myMedia}
  labels={{
    unsupportedFileType: (mimeType) => \\\`We can't preview \\\${mimeType} files yet\\\`,
    convertingDocument: "Getting your document ready…",
  }}
/>\`
      }
    }
  }
}`,...(de=(me=v.parameters)==null?void 0:me.docs)==null?void 0:de.source}}};var pe,ce,le;M.parameters={...M.parameters,docs:{...(pe=M.parameters)==null?void 0:pe.docs,source:{originalSource:`{
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
}`,...(le=(ce=M.parameters)==null?void 0:ce.docs)==null?void 0:le.source}}};const Vt=["Pdf","Image","Markdown","Video","UnsupportedType","Email","Spreadsheet","Xml","Tiff","TiffWithPdfConversion","WithMimeTypeOverride","LocalizedLabels","WithPdfViewerProps"];export{u as Email,d as Image,v as LocalizedLabels,p as Markdown,m as Pdf,f as Spreadsheet,h as Tiff,w as TiffWithPdfConversion,l as UnsupportedType,c as Video,y as WithMimeTypeOverride,M as WithPdfViewerProps,g as Xml,Vt as __namedExportsOrder,Pt as default};
