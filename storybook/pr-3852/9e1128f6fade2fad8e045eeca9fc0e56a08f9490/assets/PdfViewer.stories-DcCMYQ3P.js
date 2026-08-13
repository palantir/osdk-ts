import{j as r,M as s}from"./iframe-iUGaKF-g.js";import{P as p}from"./pdf-viewer-8_l0w3BF.js";import{E as d}from"./Employee-BAk2o20h.js";import{u as a}from"./useOsdkObject-BFUANm2c.js";import"./preload-helper-C5QJwAu5.js";import"./PdfViewer-so7Zalov.js";import"./index-biVvCra3.js";import"./BasePdfViewer-uXzMsItE.js";import"./BasePdfViewer.module.css-CyjOQjrQ.js";import"./PdfViewerAnnotationLayer-DgiOqLFA.js";import"./constants-DsXMS3N3.js";import"./usePdfDocument-D3Q3hlfO.js";import"./PdfViewerOutlineSidebar-DPNu6Kxc.js";import"./PdfViewerSidebarHeader-DRZ7xcp6.js";import"./useBaseUiId-Bf0uFdSS.js";import"./useControlled-BHtZ5WxN.js";import"./CompositeRoot-BITWgm8F.js";import"./CompositeItem-BJtdPIpL.js";import"./ToolbarRootContext-CsWu5MBg.js";import"./composite-BdFuHmfd.js";import"./svgIconContainer-D9SYWNzR.js";import"./PdfViewerSearchBar-BBbLmsRE.js";import"./chevron-up-Brt1L5jl.js";import"./chevron-down-D6OM1qR9.js";import"./cross-BFNp-6V_.js";import"./PdfViewerSidebar-C92inG1a.js";import"./index-DIFFZVPL.js";import"./index-CABXZzlk.js";import"./index-CoBHmv7L.js";import"./PdfViewerToolbar-CCc__24R.js";import"./Button-DOHDr1Yv.js";import"./chevron-right-CGjJWDtn.js";import"./Input-ChMcCw-p.js";import"./search-Bn0ITWKa.js";import"./spin-CG_mnEu9.js";import"./error-BPV1DyS9.js";import"./withOsdkMetrics-BvgX9Hqp.js";import"./makeExternalStore-DYociY-T.js";const U={title:"Components/DocumentViewer/Renderers/PdfViewer",component:p,tags:["beta"],parameters:{controls:{expanded:!0}}},o={render:()=>{const{object:e,isLoading:n}=a(d,s);return n||!(e!=null&&e.employeeDocuments)?r.jsx("div",{style:{height:"600px"},children:"Loading OSDK media…"}):r.jsx("div",{style:{height:"600px"},children:r.jsx(p,{media:e.employeeDocuments})})},parameters:{docs:{source:{code:`import { PdfViewer } from "@osdk/react-components/experimental/pdf-viewer";

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
