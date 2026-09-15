import{j as n}from"./iframe-Ch3dDQ73.js";import{B as e}from"./BasePdfViewer-Cn42723P.js";import"./preload-helper-Dt5E_MQT.js";import"./index-BPSQkvlq.js";import"./BasePdfViewer.module.css-6FULMMhg.js";import"./PdfViewerAnnotationLayer-B1IGdQmF.js";import"./constants-DsXMS3N3.js";import"./usePdfDocument-CPBh47M2.js";import"./PdfViewerOutlineSidebar-ZcHrSXCl.js";import"./PdfViewerSidebarHeader-DsastW5-.js";import"./useBaseUiId-BuMyPGEd.js";import"./useControlled-Uo30Ht4a.js";import"./CompositeRoot-8Pra9FHT.js";import"./CompositeItem-yRGsM-I0.js";import"./ToolbarRootContext-BL4WdLNX.js";import"./composite-79LVsM0Q.js";import"./svgIconContainer-DsDanRUJ.js";import"./PdfViewerSearchBar-Cym0vQNG.js";import"./chevron-up-dV5G1tRb.js";import"./chevron-down-DtSbmNQ9.js";import"./cross-BwedcRbE.js";import"./PdfViewerSidebar-ByJXTjiq.js";import"./index-BVJ9nyHd.js";import"./index-CJDfC3kZ.js";import"./index-BcAKrfT8.js";import"./PdfViewerToolbar-DklafUMg.js";import"./Button-BdllNL1h.js";import"./chevron-right-BVwaL0V3.js";import"./Input-CyFa-sRf.js";import"./search-Dq24XcYb.js";import"./spin-D2p851ES.js";import"./error-C6gNYlkP.js";const{fn:p}=__STORYBOOK_MODULE_TEST__,s="/osdk-ts/storybook/pr-4014/1fadee7f56b6ae1a4b7eddcc0706b545153d4bcc/compressed.tracemonkey-pldi-09.pdf";function l({annotation:t}){return n.jsx("div",{style:{width:"100%",height:"100%",display:"flex",alignItems:"center",justifyContent:"center",background:"rgba(59, 130, 246, 0.9)",borderRadius:"6px",color:"#fff",fontSize:"12px",fontWeight:600,padding:"4px 8px",whiteSpace:"nowrap",boxShadow:"0 2px 8px rgba(0,0,0,0.15)"},children:t.label??"Note"})}function i({annotation:t}){return n.jsx("div",{style:{width:"100%",height:"100%",display:"flex",alignItems:"center",justifyContent:"center",background:"#ef4444",borderRadius:"50%",color:"#fff",fontSize:"11px",fontWeight:700},children:t.label??"1"})}const c=[{id:"tooltip-1",type:"custom",page:1,rect:{x:55,y:400,width:120,height:28},label:"Key finding",render:t=>n.jsx(l,{...t})},{id:"badge-1",type:"custom",page:1,rect:{x:540,y:692,width:24,height:24},label:"1",render:t=>n.jsx(i,{...t})},{id:"badge-2",type:"custom",page:1,rect:{x:540,y:418,width:24,height:24},label:"2",render:t=>n.jsx(i,{...t})},{id:"highlight-1",type:"highlight",page:1,rect:{x:80,y:700,width:450,height:14},label:"Author line highlight"}],F={title:"Components/DocumentViewer/Renderers/PdfViewer/Recipes",component:e,tags:["beta"],args:{src:s,annotations:c,onAnnotationClick:p()},render:t=>n.jsx("div",{style:{height:"600px"},children:n.jsx(e,{...t})}),argTypes:{src:{control:!1},annotations:{control:"object"},onAnnotationClick:{control:!1,table:{category:"Events"}}}},o={parameters:{docs:{source:{code:`function TooltipAnnotation({ annotation }: PdfAnnotationRenderProps) {
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
