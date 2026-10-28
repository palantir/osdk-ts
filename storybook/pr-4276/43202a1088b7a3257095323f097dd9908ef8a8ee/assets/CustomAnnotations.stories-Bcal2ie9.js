import{j as n}from"./iframe-BeH6Kgtk.js";import{B as e}from"./BasePdfViewer-oTCHO3p_.js";import"./preload-helper-DIEhRyUP.js";import"./index-DFSFBHkF.js";import"./BasePdfViewer.module.css-ChUslZbq.js";import"./PdfViewerAnnotationLayer-DkUI_uMp.js";import"./constants-DsXMS3N3.js";import"./usePdfDocument-D6EHTD6Z.js";import"./PdfViewerOutlineSidebar-DaFPsxqA.js";import"./PdfViewerSidebarHeader-77fjVf9i.js";import"./useBaseUiId-CtZE3HDc.js";import"./useControlled-Bdo1gXa6.js";import"./CompositeRoot-D-s14YLf.js";import"./CompositeItem-BFteZ_HC.js";import"./ToolbarRootContext-Dd5p2hpI.js";import"./composite-oEq7yTUS.js";import"./svgIconContainer-Bb-RAJkY.js";import"./PdfViewerSearchBar-CmUbaxGa.js";import"./chevron-up-Ctu-RjXk.js";import"./chevron-down-BQRyOpPG.js";import"./cross-CX4SHNo3.js";import"./PdfViewerSidebar-uvzmD0Sr.js";import"./index-BxZQFTTq.js";import"./index-Bi2hqiVi.js";import"./index-DgDaT3k8.js";import"./PdfViewerToolbar-DlSNM3ay.js";import"./Button-Cy9t27DN.js";import"./chevron-right-Y0e9kbdw.js";import"./Input-RgiEvmaC.js";import"./search-CAOX7A7K.js";import"./spin-CsXXpM1o.js";import"./error-Dyg0hO9Y.js";const{fn:p}=__STORYBOOK_MODULE_TEST__,s="/osdk-ts/storybook/pr-4276/43202a1088b7a3257095323f097dd9908ef8a8ee/compressed.tracemonkey-pldi-09.pdf";function l({annotation:t}){return n.jsx("div",{style:{width:"100%",height:"100%",display:"flex",alignItems:"center",justifyContent:"center",background:"rgba(59, 130, 246, 0.9)",borderRadius:"6px",color:"#fff",fontSize:"12px",fontWeight:600,padding:"4px 8px",whiteSpace:"nowrap",boxShadow:"0 2px 8px rgba(0,0,0,0.15)"},children:t.label??"Note"})}function i({annotation:t}){return n.jsx("div",{style:{width:"100%",height:"100%",display:"flex",alignItems:"center",justifyContent:"center",background:"#ef4444",borderRadius:"50%",color:"#fff",fontSize:"11px",fontWeight:700},children:t.label??"1"})}const c=[{id:"tooltip-1",type:"custom",page:1,rect:{x:55,y:400,width:120,height:28},label:"Key finding",render:t=>n.jsx(l,{...t})},{id:"badge-1",type:"custom",page:1,rect:{x:540,y:692,width:24,height:24},label:"1",render:t=>n.jsx(i,{...t})},{id:"badge-2",type:"custom",page:1,rect:{x:540,y:418,width:24,height:24},label:"2",render:t=>n.jsx(i,{...t})},{id:"highlight-1",type:"highlight",page:1,rect:{x:80,y:700,width:450,height:14},label:"Author line highlight"}],F={title:"Components/DocumentViewer/Renderers/PdfViewer/Recipes",component:e,tags:["beta"],args:{src:s,annotations:c,onAnnotationClick:p()},render:t=>n.jsx("div",{style:{height:"600px"},children:n.jsx(e,{...t})}),argTypes:{src:{control:!1},annotations:{control:"object"},onAnnotationClick:{control:!1,table:{category:"Events"}}}},o={parameters:{docs:{source:{code:`function TooltipAnnotation({ annotation }: PdfAnnotationRenderProps) {
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
