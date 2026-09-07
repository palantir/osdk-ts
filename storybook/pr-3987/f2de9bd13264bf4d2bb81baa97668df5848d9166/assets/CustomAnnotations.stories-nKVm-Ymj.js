import{j as n}from"./iframe-rd5WAA9r.js";import{B as e}from"./BasePdfViewer-CqVpz3dP.js";import"./preload-helper-lrQOG99y.js";import"./index-gTgVe7bx.js";import"./BasePdfViewer.module.css-DXVtB3Ax.js";import"./PdfViewerAnnotationLayer-bnjrJomE.js";import"./constants-DsXMS3N3.js";import"./usePdfDocument-CJn9vnYC.js";import"./PdfViewerOutlineSidebar-CMe1dd07.js";import"./PdfViewerSidebarHeader-pQ_Fy9jI.js";import"./useBaseUiId-CEPsQLHg.js";import"./useControlled-C60801w-.js";import"./CompositeRoot-CnmGaqva.js";import"./CompositeItem-LJvlu5vM.js";import"./ToolbarRootContext-SIV8jQMI.js";import"./composite-DkMWUUkG.js";import"./svgIconContainer-CP_qsPw-.js";import"./PdfViewerSearchBar-Cpxunqx_.js";import"./chevron-up-C4m3pGn6.js";import"./chevron-down-Bd0HHDZf.js";import"./cross-D4_Lw_xT.js";import"./PdfViewerSidebar-C3ivGOPm.js";import"./index-DdtePcPk.js";import"./index-DSVS7Qxc.js";import"./index-DUdz8bct.js";import"./PdfViewerToolbar-D2peTVm8.js";import"./Button-C07SmwTz.js";import"./chevron-right-C_B9JDof.js";import"./Input-DFVDug_7.js";import"./search-C5LSfE4t.js";import"./spin-DalGuzkD.js";import"./error-YfyqzF-q.js";const{fn:p}=__STORYBOOK_MODULE_TEST__,s="/osdk-ts/storybook/pr-3987/f2de9bd13264bf4d2bb81baa97668df5848d9166/compressed.tracemonkey-pldi-09.pdf";function l({annotation:t}){return n.jsx("div",{style:{width:"100%",height:"100%",display:"flex",alignItems:"center",justifyContent:"center",background:"rgba(59, 130, 246, 0.9)",borderRadius:"6px",color:"#fff",fontSize:"12px",fontWeight:600,padding:"4px 8px",whiteSpace:"nowrap",boxShadow:"0 2px 8px rgba(0,0,0,0.15)"},children:t.label??"Note"})}function i({annotation:t}){return n.jsx("div",{style:{width:"100%",height:"100%",display:"flex",alignItems:"center",justifyContent:"center",background:"#ef4444",borderRadius:"50%",color:"#fff",fontSize:"11px",fontWeight:700},children:t.label??"1"})}const c=[{id:"tooltip-1",type:"custom",page:1,rect:{x:55,y:400,width:120,height:28},label:"Key finding",render:t=>n.jsx(l,{...t})},{id:"badge-1",type:"custom",page:1,rect:{x:540,y:692,width:24,height:24},label:"1",render:t=>n.jsx(i,{...t})},{id:"badge-2",type:"custom",page:1,rect:{x:540,y:418,width:24,height:24},label:"2",render:t=>n.jsx(i,{...t})},{id:"highlight-1",type:"highlight",page:1,rect:{x:80,y:700,width:450,height:14},label:"Author line highlight"}],F={title:"Components/DocumentViewer/Renderers/PdfViewer/Recipes",component:e,tags:["beta"],args:{src:s,annotations:c,onAnnotationClick:p()},render:t=>n.jsx("div",{style:{height:"600px"},children:n.jsx(e,{...t})}),argTypes:{src:{control:!1},annotations:{control:"object"},onAnnotationClick:{control:!1,table:{category:"Events"}}}},o={parameters:{docs:{source:{code:`function TooltipAnnotation({ annotation }: PdfAnnotationRenderProps) {
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
