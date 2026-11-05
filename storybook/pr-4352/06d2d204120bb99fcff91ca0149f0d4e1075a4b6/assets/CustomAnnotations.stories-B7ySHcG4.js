import{j as n}from"./iframe-w4y9aXDU.js";import{B as e}from"./BasePdfViewer-CyUXN1hS.js";import"./preload-helper-CnLs-Hgu.js";import"./index-Dt7u2oHj.js";import"./BasePdfViewer.module.css-CnmDJvpk.js";import"./PdfViewerAnnotationLayer-COKYePTo.js";import"./constants-DsXMS3N3.js";import"./usePdfDocument-BLr9oLaY.js";import"./PdfViewerOutlineSidebar-B7rPiVGz.js";import"./PdfViewerSidebarHeader-tFT7mkTa.js";import"./useBaseUiId-F1YYLfsj.js";import"./useControlled-C9ba4gpK.js";import"./CompositeRoot-Bdprc0c4.js";import"./CompositeItem-Cd8pgrRU.js";import"./ToolbarRootContext-D5jHJ_gp.js";import"./composite-B-RTr01b.js";import"./svgIconContainer-CmEhYz6E.js";import"./PdfViewerSearchBar-D3eso_Ak.js";import"./chevron-up-Cfyb7AwB.js";import"./chevron-down-BBcbr8vg.js";import"./cross-DXnz5KvW.js";import"./PdfViewerSidebar-D2EvOxsh.js";import"./index-OXOrABe5.js";import"./index-BIFcK0O4.js";import"./index-B0uCtLgl.js";import"./PdfViewerToolbar-G8smPmre.js";import"./Button-o-glHusr.js";import"./chevron-right-D7ExiVC-.js";import"./Input-O7Y8xsdh.js";import"./search-Cp34eK_v.js";import"./spin-CyDi2Dzc.js";import"./error-8BgSEFU8.js";const{fn:p}=__STORYBOOK_MODULE_TEST__,s="/osdk-ts/storybook/pr-4352/06d2d204120bb99fcff91ca0149f0d4e1075a4b6/compressed.tracemonkey-pldi-09.pdf";function l({annotation:t}){return n.jsx("div",{style:{width:"100%",height:"100%",display:"flex",alignItems:"center",justifyContent:"center",background:"rgba(59, 130, 246, 0.9)",borderRadius:"6px",color:"#fff",fontSize:"12px",fontWeight:600,padding:"4px 8px",whiteSpace:"nowrap",boxShadow:"0 2px 8px rgba(0,0,0,0.15)"},children:t.label??"Note"})}function i({annotation:t}){return n.jsx("div",{style:{width:"100%",height:"100%",display:"flex",alignItems:"center",justifyContent:"center",background:"#ef4444",borderRadius:"50%",color:"#fff",fontSize:"11px",fontWeight:700},children:t.label??"1"})}const c=[{id:"tooltip-1",type:"custom",page:1,rect:{x:55,y:400,width:120,height:28},label:"Key finding",render:t=>n.jsx(l,{...t})},{id:"badge-1",type:"custom",page:1,rect:{x:540,y:692,width:24,height:24},label:"1",render:t=>n.jsx(i,{...t})},{id:"badge-2",type:"custom",page:1,rect:{x:540,y:418,width:24,height:24},label:"2",render:t=>n.jsx(i,{...t})},{id:"highlight-1",type:"highlight",page:1,rect:{x:80,y:700,width:450,height:14},label:"Author line highlight"}],F={title:"Components/DocumentViewer/Renderers/PdfViewer/Recipes",component:e,tags:["beta"],args:{src:s,annotations:c,onAnnotationClick:p()},render:t=>n.jsx("div",{style:{height:"600px"},children:n.jsx(e,{...t})}),argTypes:{src:{control:!1},annotations:{control:"object"},onAnnotationClick:{control:!1,table:{category:"Events"}}}},o={parameters:{docs:{source:{code:`function TooltipAnnotation({ annotation }: PdfAnnotationRenderProps) {
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
