import{j as r,M as s}from"./iframe-DhfS3RZc.js";import{P as p}from"./pdf-viewer-wc9L0_w8.js";import{E as d}from"./Employee-BAk2o20h.js";import{u as a}from"./useOsdkObject-dZEhe_kl.js";import"./preload-helper-DURZGd9r.js";import"./PdfViewer-DYvv36UW.js";import"./index-CmWcsqzv.js";import"./BasePdfViewer-C7d-FEA7.js";import"./BasePdfViewer.module.css-DV7y02M4.js";import"./PdfViewerAnnotationLayer--vzKthCv.js";import"./constants-DsXMS3N3.js";import"./usePdfDocument-VNIthrxF.js";import"./PdfViewerOutlineSidebar-fMbB3kSU.js";import"./PdfViewerSidebarHeader-CDDs22in.js";import"./useBaseUiId-DfXKjGnz.js";import"./useControlled-DdFF90Aj.js";import"./CompositeRoot-C57XkL-W.js";import"./CompositeItem-Dq06wRHV.js";import"./ToolbarRootContext-BXCR2bw0.js";import"./composite-DAyuLXEI.js";import"./svgIconContainer-kbCk0NE_.js";import"./PdfViewerSearchBar-KzXRfCAh.js";import"./chevron-up-JY78tIhj.js";import"./chevron-down-BFTO0kIL.js";import"./cross-BcryMkCa.js";import"./PdfViewerSidebar-CkxA5oEv.js";import"./index-D8QgLOCs.js";import"./index-B97WNJKr.js";import"./index-DZobiGK0.js";import"./PdfViewerToolbar-BPQYfazv.js";import"./Button-r9_lJTgE.js";import"./chevron-right-D1aH_5en.js";import"./Input-3HEaYe6X.js";import"./search-Bpp188FL.js";import"./spin-tMdoO5ya.js";import"./error-B7gsEzyH.js";import"./withOsdkMetrics-huuH2-qQ.js";import"./makeExternalStore-C0FFZIpP.js";const U={title:"Components/DocumentViewer/Renderers/PdfViewer",component:p,tags:["beta"],parameters:{controls:{expanded:!0}}},o={render:()=>{const{object:e,isLoading:n}=a(d,s);return n||!(e!=null&&e.employeeDocuments)?r.jsx("div",{style:{height:"600px"},children:"Loading OSDK media…"}):r.jsx("div",{style:{height:"600px"},children:r.jsx(p,{media:e.employeeDocuments})})},parameters:{docs:{source:{code:`// Access media from an OSDK object's media reference property
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
