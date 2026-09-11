import{j as n}from"./iframe-DUUN6t7i.js";import{B as e}from"./BasePdfViewer-CRAthBUj.js";import"./preload-helper-BzY2PQK8.js";import"./index-CllJbB6n.js";import"./BasePdfViewer.module.css-gcSqd6YA.js";import"./PdfViewerAnnotationLayer-5HjJ7Efj.js";import"./constants-DsXMS3N3.js";import"./usePdfDocument-3HxhJGGS.js";import"./PdfViewerOutlineSidebar-Cm6TbdeR.js";import"./PdfViewerSidebarHeader-BDy1lSXI.js";import"./useBaseUiId-DD-rnAgn.js";import"./useControlled-OksHndqL.js";import"./CompositeRoot-Ce_1Mdri.js";import"./CompositeItem-C7oLwUzE.js";import"./ToolbarRootContext-sOFoFOUi.js";import"./composite-DXLhbd5q.js";import"./svgIconContainer-BiEJIKWJ.js";import"./PdfViewerSearchBar-C2lGk54P.js";import"./chevron-up-D1sI8car.js";import"./chevron-down-9ao4cWz0.js";import"./cross-BL0CmC8v.js";import"./PdfViewerSidebar-CxDlnkBl.js";import"./index-JYM0ZjgP.js";import"./index-CF3EfJQa.js";import"./index-Cyo2_RId.js";import"./PdfViewerToolbar-D4Jw9DG1.js";import"./Button-BiBj2Ngy.js";import"./chevron-right-B59ylihC.js";import"./Input-eja5fv_S.js";import"./search-BOFS1DOk.js";import"./spin-CpRoTHEb.js";import"./error-Btl2ABt3.js";const{fn:p}=__STORYBOOK_MODULE_TEST__,s="/osdk-ts/storybook/pr-4014/d868329a6523de8b1413cb74cd246b4aef712a50/compressed.tracemonkey-pldi-09.pdf";function l({annotation:t}){return n.jsx("div",{style:{width:"100%",height:"100%",display:"flex",alignItems:"center",justifyContent:"center",background:"rgba(59, 130, 246, 0.9)",borderRadius:"6px",color:"#fff",fontSize:"12px",fontWeight:600,padding:"4px 8px",whiteSpace:"nowrap",boxShadow:"0 2px 8px rgba(0,0,0,0.15)"},children:t.label??"Note"})}function i({annotation:t}){return n.jsx("div",{style:{width:"100%",height:"100%",display:"flex",alignItems:"center",justifyContent:"center",background:"#ef4444",borderRadius:"50%",color:"#fff",fontSize:"11px",fontWeight:700},children:t.label??"1"})}const c=[{id:"tooltip-1",type:"custom",page:1,rect:{x:55,y:400,width:120,height:28},label:"Key finding",render:t=>n.jsx(l,{...t})},{id:"badge-1",type:"custom",page:1,rect:{x:540,y:692,width:24,height:24},label:"1",render:t=>n.jsx(i,{...t})},{id:"badge-2",type:"custom",page:1,rect:{x:540,y:418,width:24,height:24},label:"2",render:t=>n.jsx(i,{...t})},{id:"highlight-1",type:"highlight",page:1,rect:{x:80,y:700,width:450,height:14},label:"Author line highlight"}],F={title:"Components/DocumentViewer/Renderers/PdfViewer/Recipes",component:e,tags:["beta"],args:{src:s,annotations:c,onAnnotationClick:p()},render:t=>n.jsx("div",{style:{height:"600px"},children:n.jsx(e,{...t})}),argTypes:{src:{control:!1},annotations:{control:"object"},onAnnotationClick:{control:!1,table:{category:"Events"}}}},o={parameters:{docs:{source:{code:`function TooltipAnnotation({ annotation }: PdfAnnotationRenderProps) {
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
