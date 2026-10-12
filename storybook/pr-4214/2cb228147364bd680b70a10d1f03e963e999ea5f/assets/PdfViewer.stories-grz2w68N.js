import{j as r,M as s}from"./iframe-Ch9GCQZw.js";import{P as p}from"./pdf-viewer-C9rmtpx5.js";import{E as d}from"./Employee-BAk2o20h.js";import{u as a}from"./useOsdkObject-BIhfRytt.js";import"./preload-helper-DnJKIcik.js";import"./PdfViewer-DIPudB9B.js";import"./index-BWo0Chvm.js";import"./BasePdfViewer-OZ8B84iP.js";import"./BasePdfViewer.module.css-CZNMQ6Ng.js";import"./PdfViewerAnnotationLayer-C-aMPYKq.js";import"./constants-DsXMS3N3.js";import"./usePdfDocument-DYSwCkA6.js";import"./PdfViewerOutlineSidebar-CuTMQO8F.js";import"./PdfViewerSidebarHeader-Bm_MZFYO.js";import"./useBaseUiId-BHSh6ZdF.js";import"./useControlled-DlKs0eKw.js";import"./CompositeRoot-BsVfpLUa.js";import"./CompositeItem-lOcuUhYq.js";import"./ToolbarRootContext-CxoySA_i.js";import"./composite-B_lrLvaS.js";import"./svgIconContainer-DaQYNeFs.js";import"./PdfViewerSearchBar-BvyWEC1v.js";import"./chevron-up-BL-hJhuT.js";import"./chevron-down-D219skL8.js";import"./cross-BBG8uB8A.js";import"./PdfViewerSidebar-B3vmiKul.js";import"./index-BPwpWSia.js";import"./index-CoyQ9qTH.js";import"./index-DpdzW1OH.js";import"./PdfViewerToolbar-DDTfgCZI.js";import"./Button-lGY5omo3.js";import"./chevron-right-CSJljr5a.js";import"./Input-M42Jtpmt.js";import"./search-Bgjfk80F.js";import"./spin-tc04Fzuf.js";import"./error-CMZUpiIv.js";import"./withOsdkMetrics-DaboQw0b.js";import"./makeExternalStore-CXGYFkuo.js";const U={title:"Components/DocumentViewer/Renderers/PdfViewer",component:p,tags:["beta"],parameters:{controls:{expanded:!0}}},o={render:()=>{const{object:e,isLoading:n}=a(d,s);return n||!(e!=null&&e.employeeDocuments)?r.jsx("div",{style:{height:"600px"},children:"Loading OSDK media…"}):r.jsx("div",{style:{height:"600px"},children:r.jsx(p,{media:e.employeeDocuments})})},parameters:{docs:{source:{code:`// Access media from an OSDK object's media reference property
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
