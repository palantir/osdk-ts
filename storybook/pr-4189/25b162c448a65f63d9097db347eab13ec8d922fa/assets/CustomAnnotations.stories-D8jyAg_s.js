import{j as n}from"./iframe-DLMfgjtf.js";import{B as e}from"./BasePdfViewer-G6Gu_cpP.js";import"./preload-helper-FISTic5h.js";import"./index-C1uNoD_P.js";import"./BasePdfViewer.module.css-BXM0vqX7.js";import"./PdfViewerAnnotationLayer-DOV-911f.js";import"./constants-DsXMS3N3.js";import"./usePdfDocument-zFBuahMr.js";import"./PdfViewerOutlineSidebar-BtPJkcmW.js";import"./PdfViewerSidebarHeader-Dbj8hMQn.js";import"./useBaseUiId-CGPqK7A_.js";import"./useControlled-Ez2RzIi9.js";import"./CompositeRoot-BKMZhTES.js";import"./CompositeItem-BPE6MZwc.js";import"./ToolbarRootContext-CaevGzPm.js";import"./composite-Bh8RLzcK.js";import"./svgIconContainer-D9kLSjbx.js";import"./PdfViewerSearchBar-DJDsUFZ8.js";import"./chevron-up-BA2ng333.js";import"./chevron-down-Cl75LzTR.js";import"./cross-DEP3bJaL.js";import"./PdfViewerSidebar-c5CK6HrC.js";import"./index-CCyxZzXK.js";import"./index-DvE967r1.js";import"./index-DhmZxaNJ.js";import"./PdfViewerToolbar-CoV1DSQb.js";import"./Button-BcB4SrWe.js";import"./chevron-right-CAmXY6hZ.js";import"./Input-CGlQdmV9.js";import"./search-DB3dPpwY.js";import"./spin-B-ok6fqt.js";import"./error-CgJf6mJC.js";const{fn:p}=__STORYBOOK_MODULE_TEST__,s="/osdk-ts/storybook/pr-4189/25b162c448a65f63d9097db347eab13ec8d922fa/compressed.tracemonkey-pldi-09.pdf";function l({annotation:t}){return n.jsx("div",{style:{width:"100%",height:"100%",display:"flex",alignItems:"center",justifyContent:"center",background:"rgba(59, 130, 246, 0.9)",borderRadius:"6px",color:"#fff",fontSize:"12px",fontWeight:600,padding:"4px 8px",whiteSpace:"nowrap",boxShadow:"0 2px 8px rgba(0,0,0,0.15)"},children:t.label??"Note"})}function i({annotation:t}){return n.jsx("div",{style:{width:"100%",height:"100%",display:"flex",alignItems:"center",justifyContent:"center",background:"#ef4444",borderRadius:"50%",color:"#fff",fontSize:"11px",fontWeight:700},children:t.label??"1"})}const c=[{id:"tooltip-1",type:"custom",page:1,rect:{x:55,y:400,width:120,height:28},label:"Key finding",render:t=>n.jsx(l,{...t})},{id:"badge-1",type:"custom",page:1,rect:{x:540,y:692,width:24,height:24},label:"1",render:t=>n.jsx(i,{...t})},{id:"badge-2",type:"custom",page:1,rect:{x:540,y:418,width:24,height:24},label:"2",render:t=>n.jsx(i,{...t})},{id:"highlight-1",type:"highlight",page:1,rect:{x:80,y:700,width:450,height:14},label:"Author line highlight"}],F={title:"Components/DocumentViewer/Renderers/PdfViewer/Recipes",component:e,tags:["beta"],args:{src:s,annotations:c,onAnnotationClick:p()},render:t=>n.jsx("div",{style:{height:"600px"},children:n.jsx(e,{...t})}),argTypes:{src:{control:!1},annotations:{control:"object"},onAnnotationClick:{control:!1,table:{category:"Events"}}}},o={parameters:{docs:{source:{code:`function TooltipAnnotation({ annotation }: PdfAnnotationRenderProps) {
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
