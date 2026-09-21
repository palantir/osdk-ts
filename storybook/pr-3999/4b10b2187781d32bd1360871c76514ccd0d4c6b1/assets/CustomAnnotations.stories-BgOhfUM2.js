import{j as n}from"./iframe-DBZ29Q89.js";import{B as e}from"./BasePdfViewer-DGr77paY.js";import"./preload-helper-Cu7dcQLx.js";import"./index-DBtD-XxF.js";import"./BasePdfViewer.module.css-BkLVG12L.js";import"./PdfViewerAnnotationLayer-D_CU9uto.js";import"./constants-DsXMS3N3.js";import"./usePdfDocument-CMFNY-g1.js";import"./PdfViewerOutlineSidebar-BF7SMcrZ.js";import"./PdfViewerSidebarHeader-BBV2n6bE.js";import"./useBaseUiId-RGrTJ31h.js";import"./useControlled-CAV9tSJk.js";import"./CompositeRoot-DKZZjXIy.js";import"./CompositeItem-CnzplN5I.js";import"./ToolbarRootContext-BDMXA8FN.js";import"./composite-DRG53mMw.js";import"./svgIconContainer-DNY9aQZJ.js";import"./PdfViewerSearchBar-CiKYqnWI.js";import"./chevron-up-DMb1an1a.js";import"./chevron-down-m8Go69fz.js";import"./cross-B-xCEuKH.js";import"./PdfViewerSidebar-Ch5Vn94T.js";import"./index-D7JuEvow.js";import"./index-Bo8FiFc5.js";import"./index-Bc39kNYP.js";import"./PdfViewerToolbar-DSg8XvXS.js";import"./Button-TF5qO5TO.js";import"./chevron-right-D3kvJA7i.js";import"./Input-BW9ftY3W.js";import"./search-DFnGvI6Z.js";import"./spin-DbN6MR0G.js";import"./error-DYp6MgYM.js";const{fn:p}=__STORYBOOK_MODULE_TEST__,s="/osdk-ts/storybook/pr-3999/4b10b2187781d32bd1360871c76514ccd0d4c6b1/compressed.tracemonkey-pldi-09.pdf";function l({annotation:t}){return n.jsx("div",{style:{width:"100%",height:"100%",display:"flex",alignItems:"center",justifyContent:"center",background:"rgba(59, 130, 246, 0.9)",borderRadius:"6px",color:"#fff",fontSize:"12px",fontWeight:600,padding:"4px 8px",whiteSpace:"nowrap",boxShadow:"0 2px 8px rgba(0,0,0,0.15)"},children:t.label??"Note"})}function i({annotation:t}){return n.jsx("div",{style:{width:"100%",height:"100%",display:"flex",alignItems:"center",justifyContent:"center",background:"#ef4444",borderRadius:"50%",color:"#fff",fontSize:"11px",fontWeight:700},children:t.label??"1"})}const c=[{id:"tooltip-1",type:"custom",page:1,rect:{x:55,y:400,width:120,height:28},label:"Key finding",render:t=>n.jsx(l,{...t})},{id:"badge-1",type:"custom",page:1,rect:{x:540,y:692,width:24,height:24},label:"1",render:t=>n.jsx(i,{...t})},{id:"badge-2",type:"custom",page:1,rect:{x:540,y:418,width:24,height:24},label:"2",render:t=>n.jsx(i,{...t})},{id:"highlight-1",type:"highlight",page:1,rect:{x:80,y:700,width:450,height:14},label:"Author line highlight"}],F={title:"Components/DocumentViewer/Renderers/PdfViewer/Recipes",component:e,tags:["beta"],args:{src:s,annotations:c,onAnnotationClick:p()},render:t=>n.jsx("div",{style:{height:"600px"},children:n.jsx(e,{...t})}),argTypes:{src:{control:!1},annotations:{control:"object"},onAnnotationClick:{control:!1,table:{category:"Events"}}}},o={parameters:{docs:{source:{code:`function TooltipAnnotation({ annotation }: PdfAnnotationRenderProps) {
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
