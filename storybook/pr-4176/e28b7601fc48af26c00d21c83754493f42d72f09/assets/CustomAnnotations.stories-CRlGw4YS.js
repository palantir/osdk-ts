import{j as n}from"./iframe-BdOqqohK.js";import{B as e}from"./BasePdfViewer-O5dMrF53.js";import"./preload-helper-BM9HCPK9.js";import"./index-CMkPjfDh.js";import"./BasePdfViewer.module.css-XamitKhc.js";import"./PdfViewerAnnotationLayer-D7iqYzRw.js";import"./constants-DsXMS3N3.js";import"./usePdfDocument-BDPUF8kn.js";import"./PdfViewerOutlineSidebar-BUXw9eFg.js";import"./PdfViewerSidebarHeader-Cq6rVqtW.js";import"./useBaseUiId-D2aQCoEc.js";import"./useControlled-BYgnBDE7.js";import"./CompositeRoot-BvsoWMNP.js";import"./CompositeItem-FJMzn3o4.js";import"./ToolbarRootContext-CpSt7yAh.js";import"./composite-DBxA_VE8.js";import"./svgIconContainer-CxQ350M_.js";import"./PdfViewerSearchBar-C6MKAb-n.js";import"./chevron-up-PHK3sVe4.js";import"./chevron-down-DcdLMAVH.js";import"./cross-CBN09daJ.js";import"./PdfViewerSidebar-sPAJrn8K.js";import"./index-CZ8krK_n.js";import"./index-CVW6l3Ye.js";import"./index-DYHqv8nl.js";import"./PdfViewerToolbar-DD-29xIF.js";import"./Button-KdAdTzHS.js";import"./chevron-right-B4Mj3Txk.js";import"./Input-BunEo4l4.js";import"./search-et-5mZuo.js";import"./spin-R1G0hp9T.js";import"./error-BfW0iVfX.js";const{fn:p}=__STORYBOOK_MODULE_TEST__,s="/osdk-ts/storybook/pr-4176/e28b7601fc48af26c00d21c83754493f42d72f09/compressed.tracemonkey-pldi-09.pdf";function l({annotation:t}){return n.jsx("div",{style:{width:"100%",height:"100%",display:"flex",alignItems:"center",justifyContent:"center",background:"rgba(59, 130, 246, 0.9)",borderRadius:"6px",color:"#fff",fontSize:"12px",fontWeight:600,padding:"4px 8px",whiteSpace:"nowrap",boxShadow:"0 2px 8px rgba(0,0,0,0.15)"},children:t.label??"Note"})}function i({annotation:t}){return n.jsx("div",{style:{width:"100%",height:"100%",display:"flex",alignItems:"center",justifyContent:"center",background:"#ef4444",borderRadius:"50%",color:"#fff",fontSize:"11px",fontWeight:700},children:t.label??"1"})}const c=[{id:"tooltip-1",type:"custom",page:1,rect:{x:55,y:400,width:120,height:28},label:"Key finding",render:t=>n.jsx(l,{...t})},{id:"badge-1",type:"custom",page:1,rect:{x:540,y:692,width:24,height:24},label:"1",render:t=>n.jsx(i,{...t})},{id:"badge-2",type:"custom",page:1,rect:{x:540,y:418,width:24,height:24},label:"2",render:t=>n.jsx(i,{...t})},{id:"highlight-1",type:"highlight",page:1,rect:{x:80,y:700,width:450,height:14},label:"Author line highlight"}],F={title:"Components/DocumentViewer/Renderers/PdfViewer/Recipes",component:e,tags:["beta"],args:{src:s,annotations:c,onAnnotationClick:p()},render:t=>n.jsx("div",{style:{height:"600px"},children:n.jsx(e,{...t})}),argTypes:{src:{control:!1},annotations:{control:"object"},onAnnotationClick:{control:!1,table:{category:"Events"}}}},o={parameters:{docs:{source:{code:`function TooltipAnnotation({ annotation }: PdfAnnotationRenderProps) {
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
