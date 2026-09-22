import{j as r,M as s}from"./iframe-CxxM9p3K.js";import{P as p}from"./pdf-viewer-DtUg-U7x.js";import{E as d}from"./Employee-BAk2o20h.js";import{u as a}from"./useOsdkObject-CMMJzRxO.js";import"./preload-helper-Clfhc9e2.js";import"./PdfViewer-EeNmrcMj.js";import"./index-BFBsPuy5.js";import"./BasePdfViewer-CX6Lq1gV.js";import"./BasePdfViewer.module.css-BHVfT2UQ.js";import"./PdfViewerAnnotationLayer-DuQavW4b.js";import"./constants-DsXMS3N3.js";import"./usePdfDocument-Bp3cDoKW.js";import"./PdfViewerOutlineSidebar-CGuObeJH.js";import"./PdfViewerSidebarHeader-CjGtP_SI.js";import"./useBaseUiId-6hcgy7hR.js";import"./useControlled-BM7wy7zH.js";import"./CompositeRoot-BECvqUHm.js";import"./CompositeItem-D91fXLRV.js";import"./ToolbarRootContext-DrjoHCqu.js";import"./composite-DnTfWsZ7.js";import"./svgIconContainer-BDX64ThR.js";import"./PdfViewerSearchBar-CdpQsZc7.js";import"./chevron-up-Drv3ABkA.js";import"./chevron-down-jQiKIGSz.js";import"./cross-DVlZmvQu.js";import"./PdfViewerSidebar-CAK5h_xa.js";import"./index-DXQ0Y341.js";import"./index-Cmw2FWOc.js";import"./index-U9rL3bD6.js";import"./PdfViewerToolbar-D7EL940p.js";import"./Button-BSoYYLdN.js";import"./chevron-right-EaRVGTo6.js";import"./Input-BEL6yzPH.js";import"./search-BLctbnBP.js";import"./spin-Dom_LUpm.js";import"./error-CFTb0-g7.js";import"./withOsdkMetrics-axCUhS1P.js";import"./makeExternalStore-Ryz_3n-W.js";const U={title:"Components/DocumentViewer/Renderers/PdfViewer",component:p,tags:["beta"],parameters:{controls:{expanded:!0}}},o={render:()=>{const{object:e,isLoading:n}=a(d,s);return n||!(e!=null&&e.employeeDocuments)?r.jsx("div",{style:{height:"600px"},children:"Loading OSDK media…"}):r.jsx("div",{style:{height:"600px"},children:r.jsx(p,{media:e.employeeDocuments})})},parameters:{docs:{source:{code:`// Access media from an OSDK object's media reference property
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
