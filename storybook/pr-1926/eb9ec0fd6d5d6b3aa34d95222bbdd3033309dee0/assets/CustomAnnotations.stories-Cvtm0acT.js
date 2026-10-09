import{j as n}from"./iframe-1dJaCYlm.js";import{B as e}from"./BasePdfViewer-lervRrTZ.js";import"./preload-helper-DxSOn4L7.js";import"./index-B5nbKv82.js";import"./BasePdfViewer.module.css-Bz1LyrS6.js";import"./PdfViewerAnnotationLayer-B-UFOgqE.js";import"./constants-DsXMS3N3.js";import"./usePdfDocument-DR8VHzes.js";import"./PdfViewerOutlineSidebar-Ba7B1VGb.js";import"./PdfViewerSidebarHeader-DuIsngII.js";import"./useBaseUiId-C4uZnOHm.js";import"./useControlled-CHSiaIM9.js";import"./CompositeRoot-BEQKaFyv.js";import"./CompositeItem-C0Th2oHB.js";import"./ToolbarRootContext-Ztq9_6cI.js";import"./composite-L8QPO2DT.js";import"./svgIconContainer-BHSx6W0Z.js";import"./PdfViewerSearchBar-BdGjtUeu.js";import"./chevron-up-BxuEZMzO.js";import"./chevron-down-CFBQ0zoB.js";import"./cross-YjWLpu8J.js";import"./PdfViewerSidebar-RXBUUPy7.js";import"./index-DIXb6m2-.js";import"./index-BTsOhHh-.js";import"./index-DWMe-xRS.js";import"./PdfViewerToolbar-KVy4NaR-.js";import"./Button-C4vq1MKj.js";import"./chevron-right-da8Cy_8w.js";import"./Input-CIfB9akU.js";import"./search-BkPLkzDr.js";import"./spin-BwFbUcx5.js";import"./error-BHBv4jub.js";const{fn:p}=__STORYBOOK_MODULE_TEST__,s="/osdk-ts/storybook/pr-1926/eb9ec0fd6d5d6b3aa34d95222bbdd3033309dee0/compressed.tracemonkey-pldi-09.pdf";function l({annotation:t}){return n.jsx("div",{style:{width:"100%",height:"100%",display:"flex",alignItems:"center",justifyContent:"center",background:"rgba(59, 130, 246, 0.9)",borderRadius:"6px",color:"#fff",fontSize:"12px",fontWeight:600,padding:"4px 8px",whiteSpace:"nowrap",boxShadow:"0 2px 8px rgba(0,0,0,0.15)"},children:t.label??"Note"})}function i({annotation:t}){return n.jsx("div",{style:{width:"100%",height:"100%",display:"flex",alignItems:"center",justifyContent:"center",background:"#ef4444",borderRadius:"50%",color:"#fff",fontSize:"11px",fontWeight:700},children:t.label??"1"})}const c=[{id:"tooltip-1",type:"custom",page:1,rect:{x:55,y:400,width:120,height:28},label:"Key finding",render:t=>n.jsx(l,{...t})},{id:"badge-1",type:"custom",page:1,rect:{x:540,y:692,width:24,height:24},label:"1",render:t=>n.jsx(i,{...t})},{id:"badge-2",type:"custom",page:1,rect:{x:540,y:418,width:24,height:24},label:"2",render:t=>n.jsx(i,{...t})},{id:"highlight-1",type:"highlight",page:1,rect:{x:80,y:700,width:450,height:14},label:"Author line highlight"}],F={title:"Components/DocumentViewer/Renderers/PdfViewer/Recipes",component:e,tags:["beta"],args:{src:s,annotations:c,onAnnotationClick:p()},render:t=>n.jsx("div",{style:{height:"600px"},children:n.jsx(e,{...t})}),argTypes:{src:{control:!1},annotations:{control:"object"},onAnnotationClick:{control:!1,table:{category:"Events"}}}},o={parameters:{docs:{source:{code:`function TooltipAnnotation({ annotation }: PdfAnnotationRenderProps) {
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
