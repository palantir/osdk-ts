import{j as r,M as s}from"./iframe-EQYHZGCW.js";import{P as p}from"./pdf-viewer-C7UUi9vs.js";import{E as d}from"./Employee-BAk2o20h.js";import{u as a}from"./useOsdkObject-BJTZkZgT.js";import"./preload-helper-D0iBIgcV.js";import"./PdfViewer-BWcHKBAh.js";import"./index-DcRUH42g.js";import"./BasePdfViewer-BSzMAsKB.js";import"./BasePdfViewer.module.css-OZwwGY6S.js";import"./PdfViewerAnnotationLayer-DNlYttwI.js";import"./constants-DsXMS3N3.js";import"./usePdfDocument-B0zdeBHs.js";import"./PdfViewerOutlineSidebar-T8-FtWvO.js";import"./PdfViewerSidebarHeader-BfLqF9Ta.js";import"./useBaseUiId-B-jRpzmU.js";import"./useControlled-D8_Vw_1O.js";import"./CompositeRoot-B3C4bcKs.js";import"./CompositeItem-Bzt8qu7P.js";import"./ToolbarRootContext-DFyHSe1V.js";import"./composite-CIqX99J4.js";import"./svgIconContainer-D1wDh7_l.js";import"./PdfViewerSearchBar-BTBkOsVD.js";import"./chevron-up-BwC3rD0n.js";import"./chevron-down-HP5bea9D.js";import"./cross-C8-00d-y.js";import"./PdfViewerSidebar-CbwZp9gV.js";import"./index-DVNPKMaj.js";import"./index-CKjEOO1w.js";import"./index-CIgaZG3c.js";import"./PdfViewerToolbar-8iqLJdW0.js";import"./Button-DiwOmMcV.js";import"./chevron-right-CyPeBMPo.js";import"./Input-C4K0OIlf.js";import"./search-BVTqMz5e.js";import"./spin-CYr0o2gu.js";import"./error-Cd2sdUKV.js";import"./withOsdkMetrics-Dwt30EQ7.js";import"./makeExternalStore-CxRQlBs2.js";const U={title:"Components/DocumentViewer/Renderers/PdfViewer",component:p,tags:["beta"],parameters:{controls:{expanded:!0}}},o={render:()=>{const{object:e,isLoading:n}=a(d,s);return n||!(e!=null&&e.employeeDocuments)?r.jsx("div",{style:{height:"600px"},children:"Loading OSDK media…"}):r.jsx("div",{style:{height:"600px"},children:r.jsx(p,{media:e.employeeDocuments})})},parameters:{docs:{source:{code:`// Access media from an OSDK object's media reference property
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
