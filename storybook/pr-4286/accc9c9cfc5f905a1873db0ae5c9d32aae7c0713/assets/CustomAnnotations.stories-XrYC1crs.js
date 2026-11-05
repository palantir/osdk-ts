import{j as n}from"./iframe-BH1__lyA.js";import{B as e}from"./BasePdfViewer-BDGrOIPO.js";import"./preload-helper-CcoKPVmD.js";import"./index-COEeIEse.js";import"./BasePdfViewer.module.css-pxRzaKCf.js";import"./PdfViewerAnnotationLayer-CYpf4omD.js";import"./constants-DsXMS3N3.js";import"./usePdfDocument-5tN_OUZv.js";import"./PdfViewerOutlineSidebar-CypNDgZE.js";import"./PdfViewerSidebarHeader-BSiUzgOX.js";import"./useBaseUiId-CocyTtNa.js";import"./useControlled-DOGwcjPy.js";import"./CompositeRoot-Cj5jsPa1.js";import"./CompositeItem-D0FQTfbI.js";import"./ToolbarRootContext-CtjitZ_O.js";import"./composite-C3W7I4o1.js";import"./svgIconContainer-wKAlV-si.js";import"./PdfViewerSearchBar-m5H5Bqg1.js";import"./chevron-up-DsszAedP.js";import"./chevron-down-PjTLl0ZH.js";import"./cross-BG9CU_85.js";import"./PdfViewerSidebar-BTeKCEgN.js";import"./index-CGXKdUZr.js";import"./index-Bb8BpDdy.js";import"./index-C3iKmC6u.js";import"./PdfViewerToolbar-mByFcPJ7.js";import"./Button-DfUwNhvG.js";import"./chevron-right-DHiXpP5S.js";import"./Input-hpLjYkh3.js";import"./search-XcMkpgCF.js";import"./spin-BdLmc7b8.js";import"./error-Dg7pD9uX.js";const{fn:p}=__STORYBOOK_MODULE_TEST__,s="/osdk-ts/storybook/pr-4286/accc9c9cfc5f905a1873db0ae5c9d32aae7c0713/compressed.tracemonkey-pldi-09.pdf";function c({annotation:t}){return n.jsx("div",{style:{width:"100%",height:"100%",display:"flex",alignItems:"center",justifyContent:"center",background:"rgba(59, 130, 246, 0.9)",borderRadius:"6px",color:"#fff",fontSize:"12px",fontWeight:600,padding:"4px 8px",whiteSpace:"nowrap",boxShadow:"0 2px 8px rgba(0,0,0,0.15)"},children:t.label??"Note"})}function i({annotation:t}){return n.jsx("div",{style:{width:"100%",height:"100%",display:"flex",alignItems:"center",justifyContent:"center",background:"#ef4444",borderRadius:"50%",color:"#fff",fontSize:"11px",fontWeight:700},children:t.label??"1"})}const l=[{id:"tooltip-1",type:"custom",page:1,rect:{x:55,y:400,width:120,height:28},label:"Key finding",render:t=>n.jsx(c,{...t})},{id:"badge-1",type:"custom",page:1,rect:{x:540,y:692,width:24,height:24},label:"1",render:t=>n.jsx(i,{...t})},{id:"badge-2",type:"custom",page:1,rect:{x:540,y:418,width:24,height:24},label:"2",render:t=>n.jsx(i,{...t})},{id:"highlight-1",type:"highlight",page:1,rect:{x:80,y:700,width:450,height:14},label:"Author line highlight"}],F={title:"Components/DocumentViewer/Renderers/PdfViewer/Recipes",component:e,tags:["beta"],args:{src:s,annotations:l,onAnnotationClick:p()},render:t=>n.jsx("div",{style:{height:"600px"},children:n.jsx(e,{...t})}),argTypes:{src:{control:!1},annotations:{control:"object"},onAnnotationClick:{control:!1,table:{category:"Events"}}}},o={parameters:{docs:{source:{code:`function TooltipAnnotation({ annotation }: PdfAnnotationRenderProps) {
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
