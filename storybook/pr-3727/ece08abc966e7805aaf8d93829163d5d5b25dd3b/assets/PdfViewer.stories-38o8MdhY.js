import{j as r,M as s}from"./iframe-8mEMf3e5.js";import{P as p}from"./pdf-viewer-DU5R-YH0.js";import{E as d}from"./Employee-BAk2o20h.js";import{u as a}from"./useOsdkObject-yXg9m4Jc.js";import"./preload-helper-DbAS9a1v.js";import"./PdfRenderer-DAQiPX-K.js";import"./index--J3l5EbG.js";import"./PdfViewer-CivswYJJ.js";import"./PdfViewer.module.css-B22G0NLi.js";import"./PdfViewerAnnotationLayer-y12CHsrv.js";import"./constants-DsXMS3N3.js";import"./usePdfDocument-CBQRN5-A.js";import"./PdfViewerOutlineSidebar-D12ZQpO1.js";import"./PdfViewerSidebarHeader-B6Ra28SV.js";import"./useBaseUiId-DKi4WO_9.js";import"./useControlled-CxBgkGC_.js";import"./CompositeRoot-D9op3wi_.js";import"./CompositeItem-CxQ7s4vA.js";import"./ToolbarRootContext-zmF5Vdu_.js";import"./composite-C_r6gpBa.js";import"./svgIconContainer-BDT9UouZ.js";import"./PdfViewerSearchBar-kVby0eLy.js";import"./chevron-up-DqttMmpZ.js";import"./chevron-down-C6YJpuG9.js";import"./cross-UGSNun_i.js";import"./PdfViewerSidebar-ZUdO_iSC.js";import"./index-CRqHRu41.js";import"./index-BFzy3rwW.js";import"./index-B4h71S0u.js";import"./PdfViewerToolbar-D5Ek6o10.js";import"./Button-DilAyh-o.js";import"./chevron-right-CceNMpu5.js";import"./Input-D4BJzKx_.js";import"./search-D3-FY_Jd.js";import"./spin-DaSb3IiQ.js";import"./error-75F6hF38.js";import"./withOsdkMetrics-BDnjGfwF.js";import"./makeExternalStore-BoR92T3E.js";const U={title:"Components/DocumentViewer/Renderers/PdfViewer",component:p,tags:["beta"],parameters:{controls:{expanded:!0}}},o={render:()=>{const{object:e,isLoading:n}=a(d,s);return n||!(e!=null&&e.employeeDocuments)?r.jsx("div",{style:{height:"600px"},children:"Loading OSDK media…"}):r.jsx("div",{style:{height:"600px"},children:r.jsx(p,{media:e.employeeDocuments})})},parameters:{docs:{source:{code:`import { PdfViewer } from "@osdk/react-components/experimental/pdf-viewer";

// Access media from an OSDK object's media reference property
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
        code: \`import { PdfViewer } from "@osdk/react-components/experimental/pdf-viewer";

// Access media from an OSDK object's media reference property
const employee = useOsdkObject(Employee, employeePk);
<PdfViewer media={employee.employeeDocuments} />\`
      }
    }
  }
}`,...(i=(m=o.parameters)==null?void 0:m.docs)==null?void 0:i.source}}};const W=["Default"];export{o as Default,W as __namedExportsOrder,U as default};
