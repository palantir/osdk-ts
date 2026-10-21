import{j as r,M as s}from"./iframe-Czm_u8Ar.js";import{P as p}from"./pdf-viewer-DG0Gp6SA.js";import{E as d}from"./Employee-BAk2o20h.js";import{u as a}from"./useOsdkObject-D27WEspn.js";import"./preload-helper-BuAj_jN-.js";import"./PdfViewer-Cneyml8A.js";import"./index-XKqF3n2I.js";import"./BasePdfViewer-vWvdG7Hr.js";import"./BasePdfViewer.module.css-DqyFBdBR.js";import"./PdfViewerAnnotationLayer-yGG1GTa1.js";import"./constants-DsXMS3N3.js";import"./usePdfDocument-D74eHrB2.js";import"./PdfViewerOutlineSidebar-BdYnAw3q.js";import"./PdfViewerSidebarHeader-Dknn9JmA.js";import"./useBaseUiId-Me4okoRq.js";import"./useControlled-Bgi6lmRr.js";import"./CompositeRoot-CXMGTMXm.js";import"./CompositeItem-y1T0uWu2.js";import"./ToolbarRootContext-CxE6VRH9.js";import"./composite-C_KD_tny.js";import"./svgIconContainer-CgTn6RWL.js";import"./PdfViewerSearchBar-cx-INNCU.js";import"./chevron-up-Cm_QjhT8.js";import"./chevron-down-CPUKsW46.js";import"./cross-BlHijBJ4.js";import"./PdfViewerSidebar-DoDdyIb-.js";import"./index-C7-NS5HO.js";import"./index-C3TofrwO.js";import"./index-D17LzocE.js";import"./PdfViewerToolbar-CAVF42bE.js";import"./Button-DycfsGl1.js";import"./chevron-right-DS0wVnA3.js";import"./Input-C4CruWhv.js";import"./search-DY6wtpjt.js";import"./spin-Diu3pQ2R.js";import"./error-DU7bFYdf.js";import"./withOsdkMetrics-BQzxgqT1.js";import"./makeExternalStore-DKjvIENS.js";const U={title:"Components/DocumentViewer/Renderers/PdfViewer",component:p,tags:["beta"],parameters:{controls:{expanded:!0}}},o={render:()=>{const{object:e,isLoading:n}=a(d,s);return n||!(e!=null&&e.employeeDocuments)?r.jsx("div",{style:{height:"600px"},children:"Loading OSDK media…"}):r.jsx("div",{style:{height:"600px"},children:r.jsx(p,{media:e.employeeDocuments})})},parameters:{docs:{source:{code:`// Access media from an OSDK object's media reference property
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
