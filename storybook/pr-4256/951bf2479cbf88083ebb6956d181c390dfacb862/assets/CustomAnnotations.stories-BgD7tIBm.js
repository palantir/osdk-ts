import{j as n}from"./iframe-BBSo5ZCd.js";import{B as e}from"./BasePdfViewer-Cz1PQCHV.js";import"./preload-helper-Dzi5mX41.js";import"./index-B8ZS8eSl.js";import"./BasePdfViewer.module.css-LjBECPea.js";import"./PdfViewerAnnotationLayer-eIMdfoop.js";import"./constants-DsXMS3N3.js";import"./usePdfDocument-BiEDtM7l.js";import"./PdfViewerOutlineSidebar-D_8Y4DA2.js";import"./PdfViewerSidebarHeader-BbsSTwx8.js";import"./useBaseUiId-OTe5-im2.js";import"./useControlled-B7b0Wh0w.js";import"./CompositeRoot-D5kUl1oZ.js";import"./CompositeItem-Bl0A6RCo.js";import"./ToolbarRootContext-CROAvwzr.js";import"./composite-B78RY0fg.js";import"./svgIconContainer-BoEF3o2r.js";import"./PdfViewerSearchBar-D2Dn5SoX.js";import"./chevron-up-DlRdhiP2.js";import"./chevron-down-CTZm-1e2.js";import"./cross-CS1ZE-4d.js";import"./PdfViewerSidebar-CFVS6O-y.js";import"./index-DKyvBMeQ.js";import"./index-B2iIKgXF.js";import"./index-BBPJ8Eu5.js";import"./PdfViewerToolbar-Ce4HTg39.js";import"./Button-Dlb0le5d.js";import"./chevron-right-Ch8Vw3La.js";import"./Input-CdlLpAfh.js";import"./search-D9IvXS9T.js";import"./spin-Cn8thchy.js";import"./error-DlnosDW0.js";const{fn:p}=__STORYBOOK_MODULE_TEST__,s="/osdk-ts/storybook/pr-4256/951bf2479cbf88083ebb6956d181c390dfacb862/compressed.tracemonkey-pldi-09.pdf";function l({annotation:t}){return n.jsx("div",{style:{width:"100%",height:"100%",display:"flex",alignItems:"center",justifyContent:"center",background:"rgba(59, 130, 246, 0.9)",borderRadius:"6px",color:"#fff",fontSize:"12px",fontWeight:600,padding:"4px 8px",whiteSpace:"nowrap",boxShadow:"0 2px 8px rgba(0,0,0,0.15)"},children:t.label??"Note"})}function i({annotation:t}){return n.jsx("div",{style:{width:"100%",height:"100%",display:"flex",alignItems:"center",justifyContent:"center",background:"#ef4444",borderRadius:"50%",color:"#fff",fontSize:"11px",fontWeight:700},children:t.label??"1"})}const c=[{id:"tooltip-1",type:"custom",page:1,rect:{x:55,y:400,width:120,height:28},label:"Key finding",render:t=>n.jsx(l,{...t})},{id:"badge-1",type:"custom",page:1,rect:{x:540,y:692,width:24,height:24},label:"1",render:t=>n.jsx(i,{...t})},{id:"badge-2",type:"custom",page:1,rect:{x:540,y:418,width:24,height:24},label:"2",render:t=>n.jsx(i,{...t})},{id:"highlight-1",type:"highlight",page:1,rect:{x:80,y:700,width:450,height:14},label:"Author line highlight"}],F={title:"Components/DocumentViewer/Renderers/PdfViewer/Recipes",component:e,tags:["beta"],args:{src:s,annotations:c,onAnnotationClick:p()},render:t=>n.jsx("div",{style:{height:"600px"},children:n.jsx(e,{...t})}),argTypes:{src:{control:!1},annotations:{control:"object"},onAnnotationClick:{control:!1,table:{category:"Events"}}}},o={parameters:{docs:{source:{code:`function TooltipAnnotation({ annotation }: PdfAnnotationRenderProps) {
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
