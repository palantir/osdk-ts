import{j as n}from"./iframe-OTC_SZd0.js";import{B as e}from"./BasePdfViewer-DnY6YTXQ.js";import"./preload-helper-1vGzY75P.js";import"./index-BoJX-ksu.js";import"./BasePdfViewer.module.css-CPzW-JHX.js";import"./PdfViewerAnnotationLayer-gk6VWqCS.js";import"./constants-DsXMS3N3.js";import"./usePdfDocument-DX8rDNgB.js";import"./PdfViewerOutlineSidebar-LkdH2c5q.js";import"./PdfViewerSidebarHeader-CcVE7Mo-.js";import"./useBaseUiId-CX-b-AU2.js";import"./useControlled-VRarZ-1e.js";import"./CompositeRoot-B-8BXpXq.js";import"./CompositeItem-JGQEQxmA.js";import"./ToolbarRootContext-BqVPJrpg.js";import"./composite-DmMBTPuj.js";import"./svgIconContainer-BcCPLcaR.js";import"./PdfViewerSearchBar-oZgfbnf8.js";import"./chevron-up-C2P_UCL2.js";import"./chevron-down-Bq3D3uVm.js";import"./cross-DqMcRqPP.js";import"./PdfViewerSidebar-BIbX1YiK.js";import"./index-D_oKlTjT.js";import"./index-CvsR1t9J.js";import"./index-UWWplry5.js";import"./PdfViewerToolbar-jXfzFTuX.js";import"./Button-Cp-yQ_WA.js";import"./chevron-right-VZ_deazk.js";import"./Input-RoK9jBHN.js";import"./search-CqHOzh_J.js";import"./spin-CpiLQIkE.js";import"./error-DRGNiszN.js";const{fn:p}=__STORYBOOK_MODULE_TEST__,s="/osdk-ts/storybook/pr-4137/b22c80bbb3c10889ce04a2e37861f297bc576380/compressed.tracemonkey-pldi-09.pdf";function l({annotation:t}){return n.jsx("div",{style:{width:"100%",height:"100%",display:"flex",alignItems:"center",justifyContent:"center",background:"rgba(59, 130, 246, 0.9)",borderRadius:"6px",color:"#fff",fontSize:"12px",fontWeight:600,padding:"4px 8px",whiteSpace:"nowrap",boxShadow:"0 2px 8px rgba(0,0,0,0.15)"},children:t.label??"Note"})}function i({annotation:t}){return n.jsx("div",{style:{width:"100%",height:"100%",display:"flex",alignItems:"center",justifyContent:"center",background:"#ef4444",borderRadius:"50%",color:"#fff",fontSize:"11px",fontWeight:700},children:t.label??"1"})}const c=[{id:"tooltip-1",type:"custom",page:1,rect:{x:55,y:400,width:120,height:28},label:"Key finding",render:t=>n.jsx(l,{...t})},{id:"badge-1",type:"custom",page:1,rect:{x:540,y:692,width:24,height:24},label:"1",render:t=>n.jsx(i,{...t})},{id:"badge-2",type:"custom",page:1,rect:{x:540,y:418,width:24,height:24},label:"2",render:t=>n.jsx(i,{...t})},{id:"highlight-1",type:"highlight",page:1,rect:{x:80,y:700,width:450,height:14},label:"Author line highlight"}],F={title:"Components/DocumentViewer/Renderers/PdfViewer/Recipes",component:e,tags:["beta"],args:{src:s,annotations:c,onAnnotationClick:p()},render:t=>n.jsx("div",{style:{height:"600px"},children:n.jsx(e,{...t})}),argTypes:{src:{control:!1},annotations:{control:"object"},onAnnotationClick:{control:!1,table:{category:"Events"}}}},o={parameters:{docs:{source:{code:`function TooltipAnnotation({ annotation }: PdfAnnotationRenderProps) {
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
