import{R as a,O as Oe,i as Ve,r as w,h as ve,j as i,M as Me}from"./iframe-Dl4wRsyk.js";import{c as je}from"./index-BMotijlX.js";import{B as f}from"./PdfViewer-B5nh1PeY.js";import{s as h,S as Te}from"./PdfViewer.module.css-Dz_RhWut.js";import{E as De}from"./error-CPxMWRgt.js";import{w as Ae}from"./withOsdkMetrics-Cy1YRbNl.js";import{E as Ce}from"./Employee-BAk2o20h.js";import{m as B,d as N}from"./makeExternalStore-CK4YqBna.js";import"./preload-helper-Dp1pzeXC.js";import"./index-DZ5kNgnc.js";import"./index-D0vI-Ljk.js";import"./PdfViewerAnnotationLayer-CkQvhPYJ.js";import"./PdfViewerOutlineSidebar-Cb2Q2LTJ.js";import"./PdfViewerSidebarHeader-Cz9C5Ndl.js";import"./useBaseUiId-DvykIkBU.js";import"./useControlled-CpODBJNs.js";import"./CompositeRoot-DTW01U-e.js";import"./CompositeItem-MNd1rvYg.js";import"./ToolbarRootContext-CJNC0QPw.js";import"./composite-CWvqez1L.js";import"./svgIconContainer-ZNRey--2.js";import"./PdfViewerSearchBar-CTKuxyTd.js";import"./chevron-up-DE6bt3OA.js";import"./chevron-down-DTV8sNB1.js";import"./cross-DH8Ccwfc.js";import"./PdfViewerSidebar-Dt84IQ7s.js";import"./index-kVYBSbq4.js";import"./constants-rggtfkKZ.js";import"./PdfViewerToolbar-PiUP5bj5.js";import"./Button-BBvOUCzs.js";import"./chevron-right-D3O22I1Z.js";import"./Input-CHcIZl-Z.js";import"./minus-CGn7jnqc.js";import"./usePdfDocument-C3MIyxsd.js";import"./useRegisterUserAgent-DeVXbmYa.js";function _e(...e){const{observableClient:n}=a.useContext(Oe),o="$objectType"in e[0],r=!o&&e[2]!=null&&typeof e[2]=="object"?e[2]:void 0,l=o?typeof e[1]=="boolean"?e[1]:!0:r?r.enabled??!0:typeof e[2]=="boolean"?e[2]:!0,b=r==null?void 0:r.$select,m=r==null?void 0:r.$loadPropertySecurityMetadata,u=r==null?void 0:r.$includeAllBaseObjectProperties,g=o?"offline":void 0,s=o?e[0].$objectType:e[0],c=o?e[0].$primaryKey:e[1],d=typeof s=="string"?s:s.apiName,A=a.useMemo(()=>b,[JSON.stringify(b)]),{subscribe:ke,getSnapShot:Ee}=a.useMemo(()=>l?B(p=>n.observeObject(s,c,{mode:g,$includeAllBaseObjectProperties:u,...A?{select:A}:{},...m?{$loadPropertySecurityMetadata:m}:{}},p),N({hookType:"useOsdkObject",objectType:d,primaryKey:String(c)})):B(()=>({unsubscribe:()=>{}}),N({hookType:"useOsdkObject",objectType:d,primaryKey:String(c)})),[l,n,s,d,c,g,A,m,u]),t=a.useSyncExternalStore(ke,Ee),R=a.useCallback(()=>{throw new Error("not implemented")},[]);return a.useMemo(()=>{let p;return t&&"error"in t&&t.error?p=t.error:(t==null?void 0:t.status)==="error"&&(p=new Error("Failed to load object")),{object:t==null?void 0:t.object,isLoading:l&&p==null?(t==null?void 0:t.status)==="loading"||(t==null?void 0:t.status)==="init"||!t:!1,isOptimistic:!!(t!=null&&t.isOptimistic),error:p,forceUpdate:R}},[t,l,R])}const He=2147483647,F=100,Re=400,Be=5;function Ne(){return Ve()?Be:Math.floor(Math.random()*(Re-F)+F)}async function Fe(e){let n;switch(e){case"infinite":{n=He;break}case"real":{n=Ne();break}default:throw new Error(`Failed to delay a response: unknown delay mode "${e}". Please make sure you provide one of the supported modes ("real", "infinite") or a number.`)}return new Promise(o=>setTimeout(o,n))}function C(){return C=Object.assign?Object.assign.bind():function(e){for(var n=1;n<arguments.length;n++){var o=arguments[n];for(var r in o)({}).hasOwnProperty.call(o,r)&&(e[r]=o[r])}return e},C.apply(null,arguments)}async function Le(e){return(await e.fetchContents()).arrayBuffer()}function Ie({media:e,className:n,...o}){const[r,l]=w.useState(void 0),[b,m]=w.useState(!0),[u,g]=w.useState(void 0);w.useEffect(function(){let c=!1;return m(!0),g(void 0),l(void 0),Le(e).then(d=>{c||(l(d),m(!1))}).catch(d=>{c||(g(d instanceof Error?d:new Error(String(d))),m(!1))}),()=>{c=!0}},[e]);const s=je(h.pdfViewer,n);return b?a.createElement("div",{className:s},a.createElement("div",{className:h.loadingContainer},a.createElement(Te,{className:h.spinnerIcon}),"Loading…")):u!=null?a.createElement("div",{className:s},a.createElement("div",{className:h.errorContainer},a.createElement(De,{className:h.errorIcon}),"Failed to load PDF: ",u.message)):r==null?a.createElement("div",{className:s},a.createElement("div",{className:h.loadingContainer},"No document")):a.createElement(f,C({src:r,className:n},o))}const _=Ae(Ie,"PdfViewer"),{fn:y}=__STORYBOOK_MODULE_TEST__,H="./compressed.tracemonkey-pldi-09.pdf",We="./nested_outline.pdf";function Se(e,n){return{fetchContents:()=>fetch(e),fetchMetadata:()=>Promise.resolve({path:n,sizeBytes:1024e3,mediaType:"application/pdf"}),getMediaReference:()=>({mimeType:"application/pdf",reference:{type:"mediaSetViewItem",mediaSetViewItem:{mediaItemRid:"ri.mio.main.media-item.mock-pdf",mediaSetRid:"ri.mio.main.media-set.mock-set",mediaSetViewRid:"ri.mio.main.media-set-view.mock-view"}}})}}const $e=Se(H,"compressed.tracemonkey-pldi-09.pdf"),Ue=Se(We,"pdf-example-bookmarks.pdf"),Vt={title:"Experimental/PdfViewer/Features",tags:["experimental"],component:_,args:{media:$e},render:e=>i.jsx("div",{style:{height:"600px"},children:i.jsx(_,{...e})}),parameters:{controls:{expanded:!0}},argTypes:{media:{description:"The Media object to fetch PDF contents from",control:!1},annotations:{description:"Annotations to overlay on the PDF",control:"object"},onAnnotationClick:{description:"Callback fired when an annotation is clicked",control:!1,table:{category:"Events"}},initialPage:{description:"Page to display on first render (1-indexed)",control:"number",table:{defaultValue:{summary:"1"}}},initialScale:{description:"Initial zoom scale",control:"number",table:{defaultValue:{summary:"1.0"}}},initialSidebarOpen:{description:"Whether the thumbnail sidebar is initially open",control:"boolean",table:{defaultValue:{summary:"false"}}},enableDownload:{description:"Whether the download button is shown in the toolbar",control:"boolean",table:{defaultValue:{summary:"false"}}},sidebarMode:{description:"Which sidebar panel to show when the sidebar is open",control:"radio",options:["thumbnails","outline"],table:{defaultValue:{summary:'"thumbnails"'}}},outlineIcons:{description:"Custom icon components for each outline depth level (0-indexed)",control:!1},className:{description:"Additional CSS class name for the root element",control:"text"}}},x={args:{src:H},render:e=>i.jsx("div",{style:{height:"600px"},children:i.jsx(f,{...e})}),parameters:{docs:{source:{code:`import { BasePdfViewer } from "@osdk/react-components/experimental/pdf-viewer";

<BasePdfViewer src="/compressed.tracemonkey-pldi-09.pdf" />`}}}},P={args:{onAnnotationClick:y(),annotations:[{id:"h1",type:"highlight",page:1,rect:{x:55,y:696,width:480,height:24},label:"Title highlight"},{id:"u1",type:"underline",page:1,rect:{x:88,y:614,width:440,height:2}},{id:"c1",type:"comment",page:1,rect:{x:538,y:400,width:24,height:24},label:"Review this section"},{id:"p1",type:"pin",page:1,rect:{x:44,y:446,width:16,height:16},label:"Pin marker"}]},parameters:{docs:{source:{code:`import { PdfViewer } from "@osdk/react-components/experimental/pdf-viewer";

<PdfViewer
  media={myMediaObject}
  annotations={[
    { id: "h1", type: "highlight", page: 1, rect: { x: 55, y: 696, width: 480, height: 24 }, label: "Title highlight" },
    { id: "u1", type: "underline", page: 1, rect: { x: 88, y: 614, width: 440, height: 2 } },
    { id: "c1", type: "comment", page: 1, rect: { x: 538, y: 400, width: 24, height: 24 }, label: "Review this" },
    { id: "p1", type: "pin", page: 1, rect: { x: 44, y: 446, width: 16, height: 16 }, label: "Pin" },
  ]}
  onAnnotationClick={(annotation) => handleAnnotationClick(annotation)}
/>`}}}},v={args:{initialSidebarOpen:!0},parameters:{docs:{source:{code:`import { PdfViewer } from "@osdk/react-components/experimental/pdf-viewer";

<PdfViewer media={myMediaObject} initialSidebarOpen />`}}}},S={args:{initialScale:1.5},parameters:{docs:{source:{code:`import { PdfViewer } from "@osdk/react-components/experimental/pdf-viewer";

<PdfViewer media={myMediaObject} initialScale={1.5} />`}}}},k={args:{enableDownload:!0},parameters:{docs:{source:{code:`import { PdfViewer } from "@osdk/react-components/experimental/pdf-viewer";

<PdfViewer media={myMediaObject} enableDownload />`}}}},E={args:{initialSidebarOpen:!0,sidebarMode:"outline"},parameters:{docs:{source:{code:`import { PdfViewer } from "@osdk/react-components/experimental/pdf-viewer";

<PdfViewer media={myMediaObject} initialSidebarOpen sidebarMode="outline" />`}}}},O={args:{src:"/loading.pdf"},render:e=>i.jsx("div",{style:{height:"600px"},children:i.jsx(f,{...e})}),parameters:{msw:{handlers:[ve.get("/loading.pdf",async()=>{await Fe("infinite")})]}}},V={args:{src:"/error.pdf"},render:e=>i.jsx("div",{style:{height:"600px"},children:i.jsx(f,{...e})}),parameters:{msw:{handlers:[ve.get("/error.pdf",()=>new Response("Server Error",{status:500}))]}}};function Ke({src:e,onTextHighlight:n,onHighlightDelete:o}){return i.jsx("div",{style:{height:"600px"},children:i.jsx(f,{src:e,enableHighlight:!0,onTextHighlight:n,onHighlightDelete:o})})}const M={args:{onTextHighlight:y(),onHighlightDelete:y()},render:e=>i.jsx(Ke,{src:H,onTextHighlight:e.onTextHighlight,onHighlightDelete:e.onHighlightDelete}),parameters:{docs:{source:{code:`import { useState, useCallback } from "react";
import { BasePdfViewer } from "@osdk/react-components/experimental/pdf-viewer";
import type { PdfAnnotation, PdfTextHighlightEvent } from "@osdk/react-components/experimental/pdf-viewer";

function MyPdfViewer({ src }: { src: string }) {
  const [annotations, setAnnotations] = useState<PdfAnnotation[]>([]);

  const handleTextHighlight = useCallback((event: PdfTextHighlightEvent) => {
    setAnnotations((prev) => [...prev, {
      id: crypto.randomUUID(),
      type: "highlight",
      page: event.page,
      rect: event.rects[0],
      rects: event.rects,
      color: event.color,
      label: event.selectedText,
    }]);
  }, []);

  // Click a highlight to remove it
  const handleAnnotationClick = useCallback((annotation: PdfAnnotation) => {
    setAnnotations((prev) => prev.filter((a) => a.id !== annotation.id));
  }, []);

  return (
    <BasePdfViewer
      src={src}
      enableHighlight
      onTextHighlight={handleTextHighlight}
      annotations={annotations}
      onAnnotationClick={handleAnnotationClick}
    />
  );
}`}}}},j={args:{media:Ue,initialSidebarOpen:!0,sidebarMode:"outline"}},T={args:{src:"./interactive-form-pdf.pdf",onFormSubmit:y(),onFormChange:y()},render:e=>i.jsx("div",{style:{height:"600px"},children:i.jsx(f,{...e})}),parameters:{docs:{source:{code:`import { BasePdfViewer } from "@osdk/react-components/experimental/pdf-viewer";

<BasePdfViewer
  src="https://example.com/interactive-form.pdf"
  onFormChange={(fieldName, value) => console.log(fieldName, value)}
  onFormSubmit={(data) => console.log("Form submitted:", data)}
/>`}}}},D={render:()=>{const{object:e,isLoading:n}=_e(Ce,Me);return n||!(e!=null&&e.employeeDocuments)?i.jsx("div",{style:{height:"600px"},children:"Loading OSDK media…"}):i.jsx("div",{style:{height:"600px"},children:i.jsx(_,{media:e.employeeDocuments})})},parameters:{docs:{source:{code:`import { PdfViewer } from "@osdk/react-components/experimental/pdf-viewer";

// Access media from an OSDK object's media reference property
const employee = useOsdkObject(Employee, employeePk);
<PdfViewer media={employee.employeeDocuments} />`}}}};var L,I,W;x.parameters={...x.parameters,docs:{...(L=x.parameters)==null?void 0:L.docs,source:{originalSource:`{
  args: {
    src: SAMPLE_PDF_URL
  },
  render: (args: PdfViewerProps) => <div style={{
    height: "600px"
  }}>
      <BasePdfViewer {...args} />
    </div>,
  parameters: {
    docs: {
      source: {
        code: \`import { BasePdfViewer } from "@osdk/react-components/experimental/pdf-viewer";

<BasePdfViewer src="/compressed.tracemonkey-pldi-09.pdf" />\`
      }
    }
  }
}`,...(W=(I=x.parameters)==null?void 0:I.docs)==null?void 0:W.source}}};var $,U,K;P.parameters={...P.parameters,docs:{...($=P.parameters)==null?void 0:$.docs,source:{originalSource:`{
  args: {
    onAnnotationClick: fn(),
    annotations: [{
      id: "h1",
      type: "highlight",
      page: 1,
      rect: {
        x: 55,
        y: 696,
        width: 480,
        height: 24
      },
      label: "Title highlight"
    }, {
      id: "u1",
      type: "underline",
      page: 1,
      rect: {
        x: 88,
        y: 614,
        width: 440,
        height: 2
      }
    }, {
      id: "c1",
      type: "comment",
      page: 1,
      rect: {
        x: 538,
        y: 400,
        width: 24,
        height: 24
      },
      label: "Review this section"
    }, {
      id: "p1",
      type: "pin",
      page: 1,
      rect: {
        x: 44,
        y: 446,
        width: 16,
        height: 16
      },
      label: "Pin marker"
    }]
  },
  parameters: {
    docs: {
      source: {
        code: \`import { PdfViewer } from "@osdk/react-components/experimental/pdf-viewer";

<PdfViewer
  media={myMediaObject}
  annotations={[
    { id: "h1", type: "highlight", page: 1, rect: { x: 55, y: 696, width: 480, height: 24 }, label: "Title highlight" },
    { id: "u1", type: "underline", page: 1, rect: { x: 88, y: 614, width: 440, height: 2 } },
    { id: "c1", type: "comment", page: 1, rect: { x: 538, y: 400, width: 24, height: 24 }, label: "Review this" },
    { id: "p1", type: "pin", page: 1, rect: { x: 44, y: 446, width: 16, height: 16 }, label: "Pin" },
  ]}
  onAnnotationClick={(annotation) => handleAnnotationClick(annotation)}
/>\`
      }
    }
  }
}`,...(K=(U=P.parameters)==null?void 0:U.docs)==null?void 0:K.source}}};var Y,z,X;v.parameters={...v.parameters,docs:{...(Y=v.parameters)==null?void 0:Y.docs,source:{originalSource:`{
  args: {
    initialSidebarOpen: true
  },
  parameters: {
    docs: {
      source: {
        code: \`import { PdfViewer } from "@osdk/react-components/experimental/pdf-viewer";

<PdfViewer media={myMediaObject} initialSidebarOpen />\`
      }
    }
  }
}`,...(X=(z=v.parameters)==null?void 0:z.docs)==null?void 0:X.source}}};var J,q,G;S.parameters={...S.parameters,docs:{...(J=S.parameters)==null?void 0:J.docs,source:{originalSource:`{
  args: {
    initialScale: 1.5
  },
  parameters: {
    docs: {
      source: {
        code: \`import { PdfViewer } from "@osdk/react-components/experimental/pdf-viewer";

<PdfViewer media={myMediaObject} initialScale={1.5} />\`
      }
    }
  }
}`,...(G=(q=S.parameters)==null?void 0:q.docs)==null?void 0:G.source}}};var Q,Z,ee;k.parameters={...k.parameters,docs:{...(Q=k.parameters)==null?void 0:Q.docs,source:{originalSource:`{
  args: {
    enableDownload: true
  },
  parameters: {
    docs: {
      source: {
        code: \`import { PdfViewer } from "@osdk/react-components/experimental/pdf-viewer";

<PdfViewer media={myMediaObject} enableDownload />\`
      }
    }
  }
}`,...(ee=(Z=k.parameters)==null?void 0:Z.docs)==null?void 0:ee.source}}};var te,ne,re;E.parameters={...E.parameters,docs:{...(te=E.parameters)==null?void 0:te.docs,source:{originalSource:`{
  args: {
    initialSidebarOpen: true,
    sidebarMode: "outline"
  },
  parameters: {
    docs: {
      source: {
        code: \`import { PdfViewer } from "@osdk/react-components/experimental/pdf-viewer";

<PdfViewer media={myMediaObject} initialSidebarOpen sidebarMode="outline" />\`
      }
    }
  }
}`,...(re=(ne=E.parameters)==null?void 0:ne.docs)==null?void 0:re.source}}};var ie,oe,ae;O.parameters={...O.parameters,docs:{...(ie=O.parameters)==null?void 0:ie.docs,source:{originalSource:`{
  args: {
    src: "/loading.pdf"
  },
  render: (args: PdfViewerProps) => <div style={{
    height: "600px"
  }}>
      <BasePdfViewer {...args} />
    </div>,
  parameters: {
    msw: {
      handlers: [http.get("/loading.pdf", async () => {
        await delay("infinite");
      })]
    }
  }
}`,...(ae=(oe=O.parameters)==null?void 0:oe.docs)==null?void 0:ae.source}}};var se,de,ce;V.parameters={...V.parameters,docs:{...(se=V.parameters)==null?void 0:se.docs,source:{originalSource:`{
  args: {
    src: "/error.pdf"
  },
  render: (args: PdfViewerProps) => <div style={{
    height: "600px"
  }}>
      <BasePdfViewer {...args} />
    </div>,
  parameters: {
    msw: {
      handlers: [http.get("/error.pdf", () => {
        return new Response("Server Error", {
          status: 500
        });
      })]
    }
  }
}`,...(ce=(de=V.parameters)==null?void 0:de.docs)==null?void 0:ce.source}}};var le,me,pe;M.parameters={...M.parameters,docs:{...(le=M.parameters)==null?void 0:le.docs,source:{originalSource:`{
  args: {
    onTextHighlight: fn(),
    onHighlightDelete: fn()
  },
  render: args => <HighlightModeDemo src={SAMPLE_PDF_URL} onTextHighlight={args.onTextHighlight} onHighlightDelete={args.onHighlightDelete} />,
  parameters: {
    docs: {
      source: {
        code: \`import { useState, useCallback } from "react";
import { BasePdfViewer } from "@osdk/react-components/experimental/pdf-viewer";
import type { PdfAnnotation, PdfTextHighlightEvent } from "@osdk/react-components/experimental/pdf-viewer";

function MyPdfViewer({ src }: { src: string }) {
  const [annotations, setAnnotations] = useState<PdfAnnotation[]>([]);

  const handleTextHighlight = useCallback((event: PdfTextHighlightEvent) => {
    setAnnotations((prev) => [...prev, {
      id: crypto.randomUUID(),
      type: "highlight",
      page: event.page,
      rect: event.rects[0],
      rects: event.rects,
      color: event.color,
      label: event.selectedText,
    }]);
  }, []);

  // Click a highlight to remove it
  const handleAnnotationClick = useCallback((annotation: PdfAnnotation) => {
    setAnnotations((prev) => prev.filter((a) => a.id !== annotation.id));
  }, []);

  return (
    <BasePdfViewer
      src={src}
      enableHighlight
      onTextHighlight={handleTextHighlight}
      annotations={annotations}
      onAnnotationClick={handleAnnotationClick}
    />
  );
}\`
      }
    }
  }
}`,...(pe=(me=M.parameters)==null?void 0:me.docs)==null?void 0:pe.source}}};var he,fe,ue;j.parameters={...j.parameters,docs:{...(he=j.parameters)==null?void 0:he.docs,source:{originalSource:`{
  args: {
    media: mockBookmarkedMedia,
    initialSidebarOpen: true,
    sidebarMode: "outline"
  }
}`,...(ue=(fe=j.parameters)==null?void 0:fe.docs)==null?void 0:ue.source}}};var ge,ye,be;T.parameters={...T.parameters,docs:{...(ge=T.parameters)==null?void 0:ge.docs,source:{originalSource:`{
  args: {
    src: \`\${import.meta.env.BASE_URL}interactive-form-pdf.pdf\`,
    onFormSubmit: fn(),
    onFormChange: fn()
  },
  render: (args: PdfViewerProps) => <div style={{
    height: "600px"
  }}>
      <BasePdfViewer {...args} />
    </div>,
  parameters: {
    docs: {
      source: {
        code: \`import { BasePdfViewer } from "@osdk/react-components/experimental/pdf-viewer";

<BasePdfViewer
  src="https://example.com/interactive-form.pdf"
  onFormChange={(fieldName, value) => console.log(fieldName, value)}
  onFormSubmit={(data) => console.log("Form submitted:", data)}
/>\`
      }
    }
  }
}`,...(be=(ye=T.parameters)==null?void 0:ye.docs)==null?void 0:be.source}}};var we,xe,Pe;D.parameters={...D.parameters,docs:{...(we=D.parameters)==null?void 0:we.docs,source:{originalSource:`{
  render: () => {
    const {
      object: employee,
      isLoading
    } = useOsdkObject(Employee, MEDIA_EMPLOYEE_PK);
    if (isLoading || !employee?.employeeDocuments) {
      return <div style={{
        height: "600px"
      }}>Loading OSDK media…</div>;
    }
    return <div style={{
      height: "600px"
    }}>
        <PdfViewer media={employee.employeeDocuments} />
      </div>;
  },
  parameters: {
    docs: {
      source: {
        code: \`import { PdfViewer } from "@osdk/react-components/experimental/pdf-viewer";

// Access media from an OSDK object's media reference property
const employee = useOsdkObject(Employee, employeePk);
<PdfViewer media={employee.employeeDocuments} />\`
      }
    }
  }
}`,...(Pe=(xe=D.parameters)==null?void 0:xe.docs)==null?void 0:Pe.source}}};const Mt=["WithPdfUrl","WithAnnotations","WithSidebar","CustomScale","WithDownload","WithOutlineSidebar","Loading","Error","WithHighlightMode","WithEmbeddedOutline","InteractiveForm","WithOsdkMedia"];export{S as CustomScale,V as Error,T as InteractiveForm,O as Loading,P as WithAnnotations,k as WithDownload,j as WithEmbeddedOutline,M as WithHighlightMode,D as WithOsdkMedia,E as WithOutlineSidebar,x as WithPdfUrl,v as WithSidebar,Mt as __namedExportsOrder,Vt as default};
