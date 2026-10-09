import{j as r,M as s}from"./iframe-CZ6kIwVs.js";import{P as p}from"./pdf-viewer-Cmzt28Tu.js";import{E as d}from"./Employee-BAk2o20h.js";import{u as a}from"./useOsdkObject-HXyHAXBe.js";import"./preload-helper-7ZMJfvLO.js";import"./PdfViewer-B9OzfRda.js";import"./index-DI8fXOjY.js";import"./BasePdfViewer-ChYbgzmS.js";import"./BasePdfViewer.module.css-CgYxazfL.js";import"./PdfViewerAnnotationLayer-C0sWMs5Y.js";import"./constants-DsXMS3N3.js";import"./usePdfDocument-CoL8qZNA.js";import"./PdfViewerOutlineSidebar-DEJS09WP.js";import"./PdfViewerSidebarHeader-ZKkgnayn.js";import"./useBaseUiId-C8GyANar.js";import"./useControlled-DYYKJrdL.js";import"./CompositeRoot-DTmlx2xW.js";import"./CompositeItem-C5Mndviw.js";import"./ToolbarRootContext-DwX-_42A.js";import"./composite-ZguSvKQK.js";import"./svgIconContainer-DnYA5NkM.js";import"./PdfViewerSearchBar-D-_WNNZY.js";import"./chevron-up-COLb3SCC.js";import"./chevron-down-CfJcExH9.js";import"./cross-D1S37vKD.js";import"./PdfViewerSidebar-DsK2EHCC.js";import"./index-CRcSFsCM.js";import"./index-D-O5Mu3x.js";import"./index-CeIvWQQV.js";import"./PdfViewerToolbar-BtQduIW0.js";import"./Button-D2YNSXqx.js";import"./chevron-right-C3paeiKi.js";import"./Input-BNiQQ7Yq.js";import"./search-BEog5Q0_.js";import"./spin-C17XiORJ.js";import"./error-Be3f2oAD.js";import"./withOsdkMetrics-CJa04cyG.js";import"./makeExternalStore-CcH4sGc5.js";const U={title:"Components/DocumentViewer/Renderers/PdfViewer",component:p,tags:["beta"],parameters:{controls:{expanded:!0}}},o={render:()=>{const{object:e,isLoading:n}=a(d,s);return n||!(e!=null&&e.employeeDocuments)?r.jsx("div",{style:{height:"600px"},children:"Loading OSDK media…"}):r.jsx("div",{style:{height:"600px"},children:r.jsx(p,{media:e.employeeDocuments})})},parameters:{docs:{source:{code:`// Access media from an OSDK object's media reference property
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
