import{j as n}from"./iframe-BN5ehZsU.js";import{B as e}from"./BasePdfViewer-CruIj2FT.js";import"./preload-helper-DiI2ZQ3N.js";import"./index-CUoza1kZ.js";import"./BasePdfViewer.module.css-uPZY4n1z.js";import"./PdfViewerAnnotationLayer-oG9M0UJs.js";import"./constants-DsXMS3N3.js";import"./usePdfDocument-BZykHkLM.js";import"./PdfViewerOutlineSidebar-BmMr9hO0.js";import"./PdfViewerSidebarHeader-dld6bGXM.js";import"./useBaseUiId-BEp1f_TL.js";import"./useControlled-Dn-0uibR.js";import"./CompositeRoot-DTJ2Xerl.js";import"./CompositeItem-CfdU5eWF.js";import"./ToolbarRootContext-C4vwBpF_.js";import"./composite-Dz6G3wtQ.js";import"./svgIconContainer-3_nrEXxJ.js";import"./PdfViewerSearchBar-CQ0K-RGI.js";import"./chevron-up-7CFsoCYd.js";import"./chevron-down-DSRGL9k7.js";import"./cross-CTzlKmgX.js";import"./PdfViewerSidebar-DMNAA3xa.js";import"./index-CfzvYg2Q.js";import"./index-CNUSOrN9.js";import"./index-BMD_ABKq.js";import"./PdfViewerToolbar-VHpNV36E.js";import"./Button-Ca_A2rxi.js";import"./chevron-right-DtIe8yJ3.js";import"./Input-Byq2KsKZ.js";import"./search-B5pZpNhj.js";import"./spin-DQ75iL_2.js";import"./error-BrwUp-mO.js";const{fn:p}=__STORYBOOK_MODULE_TEST__,s="/osdk-ts/storybook/pr-4240/179e42ef0202ea3d55e6f6b225075650cd3b91f0/compressed.tracemonkey-pldi-09.pdf";function l({annotation:t}){return n.jsx("div",{style:{width:"100%",height:"100%",display:"flex",alignItems:"center",justifyContent:"center",background:"rgba(59, 130, 246, 0.9)",borderRadius:"6px",color:"#fff",fontSize:"12px",fontWeight:600,padding:"4px 8px",whiteSpace:"nowrap",boxShadow:"0 2px 8px rgba(0,0,0,0.15)"},children:t.label??"Note"})}function i({annotation:t}){return n.jsx("div",{style:{width:"100%",height:"100%",display:"flex",alignItems:"center",justifyContent:"center",background:"#ef4444",borderRadius:"50%",color:"#fff",fontSize:"11px",fontWeight:700},children:t.label??"1"})}const c=[{id:"tooltip-1",type:"custom",page:1,rect:{x:55,y:400,width:120,height:28},label:"Key finding",render:t=>n.jsx(l,{...t})},{id:"badge-1",type:"custom",page:1,rect:{x:540,y:692,width:24,height:24},label:"1",render:t=>n.jsx(i,{...t})},{id:"badge-2",type:"custom",page:1,rect:{x:540,y:418,width:24,height:24},label:"2",render:t=>n.jsx(i,{...t})},{id:"highlight-1",type:"highlight",page:1,rect:{x:80,y:700,width:450,height:14},label:"Author line highlight"}],F={title:"Components/DocumentViewer/Renderers/PdfViewer/Recipes",component:e,tags:["beta"],args:{src:s,annotations:c,onAnnotationClick:p()},render:t=>n.jsx("div",{style:{height:"600px"},children:n.jsx(e,{...t})}),argTypes:{src:{control:!1},annotations:{control:"object"},onAnnotationClick:{control:!1,table:{category:"Events"}}}},o={parameters:{docs:{source:{code:`function TooltipAnnotation({ annotation }: PdfAnnotationRenderProps) {
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
