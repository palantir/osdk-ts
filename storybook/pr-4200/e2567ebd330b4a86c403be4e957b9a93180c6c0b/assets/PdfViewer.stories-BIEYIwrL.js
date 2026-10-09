import{j as r,M as s}from"./iframe-u7IuoPqS.js";import{P as p}from"./pdf-viewer-DGUgUJvn.js";import{E as d}from"./Employee-BAk2o20h.js";import{u as a}from"./useOsdkObject-khkqQtZX.js";import"./preload-helper-Cj56MnTO.js";import"./PdfViewer-DHo604uj.js";import"./index-BoeQsLqp.js";import"./BasePdfViewer-BpQ5Jyr6.js";import"./BasePdfViewer.module.css-CioDctez.js";import"./PdfViewerAnnotationLayer-CiQwGHpa.js";import"./constants-DsXMS3N3.js";import"./usePdfDocument-Cy-KQU6S.js";import"./PdfViewerOutlineSidebar-PytAEYy_.js";import"./PdfViewerSidebarHeader-CR6jJoxR.js";import"./useBaseUiId-BbTWfvqf.js";import"./useControlled-Bz9okVK9.js";import"./CompositeRoot-lYIF_IB9.js";import"./CompositeItem-KI1SOpIs.js";import"./ToolbarRootContext-DD30MDHZ.js";import"./composite-CN58o8c7.js";import"./svgIconContainer-B7-2IFM8.js";import"./PdfViewerSearchBar-CcBp-mQQ.js";import"./chevron-up-D3_AW2ZB.js";import"./chevron-down-J58PJfTC.js";import"./cross-C6E9vWMV.js";import"./PdfViewerSidebar-CUQbP6cI.js";import"./index-B0Ziw4xI.js";import"./index-Dj4--fik.js";import"./index-D32Dt5Vb.js";import"./PdfViewerToolbar-DnrabRO7.js";import"./Button-CvzuhgBL.js";import"./chevron-right-Dqzw_DoP.js";import"./Input-zHybezEW.js";import"./search-DFsiEXmE.js";import"./spin-0Z3XOlUZ.js";import"./error-BqAhf9VK.js";import"./withOsdkMetrics-myAMZpO7.js";import"./makeExternalStore-BUehwWYZ.js";const U={title:"Components/DocumentViewer/Renderers/PdfViewer",component:p,tags:["beta"],parameters:{controls:{expanded:!0}}},o={render:()=>{const{object:e,isLoading:n}=a(d,s);return n||!(e!=null&&e.employeeDocuments)?r.jsx("div",{style:{height:"600px"},children:"Loading OSDK media…"}):r.jsx("div",{style:{height:"600px"},children:r.jsx(p,{media:e.employeeDocuments})})},parameters:{docs:{source:{code:`// Access media from an OSDK object's media reference property
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
