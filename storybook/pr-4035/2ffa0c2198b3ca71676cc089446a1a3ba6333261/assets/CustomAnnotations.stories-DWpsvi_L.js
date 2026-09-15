import{j as n}from"./iframe-DA9dclNV.js";import{B as e}from"./BasePdfViewer-CdhIrb2l.js";import"./preload-helper-Bx64lG7g.js";import"./index-kn43Hsx3.js";import"./BasePdfViewer.module.css-DuhMVUIg.js";import"./PdfViewerAnnotationLayer-B7zn7HcE.js";import"./constants-DsXMS3N3.js";import"./usePdfDocument-DJbpcmpH.js";import"./PdfViewerOutlineSidebar-1BeOCQeJ.js";import"./PdfViewerSidebarHeader-D4EMOmXv.js";import"./useBaseUiId-_qFsZVnk.js";import"./useControlled-DOm30eCY.js";import"./CompositeRoot-BFBFdgV-.js";import"./CompositeItem-21cMzz5_.js";import"./ToolbarRootContext-tV_1SIt_.js";import"./composite-CayJIHWq.js";import"./svgIconContainer-CdmY4bEV.js";import"./PdfViewerSearchBar-6SdHenZH.js";import"./chevron-up-B_EGX8fz.js";import"./chevron-down-DC0K_Daw.js";import"./cross-Db3CMctj.js";import"./PdfViewerSidebar-t2DoJ0xZ.js";import"./index-Bz8vlsKZ.js";import"./index-ByvNBIsG.js";import"./index-DkDw_XlI.js";import"./PdfViewerToolbar-CDdZOWnA.js";import"./Button-6VSTuqQC.js";import"./chevron-right-YLRJPR-9.js";import"./Input-xbm-V7-x.js";import"./search-CsCC8gU7.js";import"./spin-BDe7jkhf.js";import"./error-DHS0vKCT.js";const{fn:p}=__STORYBOOK_MODULE_TEST__,s="/osdk-ts/storybook/pr-4035/2ffa0c2198b3ca71676cc089446a1a3ba6333261/compressed.tracemonkey-pldi-09.pdf";function l({annotation:t}){return n.jsx("div",{style:{width:"100%",height:"100%",display:"flex",alignItems:"center",justifyContent:"center",background:"rgba(59, 130, 246, 0.9)",borderRadius:"6px",color:"#fff",fontSize:"12px",fontWeight:600,padding:"4px 8px",whiteSpace:"nowrap",boxShadow:"0 2px 8px rgba(0,0,0,0.15)"},children:t.label??"Note"})}function i({annotation:t}){return n.jsx("div",{style:{width:"100%",height:"100%",display:"flex",alignItems:"center",justifyContent:"center",background:"#ef4444",borderRadius:"50%",color:"#fff",fontSize:"11px",fontWeight:700},children:t.label??"1"})}const c=[{id:"tooltip-1",type:"custom",page:1,rect:{x:55,y:400,width:120,height:28},label:"Key finding",render:t=>n.jsx(l,{...t})},{id:"badge-1",type:"custom",page:1,rect:{x:540,y:692,width:24,height:24},label:"1",render:t=>n.jsx(i,{...t})},{id:"badge-2",type:"custom",page:1,rect:{x:540,y:418,width:24,height:24},label:"2",render:t=>n.jsx(i,{...t})},{id:"highlight-1",type:"highlight",page:1,rect:{x:80,y:700,width:450,height:14},label:"Author line highlight"}],F={title:"Components/DocumentViewer/Renderers/PdfViewer/Recipes",component:e,tags:["beta"],args:{src:s,annotations:c,onAnnotationClick:p()},render:t=>n.jsx("div",{style:{height:"600px"},children:n.jsx(e,{...t})}),argTypes:{src:{control:!1},annotations:{control:"object"},onAnnotationClick:{control:!1,table:{category:"Events"}}}},o={parameters:{docs:{source:{code:`function TooltipAnnotation({ annotation }: PdfAnnotationRenderProps) {
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
