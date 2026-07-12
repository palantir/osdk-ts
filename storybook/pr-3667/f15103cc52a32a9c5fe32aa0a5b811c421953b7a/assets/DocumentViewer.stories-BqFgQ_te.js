import{r as w,j as r,I as Re,h as l,J as F}from"./iframe-BI4oyWQy.js";import{c as Te}from"./index-B4cN3ENE.js";import{E as Ae}from"./EmailViewer-D4VpRnC-.js";import{E as Le,u as U,w as Ne}from"./ExcelViewer-BVGoMyQA.js";import{I as Fe}from"./ImageViewer-DFQVCVSS.js";import{u as _e}from"./useMediaContents-gwIEWYUi.js";import{s as v,T as Ue,U as Oe}from"./TiffRenderer-D58TW9XW.js";import{S as O}from"./spin-DuFlyg6_.js";import{E as Ee}from"./error-BtUWaEg7.js";import{s as g,M as Be}from"./MarkdownRenderer-CCTvz4a4.js";import{P as He}from"./PdfRenderer-DadneM_5.js";import{a as $e}from"./assertUnreachable-tCT10eXl.js";import{V as We}from"./VideoViewer-tUIgI_FP.js";import{X as Xe}from"./XmlViewer-DUf-kzOh.js";import{B as ze}from"./PdfViewer-BjcLg_ji.js";import{u as Ge}from"./useOsdkClient--A2eY1s5.js";import{I as k,S as Je}from"./svgIconContainer-DhVnukk2.js";import{w as qe}from"./withOsdkMetrics-C-T3cVLi.js";import{p as R}from"./passthrough-6sm3BHV7.js";import"./preload-helper-Uu2Ie1vE.js";import"./BaseImageViewer-_HtSizwE.js";import"./index-YkV0U4e7.js";import"./PdfViewer.module.css-MEqFp1CP.js";import"./PdfViewerAnnotationLayer-B3_jluNE.js";import"./constants-DsXMS3N3.js";import"./usePdfDocument-CWkPm-GS.js";import"./PdfViewerOutlineSidebar-Di-VDFx8.js";import"./PdfViewerSidebarHeader-ewuiXY8f.js";import"./useBaseUiId-8x_XEMPm.js";import"./useControlled-ek7CZzpd.js";import"./CompositeRoot-C9_2nNHe.js";import"./CompositeItem-BGIjPEv_.js";import"./ToolbarRootContext-D0geINdH.js";import"./composite-D-66BLrp.js";import"./PdfViewerSearchBar-CkE-zYae.js";import"./chevron-up-BfpWFJ_q.js";import"./chevron-down-v-E9IP1D.js";import"./cross-BXWnhKHP.js";import"./PdfViewerSidebar-DDipvbRv.js";import"./index-mswfmxaX.js";import"./index-B5ybX1ZP.js";import"./index-RxrdGkU6.js";import"./PdfViewerToolbar-xtUeC_PG.js";import"./Button-yfi4hM-9.js";import"./chevron-right-BJlv23M2.js";import"./Input-r7-566OJ.js";import"./minus-DcgrcxlX.js";const Ie=w.forwardRef((e,t)=>{const n=(e.size??k.STANDARD)>=k.LARGE,o=`${-1*(n?k.LARGE:k.STANDARD)/.05/2}`,m={transformOrigin:"center"};return r.jsx(Je,{iconName:"document",ref:t,...e,children:r.jsx("path",{d:n?"M239.6 400H79.6C68.6 400 59.6 391 59.6 380V20C59.6 9 68.6 0 79.6 0H339.6C350.6 0 359.6 9 359.6 20V280zM319.6 40H99.6V360H219.6V260H319.6z":"M180 320H60C49 320 40 311 40 300V20C40 9 49 0 60 0H260C271 0 280 9 280 20V220zM240 40H80V280H160V200H240z",fillRule:"evenodd",transform:`scale(0.05, -0.05) translate(${o}, ${o})`,style:m})})});Ie.displayName="Blueprint6.Icon.Document";const Ye=async e=>{const t=await e.arrayBuffer();return new Uint8Array(t)};function Ve({media:e,className:t,...n}){const{data:i,loading:o,error:m}=_e(e,Ye);return r.jsxs("div",{className:t,children:[o&&r.jsxs("div",{className:v.loadingContainer,children:[r.jsx(O,{className:v.spinnerIcon}),"Loading…"]}),m!=null&&r.jsxs("div",{className:v.errorContainer,children:[r.jsx(Ee,{className:v.errorIcon}),"Failed to load TIFF: ",m.message]}),i!=null&&r.jsx(Ue,{content:i,...n})]})}const Ke=async e=>e.text();function Ze({media:e,...t}){const{data:n,loading:i,error:o}=_e(e,Ke);return r.jsxs("div",{className:Te(g.container,t.className),children:[i&&r.jsxs("div",{className:g.loadingContainer,children:[r.jsx(O,{className:g.spinnerIcon}),"Loading…"]}),o!=null&&r.jsxs("div",{className:g.errorContainer,children:[r.jsx(Ee,{className:g.errorIcon}),"Failed to load document: ",o.message]}),n!=null&&r.jsx(Be,{content:n,...t})]})}const x={container:"DocumentViewer-module__container___v9u-RLHl",unsupportedContainer:"DocumentViewer-module__unsupportedContainer___zykC0l-q",unsupportedIcon:"DocumentViewer-module__unsupportedIcon___O-4GnVkr",loadingContainer:"DocumentViewer-module__loadingContainer___UFHuVwJN LoadingError-module__loadingContainer___bPqIqyjp",spinnerIcon:"DocumentViewer-module__spinnerIcon___Ig-dujWh LoadingError-module__spinnerIcon___t3TNZqEL"};let a=(function(e){return e.Pdf="pdf",e.Tiff="tiff",e.Image="image",e.Video="video",e.Markdown="markdown",e.Excel="excel",e.Email="email",e.Xml="xml",e.Unsupported="unsupported",e})({});const $={viewerType:a.Tiff,pdfData:void 0,loading:!1,error:void 0};function Qe(e,t){const n=Ge(),[i,o]=w.useState($),m=w.useRef(e);return m.current=e,w.useEffect(()=>{if(!t){o($);return}let s=!1;o({viewerType:a.Tiff,pdfData:void 0,loading:!0,error:void 0});async function u(){const d=m.current,A=await(await d.fetchContents()).arrayBuffer();if(s)return;if(Oe.decode(A).length<=1){s||o({viewerType:a.Tiff,pdfData:void 0,loading:!1,error:void 0});return}const L=d.getMediaReference(),h=await n(Re).transformAndWait({mediaReference:L,transformation:{$imageToDocument:{$operation:{$createPdf:{}}}}});if(s)return;const M=await h.arrayBuffer();s||o({viewerType:a.Pdf,pdfData:M,loading:!1,error:void 0})}return u().catch(d=>{s||(console.warn("TIFF to PDF conversion failed, falling back to TIFF renderer:",d),o({viewerType:a.Tiff,pdfData:void 0,loading:!1,error:d instanceof Error?d:new Error(String(d))}))}),()=>{s=!0}},[e,t,n]),i}function er({media:e,className:t,enableTiffToPdf:n,tiffRendererProps:i,pdfViewerProps:o}){const{viewerType:m,pdfData:s,loading:u}=Qe(e,n);return u?r.jsx("div",{className:t,children:r.jsxs("div",{className:x.loadingContainer,children:[r.jsx(O,{className:x.spinnerIcon}),"Converting document…"]})}):m===a.Pdf&&s!=null?r.jsx(ze,{src:s,className:t,...o}):r.jsx(Ve,{media:e,className:t,...i})}const rr=new Set(["image/png","image/jpeg","image/gif","image/svg+xml","image/webp","image/bmp"]),tr=new Set(["text/markdown","text/x-markdown"]),nr=new Set(["application/xml","text/xml"]);function ar(e,t){if(e==="image/tiff")return!0;const n=t==null?void 0:t.toLowerCase();return(n==null?void 0:n.endsWith(".tif"))===!0||(n==null?void 0:n.endsWith(".tiff"))===!0}function or(e,t){return e==="application/pdf"?a.Pdf:ar(e,t)?a.Tiff:rr.has(e)?a.Image:e.startsWith("video/")?a.Video:tr.has(e)?a.Markdown:e==="application/vnd.openxmlformats-officedocument.spreadsheetml.sheet"?a.Excel:e==="message/rfc822"?a.Email:nr.has(e)?a.Xml:a.Unsupported}function sr({media:e,className:t,mimeTypeOverride:n,pdfViewerProps:i,imageViewerProps:o,videoViewerProps:m,tiffRendererProps:s,markdownRendererProps:u,excelViewerProps:d,emailViewerProps:A,xmlViewerProps:L,fileName:h,enableTiffToPdf:M=!1}){const N=n??e.getMediaReference().mimeType,H=w.useMemo(()=>or(N,h),[N,h]),c=Te(x.container,t);switch(H){case a.Pdf:return r.jsx(He,{media:e,className:c,...i});case a.Tiff:return M?r.jsx(er,{media:e,className:c,enableTiffToPdf:M,tiffRendererProps:s,pdfViewerProps:i}):r.jsx(Ve,{media:e,className:c,...s});case a.Image:return r.jsx(Fe,{media:e,className:c,...o});case a.Video:return r.jsx(We,{media:e,className:c,...m});case a.Markdown:return r.jsx(Ze,{media:e,className:c,...u});case a.Excel:return r.jsx(Le,{media:e,className:c,...d});case a.Email:return r.jsx(Ae,{media:e,className:c,...A});case a.Xml:return r.jsx(Xe,{media:e,className:c,...L});case a.Unsupported:return r.jsx("div",{className:c,children:r.jsxs("div",{className:x.unsupportedContainer,children:[r.jsx(Ie,{className:x.unsupportedIcon}),"Unsupported file type: ",N]})});default:$e(H)}}const f=qe(sr,"DocumentViewer"),Pe="/osdk-ts/storybook/pr-3667/f15103cc52a32a9c5fe32aa0a5b811c421953b7a/compressed.tracemonkey-pldi-09.pdf",ir="/osdk-ts/storybook/pr-3667/f15103cc52a32a9c5fe32aa0a5b811c421953b7a/example.mp4",mr="/osdk-ts/storybook/pr-3667/f15103cc52a32a9c5fe32aa0a5b811c421953b7a/multi-page-tiff.tiff";function cr(){const e=document.createElement("canvas");e.width=200,e.height=200;const t=e.getContext("2d"),n=t.createLinearGradient(0,0,200,200);n.addColorStop(0,"#3b82f6"),n.addColorStop(.5,"#8b5cf6"),n.addColorStop(1,"#ec4899"),t.fillStyle=n,t.fillRect(0,0,200,200),t.fillStyle="white",t.font="bold 24px sans-serif",t.textAlign="center",t.textBaseline="middle",t.fillText("Sample",100,90),t.fillText("Image",100,120);const i=e.toDataURL("image/png"),o=atob(i.split(",")[1]),m=new Uint8Array(o.length);for(let s=0;s<o.length;s++)m[s]=o.charCodeAt(s);return new Blob([m],{type:"image/png"})}const dr=`# Sample Document

This is a **sample markdown** document rendered by the DocumentViewer.

- Item 1
- Item 2
- Item 3
`;function p(e,t,n){return{fetchContents:t,fetchMetadata:()=>Promise.resolve({path:n,sizeBytes:1024,mediaType:e}),getMediaReference:()=>({mimeType:e,reference:{type:"mediaSetViewItem",mediaSetViewItem:{mediaItemRid:"ri.mio.main.media-item.mock",mediaSetRid:"ri.mio.main.media-set.mock-set",mediaSetViewRid:"ri.mio.main.media-set-view.mock-view"}}})}}const pr=cr(),B=p("application/pdf",()=>fetch(Pe),"document.pdf"),lr=p("image/png",()=>Promise.resolve(new Response(pr)),"photo.png"),fr=p("text/markdown",()=>Promise.resolve(new Response(dr)),"readme.md"),ur=p("video/mp4",()=>fetch(ir),"example.mp4"),gr=`From: Alice <alice@example.com>
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
</catalog>`,hr=p("application/xml",()=>Promise.resolve(new Response(xr)),"data.xml");function Mr(){const e=U.aoa_to_sheet([["Name","Department","Salary"],["Alice","Engineering","$145,000"],["Bob","Marketing","$120,000"]]),t=U.book_new();U.book_append_sheet(t,e,"Sheet1");const n=Ne(t,{type:"array",bookType:"xlsx"});return p("application/vnd.openxmlformats-officedocument.spreadsheetml.sheet",()=>Promise.resolve(new Response(n)),"report.xlsx")}const vr=Mr(),je=p("image/tiff",()=>fetch(mr),"multi-page-tiff.tiff"),Ce=p("application/octet-stream",()=>Promise.resolve(new Response("")),"data.bin"),ut={title:"Components/DocumentViewer",component:f,tags:["beta"],args:{media:B},render:e=>r.jsx("div",{style:{height:"600px",width:"100%"},children:r.jsx(f,{...e})}),parameters:{controls:{expanded:!0}},argTypes:{media:{description:"The OSDK Media object to render",control:!1},className:{description:"Additional CSS class name for the root element",control:"text"},mimeTypeOverride:{description:"Override the auto-detected MIME type",control:"text"}}},S={args:{media:B},parameters:{docs:{source:{code:`import { DocumentViewer } from "@osdk/react-components/experimental/document-viewer";

<DocumentViewer media={employee.trainingMaterial} />`}}}},b={args:{media:lr},render:e=>r.jsx("div",{style:{height:"400px",width:"400px"},children:r.jsx(f,{...e})})},y={args:{media:fr}},D={args:{media:ur},render:e=>r.jsx("div",{style:{height:"400px",width:"600px"},children:r.jsx(f,{...e})}),parameters:{msw:{handlers:[l.get("*/example.mp4",()=>R())]}}},T={args:{media:Ce},render:e=>r.jsx("div",{style:{height:"200px",width:"400px"},children:r.jsx(f,{...e})})},_={args:{media:wr}},E={args:{media:vr}},I={args:{media:hr},render:e=>r.jsx("div",{style:{height:"400px",width:"600px"},children:r.jsx(f,{...e})})},V={args:{media:je},parameters:{msw:{handlers:[l.get("*/multi-page-tiff.tiff",()=>R())]}}},P={args:{media:je,enableTiffToPdf:!0,fileName:"multi-page-tiff.tiff"},parameters:{msw:{handlers:[l.get("*/multi-page-tiff.tiff",()=>R()),l.get("*/compressed.tracemonkey-pldi-09.pdf",()=>R()),l.post("*/api/v2/mediasets/*/items/*/transform",()=>F.json({jobId:"mock-job-id",status:"SUCCESSFUL"})),l.get("*/api/v2/mediasets/*/items/*/transformationJobs/*/result",async()=>{const t=await(await fetch(Pe)).arrayBuffer();return new F(t,{headers:{"Content-Type":"application/pdf"}})}),l.get("*/api/v2/mediasets/*/items/*/transformationJobs/*",()=>F.json({status:"SUCCESSFUL"}))]},docs:{source:{code:`import { DocumentViewer } from "@osdk/react-components/experimental/document-viewer";

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
}`,...(re=(ee=D.parameters)==null?void 0:ee.docs)==null?void 0:re.source}}};var te,ne,ae;T.parameters={...T.parameters,docs:{...(te=T.parameters)==null?void 0:te.docs,source:{originalSource:`{
  args: {
    media: mockUnsupportedMedia
  },
  render: (args: DocumentViewerProps) => <div style={{
    height: "200px",
    width: "400px"
  }}>
      <DocumentViewer {...args} />
    </div>
}`,...(ae=(ne=T.parameters)==null?void 0:ne.docs)==null?void 0:ae.source}}};var oe,se,ie;_.parameters={..._.parameters,docs:{...(oe=_.parameters)==null?void 0:oe.docs,source:{originalSource:`{
  args: {
    media: mockEmailMedia
  }
}`,...(ie=(se=_.parameters)==null?void 0:se.docs)==null?void 0:ie.source}}};var me,ce,de;E.parameters={...E.parameters,docs:{...(me=E.parameters)==null?void 0:me.docs,source:{originalSource:`{
  args: {
    media: mockExcelMedia
  }
}`,...(de=(ce=E.parameters)==null?void 0:ce.docs)==null?void 0:de.source}}};var pe,le,fe;I.parameters={...I.parameters,docs:{...(pe=I.parameters)==null?void 0:pe.docs,source:{originalSource:`{
  args: {
    media: mockXmlMedia
  },
  render: (args: DocumentViewerProps) => <div style={{
    height: "400px",
    width: "600px"
  }}>
      <DocumentViewer {...args} />
    </div>
}`,...(fe=(le=I.parameters)==null?void 0:le.docs)==null?void 0:fe.source}}};var ue,ge,we;V.parameters={...V.parameters,docs:{...(ue=V.parameters)==null?void 0:ue.docs,source:{originalSource:`{
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
