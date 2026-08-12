import{j as r,M as s}from"./iframe-DmJLQBd5.js";import{P as p}from"./pdf-viewer-eNT0lwic.js";import{E as d}from"./Employee-BAk2o20h.js";import{u as a}from"./useOsdkObject-CeIhRQON.js";import"./preload-helper-CoTlAjbz.js";import"./PdfRenderer-CxmM6Fef.js";import"./index-V2vu0DX-.js";import"./PdfViewer-BVlHv1CU.js";import"./PdfViewer.module.css-BY66lapE.js";import"./PdfViewerAnnotationLayer-BhDS9CO5.js";import"./constants-DsXMS3N3.js";import"./usePdfDocument-D9Av2ylh.js";import"./PdfViewerOutlineSidebar-BdcOAQCZ.js";import"./PdfViewerSidebarHeader-BvNtyN5m.js";import"./useBaseUiId-9PouUcpY.js";import"./useControlled-Brt8x5-e.js";import"./CompositeRoot-C6En7DR-.js";import"./CompositeItem-CI5jeQ9i.js";import"./ToolbarRootContext-D0YLC8MO.js";import"./composite-JydS1iwf.js";import"./svgIconContainer-BIOjXbdo.js";import"./PdfViewerSearchBar-BJY1_s6X.js";import"./chevron-up-BIzVtaFB.js";import"./chevron-down--IKdXKG2.js";import"./cross-DNMFTXiP.js";import"./PdfViewerSidebar-CwdIWP8x.js";import"./index-D6zsaxaR.js";import"./index-BtdR2Hou.js";import"./index-D21gG2VV.js";import"./PdfViewerToolbar-CxzYgotg.js";import"./Button-CMc7chm1.js";import"./chevron-right-DPaqrQ9A.js";import"./Input-DND4jSO6.js";import"./search-DRPDmTbF.js";import"./spin-CcU4nUaz.js";import"./error-8IdCo3sJ.js";import"./withOsdkMetrics-DhjGq0fZ.js";import"./makeExternalStore-ChPwoXju.js";const U={title:"Components/DocumentViewer/Renderers/PdfViewer",component:p,tags:["beta"],parameters:{controls:{expanded:!0}}},o={render:()=>{const{object:e,isLoading:n}=a(d,s);return n||!(e!=null&&e.employeeDocuments)?r.jsx("div",{style:{height:"600px"},children:"Loading OSDK media…"}):r.jsx("div",{style:{height:"600px"},children:r.jsx(p,{media:e.employeeDocuments})})},parameters:{docs:{source:{code:`import { PdfViewer } from "@osdk/react-components/experimental/pdf-viewer";

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
