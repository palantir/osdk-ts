import{j as r,M as s}from"./iframe-Ba-c-5nq.js";import{P as p}from"./pdf-viewer-DjA9Ef2e.js";import{E as d}from"./Employee-BAk2o20h.js";import{u as a}from"./useOsdkObject-DJElAvWb.js";import"./preload-helper-BztM0zd3.js";import"./PdfRenderer-BzICfFji.js";import"./index-BZYJXe_K.js";import"./PdfViewer-BKF2aRS2.js";import"./PdfViewer.module.css-Dfv1B1ez.js";import"./PdfViewerAnnotationLayer-BJV1oOJC.js";import"./constants-DsXMS3N3.js";import"./usePdfDocument-Bfwf_LPf.js";import"./PdfViewerOutlineSidebar-BbQERVOn.js";import"./PdfViewerSidebarHeader-rlLzguFP.js";import"./useBaseUiId-SyE10KSM.js";import"./useControlled-CYFCq3LM.js";import"./CompositeRoot-CjpvJC1h.js";import"./CompositeItem-ZAMypIc6.js";import"./ToolbarRootContext-D7cPA4-F.js";import"./composite-DO4jkMxx.js";import"./svgIconContainer-Dp_15OXU.js";import"./PdfViewerSearchBar-CspSZqJ3.js";import"./chevron-up-hG7lxhNP.js";import"./chevron-down-CA-mhdyH.js";import"./cross-CbTsl62T.js";import"./PdfViewerSidebar-B1wey1hq.js";import"./index-COWKnjzK.js";import"./index-BaYnvFXw.js";import"./index-Bk6Q3t8r.js";import"./PdfViewerToolbar-sQqEsYCu.js";import"./Button-BRMRuIkL.js";import"./chevron-right-CHl1Et9N.js";import"./Input-Cn155hgD.js";import"./search-DvuavvAU.js";import"./spin-CRIgw7RV.js";import"./error-Cz5G3l9G.js";import"./withOsdkMetrics-jkrHhrTt.js";import"./makeExternalStore-DYqfuTbj.js";const U={title:"Components/DocumentViewer/Renderers/PdfViewer",component:p,tags:["beta"],parameters:{controls:{expanded:!0}}},o={render:()=>{const{object:e,isLoading:n}=a(d,s);return n||!(e!=null&&e.employeeDocuments)?r.jsx("div",{style:{height:"600px"},children:"Loading OSDK media…"}):r.jsx("div",{style:{height:"600px"},children:r.jsx(p,{media:e.employeeDocuments})})},parameters:{docs:{source:{code:`import { PdfViewer } from "@osdk/react-components/experimental/pdf-viewer";

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
