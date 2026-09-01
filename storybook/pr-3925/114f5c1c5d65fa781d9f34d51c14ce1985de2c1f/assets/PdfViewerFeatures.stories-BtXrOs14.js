import{i as pe,h as le,j as n,r as x}from"./iframe-CuEjl7Uz.js";import{P as v}from"./pdf-viewer-D-b3bLWF.js";import{B as r}from"./BasePdfViewer-BwZGAPh1.js";import"./preload-helper-Bnv-TItm.js";import"./PdfViewer-D_XMw71Y.js";import"./index-BYfl2w_f.js";import"./BasePdfViewer.module.css-2FIs03Vx.js";import"./PdfViewerAnnotationLayer-Bu7rWEl4.js";import"./constants-DsXMS3N3.js";import"./usePdfDocument-CXsnQS6c.js";import"./spin-Be3PhZ9-.js";import"./svgIconContainer-Dd92hyPw.js";import"./error-NZ5oWKud.js";import"./withOsdkMetrics-B8uWkY4g.js";import"./PdfViewerOutlineSidebar-BqkLiPAW.js";import"./PdfViewerSidebarHeader-Clp5233L.js";import"./useBaseUiId-CvRriR4c.js";import"./useControlled-DBpnwX6L.js";import"./CompositeRoot-C6d8kw3h.js";import"./CompositeItem-BhUbIVeo.js";import"./ToolbarRootContext-BwI8s8FH.js";import"./composite-kFUoCHQq.js";import"./PdfViewerSearchBar-D6Knj1oe.js";import"./chevron-up-BZnvYc8R.js";import"./chevron-down-CP7RGjpz.js";import"./cross-CXL6d4Nc.js";import"./PdfViewerSidebar-BYwy59aB.js";import"./index-DxunnI8U.js";import"./index-Bx0fAKss.js";import"./index-CS1Bngb_.js";import"./PdfViewerToolbar-SCHtgtdX.js";import"./Button-DPfa27EA.js";import"./chevron-right-P69oW7o7.js";import"./Input-ZdxPnrAH.js";import"./search-3wsQQ4iP.js";const he=2147483647,k=100,ge=400,ue=5;function fe(){return pe()?ue:Math.floor(Math.random()*(ge-k)+k)}async function be(e){let t;switch(e){case"infinite":{t=he;break}case"real":{t=fe();break}default:throw new Error(`Failed to delay a response: unknown delay mode "${e}". Please make sure you provide one of the supported modes ("real", "infinite") or a number.`)}return new Promise(i=>setTimeout(i,t))}const{fn:o}=__STORYBOOK_MODULE_TEST__,y="/osdk-ts/storybook/pr-3925/114f5c1c5d65fa781d9f34d51c14ce1985de2c1f/compressed.tracemonkey-pldi-09.pdf",we="/osdk-ts/storybook/pr-3925/114f5c1c5d65fa781d9f34d51c14ce1985de2c1f/nested_outline.pdf";function me(e,t){return{fetchContents:()=>fetch(e),fetchMetadata:()=>Promise.resolve({path:t,sizeBytes:1024e3,mediaType:"application/pdf"}),getMediaReference:()=>({mimeType:"application/pdf",reference:{type:"mediaSetViewItem",mediaSetViewItem:{mediaItemRid:"ri.mio.main.media-item.mock-pdf",mediaSetRid:"ri.mio.main.media-set.mock-set",mediaSetViewRid:"ri.mio.main.media-set-view.mock-view"}}})}}const ye=me(y,"compressed.tracemonkey-pldi-09.pdf"),Pe=me(we,"pdf-example-bookmarks.pdf"),on={title:"Components/DocumentViewer/Renderers/PdfViewer/Features",component:v,tags:["beta"],args:{media:ye},render:e=>n.jsx("div",{style:{height:"600px"},children:n.jsx(v,{...e})}),parameters:{controls:{expanded:!0}},argTypes:{media:{description:"The Media object to fetch PDF contents from",control:!1},annotations:{description:"Annotations to overlay on the PDF",control:"object"},onAnnotationClick:{description:"Callback fired when an annotation is clicked",control:!1,table:{category:"Events"}},initialPage:{description:"Page to display on first render (1-indexed)",control:"number",table:{defaultValue:{summary:"1"}}},initialScale:{description:"Initial zoom scale",control:"number",table:{defaultValue:{summary:"1.0"}}},initialSidebarOpen:{description:"Whether the thumbnail sidebar is initially open",control:"boolean",table:{defaultValue:{summary:"false"}}},enableDownload:{description:"Whether the download button is shown in the toolbar",control:"boolean",table:{defaultValue:{summary:"false"}}},sidebarMode:{description:"Which sidebar panel to show when the sidebar is open",control:"radio",options:["thumbnails","outline"],table:{defaultValue:{summary:'"thumbnails"'}}},outlineIcons:{description:"Custom icon components for each outline depth level (0-indexed)",control:!1},className:{description:"Additional CSS class name for the root element",control:"text"}}},a={args:{src:y},render:e=>n.jsx("div",{style:{height:"600px"},children:n.jsx(r,{...e})}),parameters:{docs:{source:{code:'<BasePdfViewer src="/compressed.tracemonkey-pldi-09.pdf" />'}}}};function Se({url:e}){const[t,i]=x.useState(void 0);return x.useEffect(()=>{let S=!1;return fetch(e).then(P=>P.blob()).then(P=>{S||i(P)}),()=>{S=!0}},[e]),n.jsx("div",{style:{height:"600px"},children:t==null?"Fetching PDF into a Blob…":n.jsx(r,{src:t})})}const s={render:()=>n.jsx(Se,{url:y}),parameters:{docs:{source:{code:`// src also accepts in-memory bytes: Blob, ArrayBuffer, or Uint8Array
const blob = await (await fetch("/compressed.tracemonkey-pldi-09.pdf")).blob();

<BasePdfViewer src={blob} />`}}}},d={args:{onAnnotationClick:o(),annotations:[{id:"h1",type:"highlight",page:1,rect:{x:55,y:696,width:480,height:24},label:"Title highlight"},{id:"u1",type:"underline",page:1,rect:{x:88,y:614,width:440,height:2}},{id:"c1",type:"comment",page:1,rect:{x:538,y:400,width:24,height:24},label:"Review this section"},{id:"p1",type:"pin",page:1,rect:{x:44,y:446,width:16,height:16},label:"Pin marker"}]},parameters:{docs:{source:{code:`<PdfViewer
  media={myMediaObject}
  annotations={[
    { id: "h1", type: "highlight", page: 1, rect: { x: 55, y: 696, width: 480, height: 24 }, label: "Title highlight" },
    { id: "u1", type: "underline", page: 1, rect: { x: 88, y: 614, width: 440, height: 2 } },
    { id: "c1", type: "comment", page: 1, rect: { x: 538, y: 400, width: 24, height: 24 }, label: "Review this" },
    { id: "p1", type: "pin", page: 1, rect: { x: 44, y: 446, width: 16, height: 16 }, label: "Pin" },
  ]}
  onAnnotationClick={handleAnnotationClick}
/>`}}}},c={args:{initialSidebarOpen:!0},parameters:{docs:{source:{code:"<PdfViewer media={myMediaObject} initialSidebarOpen />"}}}},l={args:{initialScale:1.5},parameters:{docs:{source:{code:"<PdfViewer media={myMediaObject} initialScale={1.5} />"}}}},m={args:{initialAutoSize:!0},parameters:{docs:{source:{code:"<PdfViewer media={myMediaObject} initialAutoSize />"}}}},p={args:{enableDownload:!0},parameters:{docs:{source:{code:"<PdfViewer media={myMediaObject} enableDownload />"}}}},h={args:{initialSidebarOpen:!0,sidebarMode:"outline"},parameters:{docs:{source:{code:'<PdfViewer media={myMediaObject} initialSidebarOpen sidebarMode="outline" />'}}}},g={args:{src:"/loading.pdf"},render:e=>n.jsx("div",{style:{height:"600px"},children:n.jsx(r,{...e})}),parameters:{msw:{handlers:[le.get("/loading.pdf",async()=>{await be("infinite")})]},docs:{source:{code:`// The loading spinner is built in — no isLoading prop to thread through
<BasePdfViewer src="/slow-to-download.pdf" />`}}}},u={args:{src:"/error.pdf"},render:e=>n.jsx("div",{style:{height:"600px"},children:n.jsx(r,{...e})}),parameters:{msw:{handlers:[le.get("/error.pdf",()=>new Response("Server Error",{status:500}))]},docs:{source:{code:`// A failed fetch or an unparseable document renders the built-in error state
<BasePdfViewer src="/does-not-load.pdf" />`}}}};function xe({src:e,onTextHighlight:t,onHighlightDelete:i}){return n.jsx("div",{style:{height:"600px"},children:n.jsx(r,{src:e,enableHighlight:!0,onTextHighlight:t,onHighlightDelete:i})})}const f={args:{onTextHighlight:o(),onHighlightDelete:o()},render:e=>n.jsx(xe,{src:y,onTextHighlight:e.onTextHighlight,onHighlightDelete:e.onHighlightDelete}),parameters:{docs:{source:{code:`function MyPdfViewer({ src }: { src: string }) {
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
}`}}}},b={args:{media:Pe,initialSidebarOpen:!0,sidebarMode:"outline"},parameters:{docs:{source:{code:`// The outline is read from the PDF's own bookmarks — nothing to pass in
<PdfViewer
  media={handbook.pdf}
  initialSidebarOpen
  sidebarMode="outline"
/>`}}}},w={args:{src:"/osdk-ts/storybook/pr-3925/114f5c1c5d65fa781d9f34d51c14ce1985de2c1f/interactive-form-pdf.pdf",onFormSubmit:o(),onFormChange:o()},render:e=>n.jsx("div",{style:{height:"600px"},children:n.jsx(r,{...e})}),parameters:{docs:{source:{code:`const handleFormChange = useCallback(
  (fieldName: string, value: PdfFormFieldValue) => {
    console.log(fieldName, value);
  },
  [],
);

const handleFormSubmit = useCallback(
  (data: Record<string, PdfFormFieldValue>) => {
    console.log("Form submitted:", data);
  },
  [],
);

<BasePdfViewer
  src="https://example.com/interactive-form.pdf"
  onFormChange={handleFormChange}
  onFormSubmit={handleFormSubmit}
/>`}}}};var V,M,A;a.parameters={...a.parameters,docs:{...(V=a.parameters)==null?void 0:V.docs,source:{originalSource:`{
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
        code: \`<BasePdfViewer src="/compressed.tracemonkey-pldi-09.pdf" />\`
      }
    }
  }
}`,...(A=(M=a.parameters)==null?void 0:M.docs)==null?void 0:A.source}}};var T,E,F;s.parameters={...s.parameters,docs:{...(T=s.parameters)==null?void 0:T.docs,source:{originalSource:`{
  render: () => <BlobViewerDemo url={SAMPLE_PDF_URL} />,
  parameters: {
    docs: {
      source: {
        code: \`// src also accepts in-memory bytes: Blob, ArrayBuffer, or Uint8Array
const blob = await (await fetch("/compressed.tracemonkey-pldi-09.pdf")).blob();

<BasePdfViewer src={blob} />\`
      }
    }
  }
}`,...(F=(E=s.parameters)==null?void 0:E.docs)==null?void 0:F.source}}};var O,B,C;d.parameters={...d.parameters,docs:{...(O=d.parameters)==null?void 0:O.docs,source:{originalSource:`{
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
        code: \`<PdfViewer
  media={myMediaObject}
  annotations={[
    { id: "h1", type: "highlight", page: 1, rect: { x: 55, y: 696, width: 480, height: 24 }, label: "Title highlight" },
    { id: "u1", type: "underline", page: 1, rect: { x: 88, y: 614, width: 440, height: 2 } },
    { id: "c1", type: "comment", page: 1, rect: { x: 538, y: 400, width: 24, height: 24 }, label: "Review this" },
    { id: "p1", type: "pin", page: 1, rect: { x: 44, y: 446, width: 16, height: 16 }, label: "Pin" },
  ]}
  onAnnotationClick={handleAnnotationClick}
/>\`
      }
    }
  }
}`,...(C=(B=d.parameters)==null?void 0:B.docs)==null?void 0:C.source}}};var D,R,_;c.parameters={...c.parameters,docs:{...(D=c.parameters)==null?void 0:D.docs,source:{originalSource:`{
  args: {
    initialSidebarOpen: true
  },
  parameters: {
    docs: {
      source: {
        code: \`<PdfViewer media={myMediaObject} initialSidebarOpen />\`
      }
    }
  }
}`,...(_=(R=c.parameters)==null?void 0:R.docs)==null?void 0:_.source}}};var j,H,W;l.parameters={...l.parameters,docs:{...(j=l.parameters)==null?void 0:j.docs,source:{originalSource:`{
  args: {
    initialScale: 1.5
  },
  parameters: {
    docs: {
      source: {
        code: \`<PdfViewer media={myMediaObject} initialScale={1.5} />\`
      }
    }
  }
}`,...(W=(H=l.parameters)==null?void 0:H.docs)==null?void 0:W.source}}};var L,U,I;m.parameters={...m.parameters,docs:{...(L=m.parameters)==null?void 0:L.docs,source:{originalSource:`{
  args: {
    initialAutoSize: true
  },
  parameters: {
    docs: {
      source: {
        code: \`<PdfViewer media={myMediaObject} initialAutoSize />\`
      }
    }
  }
}`,...(I=(U=m.parameters)==null?void 0:U.docs)==null?void 0:I.source}}};var N,z,$;p.parameters={...p.parameters,docs:{...(N=p.parameters)==null?void 0:N.docs,source:{originalSource:`{
  args: {
    enableDownload: true
  },
  parameters: {
    docs: {
      source: {
        code: \`<PdfViewer media={myMediaObject} enableDownload />\`
      }
    }
  }
}`,...($=(z=p.parameters)==null?void 0:z.docs)==null?void 0:$.source}}};var K,X,Y;h.parameters={...h.parameters,docs:{...(K=h.parameters)==null?void 0:K.docs,source:{originalSource:`{
  args: {
    initialSidebarOpen: true,
    sidebarMode: "outline"
  },
  parameters: {
    docs: {
      source: {
        code: \`<PdfViewer media={myMediaObject} initialSidebarOpen sidebarMode="outline" />\`
      }
    }
  }
}`,...(Y=(X=h.parameters)==null?void 0:X.docs)==null?void 0:Y.source}}};var q,G,J;g.parameters={...g.parameters,docs:{...(q=g.parameters)==null?void 0:q.docs,source:{originalSource:`{
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
    },
    docs: {
      source: {
        code: \`// The loading spinner is built in — no isLoading prop to thread through
<BasePdfViewer src="/slow-to-download.pdf" />\`
      }
    }
  }
}`,...(J=(G=g.parameters)==null?void 0:G.docs)==null?void 0:J.source}}};var Q,Z,ee;u.parameters={...u.parameters,docs:{...(Q=u.parameters)==null?void 0:Q.docs,source:{originalSource:`{
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
    },
    docs: {
      source: {
        code: \`// A failed fetch or an unparseable document renders the built-in error state
<BasePdfViewer src="/does-not-load.pdf" />\`
      }
    }
  }
}`,...(ee=(Z=u.parameters)==null?void 0:Z.docs)==null?void 0:ee.source}}};var ne,te,re;f.parameters={...f.parameters,docs:{...(ne=f.parameters)==null?void 0:ne.docs,source:{originalSource:`{
  args: {
    onTextHighlight: fn(),
    onHighlightDelete: fn()
  },
  render: args => <HighlightModeDemo src={SAMPLE_PDF_URL} onTextHighlight={args.onTextHighlight} onHighlightDelete={args.onHighlightDelete} />,
  parameters: {
    docs: {
      source: {
        code: \`function MyPdfViewer({ src }: { src: string }) {
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
}`,...(re=(te=f.parameters)==null?void 0:te.docs)==null?void 0:re.source}}};var ie,oe,ae;b.parameters={...b.parameters,docs:{...(ie=b.parameters)==null?void 0:ie.docs,source:{originalSource:`{
  args: {
    media: mockBookmarkedMedia,
    initialSidebarOpen: true,
    sidebarMode: "outline"
  },
  parameters: {
    docs: {
      source: {
        code: \`// The outline is read from the PDF's own bookmarks — nothing to pass in
<PdfViewer
  media={handbook.pdf}
  initialSidebarOpen
  sidebarMode="outline"
/>\`
      }
    }
  }
}`,...(ae=(oe=b.parameters)==null?void 0:oe.docs)==null?void 0:ae.source}}};var se,de,ce;w.parameters={...w.parameters,docs:{...(se=w.parameters)==null?void 0:se.docs,source:{originalSource:`{
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
        code: \`const handleFormChange = useCallback(
  (fieldName: string, value: PdfFormFieldValue) => {
    console.log(fieldName, value);
  },
  [],
);

const handleFormSubmit = useCallback(
  (data: Record<string, PdfFormFieldValue>) => {
    console.log("Form submitted:", data);
  },
  [],
);

<BasePdfViewer
  src="https://example.com/interactive-form.pdf"
  onFormChange={handleFormChange}
  onFormSubmit={handleFormSubmit}
/>\`
      }
    }
  }
}`,...(ce=(de=w.parameters)==null?void 0:de.docs)==null?void 0:ce.source}}};const an=["WithPdfUrl","WithBlob","WithAnnotations","WithSidebar","CustomScale","WithAutoSize","WithDownload","WithOutlineSidebar","Loading","Error","WithHighlightMode","WithEmbeddedOutline","InteractiveForm"];export{l as CustomScale,u as Error,w as InteractiveForm,g as Loading,d as WithAnnotations,m as WithAutoSize,s as WithBlob,p as WithDownload,b as WithEmbeddedOutline,f as WithHighlightMode,h as WithOutlineSidebar,a as WithPdfUrl,c as WithSidebar,an as __namedExportsOrder,on as default};
