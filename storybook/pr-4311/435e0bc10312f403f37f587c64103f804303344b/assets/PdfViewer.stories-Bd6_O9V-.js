import{j as r,M as s}from"./iframe-CvsrxUF4.js";import{P as p}from"./pdf-viewer-BONp903s.js";import{E as d}from"./Employee-BAk2o20h.js";import{u as a}from"./useOsdkObject-DyebxZzi.js";import"./preload-helper-uWi1ckbZ.js";import"./PdfViewer-nkH0CeVd.js";import"./index-DCyy6adA.js";import"./BasePdfViewer-DYXq1NWL.js";import"./BasePdfViewer.module.css-Blk18aat.js";import"./PdfViewerAnnotationLayer-DtSDa0MN.js";import"./constants-DsXMS3N3.js";import"./usePdfDocument-BDI_5dGE.js";import"./PdfViewerOutlineSidebar-csckrRfW.js";import"./PdfViewerSidebarHeader-BwCe2XrP.js";import"./useBaseUiId-B5t4I27A.js";import"./useControlled-m2VSv2nN.js";import"./CompositeRoot-DC1QsBMs.js";import"./CompositeItem-Df2qP5O_.js";import"./ToolbarRootContext-CSZctfrL.js";import"./composite-B3OVmB-U.js";import"./svgIconContainer-DzgbD020.js";import"./PdfViewerSearchBar-Dc5Z7hIL.js";import"./chevron-up-D-6TJi-d.js";import"./chevron-down-eSVm9fha.js";import"./cross-DtTtrll4.js";import"./PdfViewerSidebar-DluZEmpp.js";import"./index-DWgnpQrU.js";import"./index-DJNWwc48.js";import"./index-CEMwvdDY.js";import"./PdfViewerToolbar-B0hIjh8m.js";import"./Button-COOo6KA1.js";import"./chevron-right-CCs8DKc_.js";import"./Input-C5HOYdeG.js";import"./search-DUdimr2h.js";import"./spin-BFzLE3ft.js";import"./error-DR19w44a.js";import"./withOsdkMetrics-DQZsQ0ny.js";import"./makeExternalStore-BsYlQUVX.js";const U={title:"Components/DocumentViewer/Renderers/PdfViewer",component:p,tags:["beta"],parameters:{controls:{expanded:!0}}},o={render:()=>{const{object:e,isLoading:n}=a(d,s);return n||!(e!=null&&e.employeeDocuments)?r.jsx("div",{style:{height:"600px"},children:"Loading OSDK media…"}):r.jsx("div",{style:{height:"600px"},children:r.jsx(p,{media:e.employeeDocuments})})},parameters:{docs:{source:{code:`// Access media from an OSDK object's media reference property
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
