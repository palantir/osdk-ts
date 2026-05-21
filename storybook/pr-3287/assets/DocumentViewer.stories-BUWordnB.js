import{r as x,j as c,R as a,_ as We,h as u,H as B}from"./iframe-BqSobOjs.js";import{c as je}from"./index-L1wTDGqM.js";import{D as Xe}from"./DocxViewer-CHqGR9U3.js";import{E as ze}from"./EmailViewer-A3pH-3CU.js";import{E as Ge,u as H,w as Je}from"./ExcelViewer-Ci1ysYcT.js";import{I as qe}from"./ImageViewer-BgPjMoJC.js";import{u as Le}from"./useMediaContents-DvdRPpnZ.js";import{s as _,T as Ye,U as Ke}from"./TiffRenderer-Go1FP0S2.js";import{S as z}from"./spin-P9_9HPc6.js";import{E as Ae}from"./error-LlycrbnK.js";import{s as h,M as Ze}from"./MarkdownRenderer-D3qUf7w1.js";import{P as Qe}from"./PdfRenderer-BfVhQ5cb.js";import{a as et}from"./assertUnreachable-tCT10eXl.js";import{V as tt}from"./VideoViewer-CGhjcZNJ.js";import{X as rt}from"./XmlViewer-VV1cGiUG.js";import{B as nt}from"./PdfViewer-B0Cy9pfu.js";import{u as at}from"./useOsdkClient-Dz_AketL.js";import{I as k,S as ot}from"./svgIconContainer-DgnMBskL.js";import{w as st}from"./withOsdkMetrics-D4GiNPF8.js";import{p as E}from"./passthrough-6sm3BHV7.js";import"./preload-helper-Dp1pzeXC.js";import"./useEventCallback-CysBZKYk.js";import"./index-YkV0U4e7.js";import"./PdfViewer.module.css-D0iIsVNv.js";import"./constants-B8f3UZHi.js";import"./usePdfDocument-CQyy9kMv.js";import"./index-CDBVc2Go.js";import"./index-bCpJ3h2u.js";import"./PdfViewerAnnotationLayer-DWrtGDMa.js";import"./PdfViewerOutlineSidebar-Da33fVFo.js";import"./PdfViewerSidebarHeader-FOwBtHc2.js";import"./useBaseUiId-Dp_kYV1S.js";import"./useControlled-9AVv5K6I.js";import"./CompositeRoot-CvRJGIGW.js";import"./CompositeItem-CTpBLKUN.js";import"./ToolbarRootContext-DRoLsPMn.js";import"./composite-DfJCZyGn.js";import"./PdfViewerSearchBar-ByEg6-z-.js";import"./chevron-up-BB11Jexa.js";import"./chevron-down-B8BcgL7Y.js";import"./cross-CnGN68mu.js";import"./PdfViewerSidebar-D4zkQVtb.js";import"./index-Hc2ZCWn_.js";import"./PdfViewerToolbar-DOLSUmvm.js";import"./Button-Zje7J_lk.js";import"./chevron-right-BTj3wRAF.js";import"./Input-GUrmuab8.js";import"./minus-BnWXFqps.js";import"./useRegisterUserAgent-BB-OJR3x.js";const Fe=x.forwardRef((e,t)=>{const r=(e.size??k.STANDARD)>=k.LARGE,s=`${-1*(r?k.LARGE:k.STANDARD)/.05/2}`,m={transformOrigin:"center"};return c.jsx(ot,{iconName:"document",ref:t,...e,children:c.jsx("path",{d:r?"M239.6 400H79.6C68.6 400 59.6 391 59.6 380V20C59.6 9 68.6 0 79.6 0H339.6C350.6 0 359.6 9 359.6 20V280zM319.6 40H99.6V360H219.6V260H319.6z":"M180 320H60C49 320 40 311 40 300V20C40 9 49 0 60 0H260C271 0 280 9 280 20V220zM240 40H80V280H160V200H240z",fillRule:"evenodd",transform:`scale(0.05, -0.05) translate(${s}, ${s})`,style:m})})});Fe.displayName="Blueprint6.Icon.Document";function W(){return W=Object.assign?Object.assign.bind():function(e){for(var t=1;t<arguments.length;t++){var r=arguments[t];for(var n in r)({}).hasOwnProperty.call(r,n)&&(e[n]=r[n])}return e},W.apply(null,arguments)}const it=async e=>{const t=await e.arrayBuffer();return new Uint8Array(t)};function Ue({media:e,className:t,...r}){const{data:n,loading:s,error:m}=Le(e,it);return a.createElement("div",{className:t},s&&a.createElement("div",{className:_.loadingContainer},a.createElement(z,{className:_.spinnerIcon}),"Loading…"),m!=null&&a.createElement("div",{className:_.errorContainer},a.createElement(Ae,{className:_.errorIcon}),"Failed to load TIFF: ",m.message),n!=null&&a.createElement(Ye,W({content:n},r)))}function X(){return X=Object.assign?Object.assign.bind():function(e){for(var t=1;t<arguments.length;t++){var r=arguments[t];for(var n in r)({}).hasOwnProperty.call(r,n)&&(e[n]=r[n])}return e},X.apply(null,arguments)}const mt=async e=>e.text();function ct({media:e,...t}){const{data:r,loading:n,error:s}=Le(e,mt),m=je(h.container,t.className);return a.createElement("div",{className:m},n&&a.createElement("div",{className:h.loadingContainer},a.createElement(z,{className:h.spinnerIcon}),"Loading…"),s!=null&&a.createElement("div",{className:h.errorContainer},a.createElement(Ae,{className:h.errorIcon}),"Failed to load document: ",s.message),r!=null&&a.createElement(Ze,X({content:r},t)))}const M={container:"DocumentViewer-module__container___v9u-RLHl",unsupportedContainer:"DocumentViewer-module__unsupportedContainer___zykC0l-q",unsupportedIcon:"DocumentViewer-module__unsupportedIcon___O-4GnVkr",loadingContainer:"DocumentViewer-module__loadingContainer___UFHuVwJN LoadingError-module__loadingContainer___bPqIqyjp",spinnerIcon:"DocumentViewer-module__spinnerIcon___Ig-dujWh LoadingError-module__spinnerIcon___t3TNZqEL"};let o=(function(e){return e.Pdf="pdf",e.Tiff="tiff",e.Image="image",e.Video="video",e.Markdown="markdown",e.Docx="docx",e.Excel="excel",e.Email="email",e.Xml="xml",e.Unsupported="unsupported",e})({});const Y={viewerType:o.Tiff,pdfData:void 0,loading:!1,error:void 0};function dt(e,t){const r=at(),[n,s]=x.useState(Y),m=x.useRef(e);return m.current=e,x.useEffect(()=>{if(!t){s(Y);return}let i=!1;return s({viewerType:o.Tiff,pdfData:void 0,loading:!0,error:void 0}),(async function(){const v=m.current,U=await(await v.fetchContents()).arrayBuffer();if(i)return;if(Ke.decode(U).length<=1){i||s({viewerType:o.Tiff,pdfData:void 0,loading:!1,error:void 0});return}const D=v.getMediaReference(),w=await r(We).transformAndWait({mediaReference:D,transformation:{$imageToDocument:{$operation:{$createPdf:{}}}}});if(i)return;const S=await w.arrayBuffer();i||s({viewerType:o.Pdf,pdfData:S,loading:!1,error:void 0})})().catch(f=>{i||(console.warn("TIFF to PDF conversion failed, falling back to TIFF renderer:",f),s({viewerType:o.Tiff,pdfData:void 0,loading:!1,error:f instanceof Error?f:new Error(String(f))}))}),()=>{i=!0}},[e,t,r]),n}function F(){return F=Object.assign?Object.assign.bind():function(e){for(var t=1;t<arguments.length;t++){var r=arguments[t];for(var n in r)({}).hasOwnProperty.call(r,n)&&(e[n]=r[n])}return e},F.apply(null,arguments)}function pt({media:e,className:t,enableTiffToPdf:r,tiffRendererProps:n,pdfViewerProps:s}){const{viewerType:m,pdfData:i,loading:f}=dt(e,r);return f?a.createElement("div",{className:t},a.createElement("div",{className:M.loadingContainer},a.createElement(z,{className:M.spinnerIcon}),"Converting document…")):m===o.Pdf&&i!=null?a.createElement(nt,F({src:i,className:t},s)):a.createElement(Ue,F({media:e,className:t},n))}function p(){return p=Object.assign?Object.assign.bind():function(e){for(var t=1;t<arguments.length;t++){var r=arguments[t];for(var n in r)({}).hasOwnProperty.call(r,n)&&(e[n]=r[n])}return e},p.apply(null,arguments)}const lt=new Set(["image/png","image/jpeg","image/gif","image/svg+xml","image/webp","image/bmp"]),ft=new Set(["text/markdown","text/x-markdown"]),ut=new Set(["application/xml","text/xml"]);function gt(e,t){if(e==="image/tiff")return!0;const r=t==null?void 0:t.toLowerCase();return(r==null?void 0:r.endsWith(".tif"))===!0||(r==null?void 0:r.endsWith(".tiff"))===!0}function wt(e,t){return e==="application/pdf"?o.Pdf:gt(e,t)?o.Tiff:lt.has(e)?o.Image:e.startsWith("video/")?o.Video:ft.has(e)?o.Markdown:e==="application/vnd.openxmlformats-officedocument.wordprocessingml.document"?o.Docx:e==="application/vnd.openxmlformats-officedocument.spreadsheetml.sheet"?o.Excel:e==="message/rfc822"?o.Email:ut.has(e)?o.Xml:o.Unsupported}function ht({media:e,className:t,mimeTypeOverride:r,pdfViewerProps:n,imageViewerProps:s,videoViewerProps:m,tiffRendererProps:i,markdownRendererProps:f,docxViewerProps:v,excelViewerProps:J,emailViewerProps:U,xmlViewerProps:q,fileName:$,enableTiffToPdf:D=!1}){const w=r??e.getMediaReference().mimeType,S=x.useMemo(()=>wt(w,$),[w,$]),d=je(M.container,t);switch(S){case o.Pdf:return a.createElement(Qe,p({media:e,className:d},n));case o.Tiff:return D?a.createElement(pt,{media:e,className:d,enableTiffToPdf:D,tiffRendererProps:i,pdfViewerProps:n}):a.createElement(Ue,p({media:e,className:d},i));case o.Image:return a.createElement(qe,p({media:e,className:d},s));case o.Video:return a.createElement(tt,p({media:e,className:d},m));case o.Markdown:return a.createElement(ct,p({media:e,className:d},f));case o.Docx:return a.createElement(Xe,p({media:e,className:d},v));case o.Excel:return a.createElement(Ge,p({media:e,className:d},J));case o.Email:return a.createElement(ze,p({media:e,className:d},U));case o.Xml:return a.createElement(rt,p({media:e,className:d},q));case o.Unsupported:return a.createElement("div",{className:d},a.createElement("div",{className:M.unsupportedContainer},a.createElement(Fe,{className:M.unsupportedIcon}),"Unsupported file type: ",w));default:et(S)}}const g=st(ht,"DocumentViewer"),$e="./compressed.tracemonkey-pldi-09.pdf",xt="./notional-word-example.docx",Mt="./example.mp4",Et="./multi-page-tiff.tiff";function vt(){const e=document.createElement("canvas");e.width=200,e.height=200;const t=e.getContext("2d"),r=t.createLinearGradient(0,0,200,200);r.addColorStop(0,"#3b82f6"),r.addColorStop(.5,"#8b5cf6"),r.addColorStop(1,"#ec4899"),t.fillStyle=r,t.fillRect(0,0,200,200),t.fillStyle="white",t.font="bold 24px sans-serif",t.textAlign="center",t.textBaseline="middle",t.fillText("Sample",100,90),t.fillText("Image",100,120);const n=e.toDataURL("image/png"),s=atob(n.split(",")[1]),m=new Uint8Array(s.length);for(let i=0;i<s.length;i++)m[i]=s.charCodeAt(i);return new Blob([m],{type:"image/png"})}const Dt=`# Sample Document

This is a **sample markdown** document rendered by the DocumentViewer.

- Item 1
- Item 2
- Item 3
`;function l(e,t,r){return{fetchContents:t,fetchMetadata:()=>Promise.resolve({path:r,sizeBytes:1024,mediaType:e}),getMediaReference:()=>({mimeType:e,reference:{type:"mediaSetViewItem",mediaSetViewItem:{mediaItemRid:"ri.mio.main.media-item.mock",mediaSetRid:"ri.mio.main.media-set.mock-set",mediaSetViewRid:"ri.mio.main.media-set-view.mock-view"}}})}}const St=vt(),G=l("application/pdf",()=>fetch($e),"document.pdf"),_t=l("image/png",()=>Promise.resolve(new Response(St)),"photo.png"),kt=l("text/markdown",()=>Promise.resolve(new Response(Dt)),"readme.md"),bt=l("video/mp4",()=>fetch(Mt),"example.mp4"),yt=l("application/vnd.openxmlformats-officedocument.wordprocessingml.document",()=>fetch(xt),"notional-word-example.docx"),Tt=`From: Alice <alice@example.com>
To: Bob <bob@example.com>
Subject: Test Email
Date: Sun, 15 Mar 2026 14:30:00 +0000
Content-Type: text/html; charset=utf-8

<html><body><p>Hello Bob!</p></body></html>
`,Pt=l("message/rfc822",()=>Promise.resolve(new Response(Tt)),"message.eml"),Vt=`<?xml version="1.0"?>
<catalog>
  <book id="1">
    <title>XML Developer's Guide</title>
    <price>44.95</price>
  </book>
</catalog>`,It=l("application/xml",()=>Promise.resolve(new Response(Vt)),"data.xml");function Ct(){const e=H.aoa_to_sheet([["Name","Department","Salary"],["Alice","Engineering","$145,000"],["Bob","Marketing","$120,000"]]),t=H.book_new();H.book_append_sheet(t,e,"Sheet1");const r=Je(t,{type:"array",bookType:"xlsx"});return l("application/vnd.openxmlformats-officedocument.spreadsheetml.sheet",()=>Promise.resolve(new Response(r)),"report.xlsx")}const Rt=Ct(),Be=l("image/tiff",()=>fetch(Et),"multi-page-tiff.tiff"),He=l("application/octet-stream",()=>Promise.resolve(new Response("")),"data.bin"),Pr={title:"Experimental/DocumentViewer",tags:["experimental"],component:g,args:{media:G},render:e=>c.jsx("div",{style:{height:"600px",width:"100%"},children:c.jsx(g,{...e})}),parameters:{controls:{expanded:!0}},argTypes:{media:{description:"The OSDK Media object to render",control:!1},className:{description:"Additional CSS class name for the root element",control:"text"},mimeTypeOverride:{description:"Override the auto-detected MIME type",control:"text"}}},b={args:{media:G},parameters:{docs:{source:{code:`import { DocumentViewer } from "@osdk/react-components/experimental/document-viewer";

<DocumentViewer media={employee.trainingMaterial} />`}}}},y={args:{media:_t},render:e=>c.jsx("div",{style:{height:"400px",width:"400px"},children:c.jsx(g,{...e})})},T={args:{media:kt}},P={args:{media:bt},render:e=>c.jsx("div",{style:{height:"400px",width:"600px"},children:c.jsx(g,{...e})}),parameters:{msw:{handlers:[u.get("*/example.mp4",()=>E())]}}},V={args:{media:He},render:e=>c.jsx("div",{style:{height:"200px",width:"400px"},children:c.jsx(g,{...e})})},I={args:{media:yt},parameters:{msw:{handlers:[u.get("*/notional-word-example.docx",()=>E())]}}},C={args:{media:Pt}},R={args:{media:Rt}},O={args:{media:It},render:e=>c.jsx("div",{style:{height:"400px",width:"600px"},children:c.jsx(g,{...e})})},N={args:{media:Be},parameters:{msw:{handlers:[u.get("*/multi-page-tiff.tiff",()=>E())]}}},j={args:{media:Be,enableTiffToPdf:!0,fileName:"multi-page-tiff.tiff"},parameters:{msw:{handlers:[u.get("*/multi-page-tiff.tiff",()=>E()),u.get("*/compressed.tracemonkey-pldi-09.pdf",()=>E()),u.post("*/api/v2/mediasets/*/items/*/transform",()=>B.json({jobId:"mock-job-id",status:"SUCCESSFUL"})),u.get("*/api/v2/mediasets/*/items/*/transformationJobs/*/result",async()=>{const t=await(await fetch($e)).arrayBuffer();return new B(t,{headers:{"Content-Type":"application/pdf"}})}),u.get("*/api/v2/mediasets/*/items/*/transformationJobs/*",()=>B.json({status:"SUCCESSFUL"}))]},docs:{source:{code:`import { DocumentViewer } from "@osdk/react-components/experimental/document-viewer";

// Multi-page TIFFs are detected and converted to PDF via MIO transform API
// Falls back to TiffRenderer if transform fails or for single-page TIFFs
<DocumentViewer media={myMedia} enableTiffToPdf fileName="scan.tiff" />`}}}},L={args:{media:He,mimeTypeOverride:"text/markdown"},parameters:{docs:{source:{code:`import { DocumentViewer } from "@osdk/react-components/experimental/document-viewer";

// Override auto-detected MIME type
<DocumentViewer media={myMedia} mimeTypeOverride="text/markdown" />`}}}},A={args:{media:G,pdfViewerProps:{initialSidebarOpen:!0,enableDownload:!0}},parameters:{docs:{source:{code:`import { DocumentViewer } from "@osdk/react-components/experimental/document-viewer";

<DocumentViewer
  media={myMedia}
  pdfViewerProps={{
    initialSidebarOpen: true,
    enableDownload: true,
  }}
/>`}}}};var K,Z,Q;b.parameters={...b.parameters,docs:{...(K=b.parameters)==null?void 0:K.docs,source:{originalSource:`{
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
}`,...(Q=(Z=b.parameters)==null?void 0:Z.docs)==null?void 0:Q.source}}};var ee,te,re;y.parameters={...y.parameters,docs:{...(ee=y.parameters)==null?void 0:ee.docs,source:{originalSource:`{
  args: {
    media: mockImageMedia
  },
  render: (args: DocumentViewerProps) => <div style={{
    height: "400px",
    width: "400px"
  }}>
      <DocumentViewer {...args} />
    </div>
}`,...(re=(te=y.parameters)==null?void 0:te.docs)==null?void 0:re.source}}};var ne,ae,oe;T.parameters={...T.parameters,docs:{...(ne=T.parameters)==null?void 0:ne.docs,source:{originalSource:`{
  args: {
    media: mockMarkdownMedia
  }
}`,...(oe=(ae=T.parameters)==null?void 0:ae.docs)==null?void 0:oe.source}}};var se,ie,me;P.parameters={...P.parameters,docs:{...(se=P.parameters)==null?void 0:se.docs,source:{originalSource:`{
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
}`,...(me=(ie=P.parameters)==null?void 0:ie.docs)==null?void 0:me.source}}};var ce,de,pe;V.parameters={...V.parameters,docs:{...(ce=V.parameters)==null?void 0:ce.docs,source:{originalSource:`{
  args: {
    media: mockUnsupportedMedia
  },
  render: (args: DocumentViewerProps) => <div style={{
    height: "200px",
    width: "400px"
  }}>
      <DocumentViewer {...args} />
    </div>
}`,...(pe=(de=V.parameters)==null?void 0:de.docs)==null?void 0:pe.source}}};var le,fe,ue;I.parameters={...I.parameters,docs:{...(le=I.parameters)==null?void 0:le.docs,source:{originalSource:`{
  args: {
    media: mockDocxMedia
  },
  parameters: {
    msw: {
      handlers: [http.get("*/notional-word-example.docx", () => passthrough())]
    }
  }
}`,...(ue=(fe=I.parameters)==null?void 0:fe.docs)==null?void 0:ue.source}}};var ge,we,he;C.parameters={...C.parameters,docs:{...(ge=C.parameters)==null?void 0:ge.docs,source:{originalSource:`{
  args: {
    media: mockEmailMedia
  }
}`,...(he=(we=C.parameters)==null?void 0:we.docs)==null?void 0:he.source}}};var xe,Me,Ee;R.parameters={...R.parameters,docs:{...(xe=R.parameters)==null?void 0:xe.docs,source:{originalSource:`{
  args: {
    media: mockExcelMedia
  }
}`,...(Ee=(Me=R.parameters)==null?void 0:Me.docs)==null?void 0:Ee.source}}};var ve,De,Se;O.parameters={...O.parameters,docs:{...(ve=O.parameters)==null?void 0:ve.docs,source:{originalSource:`{
  args: {
    media: mockXmlMedia
  },
  render: (args: DocumentViewerProps) => <div style={{
    height: "400px",
    width: "600px"
  }}>
      <DocumentViewer {...args} />
    </div>
}`,...(Se=(De=O.parameters)==null?void 0:De.docs)==null?void 0:Se.source}}};var _e,ke,be;N.parameters={...N.parameters,docs:{...(_e=N.parameters)==null?void 0:_e.docs,source:{originalSource:`{
  args: {
    media: mockTiffMedia
  },
  parameters: {
    msw: {
      handlers: [http.get("*/multi-page-tiff.tiff", () => passthrough())]
    }
  }
}`,...(be=(ke=N.parameters)==null?void 0:ke.docs)==null?void 0:be.source}}};var ye,Te,Pe;j.parameters={...j.parameters,docs:{...(ye=j.parameters)==null?void 0:ye.docs,source:{originalSource:`{
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
}`,...(Pe=(Te=j.parameters)==null?void 0:Te.docs)==null?void 0:Pe.source}}};var Ve,Ie,Ce;L.parameters={...L.parameters,docs:{...(Ve=L.parameters)==null?void 0:Ve.docs,source:{originalSource:`{
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
}`,...(Ce=(Ie=L.parameters)==null?void 0:Ie.docs)==null?void 0:Ce.source}}};var Re,Oe,Ne;A.parameters={...A.parameters,docs:{...(Re=A.parameters)==null?void 0:Re.docs,source:{originalSource:`{
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
}`,...(Ne=(Oe=A.parameters)==null?void 0:Oe.docs)==null?void 0:Ne.source}}};const Vr=["Pdf","Image","Markdown","Video","UnsupportedType","Docx","Email","Excel","Xml","Tiff","TiffWithPdfConversion","WithMimeTypeOverride","WithPdfViewerProps"];export{I as Docx,C as Email,R as Excel,y as Image,T as Markdown,b as Pdf,N as Tiff,j as TiffWithPdfConversion,V as UnsupportedType,P as Video,L as WithMimeTypeOverride,A as WithPdfViewerProps,O as Xml,Vr as __namedExportsOrder,Pr as default};
