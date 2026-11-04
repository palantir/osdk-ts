import{j as r,M as s}from"./iframe-BdttGBHS.js";import{P as p}from"./pdf-viewer-DLGCd7fJ.js";import{E as d}from"./Employee-BAk2o20h.js";import{u as a}from"./useOsdkObject-KfMNvRHk.js";import"./preload-helper-D52nztRO.js";import"./PdfViewer-7YvYju-7.js";import"./index-fJrMVTua.js";import"./BasePdfViewer-DjyHNKAm.js";import"./BasePdfViewer.module.css-D4TYqefw.js";import"./PdfViewerAnnotationLayer-CT2jyVeV.js";import"./constants-DsXMS3N3.js";import"./usePdfDocument-CX8RFlrW.js";import"./PdfViewerOutlineSidebar-A3uZhLtk.js";import"./PdfViewerSidebarHeader-C8yc6C6O.js";import"./useBaseUiId-TpOnm0ph.js";import"./useControlled-BCWd1xNc.js";import"./CompositeRoot-BXBOvLy7.js";import"./CompositeItem-BUi6sRIo.js";import"./ToolbarRootContext-CKT8QuMl.js";import"./composite-D2FhvqPV.js";import"./svgIconContainer-d3TxlLsS.js";import"./PdfViewerSearchBar-DdPWl_ff.js";import"./chevron-up-CikR5MHm.js";import"./chevron-down-CX5I5Ird.js";import"./cross-B_ladZW0.js";import"./PdfViewerSidebar-D0Qv0aTh.js";import"./index-RDL0QRGf.js";import"./index-DUfIyUAM.js";import"./index-CGhVKo7Q.js";import"./PdfViewerToolbar-DqgUPOhC.js";import"./Button-DZ1LePF0.js";import"./chevron-right-Cp04hZ9q.js";import"./Input-DYv89jnk.js";import"./search-SHaXv7OY.js";import"./spin-SNScNHA1.js";import"./error-CHI3XqLV.js";import"./withOsdkMetrics-BQHwLSj1.js";import"./makeExternalStore-Ds9BSHVT.js";const U={title:"Components/DocumentViewer/Renderers/PdfViewer",component:p,tags:["beta"],parameters:{controls:{expanded:!0}}},o={render:()=>{const{object:e,isLoading:n}=a(d,s);return n||!(e!=null&&e.employeeDocuments)?r.jsx("div",{style:{height:"600px"},children:"Loading OSDK media…"}):r.jsx("div",{style:{height:"600px"},children:r.jsx(p,{media:e.employeeDocuments})})},parameters:{docs:{source:{code:`// Access media from an OSDK object's media reference property
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
