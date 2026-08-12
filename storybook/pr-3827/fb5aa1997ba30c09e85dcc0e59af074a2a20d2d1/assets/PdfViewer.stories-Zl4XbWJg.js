import{j as r,M as s}from"./iframe-DeFJRJj_.js";import{P as p}from"./pdf-viewer-CEH44t87.js";import{E as d}from"./Employee-BAk2o20h.js";import{u as a}from"./useOsdkObject-BIpmCaTC.js";import"./preload-helper-qD0ucBRi.js";import"./PdfRenderer-B1dNecGn.js";import"./index-ZhtX4fsv.js";import"./PdfViewer-Bw-mihKA.js";import"./PdfViewer.module.css-CCk5zkYF.js";import"./PdfViewerAnnotationLayer-DwrDk8Ff.js";import"./constants-DsXMS3N3.js";import"./usePdfDocument-CVECOg1y.js";import"./PdfViewerOutlineSidebar-BiYHc0lC.js";import"./PdfViewerSidebarHeader-BqgYwfy_.js";import"./useBaseUiId-Bq3F6Rv_.js";import"./useControlled-Dn21pgdp.js";import"./CompositeRoot-Bsx6ynfJ.js";import"./CompositeItem-CZp4_PXj.js";import"./ToolbarRootContext-BL-4vvnE.js";import"./composite-zNv1yGvS.js";import"./svgIconContainer-CTkWWvQN.js";import"./PdfViewerSearchBar-Dn0Rb_iw.js";import"./chevron-up-Lw-mwOiU.js";import"./chevron-down-aqXgsfqW.js";import"./cross-CrAtm1fx.js";import"./PdfViewerSidebar-B0INA_d5.js";import"./index-CJ3Iicbp.js";import"./index-D6kTPWWX.js";import"./index-BL95TNIJ.js";import"./PdfViewerToolbar-voZmBbth.js";import"./Button-CSCQK9mA.js";import"./chevron-right-B3XvSYPC.js";import"./Input-CsBuql1A.js";import"./search-DY35zBxg.js";import"./spin-CSQCeqHr.js";import"./error-CZdOWqiH.js";import"./withOsdkMetrics-inWDWazQ.js";import"./makeExternalStore-D6AD-Szb.js";const U={title:"Components/DocumentViewer/Renderers/PdfViewer",component:p,tags:["beta"],parameters:{controls:{expanded:!0}}},o={render:()=>{const{object:e,isLoading:n}=a(d,s);return n||!(e!=null&&e.employeeDocuments)?r.jsx("div",{style:{height:"600px"},children:"Loading OSDK media…"}):r.jsx("div",{style:{height:"600px"},children:r.jsx(p,{media:e.employeeDocuments})})},parameters:{docs:{source:{code:`import { PdfViewer } from "@osdk/react-components/experimental/pdf-viewer";

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
