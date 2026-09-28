import{j as r,M as s}from"./iframe-CiSnmsUY.js";import{P as p}from"./pdf-viewer-JKvu4LCn.js";import{E as d}from"./Employee-BAk2o20h.js";import{u as a}from"./useOsdkObject-BIkT0JyR.js";import"./preload-helper-DB05R4R8.js";import"./PdfViewer-CVlkxk3p.js";import"./index-DtqJWAR1.js";import"./BasePdfViewer-bz6ioi_I.js";import"./BasePdfViewer.module.css-ONi4TUHz.js";import"./PdfViewerAnnotationLayer-CJqv8qnB.js";import"./constants-DsXMS3N3.js";import"./usePdfDocument-Bihmz4s4.js";import"./PdfViewerOutlineSidebar-10ZqHvX_.js";import"./PdfViewerSidebarHeader-DUl9KJfL.js";import"./useBaseUiId-BgbryNLv.js";import"./useControlled-D6zDOA9R.js";import"./CompositeRoot-D51iu23b.js";import"./CompositeItem-CZisrTyk.js";import"./ToolbarRootContext-DiETc3Jn.js";import"./composite-C3rcy89N.js";import"./svgIconContainer-YAuGbdcX.js";import"./PdfViewerSearchBar-B0bXvFIL.js";import"./chevron-up-BZ9kE0fL.js";import"./chevron-down-NvsSukNZ.js";import"./cross-DqJ3usLj.js";import"./PdfViewerSidebar-BWGThRKk.js";import"./index-Cyar7n9t.js";import"./index-C3RlImgP.js";import"./index-MxmlqxL7.js";import"./PdfViewerToolbar-DXHQ_04b.js";import"./Button-zNL5TU8S.js";import"./chevron-right-roq-9mFQ.js";import"./Input-DIUphC8P.js";import"./search-BuUGV3qm.js";import"./spin-oIb8sp46.js";import"./error-D4igt9j_.js";import"./withOsdkMetrics-B44dBrFm.js";import"./makeExternalStore-QQZ63Ao7.js";const U={title:"Components/DocumentViewer/Renderers/PdfViewer",component:p,tags:["beta"],parameters:{controls:{expanded:!0}}},o={render:()=>{const{object:e,isLoading:n}=a(d,s);return n||!(e!=null&&e.employeeDocuments)?r.jsx("div",{style:{height:"600px"},children:"Loading OSDK media…"}):r.jsx("div",{style:{height:"600px"},children:r.jsx(p,{media:e.employeeDocuments})})},parameters:{docs:{source:{code:`// Access media from an OSDK object's media reference property
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
