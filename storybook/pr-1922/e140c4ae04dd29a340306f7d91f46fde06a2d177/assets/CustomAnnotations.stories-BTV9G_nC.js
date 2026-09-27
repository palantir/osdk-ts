import{j as n}from"./iframe-CY0l_yrm.js";import{B as e}from"./BasePdfViewer-BMT3RAjs.js";import"./preload-helper-DND0VgR5.js";import"./index-jD6aOkFv.js";import"./BasePdfViewer.module.css-DklZEJFX.js";import"./PdfViewerAnnotationLayer-BvmeFf8x.js";import"./constants-DsXMS3N3.js";import"./usePdfDocument-Br-WKghA.js";import"./PdfViewerOutlineSidebar-BRhJsvKM.js";import"./PdfViewerSidebarHeader-DMZvUZwr.js";import"./useBaseUiId-CnQ31eNT.js";import"./useControlled-C5au6PDu.js";import"./CompositeRoot-hAfSplJR.js";import"./CompositeItem-CBwjlwAY.js";import"./ToolbarRootContext-CxL7mdgL.js";import"./composite-CtsMuCZE.js";import"./svgIconContainer-CS1jdY6Z.js";import"./PdfViewerSearchBar-IC09IAbH.js";import"./chevron-up-jZ1csiz0.js";import"./chevron-down-CevA26oJ.js";import"./cross-Cx7CV6yi.js";import"./PdfViewerSidebar-CwGyYSsF.js";import"./index-Bc195Ow-.js";import"./index-BwcD2Xpb.js";import"./index-CYc2nEZM.js";import"./PdfViewerToolbar-C2xakzHh.js";import"./Button-BSjQUjCf.js";import"./chevron-right-CKUVv4ZC.js";import"./Input-BSPMw6pL.js";import"./search-pW8689hu.js";import"./spin-Df1pcgIX.js";import"./error-CvxyrBuz.js";const{fn:p}=__STORYBOOK_MODULE_TEST__,s="/osdk-ts/storybook/pr-1922/e140c4ae04dd29a340306f7d91f46fde06a2d177/compressed.tracemonkey-pldi-09.pdf";function l({annotation:t}){return n.jsx("div",{style:{width:"100%",height:"100%",display:"flex",alignItems:"center",justifyContent:"center",background:"rgba(59, 130, 246, 0.9)",borderRadius:"6px",color:"#fff",fontSize:"12px",fontWeight:600,padding:"4px 8px",whiteSpace:"nowrap",boxShadow:"0 2px 8px rgba(0,0,0,0.15)"},children:t.label??"Note"})}function i({annotation:t}){return n.jsx("div",{style:{width:"100%",height:"100%",display:"flex",alignItems:"center",justifyContent:"center",background:"#ef4444",borderRadius:"50%",color:"#fff",fontSize:"11px",fontWeight:700},children:t.label??"1"})}const c=[{id:"tooltip-1",type:"custom",page:1,rect:{x:55,y:400,width:120,height:28},label:"Key finding",render:t=>n.jsx(l,{...t})},{id:"badge-1",type:"custom",page:1,rect:{x:540,y:692,width:24,height:24},label:"1",render:t=>n.jsx(i,{...t})},{id:"badge-2",type:"custom",page:1,rect:{x:540,y:418,width:24,height:24},label:"2",render:t=>n.jsx(i,{...t})},{id:"highlight-1",type:"highlight",page:1,rect:{x:80,y:700,width:450,height:14},label:"Author line highlight"}],F={title:"Components/DocumentViewer/Renderers/PdfViewer/Recipes",component:e,tags:["beta"],args:{src:s,annotations:c,onAnnotationClick:p()},render:t=>n.jsx("div",{style:{height:"600px"},children:n.jsx(e,{...t})}),argTypes:{src:{control:!1},annotations:{control:"object"},onAnnotationClick:{control:!1,table:{category:"Events"}}}},o={parameters:{docs:{source:{code:`function TooltipAnnotation({ annotation }: PdfAnnotationRenderProps) {
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
