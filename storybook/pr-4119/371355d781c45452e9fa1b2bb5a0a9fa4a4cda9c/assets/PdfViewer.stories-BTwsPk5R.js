import{j as r,M as s}from"./iframe-CrH6Yrlk.js";import{P as p}from"./pdf-viewer-Bn1owYXR.js";import{E as d}from"./Employee-BAk2o20h.js";import{u as a}from"./useOsdkObject-BR-CXGEy.js";import"./preload-helper-DWN1nqfF.js";import"./PdfViewer-B9uv_VL_.js";import"./index-BLeB2LZ4.js";import"./BasePdfViewer-KIDeS6_a.js";import"./BasePdfViewer.module.css-sdixrHNZ.js";import"./PdfViewerAnnotationLayer-CCYktqbS.js";import"./constants-DsXMS3N3.js";import"./usePdfDocument-DnvxmgI9.js";import"./PdfViewerOutlineSidebar-BI0uLwsO.js";import"./PdfViewerSidebarHeader-BYszQmNV.js";import"./useBaseUiId-DxKrUPMo.js";import"./useControlled-BHyUcUtS.js";import"./CompositeRoot-rsR3p22P.js";import"./CompositeItem-BB8cOYaX.js";import"./ToolbarRootContext-BfVZ25NV.js";import"./composite-ffO3RfE4.js";import"./svgIconContainer-BOBFAYEP.js";import"./PdfViewerSearchBar-BKHpNpbh.js";import"./chevron-up-aXNeo19j.js";import"./chevron-down-Do4cSabx.js";import"./cross-Djpe7veO.js";import"./PdfViewerSidebar-CIs5hWYP.js";import"./index-ow98vrD3.js";import"./index-Dnjnym33.js";import"./index-BXkTUwMI.js";import"./PdfViewerToolbar-Cf7qLatT.js";import"./Button-ChVjuzMV.js";import"./chevron-right-_qoyqaLx.js";import"./Input-CO-EhnoV.js";import"./search-C_RAyaII.js";import"./spin-DjxqVyck.js";import"./error-Bb5TXnmt.js";import"./withOsdkMetrics-B1PE_2r3.js";import"./makeExternalStore-CiLIO8iU.js";const U={title:"Components/DocumentViewer/Renderers/PdfViewer",component:p,tags:["beta"],parameters:{controls:{expanded:!0}}},o={render:()=>{const{object:e,isLoading:n}=a(d,s);return n||!(e!=null&&e.employeeDocuments)?r.jsx("div",{style:{height:"600px"},children:"Loading OSDK media…"}):r.jsx("div",{style:{height:"600px"},children:r.jsx(p,{media:e.employeeDocuments})})},parameters:{docs:{source:{code:`// Access media from an OSDK object's media reference property
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
