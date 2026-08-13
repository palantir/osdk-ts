import{j as r,M as s}from"./iframe-CpI7FB-T.js";import{P as p}from"./pdf-viewer-DBMSrAx5.js";import{E as d}from"./Employee-BAk2o20h.js";import{u as a}from"./useOsdkObject-DpQ_pMpO.js";import"./preload-helper-B_hE2pBz.js";import"./PdfRenderer-CM3_mCcC.js";import"./index-Dd3y5ah7.js";import"./PdfViewer-kYnq5rK8.js";import"./PdfViewer.module.css-kDNtviaW.js";import"./PdfViewerAnnotationLayer-CNyXssO-.js";import"./constants-DsXMS3N3.js";import"./usePdfDocument-BDvAXA7k.js";import"./PdfViewerOutlineSidebar-BcLFSRKk.js";import"./PdfViewerSidebarHeader-CiEHRp2O.js";import"./useBaseUiId-CmfBo7dj.js";import"./useControlled-CzotDDz1.js";import"./CompositeRoot-C-qK3rNL.js";import"./CompositeItem-CCWclQxp.js";import"./ToolbarRootContext-Bq8pd6_h.js";import"./composite-BR65LiyS.js";import"./svgIconContainer-CEg1T5tk.js";import"./PdfViewerSearchBar-BrEluWfN.js";import"./chevron-up-M1h-lsHO.js";import"./chevron-down-JaiM5xR9.js";import"./cross-B20tfhAE.js";import"./PdfViewerSidebar-B1VIgcNG.js";import"./index-DzEbTyMP.js";import"./index-BPRvbx56.js";import"./index-DosPUwQU.js";import"./PdfViewerToolbar-iPxbmgN8.js";import"./Button-CLOyqypH.js";import"./chevron-right-gecnxfOz.js";import"./Input-DdDoLRi6.js";import"./search-e6ClQ_VS.js";import"./spin-BODsILLu.js";import"./error-DM5U_BtV.js";import"./withOsdkMetrics-ADEd6SH7.js";import"./makeExternalStore-NLBkDu7_.js";const U={title:"Components/DocumentViewer/Renderers/PdfViewer",component:p,tags:["beta"],parameters:{controls:{expanded:!0}}},o={render:()=>{const{object:e,isLoading:n}=a(d,s);return n||!(e!=null&&e.employeeDocuments)?r.jsx("div",{style:{height:"600px"},children:"Loading OSDK media…"}):r.jsx("div",{style:{height:"600px"},children:r.jsx(p,{media:e.employeeDocuments})})},parameters:{docs:{source:{code:`import { PdfViewer } from "@osdk/react-components/experimental/pdf-viewer";

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
