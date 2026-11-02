import{j as n}from"./iframe-DFabC9bf.js";import{B as e}from"./BasePdfViewer-o8cm4-Yc.js";import"./preload-helper-BLxMvu58.js";import"./index-DgsFchdG.js";import"./BasePdfViewer.module.css-vMBcZ2X-.js";import"./PdfViewerAnnotationLayer-BABXmYJ5.js";import"./constants-DsXMS3N3.js";import"./usePdfDocument-v4Scndzb.js";import"./PdfViewerOutlineSidebar-r5mDD9Gc.js";import"./PdfViewerSidebarHeader-CIQfKh8r.js";import"./useBaseUiId-Dxr7oR41.js";import"./useControlled-B3kUZkdE.js";import"./CompositeRoot-DLXUO876.js";import"./CompositeItem-DUW332tM.js";import"./ToolbarRootContext-2AVlTjyA.js";import"./composite-BoRXQVH0.js";import"./svgIconContainer-CsYtoZH2.js";import"./PdfViewerSearchBar-Bx0YtvpT.js";import"./chevron-up-BKY2z0jN.js";import"./chevron-down-jy1hrUFA.js";import"./cross-ey58JM4H.js";import"./PdfViewerSidebar-CCHHeVeM.js";import"./index-aUHzwEmK.js";import"./index-BHWOd5Tr.js";import"./index-Gxd2oAE6.js";import"./PdfViewerToolbar-BfATDDVQ.js";import"./Button-DIvAKpTN.js";import"./chevron-right-BIquXlGI.js";import"./Input-BZyaCDxG.js";import"./search-B_WKOos_.js";import"./spin-PYC3xY90.js";import"./error-f3c_sZgu.js";const{fn:p}=__STORYBOOK_MODULE_TEST__,s="/osdk-ts/storybook/pr-4314/bae6154fef41e9502b236a70e8254b2f149885d2/compressed.tracemonkey-pldi-09.pdf";function l({annotation:t}){return n.jsx("div",{style:{width:"100%",height:"100%",display:"flex",alignItems:"center",justifyContent:"center",background:"rgba(59, 130, 246, 0.9)",borderRadius:"6px",color:"#fff",fontSize:"12px",fontWeight:600,padding:"4px 8px",whiteSpace:"nowrap",boxShadow:"0 2px 8px rgba(0,0,0,0.15)"},children:t.label??"Note"})}function i({annotation:t}){return n.jsx("div",{style:{width:"100%",height:"100%",display:"flex",alignItems:"center",justifyContent:"center",background:"#ef4444",borderRadius:"50%",color:"#fff",fontSize:"11px",fontWeight:700},children:t.label??"1"})}const c=[{id:"tooltip-1",type:"custom",page:1,rect:{x:55,y:400,width:120,height:28},label:"Key finding",render:t=>n.jsx(l,{...t})},{id:"badge-1",type:"custom",page:1,rect:{x:540,y:692,width:24,height:24},label:"1",render:t=>n.jsx(i,{...t})},{id:"badge-2",type:"custom",page:1,rect:{x:540,y:418,width:24,height:24},label:"2",render:t=>n.jsx(i,{...t})},{id:"highlight-1",type:"highlight",page:1,rect:{x:80,y:700,width:450,height:14},label:"Author line highlight"}],F={title:"Components/DocumentViewer/Renderers/PdfViewer/Recipes",component:e,tags:["beta"],args:{src:s,annotations:c,onAnnotationClick:p()},render:t=>n.jsx("div",{style:{height:"600px"},children:n.jsx(e,{...t})}),argTypes:{src:{control:!1},annotations:{control:"object"},onAnnotationClick:{control:!1,table:{category:"Events"}}}},o={parameters:{docs:{source:{code:`function TooltipAnnotation({ annotation }: PdfAnnotationRenderProps) {
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
