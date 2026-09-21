import{j as r,M as s}from"./iframe-DRBbLQEP.js";import{P as p}from"./pdf-viewer-BKuAOPq5.js";import{E as d}from"./Employee-BAk2o20h.js";import{u as a}from"./useOsdkObject-BAXEojdM.js";import"./preload-helper-Bt1-OzgM.js";import"./PdfViewer-tjGazEU6.js";import"./index-DKGchVF5.js";import"./BasePdfViewer-Dor6xLYu.js";import"./BasePdfViewer.module.css-B0WfrqKM.js";import"./PdfViewerAnnotationLayer-DHUw7zJi.js";import"./constants-DsXMS3N3.js";import"./usePdfDocument-DCzb_tQZ.js";import"./PdfViewerOutlineSidebar-CTAm9wea.js";import"./PdfViewerSidebarHeader-C09__M-4.js";import"./useBaseUiId-0Fcyn-Yx.js";import"./useControlled-D-0ahwbd.js";import"./CompositeRoot-B4P7Z91p.js";import"./CompositeItem-DHU6LUkY.js";import"./ToolbarRootContext-Dq5VhD1u.js";import"./composite-BQ1GsMvw.js";import"./svgIconContainer-DUoraq0-.js";import"./PdfViewerSearchBar-CL9t3vpB.js";import"./chevron-up-MpGDbAku.js";import"./chevron-down-D9sfivXL.js";import"./cross-CUrCvhqT.js";import"./PdfViewerSidebar-ct34gRd4.js";import"./index-BFx1Z8Pw.js";import"./index-6P3gaHhW.js";import"./index-DRFL7mOG.js";import"./PdfViewerToolbar-BVhGvaUk.js";import"./Button-YsHjEWcc.js";import"./chevron-right-B33YkINH.js";import"./Input-DCqgylfG.js";import"./search-DM25wUgq.js";import"./spin-CMwvnnXL.js";import"./error-Bly5Bi76.js";import"./withOsdkMetrics-BqMyyD8f.js";import"./makeExternalStore-DUU8gKNu.js";const U={title:"Components/DocumentViewer/Renderers/PdfViewer",component:p,tags:["beta"],parameters:{controls:{expanded:!0}}},o={render:()=>{const{object:e,isLoading:n}=a(d,s);return n||!(e!=null&&e.employeeDocuments)?r.jsx("div",{style:{height:"600px"},children:"Loading OSDK media…"}):r.jsx("div",{style:{height:"600px"},children:r.jsx(p,{media:e.employeeDocuments})})},parameters:{docs:{source:{code:`// Access media from an OSDK object's media reference property
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
