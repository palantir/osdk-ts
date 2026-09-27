import{j as n}from"./iframe-BjMPQmdZ.js";import{B as e}from"./BasePdfViewer-C9rJCvM3.js";import"./preload-helper-B8Ak4a51.js";import"./index-oZX62iJS.js";import"./BasePdfViewer.module.css-DubpB-Qc.js";import"./PdfViewerAnnotationLayer-BR_1DS17.js";import"./constants-DsXMS3N3.js";import"./usePdfDocument-Dh3Ht-j8.js";import"./PdfViewerOutlineSidebar-CPW4022N.js";import"./PdfViewerSidebarHeader-CmHM0rhM.js";import"./useBaseUiId-D8cmXz0j.js";import"./useControlled-DmP1tMz2.js";import"./CompositeRoot-C3UYeWyY.js";import"./CompositeItem-ejF_MhIC.js";import"./ToolbarRootContext-BJ3LM2Fu.js";import"./composite-CSAWSVfE.js";import"./svgIconContainer-Dwz9d1MN.js";import"./PdfViewerSearchBar-KiudKgKu.js";import"./chevron-up-Db5MztaK.js";import"./chevron-down-IIBkH-oY.js";import"./cross-JpXN3sJS.js";import"./PdfViewerSidebar-DiU9I1JY.js";import"./index-4XbIxfFx.js";import"./index-D9GWSad1.js";import"./index-DtER7TIS.js";import"./PdfViewerToolbar-Cy4DEI2T.js";import"./Button-CZzc-gIr.js";import"./chevron-right-CozP-wxC.js";import"./Input-D7HYNJJj.js";import"./search-D6_fqh0V.js";import"./spin-BF1EzJPc.js";import"./error-BP2V_PLi.js";const{fn:p}=__STORYBOOK_MODULE_TEST__,s="/osdk-ts/storybook/pr-3985/49c8c0d39a7a687ab81501ddc446dd15623345a4/compressed.tracemonkey-pldi-09.pdf";function l({annotation:t}){return n.jsx("div",{style:{width:"100%",height:"100%",display:"flex",alignItems:"center",justifyContent:"center",background:"rgba(59, 130, 246, 0.9)",borderRadius:"6px",color:"#fff",fontSize:"12px",fontWeight:600,padding:"4px 8px",whiteSpace:"nowrap",boxShadow:"0 2px 8px rgba(0,0,0,0.15)"},children:t.label??"Note"})}function i({annotation:t}){return n.jsx("div",{style:{width:"100%",height:"100%",display:"flex",alignItems:"center",justifyContent:"center",background:"#ef4444",borderRadius:"50%",color:"#fff",fontSize:"11px",fontWeight:700},children:t.label??"1"})}const c=[{id:"tooltip-1",type:"custom",page:1,rect:{x:55,y:400,width:120,height:28},label:"Key finding",render:t=>n.jsx(l,{...t})},{id:"badge-1",type:"custom",page:1,rect:{x:540,y:692,width:24,height:24},label:"1",render:t=>n.jsx(i,{...t})},{id:"badge-2",type:"custom",page:1,rect:{x:540,y:418,width:24,height:24},label:"2",render:t=>n.jsx(i,{...t})},{id:"highlight-1",type:"highlight",page:1,rect:{x:80,y:700,width:450,height:14},label:"Author line highlight"}],F={title:"Components/DocumentViewer/Renderers/PdfViewer/Recipes",component:e,tags:["beta"],args:{src:s,annotations:c,onAnnotationClick:p()},render:t=>n.jsx("div",{style:{height:"600px"},children:n.jsx(e,{...t})}),argTypes:{src:{control:!1},annotations:{control:"object"},onAnnotationClick:{control:!1,table:{category:"Events"}}}},o={parameters:{docs:{source:{code:`function TooltipAnnotation({ annotation }: PdfAnnotationRenderProps) {
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
