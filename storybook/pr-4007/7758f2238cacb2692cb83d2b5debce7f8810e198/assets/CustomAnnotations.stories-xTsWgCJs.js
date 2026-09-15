import{j as n}from"./iframe-DugxyHXW.js";import{B as e}from"./BasePdfViewer-vutO62i1.js";import"./preload-helper-sKHH7dZZ.js";import"./index-BnymHSBX.js";import"./BasePdfViewer.module.css-CeKEJ1Xq.js";import"./PdfViewerAnnotationLayer-CkR3O93P.js";import"./constants-DsXMS3N3.js";import"./usePdfDocument-CQ9Avfei.js";import"./PdfViewerOutlineSidebar-CjpP1sBu.js";import"./PdfViewerSidebarHeader-CI0iWtV4.js";import"./useBaseUiId-DXSoLqlj.js";import"./useControlled-CrSksIZl.js";import"./CompositeRoot-C2tdVxuj.js";import"./CompositeItem-V75ZZ8Nq.js";import"./ToolbarRootContext-Cl7j9rKh.js";import"./composite-B6PfDTrv.js";import"./svgIconContainer-BhR3_WjC.js";import"./PdfViewerSearchBar-IrCU8C9w.js";import"./chevron-up-BEwplToX.js";import"./chevron-down-BHed8mrw.js";import"./cross-BSDPKBN8.js";import"./PdfViewerSidebar-2VRaqyPm.js";import"./index-BbAAxPka.js";import"./index-DEsgQO2-.js";import"./index-C1eIh-0N.js";import"./PdfViewerToolbar-CSJZAMz1.js";import"./Button-Dr2gNfRq.js";import"./chevron-right-BN4KCm0_.js";import"./Input-D5dfXCf5.js";import"./search-HmVN54vs.js";import"./spin-BtgrrrCG.js";import"./error-DAzclkpO.js";const{fn:p}=__STORYBOOK_MODULE_TEST__,s="/osdk-ts/storybook/pr-4007/7758f2238cacb2692cb83d2b5debce7f8810e198/compressed.tracemonkey-pldi-09.pdf";function l({annotation:t}){return n.jsx("div",{style:{width:"100%",height:"100%",display:"flex",alignItems:"center",justifyContent:"center",background:"rgba(59, 130, 246, 0.9)",borderRadius:"6px",color:"#fff",fontSize:"12px",fontWeight:600,padding:"4px 8px",whiteSpace:"nowrap",boxShadow:"0 2px 8px rgba(0,0,0,0.15)"},children:t.label??"Note"})}function i({annotation:t}){return n.jsx("div",{style:{width:"100%",height:"100%",display:"flex",alignItems:"center",justifyContent:"center",background:"#ef4444",borderRadius:"50%",color:"#fff",fontSize:"11px",fontWeight:700},children:t.label??"1"})}const c=[{id:"tooltip-1",type:"custom",page:1,rect:{x:55,y:400,width:120,height:28},label:"Key finding",render:t=>n.jsx(l,{...t})},{id:"badge-1",type:"custom",page:1,rect:{x:540,y:692,width:24,height:24},label:"1",render:t=>n.jsx(i,{...t})},{id:"badge-2",type:"custom",page:1,rect:{x:540,y:418,width:24,height:24},label:"2",render:t=>n.jsx(i,{...t})},{id:"highlight-1",type:"highlight",page:1,rect:{x:80,y:700,width:450,height:14},label:"Author line highlight"}],F={title:"Components/DocumentViewer/Renderers/PdfViewer/Recipes",component:e,tags:["beta"],args:{src:s,annotations:c,onAnnotationClick:p()},render:t=>n.jsx("div",{style:{height:"600px"},children:n.jsx(e,{...t})}),argTypes:{src:{control:!1},annotations:{control:"object"},onAnnotationClick:{control:!1,table:{category:"Events"}}}},o={parameters:{docs:{source:{code:`function TooltipAnnotation({ annotation }: PdfAnnotationRenderProps) {
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
