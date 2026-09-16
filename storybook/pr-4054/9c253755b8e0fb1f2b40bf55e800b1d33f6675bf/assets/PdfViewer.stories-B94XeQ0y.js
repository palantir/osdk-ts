import{j as r,M as s}from"./iframe-EpH4H8Ct.js";import{P as p}from"./pdf-viewer-Be06yJVZ.js";import{E as d}from"./Employee-BAk2o20h.js";import{u as a}from"./useOsdkObject-CJyYK0in.js";import"./preload-helper-AInD9Bcq.js";import"./PdfViewer-BczpBVzP.js";import"./index-6wkuS9kk.js";import"./BasePdfViewer-BJqRmz0Q.js";import"./BasePdfViewer.module.css-DP7d-l3q.js";import"./PdfViewerAnnotationLayer-RQpMg6y3.js";import"./constants-DsXMS3N3.js";import"./usePdfDocument-DsuoNhWh.js";import"./PdfViewerOutlineSidebar-d1FFtfWi.js";import"./PdfViewerSidebarHeader-DFFE9VT-.js";import"./useBaseUiId-B53jZkpD.js";import"./useControlled-D6NLbg_O.js";import"./CompositeRoot-ln6Pmanu.js";import"./CompositeItem-DzD_vpNX.js";import"./ToolbarRootContext-BhZagEjX.js";import"./composite-CXo_dnRM.js";import"./svgIconContainer-BEULmRQq.js";import"./PdfViewerSearchBar-DuoXff5_.js";import"./chevron-up-DUmXP7Zo.js";import"./chevron-down-B3Hf5n4h.js";import"./cross-Bw1kg8R1.js";import"./PdfViewerSidebar-DbhHE7zv.js";import"./index-Dva8VjAa.js";import"./index-Dy-Nc8BB.js";import"./index-5GEbdtwp.js";import"./PdfViewerToolbar-CgVXlkiV.js";import"./Button-BXHz7yPF.js";import"./chevron-right-CMsBc4vs.js";import"./Input-DNhi3I7C.js";import"./search-Bdehc4Bq.js";import"./spin-DJZXcuaj.js";import"./error-CwB_EWnJ.js";import"./withOsdkMetrics-Cj7SQvcU.js";import"./makeExternalStore-BOo8e2Do.js";const U={title:"Components/DocumentViewer/Renderers/PdfViewer",component:p,tags:["beta"],parameters:{controls:{expanded:!0}}},o={render:()=>{const{object:e,isLoading:n}=a(d,s);return n||!(e!=null&&e.employeeDocuments)?r.jsx("div",{style:{height:"600px"},children:"Loading OSDK media…"}):r.jsx("div",{style:{height:"600px"},children:r.jsx(p,{media:e.employeeDocuments})})},parameters:{docs:{source:{code:`// Access media from an OSDK object's media reference property
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
