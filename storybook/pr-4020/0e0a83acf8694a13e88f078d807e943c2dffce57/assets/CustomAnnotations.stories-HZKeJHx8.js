import{j as n}from"./iframe-t6gOiOpP.js";import{B as e}from"./BasePdfViewer-DwdDXEom.js";import"./preload-helper-CV5pzfbJ.js";import"./index-B8f3749n.js";import"./BasePdfViewer.module.css-BzhlJOTX.js";import"./PdfViewerAnnotationLayer-B7Rtecib.js";import"./constants-DsXMS3N3.js";import"./usePdfDocument-CUtL7KE-.js";import"./PdfViewerOutlineSidebar-B73BuUpG.js";import"./PdfViewerSidebarHeader-YuTmCq6S.js";import"./useBaseUiId-D0UWHXkS.js";import"./useControlled-BZFiwdLD.js";import"./CompositeRoot-BEpYd6BS.js";import"./CompositeItem-BYApWBRb.js";import"./ToolbarRootContext-DZ6RrQxV.js";import"./composite-CFO_COst.js";import"./svgIconContainer-B5Lj2eIE.js";import"./PdfViewerSearchBar-CbZeRF5L.js";import"./chevron-up-CcFOAH3K.js";import"./chevron-down-DJ9UCW_x.js";import"./cross-DD5o22Zb.js";import"./PdfViewerSidebar-Dbf65Yuk.js";import"./index-Dqwb4kGz.js";import"./index-DaGdI8vt.js";import"./index-8kYg-C7M.js";import"./PdfViewerToolbar-Co6P_7nX.js";import"./Button-CSkSEq0A.js";import"./chevron-right-BZ-o4s1o.js";import"./Input-DFrbhTU8.js";import"./search-DBk5UsI-.js";import"./spin-DCPBLHX3.js";import"./error-CgIajBJj.js";const{fn:p}=__STORYBOOK_MODULE_TEST__,s="/osdk-ts/storybook/pr-4020/0e0a83acf8694a13e88f078d807e943c2dffce57/compressed.tracemonkey-pldi-09.pdf";function l({annotation:t}){return n.jsx("div",{style:{width:"100%",height:"100%",display:"flex",alignItems:"center",justifyContent:"center",background:"rgba(59, 130, 246, 0.9)",borderRadius:"6px",color:"#fff",fontSize:"12px",fontWeight:600,padding:"4px 8px",whiteSpace:"nowrap",boxShadow:"0 2px 8px rgba(0,0,0,0.15)"},children:t.label??"Note"})}function i({annotation:t}){return n.jsx("div",{style:{width:"100%",height:"100%",display:"flex",alignItems:"center",justifyContent:"center",background:"#ef4444",borderRadius:"50%",color:"#fff",fontSize:"11px",fontWeight:700},children:t.label??"1"})}const c=[{id:"tooltip-1",type:"custom",page:1,rect:{x:55,y:400,width:120,height:28},label:"Key finding",render:t=>n.jsx(l,{...t})},{id:"badge-1",type:"custom",page:1,rect:{x:540,y:692,width:24,height:24},label:"1",render:t=>n.jsx(i,{...t})},{id:"badge-2",type:"custom",page:1,rect:{x:540,y:418,width:24,height:24},label:"2",render:t=>n.jsx(i,{...t})},{id:"highlight-1",type:"highlight",page:1,rect:{x:80,y:700,width:450,height:14},label:"Author line highlight"}],F={title:"Components/DocumentViewer/Renderers/PdfViewer/Recipes",component:e,tags:["beta"],args:{src:s,annotations:c,onAnnotationClick:p()},render:t=>n.jsx("div",{style:{height:"600px"},children:n.jsx(e,{...t})}),argTypes:{src:{control:!1},annotations:{control:"object"},onAnnotationClick:{control:!1,table:{category:"Events"}}}},o={parameters:{docs:{source:{code:`function TooltipAnnotation({ annotation }: PdfAnnotationRenderProps) {
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
