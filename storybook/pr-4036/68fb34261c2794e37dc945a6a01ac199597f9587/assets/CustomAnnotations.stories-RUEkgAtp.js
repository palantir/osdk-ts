import{j as n}from"./iframe-YNEpMth_.js";import{B as e}from"./BasePdfViewer-B1Zltl4K.js";import"./preload-helper-DJ1mpgSP.js";import"./index-B2puki5T.js";import"./BasePdfViewer.module.css-Bz-D2_zI.js";import"./PdfViewerAnnotationLayer-B3YBHPR-.js";import"./constants-DsXMS3N3.js";import"./usePdfDocument-C9UdjOvq.js";import"./PdfViewerOutlineSidebar-DZgrwaH4.js";import"./PdfViewerSidebarHeader-Jek79Cy6.js";import"./useBaseUiId-CHPLJ4sE.js";import"./useControlled-BW2zwjNJ.js";import"./CompositeRoot-CF9u9FGy.js";import"./CompositeItem-C4SXKvmu.js";import"./ToolbarRootContext-D9Oiyr8g.js";import"./composite-vOR0gMDm.js";import"./svgIconContainer-BhHr47Fp.js";import"./PdfViewerSearchBar-B8Y01B3r.js";import"./chevron-up-Ct6tyaz2.js";import"./chevron-down-UgMmigdo.js";import"./cross-C6C4JYc8.js";import"./PdfViewerSidebar-DToLHKPt.js";import"./index-DuH1OBFw.js";import"./index-rgrCnizS.js";import"./index-CyFPGQhr.js";import"./PdfViewerToolbar-CpgYQ84U.js";import"./Button-Cg8b97WO.js";import"./chevron-right-B1uTqPiu.js";import"./Input-pwxvUMdX.js";import"./search-uuqEPS6n.js";import"./spin-DX-gaI_b.js";import"./error-VfGLFz6H.js";const{fn:p}=__STORYBOOK_MODULE_TEST__,s="/osdk-ts/storybook/pr-4036/68fb34261c2794e37dc945a6a01ac199597f9587/compressed.tracemonkey-pldi-09.pdf";function l({annotation:t}){return n.jsx("div",{style:{width:"100%",height:"100%",display:"flex",alignItems:"center",justifyContent:"center",background:"rgba(59, 130, 246, 0.9)",borderRadius:"6px",color:"#fff",fontSize:"12px",fontWeight:600,padding:"4px 8px",whiteSpace:"nowrap",boxShadow:"0 2px 8px rgba(0,0,0,0.15)"},children:t.label??"Note"})}function i({annotation:t}){return n.jsx("div",{style:{width:"100%",height:"100%",display:"flex",alignItems:"center",justifyContent:"center",background:"#ef4444",borderRadius:"50%",color:"#fff",fontSize:"11px",fontWeight:700},children:t.label??"1"})}const c=[{id:"tooltip-1",type:"custom",page:1,rect:{x:55,y:400,width:120,height:28},label:"Key finding",render:t=>n.jsx(l,{...t})},{id:"badge-1",type:"custom",page:1,rect:{x:540,y:692,width:24,height:24},label:"1",render:t=>n.jsx(i,{...t})},{id:"badge-2",type:"custom",page:1,rect:{x:540,y:418,width:24,height:24},label:"2",render:t=>n.jsx(i,{...t})},{id:"highlight-1",type:"highlight",page:1,rect:{x:80,y:700,width:450,height:14},label:"Author line highlight"}],F={title:"Components/DocumentViewer/Renderers/PdfViewer/Recipes",component:e,tags:["beta"],args:{src:s,annotations:c,onAnnotationClick:p()},render:t=>n.jsx("div",{style:{height:"600px"},children:n.jsx(e,{...t})}),argTypes:{src:{control:!1},annotations:{control:"object"},onAnnotationClick:{control:!1,table:{category:"Events"}}}},o={parameters:{docs:{source:{code:`function TooltipAnnotation({ annotation }: PdfAnnotationRenderProps) {
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
