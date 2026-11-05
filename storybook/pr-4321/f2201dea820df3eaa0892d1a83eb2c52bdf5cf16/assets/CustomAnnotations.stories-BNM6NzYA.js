import{j as n}from"./iframe-D7WyLq_R.js";import{B as e}from"./BasePdfViewer-Cwj2OqPo.js";import"./preload-helper-BqfBxCjy.js";import"./index-HyeIDcrc.js";import"./BasePdfViewer.module.css-Bhk1T0T_.js";import"./PdfViewerAnnotationLayer-Gbl8b2Cd.js";import"./constants-DsXMS3N3.js";import"./usePdfDocument-CpjyYdj8.js";import"./PdfViewerOutlineSidebar-C0C_ZfON.js";import"./PdfViewerSidebarHeader-BcJvzMcW.js";import"./useBaseUiId-CG-SGXYP.js";import"./useControlled-Bb8KRWad.js";import"./CompositeRoot-KfQEq8rJ.js";import"./CompositeItem-ZpmtOb_M.js";import"./ToolbarRootContext-Fnt7cK66.js";import"./composite-D_DTOoGQ.js";import"./svgIconContainer-B4x4BdHn.js";import"./PdfViewerSearchBar-Deh32uQ6.js";import"./chevron-up-BYOLxdH9.js";import"./chevron-down-CUo9ik68.js";import"./cross-uvcs2Wcl.js";import"./PdfViewerSidebar-CZGZBbFz.js";import"./index-CJGKKiqL.js";import"./index-ufR6xdAx.js";import"./index-D2fZUIcR.js";import"./PdfViewerToolbar-0qRVCQBv.js";import"./Button-BE_yPzwR.js";import"./chevron-right-Celro0XV.js";import"./Input-C4gz0NfF.js";import"./search-s_J2wlUd.js";import"./spin-BFUBf48n.js";import"./error-D2VV45CC.js";const{fn:p}=__STORYBOOK_MODULE_TEST__,s="/osdk-ts/storybook/pr-4321/f2201dea820df3eaa0892d1a83eb2c52bdf5cf16/compressed.tracemonkey-pldi-09.pdf";function l({annotation:t}){return n.jsx("div",{style:{width:"100%",height:"100%",display:"flex",alignItems:"center",justifyContent:"center",background:"rgba(59, 130, 246, 0.9)",borderRadius:"6px",color:"#fff",fontSize:"12px",fontWeight:600,padding:"4px 8px",whiteSpace:"nowrap",boxShadow:"0 2px 8px rgba(0,0,0,0.15)"},children:t.label??"Note"})}function i({annotation:t}){return n.jsx("div",{style:{width:"100%",height:"100%",display:"flex",alignItems:"center",justifyContent:"center",background:"#ef4444",borderRadius:"50%",color:"#fff",fontSize:"11px",fontWeight:700},children:t.label??"1"})}const c=[{id:"tooltip-1",type:"custom",page:1,rect:{x:55,y:400,width:120,height:28},label:"Key finding",render:t=>n.jsx(l,{...t})},{id:"badge-1",type:"custom",page:1,rect:{x:540,y:692,width:24,height:24},label:"1",render:t=>n.jsx(i,{...t})},{id:"badge-2",type:"custom",page:1,rect:{x:540,y:418,width:24,height:24},label:"2",render:t=>n.jsx(i,{...t})},{id:"highlight-1",type:"highlight",page:1,rect:{x:80,y:700,width:450,height:14},label:"Author line highlight"}],F={title:"Components/DocumentViewer/Renderers/PdfViewer/Recipes",component:e,tags:["beta"],args:{src:s,annotations:c,onAnnotationClick:p()},render:t=>n.jsx("div",{style:{height:"600px"},children:n.jsx(e,{...t})}),argTypes:{src:{control:!1},annotations:{control:"object"},onAnnotationClick:{control:!1,table:{category:"Events"}}}},o={parameters:{docs:{source:{code:`function TooltipAnnotation({ annotation }: PdfAnnotationRenderProps) {
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
