import{j as n}from"./iframe-BCFKBwNO.js";import{B as e}from"./BasePdfViewer-wWHosDXG.js";import"./preload-helper-Brv957vn.js";import"./index-D-Y-JsBx.js";import"./BasePdfViewer.module.css-6CYRExjT.js";import"./PdfViewerAnnotationLayer-BPVulGf2.js";import"./constants-DsXMS3N3.js";import"./usePdfDocument-D3FO-MqQ.js";import"./PdfViewerOutlineSidebar-BLDmX6RZ.js";import"./PdfViewerSidebarHeader-BM0uKTxH.js";import"./useBaseUiId-DhWedzoZ.js";import"./useControlled-BM_Yur5U.js";import"./CompositeRoot-MsMElb_O.js";import"./CompositeItem-DrKg3RCP.js";import"./ToolbarRootContext-BgwM3bO2.js";import"./composite-r28fX4bz.js";import"./svgIconContainer-DJ-tdzCi.js";import"./PdfViewerSearchBar-DKzqhuCY.js";import"./chevron-up-Dt8EL83b.js";import"./chevron-down-815YMHZK.js";import"./cross-COb2-6gb.js";import"./PdfViewerSidebar-DMi3twEt.js";import"./index-DJgWECAA.js";import"./index-RhQjfChg.js";import"./index-CI-GDb84.js";import"./PdfViewerToolbar-BSL8qXIt.js";import"./Button-DgFFjm2U.js";import"./chevron-right-CYO-Lj3c.js";import"./Input-DblIYKZB.js";import"./search-cuvXpLTw.js";import"./spin-BOANWyXx.js";import"./error-DLaayWkN.js";const{fn:p}=__STORYBOOK_MODULE_TEST__,s="/osdk-ts/storybook/pr-4049/3ab48e83a2411d7e9f496d728ff1d38a1b7b2443/compressed.tracemonkey-pldi-09.pdf";function l({annotation:t}){return n.jsx("div",{style:{width:"100%",height:"100%",display:"flex",alignItems:"center",justifyContent:"center",background:"rgba(59, 130, 246, 0.9)",borderRadius:"6px",color:"#fff",fontSize:"12px",fontWeight:600,padding:"4px 8px",whiteSpace:"nowrap",boxShadow:"0 2px 8px rgba(0,0,0,0.15)"},children:t.label??"Note"})}function i({annotation:t}){return n.jsx("div",{style:{width:"100%",height:"100%",display:"flex",alignItems:"center",justifyContent:"center",background:"#ef4444",borderRadius:"50%",color:"#fff",fontSize:"11px",fontWeight:700},children:t.label??"1"})}const c=[{id:"tooltip-1",type:"custom",page:1,rect:{x:55,y:400,width:120,height:28},label:"Key finding",render:t=>n.jsx(l,{...t})},{id:"badge-1",type:"custom",page:1,rect:{x:540,y:692,width:24,height:24},label:"1",render:t=>n.jsx(i,{...t})},{id:"badge-2",type:"custom",page:1,rect:{x:540,y:418,width:24,height:24},label:"2",render:t=>n.jsx(i,{...t})},{id:"highlight-1",type:"highlight",page:1,rect:{x:80,y:700,width:450,height:14},label:"Author line highlight"}],F={title:"Components/DocumentViewer/Renderers/PdfViewer/Recipes",component:e,tags:["beta"],args:{src:s,annotations:c,onAnnotationClick:p()},render:t=>n.jsx("div",{style:{height:"600px"},children:n.jsx(e,{...t})}),argTypes:{src:{control:!1},annotations:{control:"object"},onAnnotationClick:{control:!1,table:{category:"Events"}}}},o={parameters:{docs:{source:{code:`function TooltipAnnotation({ annotation }: PdfAnnotationRenderProps) {
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
