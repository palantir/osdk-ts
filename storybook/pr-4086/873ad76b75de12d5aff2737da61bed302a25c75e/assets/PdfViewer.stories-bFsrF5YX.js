import{j as r,M as s}from"./iframe-DaD-kZgD.js";import{P as p}from"./pdf-viewer-Cd_iWKO1.js";import{E as d}from"./Employee-BAk2o20h.js";import{u as a}from"./useOsdkObject-DM_gr1yz.js";import"./preload-helper-B5rjj0RW.js";import"./PdfViewer-DxHfEFG7.js";import"./index-BunTbxSe.js";import"./BasePdfViewer-B-4-svjw.js";import"./BasePdfViewer.module.css-mNi9xYEW.js";import"./PdfViewerAnnotationLayer-D1ogFeg8.js";import"./constants-DsXMS3N3.js";import"./usePdfDocument-aDjCJapn.js";import"./PdfViewerOutlineSidebar-BMz7vFXr.js";import"./PdfViewerSidebarHeader-Y-tYoGcP.js";import"./useBaseUiId-D_mAJVOg.js";import"./useControlled-DETcBtyj.js";import"./CompositeRoot-DW9R-AQV.js";import"./CompositeItem-vvOtpWtM.js";import"./ToolbarRootContext-BppVD4NW.js";import"./composite-CvSGc8uG.js";import"./svgIconContainer-BuHjzoHd.js";import"./PdfViewerSearchBar-BgjKp27x.js";import"./chevron-up-DDjq6qX6.js";import"./chevron-down-CvKLjMsu.js";import"./cross-VN_C6F1c.js";import"./PdfViewerSidebar-p0yCOUjC.js";import"./index-BBz_uzYR.js";import"./index-BLudVFJt.js";import"./index-CibRS9EP.js";import"./PdfViewerToolbar-Cq382smi.js";import"./Button-DIAY5YBq.js";import"./chevron-right-DxilSGN_.js";import"./Input-DoThMFAr.js";import"./search-Ba2RAVKf.js";import"./spin-QZKX24cu.js";import"./error-CF8X_kHA.js";import"./withOsdkMetrics-D6sZIqzZ.js";import"./makeExternalStore-DiTJ7dI9.js";const U={title:"Components/DocumentViewer/Renderers/PdfViewer",component:p,tags:["beta"],parameters:{controls:{expanded:!0}}},o={render:()=>{const{object:e,isLoading:n}=a(d,s);return n||!(e!=null&&e.employeeDocuments)?r.jsx("div",{style:{height:"600px"},children:"Loading OSDK media…"}):r.jsx("div",{style:{height:"600px"},children:r.jsx(p,{media:e.employeeDocuments})})},parameters:{docs:{source:{code:`// Access media from an OSDK object's media reference property
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
