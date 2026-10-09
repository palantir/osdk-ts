import{j as r,M as s}from"./iframe-DX-l5oxf.js";import{P as p}from"./pdf-viewer-BLJWN-db.js";import{E as d}from"./Employee-BAk2o20h.js";import{u as a}from"./useOsdkObject-V3JP-8HR.js";import"./preload-helper-BOWhuEYI.js";import"./PdfViewer-DYH9LbwY.js";import"./index-hUdVkOSF.js";import"./BasePdfViewer-5WfmEPr_.js";import"./BasePdfViewer.module.css-DQOSwpfC.js";import"./PdfViewerAnnotationLayer-D9a4dlxm.js";import"./constants-DsXMS3N3.js";import"./usePdfDocument-L1ZjEebV.js";import"./PdfViewerOutlineSidebar-BOfWYC6c.js";import"./PdfViewerSidebarHeader-Br6jANGj.js";import"./useBaseUiId-BTelihs1.js";import"./useControlled-CE0B1UP9.js";import"./CompositeRoot-DcsvZKv9.js";import"./CompositeItem-BsouXCK9.js";import"./ToolbarRootContext-PE3H7k4f.js";import"./composite-DHW7DpWZ.js";import"./svgIconContainer-DSaf8hGr.js";import"./PdfViewerSearchBar-C1VvSwpI.js";import"./chevron-up-H_CuS6sk.js";import"./chevron-down-D6qpfBFJ.js";import"./cross-DToDNxNQ.js";import"./PdfViewerSidebar-CI-ko492.js";import"./index-DoliQ3t-.js";import"./index-CvzBQu91.js";import"./index-DKU9qBjC.js";import"./PdfViewerToolbar-Bii143_C.js";import"./Button-Bia0gDW5.js";import"./chevron-right-bkPByeNI.js";import"./Input-CqfuiCDH.js";import"./search-DT7eSnzT.js";import"./spin-CdQ74IHj.js";import"./error-BJoLJTeb.js";import"./withOsdkMetrics-DEq0VNPe.js";import"./makeExternalStore-Djn3Ds7r.js";const U={title:"Components/DocumentViewer/Renderers/PdfViewer",component:p,tags:["beta"],parameters:{controls:{expanded:!0}}},o={render:()=>{const{object:e,isLoading:n}=a(d,s);return n||!(e!=null&&e.employeeDocuments)?r.jsx("div",{style:{height:"600px"},children:"Loading OSDK media…"}):r.jsx("div",{style:{height:"600px"},children:r.jsx(p,{media:e.employeeDocuments})})},parameters:{docs:{source:{code:`// Access media from an OSDK object's media reference property
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
