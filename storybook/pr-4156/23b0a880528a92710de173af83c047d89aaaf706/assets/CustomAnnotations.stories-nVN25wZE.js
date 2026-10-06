import{j as n}from"./iframe-BJzSfC9S.js";import{B as e}from"./BasePdfViewer-DP-p-oPu.js";import"./preload-helper-C5ZXn0m1.js";import"./index-RBTsKrCd.js";import"./BasePdfViewer.module.css-BsZXsaiZ.js";import"./PdfViewerAnnotationLayer-DHi2IZxN.js";import"./constants-DsXMS3N3.js";import"./usePdfDocument-BCA9ine8.js";import"./PdfViewerOutlineSidebar-CDht62O5.js";import"./PdfViewerSidebarHeader-D9Dbx21S.js";import"./useBaseUiId-xJC8-ZJA.js";import"./useControlled-CHkHsIux.js";import"./CompositeRoot-Cd9Omqiy.js";import"./CompositeItem-Dy9HP9ud.js";import"./ToolbarRootContext-BYj16EhM.js";import"./composite-CJkKobo9.js";import"./svgIconContainer-CuAg_aag.js";import"./PdfViewerSearchBar-B7WeQQzI.js";import"./chevron-up-nezg5COO.js";import"./chevron-down-i7BRJyaV.js";import"./cross-C1sOYIrW.js";import"./PdfViewerSidebar-DGvJyCNJ.js";import"./index-C7z7F6oT.js";import"./index-XpV3If0y.js";import"./index-BJ-crEmJ.js";import"./PdfViewerToolbar-BsfI_01N.js";import"./Button-VqVSA-sW.js";import"./chevron-right-H7UCt0X4.js";import"./Input-DtZovt6p.js";import"./search-BtII_V1C.js";import"./spin-R6EQ7AUo.js";import"./error-B8K_QQqb.js";const{fn:p}=__STORYBOOK_MODULE_TEST__,s="/osdk-ts/storybook/pr-4156/23b0a880528a92710de173af83c047d89aaaf706/compressed.tracemonkey-pldi-09.pdf";function l({annotation:t}){return n.jsx("div",{style:{width:"100%",height:"100%",display:"flex",alignItems:"center",justifyContent:"center",background:"rgba(59, 130, 246, 0.9)",borderRadius:"6px",color:"#fff",fontSize:"12px",fontWeight:600,padding:"4px 8px",whiteSpace:"nowrap",boxShadow:"0 2px 8px rgba(0,0,0,0.15)"},children:t.label??"Note"})}function i({annotation:t}){return n.jsx("div",{style:{width:"100%",height:"100%",display:"flex",alignItems:"center",justifyContent:"center",background:"#ef4444",borderRadius:"50%",color:"#fff",fontSize:"11px",fontWeight:700},children:t.label??"1"})}const c=[{id:"tooltip-1",type:"custom",page:1,rect:{x:55,y:400,width:120,height:28},label:"Key finding",render:t=>n.jsx(l,{...t})},{id:"badge-1",type:"custom",page:1,rect:{x:540,y:692,width:24,height:24},label:"1",render:t=>n.jsx(i,{...t})},{id:"badge-2",type:"custom",page:1,rect:{x:540,y:418,width:24,height:24},label:"2",render:t=>n.jsx(i,{...t})},{id:"highlight-1",type:"highlight",page:1,rect:{x:80,y:700,width:450,height:14},label:"Author line highlight"}],F={title:"Components/DocumentViewer/Renderers/PdfViewer/Recipes",component:e,tags:["beta"],args:{src:s,annotations:c,onAnnotationClick:p()},render:t=>n.jsx("div",{style:{height:"600px"},children:n.jsx(e,{...t})}),argTypes:{src:{control:!1},annotations:{control:"object"},onAnnotationClick:{control:!1,table:{category:"Events"}}}},o={parameters:{docs:{source:{code:`function TooltipAnnotation({ annotation }: PdfAnnotationRenderProps) {
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
