import{j as n}from"./iframe-VyYU4_vz.js";import{B as e}from"./BasePdfViewer-B-bSTbSC.js";import"./preload-helper-BuqLdsok.js";import"./index-Ds9RaOEw.js";import"./BasePdfViewer.module.css-otvtnaWv.js";import"./PdfViewerAnnotationLayer-D2dQYGs-.js";import"./constants-DsXMS3N3.js";import"./usePdfDocument-sWMxQ1wk.js";import"./PdfViewerOutlineSidebar-BoXOX0OP.js";import"./PdfViewerSidebarHeader-Cz7aTpTK.js";import"./useBaseUiId-oAJGM4T3.js";import"./useControlled-DF-V1JcA.js";import"./CompositeRoot-Bsj6Vv3e.js";import"./CompositeItem-BpcnF50U.js";import"./ToolbarRootContext-DNatahNZ.js";import"./composite-D-GMalcD.js";import"./svgIconContainer-RHuD6B4X.js";import"./PdfViewerSearchBar-BT9Z2dpP.js";import"./chevron-up-x31k7xut.js";import"./chevron-down-C6hF1wmk.js";import"./cross-B8BSPVsW.js";import"./PdfViewerSidebar-D1VxKdps.js";import"./index-D3QHbtaM.js";import"./index-DGfEWUId.js";import"./index-CIaumvnO.js";import"./PdfViewerToolbar-DMaYznPc.js";import"./Button-BO4-XA9w.js";import"./chevron-right-D0MjSRzo.js";import"./Input-Ck1mtXHC.js";import"./search-Cp9T6kDH.js";import"./spin-B8-vckZx.js";import"./error-D4hrAgPV.js";const{fn:p}=__STORYBOOK_MODULE_TEST__,s="/osdk-ts/storybook/pr-4211/c41cdf89c395dd80b8c0af5d5dde630c567bc27a/compressed.tracemonkey-pldi-09.pdf";function c({annotation:t}){return n.jsx("div",{style:{width:"100%",height:"100%",display:"flex",alignItems:"center",justifyContent:"center",background:"rgba(59, 130, 246, 0.9)",borderRadius:"6px",color:"#fff",fontSize:"12px",fontWeight:600,padding:"4px 8px",whiteSpace:"nowrap",boxShadow:"0 2px 8px rgba(0,0,0,0.15)"},children:t.label??"Note"})}function i({annotation:t}){return n.jsx("div",{style:{width:"100%",height:"100%",display:"flex",alignItems:"center",justifyContent:"center",background:"#ef4444",borderRadius:"50%",color:"#fff",fontSize:"11px",fontWeight:700},children:t.label??"1"})}const l=[{id:"tooltip-1",type:"custom",page:1,rect:{x:55,y:400,width:120,height:28},label:"Key finding",render:t=>n.jsx(c,{...t})},{id:"badge-1",type:"custom",page:1,rect:{x:540,y:692,width:24,height:24},label:"1",render:t=>n.jsx(i,{...t})},{id:"badge-2",type:"custom",page:1,rect:{x:540,y:418,width:24,height:24},label:"2",render:t=>n.jsx(i,{...t})},{id:"highlight-1",type:"highlight",page:1,rect:{x:80,y:700,width:450,height:14},label:"Author line highlight"}],F={title:"Components/DocumentViewer/Renderers/PdfViewer/Recipes",component:e,tags:["beta"],args:{src:s,annotations:l,onAnnotationClick:p()},render:t=>n.jsx("div",{style:{height:"600px"},children:n.jsx(e,{...t})}),argTypes:{src:{control:!1},annotations:{control:"object"},onAnnotationClick:{control:!1,table:{category:"Events"}}}},o={parameters:{docs:{source:{code:`function TooltipAnnotation({ annotation }: PdfAnnotationRenderProps) {
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
