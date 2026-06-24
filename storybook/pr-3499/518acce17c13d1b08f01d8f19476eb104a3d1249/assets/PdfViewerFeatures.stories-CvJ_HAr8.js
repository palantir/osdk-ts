import{i as oe,h as re,j as n}from"./iframe-x2-cfQxg.js";import{P as y}from"./pdf-viewer-uOmrSd6E.js";import{B as i}from"./PdfViewer-D1hRGvwx.js";import"./preload-helper-DLkIcpwq.js";import"./PdfRenderer-BFLXgcad.js";import"./index-B84hqV3p.js";import"./PdfViewer.module.css-DaMM-npT.js";import"./PdfViewerAnnotationLayer-CVIZuI5O.js";import"./constants-DsXMS3N3.js";import"./usePdfDocument-Dg7uN7iY.js";import"./spin-BGk7s2w-.js";import"./svgIconContainer-BRmFBXVT.js";import"./error-CeV8yWLv.js";import"./withOsdkMetrics-BCm2-y3y.js";import"./PdfViewerOutlineSidebar-D_RRTMBT.js";import"./PdfViewerSidebarHeader-B7fGepA1.js";import"./useBaseUiId-RxZWVLhz.js";import"./useControlled-BLeoY5Oc.js";import"./CompositeRoot-DlicaraB.js";import"./CompositeItem-Dqy6AQwb.js";import"./ToolbarRootContext-BTnwJXb-.js";import"./composite-iIR3UcfH.js";import"./PdfViewerSearchBar-Dj6H7oNf.js";import"./chevron-up-DMhwPs5k.js";import"./chevron-down-B6ZXDnXt.js";import"./cross-sQjrSNhE.js";import"./PdfViewerSidebar-Dd9Tnb11.js";import"./index-cEubUTa-.js";import"./index-aRK24jVF.js";import"./index-DLpspjDb.js";import"./PdfViewerToolbar-BL1zIuIv.js";import"./Button-DtFdx_p9.js";import"./chevron-right-DcU3TK-M.js";import"./Input-CELaRZCY.js";import"./minus-D_05B2qj.js";const ae=2147483647,x=100,se=400,de=5;function ce(){return oe()?de:Math.floor(Math.random()*(se-x)+x)}async function me(e){let t;switch(e){case"infinite":{t=ae;break}case"real":{t=ce();break}default:throw new Error(`Failed to delay a response: unknown delay mode "${e}". Please make sure you provide one of the supported modes ("real", "infinite") or a number.`)}return new Promise(w=>setTimeout(w,t))}const{fn:r}=__STORYBOOK_MODULE_TEST__,b="/osdk-ts/storybook/pr-3499/518acce17c13d1b08f01d8f19476eb104a3d1249/compressed.tracemonkey-pldi-09.pdf",pe="/osdk-ts/storybook/pr-3499/518acce17c13d1b08f01d8f19476eb104a3d1249/nested_outline.pdf";function ie(e,t){return{fetchContents:()=>fetch(e),fetchMetadata:()=>Promise.resolve({path:t,sizeBytes:1024e3,mediaType:"application/pdf"}),getMediaReference:()=>({mimeType:"application/pdf",reference:{type:"mediaSetViewItem",mediaSetViewItem:{mediaItemRid:"ri.mio.main.media-item.mock-pdf",mediaSetRid:"ri.mio.main.media-set.mock-set",mediaSetViewRid:"ri.mio.main.media-set-view.mock-view"}}})}}const le=ie(b,"compressed.tracemonkey-pldi-09.pdf"),he=ie(pe,"pdf-example-bookmarks.pdf"),Ge={title:"Components/DocumentViewer/Renderers/PdfViewer/Features",component:y,tags:["beta"],args:{media:le},render:e=>n.jsx("div",{style:{height:"600px"},children:n.jsx(y,{...e})}),parameters:{controls:{expanded:!0}},argTypes:{media:{description:"The Media object to fetch PDF contents from",control:!1},annotations:{description:"Annotations to overlay on the PDF",control:"object"},onAnnotationClick:{description:"Callback fired when an annotation is clicked",control:!1,table:{category:"Events"}},initialPage:{description:"Page to display on first render (1-indexed)",control:"number",table:{defaultValue:{summary:"1"}}},initialScale:{description:"Initial zoom scale",control:"number",table:{defaultValue:{summary:"1.0"}}},initialSidebarOpen:{description:"Whether the thumbnail sidebar is initially open",control:"boolean",table:{defaultValue:{summary:"false"}}},enableDownload:{description:"Whether the download button is shown in the toolbar",control:"boolean",table:{defaultValue:{summary:"false"}}},sidebarMode:{description:"Which sidebar panel to show when the sidebar is open",control:"radio",options:["thumbnails","outline"],table:{defaultValue:{summary:'"thumbnails"'}}},outlineIcons:{description:"Custom icon components for each outline depth level (0-indexed)",control:!1},className:{description:"Additional CSS class name for the root element",control:"text"}}},o={args:{src:b},render:e=>n.jsx("div",{style:{height:"600px"},children:n.jsx(i,{...e})}),parameters:{docs:{source:{code:`import { BasePdfViewer } from "@osdk/react-components/experimental/pdf-viewer";

<BasePdfViewer src="/compressed.tracemonkey-pldi-09.pdf" />`}}}},a={args:{onAnnotationClick:r(),annotations:[{id:"h1",type:"highlight",page:1,rect:{x:55,y:696,width:480,height:24},label:"Title highlight"},{id:"u1",type:"underline",page:1,rect:{x:88,y:614,width:440,height:2}},{id:"c1",type:"comment",page:1,rect:{x:538,y:400,width:24,height:24},label:"Review this section"},{id:"p1",type:"pin",page:1,rect:{x:44,y:446,width:16,height:16},label:"Pin marker"}]},parameters:{docs:{source:{code:`import { PdfViewer } from "@osdk/react-components/experimental/pdf-viewer";

<PdfViewer
  media={myMediaObject}
  annotations={[
    { id: "h1", type: "highlight", page: 1, rect: { x: 55, y: 696, width: 480, height: 24 }, label: "Title highlight" },
    { id: "u1", type: "underline", page: 1, rect: { x: 88, y: 614, width: 440, height: 2 } },
    { id: "c1", type: "comment", page: 1, rect: { x: 538, y: 400, width: 24, height: 24 }, label: "Review this" },
    { id: "p1", type: "pin", page: 1, rect: { x: 44, y: 446, width: 16, height: 16 }, label: "Pin" },
  ]}
  onAnnotationClick={(annotation) => handleAnnotationClick(annotation)}
/>`}}}},s={args:{initialSidebarOpen:!0},parameters:{docs:{source:{code:`import { PdfViewer } from "@osdk/react-components/experimental/pdf-viewer";

<PdfViewer media={myMediaObject} initialSidebarOpen />`}}}},d={args:{initialScale:1.5},parameters:{docs:{source:{code:`import { PdfViewer } from "@osdk/react-components/experimental/pdf-viewer";

<PdfViewer media={myMediaObject} initialScale={1.5} />`}}}},c={args:{initialAutoSize:!0},parameters:{docs:{source:{code:`import { PdfViewer } from "@osdk/react-components/experimental/pdf-viewer";

<PdfViewer media={myMediaObject} initialAutoSize />`}}}},m={args:{enableDownload:!0},parameters:{docs:{source:{code:`import { PdfViewer } from "@osdk/react-components/experimental/pdf-viewer";

<PdfViewer media={myMediaObject} enableDownload />`}}}},p={args:{initialSidebarOpen:!0,sidebarMode:"outline"},parameters:{docs:{source:{code:`import { PdfViewer } from "@osdk/react-components/experimental/pdf-viewer";

<PdfViewer media={myMediaObject} initialSidebarOpen sidebarMode="outline" />`}}}},l={args:{src:"/loading.pdf"},render:e=>n.jsx("div",{style:{height:"600px"},children:n.jsx(i,{...e})}),parameters:{msw:{handlers:[re.get("/loading.pdf",async()=>{await me("infinite")})]}}},h={args:{src:"/error.pdf"},render:e=>n.jsx("div",{style:{height:"600px"},children:n.jsx(i,{...e})}),parameters:{msw:{handlers:[re.get("/error.pdf",()=>new Response("Server Error",{status:500}))]}}};function ge({src:e,onTextHighlight:t,onHighlightDelete:w}){return n.jsx("div",{style:{height:"600px"},children:n.jsx(i,{src:e,enableHighlight:!0,onTextHighlight:t,onHighlightDelete:w})})}const g={args:{onTextHighlight:r(),onHighlightDelete:r()},render:e=>n.jsx(ge,{src:b,onTextHighlight:e.onTextHighlight,onHighlightDelete:e.onHighlightDelete}),parameters:{docs:{source:{code:`import { useState, useCallback } from "react";
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
}`}}}},f={args:{media:he,initialSidebarOpen:!0,sidebarMode:"outline"}},u={args:{src:"/osdk-ts/storybook/pr-3499/518acce17c13d1b08f01d8f19476eb104a3d1249/interactive-form-pdf.pdf",onFormSubmit:r(),onFormChange:r()},render:e=>n.jsx("div",{style:{height:"600px"},children:n.jsx(i,{...e})}),parameters:{docs:{source:{code:`import { BasePdfViewer } from "@osdk/react-components/experimental/pdf-viewer";

<BasePdfViewer
  src="https://example.com/interactive-form.pdf"
  onFormChange={(fieldName, value) => console.log(fieldName, value)}
  onFormSubmit={(data) => console.log("Form submitted:", data)}
/>`}}}};var P,v,k;o.parameters={...o.parameters,docs:{...(P=o.parameters)==null?void 0:P.docs,source:{originalSource:`{
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
}`,...(k=(v=o.parameters)==null?void 0:v.docs)==null?void 0:k.source}}};var S,V,M;a.parameters={...a.parameters,docs:{...(S=a.parameters)==null?void 0:S.docs,source:{originalSource:`{
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
}`,...(M=(V=a.parameters)==null?void 0:V.docs)==null?void 0:M.source}}};var A,E,T;s.parameters={...s.parameters,docs:{...(A=s.parameters)==null?void 0:A.docs,source:{originalSource:`{
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
}`,...(T=(E=s.parameters)==null?void 0:E.docs)==null?void 0:T.source}}};var O,H,C;d.parameters={...d.parameters,docs:{...(O=d.parameters)==null?void 0:O.docs,source:{originalSource:`{
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
}`,...(C=(H=d.parameters)==null?void 0:H.docs)==null?void 0:C.source}}};var _,D,R;c.parameters={...c.parameters,docs:{...(_=c.parameters)==null?void 0:_.docs,source:{originalSource:`{
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
}`,...(R=(D=c.parameters)==null?void 0:D.docs)==null?void 0:R.source}}};var j,B,F;m.parameters={...m.parameters,docs:{...(j=m.parameters)==null?void 0:j.docs,source:{originalSource:`{
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
}`,...(F=(B=m.parameters)==null?void 0:B.docs)==null?void 0:F.source}}};var W,I,L;p.parameters={...p.parameters,docs:{...(W=p.parameters)==null?void 0:W.docs,source:{originalSource:`{
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
}`,...(L=(I=p.parameters)==null?void 0:I.docs)==null?void 0:L.source}}};var U,N,z;l.parameters={...l.parameters,docs:{...(U=l.parameters)==null?void 0:U.docs,source:{originalSource:`{
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
}`,...(z=(N=l.parameters)==null?void 0:N.docs)==null?void 0:z.source}}};var $,K,X;h.parameters={...h.parameters,docs:{...($=h.parameters)==null?void 0:$.docs,source:{originalSource:`{
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
}`,...(X=(K=h.parameters)==null?void 0:K.docs)==null?void 0:X.source}}};var Y,q,G;g.parameters={...g.parameters,docs:{...(Y=g.parameters)==null?void 0:Y.docs,source:{originalSource:`{
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
}`,...(G=(q=g.parameters)==null?void 0:q.docs)==null?void 0:G.source}}};var J,Q,Z;f.parameters={...f.parameters,docs:{...(J=f.parameters)==null?void 0:J.docs,source:{originalSource:`{
  args: {
    media: mockBookmarkedMedia,
    initialSidebarOpen: true,
    sidebarMode: "outline"
  }
}`,...(Z=(Q=f.parameters)==null?void 0:Q.docs)==null?void 0:Z.source}}};var ee,ne,te;u.parameters={...u.parameters,docs:{...(ee=u.parameters)==null?void 0:ee.docs,source:{originalSource:`{
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
}`,...(te=(ne=u.parameters)==null?void 0:ne.docs)==null?void 0:te.source}}};const Je=["WithPdfUrl","WithAnnotations","WithSidebar","CustomScale","WithAutoSize","WithDownload","WithOutlineSidebar","Loading","Error","WithHighlightMode","WithEmbeddedOutline","InteractiveForm"];export{d as CustomScale,h as Error,u as InteractiveForm,l as Loading,a as WithAnnotations,c as WithAutoSize,m as WithDownload,f as WithEmbeddedOutline,g as WithHighlightMode,p as WithOutlineSidebar,o as WithPdfUrl,s as WithSidebar,Je as __namedExportsOrder,Ge as default};
