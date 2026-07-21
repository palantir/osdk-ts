import{j as r,M as s}from"./iframe-BzlYLQ-i.js";import{P as p}from"./pdf-viewer-DHrxGrFe.js";import{E as d}from"./Employee-BAk2o20h.js";import{u as a}from"./useOsdkObject-Bv6KgsCk.js";import"./preload-helper-Ch6_Jnnc.js";import"./PdfRenderer-D_h-SNkk.js";import"./index-0NDkVbp8.js";import"./PdfViewer-DswG74a3.js";import"./PdfViewer.module.css-aArw8Jzf.js";import"./PdfViewerAnnotationLayer-CQTIzNEr.js";import"./constants-DsXMS3N3.js";import"./usePdfDocument-BUBZBe7C.js";import"./PdfViewerOutlineSidebar-FiT75byG.js";import"./PdfViewerSidebarHeader-2h_iJ6RJ.js";import"./useBaseUiId-Dr8TPlc3.js";import"./useControlled-Dp8h5goj.js";import"./CompositeRoot-DHIc3HEP.js";import"./CompositeItem-DT554UZE.js";import"./ToolbarRootContext-SlT4-41c.js";import"./composite-Ca4ja29w.js";import"./svgIconContainer-CzqCBiqK.js";import"./PdfViewerSearchBar-Bh_go8I9.js";import"./chevron-up-uyJxD9nb.js";import"./chevron-down-DkEE_eX1.js";import"./cross-CtsDX5u-.js";import"./PdfViewerSidebar-Ddez1FUf.js";import"./index-Djutzn40.js";import"./index-CymzoPXI.js";import"./index-VloNGu1B.js";import"./PdfViewerToolbar-CsX68moT.js";import"./Button-Bn3n_M--.js";import"./chevron-right-BkFjDYqj.js";import"./Input-QoZRQCyF.js";import"./search-3vJQud9L.js";import"./spin-CmW2slG7.js";import"./error-BwoO0b5Y.js";import"./withOsdkMetrics-DZsWQYqQ.js";import"./makeExternalStore-6MpUzXMo.js";const U={title:"Components/DocumentViewer/Renderers/PdfViewer",component:p,tags:["beta"],parameters:{controls:{expanded:!0}}},o={render:()=>{const{object:e,isLoading:n}=a(d,s);return n||!(e!=null&&e.employeeDocuments)?r.jsx("div",{style:{height:"600px"},children:"Loading OSDK media…"}):r.jsx("div",{style:{height:"600px"},children:r.jsx(p,{media:e.employeeDocuments})})},parameters:{docs:{source:{code:`import { PdfViewer } from "@osdk/react-components/experimental/pdf-viewer";

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
