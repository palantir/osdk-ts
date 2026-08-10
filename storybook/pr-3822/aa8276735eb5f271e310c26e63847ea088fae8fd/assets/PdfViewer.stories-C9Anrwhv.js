import{j as r,M as s}from"./iframe-DnXG6ria.js";import{P as p}from"./pdf-viewer-5K-F_cKq.js";import{E as d}from"./Employee-BAk2o20h.js";import{u as a}from"./useOsdkObject-rEvtdgcZ.js";import"./preload-helper-DdcgdAiM.js";import"./PdfRenderer-DoDdNRIC.js";import"./index-DxGDEKEE.js";import"./PdfViewer-DzvY9VFD.js";import"./PdfViewer.module.css-BbYdh6mO.js";import"./PdfViewerAnnotationLayer-Bsj0-vkI.js";import"./constants-DsXMS3N3.js";import"./usePdfDocument-sbZv3nWl.js";import"./PdfViewerOutlineSidebar-D-MPObKO.js";import"./PdfViewerSidebarHeader-DKhFEKn3.js";import"./useBaseUiId-SDlMWfrq.js";import"./useControlled-r9d6OnMX.js";import"./CompositeRoot-CBBN2ifZ.js";import"./CompositeItem-CIThtc7F.js";import"./ToolbarRootContext-Z4gE_V_n.js";import"./composite-BEEpir5s.js";import"./svgIconContainer-ChS4vANK.js";import"./PdfViewerSearchBar-C2tkXAKL.js";import"./chevron-up-CiiJJNFz.js";import"./chevron-down-DxHRdvtD.js";import"./cross-DGHgZ4N6.js";import"./PdfViewerSidebar-3nMgniEb.js";import"./index-CYr1UXPi.js";import"./index-DxHtJywa.js";import"./index-BqFzb3S3.js";import"./PdfViewerToolbar-C4daYu9N.js";import"./Button-cT8XGKmn.js";import"./chevron-right-DpZGVun-.js";import"./Input-Bl1_npZH.js";import"./search-CeZhHxk0.js";import"./spin-BVhmgN8z.js";import"./error-BVlgT8A_.js";import"./withOsdkMetrics-k-U64tRw.js";import"./makeExternalStore-DUeGYV2j.js";const U={title:"Components/DocumentViewer/Renderers/PdfViewer",component:p,tags:["beta"],parameters:{controls:{expanded:!0}}},o={render:()=>{const{object:e,isLoading:n}=a(d,s);return n||!(e!=null&&e.employeeDocuments)?r.jsx("div",{style:{height:"600px"},children:"Loading OSDK media…"}):r.jsx("div",{style:{height:"600px"},children:r.jsx(p,{media:e.employeeDocuments})})},parameters:{docs:{source:{code:`import { PdfViewer } from "@osdk/react-components/experimental/pdf-viewer";

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
