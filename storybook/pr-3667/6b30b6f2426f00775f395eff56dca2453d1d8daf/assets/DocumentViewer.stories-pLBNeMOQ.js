import{r as x,j as r,I as Re,h as f,J as F}from"./iframe-CZjmNuvW.js";import{c as Te}from"./index-zekgW7T_.js";import{E as Ne}from"./EmailViewer-Bzmzo6G4.js";import{E as Ae,u as U,w as Le}from"./ExcelViewer-B3QcapLi.js";import{I as Fe}from"./ImageViewer-YaaosqQ8.js";import{u as _e}from"./useMediaContents-CZVDXT84.js";import{s as v,T as Ue,U as Oe}from"./TiffRenderer-Bjtiq82g.js";import{S as O}from"./spin-CzLztx2g.js";import{E as Ee}from"./error-CVYkY9YG.js";import{s as w,M as Be}from"./MarkdownRenderer-CrGo1C3b.js";import{P as He}from"./PdfRenderer-tyKpts5i.js";import{a as $e}from"./assertUnreachable-tCT10eXl.js";import{V as We}from"./VideoViewer-DmdjFp_0.js";import{X as Xe}from"./XmlViewer-B9iSfF_h.js";import{B as ze}from"./PdfViewer-RLeAgDpt.js";import{u as Ge}from"./useOsdkClient-D_aq-H_z.js";import{I as k,S as Je}from"./svgIconContainer-jJn2f_24.js";import{w as qe}from"./withOsdkMetrics-CK5h1V6B.js";import{p as R}from"./passthrough-6sm3BHV7.js";import"./preload-helper-BwjyFM2k.js";import"./BaseImageViewer-BiVoHrGP.js";import"./index-YkV0U4e7.js";import"./PdfViewer.module.css-AwxwGMOS.js";import"./PdfViewerAnnotationLayer-BbTEsF_B.js";import"./constants-DsXMS3N3.js";import"./usePdfDocument-CIhZl7nS.js";import"./PdfViewerOutlineSidebar-0FWWF2xY.js";import"./PdfViewerSidebarHeader-Cbat8JEb.js";import"./useBaseUiId-B329C4dW.js";import"./useControlled-CZZVahEL.js";import"./CompositeRoot-T7sL_Xe3.js";import"./CompositeItem-CRbq-g-0.js";import"./ToolbarRootContext-Cj-IpAxj.js";import"./composite-DhizpSIQ.js";import"./PdfViewerSearchBar-B5poj-Z2.js";import"./chevron-up-D03Z3Wc8.js";import"./chevron-down-CI7WQt4v.js";import"./cross-CqtQFt8D.js";import"./PdfViewerSidebar-ZhM8xDmd.js";import"./index-CI-dN7aE.js";import"./index-DNc_ov5y.js";import"./index-D7QsBhqV.js";import"./PdfViewerToolbar-nN4H96Rf.js";import"./Button-B6FwUNRJ.js";import"./chevron-right-DKQu3Esw.js";import"./Input-CKRwcQSK.js";import"./minus-B8fjxFLy.js";const Ie=x.forwardRef((e,t)=>{const n=(e.size??k.STANDARD)>=k.LARGE,a=`${-1*(n?k.LARGE:k.STANDARD)/.05/2}`,i={transformOrigin:"center"};return r.jsx(Je,{iconName:"document",ref:t,...e,children:r.jsx("path",{d:n?"M239.6 400H79.6C68.6 400 59.6 391 59.6 380V20C59.6 9 68.6 0 79.6 0H339.6C350.6 0 359.6 9 359.6 20V280zM319.6 40H99.6V360H219.6V260H319.6z":"M180 320H60C49 320 40 311 40 300V20C40 9 49 0 60 0H260C271 0 280 9 280 20V220zM240 40H80V280H160V200H240z",fillRule:"evenodd",transform:`scale(0.05, -0.05) translate(${a}, ${a})`,style:i})})});Ie.displayName="Blueprint6.Icon.Document";const Ye=async e=>{const t=await e.arrayBuffer();return new Uint8Array(t)};function Ve({media:e,className:t,...n}){const{data:m,loading:a,error:i}=_e(e,Ye);return r.jsxs("div",{className:t,children:[a&&r.jsxs("div",{className:v.loadingContainer,children:[r.jsx(O,{className:v.spinnerIcon}),"Loading…"]}),i!=null&&r.jsxs("div",{className:v.errorContainer,children:[r.jsx(Ee,{className:v.errorIcon}),"Failed to load TIFF: ",i.message]}),m!=null&&r.jsx(Ue,{content:m,...n})]})}const Ke=async e=>e.text();function Ze({media:e,...t}){const{data:n,loading:m,error:a}=_e(e,Ke),i=Te(w.container,t.className);return r.jsxs("div",{className:i,children:[m&&r.jsxs("div",{className:w.loadingContainer,children:[r.jsx(O,{className:w.spinnerIcon}),"Loading…"]}),a!=null&&r.jsxs("div",{className:w.errorContainer,children:[r.jsx(Ee,{className:w.errorIcon}),"Failed to load document: ",a.message]}),n!=null&&r.jsx(Be,{content:n,...t})]})}const h={container:"DocumentViewer-module__container___v9u-RLHl",unsupportedContainer:"DocumentViewer-module__unsupportedContainer___zykC0l-q",unsupportedIcon:"DocumentViewer-module__unsupportedIcon___O-4GnVkr",loadingContainer:"DocumentViewer-module__loadingContainer___UFHuVwJN LoadingError-module__loadingContainer___bPqIqyjp",spinnerIcon:"DocumentViewer-module__spinnerIcon___Ig-dujWh LoadingError-module__spinnerIcon___t3TNZqEL"};let o=(function(e){return e.Pdf="pdf",e.Tiff="tiff",e.Image="image",e.Video="video",e.Markdown="markdown",e.Excel="excel",e.Email="email",e.Xml="xml",e.Unsupported="unsupported",e})({});const $={viewerType:o.Tiff,pdfData:void 0,loading:!1,error:void 0};function Qe(e,t){const n=Ge(),[m,a]=x.useState($),i=x.useRef(e);return i.current=e,x.useEffect(()=>{if(!t){a($);return}let s=!1;a({viewerType:o.Tiff,pdfData:void 0,loading:!0,error:void 0});async function u(){const d=i.current,N=await(await d.fetchContents()).arrayBuffer();if(s)return;if(Oe.decode(N).length<=1){s||a({viewerType:o.Tiff,pdfData:void 0,loading:!1,error:void 0});return}const g=d.getMediaReference(),M=await n(Re).transformAndWait({mediaReference:g,transformation:{$imageToDocument:{$operation:{$createPdf:{}}}}});if(s)return;const c=await M.arrayBuffer();s||a({viewerType:o.Pdf,pdfData:c,loading:!1,error:void 0})}return u().catch(d=>{s||(console.warn("TIFF to PDF conversion failed, falling back to TIFF renderer:",d),a({viewerType:o.Tiff,pdfData:void 0,loading:!1,error:d instanceof Error?d:new Error(String(d))}))}),()=>{s=!0}},[e,t,n]),m}function er({media:e,className:t,enableTiffToPdf:n,tiffRendererProps:m,pdfViewerProps:a}){const{viewerType:i,pdfData:s,loading:u}=Qe(e,n);return u?r.jsx("div",{className:t,children:r.jsxs("div",{className:h.loadingContainer,children:[r.jsx(O,{className:h.spinnerIcon}),"Converting document…"]})}):i===o.Pdf&&s!=null?r.jsx(ze,{src:s,className:t,...a}):r.jsx(Ve,{media:e,className:t,...m})}const rr=new Set(["image/png","image/jpeg","image/gif","image/svg+xml","image/webp","image/bmp"]),tr=new Set(["text/markdown","text/x-markdown"]),nr=new Set(["application/xml","text/xml"]);function or(e,t){if(e==="image/tiff")return!0;const n=t==null?void 0:t.toLowerCase();return(n==null?void 0:n.endsWith(".tif"))===!0||(n==null?void 0:n.endsWith(".tiff"))===!0}function ar(e,t){return e==="application/pdf"?o.Pdf:or(e,t)?o.Tiff:rr.has(e)?o.Image:e.startsWith("video/")?o.Video:tr.has(e)?o.Markdown:e==="application/vnd.openxmlformats-officedocument.spreadsheetml.sheet"?o.Excel:e==="message/rfc822"?o.Email:nr.has(e)?o.Xml:o.Unsupported}function sr({media:e,className:t,mimeTypeOverride:n,pdfViewerProps:m,imageViewerProps:a,videoViewerProps:i,tiffRendererProps:s,markdownRendererProps:u,excelViewerProps:d,emailViewerProps:H,xmlViewerProps:N,fileName:A,enableTiffToPdf:L=!1}){const g=n??e.getMediaReference().mimeType,M=x.useMemo(()=>ar(g,A),[g,A]),c=Te(h.container,t);switch(M){case o.Pdf:return r.jsx(He,{media:e,className:c,...m});case o.Tiff:return L?r.jsx(er,{media:e,className:c,enableTiffToPdf:L,tiffRendererProps:s,pdfViewerProps:m}):r.jsx(Ve,{media:e,className:c,...s});case o.Image:return r.jsx(Fe,{media:e,className:c,...a});case o.Video:return r.jsx(We,{media:e,className:c,...i});case o.Markdown:return r.jsx(Ze,{media:e,className:c,...u});case o.Excel:return r.jsx(Ae,{media:e,className:c,...d});case o.Email:return r.jsx(Ne,{media:e,className:c,...H});case o.Xml:return r.jsx(Xe,{media:e,className:c,...N});case o.Unsupported:return r.jsx("div",{className:c,children:r.jsxs("div",{className:h.unsupportedContainer,children:[r.jsx(Ie,{className:h.unsupportedIcon}),"Unsupported file type: ",g]})});default:$e(M)}}const l=qe(sr,"DocumentViewer"),Pe="/osdk-ts/storybook/pr-3667/6b30b6f2426f00775f395eff56dca2453d1d8daf/compressed.tracemonkey-pldi-09.pdf",ir="/osdk-ts/storybook/pr-3667/6b30b6f2426f00775f395eff56dca2453d1d8daf/example.mp4",mr="/osdk-ts/storybook/pr-3667/6b30b6f2426f00775f395eff56dca2453d1d8daf/multi-page-tiff.tiff";function cr(){const e=document.createElement("canvas");e.width=200,e.height=200;const t=e.getContext("2d"),n=t.createLinearGradient(0,0,200,200);n.addColorStop(0,"#3b82f6"),n.addColorStop(.5,"#8b5cf6"),n.addColorStop(1,"#ec4899"),t.fillStyle=n,t.fillRect(0,0,200,200),t.fillStyle="white",t.font="bold 24px sans-serif",t.textAlign="center",t.textBaseline="middle",t.fillText("Sample",100,90),t.fillText("Image",100,120);const m=e.toDataURL("image/png"),a=atob(m.split(",")[1]),i=new Uint8Array(a.length);for(let s=0;s<a.length;s++)i[s]=a.charCodeAt(s);return new Blob([i],{type:"image/png"})}const dr=`# Sample Document

This is a **sample markdown** document rendered by the DocumentViewer.

- Item 1
- Item 2
- Item 3
`;function p(e,t,n){return{fetchContents:t,fetchMetadata:()=>Promise.resolve({path:n,sizeBytes:1024,mediaType:e}),getMediaReference:()=>({mimeType:e,reference:{type:"mediaSetViewItem",mediaSetViewItem:{mediaItemRid:"ri.mio.main.media-item.mock",mediaSetRid:"ri.mio.main.media-set.mock-set",mediaSetViewRid:"ri.mio.main.media-set-view.mock-view"}}})}}const pr=cr(),B=p("application/pdf",()=>fetch(Pe),"document.pdf"),fr=p("image/png",()=>Promise.resolve(new Response(pr)),"photo.png"),lr=p("text/markdown",()=>Promise.resolve(new Response(dr)),"readme.md"),ur=p("video/mp4",()=>fetch(ir),"example.mp4"),gr=`From: Alice <alice@example.com>
To: Bob <bob@example.com>
Subject: Test Email
Date: Sun, 15 Mar 2026 14:30:00 +0000
Content-Type: text/html; charset=utf-8

<html><body><p>Hello Bob!</p></body></html>
`,wr=p("message/rfc822",()=>Promise.resolve(new Response(gr)),"message.eml"),xr=`<?xml version="1.0"?>
<catalog>
  <book id="1">
    <title>XML Developer's Guide</title>
    <price>44.95</price>
  </book>
</catalog>`,hr=p("application/xml",()=>Promise.resolve(new Response(xr)),"data.xml");function Mr(){const e=U.aoa_to_sheet([["Name","Department","Salary"],["Alice","Engineering","$145,000"],["Bob","Marketing","$120,000"]]),t=U.book_new();U.book_append_sheet(t,e,"Sheet1");const n=Le(t,{type:"array",bookType:"xlsx"});return p("application/vnd.openxmlformats-officedocument.spreadsheetml.sheet",()=>Promise.resolve(new Response(n)),"report.xlsx")}const vr=Mr(),je=p("image/tiff",()=>fetch(mr),"multi-page-tiff.tiff"),Ce=p("application/octet-stream",()=>Promise.resolve(new Response("")),"data.bin"),ut={title:"Components/DocumentViewer",component:l,tags:["beta"],args:{media:B},render:e=>r.jsx("div",{style:{height:"600px",width:"100%"},children:r.jsx(l,{...e})}),parameters:{controls:{expanded:!0}},argTypes:{media:{description:"The OSDK Media object to render",control:!1},className:{description:"Additional CSS class name for the root element",control:"text"},mimeTypeOverride:{description:"Override the auto-detected MIME type",control:"text"}}},S={args:{media:B},parameters:{docs:{source:{code:`import { DocumentViewer } from "@osdk/react-components/experimental/document-viewer";

<DocumentViewer media={employee.trainingMaterial} />`}}}},b={args:{media:fr},render:e=>r.jsx("div",{style:{height:"400px",width:"400px"},children:r.jsx(l,{...e})})},y={args:{media:lr}},D={args:{media:ur},render:e=>r.jsx("div",{style:{height:"400px",width:"600px"},children:r.jsx(l,{...e})}),parameters:{msw:{handlers:[f.get("*/example.mp4",()=>R())]}}},T={args:{media:Ce},render:e=>r.jsx("div",{style:{height:"200px",width:"400px"},children:r.jsx(l,{...e})})},_={args:{media:wr}},E={args:{media:vr}},I={args:{media:hr},render:e=>r.jsx("div",{style:{height:"400px",width:"600px"},children:r.jsx(l,{...e})})},V={args:{media:je},parameters:{msw:{handlers:[f.get("*/multi-page-tiff.tiff",()=>R())]}}},P={args:{media:je,enableTiffToPdf:!0,fileName:"multi-page-tiff.tiff"},parameters:{msw:{handlers:[f.get("*/multi-page-tiff.tiff",()=>R()),f.get("*/compressed.tracemonkey-pldi-09.pdf",()=>R()),f.post("*/api/v2/mediasets/*/items/*/transform",()=>F.json({jobId:"mock-job-id",status:"SUCCESSFUL"})),f.get("*/api/v2/mediasets/*/items/*/transformationJobs/*/result",async()=>{const t=await(await fetch(Pe)).arrayBuffer();return new F(t,{headers:{"Content-Type":"application/pdf"}})}),f.get("*/api/v2/mediasets/*/items/*/transformationJobs/*",()=>F.json({status:"SUCCESSFUL"}))]},docs:{source:{code:`import { DocumentViewer } from "@osdk/react-components/experimental/document-viewer";

// Multi-page TIFFs are detected and converted to PDF via MIO transform API
// Falls back to TiffRenderer if transform fails or for single-page TIFFs
<DocumentViewer media={myMedia} enableTiffToPdf fileName="scan.tiff" />`}}}},j={args:{media:Ce,mimeTypeOverride:"text/markdown"},parameters:{docs:{source:{code:`import { DocumentViewer } from "@osdk/react-components/experimental/document-viewer";

// Override auto-detected MIME type
<DocumentViewer media={myMedia} mimeTypeOverride="text/markdown" />`}}}},C={args:{media:B,pdfViewerProps:{initialSidebarOpen:!0,enableDownload:!0}},parameters:{docs:{source:{code:`import { DocumentViewer } from "@osdk/react-components/experimental/document-viewer";

<DocumentViewer
  media={myMedia}
  pdfViewerProps={{
    initialSidebarOpen: true,
    enableDownload: true,
  }}
/>`}}}};var W,X,z;S.parameters={...S.parameters,docs:{...(W=S.parameters)==null?void 0:W.docs,source:{originalSource:`{
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
}`,...(z=(X=S.parameters)==null?void 0:X.docs)==null?void 0:z.source}}};var G,J,q;b.parameters={...b.parameters,docs:{...(G=b.parameters)==null?void 0:G.docs,source:{originalSource:`{
  args: {
    media: mockImageMedia
  },
  render: (args: DocumentViewerProps) => <div style={{
    height: "400px",
    width: "400px"
  }}>
      <DocumentViewer {...args} />
    </div>
}`,...(q=(J=b.parameters)==null?void 0:J.docs)==null?void 0:q.source}}};var Y,K,Z;y.parameters={...y.parameters,docs:{...(Y=y.parameters)==null?void 0:Y.docs,source:{originalSource:`{
  args: {
    media: mockMarkdownMedia
  }
}`,...(Z=(K=y.parameters)==null?void 0:K.docs)==null?void 0:Z.source}}};var Q,ee,re;D.parameters={...D.parameters,docs:{...(Q=D.parameters)==null?void 0:Q.docs,source:{originalSource:`{
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
}`,...(re=(ee=D.parameters)==null?void 0:ee.docs)==null?void 0:re.source}}};var te,ne,oe;T.parameters={...T.parameters,docs:{...(te=T.parameters)==null?void 0:te.docs,source:{originalSource:`{
  args: {
    media: mockUnsupportedMedia
  },
  render: (args: DocumentViewerProps) => <div style={{
    height: "200px",
    width: "400px"
  }}>
      <DocumentViewer {...args} />
    </div>
}`,...(oe=(ne=T.parameters)==null?void 0:ne.docs)==null?void 0:oe.source}}};var ae,se,ie;_.parameters={..._.parameters,docs:{...(ae=_.parameters)==null?void 0:ae.docs,source:{originalSource:`{
  args: {
    media: mockEmailMedia
  }
}`,...(ie=(se=_.parameters)==null?void 0:se.docs)==null?void 0:ie.source}}};var me,ce,de;E.parameters={...E.parameters,docs:{...(me=E.parameters)==null?void 0:me.docs,source:{originalSource:`{
  args: {
    media: mockExcelMedia
  }
}`,...(de=(ce=E.parameters)==null?void 0:ce.docs)==null?void 0:de.source}}};var pe,fe,le;I.parameters={...I.parameters,docs:{...(pe=I.parameters)==null?void 0:pe.docs,source:{originalSource:`{
  args: {
    media: mockXmlMedia
  },
  render: (args: DocumentViewerProps) => <div style={{
    height: "400px",
    width: "600px"
  }}>
      <DocumentViewer {...args} />
    </div>
}`,...(le=(fe=I.parameters)==null?void 0:fe.docs)==null?void 0:le.source}}};var ue,ge,we;V.parameters={...V.parameters,docs:{...(ue=V.parameters)==null?void 0:ue.docs,source:{originalSource:`{
  args: {
    media: mockTiffMedia
  },
  parameters: {
    msw: {
      handlers: [http.get("*/multi-page-tiff.tiff", () => passthrough())]
    }
  }
}`,...(we=(ge=V.parameters)==null?void 0:ge.docs)==null?void 0:we.source}}};var xe,he,Me;P.parameters={...P.parameters,docs:{...(xe=P.parameters)==null?void 0:xe.docs,source:{originalSource:`{
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
}`,...(Me=(he=P.parameters)==null?void 0:he.docs)==null?void 0:Me.source}}};var ve,ke,Se;j.parameters={...j.parameters,docs:{...(ve=j.parameters)==null?void 0:ve.docs,source:{originalSource:`{
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
}`,...(Se=(ke=j.parameters)==null?void 0:ke.docs)==null?void 0:Se.source}}};var be,ye,De;C.parameters={...C.parameters,docs:{...(be=C.parameters)==null?void 0:be.docs,source:{originalSource:`{
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
}`,...(De=(ye=C.parameters)==null?void 0:ye.docs)==null?void 0:De.source}}};const gt=["Pdf","Image","Markdown","Video","UnsupportedType","Email","Excel","Xml","Tiff","TiffWithPdfConversion","WithMimeTypeOverride","WithPdfViewerProps"];export{_ as Email,E as Excel,b as Image,y as Markdown,S as Pdf,V as Tiff,P as TiffWithPdfConversion,T as UnsupportedType,D as Video,j as WithMimeTypeOverride,C as WithPdfViewerProps,I as Xml,gt as __namedExportsOrder,ut as default};
