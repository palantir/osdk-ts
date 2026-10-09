import{j as n}from"./iframe-BiR0bSaX.js";import{B as e}from"./BasePdfViewer-CZtyStp_.js";import"./preload-helper-CREsIwfv.js";import"./index-D0Rro4ck.js";import"./BasePdfViewer.module.css-DdsG4Cab.js";import"./PdfViewerAnnotationLayer-DWFBoEJY.js";import"./constants-DsXMS3N3.js";import"./usePdfDocument-DZVPOiZQ.js";import"./PdfViewerOutlineSidebar-Cz5-uaB9.js";import"./PdfViewerSidebarHeader-8xtW8atO.js";import"./useBaseUiId-D3ocUoYR.js";import"./useControlled-BCuMNdH3.js";import"./CompositeRoot-DQK_VK1F.js";import"./CompositeItem-yCWRfwkd.js";import"./ToolbarRootContext-DZbYzNul.js";import"./composite-Cg5vG0V3.js";import"./svgIconContainer-DdJYmAvv.js";import"./PdfViewerSearchBar-Czy-B6E7.js";import"./chevron-up-Bc72vOOm.js";import"./chevron-down-wSopSebG.js";import"./cross-gKG73r0q.js";import"./PdfViewerSidebar-C82A6cwM.js";import"./index-Pp8hdIUW.js";import"./index-CwYWk3f5.js";import"./index-CDTZ5otF.js";import"./PdfViewerToolbar-D8AM1UT7.js";import"./Button-BjLfCn0d.js";import"./chevron-right-Cy1b3NWy.js";import"./Input-CR7mkMB4.js";import"./search-BVH0nxuW.js";import"./spin-BkPZHezf.js";import"./error-DI1HaZkw.js";const{fn:p}=__STORYBOOK_MODULE_TEST__,s="/osdk-ts/storybook/pr-4120/1831ae4b163b72af29b5f43fac1a7004cb19a896/compressed.tracemonkey-pldi-09.pdf";function l({annotation:t}){return n.jsx("div",{style:{width:"100%",height:"100%",display:"flex",alignItems:"center",justifyContent:"center",background:"rgba(59, 130, 246, 0.9)",borderRadius:"6px",color:"#fff",fontSize:"12px",fontWeight:600,padding:"4px 8px",whiteSpace:"nowrap",boxShadow:"0 2px 8px rgba(0,0,0,0.15)"},children:t.label??"Note"})}function i({annotation:t}){return n.jsx("div",{style:{width:"100%",height:"100%",display:"flex",alignItems:"center",justifyContent:"center",background:"#ef4444",borderRadius:"50%",color:"#fff",fontSize:"11px",fontWeight:700},children:t.label??"1"})}const c=[{id:"tooltip-1",type:"custom",page:1,rect:{x:55,y:400,width:120,height:28},label:"Key finding",render:t=>n.jsx(l,{...t})},{id:"badge-1",type:"custom",page:1,rect:{x:540,y:692,width:24,height:24},label:"1",render:t=>n.jsx(i,{...t})},{id:"badge-2",type:"custom",page:1,rect:{x:540,y:418,width:24,height:24},label:"2",render:t=>n.jsx(i,{...t})},{id:"highlight-1",type:"highlight",page:1,rect:{x:80,y:700,width:450,height:14},label:"Author line highlight"}],F={title:"Components/DocumentViewer/Renderers/PdfViewer/Recipes",component:e,tags:["beta"],args:{src:s,annotations:c,onAnnotationClick:p()},render:t=>n.jsx("div",{style:{height:"600px"},children:n.jsx(e,{...t})}),argTypes:{src:{control:!1},annotations:{control:"object"},onAnnotationClick:{control:!1,table:{category:"Events"}}}},o={parameters:{docs:{source:{code:`function TooltipAnnotation({ annotation }: PdfAnnotationRenderProps) {
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
