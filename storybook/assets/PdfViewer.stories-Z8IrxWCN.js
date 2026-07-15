import{j as r,M as s}from"./iframe-CAVo3KSD.js";import{P as p}from"./pdf-viewer-DHqFdi3o.js";import{E as d}from"./Employee-BAk2o20h.js";import{u as a}from"./useOsdkObject-DwO39Xs5.js";import"./preload-helper-Dp1pzeXC.js";import"./PdfRenderer-Bh8HYqho.js";import"./index-CETWgizZ.js";import"./PdfViewer-DtmlRVWV.js";import"./PdfViewer.module.css-DRLmTa4n.js";import"./PdfViewerAnnotationLayer-BsXLv0WJ.js";import"./constants-DsXMS3N3.js";import"./usePdfDocument-uZGb37oA.js";import"./PdfViewerOutlineSidebar-B1l-NY3A.js";import"./PdfViewerSidebarHeader-BjQ4SRiH.js";import"./useBaseUiId-BEKvCZTk.js";import"./useControlled-BqgK97pU.js";import"./CompositeRoot-CXeJDx78.js";import"./CompositeItem-BLFgh2AD.js";import"./ToolbarRootContext-sUAEkKPf.js";import"./composite-BhUpeWne.js";import"./svgIconContainer-CdCxXVW4.js";import"./PdfViewerSearchBar-CiiCm6SB.js";import"./chevron-up-DVtu6t8I.js";import"./chevron-down-nzZ4GhdY.js";import"./cross-BRimsVDJ.js";import"./PdfViewerSidebar-CfsRU_xr.js";import"./index-D7fAChCW.js";import"./index-CE9quRvV.js";import"./index-BdN5IhYD.js";import"./PdfViewerToolbar-DB3ej1NO.js";import"./Button-DzqbCr4c.js";import"./chevron-right-C-gv1DYF.js";import"./Input-BgQCEDQn.js";import"./search-CO76evE2.js";import"./spin-BpBg7MAT.js";import"./error-Bef6_Y6B.js";import"./withOsdkMetrics-hCWMK_0J.js";import"./makeExternalStore-9GNLJugC.js";const U={title:"Components/DocumentViewer/Renderers/PdfViewer",component:p,tags:["beta"],parameters:{controls:{expanded:!0}}},o={render:()=>{const{object:e,isLoading:n}=a(d,s);return n||!(e!=null&&e.employeeDocuments)?r.jsx("div",{style:{height:"600px"},children:"Loading OSDK media…"}):r.jsx("div",{style:{height:"600px"},children:r.jsx(p,{media:e.employeeDocuments})})},parameters:{docs:{source:{code:`import { PdfViewer } from "@osdk/react-components/experimental/pdf-viewer";

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
