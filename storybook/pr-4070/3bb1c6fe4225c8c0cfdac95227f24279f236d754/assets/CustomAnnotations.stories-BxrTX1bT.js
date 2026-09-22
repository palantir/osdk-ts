import{j as n}from"./iframe-NgqvngwL.js";import{B as e}from"./BasePdfViewer-BbAblAq-.js";import"./preload-helper-C7qDpPhw.js";import"./index-qNBEcOe2.js";import"./BasePdfViewer.module.css-CZ-35fOU.js";import"./PdfViewerAnnotationLayer-CysaT8wP.js";import"./constants-DsXMS3N3.js";import"./usePdfDocument-BCQHV0Mv.js";import"./PdfViewerOutlineSidebar-qZ254DVE.js";import"./PdfViewerSidebarHeader-0R4Thdiu.js";import"./useBaseUiId-usyGi_EF.js";import"./useControlled-eXO0aHwT.js";import"./CompositeRoot-JwrOlmdH.js";import"./CompositeItem-C3cyTcS-.js";import"./ToolbarRootContext-CPIM7tk6.js";import"./composite-D8ywKD-R.js";import"./svgIconContainer-Dg9noX_E.js";import"./PdfViewerSearchBar-DWPHNomJ.js";import"./chevron-up-DL4ATUq1.js";import"./chevron-down-Bn4ZfVbM.js";import"./cross-B13Y_yM6.js";import"./PdfViewerSidebar-CF7mec2W.js";import"./index-DktHhzQs.js";import"./index-PMXb-wuA.js";import"./index-DpzlvyBx.js";import"./PdfViewerToolbar-GQQKdGre.js";import"./Button-oU3-hekz.js";import"./chevron-right-uWafKmMB.js";import"./Input-CVgaaiBC.js";import"./search-Dwv2h1CQ.js";import"./spin-CCEN_STG.js";import"./error-BXs3tL6Z.js";const{fn:p}=__STORYBOOK_MODULE_TEST__,s="/osdk-ts/storybook/pr-4070/3bb1c6fe4225c8c0cfdac95227f24279f236d754/compressed.tracemonkey-pldi-09.pdf";function c({annotation:t}){return n.jsx("div",{style:{width:"100%",height:"100%",display:"flex",alignItems:"center",justifyContent:"center",background:"rgba(59, 130, 246, 0.9)",borderRadius:"6px",color:"#fff",fontSize:"12px",fontWeight:600,padding:"4px 8px",whiteSpace:"nowrap",boxShadow:"0 2px 8px rgba(0,0,0,0.15)"},children:t.label??"Note"})}function i({annotation:t}){return n.jsx("div",{style:{width:"100%",height:"100%",display:"flex",alignItems:"center",justifyContent:"center",background:"#ef4444",borderRadius:"50%",color:"#fff",fontSize:"11px",fontWeight:700},children:t.label??"1"})}const l=[{id:"tooltip-1",type:"custom",page:1,rect:{x:55,y:400,width:120,height:28},label:"Key finding",render:t=>n.jsx(c,{...t})},{id:"badge-1",type:"custom",page:1,rect:{x:540,y:692,width:24,height:24},label:"1",render:t=>n.jsx(i,{...t})},{id:"badge-2",type:"custom",page:1,rect:{x:540,y:418,width:24,height:24},label:"2",render:t=>n.jsx(i,{...t})},{id:"highlight-1",type:"highlight",page:1,rect:{x:80,y:700,width:450,height:14},label:"Author line highlight"}],F={title:"Components/DocumentViewer/Renderers/PdfViewer/Recipes",component:e,tags:["beta"],args:{src:s,annotations:l,onAnnotationClick:p()},render:t=>n.jsx("div",{style:{height:"600px"},children:n.jsx(e,{...t})}),argTypes:{src:{control:!1},annotations:{control:"object"},onAnnotationClick:{control:!1,table:{category:"Events"}}}},o={parameters:{docs:{source:{code:`function TooltipAnnotation({ annotation }: PdfAnnotationRenderProps) {
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
