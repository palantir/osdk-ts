import{j as r,M as s}from"./iframe-UxLT7lYy.js";import{P as p}from"./pdf-viewer-B8YH5R1P.js";import{E as d}from"./Employee-BAk2o20h.js";import{u as a}from"./useOsdkObject-BgeGk8-Q.js";import"./preload-helper-CV6iJ-wL.js";import"./PdfViewer-DHc2sQLr.js";import"./index-CaLIOjRM.js";import"./BasePdfViewer-CkKkjGXX.js";import"./BasePdfViewer.module.css-BVUByANH.js";import"./PdfViewerAnnotationLayer-CFBj_AUE.js";import"./constants-DsXMS3N3.js";import"./usePdfDocument-f78Srk9d.js";import"./PdfViewerOutlineSidebar-DEPeZLHG.js";import"./PdfViewerSidebarHeader-ZPkSyn8K.js";import"./useBaseUiId-DR0pgCNJ.js";import"./useControlled-CDHE3Jck.js";import"./CompositeRoot-Dn07G7-y.js";import"./CompositeItem-Kvq0UPS2.js";import"./ToolbarRootContext-19oVc1QJ.js";import"./composite-BYQddcpi.js";import"./svgIconContainer-HqUabHbJ.js";import"./PdfViewerSearchBar-Bwq4Ev-D.js";import"./chevron-up-5xzA1rC0.js";import"./chevron-down-CNsNwb1i.js";import"./cross-gbTOR5Si.js";import"./PdfViewerSidebar-CaWu5LAJ.js";import"./index-azpejN4Q.js";import"./index-5Zs5CZ2c.js";import"./index-C8h5tRSe.js";import"./PdfViewerToolbar-4KQW9AdR.js";import"./Button-DZCJ8vSD.js";import"./chevron-right-BH4d7ay7.js";import"./Input-DHvCRjgv.js";import"./search-K5dECyKJ.js";import"./spin-fvTSjvTu.js";import"./error-CvnQXRAs.js";import"./withOsdkMetrics-CgTr75Ie.js";import"./makeExternalStore-D1qwl-gG.js";const U={title:"Components/DocumentViewer/Renderers/PdfViewer",component:p,tags:["beta"],parameters:{controls:{expanded:!0}}},o={render:()=>{const{object:e,isLoading:n}=a(d,s);return n||!(e!=null&&e.employeeDocuments)?r.jsx("div",{style:{height:"600px"},children:"Loading OSDK media…"}):r.jsx("div",{style:{height:"600px"},children:r.jsx(p,{media:e.employeeDocuments})})},parameters:{docs:{source:{code:`// Access media from an OSDK object's media reference property
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
