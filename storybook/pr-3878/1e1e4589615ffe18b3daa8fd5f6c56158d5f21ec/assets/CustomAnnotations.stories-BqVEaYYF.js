import{j as n}from"./iframe-D3DqoIpf.js";import{B as e}from"./BasePdfViewer-DL23GOIJ.js";import"./preload-helper-Bur1EzB5.js";import"./index-BThkDgxi.js";import"./BasePdfViewer.module.css-CcMsLr7e.js";import"./PdfViewerAnnotationLayer-D4QzSA3a.js";import"./constants-DsXMS3N3.js";import"./usePdfDocument-BmX7mwlz.js";import"./PdfViewerOutlineSidebar-cchSn3UI.js";import"./PdfViewerSidebarHeader-BaLzpeeU.js";import"./useBaseUiId-BOGuxokK.js";import"./useControlled-R3QnTpFh.js";import"./CompositeRoot-BwtDdD6K.js";import"./CompositeItem-DmhK9sjv.js";import"./ToolbarRootContext-FLVSUoPt.js";import"./composite-DOJBzh5B.js";import"./svgIconContainer-CoUDa19N.js";import"./PdfViewerSearchBar-CDDhgIJ_.js";import"./chevron-up-815Id4Y3.js";import"./chevron-down-BYhG0KSh.js";import"./cross-CAMhptAD.js";import"./PdfViewerSidebar-DPqpqqHc.js";import"./index-CAWoAfLN.js";import"./index-BF36rFqh.js";import"./index-CaWcagsp.js";import"./PdfViewerToolbar-CHQat-FS.js";import"./Button-D1m-bnZN.js";import"./chevron-right-CxssO9Qg.js";import"./Input-Ba9sqiE-.js";import"./search-DzOWxMYj.js";import"./spin-8NRwUARL.js";import"./error-DmP3oCyF.js";const{fn:p}=__STORYBOOK_MODULE_TEST__,s="/osdk-ts/storybook/pr-3878/1e1e4589615ffe18b3daa8fd5f6c56158d5f21ec/compressed.tracemonkey-pldi-09.pdf";function l({annotation:t}){return n.jsx("div",{style:{width:"100%",height:"100%",display:"flex",alignItems:"center",justifyContent:"center",background:"rgba(59, 130, 246, 0.9)",borderRadius:"6px",color:"#fff",fontSize:"12px",fontWeight:600,padding:"4px 8px",whiteSpace:"nowrap",boxShadow:"0 2px 8px rgba(0,0,0,0.15)"},children:t.label??"Note"})}function i({annotation:t}){return n.jsx("div",{style:{width:"100%",height:"100%",display:"flex",alignItems:"center",justifyContent:"center",background:"#ef4444",borderRadius:"50%",color:"#fff",fontSize:"11px",fontWeight:700},children:t.label??"1"})}const c=[{id:"tooltip-1",type:"custom",page:1,rect:{x:55,y:400,width:120,height:28},label:"Key finding",render:t=>n.jsx(l,{...t})},{id:"badge-1",type:"custom",page:1,rect:{x:540,y:692,width:24,height:24},label:"1",render:t=>n.jsx(i,{...t})},{id:"badge-2",type:"custom",page:1,rect:{x:540,y:418,width:24,height:24},label:"2",render:t=>n.jsx(i,{...t})},{id:"highlight-1",type:"highlight",page:1,rect:{x:80,y:700,width:450,height:14},label:"Author line highlight"}],F={title:"Components/DocumentViewer/Renderers/PdfViewer/Recipes",component:e,tags:["beta"],args:{src:s,annotations:c,onAnnotationClick:p()},render:t=>n.jsx("div",{style:{height:"600px"},children:n.jsx(e,{...t})}),argTypes:{src:{control:!1},annotations:{control:"object"},onAnnotationClick:{control:!1,table:{category:"Events"}}}},o={parameters:{docs:{source:{code:`function TooltipAnnotation({ annotation }: PdfAnnotationRenderProps) {
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
