import{j as n}from"./iframe-CVgWx_mk.js";import{B as e}from"./BasePdfViewer-BMEjnQtF.js";import"./preload-helper-CFfBa7BD.js";import"./index-KhqTHjvK.js";import"./BasePdfViewer.module.css-OvqzWTRs.js";import"./PdfViewerAnnotationLayer-D_jqBXts.js";import"./constants-DsXMS3N3.js";import"./usePdfDocument-CDA1OErO.js";import"./PdfViewerOutlineSidebar-qK6IAXnz.js";import"./PdfViewerSidebarHeader-CgxoZXiq.js";import"./useBaseUiId-B0ovho4b.js";import"./useControlled-CmMjx2zB.js";import"./CompositeRoot-CWLiFArD.js";import"./CompositeItem-CCjIa2t2.js";import"./ToolbarRootContext-CaqtX5pJ.js";import"./composite-mrQGTihx.js";import"./svgIconContainer-MI5luthc.js";import"./PdfViewerSearchBar-DLV9bJw1.js";import"./chevron-up-DVoFCslT.js";import"./chevron-down-DTQ9C7Jw.js";import"./cross-Ch2oGVZP.js";import"./PdfViewerSidebar-zQRn5HwC.js";import"./index-Bo_a2b3D.js";import"./index-Dj_0AH5M.js";import"./index-kHlCzxdB.js";import"./PdfViewerToolbar-BKYZRZmD.js";import"./Button-BdWA5AOv.js";import"./chevron-right-IqOmnL33.js";import"./Input-B_ebmuiE.js";import"./search-BdiQZg80.js";import"./spin-BBGD8-5Z.js";import"./error-aoO-9vvY.js";const{fn:p}=__STORYBOOK_MODULE_TEST__,s="/osdk-ts/storybook/pr-3982/0e2204fcf1fc2f3eada6c074c6d56d44a8e5ec5e/compressed.tracemonkey-pldi-09.pdf";function c({annotation:t}){return n.jsx("div",{style:{width:"100%",height:"100%",display:"flex",alignItems:"center",justifyContent:"center",background:"rgba(59, 130, 246, 0.9)",borderRadius:"6px",color:"#fff",fontSize:"12px",fontWeight:600,padding:"4px 8px",whiteSpace:"nowrap",boxShadow:"0 2px 8px rgba(0,0,0,0.15)"},children:t.label??"Note"})}function i({annotation:t}){return n.jsx("div",{style:{width:"100%",height:"100%",display:"flex",alignItems:"center",justifyContent:"center",background:"#ef4444",borderRadius:"50%",color:"#fff",fontSize:"11px",fontWeight:700},children:t.label??"1"})}const l=[{id:"tooltip-1",type:"custom",page:1,rect:{x:55,y:400,width:120,height:28},label:"Key finding",render:t=>n.jsx(c,{...t})},{id:"badge-1",type:"custom",page:1,rect:{x:540,y:692,width:24,height:24},label:"1",render:t=>n.jsx(i,{...t})},{id:"badge-2",type:"custom",page:1,rect:{x:540,y:418,width:24,height:24},label:"2",render:t=>n.jsx(i,{...t})},{id:"highlight-1",type:"highlight",page:1,rect:{x:80,y:700,width:450,height:14},label:"Author line highlight"}],F={title:"Components/DocumentViewer/Renderers/PdfViewer/Recipes",component:e,tags:["beta"],args:{src:s,annotations:l,onAnnotationClick:p()},render:t=>n.jsx("div",{style:{height:"600px"},children:n.jsx(e,{...t})}),argTypes:{src:{control:!1},annotations:{control:"object"},onAnnotationClick:{control:!1,table:{category:"Events"}}}},o={parameters:{docs:{source:{code:`function TooltipAnnotation({ annotation }: PdfAnnotationRenderProps) {
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
