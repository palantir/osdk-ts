import{j as r,M as s}from"./iframe-qmzCXWN4.js";import{P as p}from"./pdf-viewer-CnGhYzBJ.js";import{E as d}from"./Employee-BAk2o20h.js";import{u as a}from"./useOsdkObject-ULQ67D_D.js";import"./preload-helper-DfaqjKYe.js";import"./PdfViewer-B7Z6cjL4.js";import"./index-BHXsooho.js";import"./BasePdfViewer-DOm9abiT.js";import"./BasePdfViewer.module.css-4dXvxoGg.js";import"./PdfViewerAnnotationLayer-CdImyw7q.js";import"./constants-DsXMS3N3.js";import"./usePdfDocument-7030COlj.js";import"./PdfViewerOutlineSidebar-CXQjkils.js";import"./PdfViewerSidebarHeader-CE2-QrVL.js";import"./useBaseUiId-BJvBYugX.js";import"./useControlled-BcZ-NiAO.js";import"./CompositeRoot-BR-vXXxn.js";import"./CompositeItem-Csvh_d0_.js";import"./ToolbarRootContext-DGUkZWal.js";import"./composite-DL4bYzm9.js";import"./svgIconContainer-IgiOu0RR.js";import"./PdfViewerSearchBar-ttPYnLAR.js";import"./chevron-up-BdO3YuUC.js";import"./chevron-down-Dwy6C3BH.js";import"./cross-CQlGHY78.js";import"./PdfViewerSidebar-rj8sTGwA.js";import"./index-DQfy-mzv.js";import"./index-Cejy0gyw.js";import"./index-ChmUS2LB.js";import"./PdfViewerToolbar-D5q3Sx6N.js";import"./Button-DAis4ZgI.js";import"./chevron-right-DgjuBH-B.js";import"./Input-CFsjF6HE.js";import"./search-Diu7klqt.js";import"./spin-BZFObr0A.js";import"./error-BLaFtDHL.js";import"./withOsdkMetrics-D5CdmZxO.js";import"./makeExternalStore-BXxLBZ9K.js";const U={title:"Components/DocumentViewer/Renderers/PdfViewer",component:p,tags:["beta"],parameters:{controls:{expanded:!0}}},o={render:()=>{const{object:e,isLoading:n}=a(d,s);return n||!(e!=null&&e.employeeDocuments)?r.jsx("div",{style:{height:"600px"},children:"Loading OSDK media…"}):r.jsx("div",{style:{height:"600px"},children:r.jsx(p,{media:e.employeeDocuments})})},parameters:{docs:{source:{code:`// Access media from an OSDK object's media reference property
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
