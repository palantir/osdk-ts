import{j as r,M as s}from"./iframe-B0400XAV.js";import{P as p}from"./pdf-viewer-B3wTtZFQ.js";import{E as d}from"./Employee-BAk2o20h.js";import{u as a}from"./useOsdkObject-DtQIjyi_.js";import"./preload-helper-Bn7pmSUb.js";import"./PdfViewer-B17kBZDi.js";import"./index-DZ4vxiLW.js";import"./BasePdfViewer-BUkCjjFX.js";import"./BasePdfViewer.module.css-D8F-pRMo.js";import"./PdfViewerAnnotationLayer-CRXhSVzs.js";import"./constants-DsXMS3N3.js";import"./usePdfDocument-Cg-BPV06.js";import"./PdfViewerOutlineSidebar-BArAOsgq.js";import"./PdfViewerSidebarHeader-B_THTwE0.js";import"./useBaseUiId-B9k80gJ8.js";import"./useControlled-DjWHSFCM.js";import"./CompositeRoot-e82S1FUk.js";import"./CompositeItem-CoJRCpBo.js";import"./ToolbarRootContext--iPu1vj7.js";import"./composite-BH1fXSiW.js";import"./svgIconContainer-JRfXSFeh.js";import"./PdfViewerSearchBar-wYKAYTq8.js";import"./chevron-up-7Ij6yN3a.js";import"./chevron-down-CEDiPbvm.js";import"./cross-DQqnupWk.js";import"./PdfViewerSidebar-BwCsCorg.js";import"./index-C8DuxpD6.js";import"./index-C_9Kpq7B.js";import"./index-2o5KGJI0.js";import"./PdfViewerToolbar-HWa7NkMQ.js";import"./Button-YA4JYpq1.js";import"./chevron-right-DGvwmyLB.js";import"./Input-BRGSYo1e.js";import"./search-BeppLusu.js";import"./spin-4a5yNnn6.js";import"./error-BZwgl63S.js";import"./withOsdkMetrics-CZrqSehW.js";import"./makeExternalStore-B2IR-Z_q.js";const U={title:"Components/DocumentViewer/Renderers/PdfViewer",component:p,tags:["beta"],parameters:{controls:{expanded:!0}}},o={render:()=>{const{object:e,isLoading:n}=a(d,s);return n||!(e!=null&&e.employeeDocuments)?r.jsx("div",{style:{height:"600px"},children:"Loading OSDK media…"}):r.jsx("div",{style:{height:"600px"},children:r.jsx(p,{media:e.employeeDocuments})})},parameters:{docs:{source:{code:`// Access media from an OSDK object's media reference property
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
