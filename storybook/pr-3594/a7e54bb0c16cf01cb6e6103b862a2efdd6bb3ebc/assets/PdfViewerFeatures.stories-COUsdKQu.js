import{i as oe,h as re,j as n}from"./iframe-Cx4Ki0JG.js";import{P as y}from"./pdf-viewer-BcTYjHlC.js";import{B as i}from"./PdfViewer-CR3QHdmY.js";import"./preload-helper-D2p_ObaP.js";import"./PdfRenderer-CkjJUr0i.js";import"./index-HnQbfWf4.js";import"./PdfViewer.module.css-ByQ7ogu5.js";import"./PdfViewerAnnotationLayer-C9BhbNjv.js";import"./constants-DsXMS3N3.js";import"./usePdfDocument-hX0Pg-te.js";import"./spin-S7vuHYxj.js";import"./svgIconContainer-CsN3cDK3.js";import"./error-DpG7omXV.js";import"./withOsdkMetrics-neHI8iGf.js";import"./PdfViewerOutlineSidebar-em9Wfpb5.js";import"./PdfViewerSidebarHeader-lty95rC4.js";import"./useBaseUiId-BUi4NF8Q.js";import"./useControlled-D7I_6zSS.js";import"./CompositeRoot-CvWQobDt.js";import"./CompositeItem-C8Jrf0jR.js";import"./ToolbarRootContext-BirgvTm4.js";import"./composite-B6vW5PwB.js";import"./PdfViewerSearchBar-y_T9-pMe.js";import"./chevron-up-BkUBmg-M.js";import"./chevron-down-CTViWNjd.js";import"./cross-DY4qmy__.js";import"./PdfViewerSidebar-WyO7Ighv.js";import"./index-CdXFAStN.js";import"./index-BpfDO8te.js";import"./index-BqpatvoO.js";import"./PdfViewerToolbar-ZWcMX6ei.js";import"./Button-CEafUq7E.js";import"./chevron-right-QfdF4iFY.js";import"./Input-DV3d6RQh.js";import"./minus-a4vDQSG5.js";import"./search-epSbqOXw.js";const ae=2147483647,x=100,se=400,de=5;function ce(){return oe()?de:Math.floor(Math.random()*(se-x)+x)}async function me(e){let t;switch(e){case"infinite":{t=ae;break}case"real":{t=ce();break}default:throw new Error(`Failed to delay a response: unknown delay mode "${e}". Please make sure you provide one of the supported modes ("real", "infinite") or a number.`)}return new Promise(b=>setTimeout(b,t))}const{fn:r}=__STORYBOOK_MODULE_TEST__,w="/osdk-ts/storybook/pr-3594/a7e54bb0c16cf01cb6e6103b862a2efdd6bb3ebc/compressed.tracemonkey-pldi-09.pdf",pe="/osdk-ts/storybook/pr-3594/a7e54bb0c16cf01cb6e6103b862a2efdd6bb3ebc/nested_outline.pdf";function ie(e,t){return{fetchContents:()=>fetch(e),fetchMetadata:()=>Promise.resolve({path:t,sizeBytes:1024e3,mediaType:"application/pdf"}),getMediaReference:()=>({mimeType:"application/pdf",reference:{type:"mediaSetViewItem",mediaSetViewItem:{mediaItemRid:"ri.mio.main.media-item.mock-pdf",mediaSetRid:"ri.mio.main.media-set.mock-set",mediaSetViewRid:"ri.mio.main.media-set-view.mock-view"}}})}}const le=ie(w,"compressed.tracemonkey-pldi-09.pdf"),he=ie(pe,"pdf-example-bookmarks.pdf"),Je={title:"Components/DocumentViewer/Renderers/PdfViewer/Features",component:y,tags:["beta"],args:{media:le},render:e=>n.jsx("div",{style:{height:"600px"},children:n.jsx(y,{...e})}),parameters:{controls:{expanded:!0}},argTypes:{media:{description:"The Media object to fetch PDF contents from",control:!1},annotations:{description:"Annotations to overlay on the PDF",control:"object"},onAnnotationClick:{description:"Callback fired when an annotation is clicked",control:!1,table:{category:"Events"}},initialPage:{description:"Page to display on first render (1-indexed)",control:"number",table:{defaultValue:{summary:"1"}}},initialScale:{description:"Initial zoom scale",control:"number",table:{defaultValue:{summary:"1.0"}}},initialSidebarOpen:{description:"Whether the thumbnail sidebar is initially open",control:"boolean",table:{defaultValue:{summary:"false"}}},enableDownload:{description:"Whether the download button is shown in the toolbar",control:"boolean",table:{defaultValue:{summary:"false"}}},sidebarMode:{description:"Which sidebar panel to show when the sidebar is open",control:"radio",options:["thumbnails","outline"],table:{defaultValue:{summary:'"thumbnails"'}}},outlineIcons:{description:"Custom icon components for each outline depth level (0-indexed)",control:!1},className:{description:"Additional CSS class name for the root element",control:"text"}}},o={args:{src:w},render:e=>n.jsx("div",{style:{height:"600px"},children:n.jsx(i,{...e})}),parameters:{docs:{source:{code:`import { BasePdfViewer } from "@osdk/react-components/experimental/pdf-viewer";

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

<PdfViewer media={myMediaObject} initialSidebarOpen sidebarMode="outline" />`}}}},l={args:{src:"/loading.pdf"},render:e=>n.jsx("div",{style:{height:"600px"},children:n.jsx(i,{...e})}),parameters:{msw:{handlers:[re.get("/loading.pdf",async()=>{await me("infinite")})]}}},h={args:{src:"/error.pdf"},render:e=>n.jsx("div",{style:{height:"600px"},children:n.jsx(i,{...e})}),parameters:{msw:{handlers:[re.get("/error.pdf",()=>new Response("Server Error",{status:500}))]}}};function ge({src:e,onTextHighlight:t,onHighlightDelete:b}){return n.jsx("div",{style:{height:"600px"},children:n.jsx(i,{src:e,enableHighlight:!0,onTextHighlight:t,onHighlightDelete:b})})}const g={args:{onTextHighlight:r(),onHighlightDelete:r()},render:e=>n.jsx(ge,{src:w,onTextHighlight:e.onTextHighlight,onHighlightDelete:e.onHighlightDelete}),parameters:{docs:{source:{code:`import { useState, useCallback } from "react";
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
}`}}}},f={args:{media:he,initialSidebarOpen:!0,sidebarMode:"outline"}},u={args:{src:"/osdk-ts/storybook/pr-3594/a7e54bb0c16cf01cb6e6103b862a2efdd6bb3ebc/interactive-form-pdf.pdf",onFormSubmit:r(),onFormChange:r()},render:e=>n.jsx("div",{style:{height:"600px"},children:n.jsx(i,{...e})}),parameters:{docs:{source:{code:`import { BasePdfViewer } from "@osdk/react-components/experimental/pdf-viewer";

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
}`,...(te=(ne=u.parameters)==null?void 0:ne.docs)==null?void 0:te.source}}};const Qe=["WithPdfUrl","WithAnnotations","WithSidebar","CustomScale","WithAutoSize","WithDownload","WithOutlineSidebar","Loading","Error","WithHighlightMode","WithEmbeddedOutline","InteractiveForm"];export{d as CustomScale,h as Error,u as InteractiveForm,l as Loading,a as WithAnnotations,c as WithAutoSize,m as WithDownload,f as WithEmbeddedOutline,g as WithHighlightMode,p as WithOutlineSidebar,o as WithPdfUrl,s as WithSidebar,Qe as __namedExportsOrder,Je as default};
