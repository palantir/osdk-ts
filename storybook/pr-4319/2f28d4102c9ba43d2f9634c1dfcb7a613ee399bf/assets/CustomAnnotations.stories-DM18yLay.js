import{j as n}from"./iframe-BrffKLyp.js";import{B as e}from"./BasePdfViewer-D8rOP9ji.js";import"./preload-helper-BB6iUnWm.js";import"./index-DdTg6oKw.js";import"./BasePdfViewer.module.css-w3n7xFt8.js";import"./PdfViewerAnnotationLayer-BX7B1DVP.js";import"./constants-DsXMS3N3.js";import"./usePdfDocument-B9kbGy6r.js";import"./PdfViewerOutlineSidebar-Dx0GE3IX.js";import"./PdfViewerSidebarHeader-BWjefAYE.js";import"./useBaseUiId-OXag9z4A.js";import"./useControlled-ByoWnUuY.js";import"./CompositeRoot-D7UWMgY7.js";import"./CompositeItem-BfleHTK8.js";import"./ToolbarRootContext-B5DfTbi7.js";import"./composite-B19juyCu.js";import"./svgIconContainer-dbsVi0_7.js";import"./PdfViewerSearchBar-DaKjIeCs.js";import"./chevron-up-DXoCNCBM.js";import"./chevron-down-BEFoIyYv.js";import"./cross-Dp6LnhT2.js";import"./PdfViewerSidebar-DO6sDIX1.js";import"./index-YnTFldk0.js";import"./index-BY-yZOS1.js";import"./index-BNYKUSid.js";import"./PdfViewerToolbar-CG3xE6Fq.js";import"./Button-BBZWD59x.js";import"./chevron-right-BHPGz79_.js";import"./Input-D50y4-4d.js";import"./search-DpKU3GOV.js";import"./spin-BPMPYerz.js";import"./error-y0lQ0i5v.js";const{fn:p}=__STORYBOOK_MODULE_TEST__,s="/osdk-ts/storybook/pr-4319/2f28d4102c9ba43d2f9634c1dfcb7a613ee399bf/compressed.tracemonkey-pldi-09.pdf";function l({annotation:t}){return n.jsx("div",{style:{width:"100%",height:"100%",display:"flex",alignItems:"center",justifyContent:"center",background:"rgba(59, 130, 246, 0.9)",borderRadius:"6px",color:"#fff",fontSize:"12px",fontWeight:600,padding:"4px 8px",whiteSpace:"nowrap",boxShadow:"0 2px 8px rgba(0,0,0,0.15)"},children:t.label??"Note"})}function i({annotation:t}){return n.jsx("div",{style:{width:"100%",height:"100%",display:"flex",alignItems:"center",justifyContent:"center",background:"#ef4444",borderRadius:"50%",color:"#fff",fontSize:"11px",fontWeight:700},children:t.label??"1"})}const c=[{id:"tooltip-1",type:"custom",page:1,rect:{x:55,y:400,width:120,height:28},label:"Key finding",render:t=>n.jsx(l,{...t})},{id:"badge-1",type:"custom",page:1,rect:{x:540,y:692,width:24,height:24},label:"1",render:t=>n.jsx(i,{...t})},{id:"badge-2",type:"custom",page:1,rect:{x:540,y:418,width:24,height:24},label:"2",render:t=>n.jsx(i,{...t})},{id:"highlight-1",type:"highlight",page:1,rect:{x:80,y:700,width:450,height:14},label:"Author line highlight"}],F={title:"Components/DocumentViewer/Renderers/PdfViewer/Recipes",component:e,tags:["beta"],args:{src:s,annotations:c,onAnnotationClick:p()},render:t=>n.jsx("div",{style:{height:"600px"},children:n.jsx(e,{...t})}),argTypes:{src:{control:!1},annotations:{control:"object"},onAnnotationClick:{control:!1,table:{category:"Events"}}}},o={parameters:{docs:{source:{code:`function TooltipAnnotation({ annotation }: PdfAnnotationRenderProps) {
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
