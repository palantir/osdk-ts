import{j as r,M as s}from"./iframe-DmoMQzpD.js";import{P as p}from"./pdf-viewer-DXHCRyrJ.js";import{E as d}from"./Employee-BAk2o20h.js";import{u as a}from"./useOsdkObject-CVcYjUQ3.js";import"./preload-helper-0xn3Nkw5.js";import"./PdfViewer-BV6SnEPu.js";import"./index-DPXokUby.js";import"./BasePdfViewer-QWtpLmSW.js";import"./BasePdfViewer.module.css-CyPdRnSI.js";import"./PdfViewerAnnotationLayer-C5SO7SU0.js";import"./constants-DsXMS3N3.js";import"./usePdfDocument-DHsta9dq.js";import"./PdfViewerOutlineSidebar-CCQVn8Hz.js";import"./PdfViewerSidebarHeader-B6RTAZq9.js";import"./useBaseUiId-BxnyJA2P.js";import"./useControlled-C5PyKbe1.js";import"./CompositeRoot-Cs2hBylI.js";import"./CompositeItem-Drfjdgjy.js";import"./ToolbarRootContext-DyHioDsT.js";import"./composite-RG7e36sI.js";import"./svgIconContainer-C0jxJ_1G.js";import"./PdfViewerSearchBar-D9cbs1-L.js";import"./chevron-up-sdGwtyT8.js";import"./chevron-down-vzowt2v5.js";import"./cross-C9RHIJgp.js";import"./PdfViewerSidebar-DelOn3lN.js";import"./index-BM7Z1UL0.js";import"./index-DUz5HI9G.js";import"./index-BXiJ_67x.js";import"./PdfViewerToolbar-AXS5FneK.js";import"./Button-DawQ6LNI.js";import"./chevron-right-CibBC-7A.js";import"./Input-CN7AavNu.js";import"./search-g9MHYdyd.js";import"./spin-KsleJMF9.js";import"./error-CSsiItLy.js";import"./withOsdkMetrics-DGBLah1x.js";import"./makeExternalStore-nzxHrE9v.js";const U={title:"Components/DocumentViewer/Renderers/PdfViewer",component:p,tags:["beta"],parameters:{controls:{expanded:!0}}},o={render:()=>{const{object:e,isLoading:n}=a(d,s);return n||!(e!=null&&e.employeeDocuments)?r.jsx("div",{style:{height:"600px"},children:"Loading OSDK media…"}):r.jsx("div",{style:{height:"600px"},children:r.jsx(p,{media:e.employeeDocuments})})},parameters:{docs:{source:{code:`// Access media from an OSDK object's media reference property
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
