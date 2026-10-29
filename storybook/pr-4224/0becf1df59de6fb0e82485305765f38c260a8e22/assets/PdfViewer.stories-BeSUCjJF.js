import{j as r,M as s}from"./iframe-civNld3i.js";import{P as p}from"./pdf-viewer-BHRimLp2.js";import{E as d}from"./Employee-BAk2o20h.js";import{u as a}from"./useOsdkObject-BvNvucNU.js";import"./preload-helper-DGob3pd3.js";import"./PdfViewer-BOVRXaXF.js";import"./index-Bkk9aIG7.js";import"./BasePdfViewer-0Ud8wJxW.js";import"./BasePdfViewer.module.css-D-f8OHvS.js";import"./PdfViewerAnnotationLayer-DSgLlPZk.js";import"./constants-DsXMS3N3.js";import"./usePdfDocument-BIR_NhDB.js";import"./PdfViewerOutlineSidebar-D1Y7IJYH.js";import"./PdfViewerSidebarHeader-DYgolAhL.js";import"./useBaseUiId-DfebwqrC.js";import"./useControlled-DSRlTv1D.js";import"./CompositeRoot-DOU_4ZY5.js";import"./CompositeItem-CyFsxOTP.js";import"./ToolbarRootContext-CpIc7UTm.js";import"./composite-C8tN05lQ.js";import"./svgIconContainer-Cbt7mtvH.js";import"./PdfViewerSearchBar-Ct9Y7OOk.js";import"./chevron-up-DlEjIu5F.js";import"./chevron-down-Cc8MdjVP.js";import"./cross-Bl6bAFo8.js";import"./PdfViewerSidebar-DvSSTWIC.js";import"./index-Bz_nIjTo.js";import"./index-BcfoxrgG.js";import"./index-C2RAlQU3.js";import"./PdfViewerToolbar-wbYXTm7p.js";import"./Button-_66b78aL.js";import"./chevron-right-DRWn86pt.js";import"./Input-CzHf5EpN.js";import"./search-ulrdH098.js";import"./spin-VLZzdbNB.js";import"./error-9MfXm3EE.js";import"./withOsdkMetrics-VkQ2PjHN.js";import"./makeExternalStore-2tdSo-BF.js";const U={title:"Components/DocumentViewer/Renderers/PdfViewer",component:p,tags:["beta"],parameters:{controls:{expanded:!0}}},o={render:()=>{const{object:e,isLoading:n}=a(d,s);return n||!(e!=null&&e.employeeDocuments)?r.jsx("div",{style:{height:"600px"},children:"Loading OSDK media…"}):r.jsx("div",{style:{height:"600px"},children:r.jsx(p,{media:e.employeeDocuments})})},parameters:{docs:{source:{code:`// Access media from an OSDK object's media reference property
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
