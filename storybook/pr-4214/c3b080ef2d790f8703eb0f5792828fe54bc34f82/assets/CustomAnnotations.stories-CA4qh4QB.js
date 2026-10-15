import{j as n}from"./iframe-5HuVSaDQ.js";import{B as e}from"./BasePdfViewer-DNku340Q.js";import"./preload-helper-CfrIZ5Cf.js";import"./index-DjoqjxLj.js";import"./BasePdfViewer.module.css-D6EIBcXR.js";import"./PdfViewerAnnotationLayer-D7k39pb4.js";import"./constants-DsXMS3N3.js";import"./usePdfDocument-zZ8WG6_c.js";import"./PdfViewerOutlineSidebar-CHvAdjfF.js";import"./PdfViewerSidebarHeader-DFb6FefX.js";import"./useBaseUiId-DUhNtAkB.js";import"./useControlled-DSyajAtW.js";import"./CompositeRoot-BQPnNEt3.js";import"./CompositeItem-zoxZc06w.js";import"./ToolbarRootContext-BJk-KcZN.js";import"./composite-BgONfLPA.js";import"./svgIconContainer-CilU-cRt.js";import"./PdfViewerSearchBar-t9Cch7Ic.js";import"./chevron-up-CGkQGkWf.js";import"./chevron-down-DpQjt-J8.js";import"./cross-Fbd8rPWM.js";import"./PdfViewerSidebar-BfYCliCi.js";import"./index-vB4c4Qg2.js";import"./index-HPsAfhDB.js";import"./index--ZjbYOmd.js";import"./PdfViewerToolbar-4KVEWJu6.js";import"./Button-DOSN-M_K.js";import"./chevron-right-DMudzecD.js";import"./Input-LKVNjJW6.js";import"./search-Cj2_GDbi.js";import"./spin-B6ZucWG9.js";import"./error-CMmWSsIq.js";const{fn:p}=__STORYBOOK_MODULE_TEST__,s="/osdk-ts/storybook/pr-4214/c3b080ef2d790f8703eb0f5792828fe54bc34f82/compressed.tracemonkey-pldi-09.pdf";function l({annotation:t}){return n.jsx("div",{style:{width:"100%",height:"100%",display:"flex",alignItems:"center",justifyContent:"center",background:"rgba(59, 130, 246, 0.9)",borderRadius:"6px",color:"#fff",fontSize:"12px",fontWeight:600,padding:"4px 8px",whiteSpace:"nowrap",boxShadow:"0 2px 8px rgba(0,0,0,0.15)"},children:t.label??"Note"})}function i({annotation:t}){return n.jsx("div",{style:{width:"100%",height:"100%",display:"flex",alignItems:"center",justifyContent:"center",background:"#ef4444",borderRadius:"50%",color:"#fff",fontSize:"11px",fontWeight:700},children:t.label??"1"})}const c=[{id:"tooltip-1",type:"custom",page:1,rect:{x:55,y:400,width:120,height:28},label:"Key finding",render:t=>n.jsx(l,{...t})},{id:"badge-1",type:"custom",page:1,rect:{x:540,y:692,width:24,height:24},label:"1",render:t=>n.jsx(i,{...t})},{id:"badge-2",type:"custom",page:1,rect:{x:540,y:418,width:24,height:24},label:"2",render:t=>n.jsx(i,{...t})},{id:"highlight-1",type:"highlight",page:1,rect:{x:80,y:700,width:450,height:14},label:"Author line highlight"}],F={title:"Components/DocumentViewer/Renderers/PdfViewer/Recipes",component:e,tags:["beta"],args:{src:s,annotations:c,onAnnotationClick:p()},render:t=>n.jsx("div",{style:{height:"600px"},children:n.jsx(e,{...t})}),argTypes:{src:{control:!1},annotations:{control:"object"},onAnnotationClick:{control:!1,table:{category:"Events"}}}},o={parameters:{docs:{source:{code:`function TooltipAnnotation({ annotation }: PdfAnnotationRenderProps) {
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
