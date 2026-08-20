import{j as r,M as s}from"./iframe-9M9bsBp7.js";import{P as p}from"./pdf-viewer-DAKyj85K.js";import{E as d}from"./Employee-BAk2o20h.js";import{u as a}from"./useOsdkObject-DWkII1Tb.js";import"./preload-helper-BM4z56U2.js";import"./PdfViewer-u6z1AbHp.js";import"./index-Btt-Erli.js";import"./BasePdfViewer-DZWWZxIr.js";import"./BasePdfViewer.module.css-BPEnWK1o.js";import"./PdfViewerAnnotationLayer-CA91JqGB.js";import"./constants-DsXMS3N3.js";import"./usePdfDocument-BjJ98n0w.js";import"./PdfViewerOutlineSidebar-C3Rr8sVO.js";import"./PdfViewerSidebarHeader-gRzH7buE.js";import"./useBaseUiId-Cecht4K8.js";import"./useControlled-w4bpKx_N.js";import"./CompositeRoot-CD6BlrkK.js";import"./CompositeItem-BB1LLivk.js";import"./ToolbarRootContext-CZOvTlyr.js";import"./composite-cToRjaCy.js";import"./svgIconContainer-CoivixKV.js";import"./PdfViewerSearchBar-DkrgaKA6.js";import"./chevron-up-pvt3EeUO.js";import"./chevron-down-DZ9BB8z3.js";import"./cross-DvXvrJje.js";import"./PdfViewerSidebar-tVLatSMS.js";import"./index-C5SnP7CW.js";import"./index-B06OZyEr.js";import"./index-C09389ae.js";import"./PdfViewerToolbar-7CU7cL7k.js";import"./Button-B2MqrRbr.js";import"./chevron-right-CnuPHU2H.js";import"./Input-C7jKYdT3.js";import"./search-DEkxxSSE.js";import"./spin-DUrGmfig.js";import"./error-p3mSXq-q.js";import"./withOsdkMetrics-DfgPxehB.js";import"./makeExternalStore-DWMnQhkI.js";const U={title:"Components/DocumentViewer/Renderers/PdfViewer",component:p,tags:["beta"],parameters:{controls:{expanded:!0}}},o={render:()=>{const{object:e,isLoading:n}=a(d,s);return n||!(e!=null&&e.employeeDocuments)?r.jsx("div",{style:{height:"600px"},children:"Loading OSDK media…"}):r.jsx("div",{style:{height:"600px"},children:r.jsx(p,{media:e.employeeDocuments})})},parameters:{docs:{source:{code:`import { PdfViewer } from "@osdk/react-components/experimental/pdf-viewer";

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
