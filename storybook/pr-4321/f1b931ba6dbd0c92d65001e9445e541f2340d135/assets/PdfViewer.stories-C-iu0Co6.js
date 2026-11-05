import{j as r,M as s}from"./iframe-BhDMRuCM.js";import{P as p}from"./pdf-viewer-C3dAcr9Z.js";import{E as d}from"./Employee-BAk2o20h.js";import{u as a}from"./useOsdkObject-B0sCW4gn.js";import"./preload-helper-L4oI3E3x.js";import"./PdfViewer-CVGOIZH2.js";import"./index-DBdWVfZr.js";import"./BasePdfViewer-DfB9et7d.js";import"./BasePdfViewer.module.css-DgIrZ6Or.js";import"./PdfViewerAnnotationLayer-W29FcQ4U.js";import"./constants-DsXMS3N3.js";import"./usePdfDocument-C9Z3XLbw.js";import"./PdfViewerOutlineSidebar-C-kzFNOm.js";import"./PdfViewerSidebarHeader-Dhc42_xy.js";import"./useBaseUiId-DsydWgv8.js";import"./useControlled-BwLkCqLj.js";import"./CompositeRoot-YI5tx5AI.js";import"./CompositeItem-BUYvwABx.js";import"./ToolbarRootContext-DcA5VE7P.js";import"./composite-D7bHzIxr.js";import"./svgIconContainer-DvnFME-C.js";import"./PdfViewerSearchBar-Dlk-Wu5Y.js";import"./chevron-up-Bo_U_gN-.js";import"./chevron-down-CJ-s6D7k.js";import"./cross-B8g5lC7t.js";import"./PdfViewerSidebar-BwA7TQLC.js";import"./index-AAIJN6Ah.js";import"./index-DO7zbhCL.js";import"./index-DbLkd8ga.js";import"./PdfViewerToolbar-8uCOX3rR.js";import"./Button-CqxlV9z0.js";import"./chevron-right-CIH1Ftvf.js";import"./Input-DwhP00hs.js";import"./search-B2ohHoFm.js";import"./spin-B4rQAyRJ.js";import"./error-Dy988hUQ.js";import"./withOsdkMetrics-BI0vBwDP.js";import"./makeExternalStore-Bbk8Brxu.js";const U={title:"Components/DocumentViewer/Renderers/PdfViewer",component:p,tags:["beta"],parameters:{controls:{expanded:!0}}},o={render:()=>{const{object:e,isLoading:n}=a(d,s);return n||!(e!=null&&e.employeeDocuments)?r.jsx("div",{style:{height:"600px"},children:"Loading OSDK media…"}):r.jsx("div",{style:{height:"600px"},children:r.jsx(p,{media:e.employeeDocuments})})},parameters:{docs:{source:{code:`// Access media from an OSDK object's media reference property
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
