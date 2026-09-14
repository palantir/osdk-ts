import{j as n}from"./iframe-B0U1IQX4.js";import{B as e}from"./BasePdfViewer-Cg8m9uHL.js";import"./preload-helper-DiPVcWmm.js";import"./index-D1KZRywE.js";import"./BasePdfViewer.module.css-BlkcQe4z.js";import"./PdfViewerAnnotationLayer-CuU5DXDE.js";import"./constants-DsXMS3N3.js";import"./usePdfDocument-CrZ2eJgS.js";import"./PdfViewerOutlineSidebar-C_2_tV7F.js";import"./PdfViewerSidebarHeader-V0MXLsw-.js";import"./useBaseUiId-BYy3PLTZ.js";import"./useControlled-CRRNdgyj.js";import"./CompositeRoot-DsU-M2Ag.js";import"./CompositeItem-DHef4_L4.js";import"./ToolbarRootContext-CcCkr_bi.js";import"./composite-CsiVeWul.js";import"./svgIconContainer-C5UOcoAR.js";import"./PdfViewerSearchBar-BK8eDVSs.js";import"./chevron-up-Bqa7IRCK.js";import"./chevron-down-DeePtBa4.js";import"./cross-DuFcQq4i.js";import"./PdfViewerSidebar-BjblbI0j.js";import"./index-DF7Hoa49.js";import"./index-D9gCwCdH.js";import"./index-BCAnJ-ng.js";import"./PdfViewerToolbar-55s7dii3.js";import"./Button-xPZvVWHf.js";import"./chevron-right-BXUuv9ah.js";import"./Input-DxzIDyUo.js";import"./search-TA6KQkXz.js";import"./spin-DUKqeDJ1.js";import"./error-jOboOslV.js";const{fn:p}=__STORYBOOK_MODULE_TEST__,s="/osdk-ts/storybook/pr-1926/ba00989d3c6615c2c1fa81e0fbb23a65f58e7869/compressed.tracemonkey-pldi-09.pdf";function l({annotation:t}){return n.jsx("div",{style:{width:"100%",height:"100%",display:"flex",alignItems:"center",justifyContent:"center",background:"rgba(59, 130, 246, 0.9)",borderRadius:"6px",color:"#fff",fontSize:"12px",fontWeight:600,padding:"4px 8px",whiteSpace:"nowrap",boxShadow:"0 2px 8px rgba(0,0,0,0.15)"},children:t.label??"Note"})}function i({annotation:t}){return n.jsx("div",{style:{width:"100%",height:"100%",display:"flex",alignItems:"center",justifyContent:"center",background:"#ef4444",borderRadius:"50%",color:"#fff",fontSize:"11px",fontWeight:700},children:t.label??"1"})}const c=[{id:"tooltip-1",type:"custom",page:1,rect:{x:55,y:400,width:120,height:28},label:"Key finding",render:t=>n.jsx(l,{...t})},{id:"badge-1",type:"custom",page:1,rect:{x:540,y:692,width:24,height:24},label:"1",render:t=>n.jsx(i,{...t})},{id:"badge-2",type:"custom",page:1,rect:{x:540,y:418,width:24,height:24},label:"2",render:t=>n.jsx(i,{...t})},{id:"highlight-1",type:"highlight",page:1,rect:{x:80,y:700,width:450,height:14},label:"Author line highlight"}],F={title:"Components/DocumentViewer/Renderers/PdfViewer/Recipes",component:e,tags:["beta"],args:{src:s,annotations:c,onAnnotationClick:p()},render:t=>n.jsx("div",{style:{height:"600px"},children:n.jsx(e,{...t})}),argTypes:{src:{control:!1},annotations:{control:"object"},onAnnotationClick:{control:!1,table:{category:"Events"}}}},o={parameters:{docs:{source:{code:`function TooltipAnnotation({ annotation }: PdfAnnotationRenderProps) {
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
