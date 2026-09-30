import{j as r,M as s}from"./iframe-BLOGWzes.js";import{P as p}from"./pdf-viewer-4DffhdLb.js";import{E as d}from"./Employee-BAk2o20h.js";import{u as a}from"./useOsdkObject-Ds1VFhG6.js";import"./preload-helper-DKYPYdJ1.js";import"./PdfViewer-C7sUbF1w.js";import"./index-Dw_R0R3u.js";import"./BasePdfViewer-WywpPg4x.js";import"./BasePdfViewer.module.css-B6JEMSeQ.js";import"./PdfViewerAnnotationLayer-QrOFNyzM.js";import"./constants-DsXMS3N3.js";import"./usePdfDocument-DnyA04-M.js";import"./PdfViewerOutlineSidebar-CN1JORtV.js";import"./PdfViewerSidebarHeader-ZGtFc6vU.js";import"./useBaseUiId-0dkTavyr.js";import"./useControlled-sfZuFzcU.js";import"./CompositeRoot-DOVCCxU2.js";import"./CompositeItem-B6ZRSaDZ.js";import"./ToolbarRootContext-Y2iZ9Ujq.js";import"./composite-BaecbUIv.js";import"./svgIconContainer-DOUGpiyN.js";import"./PdfViewerSearchBar-toa8L46g.js";import"./chevron-up-DgAUgNiJ.js";import"./chevron-down-Eag7e6pI.js";import"./cross-81MWidH4.js";import"./PdfViewerSidebar-BqHPy39_.js";import"./index-BIwD5Jbf.js";import"./index-C_xx75lm.js";import"./index-CURDKWBa.js";import"./PdfViewerToolbar-DJXHAIIu.js";import"./Button-BCMvPzPq.js";import"./chevron-right-CSKabfRv.js";import"./Input-BWx5Xf6Z.js";import"./search-DLp12F_x.js";import"./spin-CLve8YZ7.js";import"./error-CiKKwT6x.js";import"./withOsdkMetrics-DrML1D1X.js";import"./makeExternalStore-DETb4-Ws.js";const U={title:"Components/DocumentViewer/Renderers/PdfViewer",component:p,tags:["beta"],parameters:{controls:{expanded:!0}}},o={render:()=>{const{object:e,isLoading:n}=a(d,s);return n||!(e!=null&&e.employeeDocuments)?r.jsx("div",{style:{height:"600px"},children:"Loading OSDK media…"}):r.jsx("div",{style:{height:"600px"},children:r.jsx(p,{media:e.employeeDocuments})})},parameters:{docs:{source:{code:`// Access media from an OSDK object's media reference property
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
