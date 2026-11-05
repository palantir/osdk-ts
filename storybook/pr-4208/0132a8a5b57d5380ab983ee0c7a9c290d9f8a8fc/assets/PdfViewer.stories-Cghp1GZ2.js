import{j as r,M as s}from"./iframe-ReE2Q7yp.js";import{P as p}from"./pdf-viewer-Bz3L-d-7.js";import{E as d}from"./Employee-BAk2o20h.js";import{u as a}from"./useOsdkObject-e-84yqQk.js";import"./preload-helper-B7Z9MrKi.js";import"./PdfViewer-DJqyWOIx.js";import"./index-BewkrVTa.js";import"./BasePdfViewer-C0hE9fo4.js";import"./BasePdfViewer.module.css-ia8mt2sT.js";import"./PdfViewerAnnotationLayer-CYDmfdkZ.js";import"./constants-DsXMS3N3.js";import"./usePdfDocument-B9SLneve.js";import"./PdfViewerOutlineSidebar-CxtcRGXh.js";import"./PdfViewerSidebarHeader-DViK4h9j.js";import"./useBaseUiId-D8bMBWWs.js";import"./useControlled-CiRsQt_l.js";import"./CompositeRoot-B0JLwDVj.js";import"./CompositeItem-CiU9fGHE.js";import"./ToolbarRootContext-Bl5a0QSn.js";import"./composite-BwZods8z.js";import"./svgIconContainer-DReIj__U.js";import"./PdfViewerSearchBar-NpU0dqm6.js";import"./chevron-up-CgS0Bbkv.js";import"./chevron-down-BzzFswn9.js";import"./cross-jItXGdNq.js";import"./PdfViewerSidebar-BgvN-l85.js";import"./index-DFSTGtRN.js";import"./index-B0bWJrJS.js";import"./index-gciaynI9.js";import"./PdfViewerToolbar-ByMYAH3s.js";import"./Button-BlxZNp8T.js";import"./chevron-right-Bvnmx0fW.js";import"./Input-B8139ni5.js";import"./search-BhOewJBY.js";import"./spin-B8EPkcv3.js";import"./error-CPS8uYGW.js";import"./withOsdkMetrics-CzWROb4n.js";import"./makeExternalStore-CzYz1Gie.js";const U={title:"Components/DocumentViewer/Renderers/PdfViewer",component:p,tags:["beta"],parameters:{controls:{expanded:!0}}},o={render:()=>{const{object:e,isLoading:n}=a(d,s);return n||!(e!=null&&e.employeeDocuments)?r.jsx("div",{style:{height:"600px"},children:"Loading OSDK media…"}):r.jsx("div",{style:{height:"600px"},children:r.jsx(p,{media:e.employeeDocuments})})},parameters:{docs:{source:{code:`// Access media from an OSDK object's media reference property
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
