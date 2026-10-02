import{j as n}from"./iframe-_pZ-OrnG.js";import{B as e}from"./BasePdfViewer-DjwH0mJV.js";import"./preload-helper-CI2nkxYP.js";import"./index-BzR1Js4P.js";import"./BasePdfViewer.module.css-BN-5woEI.js";import"./PdfViewerAnnotationLayer-1FKcnKdU.js";import"./constants-DsXMS3N3.js";import"./usePdfDocument-BW4ZIkgr.js";import"./PdfViewerOutlineSidebar-Do3ZTogV.js";import"./PdfViewerSidebarHeader-DwIdWAC6.js";import"./useBaseUiId-sTNVvHGV.js";import"./useControlled-MIg91upF.js";import"./CompositeRoot-BgW5BMuP.js";import"./CompositeItem-1-7kFxMp.js";import"./ToolbarRootContext-DDubgB6v.js";import"./composite-s_PtHBLY.js";import"./svgIconContainer-Df8znJbK.js";import"./PdfViewerSearchBar-COOLSCAN.js";import"./chevron-up-By0AYAVT.js";import"./chevron-down-DaGWzrOS.js";import"./cross-DHXoKhRr.js";import"./PdfViewerSidebar-BLumvj1l.js";import"./index-5qJDayCH.js";import"./index-C7S3dsZZ.js";import"./index-fBaLvFhr.js";import"./PdfViewerToolbar-BpUTRJ-o.js";import"./Button-HWVms3sL.js";import"./chevron-right-3sWAwZhK.js";import"./Input-DDttcV3K.js";import"./search-ChtcLVXZ.js";import"./spin-NRZmYPHU.js";import"./error-CDa2ZV4b.js";const{fn:p}=__STORYBOOK_MODULE_TEST__,s="/osdk-ts/storybook/pr-4084/d38e6580c7ecc155152e45255928b2f7f838bb29/compressed.tracemonkey-pldi-09.pdf";function l({annotation:t}){return n.jsx("div",{style:{width:"100%",height:"100%",display:"flex",alignItems:"center",justifyContent:"center",background:"rgba(59, 130, 246, 0.9)",borderRadius:"6px",color:"#fff",fontSize:"12px",fontWeight:600,padding:"4px 8px",whiteSpace:"nowrap",boxShadow:"0 2px 8px rgba(0,0,0,0.15)"},children:t.label??"Note"})}function i({annotation:t}){return n.jsx("div",{style:{width:"100%",height:"100%",display:"flex",alignItems:"center",justifyContent:"center",background:"#ef4444",borderRadius:"50%",color:"#fff",fontSize:"11px",fontWeight:700},children:t.label??"1"})}const c=[{id:"tooltip-1",type:"custom",page:1,rect:{x:55,y:400,width:120,height:28},label:"Key finding",render:t=>n.jsx(l,{...t})},{id:"badge-1",type:"custom",page:1,rect:{x:540,y:692,width:24,height:24},label:"1",render:t=>n.jsx(i,{...t})},{id:"badge-2",type:"custom",page:1,rect:{x:540,y:418,width:24,height:24},label:"2",render:t=>n.jsx(i,{...t})},{id:"highlight-1",type:"highlight",page:1,rect:{x:80,y:700,width:450,height:14},label:"Author line highlight"}],F={title:"Components/DocumentViewer/Renderers/PdfViewer/Recipes",component:e,tags:["beta"],args:{src:s,annotations:c,onAnnotationClick:p()},render:t=>n.jsx("div",{style:{height:"600px"},children:n.jsx(e,{...t})}),argTypes:{src:{control:!1},annotations:{control:"object"},onAnnotationClick:{control:!1,table:{category:"Events"}}}},o={parameters:{docs:{source:{code:`function TooltipAnnotation({ annotation }: PdfAnnotationRenderProps) {
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
