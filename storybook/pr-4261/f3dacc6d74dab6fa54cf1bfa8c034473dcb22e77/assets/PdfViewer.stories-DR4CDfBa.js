import{j as r,M as s}from"./iframe-Bgb2wSaw.js";import{P as p}from"./pdf-viewer-BAUiYoLT.js";import{E as d}from"./Employee-BAk2o20h.js";import{u as a}from"./useOsdkObject-CXTBADzI.js";import"./preload-helper-CAyUgZKm.js";import"./PdfViewer-B62UgE_4.js";import"./index-Lnta--SZ.js";import"./BasePdfViewer-CmROWtMB.js";import"./BasePdfViewer.module.css-B6aeoT0t.js";import"./PdfViewerAnnotationLayer-D_YCeXrH.js";import"./constants-DsXMS3N3.js";import"./usePdfDocument-BHqK6E_K.js";import"./PdfViewerOutlineSidebar-UQzz3Qwd.js";import"./PdfViewerSidebarHeader-DM00WMkD.js";import"./useBaseUiId-Cl3siqr8.js";import"./useControlled-C5Efmt4q.js";import"./CompositeRoot-Fi8j_VfN.js";import"./CompositeItem-D-n20gZA.js";import"./ToolbarRootContext-CPL7CHly.js";import"./composite-BJNESzre.js";import"./svgIconContainer-DLn89RUi.js";import"./PdfViewerSearchBar-DGsJ-Gkl.js";import"./chevron-up-D1mB9LMY.js";import"./chevron-down-Lx8JbYiI.js";import"./cross-BBwyRiM8.js";import"./PdfViewerSidebar-DsY6neSp.js";import"./index-D1daQUXJ.js";import"./index-DE8mIe1g.js";import"./index-CYHybnYf.js";import"./PdfViewerToolbar-Do5c_VPO.js";import"./Button-ckHDf9dN.js";import"./chevron-right-Dd1Ps-Ai.js";import"./Input-CqMZoAkj.js";import"./search-B8Q2SaYZ.js";import"./spin-BswcpCDT.js";import"./error-4j4VkswI.js";import"./withOsdkMetrics-D_vYT_n9.js";import"./makeExternalStore-C86iDpxn.js";const U={title:"Components/DocumentViewer/Renderers/PdfViewer",component:p,tags:["beta"],parameters:{controls:{expanded:!0}}},o={render:()=>{const{object:e,isLoading:n}=a(d,s);return n||!(e!=null&&e.employeeDocuments)?r.jsx("div",{style:{height:"600px"},children:"Loading OSDK media…"}):r.jsx("div",{style:{height:"600px"},children:r.jsx(p,{media:e.employeeDocuments})})},parameters:{docs:{source:{code:`// Access media from an OSDK object's media reference property
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
