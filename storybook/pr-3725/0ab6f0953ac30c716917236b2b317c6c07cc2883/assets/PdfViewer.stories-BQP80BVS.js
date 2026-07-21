import{j as r,M as s}from"./iframe-BbjW9ru2.js";import{P as p}from"./pdf-viewer-B3eXz4U1.js";import{E as d}from"./Employee-BAk2o20h.js";import{u as a}from"./useOsdkObject-C-R9WjkU.js";import"./preload-helper-BBqenLAY.js";import"./PdfRenderer-CzQuj8Vg.js";import"./index-D6yb_Az8.js";import"./PdfViewer-CyoirMBu.js";import"./PdfViewer.module.css-B0nfdd0Q.js";import"./PdfViewerAnnotationLayer-BPPuIOdp.js";import"./constants-DsXMS3N3.js";import"./usePdfDocument-DdCjQ9d9.js";import"./PdfViewerOutlineSidebar-DIRwDGfK.js";import"./PdfViewerSidebarHeader-UJcDlCYz.js";import"./useBaseUiId-CvuxzwAh.js";import"./useControlled-CCGxAKe6.js";import"./CompositeRoot-3Utegfbs.js";import"./CompositeItem-Bb53XA62.js";import"./ToolbarRootContext-DpLajBJ1.js";import"./composite-G5vT1uE0.js";import"./svgIconContainer-B3OjmCik.js";import"./PdfViewerSearchBar-BI4pOmiv.js";import"./chevron-up-CzMH6BoR.js";import"./chevron-down-CO2xg-to.js";import"./cross-Df-G8xzA.js";import"./PdfViewerSidebar-DrmS7TAh.js";import"./index-CRtvo395.js";import"./index-CTTYMewW.js";import"./index-1oGZAAbg.js";import"./PdfViewerToolbar-oSCImaBL.js";import"./Button-Cud-V5j3.js";import"./chevron-right-vxZQlilo.js";import"./Input-BI9XOSMU.js";import"./search-C-32WFYh.js";import"./spin-BtSrd2IV.js";import"./error-Cp-Qt5xo.js";import"./withOsdkMetrics-K7yNfEUf.js";import"./makeExternalStore-Cj7p7gMA.js";const U={title:"Components/DocumentViewer/Renderers/PdfViewer",component:p,tags:["beta"],parameters:{controls:{expanded:!0}}},o={render:()=>{const{object:e,isLoading:n}=a(d,s);return n||!(e!=null&&e.employeeDocuments)?r.jsx("div",{style:{height:"600px"},children:"Loading OSDK media…"}):r.jsx("div",{style:{height:"600px"},children:r.jsx(p,{media:e.employeeDocuments})})},parameters:{docs:{source:{code:`import { PdfViewer } from "@osdk/react-components/experimental/pdf-viewer";

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
