import{j as r,M as s}from"./iframe-CI-n1SDT.js";import{P as p}from"./pdf-viewer-BQLGaeFL.js";import{E as d}from"./Employee-BAk2o20h.js";import{u as a}from"./useOsdkObject-DpQDQhkz.js";import"./preload-helper-Mdgc8Ktj.js";import"./PdfViewer-8w9nTsQQ.js";import"./index-DS4RSAQC.js";import"./BasePdfViewer-BzNAEiRZ.js";import"./BasePdfViewer.module.css-CGWcSp7_.js";import"./PdfViewerAnnotationLayer-CIMx31kW.js";import"./constants-DsXMS3N3.js";import"./usePdfDocument-Bjl4GkZL.js";import"./PdfViewerOutlineSidebar-CK7t-VpT.js";import"./PdfViewerSidebarHeader-C3W4WBoQ.js";import"./useBaseUiId-D17iYZZP.js";import"./useControlled-DqjHOya_.js";import"./CompositeRoot-CDVqXrYe.js";import"./CompositeItem-OcKtL5Oh.js";import"./ToolbarRootContext-3jcFlcdQ.js";import"./composite-BKY77e-J.js";import"./svgIconContainer-C5J3XXoW.js";import"./PdfViewerSearchBar-DBGtaAj6.js";import"./chevron-up-N_Vzfx1O.js";import"./chevron-down-BMoNsHmj.js";import"./cross-CG9JNs7m.js";import"./PdfViewerSidebar-aRMc9OHs.js";import"./index-Bh2eKMSj.js";import"./index-BCo1buGM.js";import"./index-CgpiMQTM.js";import"./PdfViewerToolbar-BiINS1XE.js";import"./Button-BU0hCYOg.js";import"./chevron-right-D9GWQ9Z8.js";import"./Input-CU7LnIit.js";import"./search-BJLPlObb.js";import"./spin-DSFvsknR.js";import"./error-BExaNGVy.js";import"./withOsdkMetrics-aN9WoVVm.js";import"./makeExternalStore-Dfr5mI6y.js";const U={title:"Components/DocumentViewer/Renderers/PdfViewer",component:p,tags:["beta"],parameters:{controls:{expanded:!0}}},o={render:()=>{const{object:e,isLoading:n}=a(d,s);return n||!(e!=null&&e.employeeDocuments)?r.jsx("div",{style:{height:"600px"},children:"Loading OSDK media…"}):r.jsx("div",{style:{height:"600px"},children:r.jsx(p,{media:e.employeeDocuments})})},parameters:{docs:{source:{code:`// Access media from an OSDK object's media reference property
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
