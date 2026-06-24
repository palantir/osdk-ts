import{r as x,j as d,R as a,I as Fe,h as u,J as B}from"./iframe-CkQZcnH2.js";import{c as Ie}from"./index-VVlN0jvd.js";import{E as Ue}from"./EmailViewer-D2eLPz4A.js";import{E as Be,u as $,w as $e}from"./ExcelViewer-Cv3V10XC.js";import{I as He}from"./ImageViewer-hRxstuyR.js";import{u as Ce}from"./useMediaContents-BNWRaGJ6.js";import{s as b,T as We,U as Xe}from"./TiffRenderer-CVwJQAgb.js";import{S as X}from"./spin-DhBj-g0m.js";import{E as Re}from"./error-CQhWb91W.js";import{s as h,M as ze}from"./MarkdownRenderer-DAR0uja8.js";import{P as Ge}from"./PdfRenderer-B3sXB7Tc.js";import{a as Je}from"./assertUnreachable-tCT10eXl.js";import{V as qe}from"./VideoViewer-cpvpU9UT.js";import{X as Ye}from"./XmlViewer-Ci7p3yGd.js";import{B as Ke}from"./PdfViewer-DwOSL_NY.js";import{u as Ze}from"./useOsdkClient-DX65UjCd.js";import{I as k,S as Qe}from"./svgIconContainer-Br1nC1Of.js";import{w as et}from"./withOsdkMetrics-BtHjUR6o.js";import{p as j}from"./passthrough-6sm3BHV7.js";import"./preload-helper-CljnlcDv.js";import"./BaseImageViewer-4dqlUnFt.js";import"./index-YkV0U4e7.js";import"./PdfViewer.module.css-BE_tgper.js";import"./PdfViewerAnnotationLayer-BHtEsnGe.js";import"./constants-DsXMS3N3.js";import"./usePdfDocument-CDAekb-Q.js";import"./PdfViewerOutlineSidebar-CjwS183P.js";import"./PdfViewerSidebarHeader-RpLP9ULk.js";import"./useBaseUiId-DVZXOiRt.js";import"./useControlled-D3yTP8QU.js";import"./CompositeRoot-BiZR0_29.js";import"./CompositeItem-vowMVFYI.js";import"./ToolbarRootContext-D2z5WJh1.js";import"./composite-u2NZBRF_.js";import"./PdfViewerSearchBar-Dkft4h4Q.js";import"./chevron-up-eSvomitZ.js";import"./chevron-down-CASSpbpI.js";import"./cross-DZ7IUewz.js";import"./PdfViewerSidebar-BFNeAr1P.js";import"./index-DqOl1-jR.js";import"./index-DsjiD0wB.js";import"./index-vfid0is-.js";import"./PdfViewerToolbar-w4S8sQ3l.js";import"./Button-2issX0HJ.js";import"./chevron-right-BxGwj5GQ.js";import"./Input-Crju91xE.js";import"./minus-ANa26wQM.js";const Oe=x.forwardRef((e,t)=>{const r=(e.size??k.STANDARD)>=k.LARGE,s=`${-1*(r?k.LARGE:k.STANDARD)/.05/2}`,m={transformOrigin:"center"};return d.jsx(Qe,{iconName:"document",ref:t,...e,children:d.jsx("path",{d:r?"M239.6 400H79.6C68.6 400 59.6 391 59.6 380V20C59.6 9 68.6 0 79.6 0H339.6C350.6 0 359.6 9 359.6 20V280zM319.6 40H99.6V360H219.6V260H319.6z":"M180 320H60C49 320 40 311 40 300V20C40 9 49 0 60 0H260C271 0 280 9 280 20V220zM240 40H80V280H160V200H240z",fillRule:"evenodd",transform:`scale(0.05, -0.05) translate(${s}, ${s})`,style:m})})});Oe.displayName="Blueprint6.Icon.Document";function H(){return H=Object.assign?Object.assign.bind():function(e){for(var t=1;t<arguments.length;t++){var r=arguments[t];for(var n in r)({}).hasOwnProperty.call(r,n)&&(e[n]=r[n])}return e},H.apply(null,arguments)}const tt=async e=>{const t=await e.arrayBuffer();return new Uint8Array(t)};function Ne({media:e,className:t,...r}){const{data:n,loading:s,error:m}=Ce(e,tt);return a.createElement("div",{className:t},s&&a.createElement("div",{className:b.loadingContainer},a.createElement(X,{className:b.spinnerIcon}),"Loading…"),m!=null&&a.createElement("div",{className:b.errorContainer},a.createElement(Re,{className:b.errorIcon}),"Failed to load TIFF: ",m.message),n!=null&&a.createElement(We,H({content:n},r)))}function W(){return W=Object.assign?Object.assign.bind():function(e){for(var t=1;t<arguments.length;t++){var r=arguments[t];for(var n in r)({}).hasOwnProperty.call(r,n)&&(e[n]=r[n])}return e},W.apply(null,arguments)}const rt=async e=>e.text();function nt({media:e,...t}){const{data:r,loading:n,error:s}=Ce(e,rt),m=Ie(h.container,t.className);return a.createElement("div",{className:m},n&&a.createElement("div",{className:h.loadingContainer},a.createElement(X,{className:h.spinnerIcon}),"Loading…"),s!=null&&a.createElement("div",{className:h.errorContainer},a.createElement(Re,{className:h.errorIcon}),"Failed to load document: ",s.message),r!=null&&a.createElement(ze,W({content:r},t)))}const M={container:"DocumentViewer-module__container___v9u-RLHl",unsupportedContainer:"DocumentViewer-module__unsupportedContainer___zykC0l-q",unsupportedIcon:"DocumentViewer-module__unsupportedIcon___O-4GnVkr",loadingContainer:"DocumentViewer-module__loadingContainer___UFHuVwJN LoadingError-module__loadingContainer___bPqIqyjp",spinnerIcon:"DocumentViewer-module__spinnerIcon___Ig-dujWh LoadingError-module__spinnerIcon___t3TNZqEL"};let o=(function(e){return e.Pdf="pdf",e.Tiff="tiff",e.Image="image",e.Video="video",e.Markdown="markdown",e.Excel="excel",e.Email="email",e.Xml="xml",e.Unsupported="unsupported",e})({});const J={viewerType:o.Tiff,pdfData:void 0,loading:!1,error:void 0};function at(e,t){const r=Ze(),[n,s]=x.useState(J),m=x.useRef(e);return m.current=e,x.useEffect(()=>{if(!t){s(J);return}let i=!1;return s({viewerType:o.Tiff,pdfData:void 0,loading:!0,error:void 0}),(async function(){const v=m.current,L=await(await v.fetchContents()).arrayBuffer();if(i)return;if(Xe.decode(L).length<=1){i||s({viewerType:o.Tiff,pdfData:void 0,loading:!1,error:void 0});return}const w=v.getMediaReference(),E=await r(Fe).transformAndWait({mediaReference:w,transformation:{$imageToDocument:{$operation:{$createPdf:{}}}}});if(i)return;const c=await E.arrayBuffer();i||s({viewerType:o.Pdf,pdfData:c,loading:!1,error:void 0})})().catch(l=>{i||(console.warn("TIFF to PDF conversion failed, falling back to TIFF renderer:",l),s({viewerType:o.Tiff,pdfData:void 0,loading:!1,error:l instanceof Error?l:new Error(String(l))}))}),()=>{i=!0}},[e,t,r]),n}function A(){return A=Object.assign?Object.assign.bind():function(e){for(var t=1;t<arguments.length;t++){var r=arguments[t];for(var n in r)({}).hasOwnProperty.call(r,n)&&(e[n]=r[n])}return e},A.apply(null,arguments)}function ot({media:e,className:t,enableTiffToPdf:r,tiffRendererProps:n,pdfViewerProps:s}){const{viewerType:m,pdfData:i,loading:l}=at(e,r);return l?a.createElement("div",{className:t},a.createElement("div",{className:M.loadingContainer},a.createElement(X,{className:M.spinnerIcon}),"Converting document…")):m===o.Pdf&&i!=null?a.createElement(Ke,A({src:i,className:t},s)):a.createElement(Ne,A({media:e,className:t},n))}function p(){return p=Object.assign?Object.assign.bind():function(e){for(var t=1;t<arguments.length;t++){var r=arguments[t];for(var n in r)({}).hasOwnProperty.call(r,n)&&(e[n]=r[n])}return e},p.apply(null,arguments)}const st=new Set(["image/png","image/jpeg","image/gif","image/svg+xml","image/webp","image/bmp"]),it=new Set(["text/markdown","text/x-markdown"]),mt=new Set(["application/xml","text/xml"]);function ct(e,t){if(e==="image/tiff")return!0;const r=t==null?void 0:t.toLowerCase();return(r==null?void 0:r.endsWith(".tif"))===!0||(r==null?void 0:r.endsWith(".tiff"))===!0}function dt(e,t){return e==="application/pdf"?o.Pdf:ct(e,t)?o.Tiff:st.has(e)?o.Image:e.startsWith("video/")?o.Video:it.has(e)?o.Markdown:e==="application/vnd.openxmlformats-officedocument.spreadsheetml.sheet"?o.Excel:e==="message/rfc822"?o.Email:mt.has(e)?o.Xml:o.Unsupported}function pt({media:e,className:t,mimeTypeOverride:r,pdfViewerProps:n,imageViewerProps:s,videoViewerProps:m,tiffRendererProps:i,markdownRendererProps:l,excelViewerProps:v,emailViewerProps:G,xmlViewerProps:L,fileName:F,enableTiffToPdf:U=!1}){const w=r??e.getMediaReference().mimeType,E=x.useMemo(()=>dt(w,F),[w,F]),c=Ie(M.container,t);switch(E){case o.Pdf:return a.createElement(Ge,p({media:e,className:c},n));case o.Tiff:return U?a.createElement(ot,{media:e,className:c,enableTiffToPdf:U,tiffRendererProps:i,pdfViewerProps:n}):a.createElement(Ne,p({media:e,className:c},i));case o.Image:return a.createElement(He,p({media:e,className:c},s));case o.Video:return a.createElement(qe,p({media:e,className:c},m));case o.Markdown:return a.createElement(nt,p({media:e,className:c},l));case o.Excel:return a.createElement(Be,p({media:e,className:c},v));case o.Email:return a.createElement(Ue,p({media:e,className:c},G));case o.Xml:return a.createElement(Ye,p({media:e,className:c},L));case o.Unsupported:return a.createElement("div",{className:c},a.createElement("div",{className:M.unsupportedContainer},a.createElement(Oe,{className:M.unsupportedIcon}),"Unsupported file type: ",w));default:Je(E)}}const g=et(pt,"DocumentViewer"),je="/osdk-ts/storybook/pr-3483/c351440ddb2bdf63897a2d8b4d1f7e334a06ff5b/compressed.tracemonkey-pldi-09.pdf",lt="/osdk-ts/storybook/pr-3483/c351440ddb2bdf63897a2d8b4d1f7e334a06ff5b/example.mp4",ft="/osdk-ts/storybook/pr-3483/c351440ddb2bdf63897a2d8b4d1f7e334a06ff5b/multi-page-tiff.tiff";function ut(){const e=document.createElement("canvas");e.width=200,e.height=200;const t=e.getContext("2d"),r=t.createLinearGradient(0,0,200,200);r.addColorStop(0,"#3b82f6"),r.addColorStop(.5,"#8b5cf6"),r.addColorStop(1,"#ec4899"),t.fillStyle=r,t.fillRect(0,0,200,200),t.fillStyle="white",t.font="bold 24px sans-serif",t.textAlign="center",t.textBaseline="middle",t.fillText("Sample",100,90),t.fillText("Image",100,120);const n=e.toDataURL("image/png"),s=atob(n.split(",")[1]),m=new Uint8Array(s.length);for(let i=0;i<s.length;i++)m[i]=s.charCodeAt(i);return new Blob([m],{type:"image/png"})}const gt=`# Sample Document

This is a **sample markdown** document rendered by the DocumentViewer.

- Item 1
- Item 2
- Item 3
`;function f(e,t,r){return{fetchContents:t,fetchMetadata:()=>Promise.resolve({path:r,sizeBytes:1024,mediaType:e}),getMediaReference:()=>({mimeType:e,reference:{type:"mediaSetViewItem",mediaSetViewItem:{mediaItemRid:"ri.mio.main.media-item.mock",mediaSetRid:"ri.mio.main.media-set.mock-set",mediaSetViewRid:"ri.mio.main.media-set-view.mock-view"}}})}}const wt=ut(),z=f("application/pdf",()=>fetch(je),"document.pdf"),ht=f("image/png",()=>Promise.resolve(new Response(wt)),"photo.png"),xt=f("text/markdown",()=>Promise.resolve(new Response(gt)),"readme.md"),Mt=f("video/mp4",()=>fetch(lt),"example.mp4"),vt=`From: Alice <alice@example.com>
To: Bob <bob@example.com>
Subject: Test Email
Date: Sun, 15 Mar 2026 14:30:00 +0000
Content-Type: text/html; charset=utf-8

<html><body><p>Hello Bob!</p></body></html>
`,Et=f("message/rfc822",()=>Promise.resolve(new Response(vt)),"message.eml"),bt=`<?xml version="1.0"?>
<catalog>
  <book id="1">
    <title>XML Developer's Guide</title>
    <price>44.95</price>
  </book>
</catalog>`,kt=f("application/xml",()=>Promise.resolve(new Response(bt)),"data.xml");function yt(){const e=$.aoa_to_sheet([["Name","Department","Salary"],["Alice","Engineering","$145,000"],["Bob","Marketing","$120,000"]]),t=$.book_new();$.book_append_sheet(t,e,"Sheet1");const r=$e(t,{type:"array",bookType:"xlsx"});return f("application/vnd.openxmlformats-officedocument.spreadsheetml.sheet",()=>Promise.resolve(new Response(r)),"report.xlsx")}const St=yt(),Ae=f("image/tiff",()=>fetch(ft),"multi-page-tiff.tiff"),Le=f("application/octet-stream",()=>Promise.resolve(new Response("")),"data.bin"),Mr={title:"Components/DocumentViewer",component:g,tags:["beta"],args:{media:z},render:e=>d.jsx("div",{style:{height:"600px",width:"100%"},children:d.jsx(g,{...e})}),parameters:{controls:{expanded:!0}},argTypes:{media:{description:"The OSDK Media object to render",control:!1},className:{description:"Additional CSS class name for the root element",control:"text"},mimeTypeOverride:{description:"Override the auto-detected MIME type",control:"text"}}},y={args:{media:z},parameters:{docs:{source:{code:`import { DocumentViewer } from "@osdk/react-components/experimental/document-viewer";

<DocumentViewer media={employee.trainingMaterial} />`}}}},S={args:{media:ht},render:e=>d.jsx("div",{style:{height:"400px",width:"400px"},children:d.jsx(g,{...e})})},_={args:{media:xt}},T={args:{media:Mt},render:e=>d.jsx("div",{style:{height:"400px",width:"600px"},children:d.jsx(g,{...e})}),parameters:{msw:{handlers:[u.get("*/example.mp4",()=>j())]}}},D={args:{media:Le},render:e=>d.jsx("div",{style:{height:"200px",width:"400px"},children:d.jsx(g,{...e})})},P={args:{media:Et}},V={args:{media:St}},I={args:{media:kt},render:e=>d.jsx("div",{style:{height:"400px",width:"600px"},children:d.jsx(g,{...e})})},C={args:{media:Ae},parameters:{msw:{handlers:[u.get("*/multi-page-tiff.tiff",()=>j())]}}},R={args:{media:Ae,enableTiffToPdf:!0,fileName:"multi-page-tiff.tiff"},parameters:{msw:{handlers:[u.get("*/multi-page-tiff.tiff",()=>j()),u.get("*/compressed.tracemonkey-pldi-09.pdf",()=>j()),u.post("*/api/v2/mediasets/*/items/*/transform",()=>B.json({jobId:"mock-job-id",status:"SUCCESSFUL"})),u.get("*/api/v2/mediasets/*/items/*/transformationJobs/*/result",async()=>{const t=await(await fetch(je)).arrayBuffer();return new B(t,{headers:{"Content-Type":"application/pdf"}})}),u.get("*/api/v2/mediasets/*/items/*/transformationJobs/*",()=>B.json({status:"SUCCESSFUL"}))]},docs:{source:{code:`import { DocumentViewer } from "@osdk/react-components/experimental/document-viewer";

// Multi-page TIFFs are detected and converted to PDF via MIO transform API
// Falls back to TiffRenderer if transform fails or for single-page TIFFs
<DocumentViewer media={myMedia} enableTiffToPdf fileName="scan.tiff" />`}}}},O={args:{media:Le,mimeTypeOverride:"text/markdown"},parameters:{docs:{source:{code:`import { DocumentViewer } from "@osdk/react-components/experimental/document-viewer";

// Override auto-detected MIME type
<DocumentViewer media={myMedia} mimeTypeOverride="text/markdown" />`}}}},N={args:{media:z,pdfViewerProps:{initialSidebarOpen:!0,enableDownload:!0}},parameters:{docs:{source:{code:`import { DocumentViewer } from "@osdk/react-components/experimental/document-viewer";

<DocumentViewer
  media={myMedia}
  pdfViewerProps={{
    initialSidebarOpen: true,
    enableDownload: true,
  }}
/>`}}}};var q,Y,K;y.parameters={...y.parameters,docs:{...(q=y.parameters)==null?void 0:q.docs,source:{originalSource:`{
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
}`,...(K=(Y=y.parameters)==null?void 0:Y.docs)==null?void 0:K.source}}};var Z,Q,ee;S.parameters={...S.parameters,docs:{...(Z=S.parameters)==null?void 0:Z.docs,source:{originalSource:`{
  args: {
    media: mockImageMedia
  },
  render: (args: DocumentViewerProps) => <div style={{
    height: "400px",
    width: "400px"
  }}>
      <DocumentViewer {...args} />
    </div>
}`,...(ee=(Q=S.parameters)==null?void 0:Q.docs)==null?void 0:ee.source}}};var te,re,ne;_.parameters={..._.parameters,docs:{...(te=_.parameters)==null?void 0:te.docs,source:{originalSource:`{
  args: {
    media: mockMarkdownMedia
  }
}`,...(ne=(re=_.parameters)==null?void 0:re.docs)==null?void 0:ne.source}}};var ae,oe,se;T.parameters={...T.parameters,docs:{...(ae=T.parameters)==null?void 0:ae.docs,source:{originalSource:`{
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
}`,...(se=(oe=T.parameters)==null?void 0:oe.docs)==null?void 0:se.source}}};var ie,me,ce;D.parameters={...D.parameters,docs:{...(ie=D.parameters)==null?void 0:ie.docs,source:{originalSource:`{
  args: {
    media: mockUnsupportedMedia
  },
  render: (args: DocumentViewerProps) => <div style={{
    height: "200px",
    width: "400px"
  }}>
      <DocumentViewer {...args} />
    </div>
}`,...(ce=(me=D.parameters)==null?void 0:me.docs)==null?void 0:ce.source}}};var de,pe,le;P.parameters={...P.parameters,docs:{...(de=P.parameters)==null?void 0:de.docs,source:{originalSource:`{
  args: {
    media: mockEmailMedia
  }
}`,...(le=(pe=P.parameters)==null?void 0:pe.docs)==null?void 0:le.source}}};var fe,ue,ge;V.parameters={...V.parameters,docs:{...(fe=V.parameters)==null?void 0:fe.docs,source:{originalSource:`{
  args: {
    media: mockExcelMedia
  }
}`,...(ge=(ue=V.parameters)==null?void 0:ue.docs)==null?void 0:ge.source}}};var we,he,xe;I.parameters={...I.parameters,docs:{...(we=I.parameters)==null?void 0:we.docs,source:{originalSource:`{
  args: {
    media: mockXmlMedia
  },
  render: (args: DocumentViewerProps) => <div style={{
    height: "400px",
    width: "600px"
  }}>
      <DocumentViewer {...args} />
    </div>
}`,...(xe=(he=I.parameters)==null?void 0:he.docs)==null?void 0:xe.source}}};var Me,ve,Ee;C.parameters={...C.parameters,docs:{...(Me=C.parameters)==null?void 0:Me.docs,source:{originalSource:`{
  args: {
    media: mockTiffMedia
  },
  parameters: {
    msw: {
      handlers: [http.get("*/multi-page-tiff.tiff", () => passthrough())]
    }
  }
}`,...(Ee=(ve=C.parameters)==null?void 0:ve.docs)==null?void 0:Ee.source}}};var be,ke,ye;R.parameters={...R.parameters,docs:{...(be=R.parameters)==null?void 0:be.docs,source:{originalSource:`{
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
}`,...(ye=(ke=R.parameters)==null?void 0:ke.docs)==null?void 0:ye.source}}};var Se,_e,Te;O.parameters={...O.parameters,docs:{...(Se=O.parameters)==null?void 0:Se.docs,source:{originalSource:`{
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
}`,...(Te=(_e=O.parameters)==null?void 0:_e.docs)==null?void 0:Te.source}}};var De,Pe,Ve;N.parameters={...N.parameters,docs:{...(De=N.parameters)==null?void 0:De.docs,source:{originalSource:`{
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
}`,...(Ve=(Pe=N.parameters)==null?void 0:Pe.docs)==null?void 0:Ve.source}}};const vr=["Pdf","Image","Markdown","Video","UnsupportedType","Email","Excel","Xml","Tiff","TiffWithPdfConversion","WithMimeTypeOverride","WithPdfViewerProps"];export{P as Email,V as Excel,S as Image,_ as Markdown,y as Pdf,C as Tiff,R as TiffWithPdfConversion,D as UnsupportedType,T as Video,O as WithMimeTypeOverride,N as WithPdfViewerProps,I as Xml,vr as __namedExportsOrder,Mr as default};
