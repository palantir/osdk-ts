import{j as r,M as s}from"./iframe-lON5AZ3L.js";import{P as p}from"./pdf-viewer-xGdhtX4B.js";import{E as d}from"./Employee-BAk2o20h.js";import{u as a}from"./useOsdkObject-seJlc09e.js";import"./preload-helper-CII01xYb.js";import"./PdfViewer-BeNEpQNe.js";import"./index-BbInquUP.js";import"./BasePdfViewer-CRYwdrQ8.js";import"./BasePdfViewer.module.css-P5XHmewd.js";import"./PdfViewerAnnotationLayer-x5xAju-T.js";import"./constants-DsXMS3N3.js";import"./usePdfDocument-DsbqtpSN.js";import"./PdfViewerOutlineSidebar-CMh4gu2_.js";import"./PdfViewerSidebarHeader-Dqp6XYFs.js";import"./useBaseUiId-COzPbt8W.js";import"./useControlled-Bg_lHZoo.js";import"./CompositeRoot-DZseU9ir.js";import"./CompositeItem-ppbsSdS6.js";import"./ToolbarRootContext-Dh8fWcX2.js";import"./composite-ChlDDG92.js";import"./svgIconContainer-CX_rozDa.js";import"./PdfViewerSearchBar-BH0QvNEY.js";import"./chevron-up-Cc9oNnF9.js";import"./chevron-down-B6vOrraR.js";import"./cross-CZfg3piu.js";import"./PdfViewerSidebar-Bz-XSZF9.js";import"./index-BDhDrjkY.js";import"./index-U5f43BN7.js";import"./index-CcwZGg1N.js";import"./PdfViewerToolbar-D80KRibS.js";import"./Button-NLlVT-nC.js";import"./chevron-right-B0lNRVkm.js";import"./Input-BTUHBzsz.js";import"./search-ZnUmH3zZ.js";import"./spin-DBXZ6TY_.js";import"./error-B77E7aT6.js";import"./withOsdkMetrics-CXO0MkNI.js";import"./makeExternalStore-BPZMGY7I.js";const U={title:"Components/DocumentViewer/Renderers/PdfViewer",component:p,tags:["beta"],parameters:{controls:{expanded:!0}}},o={render:()=>{const{object:e,isLoading:n}=a(d,s);return n||!(e!=null&&e.employeeDocuments)?r.jsx("div",{style:{height:"600px"},children:"Loading OSDK media…"}):r.jsx("div",{style:{height:"600px"},children:r.jsx(p,{media:e.employeeDocuments})})},parameters:{docs:{source:{code:`// Access media from an OSDK object's media reference property
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
