import{j as n}from"./iframe-BI8s_LEM.js";import{B as e}from"./BasePdfViewer-CZwIZcPK.js";import"./preload-helper-2UIxwTHe.js";import"./index-Cdoej1rc.js";import"./BasePdfViewer.module.css-BP5_EwIY.js";import"./PdfViewerAnnotationLayer-Chu0JPTR.js";import"./constants-DsXMS3N3.js";import"./usePdfDocument-B-M5wngm.js";import"./PdfViewerOutlineSidebar-DbBqBnPD.js";import"./PdfViewerSidebarHeader-CL9n6Oou.js";import"./useBaseUiId-BeAhLVth.js";import"./useControlled-C9KhyXIr.js";import"./CompositeRoot-DFiEk9pV.js";import"./CompositeItem-LJzGPuj_.js";import"./ToolbarRootContext-DK00e0CZ.js";import"./composite-DBRFQf_M.js";import"./svgIconContainer-BP-rj0xG.js";import"./PdfViewerSearchBar-DTSLrhEh.js";import"./chevron-up-Dc1j2y_D.js";import"./chevron-down-C-PF6_L5.js";import"./cross-BMpmO8GH.js";import"./PdfViewerSidebar-Ejbz8H8K.js";import"./index-A6vp9cHu.js";import"./index-BYp5baBX.js";import"./index-D73snmm6.js";import"./PdfViewerToolbar-CVAcF53L.js";import"./Button-CleaIGAw.js";import"./chevron-right-CmyvylXQ.js";import"./Input-BsZHTTke.js";import"./search-Du5SutCf.js";import"./spin-CSU6BrBt.js";import"./error-BKT0KUzG.js";const{fn:p}=__STORYBOOK_MODULE_TEST__,s="/osdk-ts/storybook/pr-3861/e2505d7d1278cca9c825a1af5764a46432339823/compressed.tracemonkey-pldi-09.pdf";function l({annotation:t}){return n.jsx("div",{style:{width:"100%",height:"100%",display:"flex",alignItems:"center",justifyContent:"center",background:"rgba(59, 130, 246, 0.9)",borderRadius:"6px",color:"#fff",fontSize:"12px",fontWeight:600,padding:"4px 8px",whiteSpace:"nowrap",boxShadow:"0 2px 8px rgba(0,0,0,0.15)"},children:t.label??"Note"})}function i({annotation:t}){return n.jsx("div",{style:{width:"100%",height:"100%",display:"flex",alignItems:"center",justifyContent:"center",background:"#ef4444",borderRadius:"50%",color:"#fff",fontSize:"11px",fontWeight:700},children:t.label??"1"})}const c=[{id:"tooltip-1",type:"custom",page:1,rect:{x:55,y:400,width:120,height:28},label:"Key finding",render:t=>n.jsx(l,{...t})},{id:"badge-1",type:"custom",page:1,rect:{x:540,y:692,width:24,height:24},label:"1",render:t=>n.jsx(i,{...t})},{id:"badge-2",type:"custom",page:1,rect:{x:540,y:418,width:24,height:24},label:"2",render:t=>n.jsx(i,{...t})},{id:"highlight-1",type:"highlight",page:1,rect:{x:80,y:700,width:450,height:14},label:"Author line highlight"}],F={title:"Components/DocumentViewer/Renderers/PdfViewer/Recipes",component:e,tags:["beta"],args:{src:s,annotations:c,onAnnotationClick:p()},render:t=>n.jsx("div",{style:{height:"600px"},children:n.jsx(e,{...t})}),argTypes:{src:{control:!1},annotations:{control:"object"},onAnnotationClick:{control:!1,table:{category:"Events"}}}},o={parameters:{docs:{source:{code:`function TooltipAnnotation({ annotation }: PdfAnnotationRenderProps) {
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
