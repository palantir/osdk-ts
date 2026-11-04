import{j as r,M as s}from"./iframe-BJ8SXgdR.js";import{P as p}from"./pdf-viewer-CHY6jm92.js";import{E as d}from"./Employee-BAk2o20h.js";import{u as a}from"./useOsdkObject-DT3apd9m.js";import"./preload-helper-V6nC4EeU.js";import"./PdfViewer-Dnr7e_-2.js";import"./index-Bw4Jw5oO.js";import"./BasePdfViewer-CNUIpvfY.js";import"./BasePdfViewer.module.css-DPrkewLm.js";import"./PdfViewerAnnotationLayer-B2RlmuD2.js";import"./constants-DsXMS3N3.js";import"./usePdfDocument-MSBP5yfl.js";import"./PdfViewerOutlineSidebar-DHDm9CmK.js";import"./PdfViewerSidebarHeader-DLs5KpYu.js";import"./useBaseUiId-M7m_99-n.js";import"./useControlled-CjUkOTZX.js";import"./CompositeRoot-mA4aiOB2.js";import"./CompositeItem-ehmW8yGD.js";import"./ToolbarRootContext-r3sR1laS.js";import"./composite-BEEWgOuz.js";import"./svgIconContainer-CsUfQGRN.js";import"./PdfViewerSearchBar-BBSZGtSb.js";import"./chevron-up-BfwT6KUO.js";import"./chevron-down-oM9ZgJIx.js";import"./cross-Cg7DwYSC.js";import"./PdfViewerSidebar-B8IfUIpF.js";import"./index-CctNg8Ui.js";import"./index-DxcYU98l.js";import"./index--VHPLkHF.js";import"./PdfViewerToolbar-DWjJ5cOy.js";import"./Button-DRmMomPf.js";import"./chevron-right-ClxRe565.js";import"./Input-Bx9J3YZM.js";import"./search-Dw_fxnZ-.js";import"./spin-DY2xoM3E.js";import"./error-C-Q6AIHf.js";import"./withOsdkMetrics-CteTFdb3.js";import"./makeExternalStore-CufKkCEE.js";const U={title:"Components/DocumentViewer/Renderers/PdfViewer",component:p,tags:["beta"],parameters:{controls:{expanded:!0}}},o={render:()=>{const{object:e,isLoading:n}=a(d,s);return n||!(e!=null&&e.employeeDocuments)?r.jsx("div",{style:{height:"600px"},children:"Loading OSDK media…"}):r.jsx("div",{style:{height:"600px"},children:r.jsx(p,{media:e.employeeDocuments})})},parameters:{docs:{source:{code:`// Access media from an OSDK object's media reference property
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
