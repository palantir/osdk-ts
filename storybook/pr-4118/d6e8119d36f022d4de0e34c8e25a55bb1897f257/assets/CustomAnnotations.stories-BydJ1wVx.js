import{j as n}from"./iframe-B_S0EqMa.js";import{B as e}from"./BasePdfViewer-BvKzLRyW.js";import"./preload-helper-VT4tRblm.js";import"./index-omwonnY8.js";import"./BasePdfViewer.module.css-BMp8-8Ni.js";import"./PdfViewerAnnotationLayer-DSuGzrjY.js";import"./constants-DsXMS3N3.js";import"./usePdfDocument-D7Mpp98q.js";import"./PdfViewerOutlineSidebar-Ciz0Z9--.js";import"./PdfViewerSidebarHeader-CNuRtO9g.js";import"./useBaseUiId-BlWO7UtN.js";import"./useControlled-HSy2N_AY.js";import"./CompositeRoot-C1wGXlQY.js";import"./CompositeItem-C2Mv02sz.js";import"./ToolbarRootContext-zpUnsunT.js";import"./composite-PIV4lDcc.js";import"./svgIconContainer-D37wr4aE.js";import"./PdfViewerSearchBar-D9KR-1r3.js";import"./chevron-up-GXPV9SW8.js";import"./chevron-down-kik4znnV.js";import"./cross-CQGje-Eb.js";import"./PdfViewerSidebar-B6BEUMtC.js";import"./index-Eadm7kDD.js";import"./index-DIzgx3sP.js";import"./index-b4QG9WWh.js";import"./PdfViewerToolbar-DSuwqjP2.js";import"./Button-Bt2kiQIM.js";import"./chevron-right-CDVlKyce.js";import"./Input-Dc-QK3C6.js";import"./search-B1fKCW94.js";import"./spin-lKvDQ_9x.js";import"./error-BnUCzbEn.js";const{fn:p}=__STORYBOOK_MODULE_TEST__,s="/osdk-ts/storybook/pr-4118/d6e8119d36f022d4de0e34c8e25a55bb1897f257/compressed.tracemonkey-pldi-09.pdf";function l({annotation:t}){return n.jsx("div",{style:{width:"100%",height:"100%",display:"flex",alignItems:"center",justifyContent:"center",background:"rgba(59, 130, 246, 0.9)",borderRadius:"6px",color:"#fff",fontSize:"12px",fontWeight:600,padding:"4px 8px",whiteSpace:"nowrap",boxShadow:"0 2px 8px rgba(0,0,0,0.15)"},children:t.label??"Note"})}function i({annotation:t}){return n.jsx("div",{style:{width:"100%",height:"100%",display:"flex",alignItems:"center",justifyContent:"center",background:"#ef4444",borderRadius:"50%",color:"#fff",fontSize:"11px",fontWeight:700},children:t.label??"1"})}const c=[{id:"tooltip-1",type:"custom",page:1,rect:{x:55,y:400,width:120,height:28},label:"Key finding",render:t=>n.jsx(l,{...t})},{id:"badge-1",type:"custom",page:1,rect:{x:540,y:692,width:24,height:24},label:"1",render:t=>n.jsx(i,{...t})},{id:"badge-2",type:"custom",page:1,rect:{x:540,y:418,width:24,height:24},label:"2",render:t=>n.jsx(i,{...t})},{id:"highlight-1",type:"highlight",page:1,rect:{x:80,y:700,width:450,height:14},label:"Author line highlight"}],F={title:"Components/DocumentViewer/Renderers/PdfViewer/Recipes",component:e,tags:["beta"],args:{src:s,annotations:c,onAnnotationClick:p()},render:t=>n.jsx("div",{style:{height:"600px"},children:n.jsx(e,{...t})}),argTypes:{src:{control:!1},annotations:{control:"object"},onAnnotationClick:{control:!1,table:{category:"Events"}}}},o={parameters:{docs:{source:{code:`function TooltipAnnotation({ annotation }: PdfAnnotationRenderProps) {
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
