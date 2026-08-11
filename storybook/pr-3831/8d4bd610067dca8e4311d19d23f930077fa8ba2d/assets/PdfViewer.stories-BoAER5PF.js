import{j as r,M as s}from"./iframe-QSknsibA.js";import{P as p}from"./pdf-viewer-DtT8e6Su.js";import{E as d}from"./Employee-BAk2o20h.js";import{u as a}from"./useOsdkObject-Beuw_0wg.js";import"./preload-helper-B3LrgdxU.js";import"./PdfRenderer-DUonp_yK.js";import"./index-B_OK08DX.js";import"./PdfViewer-DcuDDtbY.js";import"./PdfViewer.module.css-DpsJCOE0.js";import"./PdfViewerAnnotationLayer-Di7xhDl6.js";import"./constants-DsXMS3N3.js";import"./usePdfDocument-B3w1Wnmy.js";import"./PdfViewerOutlineSidebar-D3_pJLVY.js";import"./PdfViewerSidebarHeader-CzW0NtRJ.js";import"./useBaseUiId-56xqlUOA.js";import"./useControlled-DGsWq6rv.js";import"./CompositeRoot-C_SfxQ7l.js";import"./CompositeItem-DQqMAMfP.js";import"./ToolbarRootContext-D15HbZ6L.js";import"./composite-rTqajcpw.js";import"./svgIconContainer-De7GUSo3.js";import"./PdfViewerSearchBar-BLlU-RcN.js";import"./chevron-up-CMRivH0t.js";import"./chevron-down-CmOKY8Hu.js";import"./cross-mnCq1uQ2.js";import"./PdfViewerSidebar-BEJyToLu.js";import"./index-DRj4Fndf.js";import"./index-Cf49gatU.js";import"./index-DchscfH7.js";import"./PdfViewerToolbar-Dk6opTzc.js";import"./Button-Bl3RvClX.js";import"./chevron-right-D7tVsEb4.js";import"./Input-DSWKb0xV.js";import"./search-D5SBe6yO.js";import"./spin-Ch_64S-r.js";import"./error-C_PHjA_A.js";import"./withOsdkMetrics-CLccy0f7.js";import"./makeExternalStore-ClhVK885.js";const U={title:"Components/DocumentViewer/Renderers/PdfViewer",component:p,tags:["beta"],parameters:{controls:{expanded:!0}}},o={render:()=>{const{object:e,isLoading:n}=a(d,s);return n||!(e!=null&&e.employeeDocuments)?r.jsx("div",{style:{height:"600px"},children:"Loading OSDK media…"}):r.jsx("div",{style:{height:"600px"},children:r.jsx(p,{media:e.employeeDocuments})})},parameters:{docs:{source:{code:`import { PdfViewer } from "@osdk/react-components/experimental/pdf-viewer";

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
