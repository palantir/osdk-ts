import{j as n}from"./iframe-D0kdPAo3.js";import{B as e}from"./BasePdfViewer-DJqky_JE.js";import"./preload-helper-X5HFotRj.js";import"./index-C2K0wsys.js";import"./BasePdfViewer.module.css-DnEkwBZQ.js";import"./PdfViewerAnnotationLayer-Bv5o2BJh.js";import"./constants-DsXMS3N3.js";import"./usePdfDocument-DzHHh5O-.js";import"./PdfViewerOutlineSidebar-CY1C-cN4.js";import"./PdfViewerSidebarHeader-DUkb3ynd.js";import"./useBaseUiId-C6KTtyrN.js";import"./useControlled-DZabxLnK.js";import"./CompositeRoot-BAywc98U.js";import"./CompositeItem-Sp5SCghr.js";import"./ToolbarRootContext-CsF2L-Zy.js";import"./composite-DFD2cJI4.js";import"./svgIconContainer-BmwAZIQM.js";import"./PdfViewerSearchBar-D37Nq3NM.js";import"./chevron-up-B39l2e78.js";import"./chevron-down-PTlaQvf9.js";import"./cross-Dp20Xkzu.js";import"./PdfViewerSidebar-Czgx4HKU.js";import"./index-4VxIXF47.js";import"./index-BeFxKd2J.js";import"./index-BZY0MS25.js";import"./PdfViewerToolbar-BHWhu_vT.js";import"./Button-DI6m0SX0.js";import"./chevron-right-B9SlYtV3.js";import"./Input-CZD7bnty.js";import"./search-C3AmiWbF.js";import"./spin-B5awq5Pu.js";import"./error-LXdit3w4.js";const{fn:p}=__STORYBOOK_MODULE_TEST__,s="/osdk-ts/storybook/pr-4336/56b3f8e6885610dc7db4f9e1911c9af4549fd052/compressed.tracemonkey-pldi-09.pdf";function l({annotation:t}){return n.jsx("div",{style:{width:"100%",height:"100%",display:"flex",alignItems:"center",justifyContent:"center",background:"rgba(59, 130, 246, 0.9)",borderRadius:"6px",color:"#fff",fontSize:"12px",fontWeight:600,padding:"4px 8px",whiteSpace:"nowrap",boxShadow:"0 2px 8px rgba(0,0,0,0.15)"},children:t.label??"Note"})}function i({annotation:t}){return n.jsx("div",{style:{width:"100%",height:"100%",display:"flex",alignItems:"center",justifyContent:"center",background:"#ef4444",borderRadius:"50%",color:"#fff",fontSize:"11px",fontWeight:700},children:t.label??"1"})}const c=[{id:"tooltip-1",type:"custom",page:1,rect:{x:55,y:400,width:120,height:28},label:"Key finding",render:t=>n.jsx(l,{...t})},{id:"badge-1",type:"custom",page:1,rect:{x:540,y:692,width:24,height:24},label:"1",render:t=>n.jsx(i,{...t})},{id:"badge-2",type:"custom",page:1,rect:{x:540,y:418,width:24,height:24},label:"2",render:t=>n.jsx(i,{...t})},{id:"highlight-1",type:"highlight",page:1,rect:{x:80,y:700,width:450,height:14},label:"Author line highlight"}],F={title:"Components/DocumentViewer/Renderers/PdfViewer/Recipes",component:e,tags:["beta"],args:{src:s,annotations:c,onAnnotationClick:p()},render:t=>n.jsx("div",{style:{height:"600px"},children:n.jsx(e,{...t})}),argTypes:{src:{control:!1},annotations:{control:"object"},onAnnotationClick:{control:!1,table:{category:"Events"}}}},o={parameters:{docs:{source:{code:`function TooltipAnnotation({ annotation }: PdfAnnotationRenderProps) {
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
