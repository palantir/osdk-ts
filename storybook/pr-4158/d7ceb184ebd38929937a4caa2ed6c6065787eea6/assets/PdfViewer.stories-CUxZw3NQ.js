import{j as r,M as s}from"./iframe-DVVKVAtA.js";import{P as p}from"./pdf-viewer-BtWfAPMz.js";import{E as d}from"./Employee-BAk2o20h.js";import{u as a}from"./useOsdkObject-FkJAUZJi.js";import"./preload-helper-CiYdp8rh.js";import"./PdfViewer-CR_kseqm.js";import"./index-B7XCjnpr.js";import"./BasePdfViewer-DTFec5oS.js";import"./BasePdfViewer.module.css-DV3I7hz7.js";import"./PdfViewerAnnotationLayer-BKaamheH.js";import"./constants-DsXMS3N3.js";import"./usePdfDocument-C7k7S7h6.js";import"./PdfViewerOutlineSidebar-xxIL7-Pk.js";import"./PdfViewerSidebarHeader-BUtCEH0y.js";import"./useBaseUiId-INTXcr8e.js";import"./useControlled-D1zZrG1z.js";import"./CompositeRoot-BYpuXlsA.js";import"./CompositeItem-D9SUAP6f.js";import"./ToolbarRootContext-C9Nw85K8.js";import"./composite-BRLZiHQF.js";import"./svgIconContainer-CP95Aflu.js";import"./PdfViewerSearchBar-D6ONkrVl.js";import"./chevron-up-BfIFZ9w8.js";import"./chevron-down-D2RihN-5.js";import"./cross-CjD5OAho.js";import"./PdfViewerSidebar-HxA0kosz.js";import"./index-U6QV7dK2.js";import"./index-ClEpMZhJ.js";import"./index-CWl4XwMi.js";import"./PdfViewerToolbar-6VmfdG3L.js";import"./Button-Ckc4gi75.js";import"./chevron-right-CuF8rzvp.js";import"./Input-CmJfNxcc.js";import"./search-DlCF-cVw.js";import"./spin-Se0LzZVe.js";import"./error-DNT5rqeV.js";import"./withOsdkMetrics-DnEy29Gp.js";import"./makeExternalStore-BOpkq9BC.js";const U={title:"Components/DocumentViewer/Renderers/PdfViewer",component:p,tags:["beta"],parameters:{controls:{expanded:!0}}},o={render:()=>{const{object:e,isLoading:n}=a(d,s);return n||!(e!=null&&e.employeeDocuments)?r.jsx("div",{style:{height:"600px"},children:"Loading OSDK media…"}):r.jsx("div",{style:{height:"600px"},children:r.jsx(p,{media:e.employeeDocuments})})},parameters:{docs:{source:{code:`// Access media from an OSDK object's media reference property
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
