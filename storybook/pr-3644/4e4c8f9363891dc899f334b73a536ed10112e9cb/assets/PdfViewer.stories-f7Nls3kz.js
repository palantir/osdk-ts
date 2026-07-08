import{j as r,M as s}from"./iframe-DTDlIEF3.js";import{P as p}from"./pdf-viewer-DRWggu1b.js";import{E as d}from"./Employee-BAk2o20h.js";import{u as a}from"./useOsdkObject-DsJ4YNFd.js";import"./preload-helper-C-GK6Onh.js";import"./PdfRenderer-B2zzX8iY.js";import"./index-BCtj5pCU.js";import"./PdfViewer-Mw8AGxaR.js";import"./PdfViewer.module.css-D_rXJG7P.js";import"./PdfViewerAnnotationLayer-Ag1V_Dd5.js";import"./constants-DsXMS3N3.js";import"./usePdfDocument-CHLfHxNS.js";import"./PdfViewerOutlineSidebar-BzZm4zTg.js";import"./PdfViewerSidebarHeader-D94g4lZl.js";import"./useBaseUiId-17W_kuvC.js";import"./useControlled-BKxb4fja.js";import"./CompositeRoot-DlFURmWw.js";import"./CompositeItem-C2Pr1U_7.js";import"./ToolbarRootContext-DFtUaAH_.js";import"./composite-Dk9pNs_-.js";import"./svgIconContainer-xuabE_nM.js";import"./PdfViewerSearchBar-C4bxal0G.js";import"./chevron-up-BdeH2wOW.js";import"./chevron-down-DIvYzKk5.js";import"./cross-P3ZQZf6k.js";import"./PdfViewerSidebar-BPNZthVD.js";import"./index-fLwEaIYu.js";import"./index-Ymg_sJwo.js";import"./index-DQDqZSz_.js";import"./PdfViewerToolbar-BzVL439k.js";import"./Button-Dz1aAZ_7.js";import"./chevron-right-CSl8_c3E.js";import"./Input-Df2Zd1-W.js";import"./search-D-mdeHPp.js";import"./spin-DYPm030H.js";import"./error-DKQDRJZx.js";import"./withOsdkMetrics-BqXMiMN_.js";import"./makeExternalStore-CcWA4QXC.js";const U={title:"Components/DocumentViewer/Renderers/PdfViewer",component:p,tags:["beta"],parameters:{controls:{expanded:!0}}},o={render:()=>{const{object:e,isLoading:n}=a(d,s);return n||!(e!=null&&e.employeeDocuments)?r.jsx("div",{style:{height:"600px"},children:"Loading OSDK media…"}):r.jsx("div",{style:{height:"600px"},children:r.jsx(p,{media:e.employeeDocuments})})},parameters:{docs:{source:{code:`import { PdfViewer } from "@osdk/react-components/experimental/pdf-viewer";

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
