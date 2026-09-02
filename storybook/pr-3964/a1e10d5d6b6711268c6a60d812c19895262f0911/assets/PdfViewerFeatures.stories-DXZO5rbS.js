import{m as le,h as me,j as t,r as v}from"./iframe-BtTN4BQB.js";import{P as k}from"./pdf-viewer-DN9CO4x2.js";import{B as r}from"./BasePdfViewer-OL9w6cXG.js";import"./preload-helper-C2hFUd6N.js";import"./PdfViewer-Caa-sM0D.js";import"./index-pxWT2dwl.js";import"./BasePdfViewer.module.css-C4-tpThP.js";import"./PdfViewerAnnotationLayer-Coc7qNim.js";import"./constants-DsXMS3N3.js";import"./usePdfDocument-BZ37hH8U.js";import"./spin-Bkf41HYE.js";import"./svgIconContainer-Ck-gVtGn.js";import"./error-eGAnK2yX.js";import"./withOsdkMetrics-DMwNEK1o.js";import"./PdfViewerOutlineSidebar-CWvgCMuV.js";import"./PdfViewerSidebarHeader-B4fgR3zc.js";import"./useBaseUiId-lIY47ohq.js";import"./useControlled-BY2aVBy7.js";import"./CompositeRoot-BSRv4Qnc.js";import"./CompositeItem-Dm5rFUvO.js";import"./ToolbarRootContext-BKy1ZUvI.js";import"./composite-CdDRlQtM.js";import"./PdfViewerSearchBar-CrGiqdQh.js";import"./chevron-up-CPUlXJJh.js";import"./chevron-down-BcmFYUSl.js";import"./cross-q76qzbb-.js";import"./PdfViewerSidebar-Blr0WOKT.js";import"./index-9u2i6wOA.js";import"./index-Cq-V6BRN.js";import"./index-CMayXVvR.js";import"./PdfViewerToolbar-CVbDBLi9.js";import"./Button-BLq1-le0.js";import"./chevron-right-CVx3OQTb.js";import"./Input-BP96gLBp.js";import"./search-B3tYggTx.js";const he=2147483647,S=100,fe=400,ge=5;function ue(){return le()?ge:Math.floor(Math.random()*(fe-S)+S)}async function we(e){let n;switch(e){case"infinite":{n=he;break}case"real":{n=ue();break}default:throw new Error(`Failed to delay a response: unknown delay mode "${e}". Please make sure you provide one of the supported modes ("real", "infinite") or a number.`)}return new Promise(o=>setTimeout(o,n))}const{fn:i}=__STORYBOOK_MODULE_TEST__,y="/osdk-ts/storybook/pr-3964/a1e10d5d6b6711268c6a60d812c19895262f0911/compressed.tracemonkey-pldi-09.pdf",be="/osdk-ts/storybook/pr-3964/a1e10d5d6b6711268c6a60d812c19895262f0911/nested_outline.pdf";function pe(e,n){return{fetchContents:()=>fetch(e),fetchMetadata:()=>Promise.resolve({path:n,sizeBytes:1024e3,mediaType:"application/pdf"}),getMediaReference:()=>({mimeType:"application/pdf",reference:{type:"mediaSetViewItem",mediaSetViewItem:{mediaItemRid:"ri.mio.main.media-item.mock-pdf",mediaSetRid:"ri.mio.main.media-set.mock-set",mediaSetViewRid:"ri.mio.main.media-set-view.mock-view"}}})}}const ye=pe(y,"compressed.tracemonkey-pldi-09.pdf"),xe=pe(be,"pdf-example-bookmarks.pdf"),ot={title:"Components/DocumentViewer/Renderers/PdfViewer/Features",component:k,tags:["beta"],args:{media:ye},render:e=>t.jsx("div",{style:{height:"600px"},children:t.jsx(k,{...e})}),parameters:{controls:{expanded:!0}},argTypes:{media:{description:"The Media object to fetch PDF contents from",control:!1},annotations:{description:"Annotations to overlay on the PDF",control:"object"},onAnnotationClick:{description:"Callback fired when an annotation is clicked",control:!1,table:{category:"Events"}},defaultPage:{description:"Page to display on first render (1-indexed)",control:"number",table:{defaultValue:{summary:"1"}}},defaultScale:{description:"Initial zoom scale",control:"number",table:{defaultValue:{summary:"1.0"}}},defaultSidebarOpen:{description:"Whether the thumbnail sidebar is initially open",control:"boolean",table:{defaultValue:{summary:"false"}}},enableDownload:{description:"Whether the download button is shown in the toolbar",control:"boolean",table:{defaultValue:{summary:"false"}}},sidebarMode:{description:"Which sidebar panel to show when the sidebar is open",control:"radio",options:["thumbnails","outline"],table:{defaultValue:{summary:'"thumbnails"'}}},outlineIcons:{description:"Custom icon components for each outline depth level (0-indexed)",control:!1},className:{description:"Additional CSS class name for the root element",control:"text"}}},a={args:{src:y},render:e=>t.jsx("div",{style:{height:"600px"},children:t.jsx(r,{...e})}),parameters:{docs:{source:{code:`import { BasePdfViewer } from "@osdk/react-components/experimental/pdf-viewer";

<BasePdfViewer src="/compressed.tracemonkey-pldi-09.pdf" />`}}}};function Pe({url:e}){const[n,o]=v.useState(void 0);return v.useEffect(()=>{let P=!1;return fetch(e).then(x=>x.blob()).then(x=>{P||o(x)}),()=>{P=!0}},[e]),t.jsx("div",{style:{height:"600px"},children:n==null?"Fetching PDF into a Blob…":t.jsx(r,{src:n})})}const s={render:()=>t.jsx(Pe,{url:y}),parameters:{docs:{source:{code:`import { BasePdfViewer } from "@osdk/react-components/experimental/pdf-viewer";

// src also accepts in-memory bytes: Blob, ArrayBuffer, or Uint8Array
const blob = await (await fetch("/compressed.tracemonkey-pldi-09.pdf")).blob();

<BasePdfViewer src={blob} />`}}}},d={args:{onAnnotationClick:i(),annotations:[{id:"h1",type:"highlight",page:1,rect:{x:55,y:696,width:480,height:24},label:"Title highlight"},{id:"u1",type:"underline",page:1,rect:{x:88,y:614,width:440,height:2}},{id:"c1",type:"comment",page:1,rect:{x:538,y:400,width:24,height:24},label:"Review this section"},{id:"p1",type:"pin",page:1,rect:{x:44,y:446,width:16,height:16},label:"Pin marker"}]},parameters:{docs:{source:{code:`import { PdfViewer } from "@osdk/react-components/experimental/pdf-viewer";

<PdfViewer
  media={myMediaObject}
  annotations={[
    { id: "h1", type: "highlight", page: 1, rect: { x: 55, y: 696, width: 480, height: 24 }, label: "Title highlight" },
    { id: "u1", type: "underline", page: 1, rect: { x: 88, y: 614, width: 440, height: 2 } },
    { id: "c1", type: "comment", page: 1, rect: { x: 538, y: 400, width: 24, height: 24 }, label: "Review this" },
    { id: "p1", type: "pin", page: 1, rect: { x: 44, y: 446, width: 16, height: 16 }, label: "Pin" },
  ]}
  onAnnotationClick={(annotation) => handleAnnotationClick(annotation)}
/>`}}}},c={args:{defaultSidebarOpen:!0},parameters:{docs:{source:{code:`import { PdfViewer } from "@osdk/react-components/experimental/pdf-viewer";

<PdfViewer media={myMediaObject} defaultSidebarOpen />`}}}},m={args:{defaultScale:1.5},parameters:{docs:{source:{code:`import { PdfViewer } from "@osdk/react-components/experimental/pdf-viewer";

<PdfViewer media={myMediaObject} defaultScale={1.5} />`}}}},p={args:{defaultAutoSize:!0},parameters:{docs:{source:{code:`import { PdfViewer } from "@osdk/react-components/experimental/pdf-viewer";

<PdfViewer media={myMediaObject} defaultAutoSize />`}}}},l={args:{enableDownload:!0},parameters:{docs:{source:{code:`import { PdfViewer } from "@osdk/react-components/experimental/pdf-viewer";

<PdfViewer media={myMediaObject} enableDownload />`}}}},h={args:{defaultSidebarOpen:!0,sidebarMode:"outline"},parameters:{docs:{source:{code:`import { PdfViewer } from "@osdk/react-components/experimental/pdf-viewer";

<PdfViewer media={myMediaObject} defaultSidebarOpen sidebarMode="outline" />`}}}},f={args:{src:"/loading.pdf"},render:e=>t.jsx("div",{style:{height:"600px"},children:t.jsx(r,{...e})}),parameters:{msw:{handlers:[me.get("/loading.pdf",async()=>{await we("infinite")})]}}},g={args:{src:"/error.pdf"},render:e=>t.jsx("div",{style:{height:"600px"},children:t.jsx(r,{...e})}),parameters:{msw:{handlers:[me.get("/error.pdf",()=>new Response("Server Error",{status:500}))]}}};function ve({src:e,onTextHighlight:n,onHighlightDelete:o}){return t.jsx("div",{style:{height:"600px"},children:t.jsx(r,{src:e,enableHighlight:!0,onTextHighlight:n,onHighlightDelete:o})})}const u={args:{onTextHighlight:i(),onHighlightDelete:i()},render:e=>t.jsx(ve,{src:y,onTextHighlight:e.onTextHighlight,onHighlightDelete:e.onHighlightDelete}),parameters:{docs:{source:{code:`import { useState, useCallback } from "react";
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
}`}}}},w={args:{media:xe,defaultSidebarOpen:!0,sidebarMode:"outline"}},b={args:{src:"/osdk-ts/storybook/pr-3964/a1e10d5d6b6711268c6a60d812c19895262f0911/interactive-form-pdf.pdf",onFormSubmit:i(),onFormChange:i()},render:e=>t.jsx("div",{style:{height:"600px"},children:t.jsx(r,{...e})}),parameters:{docs:{source:{code:`import { BasePdfViewer } from "@osdk/react-components/experimental/pdf-viewer";

<BasePdfViewer
  src="https://example.com/interactive-form.pdf"
  onFormChange={(fieldName, value) => console.log(fieldName, value)}
  onFormSubmit={(data) => console.log("Form submitted:", data)}
/>`}}}};var V,A,M;a.parameters={...a.parameters,docs:{...(V=a.parameters)==null?void 0:V.docs,source:{originalSource:`{
  args: {
    src: SAMPLE_PDF_URL
  },
  render: (args: BasePdfViewerProps) => <div style={{
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
}`,...(M=(A=a.parameters)==null?void 0:A.docs)==null?void 0:M.source}}};var E,B,T;s.parameters={...s.parameters,docs:{...(E=s.parameters)==null?void 0:E.docs,source:{originalSource:`{
  render: () => <BlobViewerDemo url={SAMPLE_PDF_URL} />,
  parameters: {
    docs: {
      source: {
        code: \`import { BasePdfViewer } from "@osdk/react-components/experimental/pdf-viewer";

// src also accepts in-memory bytes: Blob, ArrayBuffer, or Uint8Array
const blob = await (await fetch("/compressed.tracemonkey-pldi-09.pdf")).blob();

<BasePdfViewer src={blob} />\`
      }
    }
  }
}`,...(T=(B=s.parameters)==null?void 0:B.docs)==null?void 0:T.source}}};var O,D,H;d.parameters={...d.parameters,docs:{...(O=d.parameters)==null?void 0:O.docs,source:{originalSource:`{
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
}`,...(H=(D=d.parameters)==null?void 0:D.docs)==null?void 0:H.source}}};var _,j,C;c.parameters={...c.parameters,docs:{...(_=c.parameters)==null?void 0:_.docs,source:{originalSource:`{
  args: {
    defaultSidebarOpen: true
  },
  parameters: {
    docs: {
      source: {
        code: \`import { PdfViewer } from "@osdk/react-components/experimental/pdf-viewer";

<PdfViewer media={myMediaObject} defaultSidebarOpen />\`
      }
    }
  }
}`,...(C=(j=c.parameters)==null?void 0:j.docs)==null?void 0:C.source}}};var R,F,W;m.parameters={...m.parameters,docs:{...(R=m.parameters)==null?void 0:R.docs,source:{originalSource:`{
  args: {
    defaultScale: 1.5
  },
  parameters: {
    docs: {
      source: {
        code: \`import { PdfViewer } from "@osdk/react-components/experimental/pdf-viewer";

<PdfViewer media={myMediaObject} defaultScale={1.5} />\`
      }
    }
  }
}`,...(W=(F=m.parameters)==null?void 0:F.docs)==null?void 0:W.source}}};var U,I,L;p.parameters={...p.parameters,docs:{...(U=p.parameters)==null?void 0:U.docs,source:{originalSource:`{
  args: {
    defaultAutoSize: true
  },
  parameters: {
    docs: {
      source: {
        code: \`import { PdfViewer } from "@osdk/react-components/experimental/pdf-viewer";

<PdfViewer media={myMediaObject} defaultAutoSize />\`
      }
    }
  }
}`,...(L=(I=p.parameters)==null?void 0:I.docs)==null?void 0:L.source}}};var N,z,$;l.parameters={...l.parameters,docs:{...(N=l.parameters)==null?void 0:N.docs,source:{originalSource:`{
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
}`,...($=(z=l.parameters)==null?void 0:z.docs)==null?void 0:$.source}}};var K,X,Y;h.parameters={...h.parameters,docs:{...(K=h.parameters)==null?void 0:K.docs,source:{originalSource:`{
  args: {
    defaultSidebarOpen: true,
    sidebarMode: "outline"
  },
  parameters: {
    docs: {
      source: {
        code: \`import { PdfViewer } from "@osdk/react-components/experimental/pdf-viewer";

<PdfViewer media={myMediaObject} defaultSidebarOpen sidebarMode="outline" />\`
      }
    }
  }
}`,...(Y=(X=h.parameters)==null?void 0:X.docs)==null?void 0:Y.source}}};var q,G,J;f.parameters={...f.parameters,docs:{...(q=f.parameters)==null?void 0:q.docs,source:{originalSource:`{
  args: {
    src: "/loading.pdf"
  },
  render: (args: BasePdfViewerProps) => <div style={{
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
}`,...(J=(G=f.parameters)==null?void 0:G.docs)==null?void 0:J.source}}};var Q,Z,ee;g.parameters={...g.parameters,docs:{...(Q=g.parameters)==null?void 0:Q.docs,source:{originalSource:`{
  args: {
    src: "/error.pdf"
  },
  render: (args: BasePdfViewerProps) => <div style={{
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
}`,...(ee=(Z=g.parameters)==null?void 0:Z.docs)==null?void 0:ee.source}}};var te,ne,re;u.parameters={...u.parameters,docs:{...(te=u.parameters)==null?void 0:te.docs,source:{originalSource:`{
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
}`,...(re=(ne=u.parameters)==null?void 0:ne.docs)==null?void 0:re.source}}};var oe,ie,ae;w.parameters={...w.parameters,docs:{...(oe=w.parameters)==null?void 0:oe.docs,source:{originalSource:`{
  args: {
    media: mockBookmarkedMedia,
    defaultSidebarOpen: true,
    sidebarMode: "outline"
  }
}`,...(ae=(ie=w.parameters)==null?void 0:ie.docs)==null?void 0:ae.source}}};var se,de,ce;b.parameters={...b.parameters,docs:{...(se=b.parameters)==null?void 0:se.docs,source:{originalSource:`{
  args: {
    src: \`\${import.meta.env.BASE_URL}interactive-form-pdf.pdf\`,
    onFormSubmit: fn(),
    onFormChange: fn()
  },
  render: (args: BasePdfViewerProps) => <div style={{
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
}`,...(ce=(de=b.parameters)==null?void 0:de.docs)==null?void 0:ce.source}}};const it=["WithPdfUrl","WithBlob","WithAnnotations","WithSidebar","CustomScale","WithAutoSize","WithDownload","WithOutlineSidebar","Loading","Error","WithHighlightMode","WithEmbeddedOutline","InteractiveForm"];export{m as CustomScale,g as Error,b as InteractiveForm,f as Loading,d as WithAnnotations,p as WithAutoSize,s as WithBlob,l as WithDownload,w as WithEmbeddedOutline,u as WithHighlightMode,h as WithOutlineSidebar,a as WithPdfUrl,c as WithSidebar,it as __namedExportsOrder,ot as default};
