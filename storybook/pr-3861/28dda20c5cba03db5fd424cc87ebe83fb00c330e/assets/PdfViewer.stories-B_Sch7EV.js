import{j as r,M as s}from"./iframe-BcJO5Es9.js";import{P as p}from"./pdf-viewer-dSyRiiou.js";import{E as d}from"./Employee-BAk2o20h.js";import{u as a}from"./useOsdkObject-Ct48Owvc.js";import"./preload-helper-CNqrSMrD.js";import"./PdfViewer-6DTlPUe5.js";import"./index-D8zcFWOc.js";import"./BasePdfViewer-4koC_-lZ.js";import"./BasePdfViewer.module.css-DxYmd4Ur.js";import"./PdfViewerAnnotationLayer-CsZ_8nPN.js";import"./constants-DsXMS3N3.js";import"./usePdfDocument-Dw7qPGiN.js";import"./PdfViewerOutlineSidebar-Ddl3JUD-.js";import"./PdfViewerSidebarHeader-DafRLBMz.js";import"./useBaseUiId-C-k1aU7Y.js";import"./useControlled-CHN1pvcO.js";import"./CompositeRoot-DCqGfd1Y.js";import"./CompositeItem-B0brZGqV.js";import"./ToolbarRootContext-Bz5wpC0n.js";import"./composite-DPnLVqwa.js";import"./svgIconContainer-0GuNzj2t.js";import"./PdfViewerSearchBar-DmJ9DsTL.js";import"./chevron-up-CGC-XRnk.js";import"./chevron-down-BeaiUZln.js";import"./cross--P-I0ZkN.js";import"./PdfViewerSidebar-B60zJ_ID.js";import"./index-BGEt1deN.js";import"./index-Cz5vlqVU.js";import"./index-DGYuc6nD.js";import"./PdfViewerToolbar-B6Sb5t-L.js";import"./Button-CmxEtBkN.js";import"./chevron-right-dTVg7t2D.js";import"./Input-8svXG8BP.js";import"./search-Q8aG5QMJ.js";import"./spin-DP3KHeh5.js";import"./error-D43ZO7i7.js";import"./withOsdkMetrics-V7GcuCIR.js";import"./makeExternalStore-CxoTebDy.js";const U={title:"Components/DocumentViewer/Renderers/PdfViewer",component:p,tags:["beta"],parameters:{controls:{expanded:!0}}},o={render:()=>{const{object:e,isLoading:n}=a(d,s);return n||!(e!=null&&e.employeeDocuments)?r.jsx("div",{style:{height:"600px"},children:"Loading OSDK media…"}):r.jsx("div",{style:{height:"600px"},children:r.jsx(p,{media:e.employeeDocuments})})},parameters:{docs:{source:{code:`import { PdfViewer } from "@osdk/react-components/experimental/pdf-viewer";

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
