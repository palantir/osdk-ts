import{j as r,M as s}from"./iframe-CNys6KBx.js";import{P as p}from"./pdf-viewer-zmq71Cbv.js";import{E as d}from"./Employee-BAk2o20h.js";import{u as a}from"./useOsdkObject-D5sEfhRQ.js";import"./preload-helper-DcEogYXL.js";import"./PdfViewer-DTYiulq0.js";import"./index-D7tprs46.js";import"./BasePdfViewer-L5z3STgC.js";import"./BasePdfViewer.module.css-CqCC02um.js";import"./PdfViewerAnnotationLayer-DmKEZYyq.js";import"./constants-DsXMS3N3.js";import"./usePdfDocument-PYIiZuYE.js";import"./PdfViewerOutlineSidebar-BlGbO9fE.js";import"./PdfViewerSidebarHeader-eDnuZK9Y.js";import"./useBaseUiId-B9-57ZNF.js";import"./useControlled-DuXB4b_p.js";import"./CompositeRoot-BeU8pFdq.js";import"./CompositeItem-CIQp4vV-.js";import"./ToolbarRootContext-D9QBq8Lb.js";import"./composite-CNZDZ4o2.js";import"./svgIconContainer-DGw65FKz.js";import"./PdfViewerSearchBar-5DcLZGzV.js";import"./chevron-up-Bzzwelpr.js";import"./chevron-down-DpfNuwKR.js";import"./cross-DDF5avjH.js";import"./PdfViewerSidebar-BrW8zlOh.js";import"./index-zFsg_RaX.js";import"./index-BtKHvXe7.js";import"./index-CWFx-0lx.js";import"./PdfViewerToolbar-CliczLFS.js";import"./Button-DP1rA9dA.js";import"./chevron-right-BPD2jPSF.js";import"./Input-DzrtDPnO.js";import"./search-BE8RO1z_.js";import"./spin-B0DW-g5r.js";import"./error-DMVqHs2L.js";import"./withOsdkMetrics--pN-uRA4.js";import"./makeExternalStore-T7wEnVBI.js";const U={title:"Components/DocumentViewer/Renderers/PdfViewer",component:p,tags:["beta"],parameters:{controls:{expanded:!0}}},o={render:()=>{const{object:e,isLoading:n}=a(d,s);return n||!(e!=null&&e.employeeDocuments)?r.jsx("div",{style:{height:"600px"},children:"Loading OSDK media…"}):r.jsx("div",{style:{height:"600px"},children:r.jsx(p,{media:e.employeeDocuments})})},parameters:{docs:{source:{code:`// Access media from an OSDK object's media reference property
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
