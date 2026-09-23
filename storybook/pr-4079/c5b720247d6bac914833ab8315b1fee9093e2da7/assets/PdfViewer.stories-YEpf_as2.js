import{j as r,M as s}from"./iframe-BF6_9Xjc.js";import{P as p}from"./pdf-viewer-B5ZQm1et.js";import{E as d}from"./Employee-BAk2o20h.js";import{u as a}from"./useOsdkObject-DtdXkhCH.js";import"./preload-helper-CVsiSqQ7.js";import"./PdfViewer-Df3ddCPV.js";import"./index-B1Ya2fBr.js";import"./BasePdfViewer-6ll8XwTS.js";import"./BasePdfViewer.module.css-BuTptlO8.js";import"./PdfViewerAnnotationLayer-c_IPha39.js";import"./constants-DsXMS3N3.js";import"./usePdfDocument-DNiX6aAf.js";import"./PdfViewerOutlineSidebar-2dHYqIcd.js";import"./PdfViewerSidebarHeader-CyS_7T6s.js";import"./useBaseUiId-s3ehRo10.js";import"./useControlled-BXYuK13Z.js";import"./CompositeRoot-DgAY31Ct.js";import"./CompositeItem-DI8gVSRQ.js";import"./ToolbarRootContext-DHHYvc0f.js";import"./composite-BGGp11kx.js";import"./svgIconContainer-CQE4WPFB.js";import"./PdfViewerSearchBar-BWqUcVR7.js";import"./chevron-up-DFcX3ZbM.js";import"./chevron-down-CVGUePFi.js";import"./cross-_UU9sZ5F.js";import"./PdfViewerSidebar-CMFiKbj-.js";import"./index-qnSLgzX3.js";import"./index-CYSW1VxS.js";import"./index-aIhJZAmJ.js";import"./PdfViewerToolbar-CMtRMVnG.js";import"./Button-SD0gx5bd.js";import"./chevron-right-DAG3PB9Z.js";import"./Input-RBsPV06C.js";import"./search-BUGVh3PQ.js";import"./spin-7t4Cp4Ag.js";import"./error-Dk0JQDUN.js";import"./withOsdkMetrics-R2jYMWim.js";import"./makeExternalStore-BGO-jF6d.js";const U={title:"Components/DocumentViewer/Renderers/PdfViewer",component:p,tags:["beta"],parameters:{controls:{expanded:!0}}},o={render:()=>{const{object:e,isLoading:n}=a(d,s);return n||!(e!=null&&e.employeeDocuments)?r.jsx("div",{style:{height:"600px"},children:"Loading OSDK media…"}):r.jsx("div",{style:{height:"600px"},children:r.jsx(p,{media:e.employeeDocuments})})},parameters:{docs:{source:{code:`// Access media from an OSDK object's media reference property
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
