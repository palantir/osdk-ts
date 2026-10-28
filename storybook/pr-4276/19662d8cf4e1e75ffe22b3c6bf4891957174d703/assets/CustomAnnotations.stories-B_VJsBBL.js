import{j as n}from"./iframe-CStnt8bf.js";import{B as e}from"./BasePdfViewer-BuWzKMO2.js";import"./preload-helper-BHFu-ydw.js";import"./index-bIM1mjE2.js";import"./BasePdfViewer.module.css-CReFPeB7.js";import"./PdfViewerAnnotationLayer-Dn4uyifR.js";import"./constants-DsXMS3N3.js";import"./usePdfDocument-DgShWaFq.js";import"./PdfViewerOutlineSidebar-CbjmMI7K.js";import"./PdfViewerSidebarHeader-DdovGpqr.js";import"./useBaseUiId-D9TkSWZv.js";import"./useControlled-B4F-euPl.js";import"./CompositeRoot-Blxr2LDg.js";import"./CompositeItem-BdSAWgXI.js";import"./ToolbarRootContext-Dy3DBHgn.js";import"./composite-DIpMeE4S.js";import"./svgIconContainer-CBrsISO6.js";import"./PdfViewerSearchBar-NKcHOw_p.js";import"./chevron-up-DMi2jV1g.js";import"./chevron-down-DP-5q6nZ.js";import"./cross-CzL3ilF7.js";import"./PdfViewerSidebar-zIkHSlsG.js";import"./index-BZfBBfBl.js";import"./index-Dubonfnq.js";import"./index-VT6Dn2OL.js";import"./PdfViewerToolbar-Ddt2JNyz.js";import"./Button-BTOFQ1SZ.js";import"./chevron-right-46xrePg9.js";import"./Input-BxZoPAuB.js";import"./search-BrGXguj5.js";import"./spin-Dn1lcJk7.js";import"./error-CM07sBvh.js";const{fn:p}=__STORYBOOK_MODULE_TEST__,s="/osdk-ts/storybook/pr-4276/19662d8cf4e1e75ffe22b3c6bf4891957174d703/compressed.tracemonkey-pldi-09.pdf";function l({annotation:t}){return n.jsx("div",{style:{width:"100%",height:"100%",display:"flex",alignItems:"center",justifyContent:"center",background:"rgba(59, 130, 246, 0.9)",borderRadius:"6px",color:"#fff",fontSize:"12px",fontWeight:600,padding:"4px 8px",whiteSpace:"nowrap",boxShadow:"0 2px 8px rgba(0,0,0,0.15)"},children:t.label??"Note"})}function i({annotation:t}){return n.jsx("div",{style:{width:"100%",height:"100%",display:"flex",alignItems:"center",justifyContent:"center",background:"#ef4444",borderRadius:"50%",color:"#fff",fontSize:"11px",fontWeight:700},children:t.label??"1"})}const c=[{id:"tooltip-1",type:"custom",page:1,rect:{x:55,y:400,width:120,height:28},label:"Key finding",render:t=>n.jsx(l,{...t})},{id:"badge-1",type:"custom",page:1,rect:{x:540,y:692,width:24,height:24},label:"1",render:t=>n.jsx(i,{...t})},{id:"badge-2",type:"custom",page:1,rect:{x:540,y:418,width:24,height:24},label:"2",render:t=>n.jsx(i,{...t})},{id:"highlight-1",type:"highlight",page:1,rect:{x:80,y:700,width:450,height:14},label:"Author line highlight"}],F={title:"Components/DocumentViewer/Renderers/PdfViewer/Recipes",component:e,tags:["beta"],args:{src:s,annotations:c,onAnnotationClick:p()},render:t=>n.jsx("div",{style:{height:"600px"},children:n.jsx(e,{...t})}),argTypes:{src:{control:!1},annotations:{control:"object"},onAnnotationClick:{control:!1,table:{category:"Events"}}}},o={parameters:{docs:{source:{code:`function TooltipAnnotation({ annotation }: PdfAnnotationRenderProps) {
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
