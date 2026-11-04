import{j as r,M as s}from"./iframe-B89B5CWM.js";import{P as p}from"./pdf-viewer-DT1frc6h.js";import{E as d}from"./Employee-BAk2o20h.js";import{u as a}from"./useOsdkObject-CZCnsbPx.js";import"./preload-helper-BQ99I6nt.js";import"./PdfViewer-f9llCLxm.js";import"./index-D9SW0Yle.js";import"./BasePdfViewer-WtPstKKo.js";import"./BasePdfViewer.module.css-DiRyNkZ4.js";import"./PdfViewerAnnotationLayer-jlC-OUy_.js";import"./constants-DsXMS3N3.js";import"./usePdfDocument-DRMM5buo.js";import"./PdfViewerOutlineSidebar-B3wuMY9u.js";import"./PdfViewerSidebarHeader-D0tN3U42.js";import"./useBaseUiId-DtDRBSq4.js";import"./useControlled-oTZtcuwA.js";import"./CompositeRoot-C40CMzTq.js";import"./CompositeItem-CiUmrhhL.js";import"./ToolbarRootContext-BUhhyvqJ.js";import"./composite-B50sO1rH.js";import"./svgIconContainer-ChPhhCD3.js";import"./PdfViewerSearchBar-DRI2AazI.js";import"./chevron-up-CDsSHZnt.js";import"./chevron-down-C8YyWC3O.js";import"./cross-BbpWCkxQ.js";import"./PdfViewerSidebar-B1FEwzSR.js";import"./index-B5gePnV1.js";import"./index-BWtJkqTj.js";import"./index-m1HPcpqW.js";import"./PdfViewerToolbar-BHYPZ07w.js";import"./Button-Y1tATrz0.js";import"./chevron-right-Drph_yb3.js";import"./Input-BTItB3zo.js";import"./search-BIvcGDFg.js";import"./spin-DEbYGW1X.js";import"./error-yAZoJobu.js";import"./withOsdkMetrics-Cct9f3WN.js";import"./makeExternalStore-Dng9Dmlv.js";const U={title:"Components/DocumentViewer/Renderers/PdfViewer",component:p,tags:["beta"],parameters:{controls:{expanded:!0}}},o={render:()=>{const{object:e,isLoading:n}=a(d,s);return n||!(e!=null&&e.employeeDocuments)?r.jsx("div",{style:{height:"600px"},children:"Loading OSDK media…"}):r.jsx("div",{style:{height:"600px"},children:r.jsx(p,{media:e.employeeDocuments})})},parameters:{docs:{source:{code:`// Access media from an OSDK object's media reference property
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
