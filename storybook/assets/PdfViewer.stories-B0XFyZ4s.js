import{j as r,M as s}from"./iframe-pMDj1zlL.js";import{P as p}from"./pdf-viewer-CcXUe8OO.js";import{E as d}from"./Employee-BAk2o20h.js";import{u as a}from"./useOsdkObject-B87G7oqa.js";import"./preload-helper-Dp1pzeXC.js";import"./PdfRenderer-LU_mID00.js";import"./index-BEiLhw5T.js";import"./PdfViewer-P0Rmfu9P.js";import"./PdfViewer.module.css-w0pmMUg4.js";import"./PdfViewerAnnotationLayer-Ro5-cby_.js";import"./constants-DsXMS3N3.js";import"./usePdfDocument-DVxpDpQs.js";import"./PdfViewerOutlineSidebar-DPn0ZYWd.js";import"./PdfViewerSidebarHeader-LTc-wAAc.js";import"./useBaseUiId-BxOJz_bX.js";import"./useControlled-DLFFdWtR.js";import"./CompositeRoot-CopROMz-.js";import"./CompositeItem-Cc3oJSSK.js";import"./ToolbarRootContext-CWM57gb-.js";import"./composite-CggwT3kY.js";import"./svgIconContainer-DdmpuKmq.js";import"./PdfViewerSearchBar-B3Sr5KKA.js";import"./chevron-up-BJjbs6dw.js";import"./chevron-down-CJumc_Om.js";import"./cross-DyLj8FgG.js";import"./PdfViewerSidebar-U4opj_zB.js";import"./index-D2Z6sc74.js";import"./index-60_psmw5.js";import"./index-CkoF2FYc.js";import"./PdfViewerToolbar-CQt-6kBV.js";import"./Button-Dmc2RbhW.js";import"./chevron-right-DWRA1LXq.js";import"./Input-DEXAudoy.js";import"./search-DogkgmdT.js";import"./spin-BaMWc2uP.js";import"./error-Dt7j7VXO.js";import"./withOsdkMetrics-Vcm7xII9.js";import"./makeExternalStore-hwCkOqqO.js";const U={title:"Components/DocumentViewer/Renderers/PdfViewer",component:p,tags:["beta"],parameters:{controls:{expanded:!0}}},o={render:()=>{const{object:e,isLoading:n}=a(d,s);return n||!(e!=null&&e.employeeDocuments)?r.jsx("div",{style:{height:"600px"},children:"Loading OSDK media…"}):r.jsx("div",{style:{height:"600px"},children:r.jsx(p,{media:e.employeeDocuments})})},parameters:{docs:{source:{code:`import { PdfViewer } from "@osdk/react-components/experimental/pdf-viewer";

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
