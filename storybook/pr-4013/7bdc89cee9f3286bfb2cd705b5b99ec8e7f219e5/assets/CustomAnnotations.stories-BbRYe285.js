import{j as n}from"./iframe-B8NhUX_0.js";import{B as e}from"./BasePdfViewer-BgmzxomI.js";import"./preload-helper-DjGFPnLe.js";import"./index-qsMi88gm.js";import"./BasePdfViewer.module.css-BHCRcCqL.js";import"./PdfViewerAnnotationLayer-DUnRFFxV.js";import"./constants-DsXMS3N3.js";import"./usePdfDocument-BcgPgwJ_.js";import"./PdfViewerOutlineSidebar-By3fHeGi.js";import"./PdfViewerSidebarHeader-Cqa7o8fb.js";import"./useBaseUiId-Cn8iX50p.js";import"./useControlled-Bf5eet3i.js";import"./CompositeRoot-DWiKmzI3.js";import"./CompositeItem-C5ZLF5hx.js";import"./ToolbarRootContext-bf_wSBCX.js";import"./composite-BwIOwpx5.js";import"./svgIconContainer-Bf9SOHJ7.js";import"./PdfViewerSearchBar-CS9QwfhE.js";import"./chevron-up-UPXgI0xV.js";import"./chevron-down-DxRnKcur.js";import"./cross-D9Q-WwoP.js";import"./PdfViewerSidebar-BIavrPGF.js";import"./index-CtzR-IoK.js";import"./index-CQvGYdFy.js";import"./index-DWq__3H-.js";import"./PdfViewerToolbar-Uz7nywgp.js";import"./Button-DNRq2HIP.js";import"./chevron-right-DgVgZa50.js";import"./Input-SBCQtK3z.js";import"./search-BmvHXAW1.js";import"./spin-C69hjpv9.js";import"./error-CPePVciD.js";const{fn:p}=__STORYBOOK_MODULE_TEST__,s="/osdk-ts/storybook/pr-4013/7bdc89cee9f3286bfb2cd705b5b99ec8e7f219e5/compressed.tracemonkey-pldi-09.pdf";function l({annotation:t}){return n.jsx("div",{style:{width:"100%",height:"100%",display:"flex",alignItems:"center",justifyContent:"center",background:"rgba(59, 130, 246, 0.9)",borderRadius:"6px",color:"#fff",fontSize:"12px",fontWeight:600,padding:"4px 8px",whiteSpace:"nowrap",boxShadow:"0 2px 8px rgba(0,0,0,0.15)"},children:t.label??"Note"})}function i({annotation:t}){return n.jsx("div",{style:{width:"100%",height:"100%",display:"flex",alignItems:"center",justifyContent:"center",background:"#ef4444",borderRadius:"50%",color:"#fff",fontSize:"11px",fontWeight:700},children:t.label??"1"})}const c=[{id:"tooltip-1",type:"custom",page:1,rect:{x:55,y:400,width:120,height:28},label:"Key finding",render:t=>n.jsx(l,{...t})},{id:"badge-1",type:"custom",page:1,rect:{x:540,y:692,width:24,height:24},label:"1",render:t=>n.jsx(i,{...t})},{id:"badge-2",type:"custom",page:1,rect:{x:540,y:418,width:24,height:24},label:"2",render:t=>n.jsx(i,{...t})},{id:"highlight-1",type:"highlight",page:1,rect:{x:80,y:700,width:450,height:14},label:"Author line highlight"}],F={title:"Components/DocumentViewer/Renderers/PdfViewer/Recipes",component:e,tags:["beta"],args:{src:s,annotations:c,onAnnotationClick:p()},render:t=>n.jsx("div",{style:{height:"600px"},children:n.jsx(e,{...t})}),argTypes:{src:{control:!1},annotations:{control:"object"},onAnnotationClick:{control:!1,table:{category:"Events"}}}},o={parameters:{docs:{source:{code:`function TooltipAnnotation({ annotation }: PdfAnnotationRenderProps) {
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
