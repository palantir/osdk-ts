import{j as r,M as s}from"./iframe-D7EFQRRI.js";import{P as p}from"./pdf-viewer-CYQfTn2W.js";import{E as d}from"./Employee-BAk2o20h.js";import{u as a}from"./useOsdkObject-88Sgnexe.js";import"./preload-helper-DBMS08LA.js";import"./PdfViewer-8ZhbSaXp.js";import"./index-B9Qvampu.js";import"./BasePdfViewer-A2dumT4D.js";import"./BasePdfViewer.module.css-8Rial5bN.js";import"./PdfViewerAnnotationLayer-cEFLRLwf.js";import"./constants-DsXMS3N3.js";import"./usePdfDocument-DiePBo4s.js";import"./PdfViewerOutlineSidebar-CqgVnLk7.js";import"./PdfViewerSidebarHeader-Dz6mz4AB.js";import"./useBaseUiId-COi7p9FR.js";import"./useControlled-Cf-FNH0o.js";import"./CompositeRoot-Bw6PjinX.js";import"./CompositeItem-CD0LNPn5.js";import"./ToolbarRootContext-D62k46w9.js";import"./composite-Cv-Bf0NV.js";import"./svgIconContainer-C7NvX0SX.js";import"./PdfViewerSearchBar-DJN3ppcS.js";import"./chevron-up-CjTpoPt2.js";import"./chevron-down-i0CR3gCi.js";import"./cross-DpjEKdZW.js";import"./PdfViewerSidebar-V3Ik1x7S.js";import"./index-Bs537rs3.js";import"./index-rAm3g95R.js";import"./index-DDeQJ70A.js";import"./PdfViewerToolbar-BmZQ8JEd.js";import"./Button-CJHmLXwA.js";import"./chevron-right-q_IL2S9i.js";import"./Input-HTLW9b7o.js";import"./search-BPccI-R0.js";import"./spin-CqYmO_m-.js";import"./error-BRWfMQ2f.js";import"./withOsdkMetrics-B9e4IhYZ.js";import"./makeExternalStore-BbrBxZRi.js";const U={title:"Components/DocumentViewer/Renderers/PdfViewer",component:p,tags:["beta"],parameters:{controls:{expanded:!0}}},o={render:()=>{const{object:e,isLoading:n}=a(d,s);return n||!(e!=null&&e.employeeDocuments)?r.jsx("div",{style:{height:"600px"},children:"Loading OSDK media…"}):r.jsx("div",{style:{height:"600px"},children:r.jsx(p,{media:e.employeeDocuments})})},parameters:{docs:{source:{code:`// Access media from an OSDK object's media reference property
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
