import{R as s,O as Me,p as Ee,h as Se,j as n,M as je}from"./iframe-C-hy2wdy.js";import{P as Te}from"./PdfRenderer-K8zzn7Ez.js";import{w as Ae}from"./withOsdkMetrics-DpL3-5qr.js";import{E as De}from"./Employee-BAk2o20h.js";import{B as m}from"./PdfViewer-D0fGJa-_.js";import{m as H,d as R}from"./makeExternalStore-BNKAFYVp.js";import"./preload-helper-Dp1pzeXC.js";import"./index-BialtY4S.js";import"./PdfViewer.module.css-CDZVSAH-.js";import"./constants-B8f3UZHi.js";import"./usePdfDocument-Ckg9USUi.js";import"./spin-BXDbPjxM.js";import"./svgIconContainer-DENES-tb.js";import"./error-CxoFdxIw.js";import"./useRegisterUserAgent-CGfqmNZn.js";import"./index-D9lCKnb7.js";import"./index-C_JV041G.js";import"./PdfViewerAnnotationLayer-CFyrTfSF.js";import"./PdfViewerOutlineSidebar-CDcyjVGu.js";import"./PdfViewerSidebarHeader-EPT1OGsw.js";import"./useBaseUiId-G0BgJb_q.js";import"./useControlled-BcH7nnYc.js";import"./CompositeRoot-kCwuSx-U.js";import"./CompositeItem-tcE-R7Zm.js";import"./ToolbarRootContext-zUUlKgBB.js";import"./composite-DuV_q_V8.js";import"./PdfViewerSearchBar-BUXr0p9N.js";import"./chevron-up-du_ZIDDt.js";import"./chevron-down-pweWOAgK.js";import"./cross-rNO-BqqK.js";import"./PdfViewerSidebar-CHnNY70H.js";import"./index-I3OdwU14.js";import"./PdfViewerToolbar-bnKwMmyW.js";import"./Button-C_wdHEKp.js";import"./chevron-right-aIIOBUhl.js";import"./Input-BqhvvaK2.js";import"./minus-BvdLOT1f.js";function Ce(...e){const{observableClient:r}=s.useContext(Me),o="$objectType"in e[0],i=!o&&e[2]!=null&&typeof e[2]=="object"?e[2]:void 0,p=o?typeof e[1]=="boolean"?e[1]:!0:i?i.enabled??!0:typeof e[2]=="boolean"?e[2]:!0,A=i==null?void 0:i.$select,V=i==null?void 0:i.$loadPropertySecurityMetadata,D=i==null?void 0:i.$includeAllBaseObjectProperties,C=o?"offline":void 0,d=o?e[0].$objectType:e[0],l=o?e[0].$primaryKey:e[1],M=typeof d=="string"?d:d.apiName,E=s.useMemo(()=>A,[JSON.stringify(A)]),{subscribe:Oe,getSnapShot:Ve}=s.useMemo(()=>p?H(a=>r.observeObject(d,l,{mode:C,$includeAllBaseObjectProperties:D,...E?{select:E}:{},...V?{$loadPropertySecurityMetadata:V}:{}},a),R({hookType:"useOsdkObject",objectType:M,primaryKey:String(l)})):H(()=>({unsubscribe:()=>{}}),R({hookType:"useOsdkObject",objectType:M,primaryKey:String(l)})),[p,r,d,M,l,C,E,V,D]),t=s.useSyncExternalStore(Oe,Ve),_=s.useCallback(()=>{throw new Error("not implemented")},[]);return s.useMemo(()=>{let a;return t&&"error"in t&&t.error?a=t.error:(t==null?void 0:t.status)==="error"&&(a=new Error("Failed to load object")),{object:t==null?void 0:t.object,isLoading:p&&a==null?(t==null?void 0:t.status)==="loading"||(t==null?void 0:t.status)==="init"||!t:!1,isOptimistic:!!(t!=null&&t.isOptimistic),error:a,forceUpdate:_}},[t,p,_])}const _e=2147483647,B=100,He=400,Re=5;function Be(){return Ee()?Re:Math.floor(Math.random()*(He-B)+B)}async function We(e){let r;switch(e){case"infinite":{r=_e;break}case"real":{r=Be();break}default:throw new Error(`Failed to delay a response: unknown delay mode "${e}". Please make sure you provide one of the supported modes ("real", "infinite") or a number.`)}return new Promise(o=>setTimeout(o,r))}const j=Ae(Te,"PdfViewer"),{fn:c}=__STORYBOOK_MODULE_TEST__,T="./compressed.tracemonkey-pldi-09.pdf",Fe="./nested_outline.pdf";function ke(e,r){return{fetchContents:()=>fetch(e),fetchMetadata:()=>Promise.resolve({path:r,sizeBytes:1024e3,mediaType:"application/pdf"}),getMediaReference:()=>({mimeType:"application/pdf",reference:{type:"mediaSetViewItem",mediaSetViewItem:{mediaItemRid:"ri.mio.main.media-item.mock-pdf",mediaSetRid:"ri.mio.main.media-set.mock-set",mediaSetViewRid:"ri.mio.main.media-set-view.mock-view"}}})}}const Le=ke(T,"compressed.tracemonkey-pldi-09.pdf"),Ie=ke(Fe,"pdf-example-bookmarks.pdf"),Vt={title:"Experimental/PdfViewer/Features",tags:["experimental"],component:j,args:{media:Le},render:e=>n.jsx("div",{style:{height:"600px"},children:n.jsx(j,{...e})}),parameters:{controls:{expanded:!0}},argTypes:{media:{description:"The Media object to fetch PDF contents from",control:!1},annotations:{description:"Annotations to overlay on the PDF",control:"object"},onAnnotationClick:{description:"Callback fired when an annotation is clicked",control:!1,table:{category:"Events"}},initialPage:{description:"Page to display on first render (1-indexed)",control:"number",table:{defaultValue:{summary:"1"}}},initialScale:{description:"Initial zoom scale",control:"number",table:{defaultValue:{summary:"1.0"}}},initialSidebarOpen:{description:"Whether the thumbnail sidebar is initially open",control:"boolean",table:{defaultValue:{summary:"false"}}},enableDownload:{description:"Whether the download button is shown in the toolbar",control:"boolean",table:{defaultValue:{summary:"false"}}},sidebarMode:{description:"Which sidebar panel to show when the sidebar is open",control:"radio",options:["thumbnails","outline"],table:{defaultValue:{summary:'"thumbnails"'}}},outlineIcons:{description:"Custom icon components for each outline depth level (0-indexed)",control:!1},className:{description:"Additional CSS class name for the root element",control:"text"}}},h={args:{src:T},render:e=>n.jsx("div",{style:{height:"600px"},children:n.jsx(m,{...e})}),parameters:{docs:{source:{code:`import { BasePdfViewer } from "@osdk/react-components/experimental/pdf-viewer";

<BasePdfViewer src="/compressed.tracemonkey-pldi-09.pdf" />`}}}},f={args:{onAnnotationClick:c(),annotations:[{id:"h1",type:"highlight",page:1,rect:{x:55,y:696,width:480,height:24},label:"Title highlight"},{id:"u1",type:"underline",page:1,rect:{x:88,y:614,width:440,height:2}},{id:"c1",type:"comment",page:1,rect:{x:538,y:400,width:24,height:24},label:"Review this section"},{id:"p1",type:"pin",page:1,rect:{x:44,y:446,width:16,height:16},label:"Pin marker"}]},parameters:{docs:{source:{code:`import { PdfViewer } from "@osdk/react-components/experimental/pdf-viewer";

<PdfViewer
  media={myMediaObject}
  annotations={[
    { id: "h1", type: "highlight", page: 1, rect: { x: 55, y: 696, width: 480, height: 24 }, label: "Title highlight" },
    { id: "u1", type: "underline", page: 1, rect: { x: 88, y: 614, width: 440, height: 2 } },
    { id: "c1", type: "comment", page: 1, rect: { x: 538, y: 400, width: 24, height: 24 }, label: "Review this" },
    { id: "p1", type: "pin", page: 1, rect: { x: 44, y: 446, width: 16, height: 16 }, label: "Pin" },
  ]}
  onAnnotationClick={(annotation) => handleAnnotationClick(annotation)}
/>`}}}},u={args:{initialSidebarOpen:!0},parameters:{docs:{source:{code:`import { PdfViewer } from "@osdk/react-components/experimental/pdf-viewer";

<PdfViewer media={myMediaObject} initialSidebarOpen />`}}}},g={args:{initialScale:1.5},parameters:{docs:{source:{code:`import { PdfViewer } from "@osdk/react-components/experimental/pdf-viewer";

<PdfViewer media={myMediaObject} initialScale={1.5} />`}}}},w={args:{initialAutoSize:!0},parameters:{docs:{source:{code:`import { PdfViewer } from "@osdk/react-components/experimental/pdf-viewer";

<PdfViewer media={myMediaObject} initialAutoSize />`}}}},y={args:{enableDownload:!0},parameters:{docs:{source:{code:`import { PdfViewer } from "@osdk/react-components/experimental/pdf-viewer";

<PdfViewer media={myMediaObject} enableDownload />`}}}},b={args:{initialSidebarOpen:!0,sidebarMode:"outline"},parameters:{docs:{source:{code:`import { PdfViewer } from "@osdk/react-components/experimental/pdf-viewer";

<PdfViewer media={myMediaObject} initialSidebarOpen sidebarMode="outline" />`}}}},P={args:{src:"/loading.pdf"},render:e=>n.jsx("div",{style:{height:"600px"},children:n.jsx(m,{...e})}),parameters:{msw:{handlers:[Se.get("/loading.pdf",async()=>{await We("infinite")})]}}},x={args:{src:"/error.pdf"},render:e=>n.jsx("div",{style:{height:"600px"},children:n.jsx(m,{...e})}),parameters:{msw:{handlers:[Se.get("/error.pdf",()=>new Response("Server Error",{status:500}))]}}};function Ne({src:e,onTextHighlight:r,onHighlightDelete:o}){return n.jsx("div",{style:{height:"600px"},children:n.jsx(m,{src:e,enableHighlight:!0,onTextHighlight:r,onHighlightDelete:o})})}const v={args:{onTextHighlight:c(),onHighlightDelete:c()},render:e=>n.jsx(Ne,{src:T,onTextHighlight:e.onTextHighlight,onHighlightDelete:e.onHighlightDelete}),parameters:{docs:{source:{code:`import { useState, useCallback } from "react";
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
}`}}}},S={args:{media:Ie,initialSidebarOpen:!0,sidebarMode:"outline"}},k={args:{src:"./interactive-form-pdf.pdf",onFormSubmit:c(),onFormChange:c()},render:e=>n.jsx("div",{style:{height:"600px"},children:n.jsx(m,{...e})}),parameters:{docs:{source:{code:`import { BasePdfViewer } from "@osdk/react-components/experimental/pdf-viewer";

<BasePdfViewer
  src="https://example.com/interactive-form.pdf"
  onFormChange={(fieldName, value) => console.log(fieldName, value)}
  onFormSubmit={(data) => console.log("Form submitted:", data)}
/>`}}}},O={render:()=>{const{object:e,isLoading:r}=Ce(De,je);return r||!(e!=null&&e.employeeDocuments)?n.jsx("div",{style:{height:"600px"},children:"Loading OSDK media…"}):n.jsx("div",{style:{height:"600px"},children:n.jsx(j,{media:e.employeeDocuments})})},parameters:{docs:{source:{code:`import { PdfViewer } from "@osdk/react-components/experimental/pdf-viewer";

// Access media from an OSDK object's media reference property
const employee = useOsdkObject(Employee, employeePk);
<PdfViewer media={employee.employeeDocuments} />`}}}};var W,F,L;h.parameters={...h.parameters,docs:{...(W=h.parameters)==null?void 0:W.docs,source:{originalSource:`{
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
}`,...(L=(F=h.parameters)==null?void 0:F.docs)==null?void 0:L.source}}};var I,N,$;f.parameters={...f.parameters,docs:{...(I=f.parameters)==null?void 0:I.docs,source:{originalSource:`{
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
}`,...($=(N=f.parameters)==null?void 0:N.docs)==null?void 0:$.source}}};var U,K,z;u.parameters={...u.parameters,docs:{...(U=u.parameters)==null?void 0:U.docs,source:{originalSource:`{
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
}`,...(z=(K=u.parameters)==null?void 0:K.docs)==null?void 0:z.source}}};var Y,X,J;g.parameters={...g.parameters,docs:{...(Y=g.parameters)==null?void 0:Y.docs,source:{originalSource:`{
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
}`,...(J=(X=g.parameters)==null?void 0:X.docs)==null?void 0:J.source}}};var q,G,Q;w.parameters={...w.parameters,docs:{...(q=w.parameters)==null?void 0:q.docs,source:{originalSource:`{
  args: {
    initialAutoSize: true
  },
  parameters: {
    docs: {
      source: {
        code: \`import { PdfViewer } from "@osdk/react-components/experimental/pdf-viewer";

<PdfViewer media={myMediaObject} initialAutoSize />\`
      }
    }
  }
}`,...(Q=(G=w.parameters)==null?void 0:G.docs)==null?void 0:Q.source}}};var Z,ee,te;y.parameters={...y.parameters,docs:{...(Z=y.parameters)==null?void 0:Z.docs,source:{originalSource:`{
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
}`,...(te=(ee=y.parameters)==null?void 0:ee.docs)==null?void 0:te.source}}};var ne,re,ie;b.parameters={...b.parameters,docs:{...(ne=b.parameters)==null?void 0:ne.docs,source:{originalSource:`{
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
}`,...(ie=(re=b.parameters)==null?void 0:re.docs)==null?void 0:ie.source}}};var oe,ae,se;P.parameters={...P.parameters,docs:{...(oe=P.parameters)==null?void 0:oe.docs,source:{originalSource:`{
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
}`,...(se=(ae=P.parameters)==null?void 0:ae.docs)==null?void 0:se.source}}};var de,ce,me;x.parameters={...x.parameters,docs:{...(de=x.parameters)==null?void 0:de.docs,source:{originalSource:`{
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
}`,...(me=(ce=x.parameters)==null?void 0:ce.docs)==null?void 0:me.source}}};var pe,le,he;v.parameters={...v.parameters,docs:{...(pe=v.parameters)==null?void 0:pe.docs,source:{originalSource:`{
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
}`,...(he=(le=v.parameters)==null?void 0:le.docs)==null?void 0:he.source}}};var fe,ue,ge;S.parameters={...S.parameters,docs:{...(fe=S.parameters)==null?void 0:fe.docs,source:{originalSource:`{
  args: {
    media: mockBookmarkedMedia,
    initialSidebarOpen: true,
    sidebarMode: "outline"
  }
}`,...(ge=(ue=S.parameters)==null?void 0:ue.docs)==null?void 0:ge.source}}};var we,ye,be;k.parameters={...k.parameters,docs:{...(we=k.parameters)==null?void 0:we.docs,source:{originalSource:`{
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
}`,...(be=(ye=k.parameters)==null?void 0:ye.docs)==null?void 0:be.source}}};var Pe,xe,ve;O.parameters={...O.parameters,docs:{...(Pe=O.parameters)==null?void 0:Pe.docs,source:{originalSource:`{
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
}`,...(ve=(xe=O.parameters)==null?void 0:xe.docs)==null?void 0:ve.source}}};const Mt=["WithPdfUrl","WithAnnotations","WithSidebar","CustomScale","WithAutoSize","WithDownload","WithOutlineSidebar","Loading","Error","WithHighlightMode","WithEmbeddedOutline","InteractiveForm","WithOsdkMedia"];export{g as CustomScale,x as Error,k as InteractiveForm,P as Loading,f as WithAnnotations,w as WithAutoSize,y as WithDownload,S as WithEmbeddedOutline,v as WithHighlightMode,O as WithOsdkMedia,b as WithOutlineSidebar,h as WithPdfUrl,u as WithSidebar,Mt as __namedExportsOrder,Vt as default};
