import{j as n}from"./iframe-B2ksOBZK.js";import{B as e}from"./BasePdfViewer-BRVxKGhf.js";import"./preload-helper-DwVeKaeD.js";import"./index-C0qxAnyg.js";import"./BasePdfViewer.module.css-BZqrdOVh.js";import"./PdfViewerAnnotationLayer-C-fltihQ.js";import"./constants-DsXMS3N3.js";import"./usePdfDocument-DeGqq8lR.js";import"./PdfViewerOutlineSidebar-Dot7GXGe.js";import"./PdfViewerSidebarHeader-DWfmeVWJ.js";import"./useBaseUiId-DBFPNCWo.js";import"./useControlled-BKEjqMno.js";import"./CompositeRoot-CzXRHvP9.js";import"./CompositeItem-BrQKGcIu.js";import"./ToolbarRootContext-BqtVZI5F.js";import"./composite-B-vnab_Z.js";import"./svgIconContainer-BoLDP-in.js";import"./PdfViewerSearchBar-Cz-F397a.js";import"./chevron-up-ByEr0L2t.js";import"./chevron-down-D80xuDhn.js";import"./cross-DpwDHxX0.js";import"./PdfViewerSidebar-DxEPw18H.js";import"./index-D8M1fsCH.js";import"./index-DyyxI-I6.js";import"./index-rll2Ydt2.js";import"./PdfViewerToolbar-De2MLLPF.js";import"./Button-CWbg3cyR.js";import"./chevron-right-3MAaS882.js";import"./Input-DCyHQ82M.js";import"./search-BcOh8Jgz.js";import"./spin-THftki52.js";import"./error-BDJdlY4T.js";const{fn:p}=__STORYBOOK_MODULE_TEST__,s="/osdk-ts/storybook/pr-4116/a3642c475c2b8a4c0db5f007710ee93ee79d1d1f/compressed.tracemonkey-pldi-09.pdf";function l({annotation:t}){return n.jsx("div",{style:{width:"100%",height:"100%",display:"flex",alignItems:"center",justifyContent:"center",background:"rgba(59, 130, 246, 0.9)",borderRadius:"6px",color:"#fff",fontSize:"12px",fontWeight:600,padding:"4px 8px",whiteSpace:"nowrap",boxShadow:"0 2px 8px rgba(0,0,0,0.15)"},children:t.label??"Note"})}function i({annotation:t}){return n.jsx("div",{style:{width:"100%",height:"100%",display:"flex",alignItems:"center",justifyContent:"center",background:"#ef4444",borderRadius:"50%",color:"#fff",fontSize:"11px",fontWeight:700},children:t.label??"1"})}const c=[{id:"tooltip-1",type:"custom",page:1,rect:{x:55,y:400,width:120,height:28},label:"Key finding",render:t=>n.jsx(l,{...t})},{id:"badge-1",type:"custom",page:1,rect:{x:540,y:692,width:24,height:24},label:"1",render:t=>n.jsx(i,{...t})},{id:"badge-2",type:"custom",page:1,rect:{x:540,y:418,width:24,height:24},label:"2",render:t=>n.jsx(i,{...t})},{id:"highlight-1",type:"highlight",page:1,rect:{x:80,y:700,width:450,height:14},label:"Author line highlight"}],F={title:"Components/DocumentViewer/Renderers/PdfViewer/Recipes",component:e,tags:["beta"],args:{src:s,annotations:c,onAnnotationClick:p()},render:t=>n.jsx("div",{style:{height:"600px"},children:n.jsx(e,{...t})}),argTypes:{src:{control:!1},annotations:{control:"object"},onAnnotationClick:{control:!1,table:{category:"Events"}}}},o={parameters:{docs:{source:{code:`function TooltipAnnotation({ annotation }: PdfAnnotationRenderProps) {
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
