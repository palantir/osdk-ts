import{j as n}from"./iframe-DcblcpsD.js";import{B as e}from"./BasePdfViewer-CVDFjcqq.js";import"./preload-helper-D_wMhyaD.js";import"./index-7ach3CvX.js";import"./BasePdfViewer.module.css-CD6GOI9G.js";import"./PdfViewerAnnotationLayer-CXHNofmB.js";import"./constants-DsXMS3N3.js";import"./usePdfDocument-FDLV_wxo.js";import"./PdfViewerOutlineSidebar-COzH1V2Z.js";import"./PdfViewerSidebarHeader-B3aiqo6S.js";import"./useBaseUiId-kDJ62DAx.js";import"./useControlled-i2WyCNOr.js";import"./CompositeRoot-DsNLUUbX.js";import"./CompositeItem-BDLcpoAw.js";import"./ToolbarRootContext-DePr5kCC.js";import"./composite-C6NGEWFA.js";import"./svgIconContainer-BNnsBEK2.js";import"./PdfViewerSearchBar-CSoBR6t6.js";import"./chevron-up-BTQdR-nu.js";import"./chevron-down-CzYSE9_L.js";import"./cross-BsrNuqdH.js";import"./PdfViewerSidebar-BnjwpfId.js";import"./index-DjzvDUKT.js";import"./index-5vhpnJCd.js";import"./index-Dyr0XLHo.js";import"./PdfViewerToolbar-DfKQn5vk.js";import"./Button-BDRb-Pkx.js";import"./chevron-right-Bwp-BU1o.js";import"./Input-DFCeqSqF.js";import"./search-DNqBvZq5.js";import"./spin-mwSqoZ4x.js";import"./error-CKNR4CvZ.js";const{fn:p}=__STORYBOOK_MODULE_TEST__,s="/osdk-ts/storybook/pr-4326/88431fe57b115a534ba70fbe03b70e8de27256ce/compressed.tracemonkey-pldi-09.pdf";function l({annotation:t}){return n.jsx("div",{style:{width:"100%",height:"100%",display:"flex",alignItems:"center",justifyContent:"center",background:"rgba(59, 130, 246, 0.9)",borderRadius:"6px",color:"#fff",fontSize:"12px",fontWeight:600,padding:"4px 8px",whiteSpace:"nowrap",boxShadow:"0 2px 8px rgba(0,0,0,0.15)"},children:t.label??"Note"})}function i({annotation:t}){return n.jsx("div",{style:{width:"100%",height:"100%",display:"flex",alignItems:"center",justifyContent:"center",background:"#ef4444",borderRadius:"50%",color:"#fff",fontSize:"11px",fontWeight:700},children:t.label??"1"})}const c=[{id:"tooltip-1",type:"custom",page:1,rect:{x:55,y:400,width:120,height:28},label:"Key finding",render:t=>n.jsx(l,{...t})},{id:"badge-1",type:"custom",page:1,rect:{x:540,y:692,width:24,height:24},label:"1",render:t=>n.jsx(i,{...t})},{id:"badge-2",type:"custom",page:1,rect:{x:540,y:418,width:24,height:24},label:"2",render:t=>n.jsx(i,{...t})},{id:"highlight-1",type:"highlight",page:1,rect:{x:80,y:700,width:450,height:14},label:"Author line highlight"}],F={title:"Components/DocumentViewer/Renderers/PdfViewer/Recipes",component:e,tags:["beta"],args:{src:s,annotations:c,onAnnotationClick:p()},render:t=>n.jsx("div",{style:{height:"600px"},children:n.jsx(e,{...t})}),argTypes:{src:{control:!1},annotations:{control:"object"},onAnnotationClick:{control:!1,table:{category:"Events"}}}},o={parameters:{docs:{source:{code:`function TooltipAnnotation({ annotation }: PdfAnnotationRenderProps) {
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
