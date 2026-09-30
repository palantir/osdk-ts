import{j as r,M as s}from"./iframe-B2ksOBZK.js";import{P as p}from"./pdf-viewer-_-0Zi9_1.js";import{E as d}from"./Employee-BAk2o20h.js";import{u as a}from"./useOsdkObject-CFy1Zf_K.js";import"./preload-helper-DwVeKaeD.js";import"./PdfViewer-5WnXLQST.js";import"./index-C0qxAnyg.js";import"./BasePdfViewer-BRVxKGhf.js";import"./BasePdfViewer.module.css-BZqrdOVh.js";import"./PdfViewerAnnotationLayer-C-fltihQ.js";import"./constants-DsXMS3N3.js";import"./usePdfDocument-DeGqq8lR.js";import"./PdfViewerOutlineSidebar-Dot7GXGe.js";import"./PdfViewerSidebarHeader-DWfmeVWJ.js";import"./useBaseUiId-DBFPNCWo.js";import"./useControlled-BKEjqMno.js";import"./CompositeRoot-CzXRHvP9.js";import"./CompositeItem-BrQKGcIu.js";import"./ToolbarRootContext-BqtVZI5F.js";import"./composite-B-vnab_Z.js";import"./svgIconContainer-BoLDP-in.js";import"./PdfViewerSearchBar-Cz-F397a.js";import"./chevron-up-ByEr0L2t.js";import"./chevron-down-D80xuDhn.js";import"./cross-DpwDHxX0.js";import"./PdfViewerSidebar-DxEPw18H.js";import"./index-D8M1fsCH.js";import"./index-DyyxI-I6.js";import"./index-rll2Ydt2.js";import"./PdfViewerToolbar-De2MLLPF.js";import"./Button-CWbg3cyR.js";import"./chevron-right-3MAaS882.js";import"./Input-DCyHQ82M.js";import"./search-BcOh8Jgz.js";import"./spin-THftki52.js";import"./error-BDJdlY4T.js";import"./withOsdkMetrics-Da6CzeGO.js";import"./makeExternalStore-7lDBXMAq.js";const U={title:"Components/DocumentViewer/Renderers/PdfViewer",component:p,tags:["beta"],parameters:{controls:{expanded:!0}}},o={render:()=>{const{object:e,isLoading:n}=a(d,s);return n||!(e!=null&&e.employeeDocuments)?r.jsx("div",{style:{height:"600px"},children:"Loading OSDK media…"}):r.jsx("div",{style:{height:"600px"},children:r.jsx(p,{media:e.employeeDocuments})})},parameters:{docs:{source:{code:`// Access media from an OSDK object's media reference property
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
