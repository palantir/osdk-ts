import{j as n}from"./iframe-C8SPWzFD.js";import{B as e}from"./BasePdfViewer-sBxUnnIu.js";import"./preload-helper-0-zjDLXH.js";import"./index-CGimpnDA.js";import"./BasePdfViewer.module.css-CLP_5-b6.js";import"./PdfViewerAnnotationLayer-D5bfK2AW.js";import"./constants-DsXMS3N3.js";import"./usePdfDocument-M_JfIEOA.js";import"./PdfViewerOutlineSidebar-Cdok9R4h.js";import"./PdfViewerSidebarHeader-DPQ6NuzU.js";import"./useBaseUiId-C57VmH3J.js";import"./useControlled-Yy6Nm7q-.js";import"./CompositeRoot-COC918y2.js";import"./CompositeItem--Cz5F4Xa.js";import"./ToolbarRootContext-BVFmYY-d.js";import"./composite-DPxUJccb.js";import"./svgIconContainer-B40AAOuO.js";import"./PdfViewerSearchBar-DUIysxM8.js";import"./chevron-up-meoMkqja.js";import"./chevron-down-C45MQu-J.js";import"./cross-yQkVXtk-.js";import"./PdfViewerSidebar-BEN-NUE-.js";import"./index-7TRVPqPj.js";import"./index-VKcShZXo.js";import"./index-BwAo9-Ip.js";import"./PdfViewerToolbar-FuzznwCH.js";import"./Button-BSl9QmF1.js";import"./chevron-right-C33xjtuW.js";import"./Input-B7RJGze7.js";import"./search-bHMR0YBt.js";import"./spin-BNp5bIZE.js";import"./error-B5OE4NvJ.js";const{fn:p}=__STORYBOOK_MODULE_TEST__,s="/osdk-ts/storybook/pr-3772/39bdb49f440f92ffdcf8e906bbeaa2f434a6927b/compressed.tracemonkey-pldi-09.pdf";function l({annotation:t}){return n.jsx("div",{style:{width:"100%",height:"100%",display:"flex",alignItems:"center",justifyContent:"center",background:"rgba(59, 130, 246, 0.9)",borderRadius:"6px",color:"#fff",fontSize:"12px",fontWeight:600,padding:"4px 8px",whiteSpace:"nowrap",boxShadow:"0 2px 8px rgba(0,0,0,0.15)"},children:t.label??"Note"})}function i({annotation:t}){return n.jsx("div",{style:{width:"100%",height:"100%",display:"flex",alignItems:"center",justifyContent:"center",background:"#ef4444",borderRadius:"50%",color:"#fff",fontSize:"11px",fontWeight:700},children:t.label??"1"})}const c=[{id:"tooltip-1",type:"custom",page:1,rect:{x:55,y:400,width:120,height:28},label:"Key finding",render:t=>n.jsx(l,{...t})},{id:"badge-1",type:"custom",page:1,rect:{x:540,y:692,width:24,height:24},label:"1",render:t=>n.jsx(i,{...t})},{id:"badge-2",type:"custom",page:1,rect:{x:540,y:418,width:24,height:24},label:"2",render:t=>n.jsx(i,{...t})},{id:"highlight-1",type:"highlight",page:1,rect:{x:80,y:700,width:450,height:14},label:"Author line highlight"}],F={title:"Components/DocumentViewer/Renderers/PdfViewer/Recipes",component:e,tags:["beta"],args:{src:s,annotations:c,onAnnotationClick:p()},render:t=>n.jsx("div",{style:{height:"600px"},children:n.jsx(e,{...t})}),argTypes:{src:{control:!1},annotations:{control:"object"},onAnnotationClick:{control:!1,table:{category:"Events"}}}},o={parameters:{docs:{source:{code:`function TooltipAnnotation({ annotation }: PdfAnnotationRenderProps) {
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
