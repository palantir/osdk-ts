import{i as le,h as me,j as t,r as v}from"./iframe-1zlKUcSc.js";import{P as k}from"./pdf-viewer-9mQLjqVp.js";import{B as r}from"./PdfViewer-CYxKyECb.js";import"./preload-helper-CTkLWgF6.js";import"./PdfRenderer-rW-OjwyR.js";import"./index-DiPEpNnl.js";import"./PdfViewer.module.css-VuJgSOul.js";import"./PdfViewerAnnotationLayer-BQzGf32V.js";import"./constants-DsXMS3N3.js";import"./usePdfDocument-DuAORw74.js";import"./spin-B9scOXqx.js";import"./svgIconContainer-C8IZLkS0.js";import"./error-DfNGl4TZ.js";import"./withOsdkMetrics-CJWuisvC.js";import"./PdfViewerOutlineSidebar-DFp9K28N.js";import"./PdfViewerSidebarHeader-BoT1u3SV.js";import"./useBaseUiId-6JzTpPfQ.js";import"./useControlled-FW3ZNM_t.js";import"./CompositeRoot-ExDSsh9R.js";import"./CompositeItem-D-oGgt8S.js";import"./ToolbarRootContext-CB0hAZMy.js";import"./composite-DWazgZ7T.js";import"./PdfViewerSearchBar-CWPcyDmb.js";import"./chevron-up-Cb-VTuAg.js";import"./chevron-down-Bey2Po21.js";import"./cross-BuIFoaJh.js";import"./PdfViewerSidebar-Cjw_lJIh.js";import"./index-h_0uM_IG.js";import"./index-HXc49RyK.js";import"./index-BcuLOOrQ.js";import"./PdfViewerToolbar-Cdb50hx9.js";import"./Button-CY55YNlH.js";import"./chevron-right-COf3RG3a.js";import"./Input-HecR9wga.js";import"./search-Dv_yGgK4.js";const he=2147483647,S=100,ge=400,fe=5;function ue(){return le()?fe:Math.floor(Math.random()*(ge-S)+S)}async function be(e){let n;switch(e){case"infinite":{n=he;break}case"real":{n=ue();break}default:throw new Error(`Failed to delay a response: unknown delay mode "${e}". Please make sure you provide one of the supported modes ("real", "infinite") or a number.`)}return new Promise(i=>setTimeout(i,n))}const{fn:o}=__STORYBOOK_MODULE_TEST__,y="/osdk-ts/storybook/pr-3696/3bbe471cf2d7051f7abb3604bb338cba7d37597e/compressed.tracemonkey-pldi-09.pdf",we="/osdk-ts/storybook/pr-3696/3bbe471cf2d7051f7abb3604bb338cba7d37597e/nested_outline.pdf";function pe(e,n){return{fetchContents:()=>fetch(e),fetchMetadata:()=>Promise.resolve({path:n,sizeBytes:1024e3,mediaType:"application/pdf"}),getMediaReference:()=>({mimeType:"application/pdf",reference:{type:"mediaSetViewItem",mediaSetViewItem:{mediaItemRid:"ri.mio.main.media-item.mock-pdf",mediaSetRid:"ri.mio.main.media-set.mock-set",mediaSetViewRid:"ri.mio.main.media-set-view.mock-view"}}})}}const ye=pe(y,"compressed.tracemonkey-pldi-09.pdf"),xe=pe(we,"pdf-example-bookmarks.pdf"),it={title:"Components/DocumentViewer/Renderers/PdfViewer/Features",component:k,tags:["beta"],args:{media:ye},render:e=>t.jsx("div",{style:{height:"600px"},children:t.jsx(k,{...e})}),parameters:{controls:{expanded:!0}},argTypes:{media:{description:"The Media object to fetch PDF contents from",control:!1},annotations:{description:"Annotations to overlay on the PDF",control:"object"},onAnnotationClick:{description:"Callback fired when an annotation is clicked",control:!1,table:{category:"Events"}},initialPage:{description:"Page to display on first render (1-indexed)",control:"number",table:{defaultValue:{summary:"1"}}},initialScale:{description:"Initial zoom scale",control:"number",table:{defaultValue:{summary:"1.0"}}},initialSidebarOpen:{description:"Whether the thumbnail sidebar is initially open",control:"boolean",table:{defaultValue:{summary:"false"}}},enableDownload:{description:"Whether the download button is shown in the toolbar",control:"boolean",table:{defaultValue:{summary:"false"}}},sidebarMode:{description:"Which sidebar panel to show when the sidebar is open",control:"radio",options:["thumbnails","outline"],table:{defaultValue:{summary:'"thumbnails"'}}},outlineIcons:{description:"Custom icon components for each outline depth level (0-indexed)",control:!1},className:{description:"Additional CSS class name for the root element",control:"text"}}},a={args:{src:y},render:e=>t.jsx("div",{style:{height:"600px"},children:t.jsx(r,{...e})}),parameters:{docs:{source:{code:`import { BasePdfViewer } from "@osdk/react-components/experimental/pdf-viewer";

<BasePdfViewer src="/compressed.tracemonkey-pldi-09.pdf" />`}}}};function Pe({url:e}){const[n,i]=v.useState(void 0);return v.useEffect(()=>{let P=!1;return fetch(e).then(x=>x.blob()).then(x=>{P||i(x)}),()=>{P=!0}},[e]),t.jsx("div",{style:{height:"600px"},children:n==null?"Fetching PDF into a Blob…":t.jsx(r,{src:n})})}const s={render:()=>t.jsx(Pe,{url:y}),parameters:{docs:{source:{code:`import { BasePdfViewer } from "@osdk/react-components/experimental/pdf-viewer";

// src also accepts in-memory bytes: Blob, ArrayBuffer, or Uint8Array
const blob = await (await fetch("/compressed.tracemonkey-pldi-09.pdf")).blob();

<BasePdfViewer src={blob} />`}}}},d={args:{onAnnotationClick:o(),annotations:[{id:"h1",type:"highlight",page:1,rect:{x:55,y:696,width:480,height:24},label:"Title highlight"},{id:"u1",type:"underline",page:1,rect:{x:88,y:614,width:440,height:2}},{id:"c1",type:"comment",page:1,rect:{x:538,y:400,width:24,height:24},label:"Review this section"},{id:"p1",type:"pin",page:1,rect:{x:44,y:446,width:16,height:16},label:"Pin marker"}]},parameters:{docs:{source:{code:`import { PdfViewer } from "@osdk/react-components/experimental/pdf-viewer";

<PdfViewer
  media={myMediaObject}
  annotations={[
    { id: "h1", type: "highlight", page: 1, rect: { x: 55, y: 696, width: 480, height: 24 }, label: "Title highlight" },
    { id: "u1", type: "underline", page: 1, rect: { x: 88, y: 614, width: 440, height: 2 } },
    { id: "c1", type: "comment", page: 1, rect: { x: 538, y: 400, width: 24, height: 24 }, label: "Review this" },
    { id: "p1", type: "pin", page: 1, rect: { x: 44, y: 446, width: 16, height: 16 }, label: "Pin" },
  ]}
  onAnnotationClick={(annotation) => handleAnnotationClick(annotation)}
/>`}}}},c={args:{initialSidebarOpen:!0},parameters:{docs:{source:{code:`import { PdfViewer } from "@osdk/react-components/experimental/pdf-viewer";

<PdfViewer media={myMediaObject} initialSidebarOpen />`}}}},m={args:{initialScale:1.5},parameters:{docs:{source:{code:`import { PdfViewer } from "@osdk/react-components/experimental/pdf-viewer";

<PdfViewer media={myMediaObject} initialScale={1.5} />`}}}},p={args:{initialAutoSize:!0},parameters:{docs:{source:{code:`import { PdfViewer } from "@osdk/react-components/experimental/pdf-viewer";

<PdfViewer media={myMediaObject} initialAutoSize />`}}}},l={args:{enableDownload:!0},parameters:{docs:{source:{code:`import { PdfViewer } from "@osdk/react-components/experimental/pdf-viewer";

<PdfViewer media={myMediaObject} enableDownload />`}}}},h={args:{initialSidebarOpen:!0,sidebarMode:"outline"},parameters:{docs:{source:{code:`import { PdfViewer } from "@osdk/react-components/experimental/pdf-viewer";

<PdfViewer media={myMediaObject} initialSidebarOpen sidebarMode="outline" />`}}}},g={args:{src:"/loading.pdf"},render:e=>t.jsx("div",{style:{height:"600px"},children:t.jsx(r,{...e})}),parameters:{msw:{handlers:[me.get("/loading.pdf",async()=>{await be("infinite")})]}}},f={args:{src:"/error.pdf"},render:e=>t.jsx("div",{style:{height:"600px"},children:t.jsx(r,{...e})}),parameters:{msw:{handlers:[me.get("/error.pdf",()=>new Response("Server Error",{status:500}))]}}};function ve({src:e,onTextHighlight:n,onHighlightDelete:i}){return t.jsx("div",{style:{height:"600px"},children:t.jsx(r,{src:e,enableHighlight:!0,onTextHighlight:n,onHighlightDelete:i})})}const u={args:{onTextHighlight:o(),onHighlightDelete:o()},render:e=>t.jsx(ve,{src:y,onTextHighlight:e.onTextHighlight,onHighlightDelete:e.onHighlightDelete}),parameters:{docs:{source:{code:`import { useState, useCallback } from "react";
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
}`}}}},b={args:{media:xe,initialSidebarOpen:!0,sidebarMode:"outline"}},w={args:{src:"/osdk-ts/storybook/pr-3696/3bbe471cf2d7051f7abb3604bb338cba7d37597e/interactive-form-pdf.pdf",onFormSubmit:o(),onFormChange:o()},render:e=>t.jsx("div",{style:{height:"600px"},children:t.jsx(r,{...e})}),parameters:{docs:{source:{code:`import { BasePdfViewer } from "@osdk/react-components/experimental/pdf-viewer";

<BasePdfViewer
  src="https://example.com/interactive-form.pdf"
  onFormChange={(fieldName, value) => console.log(fieldName, value)}
  onFormSubmit={(data) => console.log("Form submitted:", data)}
/>`}}}};var V,A,M;a.parameters={...a.parameters,docs:{...(V=a.parameters)==null?void 0:V.docs,source:{originalSource:`{
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
}`,...(M=(A=a.parameters)==null?void 0:A.docs)==null?void 0:M.source}}};var E,T,O;s.parameters={...s.parameters,docs:{...(E=s.parameters)==null?void 0:E.docs,source:{originalSource:`{
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
}`,...(O=(T=s.parameters)==null?void 0:T.docs)==null?void 0:O.source}}};var B,D,H;d.parameters={...d.parameters,docs:{...(B=d.parameters)==null?void 0:B.docs,source:{originalSource:`{
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
}`,...(C=(j=c.parameters)==null?void 0:j.docs)==null?void 0:C.source}}};var R,F,W;m.parameters={...m.parameters,docs:{...(R=m.parameters)==null?void 0:R.docs,source:{originalSource:`{
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
}`,...(W=(F=m.parameters)==null?void 0:F.docs)==null?void 0:W.source}}};var U,I,L;p.parameters={...p.parameters,docs:{...(U=p.parameters)==null?void 0:U.docs,source:{originalSource:`{
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
}`,...(Y=(X=h.parameters)==null?void 0:X.docs)==null?void 0:Y.source}}};var q,G,J;g.parameters={...g.parameters,docs:{...(q=g.parameters)==null?void 0:q.docs,source:{originalSource:`{
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
}`,...(J=(G=g.parameters)==null?void 0:G.docs)==null?void 0:J.source}}};var Q,Z,ee;f.parameters={...f.parameters,docs:{...(Q=f.parameters)==null?void 0:Q.docs,source:{originalSource:`{
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
}`,...(ee=(Z=f.parameters)==null?void 0:Z.docs)==null?void 0:ee.source}}};var te,ne,re;u.parameters={...u.parameters,docs:{...(te=u.parameters)==null?void 0:te.docs,source:{originalSource:`{
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
}`,...(re=(ne=u.parameters)==null?void 0:ne.docs)==null?void 0:re.source}}};var ie,oe,ae;b.parameters={...b.parameters,docs:{...(ie=b.parameters)==null?void 0:ie.docs,source:{originalSource:`{
  args: {
    media: mockBookmarkedMedia,
    initialSidebarOpen: true,
    sidebarMode: "outline"
  }
}`,...(ae=(oe=b.parameters)==null?void 0:oe.docs)==null?void 0:ae.source}}};var se,de,ce;w.parameters={...w.parameters,docs:{...(se=w.parameters)==null?void 0:se.docs,source:{originalSource:`{
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
}`,...(ce=(de=w.parameters)==null?void 0:de.docs)==null?void 0:ce.source}}};const ot=["WithPdfUrl","WithBlob","WithAnnotations","WithSidebar","CustomScale","WithAutoSize","WithDownload","WithOutlineSidebar","Loading","Error","WithHighlightMode","WithEmbeddedOutline","InteractiveForm"];export{m as CustomScale,f as Error,w as InteractiveForm,g as Loading,d as WithAnnotations,p as WithAutoSize,s as WithBlob,l as WithDownload,b as WithEmbeddedOutline,u as WithHighlightMode,h as WithOutlineSidebar,a as WithPdfUrl,c as WithSidebar,ot as __namedExportsOrder,it as default};
