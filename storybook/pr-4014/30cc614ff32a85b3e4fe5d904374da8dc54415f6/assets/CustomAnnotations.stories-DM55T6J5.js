import{j as n}from"./iframe-IYYJd2m9.js";import{B as e}from"./BasePdfViewer-DwZOCN-b.js";import"./preload-helper-BFRTU8XL.js";import"./index-Db-eG3LN.js";import"./BasePdfViewer.module.css-T1-R67F0.js";import"./PdfViewerAnnotationLayer-Cs7SPVn-.js";import"./constants-DsXMS3N3.js";import"./usePdfDocument-By3eCv-8.js";import"./PdfViewerOutlineSidebar-C02zn7ad.js";import"./PdfViewerSidebarHeader-DbyhuPbL.js";import"./useBaseUiId-gMGlPD7U.js";import"./useControlled-2w2YfNvU.js";import"./CompositeRoot-DgVuP1d7.js";import"./CompositeItem-B-bfj5TP.js";import"./ToolbarRootContext-CFnhaKDy.js";import"./composite-CvcKSveb.js";import"./svgIconContainer-B0Zw0e2B.js";import"./PdfViewerSearchBar-YN1Wru-X.js";import"./chevron-up-Cay2t7o7.js";import"./chevron-down-B1MpC4Hz.js";import"./cross-KJA2o58Q.js";import"./PdfViewerSidebar-DSUSCETH.js";import"./index-DsFI9coQ.js";import"./index-DKHKGVOU.js";import"./index-DAnfA0in.js";import"./PdfViewerToolbar-DvXUTSv8.js";import"./Button-DQEdYpKK.js";import"./chevron-right-CKfH5Q3O.js";import"./Input-0frZHORa.js";import"./search-CUDcYcS5.js";import"./spin-BVdt3qGk.js";import"./error-B-Yx8VFp.js";const{fn:p}=__STORYBOOK_MODULE_TEST__,s="/osdk-ts/storybook/pr-4014/30cc614ff32a85b3e4fe5d904374da8dc54415f6/compressed.tracemonkey-pldi-09.pdf";function l({annotation:t}){return n.jsx("div",{style:{width:"100%",height:"100%",display:"flex",alignItems:"center",justifyContent:"center",background:"rgba(59, 130, 246, 0.9)",borderRadius:"6px",color:"#fff",fontSize:"12px",fontWeight:600,padding:"4px 8px",whiteSpace:"nowrap",boxShadow:"0 2px 8px rgba(0,0,0,0.15)"},children:t.label??"Note"})}function i({annotation:t}){return n.jsx("div",{style:{width:"100%",height:"100%",display:"flex",alignItems:"center",justifyContent:"center",background:"#ef4444",borderRadius:"50%",color:"#fff",fontSize:"11px",fontWeight:700},children:t.label??"1"})}const c=[{id:"tooltip-1",type:"custom",page:1,rect:{x:55,y:400,width:120,height:28},label:"Key finding",render:t=>n.jsx(l,{...t})},{id:"badge-1",type:"custom",page:1,rect:{x:540,y:692,width:24,height:24},label:"1",render:t=>n.jsx(i,{...t})},{id:"badge-2",type:"custom",page:1,rect:{x:540,y:418,width:24,height:24},label:"2",render:t=>n.jsx(i,{...t})},{id:"highlight-1",type:"highlight",page:1,rect:{x:80,y:700,width:450,height:14},label:"Author line highlight"}],F={title:"Components/DocumentViewer/Renderers/PdfViewer/Recipes",component:e,tags:["beta"],args:{src:s,annotations:c,onAnnotationClick:p()},render:t=>n.jsx("div",{style:{height:"600px"},children:n.jsx(e,{...t})}),argTypes:{src:{control:!1},annotations:{control:"object"},onAnnotationClick:{control:!1,table:{category:"Events"}}}},o={parameters:{docs:{source:{code:`function TooltipAnnotation({ annotation }: PdfAnnotationRenderProps) {
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
