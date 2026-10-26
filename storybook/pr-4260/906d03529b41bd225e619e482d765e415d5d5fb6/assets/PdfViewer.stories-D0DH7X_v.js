import{j as r,M as s}from"./iframe-BrTF0wQy.js";import{P as p}from"./pdf-viewer-CWBwdeDb.js";import{E as d}from"./Employee-BAk2o20h.js";import{u as a}from"./useOsdkObject-LcM3mNM4.js";import"./preload-helper-BrgL7riq.js";import"./PdfViewer-BE1RzLZy.js";import"./index-CLIofpuq.js";import"./BasePdfViewer-CbHEoT14.js";import"./BasePdfViewer.module.css-CmtG1-Bo.js";import"./PdfViewerAnnotationLayer-CGNE7z75.js";import"./constants-DsXMS3N3.js";import"./usePdfDocument-CgY_GeX_.js";import"./PdfViewerOutlineSidebar-BqAL-YIq.js";import"./PdfViewerSidebarHeader-C9RlNZR_.js";import"./useBaseUiId-paQZpqMq.js";import"./useControlled-DhGBxpYo.js";import"./CompositeRoot-C2jY-j5A.js";import"./CompositeItem-Cz4Nt1SP.js";import"./ToolbarRootContext-vcL9onuR.js";import"./composite-CeMPnKRZ.js";import"./svgIconContainer-_Twg2KpW.js";import"./PdfViewerSearchBar-BzbkPtyH.js";import"./chevron-up-Coyz-w1G.js";import"./chevron-down-K7i3qdrh.js";import"./cross-Dlqc_1ZY.js";import"./PdfViewerSidebar-uXtPs1w6.js";import"./index-D3KaSgKX.js";import"./index-D3SuSheR.js";import"./index-nFJUSH9O.js";import"./PdfViewerToolbar-HQaghJNO.js";import"./Button-BnRJeVMr.js";import"./chevron-right-DNGoVFRQ.js";import"./Input-BxbCwGL8.js";import"./search-CqSH1asp.js";import"./spin-S16pA-d-.js";import"./error-Csk-3gAP.js";import"./withOsdkMetrics-DXsXQf0j.js";import"./makeExternalStore-BDEao_Ea.js";const U={title:"Components/DocumentViewer/Renderers/PdfViewer",component:p,tags:["beta"],parameters:{controls:{expanded:!0}}},o={render:()=>{const{object:e,isLoading:n}=a(d,s);return n||!(e!=null&&e.employeeDocuments)?r.jsx("div",{style:{height:"600px"},children:"Loading OSDK media…"}):r.jsx("div",{style:{height:"600px"},children:r.jsx(p,{media:e.employeeDocuments})})},parameters:{docs:{source:{code:`// Access media from an OSDK object's media reference property
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
