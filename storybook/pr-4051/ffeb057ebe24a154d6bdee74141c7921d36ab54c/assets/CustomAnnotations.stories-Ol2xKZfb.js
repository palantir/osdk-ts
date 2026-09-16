import{j as n}from"./iframe-CRcSxZM8.js";import{B as e}from"./BasePdfViewer-C4JpmLWB.js";import"./preload-helper-ZugcXPGT.js";import"./index-g1O5dw2n.js";import"./BasePdfViewer.module.css-B3CBFX7a.js";import"./PdfViewerAnnotationLayer-Ce8OeBrp.js";import"./constants-DsXMS3N3.js";import"./usePdfDocument-CyDG8DNg.js";import"./PdfViewerOutlineSidebar-ChvCMCGf.js";import"./PdfViewerSidebarHeader-w64Tg0j5.js";import"./useBaseUiId-CR1J1kR-.js";import"./useControlled-DQ_eI8kZ.js";import"./CompositeRoot-B6o3Go7Y.js";import"./CompositeItem-Bm_HuJxQ.js";import"./ToolbarRootContext-Ca7X_ytn.js";import"./composite-BjyHBRpa.js";import"./svgIconContainer-BqvfQ7m-.js";import"./PdfViewerSearchBar-C5l2mez7.js";import"./chevron-up-CPVZT41c.js";import"./chevron-down-D5oDo9t-.js";import"./cross-C5cQzVwl.js";import"./PdfViewerSidebar-BZAvED8-.js";import"./index-DLIQOwa5.js";import"./index-Xkx1Z8NF.js";import"./index-DYDBkDSv.js";import"./PdfViewerToolbar-BgOjeTUP.js";import"./Button-BJQF3YiE.js";import"./chevron-right-thnABMRM.js";import"./Input-CNRyhWNO.js";import"./search-D6xupaDO.js";import"./spin-tdWuX_NP.js";import"./error-Dn8wlh4f.js";const{fn:p}=__STORYBOOK_MODULE_TEST__,s="/osdk-ts/storybook/pr-4051/ffeb057ebe24a154d6bdee74141c7921d36ab54c/compressed.tracemonkey-pldi-09.pdf";function l({annotation:t}){return n.jsx("div",{style:{width:"100%",height:"100%",display:"flex",alignItems:"center",justifyContent:"center",background:"rgba(59, 130, 246, 0.9)",borderRadius:"6px",color:"#fff",fontSize:"12px",fontWeight:600,padding:"4px 8px",whiteSpace:"nowrap",boxShadow:"0 2px 8px rgba(0,0,0,0.15)"},children:t.label??"Note"})}function i({annotation:t}){return n.jsx("div",{style:{width:"100%",height:"100%",display:"flex",alignItems:"center",justifyContent:"center",background:"#ef4444",borderRadius:"50%",color:"#fff",fontSize:"11px",fontWeight:700},children:t.label??"1"})}const c=[{id:"tooltip-1",type:"custom",page:1,rect:{x:55,y:400,width:120,height:28},label:"Key finding",render:t=>n.jsx(l,{...t})},{id:"badge-1",type:"custom",page:1,rect:{x:540,y:692,width:24,height:24},label:"1",render:t=>n.jsx(i,{...t})},{id:"badge-2",type:"custom",page:1,rect:{x:540,y:418,width:24,height:24},label:"2",render:t=>n.jsx(i,{...t})},{id:"highlight-1",type:"highlight",page:1,rect:{x:80,y:700,width:450,height:14},label:"Author line highlight"}],F={title:"Components/DocumentViewer/Renderers/PdfViewer/Recipes",component:e,tags:["beta"],args:{src:s,annotations:c,onAnnotationClick:p()},render:t=>n.jsx("div",{style:{height:"600px"},children:n.jsx(e,{...t})}),argTypes:{src:{control:!1},annotations:{control:"object"},onAnnotationClick:{control:!1,table:{category:"Events"}}}},o={parameters:{docs:{source:{code:`function TooltipAnnotation({ annotation }: PdfAnnotationRenderProps) {
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
