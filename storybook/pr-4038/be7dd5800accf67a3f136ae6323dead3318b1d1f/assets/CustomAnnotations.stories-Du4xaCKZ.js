import{j as n}from"./iframe-C_0-Ny_N.js";import{B as e}from"./BasePdfViewer-CcGpANBS.js";import"./preload-helper-Cs_UzwR6.js";import"./index-BCapEaKB.js";import"./BasePdfViewer.module.css-lqEp46Bo.js";import"./PdfViewerAnnotationLayer-DPiyftmR.js";import"./constants-DsXMS3N3.js";import"./usePdfDocument-j0-8WCJm.js";import"./PdfViewerOutlineSidebar-BH3WsmxP.js";import"./PdfViewerSidebarHeader-DoTOA7nA.js";import"./useBaseUiId-B7Keq3x8.js";import"./useControlled-DmQkJsyf.js";import"./CompositeRoot-CF8DINrA.js";import"./CompositeItem-BeOy_iQJ.js";import"./ToolbarRootContext-DkY9S2-W.js";import"./composite-BKxtxXCT.js";import"./svgIconContainer-DAGFJod5.js";import"./PdfViewerSearchBar-CsYQqT7B.js";import"./chevron-up-Bfn8ktxO.js";import"./chevron-down-C0ibfMMv.js";import"./cross-Dhbxwhb2.js";import"./PdfViewerSidebar-DDwPmM0X.js";import"./index-CrSkVWMy.js";import"./index-Bewi1ToU.js";import"./index-D3nPMosa.js";import"./PdfViewerToolbar-KlgmohCR.js";import"./Button-g8Y5a3bQ.js";import"./chevron-right-r_7hROM6.js";import"./Input-BF9DmCeg.js";import"./search-BKcV1gVw.js";import"./spin-D8-HP0h6.js";import"./error-DAsTyxDt.js";const{fn:p}=__STORYBOOK_MODULE_TEST__,s="/osdk-ts/storybook/pr-4038/be7dd5800accf67a3f136ae6323dead3318b1d1f/compressed.tracemonkey-pldi-09.pdf";function l({annotation:t}){return n.jsx("div",{style:{width:"100%",height:"100%",display:"flex",alignItems:"center",justifyContent:"center",background:"rgba(59, 130, 246, 0.9)",borderRadius:"6px",color:"#fff",fontSize:"12px",fontWeight:600,padding:"4px 8px",whiteSpace:"nowrap",boxShadow:"0 2px 8px rgba(0,0,0,0.15)"},children:t.label??"Note"})}function i({annotation:t}){return n.jsx("div",{style:{width:"100%",height:"100%",display:"flex",alignItems:"center",justifyContent:"center",background:"#ef4444",borderRadius:"50%",color:"#fff",fontSize:"11px",fontWeight:700},children:t.label??"1"})}const c=[{id:"tooltip-1",type:"custom",page:1,rect:{x:55,y:400,width:120,height:28},label:"Key finding",render:t=>n.jsx(l,{...t})},{id:"badge-1",type:"custom",page:1,rect:{x:540,y:692,width:24,height:24},label:"1",render:t=>n.jsx(i,{...t})},{id:"badge-2",type:"custom",page:1,rect:{x:540,y:418,width:24,height:24},label:"2",render:t=>n.jsx(i,{...t})},{id:"highlight-1",type:"highlight",page:1,rect:{x:80,y:700,width:450,height:14},label:"Author line highlight"}],F={title:"Components/DocumentViewer/Renderers/PdfViewer/Recipes",component:e,tags:["beta"],args:{src:s,annotations:c,onAnnotationClick:p()},render:t=>n.jsx("div",{style:{height:"600px"},children:n.jsx(e,{...t})}),argTypes:{src:{control:!1},annotations:{control:"object"},onAnnotationClick:{control:!1,table:{category:"Events"}}}},o={parameters:{docs:{source:{code:`function TooltipAnnotation({ annotation }: PdfAnnotationRenderProps) {
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
