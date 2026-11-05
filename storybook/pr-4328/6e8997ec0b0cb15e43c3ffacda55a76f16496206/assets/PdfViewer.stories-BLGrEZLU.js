import{j as r,M as s}from"./iframe-Dhwk5ITi.js";import{P as p}from"./pdf-viewer-BZHD0HN6.js";import{E as d}from"./Employee-BAk2o20h.js";import{u as a}from"./useOsdkObject-CZUAJLSs.js";import"./preload-helper-DXH7Ji2G.js";import"./PdfViewer-D_FUIOo9.js";import"./index-CqrX2hSZ.js";import"./BasePdfViewer-BlCVBOpk.js";import"./BasePdfViewer.module.css-BvBQijYo.js";import"./PdfViewerAnnotationLayer-zAeXMh9A.js";import"./constants-DsXMS3N3.js";import"./usePdfDocument-Dff4sATb.js";import"./PdfViewerOutlineSidebar-DDewuTgC.js";import"./PdfViewerSidebarHeader-BujdX0Gg.js";import"./useBaseUiId-CN9ap6QA.js";import"./useControlled-BzFCle-k.js";import"./CompositeRoot-BWFqHTeA.js";import"./CompositeItem-fUd5V9Oq.js";import"./ToolbarRootContext-tq1uYlSQ.js";import"./composite-Q4thQ8nQ.js";import"./svgIconContainer-DRo39Sdm.js";import"./PdfViewerSearchBar-DElkl3w8.js";import"./chevron-up-DeVZ5pga.js";import"./chevron-down-Bi9ECMIR.js";import"./cross-BCTjTq5q.js";import"./PdfViewerSidebar-D5_EXjdr.js";import"./index-CTvXLxpd.js";import"./index-Dqvhhr9j.js";import"./index-CQyEu1u7.js";import"./PdfViewerToolbar-BWntEBto.js";import"./Button-DQ5CRvak.js";import"./chevron-right-DVW3R71G.js";import"./Input-BHNHysVZ.js";import"./search-Be1zlQKz.js";import"./spin-fw8KY2n1.js";import"./error--SrXy3UU.js";import"./withOsdkMetrics-Cikn35t1.js";import"./makeExternalStore-3kaAWetO.js";const U={title:"Components/DocumentViewer/Renderers/PdfViewer",component:p,tags:["beta"],parameters:{controls:{expanded:!0}}},o={render:()=>{const{object:e,isLoading:n}=a(d,s);return n||!(e!=null&&e.employeeDocuments)?r.jsx("div",{style:{height:"600px"},children:"Loading OSDK media…"}):r.jsx("div",{style:{height:"600px"},children:r.jsx(p,{media:e.employeeDocuments})})},parameters:{docs:{source:{code:`// Access media from an OSDK object's media reference property
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
