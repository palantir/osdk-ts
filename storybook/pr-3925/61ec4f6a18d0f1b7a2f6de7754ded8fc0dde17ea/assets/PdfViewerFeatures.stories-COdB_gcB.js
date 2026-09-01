import{i as me,h as le,j as n,r as x}from"./iframe-C3MdTHLQ.js";import{P as v}from"./pdf-viewer-Y-An9gcH.js";import{B as r}from"./BasePdfViewer-nDnH3zlH.js";import"./preload-helper-3M0V84kL.js";import"./PdfViewer-fY-oIv-6.js";import"./index-BgVlrX6R.js";import"./BasePdfViewer.module.css-DbNCORdZ.js";import"./PdfViewerAnnotationLayer-BLz6qaKO.js";import"./constants-DsXMS3N3.js";import"./usePdfDocument-DS0zskdb.js";import"./spin-DC042GIK.js";import"./svgIconContainer-CipT1sHW.js";import"./error-Kr8BQL-e.js";import"./withOsdkMetrics-C_vOiZra.js";import"./PdfViewerOutlineSidebar-CoHkFs7w.js";import"./PdfViewerSidebarHeader-DV2QTITJ.js";import"./useBaseUiId-BY9bLyd_.js";import"./useControlled-BVKJ7vS7.js";import"./CompositeRoot-BbWpjOq1.js";import"./CompositeItem-DM0NOOVO.js";import"./ToolbarRootContext-DIyGn2ca.js";import"./composite-BNzQ7X-x.js";import"./PdfViewerSearchBar-ZhwO2D4-.js";import"./chevron-up-DjCQxjNB.js";import"./chevron-down-kdwD8AzF.js";import"./cross-Bgd4sC_w.js";import"./PdfViewerSidebar-Bxjxt0w7.js";import"./index-CoAkWlDV.js";import"./index-CbVfK8fT.js";import"./index-BHAP5gqn.js";import"./PdfViewerToolbar-DO2HdC7p.js";import"./Button-cJHIlP8z.js";import"./chevron-right-Dphc1biU.js";import"./Input-Dv1jlKn1.js";import"./search-7cyOXxuf.js";const he=2147483647,k=100,ge=400,ue=5;function fe(){return me()?ue:Math.floor(Math.random()*(ge-k)+k)}async function be(e){let t;switch(e){case"infinite":{t=he;break}case"real":{t=fe();break}default:throw new Error(`Failed to delay a response: unknown delay mode "${e}". Please make sure you provide one of the supported modes ("real", "infinite") or a number.`)}return new Promise(i=>setTimeout(i,t))}const{fn:o}=__STORYBOOK_MODULE_TEST__,y="/osdk-ts/storybook/pr-3925/61ec4f6a18d0f1b7a2f6de7754ded8fc0dde17ea/compressed.tracemonkey-pldi-09.pdf",we="/osdk-ts/storybook/pr-3925/61ec4f6a18d0f1b7a2f6de7754ded8fc0dde17ea/nested_outline.pdf";function pe(e,t){return{fetchContents:()=>fetch(e),fetchMetadata:()=>Promise.resolve({path:t,sizeBytes:1024e3,mediaType:"application/pdf"}),getMediaReference:()=>({mimeType:"application/pdf",reference:{type:"mediaSetViewItem",mediaSetViewItem:{mediaItemRid:"ri.mio.main.media-item.mock-pdf",mediaSetRid:"ri.mio.main.media-set.mock-set",mediaSetViewRid:"ri.mio.main.media-set-view.mock-view"}}})}}const ye=pe(y,"compressed.tracemonkey-pldi-09.pdf"),Pe=pe(we,"pdf-example-bookmarks.pdf"),on={title:"Components/DocumentViewer/Renderers/PdfViewer/Features",component:v,tags:["beta"],args:{media:ye},render:e=>n.jsx("div",{style:{height:"600px"},children:n.jsx(v,{...e})}),parameters:{controls:{expanded:!0}},argTypes:{media:{description:"The Media object to fetch PDF contents from",control:!1},annotations:{description:"Annotations to overlay on the PDF",control:"object"},onAnnotationClick:{description:"Callback fired when an annotation is clicked",control:!1,table:{category:"Events"}},initialPage:{description:"Page to display on first render (1-indexed)",control:"number",table:{defaultValue:{summary:"1"}}},initialScale:{description:"Initial zoom scale",control:"number",table:{defaultValue:{summary:"1.0"}}},initialSidebarOpen:{description:"Whether the thumbnail sidebar is initially open",control:"boolean",table:{defaultValue:{summary:"false"}}},enableDownload:{description:"Whether the download button is shown in the toolbar",control:"boolean",table:{defaultValue:{summary:"false"}}},sidebarMode:{description:"Which sidebar panel to show when the sidebar is open",control:"radio",options:["thumbnails","outline"],table:{defaultValue:{summary:'"thumbnails"'}}},outlineIcons:{description:"Custom icon components for each outline depth level (0-indexed)",control:!1},className:{description:"Additional CSS class name for the root element",control:"text"}}},a={args:{src:y},render:e=>n.jsx("div",{style:{height:"600px"},children:n.jsx(r,{...e})}),parameters:{docs:{source:{code:'<BasePdfViewer src="/compressed.tracemonkey-pldi-09.pdf" />'}}}};function Se({url:e}){const[t,i]=x.useState(void 0);return x.useEffect(()=>{let S=!1;return fetch(e).then(P=>P.blob()).then(P=>{S||i(P)}),()=>{S=!0}},[e]),n.jsx("div",{style:{height:"600px"},children:t==null?"Fetching PDF into a Blob…":n.jsx(r,{src:t})})}const s={render:()=>n.jsx(Se,{url:y}),parameters:{docs:{source:{code:`// src also accepts in-memory bytes: Blob, ArrayBuffer, or Uint8Array
const blob = await (await fetch("/compressed.tracemonkey-pldi-09.pdf")).blob();

<BasePdfViewer src={blob} />`}}}},d={args:{onAnnotationClick:o(),annotations:[{id:"h1",type:"highlight",page:1,rect:{x:55,y:696,width:480,height:24},label:"Title highlight"},{id:"u1",type:"underline",page:1,rect:{x:88,y:614,width:440,height:2}},{id:"c1",type:"comment",page:1,rect:{x:538,y:400,width:24,height:24},label:"Review this section"},{id:"p1",type:"pin",page:1,rect:{x:44,y:446,width:16,height:16},label:"Pin marker"}]},parameters:{docs:{source:{code:`<PdfViewer
  media={myMediaObject}
  annotations={[
    { id: "h1", type: "highlight", page: 1, rect: { x: 55, y: 696, width: 480, height: 24 }, label: "Title highlight" },
    { id: "u1", type: "underline", page: 1, rect: { x: 88, y: 614, width: 440, height: 2 } },
    { id: "c1", type: "comment", page: 1, rect: { x: 538, y: 400, width: 24, height: 24 }, label: "Review this" },
    { id: "p1", type: "pin", page: 1, rect: { x: 44, y: 446, width: 16, height: 16 }, label: "Pin" },
  ]}
  onAnnotationClick={(annotation) => handleAnnotationClick(annotation)}
/>`}}}},c={args:{initialSidebarOpen:!0},parameters:{docs:{source:{code:"<PdfViewer media={myMediaObject} initialSidebarOpen />"}}}},l={args:{initialScale:1.5},parameters:{docs:{source:{code:"<PdfViewer media={myMediaObject} initialScale={1.5} />"}}}},p={args:{initialAutoSize:!0},parameters:{docs:{source:{code:"<PdfViewer media={myMediaObject} initialAutoSize />"}}}},m={args:{enableDownload:!0},parameters:{docs:{source:{code:"<PdfViewer media={myMediaObject} enableDownload />"}}}},h={args:{initialSidebarOpen:!0,sidebarMode:"outline"},parameters:{docs:{source:{code:'<PdfViewer media={myMediaObject} initialSidebarOpen sidebarMode="outline" />'}}}},g={args:{src:"/loading.pdf"},render:e=>n.jsx("div",{style:{height:"600px"},children:n.jsx(r,{...e})}),parameters:{msw:{handlers:[le.get("/loading.pdf",async()=>{await be("infinite")})]},docs:{source:{code:`// The loading spinner is built in — no isLoading prop to thread through
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
/>`}}}},w={args:{src:"/osdk-ts/storybook/pr-3925/61ec4f6a18d0f1b7a2f6de7754ded8fc0dde17ea/interactive-form-pdf.pdf",onFormSubmit:o(),onFormChange:o()},render:e=>n.jsx("div",{style:{height:"600px"},children:n.jsx(r,{...e})}),parameters:{docs:{source:{code:`<BasePdfViewer
  src="https://example.com/interactive-form.pdf"
  onFormChange={(fieldName, value) => console.log(fieldName, value)}
  onFormSubmit={(data) => console.log("Form submitted:", data)}
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
}`,...(A=(M=a.parameters)==null?void 0:M.docs)==null?void 0:A.source}}};var T,E,O;s.parameters={...s.parameters,docs:{...(T=s.parameters)==null?void 0:T.docs,source:{originalSource:`{
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
}`,...(O=(E=s.parameters)==null?void 0:E.docs)==null?void 0:O.source}}};var B,D,_;d.parameters={...d.parameters,docs:{...(B=d.parameters)==null?void 0:B.docs,source:{originalSource:`{
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
  onAnnotationClick={(annotation) => handleAnnotationClick(annotation)}
/>\`
      }
    }
  }
}`,...(_=(D=d.parameters)==null?void 0:D.docs)==null?void 0:_.source}}};var j,H,R;c.parameters={...c.parameters,docs:{...(j=c.parameters)==null?void 0:j.docs,source:{originalSource:`{
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
}`,...(R=(H=c.parameters)==null?void 0:H.docs)==null?void 0:R.source}}};var C,F,W;l.parameters={...l.parameters,docs:{...(C=l.parameters)==null?void 0:C.docs,source:{originalSource:`{
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
}`,...(W=(F=l.parameters)==null?void 0:F.docs)==null?void 0:W.source}}};var L,U,I;p.parameters={...p.parameters,docs:{...(L=p.parameters)==null?void 0:L.docs,source:{originalSource:`{
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
}`,...(I=(U=p.parameters)==null?void 0:U.docs)==null?void 0:I.source}}};var N,z,$;m.parameters={...m.parameters,docs:{...(N=m.parameters)==null?void 0:N.docs,source:{originalSource:`{
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
}`,...($=(z=m.parameters)==null?void 0:z.docs)==null?void 0:$.source}}};var K,X,Y;h.parameters={...h.parameters,docs:{...(K=h.parameters)==null?void 0:K.docs,source:{originalSource:`{
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
        code: \`<BasePdfViewer
  src="https://example.com/interactive-form.pdf"
  onFormChange={(fieldName, value) => console.log(fieldName, value)}
  onFormSubmit={(data) => console.log("Form submitted:", data)}
/>\`
      }
    }
  }
}`,...(ce=(de=w.parameters)==null?void 0:de.docs)==null?void 0:ce.source}}};const an=["WithPdfUrl","WithBlob","WithAnnotations","WithSidebar","CustomScale","WithAutoSize","WithDownload","WithOutlineSidebar","Loading","Error","WithHighlightMode","WithEmbeddedOutline","InteractiveForm"];export{l as CustomScale,u as Error,w as InteractiveForm,g as Loading,d as WithAnnotations,p as WithAutoSize,s as WithBlob,m as WithDownload,b as WithEmbeddedOutline,f as WithHighlightMode,h as WithOutlineSidebar,a as WithPdfUrl,c as WithSidebar,an as __namedExportsOrder,on as default};
