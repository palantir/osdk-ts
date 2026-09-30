import{j as r,M as s}from"./iframe-BP89Z9wn.js";import{P as p}from"./pdf-viewer-DCpKDWJ6.js";import{E as d}from"./Employee-BAk2o20h.js";import{u as a}from"./useOsdkObject-BX1g_MIh.js";import"./preload-helper-CpDXy6ri.js";import"./PdfViewer-oXQ9obcm.js";import"./index-7fPc8Pd4.js";import"./BasePdfViewer-BAbc-Gtf.js";import"./BasePdfViewer.module.css-t1rZmlRJ.js";import"./PdfViewerAnnotationLayer-x1I2zTuL.js";import"./constants-DsXMS3N3.js";import"./usePdfDocument-H4YNhLNF.js";import"./PdfViewerOutlineSidebar-BXMn9oZG.js";import"./PdfViewerSidebarHeader-CenDvEB-.js";import"./useBaseUiId-BsQB3yjV.js";import"./useControlled-DYUiPWJr.js";import"./CompositeRoot-CBGwrkeq.js";import"./CompositeItem-BWaumFAX.js";import"./ToolbarRootContext-BM5nRA8f.js";import"./composite-JzO3n_7v.js";import"./svgIconContainer-B-B6fhYH.js";import"./PdfViewerSearchBar-DHR4_mma.js";import"./chevron-up-CnfXm6bd.js";import"./chevron-down-CbjEdb4A.js";import"./cross-CseKBkZX.js";import"./PdfViewerSidebar-Bo9IIfZp.js";import"./index-D2KO3R9_.js";import"./index-yCs_Jqs_.js";import"./index-B2q267Hw.js";import"./PdfViewerToolbar-CTkLG0GD.js";import"./Button-Bcmb5ML8.js";import"./chevron-right-Dki6zj_3.js";import"./Input-CurDQ8U3.js";import"./search-Ce4dpx9M.js";import"./spin-Bh6VaP9-.js";import"./error-B9U50q0S.js";import"./withOsdkMetrics-hOQ5lnvy.js";import"./makeExternalStore-G7zKBEOt.js";const U={title:"Components/DocumentViewer/Renderers/PdfViewer",component:p,tags:["beta"],parameters:{controls:{expanded:!0}}},o={render:()=>{const{object:e,isLoading:n}=a(d,s);return n||!(e!=null&&e.employeeDocuments)?r.jsx("div",{style:{height:"600px"},children:"Loading OSDK media…"}):r.jsx("div",{style:{height:"600px"},children:r.jsx(p,{media:e.employeeDocuments})})},parameters:{docs:{source:{code:`// Access media from an OSDK object's media reference property
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
