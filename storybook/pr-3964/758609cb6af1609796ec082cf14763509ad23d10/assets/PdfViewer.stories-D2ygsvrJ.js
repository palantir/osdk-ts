import{j as r,M as s}from"./iframe-O11Zq4F1.js";import{P as p}from"./pdf-viewer-HwtRt_BI.js";import{E as d}from"./Employee-BAk2o20h.js";import{u as a}from"./useOsdkObject-u9EByail.js";import"./preload-helper-DlwmVUfx.js";import"./PdfViewer-wFnGVJU_.js";import"./index-JCX27zQ_.js";import"./BasePdfViewer--wruBoFZ.js";import"./BasePdfViewer.module.css-BAG8p3vM.js";import"./PdfViewerAnnotationLayer-C2a-9gDh.js";import"./constants-DsXMS3N3.js";import"./usePdfDocument-CJbBjZI1.js";import"./PdfViewerOutlineSidebar-DlW9z-ww.js";import"./PdfViewerSidebarHeader-BEH48L_C.js";import"./useBaseUiId-Cu9t8yGo.js";import"./useControlled-B8YHL1ap.js";import"./CompositeRoot-CAOZhsn6.js";import"./CompositeItem-DLmG3BnZ.js";import"./ToolbarRootContext-tyPorBFs.js";import"./composite-CXM_4XfT.js";import"./svgIconContainer-niJASFYH.js";import"./PdfViewerSearchBar-ZzDQmiyH.js";import"./chevron-up-CtCQuxIs.js";import"./chevron-down-vcyh2ihf.js";import"./cross-CgbZ2Lur.js";import"./PdfViewerSidebar-CZpDdd6p.js";import"./index-BZM-lKSg.js";import"./index-D4Y1diP4.js";import"./index-CZs8bj4M.js";import"./PdfViewerToolbar-HJh0eyQI.js";import"./Button-C08V9i3x.js";import"./chevron-right-B85Xt_Zu.js";import"./Input-KS7sPzNw.js";import"./search-Cj99250y.js";import"./spin-Ca27mP0_.js";import"./error-Cg1niATE.js";import"./withOsdkMetrics-5_bEfQA7.js";import"./makeExternalStore-DxYkAphJ.js";const U={title:"Components/DocumentViewer/Renderers/PdfViewer",component:p,tags:["beta"],parameters:{controls:{expanded:!0}}},o={render:()=>{const{object:e,isLoading:n}=a(d,s);return n||!(e!=null&&e.employeeDocuments)?r.jsx("div",{style:{height:"600px"},children:"Loading OSDK media…"}):r.jsx("div",{style:{height:"600px"},children:r.jsx(p,{media:e.employeeDocuments})})},parameters:{docs:{source:{code:`// Access media from an OSDK object's media reference property
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
