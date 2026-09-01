import{j as r,M as s}from"./iframe-CuEjl7Uz.js";import{P as p}from"./pdf-viewer-D-b3bLWF.js";import{E as d}from"./Employee-BAk2o20h.js";import{u as a}from"./useOsdkObject-CTv5mWsE.js";import"./preload-helper-Bnv-TItm.js";import"./PdfViewer-D_XMw71Y.js";import"./index-BYfl2w_f.js";import"./BasePdfViewer-BwZGAPh1.js";import"./BasePdfViewer.module.css-2FIs03Vx.js";import"./PdfViewerAnnotationLayer-Bu7rWEl4.js";import"./constants-DsXMS3N3.js";import"./usePdfDocument-CXsnQS6c.js";import"./PdfViewerOutlineSidebar-BqkLiPAW.js";import"./PdfViewerSidebarHeader-Clp5233L.js";import"./useBaseUiId-CvRriR4c.js";import"./useControlled-DBpnwX6L.js";import"./CompositeRoot-C6d8kw3h.js";import"./CompositeItem-BhUbIVeo.js";import"./ToolbarRootContext-BwI8s8FH.js";import"./composite-kFUoCHQq.js";import"./svgIconContainer-Dd92hyPw.js";import"./PdfViewerSearchBar-D6Knj1oe.js";import"./chevron-up-BZnvYc8R.js";import"./chevron-down-CP7RGjpz.js";import"./cross-CXL6d4Nc.js";import"./PdfViewerSidebar-BYwy59aB.js";import"./index-DxunnI8U.js";import"./index-Bx0fAKss.js";import"./index-CS1Bngb_.js";import"./PdfViewerToolbar-SCHtgtdX.js";import"./Button-DPfa27EA.js";import"./chevron-right-P69oW7o7.js";import"./Input-ZdxPnrAH.js";import"./search-3wsQQ4iP.js";import"./spin-Be3PhZ9-.js";import"./error-NZ5oWKud.js";import"./withOsdkMetrics-B8uWkY4g.js";import"./makeExternalStore-oyLiubSi.js";const U={title:"Components/DocumentViewer/Renderers/PdfViewer",component:p,tags:["beta"],parameters:{controls:{expanded:!0}}},o={render:()=>{const{object:e,isLoading:n}=a(d,s);return n||!(e!=null&&e.employeeDocuments)?r.jsx("div",{style:{height:"600px"},children:"Loading OSDK media…"}):r.jsx("div",{style:{height:"600px"},children:r.jsx(p,{media:e.employeeDocuments})})},parameters:{docs:{source:{code:`// Access media from an OSDK object's media reference property
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
