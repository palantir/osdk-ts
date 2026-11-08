import{j as n}from"./iframe-xO7-cFQE.js";import{B as e}from"./BasePdfViewer-Dpdj344x.js";import"./preload-helper-CjE4C0sP.js";import"./index-BOQrkF-F.js";import"./BasePdfViewer.module.css-CvOnhd6a.js";import"./PdfViewerAnnotationLayer-CUq1iwN4.js";import"./constants-DsXMS3N3.js";import"./usePdfDocument-D8JNp2Gv.js";import"./PdfViewerOutlineSidebar-Btt2owgT.js";import"./PdfViewerSidebarHeader-HYyEJAyz.js";import"./useBaseUiId-DvKVHufz.js";import"./useControlled-Wgq9Q75K.js";import"./CompositeRoot-Bp7eweTA.js";import"./CompositeItem-BPvfL8qH.js";import"./ToolbarRootContext-D7XQqVeD.js";import"./composite-CWWmbaS7.js";import"./svgIconContainer-Bxzx9KVi.js";import"./PdfViewerSearchBar-OIMy1BoG.js";import"./chevron-up-CFt9WkeK.js";import"./chevron-down-hptZ4LWp.js";import"./cross-D5U-IDeN.js";import"./PdfViewerSidebar-Co9KqGp5.js";import"./index-DDxyKWUj.js";import"./index-BJwULR6g.js";import"./index-CXPZCOfE.js";import"./PdfViewerToolbar-L6HCVejU.js";import"./Button-BCHzki1U.js";import"./chevron-right-Dnafr4z9.js";import"./Input-99mwA4VF.js";import"./search-Bazo2FVF.js";import"./spin-D7rHkJGo.js";import"./error-n609TGyv.js";const{fn:p}=__STORYBOOK_MODULE_TEST__,s="/osdk-ts/storybook/pr-4323/56bd216de4a5c5e66e1621e188bfe598f2cd9c30/compressed.tracemonkey-pldi-09.pdf";function l({annotation:t}){return n.jsx("div",{style:{width:"100%",height:"100%",display:"flex",alignItems:"center",justifyContent:"center",background:"rgba(59, 130, 246, 0.9)",borderRadius:"6px",color:"#fff",fontSize:"12px",fontWeight:600,padding:"4px 8px",whiteSpace:"nowrap",boxShadow:"0 2px 8px rgba(0,0,0,0.15)"},children:t.label??"Note"})}function i({annotation:t}){return n.jsx("div",{style:{width:"100%",height:"100%",display:"flex",alignItems:"center",justifyContent:"center",background:"#ef4444",borderRadius:"50%",color:"#fff",fontSize:"11px",fontWeight:700},children:t.label??"1"})}const c=[{id:"tooltip-1",type:"custom",page:1,rect:{x:55,y:400,width:120,height:28},label:"Key finding",render:t=>n.jsx(l,{...t})},{id:"badge-1",type:"custom",page:1,rect:{x:540,y:692,width:24,height:24},label:"1",render:t=>n.jsx(i,{...t})},{id:"badge-2",type:"custom",page:1,rect:{x:540,y:418,width:24,height:24},label:"2",render:t=>n.jsx(i,{...t})},{id:"highlight-1",type:"highlight",page:1,rect:{x:80,y:700,width:450,height:14},label:"Author line highlight"}],F={title:"Components/DocumentViewer/Renderers/PdfViewer/Recipes",component:e,tags:["beta"],args:{src:s,annotations:c,onAnnotationClick:p()},render:t=>n.jsx("div",{style:{height:"600px"},children:n.jsx(e,{...t})}),argTypes:{src:{control:!1},annotations:{control:"object"},onAnnotationClick:{control:!1,table:{category:"Events"}}}},o={parameters:{docs:{source:{code:`function TooltipAnnotation({ annotation }: PdfAnnotationRenderProps) {
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
