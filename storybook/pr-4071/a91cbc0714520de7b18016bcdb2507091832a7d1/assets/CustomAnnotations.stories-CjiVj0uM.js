import{j as n}from"./iframe-m0ugFJ_n.js";import{B as e}from"./BasePdfViewer-UBfA__ql.js";import"./preload-helper-KeOwj4qj.js";import"./index-CrjphzT5.js";import"./BasePdfViewer.module.css-DDF5CC6v.js";import"./PdfViewerAnnotationLayer-Do7-N4Rl.js";import"./constants-DsXMS3N3.js";import"./usePdfDocument-kyaLmxIi.js";import"./PdfViewerOutlineSidebar-CAvZHRgU.js";import"./PdfViewerSidebarHeader-CFCsQqLM.js";import"./useBaseUiId-DnAq2IXn.js";import"./useControlled-Cbg37gEr.js";import"./CompositeRoot-DukGxd8t.js";import"./CompositeItem-DwEHzZa4.js";import"./ToolbarRootContext-DuKgQD9s.js";import"./composite-CkzXePM6.js";import"./svgIconContainer-Y7-V7Oui.js";import"./PdfViewerSearchBar-0qrIxgcx.js";import"./chevron-up-B5ukEuhN.js";import"./chevron-down-CRZsF1SF.js";import"./cross-BQwE0Wie.js";import"./PdfViewerSidebar-Bzb2Wnz9.js";import"./index-BchCr8yn.js";import"./index-FGKMGa8g.js";import"./index-Cv1cYxMy.js";import"./PdfViewerToolbar-BmGF9i0D.js";import"./Button-BYPOjnzJ.js";import"./chevron-right-Dg4zizhn.js";import"./Input-BmzIYnaH.js";import"./search-BBD2MUX2.js";import"./spin-ByFgnW5r.js";import"./error-C7YpCdj7.js";const{fn:p}=__STORYBOOK_MODULE_TEST__,s="/osdk-ts/storybook/pr-4071/a91cbc0714520de7b18016bcdb2507091832a7d1/compressed.tracemonkey-pldi-09.pdf";function l({annotation:t}){return n.jsx("div",{style:{width:"100%",height:"100%",display:"flex",alignItems:"center",justifyContent:"center",background:"rgba(59, 130, 246, 0.9)",borderRadius:"6px",color:"#fff",fontSize:"12px",fontWeight:600,padding:"4px 8px",whiteSpace:"nowrap",boxShadow:"0 2px 8px rgba(0,0,0,0.15)"},children:t.label??"Note"})}function i({annotation:t}){return n.jsx("div",{style:{width:"100%",height:"100%",display:"flex",alignItems:"center",justifyContent:"center",background:"#ef4444",borderRadius:"50%",color:"#fff",fontSize:"11px",fontWeight:700},children:t.label??"1"})}const c=[{id:"tooltip-1",type:"custom",page:1,rect:{x:55,y:400,width:120,height:28},label:"Key finding",render:t=>n.jsx(l,{...t})},{id:"badge-1",type:"custom",page:1,rect:{x:540,y:692,width:24,height:24},label:"1",render:t=>n.jsx(i,{...t})},{id:"badge-2",type:"custom",page:1,rect:{x:540,y:418,width:24,height:24},label:"2",render:t=>n.jsx(i,{...t})},{id:"highlight-1",type:"highlight",page:1,rect:{x:80,y:700,width:450,height:14},label:"Author line highlight"}],F={title:"Components/DocumentViewer/Renderers/PdfViewer/Recipes",component:e,tags:["beta"],args:{src:s,annotations:c,onAnnotationClick:p()},render:t=>n.jsx("div",{style:{height:"600px"},children:n.jsx(e,{...t})}),argTypes:{src:{control:!1},annotations:{control:"object"},onAnnotationClick:{control:!1,table:{category:"Events"}}}},o={parameters:{docs:{source:{code:`function TooltipAnnotation({ annotation }: PdfAnnotationRenderProps) {
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
