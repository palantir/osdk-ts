import{j as r,M as s}from"./iframe-DAmrO1WB.js";import{P as p}from"./pdf-viewer--RwMPM77.js";import{E as d}from"./Employee-BAk2o20h.js";import{u as a}from"./useOsdkObject-ClZ-eCoN.js";import"./preload-helper-Dp1pzeXC.js";import"./PdfRenderer-Cx-4ZLQK.js";import"./index-CsqC8-YZ.js";import"./PdfViewer-CACNApQJ.js";import"./PdfViewer.module.css-CZVWldLX.js";import"./PdfViewerAnnotationLayer-lOmQzCjA.js";import"./constants-DsXMS3N3.js";import"./usePdfDocument-DelRiU_r.js";import"./PdfViewerOutlineSidebar-CLzjtCbi.js";import"./PdfViewerSidebarHeader-RTlMDxMV.js";import"./useBaseUiId-CcSEE-tv.js";import"./useControlled-CGSRZ2SH.js";import"./CompositeRoot-BxdaalT7.js";import"./CompositeItem-B9hIeSlG.js";import"./ToolbarRootContext-DbL1PtTs.js";import"./composite-BshH-Ldx.js";import"./svgIconContainer-BsbF50g5.js";import"./PdfViewerSearchBar-DOQu2Y-E.js";import"./chevron-up-Ej2dUrn5.js";import"./chevron-down-B0A5ila5.js";import"./cross-DixUZuMX.js";import"./PdfViewerSidebar-Brgz_-kR.js";import"./index-CWXnflDM.js";import"./index-iuLOvOw1.js";import"./index-9hWikb-m.js";import"./PdfViewerToolbar-DYQaO7vY.js";import"./Button-BykGhL5_.js";import"./chevron-right-fNQ_BfR3.js";import"./Input-DwIOwGNX.js";import"./search-bRdwXiVS.js";import"./spin-Byq0rzXt.js";import"./error-BXivlo3V.js";import"./withOsdkMetrics-BMLn13cz.js";import"./makeExternalStore-BXpsdQWj.js";const U={title:"Components/DocumentViewer/Renderers/PdfViewer",component:p,tags:["beta"],parameters:{controls:{expanded:!0}}},o={render:()=>{const{object:e,isLoading:n}=a(d,s);return n||!(e!=null&&e.employeeDocuments)?r.jsx("div",{style:{height:"600px"},children:"Loading OSDK media…"}):r.jsx("div",{style:{height:"600px"},children:r.jsx(p,{media:e.employeeDocuments})})},parameters:{docs:{source:{code:`import { PdfViewer } from "@osdk/react-components/experimental/pdf-viewer";

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
