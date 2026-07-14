import{j as r,M as s}from"./iframe-Bbafph4K.js";import{P as p}from"./pdf-viewer-CydAHcRj.js";import{E as d}from"./Employee-BAk2o20h.js";import{u as a}from"./useOsdkObject-DkEZSWcr.js";import"./preload-helper-CaSCSgVc.js";import"./PdfRenderer-BVW4Ojs0.js";import"./index-CwsL8f-H.js";import"./PdfViewer-DCW41AFh.js";import"./PdfViewer.module.css-B-fl4RBm.js";import"./PdfViewerAnnotationLayer-BiJhnO0A.js";import"./constants-DsXMS3N3.js";import"./usePdfDocument-CTUkFhZR.js";import"./PdfViewerOutlineSidebar-CGcssxXx.js";import"./PdfViewerSidebarHeader-CZDerV4y.js";import"./useBaseUiId-Dv7galBf.js";import"./useControlled-DUKvpuhs.js";import"./CompositeRoot-lyue2czD.js";import"./CompositeItem-o8LqhoF4.js";import"./ToolbarRootContext--d2sb2_x.js";import"./composite-Bvn9XMBe.js";import"./svgIconContainer-qODLhhla.js";import"./PdfViewerSearchBar-C2BHuo9G.js";import"./chevron-up-B7wniNBq.js";import"./chevron-down-A3yYbQMG.js";import"./cross-DMS9CKBB.js";import"./PdfViewerSidebar-EvZ2Ek-6.js";import"./index-BsRKMc4H.js";import"./index--Cvvoryu.js";import"./index-tbmcPS6b.js";import"./PdfViewerToolbar-BCmp7bX5.js";import"./Button-BHOpXDH0.js";import"./chevron-right-DXVBjCJ-.js";import"./Input-DDKg2pDq.js";import"./search-CIIgq1u5.js";import"./spin-DZZKwoMl.js";import"./error-Dv-6aR3m.js";import"./withOsdkMetrics-NYKKZ0WO.js";import"./makeExternalStore-kKI7EASY.js";const U={title:"Components/DocumentViewer/Renderers/PdfViewer",component:p,tags:["beta"],parameters:{controls:{expanded:!0}}},o={render:()=>{const{object:e,isLoading:n}=a(d,s);return n||!(e!=null&&e.employeeDocuments)?r.jsx("div",{style:{height:"600px"},children:"Loading OSDK media…"}):r.jsx("div",{style:{height:"600px"},children:r.jsx(p,{media:e.employeeDocuments})})},parameters:{docs:{source:{code:`import { PdfViewer } from "@osdk/react-components/experimental/pdf-viewer";

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
