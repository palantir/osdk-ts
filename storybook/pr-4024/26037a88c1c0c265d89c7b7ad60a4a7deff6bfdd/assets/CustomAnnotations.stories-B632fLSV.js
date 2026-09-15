import{j as n}from"./iframe-aV2EncWj.js";import{B as e}from"./BasePdfViewer-BnQsCww8.js";import"./preload-helper-BEXd_GfO.js";import"./index-DAg7UqCb.js";import"./BasePdfViewer.module.css-1GEEQ9hu.js";import"./PdfViewerAnnotationLayer-CG-6UM8J.js";import"./constants-DsXMS3N3.js";import"./usePdfDocument-CABYRPVD.js";import"./PdfViewerOutlineSidebar-BBniT1D-.js";import"./PdfViewerSidebarHeader-DXENXGzP.js";import"./useBaseUiId-C7CCsH5x.js";import"./useControlled-hdV7mmig.js";import"./CompositeRoot-DD8UAhAQ.js";import"./CompositeItem-DvEec9Z1.js";import"./ToolbarRootContext-C9SuiabC.js";import"./composite-Dq2CI2j-.js";import"./svgIconContainer-BCVXBQ-1.js";import"./PdfViewerSearchBar-Fsa1Dyid.js";import"./chevron-up-DCgzMmiW.js";import"./chevron-down-ZHnmZ23u.js";import"./cross-dxy14_5g.js";import"./PdfViewerSidebar-CbdjcoPI.js";import"./index-C659o23F.js";import"./index-hA2PEeQp.js";import"./index-BfjZxAF2.js";import"./PdfViewerToolbar-Cp8A4AUm.js";import"./Button-D_vltk0m.js";import"./chevron-right-RfuGXSgH.js";import"./Input-DvwYRcaH.js";import"./search-eiqCYccO.js";import"./spin-DsGxr65k.js";import"./error-Bsy631Mv.js";const{fn:p}=__STORYBOOK_MODULE_TEST__,s="/osdk-ts/storybook/pr-4024/26037a88c1c0c265d89c7b7ad60a4a7deff6bfdd/compressed.tracemonkey-pldi-09.pdf";function l({annotation:t}){return n.jsx("div",{style:{width:"100%",height:"100%",display:"flex",alignItems:"center",justifyContent:"center",background:"rgba(59, 130, 246, 0.9)",borderRadius:"6px",color:"#fff",fontSize:"12px",fontWeight:600,padding:"4px 8px",whiteSpace:"nowrap",boxShadow:"0 2px 8px rgba(0,0,0,0.15)"},children:t.label??"Note"})}function i({annotation:t}){return n.jsx("div",{style:{width:"100%",height:"100%",display:"flex",alignItems:"center",justifyContent:"center",background:"#ef4444",borderRadius:"50%",color:"#fff",fontSize:"11px",fontWeight:700},children:t.label??"1"})}const c=[{id:"tooltip-1",type:"custom",page:1,rect:{x:55,y:400,width:120,height:28},label:"Key finding",render:t=>n.jsx(l,{...t})},{id:"badge-1",type:"custom",page:1,rect:{x:540,y:692,width:24,height:24},label:"1",render:t=>n.jsx(i,{...t})},{id:"badge-2",type:"custom",page:1,rect:{x:540,y:418,width:24,height:24},label:"2",render:t=>n.jsx(i,{...t})},{id:"highlight-1",type:"highlight",page:1,rect:{x:80,y:700,width:450,height:14},label:"Author line highlight"}],F={title:"Components/DocumentViewer/Renderers/PdfViewer/Recipes",component:e,tags:["beta"],args:{src:s,annotations:c,onAnnotationClick:p()},render:t=>n.jsx("div",{style:{height:"600px"},children:n.jsx(e,{...t})}),argTypes:{src:{control:!1},annotations:{control:"object"},onAnnotationClick:{control:!1,table:{category:"Events"}}}},o={parameters:{docs:{source:{code:`function TooltipAnnotation({ annotation }: PdfAnnotationRenderProps) {
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
