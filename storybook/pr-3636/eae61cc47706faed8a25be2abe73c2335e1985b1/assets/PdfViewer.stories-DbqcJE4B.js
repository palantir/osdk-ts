import{j as r,M as s}from"./iframe-CBxhM9az.js";import{P as p}from"./pdf-viewer-QJnBmtZ1.js";import{E as d}from"./Employee-BAk2o20h.js";import{u as a}from"./useOsdkObject-DuIi7hAG.js";import"./preload-helper-DW-KK_rZ.js";import"./PdfRenderer-FJkM6LNe.js";import"./index-Cgf7pLo9.js";import"./PdfViewer-CRMe71V8.js";import"./PdfViewer.module.css-B7fDMZ5p.js";import"./PdfViewerAnnotationLayer-DVc7nYbg.js";import"./constants-DsXMS3N3.js";import"./usePdfDocument-fPnYTMHm.js";import"./PdfViewerOutlineSidebar-omAfCLp1.js";import"./PdfViewerSidebarHeader-BQMhzxvY.js";import"./useBaseUiId-9_EpMwZF.js";import"./useControlled-B5r768gp.js";import"./CompositeRoot-iEzvVDk1.js";import"./CompositeItem-DtegFXlt.js";import"./ToolbarRootContext-BeYMA7gL.js";import"./composite-Df1dJCMi.js";import"./svgIconContainer-WdQ-lJI-.js";import"./PdfViewerSearchBar-15_LpIxP.js";import"./chevron-up-P35majsT.js";import"./chevron-down-BXLYq3p8.js";import"./cross-BDcYPaOo.js";import"./PdfViewerSidebar-DEPeYDb3.js";import"./index-CYxWdSim.js";import"./index-CPiaO5lB.js";import"./index-CjaqmYPA.js";import"./PdfViewerToolbar-as5i-_AU.js";import"./Button-DOTPNZAD.js";import"./chevron-right-BI10hlnG.js";import"./Input-o8_LFGDR.js";import"./search-tBoCo39o.js";import"./spin-JCqAPZ0Y.js";import"./error-B8LoRf1p.js";import"./withOsdkMetrics-DZvydXoo.js";import"./makeExternalStore-CB_ai3M6.js";const U={title:"Components/DocumentViewer/Renderers/PdfViewer",component:p,tags:["beta"],parameters:{controls:{expanded:!0}}},o={render:()=>{const{object:e,isLoading:n}=a(d,s);return n||!(e!=null&&e.employeeDocuments)?r.jsx("div",{style:{height:"600px"},children:"Loading OSDK media…"}):r.jsx("div",{style:{height:"600px"},children:r.jsx(p,{media:e.employeeDocuments})})},parameters:{docs:{source:{code:`import { PdfViewer } from "@osdk/react-components/experimental/pdf-viewer";

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
