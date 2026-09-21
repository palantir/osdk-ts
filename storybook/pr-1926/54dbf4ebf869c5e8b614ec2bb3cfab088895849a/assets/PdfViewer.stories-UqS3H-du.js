import{j as r,M as s}from"./iframe-BwOWKgX_.js";import{P as p}from"./pdf-viewer-DBc5Y65I.js";import{E as d}from"./Employee-BAk2o20h.js";import{u as a}from"./useOsdkObject-CrDyBuEh.js";import"./preload-helper-CPR62PUH.js";import"./PdfViewer-B_VMg8SE.js";import"./index-Cy1m0zFQ.js";import"./BasePdfViewer-D31zOOPT.js";import"./BasePdfViewer.module.css-BYRcvsSz.js";import"./PdfViewerAnnotationLayer-DqD6iFrr.js";import"./constants-DsXMS3N3.js";import"./usePdfDocument-DygoyPGg.js";import"./PdfViewerOutlineSidebar-BopWZUWV.js";import"./PdfViewerSidebarHeader-1uKzVg--.js";import"./useBaseUiId-CC40NyPk.js";import"./useControlled-DtkYswSw.js";import"./CompositeRoot-Dzlizevj.js";import"./CompositeItem-yrOlfAbz.js";import"./ToolbarRootContext-NPZeJvMR.js";import"./composite-5HVBLMjf.js";import"./svgIconContainer-BN-frImW.js";import"./PdfViewerSearchBar-CyzcEnlN.js";import"./chevron-up-CJuep9KV.js";import"./chevron-down-C0sr0dH5.js";import"./cross-CCQqgwU7.js";import"./PdfViewerSidebar-CeFz8tuJ.js";import"./index-M1eOB7Dy.js";import"./index-QbVRyvTG.js";import"./index-Br-OMOFz.js";import"./PdfViewerToolbar-D08VnppL.js";import"./Button-DB73z_31.js";import"./chevron-right-BSvnH58e.js";import"./Input-C4nObfin.js";import"./search-veFLhVSL.js";import"./spin-Co1wHCRS.js";import"./error-CH6xRFVZ.js";import"./withOsdkMetrics-B3eY7UZj.js";import"./makeExternalStore-CfZpatI5.js";const U={title:"Components/DocumentViewer/Renderers/PdfViewer",component:p,tags:["beta"],parameters:{controls:{expanded:!0}}},o={render:()=>{const{object:e,isLoading:n}=a(d,s);return n||!(e!=null&&e.employeeDocuments)?r.jsx("div",{style:{height:"600px"},children:"Loading OSDK media…"}):r.jsx("div",{style:{height:"600px"},children:r.jsx(p,{media:e.employeeDocuments})})},parameters:{docs:{source:{code:`// Access media from an OSDK object's media reference property
const employee = useOsdkObject(Employee, employeePk);
<PdfViewer media={employee.employeeDocuments} />`}}}};var t,m,i;o.parameters={...o.parameters,docs:{...(t=o.parameters)==null?void 0:t.docs,source:{originalSource:`{
  render: () => {
    const {
      object: employee,
      isLoading
    } = useOsdkObject(Employee, MEDIA_EMPLOYEE_PK);
    if (isLoading || !employee?.employeeDocuments) {
      return <div style={{
        height: "600px"
      }}>Loading OSDK media…</div>;
    }
    return <div style={{
      height: "600px"
    }}>
        <PdfViewer media={employee.employeeDocuments} />
      </div>;
  },
  parameters: {
    docs: {
      source: {
        code: \`// Access media from an OSDK object's media reference property
const employee = useOsdkObject(Employee, employeePk);
<PdfViewer media={employee.employeeDocuments} />\`
      }
    }
  }
}`,...(i=(m=o.parameters)==null?void 0:m.docs)==null?void 0:i.source}}};const W=["Default"];export{o as Default,W as __namedExportsOrder,U as default};
