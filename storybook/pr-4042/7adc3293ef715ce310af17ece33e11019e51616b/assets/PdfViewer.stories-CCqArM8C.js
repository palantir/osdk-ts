import{j as r,M as s}from"./iframe-DyxaUq2K.js";import{P as p}from"./pdf-viewer-rG9iKDGe.js";import{E as d}from"./Employee-BAk2o20h.js";import{u as a}from"./useOsdkObject-aU75HHuJ.js";import"./preload-helper-RXXcFWVp.js";import"./PdfViewer-DOSuvIYI.js";import"./index-04K8kL6p.js";import"./BasePdfViewer-BULaxwIO.js";import"./BasePdfViewer.module.css-DQQLlOPl.js";import"./PdfViewerAnnotationLayer-DACPdmAu.js";import"./constants-DsXMS3N3.js";import"./usePdfDocument-Cx1u1Dqb.js";import"./PdfViewerOutlineSidebar-Dv8z0AYy.js";import"./PdfViewerSidebarHeader-DYbgj1BM.js";import"./useBaseUiId-B2pmxP6_.js";import"./useControlled--GslnpxD.js";import"./CompositeRoot-D9PLGY3m.js";import"./CompositeItem-BKwp9a98.js";import"./ToolbarRootContext-pFU5HeoC.js";import"./composite-DNSc_3T9.js";import"./svgIconContainer-Dx_A2X3i.js";import"./PdfViewerSearchBar-CgbvF37z.js";import"./chevron-up-DTVIHzut.js";import"./chevron-down-DiWP7BJ0.js";import"./cross-DlOxrMTv.js";import"./PdfViewerSidebar-C3_6ZzcD.js";import"./index-CRzwoc2n.js";import"./index-CXKzX9X0.js";import"./index-Df5y4IMk.js";import"./PdfViewerToolbar-BES00yo0.js";import"./Button-BJP0lB5I.js";import"./chevron-right-Bc6IoyTg.js";import"./Input-Ci8-51zi.js";import"./search-Dqp-f9oD.js";import"./spin-C9aFPDtc.js";import"./error-BkdYgUyU.js";import"./withOsdkMetrics-ac55KtkN.js";import"./makeExternalStore-DcK2tIHU.js";const U={title:"Components/DocumentViewer/Renderers/PdfViewer",component:p,tags:["beta"],parameters:{controls:{expanded:!0}}},o={render:()=>{const{object:e,isLoading:n}=a(d,s);return n||!(e!=null&&e.employeeDocuments)?r.jsx("div",{style:{height:"600px"},children:"Loading OSDK media…"}):r.jsx("div",{style:{height:"600px"},children:r.jsx(p,{media:e.employeeDocuments})})},parameters:{docs:{source:{code:`// Access media from an OSDK object's media reference property
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
