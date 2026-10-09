import{j as n}from"./iframe-Bz3hVWPH.js";import{B as e}from"./BasePdfViewer-BFw4MOdv.js";import"./preload-helper-B5WDuSuX.js";import"./index-DByWOMtj.js";import"./BasePdfViewer.module.css-DXKUR3B3.js";import"./PdfViewerAnnotationLayer-CVEXgRij.js";import"./constants-DsXMS3N3.js";import"./usePdfDocument-ILi6dGnM.js";import"./PdfViewerOutlineSidebar-DlEXkE1Z.js";import"./PdfViewerSidebarHeader-ySUtv4w3.js";import"./useBaseUiId-dzLz4lPg.js";import"./useControlled-DOWqxCnV.js";import"./CompositeRoot-CvayAu2Y.js";import"./CompositeItem-dA2LCxOZ.js";import"./ToolbarRootContext-D-xyRBQY.js";import"./composite-CPnF2lA7.js";import"./svgIconContainer-_Jncan05.js";import"./PdfViewerSearchBar-r8UI56lk.js";import"./chevron-up-QuHlCrM5.js";import"./chevron-down-Bi16AFVJ.js";import"./cross-Fpn0tB3m.js";import"./PdfViewerSidebar-CG5kqA-P.js";import"./index-BwGnMyFh.js";import"./index-vogC1DiU.js";import"./index-De0WyPkh.js";import"./PdfViewerToolbar-GeeBzsJE.js";import"./Button-CiU5aFV9.js";import"./chevron-right-DCMbpsrV.js";import"./Input-niPYTtX3.js";import"./search-Ctah0g8H.js";import"./spin-DQueR6BC.js";import"./error-CQxjkOW_.js";const{fn:p}=__STORYBOOK_MODULE_TEST__,s="/osdk-ts/storybook/pr-4202/d61f9af5a5774712fa1359930c0069b569d23e33/compressed.tracemonkey-pldi-09.pdf";function l({annotation:t}){return n.jsx("div",{style:{width:"100%",height:"100%",display:"flex",alignItems:"center",justifyContent:"center",background:"rgba(59, 130, 246, 0.9)",borderRadius:"6px",color:"#fff",fontSize:"12px",fontWeight:600,padding:"4px 8px",whiteSpace:"nowrap",boxShadow:"0 2px 8px rgba(0,0,0,0.15)"},children:t.label??"Note"})}function i({annotation:t}){return n.jsx("div",{style:{width:"100%",height:"100%",display:"flex",alignItems:"center",justifyContent:"center",background:"#ef4444",borderRadius:"50%",color:"#fff",fontSize:"11px",fontWeight:700},children:t.label??"1"})}const c=[{id:"tooltip-1",type:"custom",page:1,rect:{x:55,y:400,width:120,height:28},label:"Key finding",render:t=>n.jsx(l,{...t})},{id:"badge-1",type:"custom",page:1,rect:{x:540,y:692,width:24,height:24},label:"1",render:t=>n.jsx(i,{...t})},{id:"badge-2",type:"custom",page:1,rect:{x:540,y:418,width:24,height:24},label:"2",render:t=>n.jsx(i,{...t})},{id:"highlight-1",type:"highlight",page:1,rect:{x:80,y:700,width:450,height:14},label:"Author line highlight"}],F={title:"Components/DocumentViewer/Renderers/PdfViewer/Recipes",component:e,tags:["beta"],args:{src:s,annotations:c,onAnnotationClick:p()},render:t=>n.jsx("div",{style:{height:"600px"},children:n.jsx(e,{...t})}),argTypes:{src:{control:!1},annotations:{control:"object"},onAnnotationClick:{control:!1,table:{category:"Events"}}}},o={parameters:{docs:{source:{code:`function TooltipAnnotation({ annotation }: PdfAnnotationRenderProps) {
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
