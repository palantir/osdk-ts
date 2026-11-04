import{j as n}from"./iframe-CNX9e2vb.js";import{B as e}from"./BasePdfViewer-CbSGtTKL.js";import"./preload-helper-ZMNA8h9P.js";import"./index-BIHn_wHI.js";import"./BasePdfViewer.module.css-58CR6Gqk.js";import"./PdfViewerAnnotationLayer-CrV0-5E-.js";import"./constants-DsXMS3N3.js";import"./usePdfDocument-_Pf3f_Fc.js";import"./PdfViewerOutlineSidebar-B7Ur394n.js";import"./PdfViewerSidebarHeader-CCR4IDuu.js";import"./useBaseUiId-DVajJCtq.js";import"./useControlled-CAgAp9qH.js";import"./CompositeRoot-_lJY_HJ_.js";import"./CompositeItem-WdRO-_hy.js";import"./ToolbarRootContext-tIEjfpOU.js";import"./composite-DPfaHyL7.js";import"./svgIconContainer-nouhoaqF.js";import"./PdfViewerSearchBar-hZmOZP-z.js";import"./chevron-up-B-9Jm597.js";import"./chevron-down-BjfbDPyK.js";import"./cross-CoOqaEol.js";import"./PdfViewerSidebar-KVJugTpH.js";import"./index-CAwx3j0M.js";import"./index-DLyOpAuF.js";import"./index-DzwDShI9.js";import"./PdfViewerToolbar-CjnrTW0Q.js";import"./Button-DqD_xK8o.js";import"./chevron-right-DUM_cfBB.js";import"./Input-DsowkJey.js";import"./search-PqF1ps1R.js";import"./spin-DS90-lPT.js";import"./error-B93ABaLs.js";const{fn:p}=__STORYBOOK_MODULE_TEST__,s="/osdk-ts/storybook/pr-4334/c1bfcc3aeaad563e9a34f11955edb0e25aede754/compressed.tracemonkey-pldi-09.pdf";function l({annotation:t}){return n.jsx("div",{style:{width:"100%",height:"100%",display:"flex",alignItems:"center",justifyContent:"center",background:"rgba(59, 130, 246, 0.9)",borderRadius:"6px",color:"#fff",fontSize:"12px",fontWeight:600,padding:"4px 8px",whiteSpace:"nowrap",boxShadow:"0 2px 8px rgba(0,0,0,0.15)"},children:t.label??"Note"})}function i({annotation:t}){return n.jsx("div",{style:{width:"100%",height:"100%",display:"flex",alignItems:"center",justifyContent:"center",background:"#ef4444",borderRadius:"50%",color:"#fff",fontSize:"11px",fontWeight:700},children:t.label??"1"})}const c=[{id:"tooltip-1",type:"custom",page:1,rect:{x:55,y:400,width:120,height:28},label:"Key finding",render:t=>n.jsx(l,{...t})},{id:"badge-1",type:"custom",page:1,rect:{x:540,y:692,width:24,height:24},label:"1",render:t=>n.jsx(i,{...t})},{id:"badge-2",type:"custom",page:1,rect:{x:540,y:418,width:24,height:24},label:"2",render:t=>n.jsx(i,{...t})},{id:"highlight-1",type:"highlight",page:1,rect:{x:80,y:700,width:450,height:14},label:"Author line highlight"}],F={title:"Components/DocumentViewer/Renderers/PdfViewer/Recipes",component:e,tags:["beta"],args:{src:s,annotations:c,onAnnotationClick:p()},render:t=>n.jsx("div",{style:{height:"600px"},children:n.jsx(e,{...t})}),argTypes:{src:{control:!1},annotations:{control:"object"},onAnnotationClick:{control:!1,table:{category:"Events"}}}},o={parameters:{docs:{source:{code:`function TooltipAnnotation({ annotation }: PdfAnnotationRenderProps) {
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
