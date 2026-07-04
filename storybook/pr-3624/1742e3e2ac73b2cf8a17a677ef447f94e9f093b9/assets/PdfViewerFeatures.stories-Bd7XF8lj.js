import{i as oe,j as n,h as re}from"./iframe-BeCKStTi.js";import{P as y}from"./pdf-viewer-ZLtdqLx0.js";import{B as i}from"./PdfViewer-CkoX5nKm.js";import"./preload-helper-BICrzKRt.js";import"./PdfRenderer-LS-QTkcC.js";import"./index-BfYzXW_3.js";import"./PdfViewer.module.css-BsuUGzIE.js";import"./PdfViewerAnnotationLayer-fZjGDmfj.js";import"./constants-DsXMS3N3.js";import"./usePdfDocument-DK6unOZt.js";import"./spin-Dc6yxLwi.js";import"./svgIconContainer-D-9_AOAs.js";import"./error-DvUULirA.js";import"./withOsdkMetrics-DoKVZacI.js";import"./PdfViewerOutlineSidebar-BiT5wcDc.js";import"./PdfViewerSidebarHeader-BReRA7h7.js";import"./useBaseUiId-COsIpFVh.js";import"./useControlled-5Cxw9uoZ.js";import"./CompositeRoot-r5VPPZg3.js";import"./CompositeItem-DkAKuEhG.js";import"./ToolbarRootContext-HD-Y_-jz.js";import"./composite-U2ojCD3f.js";import"./PdfViewerSearchBar-Bl8vV7Dk.js";import"./chevron-up-BthBkyrK.js";import"./chevron-down-BtABU6Ff.js";import"./cross-DDXI9CZ5.js";import"./PdfViewerSidebar-Bkr8M1jp.js";import"./index-DWv9wz-O.js";import"./index-BkJ0Lguu.js";import"./index-BPIvZm15.js";import"./PdfViewerToolbar-s6o0ppC9.js";import"./Button-to0u69wN.js";import"./chevron-right-BFpwcuaa.js";import"./Input-fr7UgVSn.js";import"./search-CZf2_gwq.js";const ae=2147483647,x=100,se=400,de=5;function ce(){return oe()?de:Math.floor(Math.random()*(se-x)+x)}async function me(e){let t;switch(e){case"infinite":{t=ae;break}case"real":{t=ce();break}default:throw new Error(`Failed to delay a response: unknown delay mode "${e}". Please make sure you provide one of the supported modes ("real", "infinite") or a number.`)}return new Promise(w=>setTimeout(w,t))}const{fn:r}=__STORYBOOK_MODULE_TEST__,b="/osdk-ts/storybook/pr-3624/1742e3e2ac73b2cf8a17a677ef447f94e9f093b9/compressed.tracemonkey-pldi-09.pdf",pe="/osdk-ts/storybook/pr-3624/1742e3e2ac73b2cf8a17a677ef447f94e9f093b9/nested_outline.pdf";function ie(e,t){return{fetchContents:()=>fetch(e),fetchMetadata:()=>Promise.resolve({mediaType:"application/pdf",path:t,sizeBytes:1024e3}),getMediaReference:()=>({mimeType:"application/pdf",reference:{mediaSetViewItem:{mediaItemRid:"ri.mio.main.media-item.mock-pdf",mediaSetRid:"ri.mio.main.media-set.mock-set",mediaSetViewRid:"ri.mio.main.media-set-view.mock-view"},type:"mediaSetViewItem"}})}}const le=ie(b,"compressed.tracemonkey-pldi-09.pdf"),he=ie(pe,"pdf-example-bookmarks.pdf"),Ge={argTypes:{annotations:{control:"object",description:"Annotations to overlay on the PDF"},className:{control:"text",description:"Additional CSS class name for the root element"},enableDownload:{control:"boolean",description:"Whether the download button is shown in the toolbar",table:{defaultValue:{summary:"false"}}},initialPage:{control:"number",description:"Page to display on first render (1-indexed)",table:{defaultValue:{summary:"1"}}},initialScale:{control:"number",description:"Initial zoom scale",table:{defaultValue:{summary:"1.0"}}},initialSidebarOpen:{control:"boolean",description:"Whether the thumbnail sidebar is initially open",table:{defaultValue:{summary:"false"}}},media:{control:!1,description:"The Media object to fetch PDF contents from"},onAnnotationClick:{control:!1,description:"Callback fired when an annotation is clicked",table:{category:"Events"}},outlineIcons:{control:!1,description:"Custom icon components for each outline depth level (0-indexed)"},sidebarMode:{control:"radio",description:"Which sidebar panel to show when the sidebar is open",options:["thumbnails","outline"],table:{defaultValue:{summary:'"thumbnails"'}}}},args:{media:le},component:y,parameters:{controls:{expanded:!0}},render:e=>n.jsx("div",{style:{height:"600px"},children:n.jsx(y,{...e})}),tags:["beta"],title:"Components/DocumentViewer/Renderers/PdfViewer/Features"},o={args:{src:b},parameters:{docs:{source:{code:`import { BasePdfViewer } from "@osdk/react-components/experimental/pdf-viewer";

<BasePdfViewer src="/compressed.tracemonkey-pldi-09.pdf" />`}}},render:e=>n.jsx("div",{style:{height:"600px"},children:n.jsx(i,{...e})})},a={args:{annotations:[{id:"h1",label:"Title highlight",page:1,rect:{height:24,width:480,x:55,y:696},type:"highlight"},{id:"u1",page:1,rect:{height:2,width:440,x:88,y:614},type:"underline"},{id:"c1",label:"Review this section",page:1,rect:{height:24,width:24,x:538,y:400},type:"comment"},{id:"p1",label:"Pin marker",page:1,rect:{height:16,width:16,x:44,y:446},type:"pin"}],onAnnotationClick:r()},parameters:{docs:{source:{code:`import { PdfViewer } from "@osdk/react-components/experimental/pdf-viewer";

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

<PdfViewer media={myMediaObject} initialSidebarOpen sidebarMode="outline" />`}}}},l={args:{src:"/loading.pdf"},parameters:{msw:{handlers:[re.get("/loading.pdf",async()=>{await me("infinite")})]}},render:e=>n.jsx("div",{style:{height:"600px"},children:n.jsx(i,{...e})})},h={args:{src:"/error.pdf"},parameters:{msw:{handlers:[re.get("/error.pdf",()=>new Response("Server Error",{status:500}))]}},render:e=>n.jsx("div",{style:{height:"600px"},children:n.jsx(i,{...e})})};function ge({src:e,onTextHighlight:t,onHighlightDelete:w}){return n.jsx("div",{style:{height:"600px"},children:n.jsx(i,{src:e,enableHighlight:!0,onTextHighlight:t,onHighlightDelete:w})})}const g={args:{onHighlightDelete:r(),onTextHighlight:r()},parameters:{docs:{source:{code:`import { useState, useCallback } from "react";
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
}`}}},render:e=>n.jsx(ge,{src:b,onTextHighlight:e.onTextHighlight,onHighlightDelete:e.onHighlightDelete})},f={args:{initialSidebarOpen:!0,media:he,sidebarMode:"outline"}},u={args:{onFormChange:r(),onFormSubmit:r(),src:"/osdk-ts/storybook/pr-3624/1742e3e2ac73b2cf8a17a677ef447f94e9f093b9/interactive-form-pdf.pdf"},parameters:{docs:{source:{code:`import { BasePdfViewer } from "@osdk/react-components/experimental/pdf-viewer";

<BasePdfViewer
  src="https://example.com/interactive-form.pdf"
  onFormChange={(fieldName, value) => console.log(fieldName, value)}
  onFormSubmit={(data) => console.log("Form submitted:", data)}
/>`}}},render:e=>n.jsx("div",{style:{height:"600px"},children:n.jsx(i,{...e})})};var P,v,k;o.parameters={...o.parameters,docs:{...(P=o.parameters)==null?void 0:P.docs,source:{originalSource:`{
  args: {
    src: SAMPLE_PDF_URL
  },
  parameters: {
    docs: {
      source: {
        code: \`import { BasePdfViewer } from "@osdk/react-components/experimental/pdf-viewer";

<BasePdfViewer src="/compressed.tracemonkey-pldi-09.pdf" />\`
      }
    }
  },
  render: (args: PdfViewerProps) => <div style={{
    height: "600px"
  }}>
      <BasePdfViewer {...args} />
    </div>
}`,...(k=(v=o.parameters)==null?void 0:v.docs)==null?void 0:k.source}}};var S,V,M;a.parameters={...a.parameters,docs:{...(S=a.parameters)==null?void 0:S.docs,source:{originalSource:`{
  args: {
    annotations: [{
      id: "h1",
      label: "Title highlight",
      page: 1,
      rect: {
        height: 24,
        width: 480,
        x: 55,
        y: 696
      },
      type: "highlight"
    }, {
      id: "u1",
      page: 1,
      rect: {
        height: 2,
        width: 440,
        x: 88,
        y: 614
      },
      type: "underline"
    }, {
      id: "c1",
      label: "Review this section",
      page: 1,
      rect: {
        height: 24,
        width: 24,
        x: 538,
        y: 400
      },
      type: "comment"
    }, {
      id: "p1",
      label: "Pin marker",
      page: 1,
      rect: {
        height: 16,
        width: 16,
        x: 44,
        y: 446
      },
      type: "pin"
    }],
    onAnnotationClick: fn()
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
  parameters: {
    msw: {
      handlers: [http.get("/loading.pdf", async () => {
        await delay("infinite");
      })]
    }
  },
  render: (args: PdfViewerProps) => <div style={{
    height: "600px"
  }}>
      <BasePdfViewer {...args} />
    </div>
}`,...(z=(N=l.parameters)==null?void 0:N.docs)==null?void 0:z.source}}};var $,K,X;h.parameters={...h.parameters,docs:{...($=h.parameters)==null?void 0:$.docs,source:{originalSource:`{
  args: {
    src: "/error.pdf"
  },
  parameters: {
    msw: {
      handlers: [http.get("/error.pdf", () => {
        return new Response("Server Error", {
          status: 500
        });
      })]
    }
  },
  render: (args: PdfViewerProps) => <div style={{
    height: "600px"
  }}>
      <BasePdfViewer {...args} />
    </div>
}`,...(X=(K=h.parameters)==null?void 0:K.docs)==null?void 0:X.source}}};var Y,q,G;g.parameters={...g.parameters,docs:{...(Y=g.parameters)==null?void 0:Y.docs,source:{originalSource:`{
  args: {
    onHighlightDelete: fn(),
    onTextHighlight: fn()
  },
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
  },
  render: args => <HighlightModeDemo src={SAMPLE_PDF_URL} onTextHighlight={args.onTextHighlight} onHighlightDelete={args.onHighlightDelete} />
}`,...(G=(q=g.parameters)==null?void 0:q.docs)==null?void 0:G.source}}};var J,Q,Z;f.parameters={...f.parameters,docs:{...(J=f.parameters)==null?void 0:J.docs,source:{originalSource:`{
  args: {
    initialSidebarOpen: true,
    media: mockBookmarkedMedia,
    sidebarMode: "outline"
  }
}`,...(Z=(Q=f.parameters)==null?void 0:Q.docs)==null?void 0:Z.source}}};var ee,ne,te;u.parameters={...u.parameters,docs:{...(ee=u.parameters)==null?void 0:ee.docs,source:{originalSource:`{
  args: {
    onFormChange: fn(),
    onFormSubmit: fn(),
    src: \`\${import.meta.env.BASE_URL}interactive-form-pdf.pdf\`
  },
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
  },
  render: (args: PdfViewerProps) => <div style={{
    height: "600px"
  }}>
      <BasePdfViewer {...args} />
    </div>
}`,...(te=(ne=u.parameters)==null?void 0:ne.docs)==null?void 0:te.source}}};const Je=["WithPdfUrl","WithAnnotations","WithSidebar","CustomScale","WithAutoSize","WithDownload","WithOutlineSidebar","Loading","Error","WithHighlightMode","WithEmbeddedOutline","InteractiveForm"];export{d as CustomScale,h as Error,u as InteractiveForm,l as Loading,a as WithAnnotations,c as WithAutoSize,m as WithDownload,f as WithEmbeddedOutline,g as WithHighlightMode,p as WithOutlineSidebar,o as WithPdfUrl,s as WithSidebar,Je as __namedExportsOrder,Ge as default};
