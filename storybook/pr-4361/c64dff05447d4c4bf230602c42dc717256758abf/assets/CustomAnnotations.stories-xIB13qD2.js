import{j as n}from"./iframe-D-NjJf8E.js";import{B as e}from"./BasePdfViewer-obHO1sgj.js";import"./preload-helper-CTOkYOfH.js";import"./index-BfNG9SBg.js";import"./BasePdfViewer.module.css-ChUU7eSL.js";import"./PdfViewerAnnotationLayer-DEDfNB3L.js";import"./constants-DsXMS3N3.js";import"./usePdfDocument-tdZbMwiF.js";import"./PdfViewerOutlineSidebar-DWa5IDCf.js";import"./PdfViewerSidebarHeader-DpcCUSCW.js";import"./useBaseUiId-fJObIM_9.js";import"./useControlled-D1sspD4r.js";import"./CompositeRoot-BRGD-0t1.js";import"./CompositeItem-CnMema5w.js";import"./ToolbarRootContext-CUS2wfRS.js";import"./composite-CYVlE3X-.js";import"./svgIconContainer-CGGP5dln.js";import"./PdfViewerSearchBar-D__MWW-a.js";import"./chevron-up-BlCfNBDw.js";import"./chevron-down-C-c1FjW5.js";import"./cross-CeDP8iYL.js";import"./PdfViewerSidebar-otVOu3Fo.js";import"./index-BgxA68V1.js";import"./index-Xmptx6KB.js";import"./index-CGk_yh5o.js";import"./PdfViewerToolbar-vtlRTIrS.js";import"./Button-B1_GO9AJ.js";import"./chevron-right-yIMTAfXZ.js";import"./Input-Djaz_ktk.js";import"./search-CjsZbzMa.js";import"./spin-m9_rFMyx.js";import"./error-BoBBM1re.js";const{fn:p}=__STORYBOOK_MODULE_TEST__,s="/osdk-ts/storybook/pr-4361/c64dff05447d4c4bf230602c42dc717256758abf/compressed.tracemonkey-pldi-09.pdf";function l({annotation:t}){return n.jsx("div",{style:{width:"100%",height:"100%",display:"flex",alignItems:"center",justifyContent:"center",background:"rgba(59, 130, 246, 0.9)",borderRadius:"6px",color:"#fff",fontSize:"12px",fontWeight:600,padding:"4px 8px",whiteSpace:"nowrap",boxShadow:"0 2px 8px rgba(0,0,0,0.15)"},children:t.label??"Note"})}function i({annotation:t}){return n.jsx("div",{style:{width:"100%",height:"100%",display:"flex",alignItems:"center",justifyContent:"center",background:"#ef4444",borderRadius:"50%",color:"#fff",fontSize:"11px",fontWeight:700},children:t.label??"1"})}const c=[{id:"tooltip-1",type:"custom",page:1,rect:{x:55,y:400,width:120,height:28},label:"Key finding",render:t=>n.jsx(l,{...t})},{id:"badge-1",type:"custom",page:1,rect:{x:540,y:692,width:24,height:24},label:"1",render:t=>n.jsx(i,{...t})},{id:"badge-2",type:"custom",page:1,rect:{x:540,y:418,width:24,height:24},label:"2",render:t=>n.jsx(i,{...t})},{id:"highlight-1",type:"highlight",page:1,rect:{x:80,y:700,width:450,height:14},label:"Author line highlight"}],F={title:"Components/DocumentViewer/Renderers/PdfViewer/Recipes",component:e,tags:["beta"],args:{src:s,annotations:c,onAnnotationClick:p()},render:t=>n.jsx("div",{style:{height:"600px"},children:n.jsx(e,{...t})}),argTypes:{src:{control:!1},annotations:{control:"object"},onAnnotationClick:{control:!1,table:{category:"Events"}}}},o={parameters:{docs:{source:{code:`function TooltipAnnotation({ annotation }: PdfAnnotationRenderProps) {
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
