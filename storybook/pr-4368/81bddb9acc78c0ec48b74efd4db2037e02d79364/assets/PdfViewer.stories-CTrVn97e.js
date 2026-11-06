import{j as r,M as s}from"./iframe-Bq9JkkcV.js";import{P as p}from"./pdf-viewer-CYCmz59m.js";import{E as d}from"./Employee-BAk2o20h.js";import{u as a}from"./useOsdkObject-BOMvc-PY.js";import"./preload-helper-Cqv5s2jj.js";import"./PdfViewer-D1jWFXpG.js";import"./index-LFRJGjst.js";import"./BasePdfViewer-C3nuPTdk.js";import"./BasePdfViewer.module.css-N8qx-Hmr.js";import"./PdfViewerAnnotationLayer-BzeP8obA.js";import"./constants-DsXMS3N3.js";import"./usePdfDocument-1Mo4tEcT.js";import"./PdfViewerOutlineSidebar-hZ3l9L-I.js";import"./PdfViewerSidebarHeader-y13eKM-V.js";import"./useBaseUiId-CRKQdUfR.js";import"./useControlled-BOwVH0ok.js";import"./CompositeRoot-Aca42CFo.js";import"./CompositeItem-CNijsmc1.js";import"./ToolbarRootContext-Cg88OliQ.js";import"./composite-B8AhlmVu.js";import"./svgIconContainer-Cf0ZuXQT.js";import"./PdfViewerSearchBar-DITAPOjw.js";import"./chevron-up-CjQlwaLo.js";import"./chevron-down-BLdYc2zE.js";import"./cross-Bk3fKCS7.js";import"./PdfViewerSidebar-xJUSM4vA.js";import"./index-CPslm5If.js";import"./index-BLJWGSk2.js";import"./index-CiXmcJM_.js";import"./PdfViewerToolbar-k4LH_TLX.js";import"./Button-CXvtykDV.js";import"./chevron-right-DBOSRH_d.js";import"./Input-CVFiTt6w.js";import"./search-BNWG7jMi.js";import"./spin-BIiAVpjQ.js";import"./error-Bc6kFz4J.js";import"./withOsdkMetrics-BtcppCcW.js";import"./makeExternalStore-BoBeGpud.js";const U={title:"Components/DocumentViewer/Renderers/PdfViewer",component:p,tags:["beta"],parameters:{controls:{expanded:!0}}},o={render:()=>{const{object:e,isLoading:n}=a(d,s);return n||!(e!=null&&e.employeeDocuments)?r.jsx("div",{style:{height:"600px"},children:"Loading OSDK media…"}):r.jsx("div",{style:{height:"600px"},children:r.jsx(p,{media:e.employeeDocuments})})},parameters:{docs:{source:{code:`// Access media from an OSDK object's media reference property
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
