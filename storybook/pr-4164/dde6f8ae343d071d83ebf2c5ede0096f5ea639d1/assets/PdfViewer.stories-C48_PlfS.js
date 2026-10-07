import{j as r,M as s}from"./iframe-BmAfqmVA.js";import{P as p}from"./pdf-viewer-ksiKJwg6.js";import{E as d}from"./Employee-BAk2o20h.js";import{u as a}from"./useOsdkObject-DmME8gUQ.js";import"./preload-helper-Dw8BIZgV.js";import"./PdfViewer-BakhoEuz.js";import"./index-B62tNakJ.js";import"./BasePdfViewer-BrEBbW93.js";import"./BasePdfViewer.module.css-Da6BQw_i.js";import"./PdfViewerAnnotationLayer-iTZhbBO3.js";import"./constants-DsXMS3N3.js";import"./usePdfDocument-DQR1-Oyn.js";import"./PdfViewerOutlineSidebar-rq2mXwDZ.js";import"./PdfViewerSidebarHeader-hX2pUJGp.js";import"./useBaseUiId-Ve_Ndjtk.js";import"./useControlled-DnfhwrQ9.js";import"./CompositeRoot-B18AJa_f.js";import"./CompositeItem-DXCwTfSl.js";import"./ToolbarRootContext-BGE7RlZq.js";import"./composite-D_ZO_GVZ.js";import"./svgIconContainer-DmqE13LP.js";import"./PdfViewerSearchBar-CZ-BU9B-.js";import"./chevron-up-ClOJJEG1.js";import"./chevron-down-BlYRgYBH.js";import"./cross-CIbg1fnp.js";import"./PdfViewerSidebar-iXLhMH8G.js";import"./index-K0yxoLEe.js";import"./index-dHY7n0A_.js";import"./index-fK0RIQv7.js";import"./PdfViewerToolbar-SFsk5xls.js";import"./Button-B6o09hJ9.js";import"./chevron-right-CbzOeMx-.js";import"./Input-Nk05MRQJ.js";import"./search-CXOC_cUa.js";import"./spin-CKOzbNiY.js";import"./error-Dmi1futd.js";import"./withOsdkMetrics-ihUosZll.js";import"./makeExternalStore-Bdb1GDa3.js";const U={title:"Components/DocumentViewer/Renderers/PdfViewer",component:p,tags:["beta"],parameters:{controls:{expanded:!0}}},o={render:()=>{const{object:e,isLoading:n}=a(d,s);return n||!(e!=null&&e.employeeDocuments)?r.jsx("div",{style:{height:"600px"},children:"Loading OSDK media…"}):r.jsx("div",{style:{height:"600px"},children:r.jsx(p,{media:e.employeeDocuments})})},parameters:{docs:{source:{code:`// Access media from an OSDK object's media reference property
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
