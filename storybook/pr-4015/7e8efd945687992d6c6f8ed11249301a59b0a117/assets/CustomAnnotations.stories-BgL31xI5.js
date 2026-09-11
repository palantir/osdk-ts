import{j as n}from"./iframe-B9e47JAt.js";import{B as e}from"./BasePdfViewer-DVK7Rdzi.js";import"./preload-helper-BRB8NOW_.js";import"./index-C_6xtQCD.js";import"./BasePdfViewer.module.css-NmR1hWY2.js";import"./PdfViewerAnnotationLayer-BtHUIQaj.js";import"./constants-DsXMS3N3.js";import"./usePdfDocument-hjQgBr5N.js";import"./PdfViewerOutlineSidebar-sxSRcT4O.js";import"./PdfViewerSidebarHeader-CCYfa_L-.js";import"./useBaseUiId-VqyZRI0q.js";import"./useControlled-BBsT5_Nc.js";import"./CompositeRoot-DTiWRTs2.js";import"./CompositeItem-BJasfKU0.js";import"./ToolbarRootContext-DycOOcjn.js";import"./composite-BethEnTN.js";import"./svgIconContainer-dHjn9I5b.js";import"./PdfViewerSearchBar-Bjxv5_GN.js";import"./chevron-up-fXEhmQfk.js";import"./chevron-down-ChPDwIrO.js";import"./cross-ymxOUFGj.js";import"./PdfViewerSidebar-y2Yoa7uG.js";import"./index-DY7BzFjI.js";import"./index-D_iw6W8D.js";import"./index-BBqzf2o3.js";import"./PdfViewerToolbar-B-lEs24v.js";import"./Button-z2FVGTG2.js";import"./chevron-right-Cho82Dwe.js";import"./Input-CPGlOkat.js";import"./search-BejwSAXg.js";import"./spin-Cet6JoNq.js";import"./error-pDyLX5xW.js";const{fn:p}=__STORYBOOK_MODULE_TEST__,s="/osdk-ts/storybook/pr-4015/7e8efd945687992d6c6f8ed11249301a59b0a117/compressed.tracemonkey-pldi-09.pdf";function l({annotation:t}){return n.jsx("div",{style:{width:"100%",height:"100%",display:"flex",alignItems:"center",justifyContent:"center",background:"rgba(59, 130, 246, 0.9)",borderRadius:"6px",color:"#fff",fontSize:"12px",fontWeight:600,padding:"4px 8px",whiteSpace:"nowrap",boxShadow:"0 2px 8px rgba(0,0,0,0.15)"},children:t.label??"Note"})}function i({annotation:t}){return n.jsx("div",{style:{width:"100%",height:"100%",display:"flex",alignItems:"center",justifyContent:"center",background:"#ef4444",borderRadius:"50%",color:"#fff",fontSize:"11px",fontWeight:700},children:t.label??"1"})}const c=[{id:"tooltip-1",type:"custom",page:1,rect:{x:55,y:400,width:120,height:28},label:"Key finding",render:t=>n.jsx(l,{...t})},{id:"badge-1",type:"custom",page:1,rect:{x:540,y:692,width:24,height:24},label:"1",render:t=>n.jsx(i,{...t})},{id:"badge-2",type:"custom",page:1,rect:{x:540,y:418,width:24,height:24},label:"2",render:t=>n.jsx(i,{...t})},{id:"highlight-1",type:"highlight",page:1,rect:{x:80,y:700,width:450,height:14},label:"Author line highlight"}],F={title:"Components/DocumentViewer/Renderers/PdfViewer/Recipes",component:e,tags:["beta"],args:{src:s,annotations:c,onAnnotationClick:p()},render:t=>n.jsx("div",{style:{height:"600px"},children:n.jsx(e,{...t})}),argTypes:{src:{control:!1},annotations:{control:"object"},onAnnotationClick:{control:!1,table:{category:"Events"}}}},o={parameters:{docs:{source:{code:`function TooltipAnnotation({ annotation }: PdfAnnotationRenderProps) {
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
