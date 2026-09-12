import{j as r,M as s}from"./iframe-kpUBKcBo.js";import{P as p}from"./pdf-viewer-CF0pjhhZ.js";import{E as d}from"./Employee-BAk2o20h.js";import{u as a}from"./useOsdkObject-dIbbJMOj.js";import"./preload-helper-CEFfxAxV.js";import"./PdfViewer-CmIuM_eQ.js";import"./index-CzIfSD2x.js";import"./BasePdfViewer-Cpr4E_Ae.js";import"./BasePdfViewer.module.css-BhWT5mtp.js";import"./PdfViewerAnnotationLayer-BSetaQKY.js";import"./constants-DsXMS3N3.js";import"./usePdfDocument-CLq6c4rE.js";import"./PdfViewerOutlineSidebar-D4Cl8uxc.js";import"./PdfViewerSidebarHeader-BBqO8Ah1.js";import"./useBaseUiId-eq47N9Yh.js";import"./useControlled-C4e8W1YD.js";import"./CompositeRoot-sFbKk6XD.js";import"./CompositeItem-ChylY6HS.js";import"./ToolbarRootContext-CcFhYs5t.js";import"./composite-DqwQEgXz.js";import"./svgIconContainer-D1XUyLZc.js";import"./PdfViewerSearchBar-B6e9ZVPq.js";import"./chevron-up-B0nfTL52.js";import"./chevron-down-CeKigphE.js";import"./cross-CsmLqXcs.js";import"./PdfViewerSidebar-BmpD_9i_.js";import"./index-fVh42c2P.js";import"./index-Cg38QLat.js";import"./index-nssiJGD2.js";import"./PdfViewerToolbar-DlRzUzhI.js";import"./Button-IGB5Y7yU.js";import"./chevron-right-Dq3r1EO9.js";import"./Input-xZVHbMZj.js";import"./search-D4qHiAMZ.js";import"./spin-CZkX9b3l.js";import"./error-DS4cKU2L.js";import"./withOsdkMetrics-DpMhi7xT.js";import"./makeExternalStore-DQTLFAQr.js";const U={title:"Components/DocumentViewer/Renderers/PdfViewer",component:p,tags:["beta"],parameters:{controls:{expanded:!0}}},o={render:()=>{const{object:e,isLoading:n}=a(d,s);return n||!(e!=null&&e.employeeDocuments)?r.jsx("div",{style:{height:"600px"},children:"Loading OSDK media…"}):r.jsx("div",{style:{height:"600px"},children:r.jsx(p,{media:e.employeeDocuments})})},parameters:{docs:{source:{code:`// Access media from an OSDK object's media reference property
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
