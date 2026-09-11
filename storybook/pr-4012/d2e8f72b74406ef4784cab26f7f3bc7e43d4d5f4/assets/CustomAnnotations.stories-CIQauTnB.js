import{j as n}from"./iframe-C-mlL1d1.js";import{B as e}from"./BasePdfViewer-DpLg3Ph3.js";import"./preload-helper-BUxDkfWR.js";import"./index-B6OYb_DA.js";import"./BasePdfViewer.module.css-BceYQpkh.js";import"./PdfViewerAnnotationLayer-_eSCAhhA.js";import"./constants-DsXMS3N3.js";import"./usePdfDocument-DUgI4Or2.js";import"./PdfViewerOutlineSidebar-CDWQmyL4.js";import"./PdfViewerSidebarHeader-CyLpsXUF.js";import"./useBaseUiId-BKlcYEBY.js";import"./useControlled-Bq8qBaBJ.js";import"./CompositeRoot-V7a5vBQK.js";import"./CompositeItem-CF65Mtg9.js";import"./ToolbarRootContext-BcwoWGuf.js";import"./composite-T8-lg8nr.js";import"./svgIconContainer-DOFv3aDL.js";import"./PdfViewerSearchBar-BO0VFkLI.js";import"./chevron-up-B17yXw4M.js";import"./chevron-down-CfvB8SzD.js";import"./cross-bL1PiJj_.js";import"./PdfViewerSidebar-C-DDPQG8.js";import"./index-Bb5I7VlI.js";import"./index-nwLa4JDa.js";import"./index-BMP6rH9L.js";import"./PdfViewerToolbar-BXZGZEO-.js";import"./Button-To2COh7T.js";import"./chevron-right-DXi-IoZ6.js";import"./Input-DwnchpfY.js";import"./search-9EoPaIsu.js";import"./spin-C7ca0WeB.js";import"./error-C0XWqrZ2.js";const{fn:p}=__STORYBOOK_MODULE_TEST__,s="/osdk-ts/storybook/pr-4012/d2e8f72b74406ef4784cab26f7f3bc7e43d4d5f4/compressed.tracemonkey-pldi-09.pdf";function l({annotation:t}){return n.jsx("div",{style:{width:"100%",height:"100%",display:"flex",alignItems:"center",justifyContent:"center",background:"rgba(59, 130, 246, 0.9)",borderRadius:"6px",color:"#fff",fontSize:"12px",fontWeight:600,padding:"4px 8px",whiteSpace:"nowrap",boxShadow:"0 2px 8px rgba(0,0,0,0.15)"},children:t.label??"Note"})}function i({annotation:t}){return n.jsx("div",{style:{width:"100%",height:"100%",display:"flex",alignItems:"center",justifyContent:"center",background:"#ef4444",borderRadius:"50%",color:"#fff",fontSize:"11px",fontWeight:700},children:t.label??"1"})}const c=[{id:"tooltip-1",type:"custom",page:1,rect:{x:55,y:400,width:120,height:28},label:"Key finding",render:t=>n.jsx(l,{...t})},{id:"badge-1",type:"custom",page:1,rect:{x:540,y:692,width:24,height:24},label:"1",render:t=>n.jsx(i,{...t})},{id:"badge-2",type:"custom",page:1,rect:{x:540,y:418,width:24,height:24},label:"2",render:t=>n.jsx(i,{...t})},{id:"highlight-1",type:"highlight",page:1,rect:{x:80,y:700,width:450,height:14},label:"Author line highlight"}],F={title:"Components/DocumentViewer/Renderers/PdfViewer/Recipes",component:e,tags:["beta"],args:{src:s,annotations:c,onAnnotationClick:p()},render:t=>n.jsx("div",{style:{height:"600px"},children:n.jsx(e,{...t})}),argTypes:{src:{control:!1},annotations:{control:"object"},onAnnotationClick:{control:!1,table:{category:"Events"}}}},o={parameters:{docs:{source:{code:`function TooltipAnnotation({ annotation }: PdfAnnotationRenderProps) {
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
