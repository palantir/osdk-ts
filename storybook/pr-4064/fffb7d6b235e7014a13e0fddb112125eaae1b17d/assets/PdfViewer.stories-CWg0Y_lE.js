import{j as r,M as s}from"./iframe-Djgn3mMp.js";import{P as p}from"./pdf-viewer-Cvjge4Rk.js";import{E as d}from"./Employee-BAk2o20h.js";import{u as a}from"./useOsdkObject-CQI1MPH5.js";import"./preload-helper-BBzcmrCr.js";import"./PdfViewer-BhO9prDl.js";import"./index-DMa22myD.js";import"./BasePdfViewer-JwwfiMOQ.js";import"./BasePdfViewer.module.css-BnqWadr0.js";import"./PdfViewerAnnotationLayer-4gHXXABm.js";import"./constants-DsXMS3N3.js";import"./usePdfDocument-FGa2vDD-.js";import"./PdfViewerOutlineSidebar-C32DsrFI.js";import"./PdfViewerSidebarHeader-Dl3AQ8sz.js";import"./useBaseUiId-BpSKPnMp.js";import"./useControlled-Dodjbhjp.js";import"./CompositeRoot-GtUdoxrj.js";import"./CompositeItem-9M2opMvG.js";import"./ToolbarRootContext-D_OMSFCs.js";import"./composite-v_9iQLjO.js";import"./svgIconContainer-BSc8qpEQ.js";import"./PdfViewerSearchBar-kv_bGWEm.js";import"./chevron-up-6Wqp5hX8.js";import"./chevron-down-hMfe6qGf.js";import"./cross-P-qahKgk.js";import"./PdfViewerSidebar-DM3sSkUp.js";import"./index-DXiVbOpv.js";import"./index-CXL1vt3n.js";import"./index-CX21NhuZ.js";import"./PdfViewerToolbar-DAOYRHBv.js";import"./Button-CJpjwaeJ.js";import"./chevron-right-CeBVd8Ms.js";import"./Input-DahsmOdu.js";import"./search-BFidPBD3.js";import"./spin-BBrIKLSp.js";import"./error-C4Sj7yvC.js";import"./withOsdkMetrics-DZdRX6WM.js";import"./makeExternalStore-B1pTPZCa.js";const U={title:"Components/DocumentViewer/Renderers/PdfViewer",component:p,tags:["beta"],parameters:{controls:{expanded:!0}}},o={render:()=>{const{object:e,isLoading:n}=a(d,s);return n||!(e!=null&&e.employeeDocuments)?r.jsx("div",{style:{height:"600px"},children:"Loading OSDK media…"}):r.jsx("div",{style:{height:"600px"},children:r.jsx(p,{media:e.employeeDocuments})})},parameters:{docs:{source:{code:`// Access media from an OSDK object's media reference property
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
