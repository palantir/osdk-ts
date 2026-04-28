import{R as a,O as Ee,k as Oe,r as b,m as ve,j as r,M as Ve}from"./iframe-DVfXu1az.js";import{c as Me}from"./index-CuTTJTnm.js";import{B as f}from"./PdfViewer-C5tQSK-n.js";import{s as h,S as je}from"./PdfViewer.module.css-DAYAaLBh.js";import{E as Te}from"./error-Duel2LHK.js";import{w as De}from"./withOsdkMetrics-BnRYJPHe.js";import{E as Ce}from"./Employee-BAk2o20h.js";import{m as R,d as N}from"./makeExternalStore-D7JlRjpN.js";import"./preload-helper-Dp1pzeXC.js";import"./index-KreOw50r.js";import"./index-EJ9QXlot.js";import"./PdfViewerAnnotationLayer-DTR6RXqR.js";import"./PdfViewerOutlineSidebar-CPSVGdF2.js";import"./PdfViewerSidebarHeader-CQO7tY8G.js";import"./useBaseUiId-CUNn89Qo.js";import"./useControlled-CSbgAJuP.js";import"./CompositeRoot-BqJ-necY.js";import"./CompositeItem-h6k55O0R.js";import"./ToolbarRootContext-ernfIe7-.js";import"./composite-Ct5Wwomw.js";import"./svgIconContainer-Cc3EtLRM.js";import"./PdfViewerSearchBar-XjaoZU0r.js";import"./chevron-up-CflKbYEv.js";import"./chevron-down-0LUqEoVW.js";import"./cross-C-2MIsit.js";import"./PdfViewerSidebar-DbpHNPe7.js";import"./index-BRAoGPV5.js";import"./constants-rggtfkKZ.js";import"./PdfViewerToolbar-BrbbcJcs.js";import"./Button-FA-pcLMz.js";import"./chevron-right-yCWNgDxe.js";import"./Input-ClPZbTwy.js";import"./minus-CWu62Zkp.js";import"./usePdfDocument-DBruBYkA.js";import"./useRegisterUserAgent-KNa6TsO5.js";function Ae(...e){const{observableClient:n}=a.useContext(Ee),i="$objectType"in e[0],o=!i&&e[2]!=null&&typeof e[2]=="object"?e[2]:void 0,m=i?typeof e[1]=="boolean"?e[1]:!0:o?o.enabled??!0:typeof e[2]=="boolean"?e[2]:!0,w=o==null?void 0:o.$select,l=o==null?void 0:o.$loadPropertySecurityMetadata,u=i?"offline":void 0,d=i?e[0].$objectType:e[0],c=i?e[0].$primaryKey:e[1],p=typeof d=="string"?d:d.apiName,s=a.useMemo(()=>w,[JSON.stringify(w)]),{subscribe:Se,getSnapShot:ke}=a.useMemo(()=>m?R(g=>n.observeObject(d,c,{mode:u,...s?{select:s}:{},...l?{$loadPropertySecurityMetadata:l}:{}},g),N({hookType:"useOsdkObject",objectType:p,primaryKey:String(c)})):R(()=>({unsubscribe:()=>{}}),N({hookType:"useOsdkObject",objectType:p,primaryKey:String(c)})),[m,n,d,p,c,u,s,l]),t=a.useSyncExternalStore(Se,ke),H=a.useCallback(()=>{throw new Error("not implemented")},[]);return a.useMemo(()=>{let g;return t&&"error"in t&&t.error?g=t.error:(t==null?void 0:t.status)==="error"&&(g=new Error("Failed to load object")),{object:t==null?void 0:t.object,isLoading:m?(t==null?void 0:t.status)==="loading"||(t==null?void 0:t.status)==="init"||!t:!1,isOptimistic:!!(t!=null&&t.isOptimistic),error:g,forceUpdate:H}},[t,m,H])}const _e=2147483647,B=100,He=400,Re=5;function Ne(){return Oe()?Re:Math.floor(Math.random()*(He-B)+B)}async function Be(e){let n;switch(e){case"infinite":{n=_e;break}case"real":{n=Ne();break}default:throw new Error(`Failed to delay a response: unknown delay mode "${e}". Please make sure you provide one of the supported modes ("real", "infinite") or a number.`)}return new Promise(i=>setTimeout(i,n))}function C(){return C=Object.assign?Object.assign.bind():function(e){for(var n=1;n<arguments.length;n++){var i=arguments[n];for(var o in i)({}).hasOwnProperty.call(i,o)&&(e[o]=i[o])}return e},C.apply(null,arguments)}async function Fe(e){return(await e.fetchContents()).arrayBuffer()}function Le({media:e,className:n,...i}){const[o,m]=b.useState(void 0),[w,l]=b.useState(!0),[u,d]=b.useState(void 0);b.useEffect(function(){let p=!1;return l(!0),d(void 0),m(void 0),Fe(e).then(s=>{p||(m(s),l(!1))}).catch(s=>{p||(d(s instanceof Error?s:new Error(String(s))),l(!1))}),()=>{p=!0}},[e]);const c=Me(h.pdfViewer,n);return w?a.createElement("div",{className:c},a.createElement("div",{className:h.loadingContainer},a.createElement(je,{className:h.spinnerIcon}),"Loading…")):u!=null?a.createElement("div",{className:c},a.createElement("div",{className:h.errorContainer},a.createElement(Te,{className:h.errorIcon}),"Failed to load PDF: ",u.message)):o==null?a.createElement("div",{className:c},a.createElement("div",{className:h.loadingContainer},"No document")):a.createElement(f,C({src:o,className:n},i))}const A=De(Le,"PdfViewer"),{fn:y}=__STORYBOOK_MODULE_TEST__,_="./compressed.tracemonkey-pldi-09.pdf",Ie="./nested_outline.pdf";function Pe(e,n){return{fetchContents:()=>fetch(e),fetchMetadata:()=>Promise.resolve({path:n,sizeBytes:1024e3,mediaType:"application/pdf"}),getMediaReference:()=>({mimeType:"application/pdf",reference:{type:"mediaSetViewItem",mediaSetViewItem:{mediaItemRid:"ri.mio.main.media-item.mock-pdf",mediaSetRid:"ri.mio.main.media-set.mock-set",mediaSetViewRid:"ri.mio.main.media-set-view.mock-view"}}})}}const We=Pe(_,"compressed.tracemonkey-pldi-09.pdf"),Ue=Pe(Ie,"pdf-example-bookmarks.pdf"),Ot={title:"Experimental/PdfViewer/Features",tags:["experimental"],component:A,args:{media:We},render:e=>r.jsx("div",{style:{height:"600px"},children:r.jsx(A,{...e})}),parameters:{controls:{expanded:!0}},argTypes:{media:{description:"The Media object to fetch PDF contents from",control:!1},annotations:{description:"Annotations to overlay on the PDF",control:"object"},onAnnotationClick:{description:"Callback fired when an annotation is clicked",control:!1,table:{category:"Events"}},initialPage:{description:"Page to display on first render (1-indexed)",control:"number",table:{defaultValue:{summary:"1"}}},initialScale:{description:"Initial zoom scale",control:"number",table:{defaultValue:{summary:"1.0"}}},initialSidebarOpen:{description:"Whether the thumbnail sidebar is initially open",control:"boolean",table:{defaultValue:{summary:"false"}}},enableDownload:{description:"Whether the download button is shown in the toolbar",control:"boolean",table:{defaultValue:{summary:"false"}}},sidebarMode:{description:"Which sidebar panel to show when the sidebar is open",control:"radio",options:["thumbnails","outline"],table:{defaultValue:{summary:'"thumbnails"'}}},outlineIcons:{description:"Custom icon components for each outline depth level (0-indexed)",control:!1},className:{description:"Additional CSS class name for the root element",control:"text"}}},x={args:{src:_},render:e=>r.jsx("div",{style:{height:"600px"},children:r.jsx(f,{...e})}),parameters:{docs:{source:{code:`import { BasePdfViewer } from "@osdk/react-components/experimental/pdf-viewer";

<BasePdfViewer src="/compressed.tracemonkey-pldi-09.pdf" />`}}}},v={args:{onAnnotationClick:y(),annotations:[{id:"h1",type:"highlight",page:1,rect:{x:55,y:696,width:480,height:24},label:"Title highlight"},{id:"u1",type:"underline",page:1,rect:{x:88,y:614,width:440,height:2}},{id:"c1",type:"comment",page:1,rect:{x:538,y:400,width:24,height:24},label:"Review this section"},{id:"p1",type:"pin",page:1,rect:{x:44,y:446,width:16,height:16},label:"Pin marker"}]},parameters:{docs:{source:{code:`import { PdfViewer } from "@osdk/react-components/experimental/pdf-viewer";

<PdfViewer
  media={myMediaObject}
  annotations={[
    { id: "h1", type: "highlight", page: 1, rect: { x: 55, y: 696, width: 480, height: 24 }, label: "Title highlight" },
    { id: "u1", type: "underline", page: 1, rect: { x: 88, y: 614, width: 440, height: 2 } },
    { id: "c1", type: "comment", page: 1, rect: { x: 538, y: 400, width: 24, height: 24 }, label: "Review this" },
    { id: "p1", type: "pin", page: 1, rect: { x: 44, y: 446, width: 16, height: 16 }, label: "Pin" },
  ]}
  onAnnotationClick={(annotation) => handleAnnotationClick(annotation)}
/>`}}}},P={args:{initialSidebarOpen:!0},parameters:{docs:{source:{code:`import { PdfViewer } from "@osdk/react-components/experimental/pdf-viewer";

<PdfViewer media={myMediaObject} initialSidebarOpen />`}}}},S={args:{initialScale:1.5},parameters:{docs:{source:{code:`import { PdfViewer } from "@osdk/react-components/experimental/pdf-viewer";

<PdfViewer media={myMediaObject} initialScale={1.5} />`}}}},k={args:{enableDownload:!0},parameters:{docs:{source:{code:`import { PdfViewer } from "@osdk/react-components/experimental/pdf-viewer";

<PdfViewer media={myMediaObject} enableDownload />`}}}},E={args:{initialSidebarOpen:!0,sidebarMode:"outline"},parameters:{docs:{source:{code:`import { PdfViewer } from "@osdk/react-components/experimental/pdf-viewer";

<PdfViewer media={myMediaObject} initialSidebarOpen sidebarMode="outline" />`}}}},O={args:{src:"/loading.pdf"},render:e=>r.jsx("div",{style:{height:"600px"},children:r.jsx(f,{...e})}),parameters:{msw:{handlers:[ve.get("/loading.pdf",async()=>{await Be("infinite")})]}}},V={args:{src:"/error.pdf"},render:e=>r.jsx("div",{style:{height:"600px"},children:r.jsx(f,{...e})}),parameters:{msw:{handlers:[ve.get("/error.pdf",()=>new Response("Server Error",{status:500}))]}}};function $e({src:e,onTextHighlight:n,onHighlightDelete:i}){return r.jsx("div",{style:{height:"600px"},children:r.jsx(f,{src:e,enableHighlight:!0,onTextHighlight:n,onHighlightDelete:i})})}const M={args:{onTextHighlight:y(),onHighlightDelete:y()},render:e=>r.jsx($e,{src:_,onTextHighlight:e.onTextHighlight,onHighlightDelete:e.onHighlightDelete}),parameters:{docs:{source:{code:`import { useState, useCallback } from "react";
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
}`}}}},j={args:{media:Ue,initialSidebarOpen:!0,sidebarMode:"outline"}},T={args:{src:"./interactive-form-pdf.pdf",onFormSubmit:y(),onFormChange:y()},render:e=>r.jsx("div",{style:{height:"600px"},children:r.jsx(f,{...e})}),parameters:{docs:{source:{code:`import { BasePdfViewer } from "@osdk/react-components/experimental/pdf-viewer";

<BasePdfViewer
  src="https://example.com/interactive-form.pdf"
  onFormChange={(fieldName, value) => console.log(fieldName, value)}
  onFormSubmit={(data) => console.log("Form submitted:", data)}
/>`}}}},D={render:()=>{const{object:e,isLoading:n}=Ae(Ce,Ve);return n||!(e!=null&&e.employeeDocuments)?r.jsx("div",{style:{height:"600px"},children:"Loading OSDK media…"}):r.jsx("div",{style:{height:"600px"},children:r.jsx(A,{media:e.employeeDocuments})})},parameters:{docs:{source:{code:`import { PdfViewer } from "@osdk/react-components/experimental/pdf-viewer";

// Access media from an OSDK object's media reference property
const employee = useOsdkObject(Employee, employeePk);
<PdfViewer media={employee.employeeDocuments} />`}}}};var F,L,I;x.parameters={...x.parameters,docs:{...(F=x.parameters)==null?void 0:F.docs,source:{originalSource:`{
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
}`,...(I=(L=x.parameters)==null?void 0:L.docs)==null?void 0:I.source}}};var W,U,$;v.parameters={...v.parameters,docs:{...(W=v.parameters)==null?void 0:W.docs,source:{originalSource:`{
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
}`,...($=(U=v.parameters)==null?void 0:U.docs)==null?void 0:$.source}}};var K,Y,z;P.parameters={...P.parameters,docs:{...(K=P.parameters)==null?void 0:K.docs,source:{originalSource:`{
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
}`,...(z=(Y=P.parameters)==null?void 0:Y.docs)==null?void 0:z.source}}};var X,J,q;S.parameters={...S.parameters,docs:{...(X=S.parameters)==null?void 0:X.docs,source:{originalSource:`{
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
}`,...(q=(J=S.parameters)==null?void 0:J.docs)==null?void 0:q.source}}};var G,Q,Z;k.parameters={...k.parameters,docs:{...(G=k.parameters)==null?void 0:G.docs,source:{originalSource:`{
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
}`,...(Z=(Q=k.parameters)==null?void 0:Q.docs)==null?void 0:Z.source}}};var ee,te,ne;E.parameters={...E.parameters,docs:{...(ee=E.parameters)==null?void 0:ee.docs,source:{originalSource:`{
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
}`,...(ne=(te=E.parameters)==null?void 0:te.docs)==null?void 0:ne.source}}};var re,ie,oe;O.parameters={...O.parameters,docs:{...(re=O.parameters)==null?void 0:re.docs,source:{originalSource:`{
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
}`,...(oe=(ie=O.parameters)==null?void 0:ie.docs)==null?void 0:oe.source}}};var ae,se,de;V.parameters={...V.parameters,docs:{...(ae=V.parameters)==null?void 0:ae.docs,source:{originalSource:`{
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
}`,...(de=(se=V.parameters)==null?void 0:se.docs)==null?void 0:de.source}}};var ce,me,le;M.parameters={...M.parameters,docs:{...(ce=M.parameters)==null?void 0:ce.docs,source:{originalSource:`{
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
}`,...(le=(me=M.parameters)==null?void 0:me.docs)==null?void 0:le.source}}};var pe,he,fe;j.parameters={...j.parameters,docs:{...(pe=j.parameters)==null?void 0:pe.docs,source:{originalSource:`{
  args: {
    media: mockBookmarkedMedia,
    initialSidebarOpen: true,
    sidebarMode: "outline"
  }
}`,...(fe=(he=j.parameters)==null?void 0:he.docs)==null?void 0:fe.source}}};var ue,ge,ye;T.parameters={...T.parameters,docs:{...(ue=T.parameters)==null?void 0:ue.docs,source:{originalSource:`{
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
}`,...(ye=(ge=T.parameters)==null?void 0:ge.docs)==null?void 0:ye.source}}};var we,be,xe;D.parameters={...D.parameters,docs:{...(we=D.parameters)==null?void 0:we.docs,source:{originalSource:`{
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
}`,...(xe=(be=D.parameters)==null?void 0:be.docs)==null?void 0:xe.source}}};const Vt=["WithPdfUrl","WithAnnotations","WithSidebar","CustomScale","WithDownload","WithOutlineSidebar","Loading","Error","WithHighlightMode","WithEmbeddedOutline","InteractiveForm","WithOsdkMedia"];export{S as CustomScale,V as Error,T as InteractiveForm,O as Loading,v as WithAnnotations,k as WithDownload,j as WithEmbeddedOutline,M as WithHighlightMode,D as WithOsdkMedia,E as WithOutlineSidebar,x as WithPdfUrl,P as WithSidebar,Vt as __namedExportsOrder,Ot as default};
