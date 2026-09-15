import{j as n}from"./iframe-DSG-Gahl.js";import{B as e}from"./BasePdfViewer-BUODFIKz.js";import"./preload-helper-DD3-CUB8.js";import"./index-4o4hAzg4.js";import"./BasePdfViewer.module.css-CGVOyQ24.js";import"./PdfViewerAnnotationLayer-BFZLsdHu.js";import"./constants-DsXMS3N3.js";import"./usePdfDocument-CMTZgWGk.js";import"./PdfViewerOutlineSidebar-Dq9gEF4d.js";import"./PdfViewerSidebarHeader-CKAxZ4tS.js";import"./useBaseUiId-Br7wSVRu.js";import"./useControlled-BS70aI_K.js";import"./CompositeRoot-CgYyjO2Y.js";import"./CompositeItem-spSeCvAe.js";import"./ToolbarRootContext-B8oHTFsm.js";import"./composite-WUh_Mv2U.js";import"./svgIconContainer-CkL2iDb7.js";import"./PdfViewerSearchBar-Bogp-SsP.js";import"./chevron-up-X8KdYBdz.js";import"./chevron-down-CBanfjsL.js";import"./cross-DzIvG2rT.js";import"./PdfViewerSidebar-BVYp-ZAy.js";import"./index-DaTFX0DM.js";import"./index-BRRswYIi.js";import"./index-CphGNIJN.js";import"./PdfViewerToolbar-Br_DOhy9.js";import"./Button-DCXgUJWi.js";import"./chevron-right-79cxlVoK.js";import"./Input-DBWCKen9.js";import"./search-Cif2ZQOV.js";import"./spin-RSaZfQpk.js";import"./error-DgA6RGKH.js";const{fn:p}=__STORYBOOK_MODULE_TEST__,s="/osdk-ts/storybook/pr-4024/35d830bca29337f678ebb9be711a0feb1b72f9b5/compressed.tracemonkey-pldi-09.pdf";function l({annotation:t}){return n.jsx("div",{style:{width:"100%",height:"100%",display:"flex",alignItems:"center",justifyContent:"center",background:"rgba(59, 130, 246, 0.9)",borderRadius:"6px",color:"#fff",fontSize:"12px",fontWeight:600,padding:"4px 8px",whiteSpace:"nowrap",boxShadow:"0 2px 8px rgba(0,0,0,0.15)"},children:t.label??"Note"})}function i({annotation:t}){return n.jsx("div",{style:{width:"100%",height:"100%",display:"flex",alignItems:"center",justifyContent:"center",background:"#ef4444",borderRadius:"50%",color:"#fff",fontSize:"11px",fontWeight:700},children:t.label??"1"})}const c=[{id:"tooltip-1",type:"custom",page:1,rect:{x:55,y:400,width:120,height:28},label:"Key finding",render:t=>n.jsx(l,{...t})},{id:"badge-1",type:"custom",page:1,rect:{x:540,y:692,width:24,height:24},label:"1",render:t=>n.jsx(i,{...t})},{id:"badge-2",type:"custom",page:1,rect:{x:540,y:418,width:24,height:24},label:"2",render:t=>n.jsx(i,{...t})},{id:"highlight-1",type:"highlight",page:1,rect:{x:80,y:700,width:450,height:14},label:"Author line highlight"}],F={title:"Components/DocumentViewer/Renderers/PdfViewer/Recipes",component:e,tags:["beta"],args:{src:s,annotations:c,onAnnotationClick:p()},render:t=>n.jsx("div",{style:{height:"600px"},children:n.jsx(e,{...t})}),argTypes:{src:{control:!1},annotations:{control:"object"},onAnnotationClick:{control:!1,table:{category:"Events"}}}},o={parameters:{docs:{source:{code:`function TooltipAnnotation({ annotation }: PdfAnnotationRenderProps) {
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
