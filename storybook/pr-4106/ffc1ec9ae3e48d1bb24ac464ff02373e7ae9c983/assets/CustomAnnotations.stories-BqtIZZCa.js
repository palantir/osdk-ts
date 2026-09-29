import{j as n}from"./iframe-DwbDsShL.js";import{B as e}from"./BasePdfViewer-DR9zj0--.js";import"./preload-helper-DhhmyXUk.js";import"./index-BELzmUVs.js";import"./BasePdfViewer.module.css-Cy6WnIeZ.js";import"./PdfViewerAnnotationLayer-DdB8j7FU.js";import"./constants-DsXMS3N3.js";import"./usePdfDocument-B0eDTpft.js";import"./PdfViewerOutlineSidebar-DQAT9Whh.js";import"./PdfViewerSidebarHeader-Csznf6AN.js";import"./useBaseUiId-CKINu-S2.js";import"./useControlled-DY8ufjhO.js";import"./CompositeRoot-8ml9yAPi.js";import"./CompositeItem-DOXgLazM.js";import"./ToolbarRootContext-BPuHUJNX.js";import"./composite-Dplovskw.js";import"./svgIconContainer-xLBfLuAm.js";import"./PdfViewerSearchBar-IhF_83nd.js";import"./chevron-up-hGe-tVgP.js";import"./chevron-down-ckW8ziB1.js";import"./cross-CsyWmC2B.js";import"./PdfViewerSidebar-BARuZJWc.js";import"./index-DZ-Ao651.js";import"./index-DYqy7FgF.js";import"./index-DL-SFPZn.js";import"./PdfViewerToolbar-T6hvnwvN.js";import"./Button-DphpaBib.js";import"./chevron-right-DTs34W3j.js";import"./Input-CMFW6oif.js";import"./search-D1hGu4NI.js";import"./spin-DFTYpsaW.js";import"./error-BJfNfAJx.js";const{fn:p}=__STORYBOOK_MODULE_TEST__,s="/osdk-ts/storybook/pr-4106/ffc1ec9ae3e48d1bb24ac464ff02373e7ae9c983/compressed.tracemonkey-pldi-09.pdf";function l({annotation:t}){return n.jsx("div",{style:{width:"100%",height:"100%",display:"flex",alignItems:"center",justifyContent:"center",background:"rgba(59, 130, 246, 0.9)",borderRadius:"6px",color:"#fff",fontSize:"12px",fontWeight:600,padding:"4px 8px",whiteSpace:"nowrap",boxShadow:"0 2px 8px rgba(0,0,0,0.15)"},children:t.label??"Note"})}function i({annotation:t}){return n.jsx("div",{style:{width:"100%",height:"100%",display:"flex",alignItems:"center",justifyContent:"center",background:"#ef4444",borderRadius:"50%",color:"#fff",fontSize:"11px",fontWeight:700},children:t.label??"1"})}const c=[{id:"tooltip-1",type:"custom",page:1,rect:{x:55,y:400,width:120,height:28},label:"Key finding",render:t=>n.jsx(l,{...t})},{id:"badge-1",type:"custom",page:1,rect:{x:540,y:692,width:24,height:24},label:"1",render:t=>n.jsx(i,{...t})},{id:"badge-2",type:"custom",page:1,rect:{x:540,y:418,width:24,height:24},label:"2",render:t=>n.jsx(i,{...t})},{id:"highlight-1",type:"highlight",page:1,rect:{x:80,y:700,width:450,height:14},label:"Author line highlight"}],F={title:"Components/DocumentViewer/Renderers/PdfViewer/Recipes",component:e,tags:["beta"],args:{src:s,annotations:c,onAnnotationClick:p()},render:t=>n.jsx("div",{style:{height:"600px"},children:n.jsx(e,{...t})}),argTypes:{src:{control:!1},annotations:{control:"object"},onAnnotationClick:{control:!1,table:{category:"Events"}}}},o={parameters:{docs:{source:{code:`function TooltipAnnotation({ annotation }: PdfAnnotationRenderProps) {
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
