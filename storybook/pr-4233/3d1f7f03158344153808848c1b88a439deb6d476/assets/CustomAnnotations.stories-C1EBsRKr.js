import{j as n}from"./iframe-BCqrjcZp.js";import{B as e}from"./BasePdfViewer-D9m874OB.js";import"./preload-helper-IP6Q7Lp8.js";import"./index-D0jlJMeY.js";import"./BasePdfViewer.module.css-DlUK3buA.js";import"./PdfViewerAnnotationLayer-K1bN_Xzn.js";import"./constants-DsXMS3N3.js";import"./usePdfDocument-BfPXyAg3.js";import"./PdfViewerOutlineSidebar-BxuexDA5.js";import"./PdfViewerSidebarHeader-nZjhxwSO.js";import"./useBaseUiId-BHV9sQZt.js";import"./useControlled-Bzb-P5Sw.js";import"./CompositeRoot-PCvE1_W2.js";import"./CompositeItem-CI0_kgLB.js";import"./ToolbarRootContext-gONCPNww.js";import"./composite-D7-rpd9b.js";import"./svgIconContainer-DwsnB4Bh.js";import"./PdfViewerSearchBar-yqNiJLWf.js";import"./chevron-up-CDPM_Mi7.js";import"./chevron-down-ClwDZxr-.js";import"./cross-B5B9w1fn.js";import"./PdfViewerSidebar-CnynYV1z.js";import"./index-C-VgWq2f.js";import"./index-CI0KRk9Y.js";import"./index-i3vQjJLM.js";import"./PdfViewerToolbar-DSl2RMUt.js";import"./Button-u7PTjF0v.js";import"./chevron-right-CeU1UmP2.js";import"./Input-CuKouNDL.js";import"./search-uqqKBKCA.js";import"./spin-CoQW6jbN.js";import"./error--BdktMRw.js";const{fn:p}=__STORYBOOK_MODULE_TEST__,s="/osdk-ts/storybook/pr-4233/3d1f7f03158344153808848c1b88a439deb6d476/compressed.tracemonkey-pldi-09.pdf";function l({annotation:t}){return n.jsx("div",{style:{width:"100%",height:"100%",display:"flex",alignItems:"center",justifyContent:"center",background:"rgba(59, 130, 246, 0.9)",borderRadius:"6px",color:"#fff",fontSize:"12px",fontWeight:600,padding:"4px 8px",whiteSpace:"nowrap",boxShadow:"0 2px 8px rgba(0,0,0,0.15)"},children:t.label??"Note"})}function i({annotation:t}){return n.jsx("div",{style:{width:"100%",height:"100%",display:"flex",alignItems:"center",justifyContent:"center",background:"#ef4444",borderRadius:"50%",color:"#fff",fontSize:"11px",fontWeight:700},children:t.label??"1"})}const c=[{id:"tooltip-1",type:"custom",page:1,rect:{x:55,y:400,width:120,height:28},label:"Key finding",render:t=>n.jsx(l,{...t})},{id:"badge-1",type:"custom",page:1,rect:{x:540,y:692,width:24,height:24},label:"1",render:t=>n.jsx(i,{...t})},{id:"badge-2",type:"custom",page:1,rect:{x:540,y:418,width:24,height:24},label:"2",render:t=>n.jsx(i,{...t})},{id:"highlight-1",type:"highlight",page:1,rect:{x:80,y:700,width:450,height:14},label:"Author line highlight"}],F={title:"Components/DocumentViewer/Renderers/PdfViewer/Recipes",component:e,tags:["beta"],args:{src:s,annotations:c,onAnnotationClick:p()},render:t=>n.jsx("div",{style:{height:"600px"},children:n.jsx(e,{...t})}),argTypes:{src:{control:!1},annotations:{control:"object"},onAnnotationClick:{control:!1,table:{category:"Events"}}}},o={parameters:{docs:{source:{code:`function TooltipAnnotation({ annotation }: PdfAnnotationRenderProps) {
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
