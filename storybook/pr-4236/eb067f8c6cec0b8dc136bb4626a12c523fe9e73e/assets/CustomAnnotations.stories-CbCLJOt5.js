import{j as n}from"./iframe-BGoY5mFC.js";import{B as e}from"./BasePdfViewer-D4ap9xtU.js";import"./preload-helper-DsvzwfCi.js";import"./index-DnfiKoHw.js";import"./BasePdfViewer.module.css-B0s6Y0TJ.js";import"./PdfViewerAnnotationLayer-yotbbLGo.js";import"./constants-DsXMS3N3.js";import"./usePdfDocument-_Al93KFx.js";import"./PdfViewerOutlineSidebar-zxZicrTu.js";import"./PdfViewerSidebarHeader-CjWNa7ZR.js";import"./useBaseUiId-CIYnZ7Oo.js";import"./useControlled-Cqb7ClaQ.js";import"./CompositeRoot-BIQInV-N.js";import"./CompositeItem-2fAyt8Be.js";import"./ToolbarRootContext-DUxALj_T.js";import"./composite-DKhm2DCj.js";import"./svgIconContainer-BX-wZNF4.js";import"./PdfViewerSearchBar-D9uBVLTt.js";import"./chevron-up-CzoLGspj.js";import"./chevron-down-CCx6Nv0U.js";import"./cross-BtqJOxEL.js";import"./PdfViewerSidebar-DkB9lIbe.js";import"./index-B0vfjDqX.js";import"./index-B6V6F-VV.js";import"./index-DYEd7rlA.js";import"./PdfViewerToolbar-D86urf21.js";import"./Button-CFNLbf5u.js";import"./chevron-right-8UKO4GDH.js";import"./Input-D9S9buqu.js";import"./search-Du0qzm2Q.js";import"./spin-BIskOECu.js";import"./error-Brajw6PY.js";const{fn:p}=__STORYBOOK_MODULE_TEST__,s="/osdk-ts/storybook/pr-4236/eb067f8c6cec0b8dc136bb4626a12c523fe9e73e/compressed.tracemonkey-pldi-09.pdf";function c({annotation:t}){return n.jsx("div",{style:{width:"100%",height:"100%",display:"flex",alignItems:"center",justifyContent:"center",background:"rgba(59, 130, 246, 0.9)",borderRadius:"6px",color:"#fff",fontSize:"12px",fontWeight:600,padding:"4px 8px",whiteSpace:"nowrap",boxShadow:"0 2px 8px rgba(0,0,0,0.15)"},children:t.label??"Note"})}function i({annotation:t}){return n.jsx("div",{style:{width:"100%",height:"100%",display:"flex",alignItems:"center",justifyContent:"center",background:"#ef4444",borderRadius:"50%",color:"#fff",fontSize:"11px",fontWeight:700},children:t.label??"1"})}const l=[{id:"tooltip-1",type:"custom",page:1,rect:{x:55,y:400,width:120,height:28},label:"Key finding",render:t=>n.jsx(c,{...t})},{id:"badge-1",type:"custom",page:1,rect:{x:540,y:692,width:24,height:24},label:"1",render:t=>n.jsx(i,{...t})},{id:"badge-2",type:"custom",page:1,rect:{x:540,y:418,width:24,height:24},label:"2",render:t=>n.jsx(i,{...t})},{id:"highlight-1",type:"highlight",page:1,rect:{x:80,y:700,width:450,height:14},label:"Author line highlight"}],F={title:"Components/DocumentViewer/Renderers/PdfViewer/Recipes",component:e,tags:["beta"],args:{src:s,annotations:l,onAnnotationClick:p()},render:t=>n.jsx("div",{style:{height:"600px"},children:n.jsx(e,{...t})}),argTypes:{src:{control:!1},annotations:{control:"object"},onAnnotationClick:{control:!1,table:{category:"Events"}}}},o={parameters:{docs:{source:{code:`function TooltipAnnotation({ annotation }: PdfAnnotationRenderProps) {
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
