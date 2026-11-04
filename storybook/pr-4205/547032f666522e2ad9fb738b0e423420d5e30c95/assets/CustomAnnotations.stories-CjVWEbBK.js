import{j as n}from"./iframe-DxLh3JbF.js";import{B as e}from"./BasePdfViewer-sLduK4s3.js";import"./preload-helper-CtguWtZv.js";import"./index-DKwvuwmq.js";import"./BasePdfViewer.module.css-DmHajALG.js";import"./PdfViewerAnnotationLayer-BYQLT731.js";import"./constants-DsXMS3N3.js";import"./usePdfDocument-C-1p8xoM.js";import"./PdfViewerOutlineSidebar-D4sNDZ-W.js";import"./PdfViewerSidebarHeader-D0ZYyUIJ.js";import"./useBaseUiId-C0U6w1uv.js";import"./useControlled-CezKSMA-.js";import"./CompositeRoot-DvjsVfUo.js";import"./CompositeItem-DzeDqabA.js";import"./ToolbarRootContext-BeQWjnov.js";import"./composite-BnT-JfoG.js";import"./svgIconContainer-DVtbzSvb.js";import"./PdfViewerSearchBar-dYBYbBdY.js";import"./chevron-up-B0ogPpOy.js";import"./chevron-down-C2jGd_Ay.js";import"./cross-Bq7Vu5_q.js";import"./PdfViewerSidebar-CB3uveat.js";import"./index-2HlltdC-.js";import"./index-lMNDx7C7.js";import"./index-CcJor5Xx.js";import"./PdfViewerToolbar-BBmHGoGl.js";import"./Button-DkhW4pYf.js";import"./chevron-right-C4ZuRB6U.js";import"./Input-Be22pwJh.js";import"./search-6md9DSSP.js";import"./spin-CD_Xx4t8.js";import"./error-DE0gSpIQ.js";const{fn:p}=__STORYBOOK_MODULE_TEST__,s="/osdk-ts/storybook/pr-4205/547032f666522e2ad9fb738b0e423420d5e30c95/compressed.tracemonkey-pldi-09.pdf";function l({annotation:t}){return n.jsx("div",{style:{width:"100%",height:"100%",display:"flex",alignItems:"center",justifyContent:"center",background:"rgba(59, 130, 246, 0.9)",borderRadius:"6px",color:"#fff",fontSize:"12px",fontWeight:600,padding:"4px 8px",whiteSpace:"nowrap",boxShadow:"0 2px 8px rgba(0,0,0,0.15)"},children:t.label??"Note"})}function i({annotation:t}){return n.jsx("div",{style:{width:"100%",height:"100%",display:"flex",alignItems:"center",justifyContent:"center",background:"#ef4444",borderRadius:"50%",color:"#fff",fontSize:"11px",fontWeight:700},children:t.label??"1"})}const c=[{id:"tooltip-1",type:"custom",page:1,rect:{x:55,y:400,width:120,height:28},label:"Key finding",render:t=>n.jsx(l,{...t})},{id:"badge-1",type:"custom",page:1,rect:{x:540,y:692,width:24,height:24},label:"1",render:t=>n.jsx(i,{...t})},{id:"badge-2",type:"custom",page:1,rect:{x:540,y:418,width:24,height:24},label:"2",render:t=>n.jsx(i,{...t})},{id:"highlight-1",type:"highlight",page:1,rect:{x:80,y:700,width:450,height:14},label:"Author line highlight"}],F={title:"Components/DocumentViewer/Renderers/PdfViewer/Recipes",component:e,tags:["beta"],args:{src:s,annotations:c,onAnnotationClick:p()},render:t=>n.jsx("div",{style:{height:"600px"},children:n.jsx(e,{...t})}),argTypes:{src:{control:!1},annotations:{control:"object"},onAnnotationClick:{control:!1,table:{category:"Events"}}}},o={parameters:{docs:{source:{code:`function TooltipAnnotation({ annotation }: PdfAnnotationRenderProps) {
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
