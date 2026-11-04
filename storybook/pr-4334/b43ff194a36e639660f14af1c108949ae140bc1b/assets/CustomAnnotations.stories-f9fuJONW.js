import{j as n}from"./iframe-hYuZ0Daw.js";import{B as e}from"./BasePdfViewer-DXwQ6PrV.js";import"./preload-helper-57_0CTpI.js";import"./index-C5Pc6OCn.js";import"./BasePdfViewer.module.css-BmTr7wh5.js";import"./PdfViewerAnnotationLayer-DMCqsu7d.js";import"./constants-DsXMS3N3.js";import"./usePdfDocument-DUazPSgZ.js";import"./PdfViewerOutlineSidebar-Cnhnql2G.js";import"./PdfViewerSidebarHeader-7-wrOS7b.js";import"./useBaseUiId-C66Z_YyS.js";import"./useControlled-DfUelnOD.js";import"./CompositeRoot-vPGXhzPi.js";import"./CompositeItem-DDypA9GI.js";import"./ToolbarRootContext-BfU0Mx90.js";import"./composite-fETYQEVT.js";import"./svgIconContainer-D3B1FGG8.js";import"./PdfViewerSearchBar-DppHHkFd.js";import"./chevron-up-BsNTvuy5.js";import"./chevron-down-BZn2JFfs.js";import"./cross-h0YrhL7d.js";import"./PdfViewerSidebar-5LtD98kA.js";import"./index-DmRE2MXK.js";import"./index-DCXcCpux.js";import"./index-BzM9XWI0.js";import"./PdfViewerToolbar-BhNXvf5Q.js";import"./Button-BT_Xkrjb.js";import"./chevron-right-B05aYShb.js";import"./Input-BtSxbTtJ.js";import"./search-De2ktKMh.js";import"./spin-YZQfkOds.js";import"./error-C958vJ-j.js";const{fn:p}=__STORYBOOK_MODULE_TEST__,s="/osdk-ts/storybook/pr-4334/b43ff194a36e639660f14af1c108949ae140bc1b/compressed.tracemonkey-pldi-09.pdf";function l({annotation:t}){return n.jsx("div",{style:{width:"100%",height:"100%",display:"flex",alignItems:"center",justifyContent:"center",background:"rgba(59, 130, 246, 0.9)",borderRadius:"6px",color:"#fff",fontSize:"12px",fontWeight:600,padding:"4px 8px",whiteSpace:"nowrap",boxShadow:"0 2px 8px rgba(0,0,0,0.15)"},children:t.label??"Note"})}function i({annotation:t}){return n.jsx("div",{style:{width:"100%",height:"100%",display:"flex",alignItems:"center",justifyContent:"center",background:"#ef4444",borderRadius:"50%",color:"#fff",fontSize:"11px",fontWeight:700},children:t.label??"1"})}const c=[{id:"tooltip-1",type:"custom",page:1,rect:{x:55,y:400,width:120,height:28},label:"Key finding",render:t=>n.jsx(l,{...t})},{id:"badge-1",type:"custom",page:1,rect:{x:540,y:692,width:24,height:24},label:"1",render:t=>n.jsx(i,{...t})},{id:"badge-2",type:"custom",page:1,rect:{x:540,y:418,width:24,height:24},label:"2",render:t=>n.jsx(i,{...t})},{id:"highlight-1",type:"highlight",page:1,rect:{x:80,y:700,width:450,height:14},label:"Author line highlight"}],F={title:"Components/DocumentViewer/Renderers/PdfViewer/Recipes",component:e,tags:["beta"],args:{src:s,annotations:c,onAnnotationClick:p()},render:t=>n.jsx("div",{style:{height:"600px"},children:n.jsx(e,{...t})}),argTypes:{src:{control:!1},annotations:{control:"object"},onAnnotationClick:{control:!1,table:{category:"Events"}}}},o={parameters:{docs:{source:{code:`function TooltipAnnotation({ annotation }: PdfAnnotationRenderProps) {
  return (
    <div style={{ background: "rgba(59, 130, 246, 0.9)", borderRadius: 6, color: "#fff", padding: "4px 8px" }}>
      {annotation.label ?? "Note"}
    </div>
  );
}

const handleAnnotationClick = useCallback((annotation: PdfAnnotation) => {
  console.log("Clicked:", annotation.id);
}, []);

<BasePdfViewer
  src={pdfUrl}
  annotations={[
    {
      id: "tooltip-1",
      type: "custom",
      page: 1,
      rect: { x: 55, y: 400, width: 120, height: 28 },
      label: "Key finding",
      render: TooltipAnnotation,
    },
  ]}
  onAnnotationClick={handleAnnotationClick}
/>`}}}};var r,a,d;o.parameters={...o.parameters,docs:{...(r=o.parameters)==null?void 0:r.docs,source:{originalSource:`{
  parameters: {
    docs: {
      source: {
        code: \`function TooltipAnnotation({ annotation }: PdfAnnotationRenderProps) {
  return (
    <div style={{ background: "rgba(59, 130, 246, 0.9)", borderRadius: 6, color: "#fff", padding: "4px 8px" }}>
      {annotation.label ?? "Note"}
    </div>
  );
}

const handleAnnotationClick = useCallback((annotation: PdfAnnotation) => {
  console.log("Clicked:", annotation.id);
}, []);

<BasePdfViewer
  src={pdfUrl}
  annotations={[
    {
      id: "tooltip-1",
      type: "custom",
      page: 1,
      rect: { x: 55, y: 400, width: 120, height: 28 },
      label: "Key finding",
      render: TooltipAnnotation,
    },
  ]}
  onAnnotationClick={handleAnnotationClick}
/>\`
      }
    }
  }
}`,...(d=(a=o.parameters)==null?void 0:a.docs)==null?void 0:d.source}}};const Y=["CustomAnnotation"];export{o as CustomAnnotation,Y as __namedExportsOrder,F as default};
