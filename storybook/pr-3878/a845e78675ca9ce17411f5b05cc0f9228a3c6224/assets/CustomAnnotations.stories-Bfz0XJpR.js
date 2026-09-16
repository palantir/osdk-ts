import{j as n}from"./iframe-nlmHRzbs.js";import{B as e}from"./BasePdfViewer-DsBWbRSF.js";import"./preload-helper-Bb4XP1JR.js";import"./index-BgU0BklA.js";import"./BasePdfViewer.module.css-DMCfhlY5.js";import"./PdfViewerAnnotationLayer-9MdOyOZp.js";import"./constants-DsXMS3N3.js";import"./usePdfDocument-D7dLXXOf.js";import"./PdfViewerOutlineSidebar-COqmc3NI.js";import"./PdfViewerSidebarHeader-B5C_FrQB.js";import"./useBaseUiId-BvXBgh7R.js";import"./useControlled-CL-2sXEB.js";import"./CompositeRoot-D1o41xJY.js";import"./CompositeItem-DKy9HSNC.js";import"./ToolbarRootContext-C84AlWji.js";import"./composite-9JvUOFhV.js";import"./svgIconContainer-DS8QHuIj.js";import"./PdfViewerSearchBar-BhHhFo40.js";import"./chevron-up-CaxJAPWI.js";import"./chevron-down-DrD3cVw1.js";import"./cross-BQ8TIcPZ.js";import"./PdfViewerSidebar-okxC1aGi.js";import"./index-B9KsoBHZ.js";import"./index-BBKiIpPq.js";import"./index-DrPWGN5f.js";import"./PdfViewerToolbar-CEW2Pprf.js";import"./Button-u5u7l_L-.js";import"./chevron-right-CyA-G3ju.js";import"./Input-C_WMBA0h.js";import"./search-KdHomzFH.js";import"./spin-D7Wos1Dk.js";import"./error-D0sD9myM.js";const{fn:p}=__STORYBOOK_MODULE_TEST__,s="/osdk-ts/storybook/pr-3878/a845e78675ca9ce17411f5b05cc0f9228a3c6224/compressed.tracemonkey-pldi-09.pdf";function c({annotation:t}){return n.jsx("div",{style:{width:"100%",height:"100%",display:"flex",alignItems:"center",justifyContent:"center",background:"rgba(59, 130, 246, 0.9)",borderRadius:"6px",color:"#fff",fontSize:"12px",fontWeight:600,padding:"4px 8px",whiteSpace:"nowrap",boxShadow:"0 2px 8px rgba(0,0,0,0.15)"},children:t.label??"Note"})}function i({annotation:t}){return n.jsx("div",{style:{width:"100%",height:"100%",display:"flex",alignItems:"center",justifyContent:"center",background:"#ef4444",borderRadius:"50%",color:"#fff",fontSize:"11px",fontWeight:700},children:t.label??"1"})}const l=[{id:"tooltip-1",type:"custom",page:1,rect:{x:55,y:400,width:120,height:28},label:"Key finding",render:t=>n.jsx(c,{...t})},{id:"badge-1",type:"custom",page:1,rect:{x:540,y:692,width:24,height:24},label:"1",render:t=>n.jsx(i,{...t})},{id:"badge-2",type:"custom",page:1,rect:{x:540,y:418,width:24,height:24},label:"2",render:t=>n.jsx(i,{...t})},{id:"highlight-1",type:"highlight",page:1,rect:{x:80,y:700,width:450,height:14},label:"Author line highlight"}],F={title:"Components/DocumentViewer/Renderers/PdfViewer/Recipes",component:e,tags:["beta"],args:{src:s,annotations:l,onAnnotationClick:p()},render:t=>n.jsx("div",{style:{height:"600px"},children:n.jsx(e,{...t})}),argTypes:{src:{control:!1},annotations:{control:"object"},onAnnotationClick:{control:!1,table:{category:"Events"}}}},o={parameters:{docs:{source:{code:`function TooltipAnnotation({ annotation }: PdfAnnotationRenderProps) {
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
