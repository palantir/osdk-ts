import{j as n}from"./iframe-D3lsV3bM.js";import{B as e}from"./BasePdfViewer-Dw4XQpLG.js";import"./preload-helper-B0DSvxC2.js";import"./index-D11sJHPZ.js";import"./BasePdfViewer.module.css-D331TLTP.js";import"./PdfViewerAnnotationLayer-CE28xoJo.js";import"./constants-DsXMS3N3.js";import"./usePdfDocument-BFPDHoNB.js";import"./PdfViewerOutlineSidebar-C1qdxMr8.js";import"./PdfViewerSidebarHeader-CK9GpocM.js";import"./useBaseUiId-6o6e03Dj.js";import"./useControlled-bq-ZFaDd.js";import"./CompositeRoot-DRJCFUeS.js";import"./CompositeItem-DJyMopxi.js";import"./ToolbarRootContext-Bgqyz9vO.js";import"./composite-9R0QeF6F.js";import"./svgIconContainer-DfM6sw_L.js";import"./PdfViewerSearchBar-B060vH3b.js";import"./chevron-up-DPaPf_g6.js";import"./chevron-down-1CFj8X53.js";import"./cross-_tMTONVW.js";import"./PdfViewerSidebar-DzpJFeHB.js";import"./index-Cr0VJDXn.js";import"./index-BLDv51Tl.js";import"./index-Dxb68UZ2.js";import"./PdfViewerToolbar-C_JioBFu.js";import"./Button-DakXe1NE.js";import"./chevron-right-ZZPpKzBb.js";import"./Input-CiqPSABQ.js";import"./search-O4ijEoIs.js";import"./spin-BbRQsUP1.js";import"./error-XRO96CTm.js";const{fn:p}=__STORYBOOK_MODULE_TEST__,s="/osdk-ts/storybook/pr-4251/6b403e0ce30ef03717f8fdff6e449234e8cfbb3b/compressed.tracemonkey-pldi-09.pdf";function l({annotation:t}){return n.jsx("div",{style:{width:"100%",height:"100%",display:"flex",alignItems:"center",justifyContent:"center",background:"rgba(59, 130, 246, 0.9)",borderRadius:"6px",color:"#fff",fontSize:"12px",fontWeight:600,padding:"4px 8px",whiteSpace:"nowrap",boxShadow:"0 2px 8px rgba(0,0,0,0.15)"},children:t.label??"Note"})}function i({annotation:t}){return n.jsx("div",{style:{width:"100%",height:"100%",display:"flex",alignItems:"center",justifyContent:"center",background:"#ef4444",borderRadius:"50%",color:"#fff",fontSize:"11px",fontWeight:700},children:t.label??"1"})}const c=[{id:"tooltip-1",type:"custom",page:1,rect:{x:55,y:400,width:120,height:28},label:"Key finding",render:t=>n.jsx(l,{...t})},{id:"badge-1",type:"custom",page:1,rect:{x:540,y:692,width:24,height:24},label:"1",render:t=>n.jsx(i,{...t})},{id:"badge-2",type:"custom",page:1,rect:{x:540,y:418,width:24,height:24},label:"2",render:t=>n.jsx(i,{...t})},{id:"highlight-1",type:"highlight",page:1,rect:{x:80,y:700,width:450,height:14},label:"Author line highlight"}],F={title:"Components/DocumentViewer/Renderers/PdfViewer/Recipes",component:e,tags:["beta"],args:{src:s,annotations:c,onAnnotationClick:p()},render:t=>n.jsx("div",{style:{height:"600px"},children:n.jsx(e,{...t})}),argTypes:{src:{control:!1},annotations:{control:"object"},onAnnotationClick:{control:!1,table:{category:"Events"}}}},o={parameters:{docs:{source:{code:`function TooltipAnnotation({ annotation }: PdfAnnotationRenderProps) {
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
