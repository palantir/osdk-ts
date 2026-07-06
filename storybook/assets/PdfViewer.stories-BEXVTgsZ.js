import{j as r,M as s}from"./iframe-CYo6CiSW.js";import{P as p}from"./pdf-viewer-C4Z3uYW0.js";import{E as d}from"./Employee-BAk2o20h.js";import{u as a}from"./useOsdkObject-CnIBRKnJ.js";import"./preload-helper-Dp1pzeXC.js";import"./PdfRenderer-DXjrRRS_.js";import"./index-D0BEHZ8E.js";import"./PdfViewer-T1kUvTkh.js";import"./PdfViewer.module.css-C7ugTZWo.js";import"./PdfViewerAnnotationLayer-CzmaTewa.js";import"./constants-DsXMS3N3.js";import"./usePdfDocument-DfMOw_a-.js";import"./PdfViewerOutlineSidebar-ChGUgxlR.js";import"./PdfViewerSidebarHeader-C5t3MIMw.js";import"./useBaseUiId-CGeh8fiR.js";import"./useControlled-CpRbGX2p.js";import"./CompositeRoot-BsUEEtQ1.js";import"./CompositeItem-BsIfQOx7.js";import"./ToolbarRootContext-B0KGcaQb.js";import"./composite-Btm2J3-G.js";import"./svgIconContainer-CZoDcPlY.js";import"./PdfViewerSearchBar-BKYF-kNC.js";import"./chevron-up-C68W1OU1.js";import"./chevron-down-BdsIpzfe.js";import"./cross-BA1oqCdG.js";import"./PdfViewerSidebar-fmG8tIcX.js";import"./index-DRoFMQrY.js";import"./index-D4V2Qtkn.js";import"./index-Bj9nqPhI.js";import"./PdfViewerToolbar-kvLobjc0.js";import"./Button-DoUQZBb0.js";import"./chevron-right-CZmk7KZt.js";import"./Input-GMVgYJUU.js";import"./search-BZAdPc3p.js";import"./spin-Bg0hQm1g.js";import"./error-BYsFvbmv.js";import"./withOsdkMetrics-DgFipaZR.js";import"./makeExternalStore-C8pjQNBm.js";const U={title:"Components/DocumentViewer/Renderers/PdfViewer",component:p,tags:["beta"],parameters:{controls:{expanded:!0}}},o={render:()=>{const{object:e,isLoading:n}=a(d,s);return n||!(e!=null&&e.employeeDocuments)?r.jsx("div",{style:{height:"600px"},children:"Loading OSDK media…"}):r.jsx("div",{style:{height:"600px"},children:r.jsx(p,{media:e.employeeDocuments})})},parameters:{docs:{source:{code:`import { PdfViewer } from "@osdk/react-components/experimental/pdf-viewer";

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
