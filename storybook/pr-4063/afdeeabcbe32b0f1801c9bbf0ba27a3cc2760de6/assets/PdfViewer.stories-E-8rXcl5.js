import{j as r,M as s}from"./iframe-Cb7UimVT.js";import{P as p}from"./pdf-viewer-C-CSb5DV.js";import{E as d}from"./Employee-BAk2o20h.js";import{u as a}from"./useOsdkObject-PjZohLvg.js";import"./preload-helper-DGUTmafK.js";import"./PdfViewer-BSi15_AG.js";import"./index-BIGxdzOf.js";import"./BasePdfViewer-FUV7nRG8.js";import"./BasePdfViewer.module.css-Dq1X16-e.js";import"./PdfViewerAnnotationLayer-CH7dwkGz.js";import"./constants-DsXMS3N3.js";import"./usePdfDocument-CUHggE-X.js";import"./PdfViewerOutlineSidebar-KhfI2hCM.js";import"./PdfViewerSidebarHeader-75RSt9hI.js";import"./useBaseUiId-iGVUlg7M.js";import"./useControlled-rmviEhSc.js";import"./CompositeRoot-D6PncqCn.js";import"./CompositeItem-BWbQHkr6.js";import"./ToolbarRootContext-BZu2CGWG.js";import"./composite-DbE7UY6k.js";import"./svgIconContainer-ByYucP5b.js";import"./PdfViewerSearchBar-OWJ1Pj4U.js";import"./chevron-up-B-j03EAz.js";import"./chevron-down-DGQwsfv-.js";import"./cross-CSr-jiik.js";import"./PdfViewerSidebar-CSldAbtl.js";import"./index-DWXDMbEi.js";import"./index-BOZbfH9s.js";import"./index-DSTszXnE.js";import"./PdfViewerToolbar-DbhToGZD.js";import"./Button-DpmbPgxa.js";import"./chevron-right-C8ENjTg3.js";import"./Input-k33bDy71.js";import"./search-CFBfi85w.js";import"./spin-D9R7cw5h.js";import"./error-DCdQoOyW.js";import"./withOsdkMetrics-BMDPVH0d.js";import"./makeExternalStore-CitLye_P.js";const U={title:"Components/DocumentViewer/Renderers/PdfViewer",component:p,tags:["beta"],parameters:{controls:{expanded:!0}}},o={render:()=>{const{object:e,isLoading:n}=a(d,s);return n||!(e!=null&&e.employeeDocuments)?r.jsx("div",{style:{height:"600px"},children:"Loading OSDK media…"}):r.jsx("div",{style:{height:"600px"},children:r.jsx(p,{media:e.employeeDocuments})})},parameters:{docs:{source:{code:`// Access media from an OSDK object's media reference property
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
