import{j as n}from"./iframe-DIQwlBGw.js";import{B as e}from"./BasePdfViewer-BX1IBjM3.js";import"./preload-helper-DCZh2qZU.js";import"./index-BMg1YwPI.js";import"./BasePdfViewer.module.css-SuqZPPzk.js";import"./PdfViewerAnnotationLayer-C9OI_oVN.js";import"./constants-DsXMS3N3.js";import"./usePdfDocument--Pbe85Rv.js";import"./PdfViewerOutlineSidebar-0i4772Ci.js";import"./PdfViewerSidebarHeader-ptjqiGZT.js";import"./useBaseUiId-mRekfqkE.js";import"./useControlled-CIA12Xby.js";import"./CompositeRoot-DinkaM13.js";import"./CompositeItem-D6nOF9ZG.js";import"./ToolbarRootContext-D5pzp3U-.js";import"./composite-B2M76Ume.js";import"./svgIconContainer-nWXxjIgM.js";import"./PdfViewerSearchBar-BICWKBwH.js";import"./chevron-up-Dxk9HDhi.js";import"./chevron-down-Be7rb41D.js";import"./cross-D0qgRA8s.js";import"./PdfViewerSidebar-DS_Ea1OX.js";import"./index-DjZsV1fi.js";import"./index-DtMGyB9I.js";import"./index-BuSKlV2e.js";import"./PdfViewerToolbar-CidIjp8K.js";import"./Button-VL7ULnuX.js";import"./chevron-right-BY_M_5fb.js";import"./Input-BemJFGwg.js";import"./search-Tzmhdcy6.js";import"./spin-vkD_HgOI.js";import"./error-Bhb1P9AB.js";const{fn:p}=__STORYBOOK_MODULE_TEST__,s="/osdk-ts/storybook/pr-4202/1950e2f8cbfa7ae635e8e1c5b679aad7a49a4aae/compressed.tracemonkey-pldi-09.pdf";function l({annotation:t}){return n.jsx("div",{style:{width:"100%",height:"100%",display:"flex",alignItems:"center",justifyContent:"center",background:"rgba(59, 130, 246, 0.9)",borderRadius:"6px",color:"#fff",fontSize:"12px",fontWeight:600,padding:"4px 8px",whiteSpace:"nowrap",boxShadow:"0 2px 8px rgba(0,0,0,0.15)"},children:t.label??"Note"})}function i({annotation:t}){return n.jsx("div",{style:{width:"100%",height:"100%",display:"flex",alignItems:"center",justifyContent:"center",background:"#ef4444",borderRadius:"50%",color:"#fff",fontSize:"11px",fontWeight:700},children:t.label??"1"})}const c=[{id:"tooltip-1",type:"custom",page:1,rect:{x:55,y:400,width:120,height:28},label:"Key finding",render:t=>n.jsx(l,{...t})},{id:"badge-1",type:"custom",page:1,rect:{x:540,y:692,width:24,height:24},label:"1",render:t=>n.jsx(i,{...t})},{id:"badge-2",type:"custom",page:1,rect:{x:540,y:418,width:24,height:24},label:"2",render:t=>n.jsx(i,{...t})},{id:"highlight-1",type:"highlight",page:1,rect:{x:80,y:700,width:450,height:14},label:"Author line highlight"}],F={title:"Components/DocumentViewer/Renderers/PdfViewer/Recipes",component:e,tags:["beta"],args:{src:s,annotations:c,onAnnotationClick:p()},render:t=>n.jsx("div",{style:{height:"600px"},children:n.jsx(e,{...t})}),argTypes:{src:{control:!1},annotations:{control:"object"},onAnnotationClick:{control:!1,table:{category:"Events"}}}},o={parameters:{docs:{source:{code:`function TooltipAnnotation({ annotation }: PdfAnnotationRenderProps) {
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
