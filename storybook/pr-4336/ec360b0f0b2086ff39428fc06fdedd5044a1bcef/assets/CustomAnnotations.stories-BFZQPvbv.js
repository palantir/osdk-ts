import{j as n}from"./iframe-Dl_BVvAW.js";import{B as e}from"./BasePdfViewer-B-GkCKsq.js";import"./preload-helper-CoCSiyLk.js";import"./index-BCGo89vi.js";import"./BasePdfViewer.module.css-XVgi-pOg.js";import"./PdfViewerAnnotationLayer-BUNKi7Dj.js";import"./constants-DsXMS3N3.js";import"./usePdfDocument-YWOSFlcE.js";import"./PdfViewerOutlineSidebar-CeL5FuD4.js";import"./PdfViewerSidebarHeader-Bb0gC_6H.js";import"./useBaseUiId-C3O-rg1C.js";import"./useControlled-Dp4z1YLv.js";import"./CompositeRoot-B2ETE1xy.js";import"./CompositeItem-CxQ8ZZ6u.js";import"./ToolbarRootContext-CvPGHntn.js";import"./composite-4Jq0kXzk.js";import"./svgIconContainer-DBQRMjom.js";import"./PdfViewerSearchBar-BOsUVl4H.js";import"./chevron-up-D1vdO2QD.js";import"./chevron-down-BnUWx6eY.js";import"./cross-Bz7-buWb.js";import"./PdfViewerSidebar-BS_HPV3-.js";import"./index-C3M7Abp4.js";import"./index-DjDfcFev.js";import"./index-DbV-fkKm.js";import"./PdfViewerToolbar-CprlR5zN.js";import"./Button-6LB6U_zx.js";import"./chevron-right-COeWtyPK.js";import"./Input-B7ojI8Bn.js";import"./search-DcMarGsx.js";import"./spin-CYnDa_z8.js";import"./error-iTPjK_eI.js";const{fn:p}=__STORYBOOK_MODULE_TEST__,s="/osdk-ts/storybook/pr-4336/ec360b0f0b2086ff39428fc06fdedd5044a1bcef/compressed.tracemonkey-pldi-09.pdf";function l({annotation:t}){return n.jsx("div",{style:{width:"100%",height:"100%",display:"flex",alignItems:"center",justifyContent:"center",background:"rgba(59, 130, 246, 0.9)",borderRadius:"6px",color:"#fff",fontSize:"12px",fontWeight:600,padding:"4px 8px",whiteSpace:"nowrap",boxShadow:"0 2px 8px rgba(0,0,0,0.15)"},children:t.label??"Note"})}function i({annotation:t}){return n.jsx("div",{style:{width:"100%",height:"100%",display:"flex",alignItems:"center",justifyContent:"center",background:"#ef4444",borderRadius:"50%",color:"#fff",fontSize:"11px",fontWeight:700},children:t.label??"1"})}const c=[{id:"tooltip-1",type:"custom",page:1,rect:{x:55,y:400,width:120,height:28},label:"Key finding",render:t=>n.jsx(l,{...t})},{id:"badge-1",type:"custom",page:1,rect:{x:540,y:692,width:24,height:24},label:"1",render:t=>n.jsx(i,{...t})},{id:"badge-2",type:"custom",page:1,rect:{x:540,y:418,width:24,height:24},label:"2",render:t=>n.jsx(i,{...t})},{id:"highlight-1",type:"highlight",page:1,rect:{x:80,y:700,width:450,height:14},label:"Author line highlight"}],F={title:"Components/DocumentViewer/Renderers/PdfViewer/Recipes",component:e,tags:["beta"],args:{src:s,annotations:c,onAnnotationClick:p()},render:t=>n.jsx("div",{style:{height:"600px"},children:n.jsx(e,{...t})}),argTypes:{src:{control:!1},annotations:{control:"object"},onAnnotationClick:{control:!1,table:{category:"Events"}}}},o={parameters:{docs:{source:{code:`function TooltipAnnotation({ annotation }: PdfAnnotationRenderProps) {
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
