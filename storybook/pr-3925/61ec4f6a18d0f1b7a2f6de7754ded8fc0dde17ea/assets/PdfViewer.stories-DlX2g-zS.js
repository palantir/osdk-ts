import{j as r,M as s}from"./iframe-C3MdTHLQ.js";import{P as p}from"./pdf-viewer-Y-An9gcH.js";import{E as d}from"./Employee-BAk2o20h.js";import{u as a}from"./useOsdkObject-Cj68Kc0i.js";import"./preload-helper-3M0V84kL.js";import"./PdfViewer-fY-oIv-6.js";import"./index-BgVlrX6R.js";import"./BasePdfViewer-nDnH3zlH.js";import"./BasePdfViewer.module.css-DbNCORdZ.js";import"./PdfViewerAnnotationLayer-BLz6qaKO.js";import"./constants-DsXMS3N3.js";import"./usePdfDocument-DS0zskdb.js";import"./PdfViewerOutlineSidebar-CoHkFs7w.js";import"./PdfViewerSidebarHeader-DV2QTITJ.js";import"./useBaseUiId-BY9bLyd_.js";import"./useControlled-BVKJ7vS7.js";import"./CompositeRoot-BbWpjOq1.js";import"./CompositeItem-DM0NOOVO.js";import"./ToolbarRootContext-DIyGn2ca.js";import"./composite-BNzQ7X-x.js";import"./svgIconContainer-CipT1sHW.js";import"./PdfViewerSearchBar-ZhwO2D4-.js";import"./chevron-up-DjCQxjNB.js";import"./chevron-down-kdwD8AzF.js";import"./cross-Bgd4sC_w.js";import"./PdfViewerSidebar-Bxjxt0w7.js";import"./index-CoAkWlDV.js";import"./index-CbVfK8fT.js";import"./index-BHAP5gqn.js";import"./PdfViewerToolbar-DO2HdC7p.js";import"./Button-cJHIlP8z.js";import"./chevron-right-Dphc1biU.js";import"./Input-Dv1jlKn1.js";import"./search-7cyOXxuf.js";import"./spin-DC042GIK.js";import"./error-Kr8BQL-e.js";import"./withOsdkMetrics-C_vOiZra.js";import"./makeExternalStore-CDdlC2MZ.js";const U={title:"Components/DocumentViewer/Renderers/PdfViewer",component:p,tags:["beta"],parameters:{controls:{expanded:!0}}},o={render:()=>{const{object:e,isLoading:n}=a(d,s);return n||!(e!=null&&e.employeeDocuments)?r.jsx("div",{style:{height:"600px"},children:"Loading OSDK media…"}):r.jsx("div",{style:{height:"600px"},children:r.jsx(p,{media:e.employeeDocuments})})},parameters:{docs:{source:{code:`// Access media from an OSDK object's media reference property
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
