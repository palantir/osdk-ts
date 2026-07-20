import{j as r,M as s}from"./iframe-CS16Wym9.js";import{P as p}from"./pdf-viewer-PNSGPmUo.js";import{E as d}from"./Employee-BAk2o20h.js";import{u as a}from"./useOsdkObject-DRDqrZp3.js";import"./preload-helper-DC9DeVBh.js";import"./PdfRenderer-DMIM_dZh.js";import"./index-DhEpXO1A.js";import"./PdfViewer-Du9_KwDj.js";import"./PdfViewer.module.css-BLTAgGfr.js";import"./PdfViewerAnnotationLayer-IFaRlUcq.js";import"./constants-DsXMS3N3.js";import"./usePdfDocument-BSp7se6c.js";import"./PdfViewerOutlineSidebar-U93Ey8iD.js";import"./PdfViewerSidebarHeader-Dg5j9NtW.js";import"./useBaseUiId-B-TyoTc3.js";import"./useControlled-aL-XGVGO.js";import"./CompositeRoot-ZhGpIUhB.js";import"./CompositeItem-DPrQDkCn.js";import"./ToolbarRootContext-BkTHv0Zm.js";import"./composite-B3nn8Wmd.js";import"./svgIconContainer-CfFnFwML.js";import"./PdfViewerSearchBar-CWpjRvAA.js";import"./chevron-up-DVBxX88V.js";import"./chevron-down-DgWoPbKX.js";import"./cross-BWFjaYun.js";import"./PdfViewerSidebar-C9WpT1MY.js";import"./index-DUlIu8bO.js";import"./index-C35-im3I.js";import"./index-BPUQ9eYC.js";import"./PdfViewerToolbar-DRQBCZhh.js";import"./Button-BhBWCaXR.js";import"./chevron-right-BKwk7SDE.js";import"./Input-BpmoD1sO.js";import"./search-DT-wqB-g.js";import"./spin-D__BHiZ6.js";import"./error-CvaWQpvx.js";import"./withOsdkMetrics-DMkQ6592.js";import"./makeExternalStore-BmbO7NbA.js";const U={title:"Components/DocumentViewer/Renderers/PdfViewer",component:p,tags:["beta"],parameters:{controls:{expanded:!0}}},o={render:()=>{const{object:e,isLoading:n}=a(d,s);return n||!(e!=null&&e.employeeDocuments)?r.jsx("div",{style:{height:"600px"},children:"Loading OSDK media…"}):r.jsx("div",{style:{height:"600px"},children:r.jsx(p,{media:e.employeeDocuments})})},parameters:{docs:{source:{code:`import { PdfViewer } from "@osdk/react-components/experimental/pdf-viewer";

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
