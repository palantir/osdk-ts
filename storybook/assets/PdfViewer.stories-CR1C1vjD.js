import{j as r,M as s}from"./iframe-CP6cTA_F.js";import{P as p}from"./pdf-viewer-C1PTdjI4.js";import{E as d}from"./Employee-BAk2o20h.js";import{u as a}from"./useOsdkObject-BAsCBWi3.js";import"./preload-helper-Dp1pzeXC.js";import"./PdfRenderer-DTQU2kUt.js";import"./index-ExTRoT-S.js";import"./PdfViewer-CgIVTbQo.js";import"./PdfViewer.module.css-JKH3MjtT.js";import"./PdfViewerAnnotationLayer-BSdCK0um.js";import"./constants-DsXMS3N3.js";import"./usePdfDocument-tw2BdDOB.js";import"./PdfViewerOutlineSidebar-BI3MOTu8.js";import"./PdfViewerSidebarHeader-BoshHhh1.js";import"./useBaseUiId-D0sIK9VN.js";import"./useControlled-dbis8QU3.js";import"./CompositeRoot-vpJn6JPC.js";import"./CompositeItem-CrH2QCUe.js";import"./ToolbarRootContext-DpI_4HJ8.js";import"./composite-CPmAS2e0.js";import"./svgIconContainer-CiUu7uLs.js";import"./PdfViewerSearchBar-DCT_QzKx.js";import"./chevron-up-BG5K0IWs.js";import"./chevron-down-CiprR_Xm.js";import"./cross-CWv2CgwP.js";import"./PdfViewerSidebar-Br6xY4nm.js";import"./index-CjtUux1o.js";import"./index-92g2yr3h.js";import"./index-DfQvziz6.js";import"./PdfViewerToolbar-CmnCUalF.js";import"./Button-tMP7gYE9.js";import"./chevron-right-CgAHyTzI.js";import"./Input-FpAyHSwM.js";import"./search-DPugjmQj.js";import"./spin-Dee_GbJ_.js";import"./error-DGSliNR_.js";import"./withOsdkMetrics-39RZR2Ts.js";import"./makeExternalStore-CdnPWcvL.js";const U={title:"Components/DocumentViewer/Renderers/PdfViewer",component:p,tags:["beta"],parameters:{controls:{expanded:!0}}},o={render:()=>{const{object:e,isLoading:n}=a(d,s);return n||!(e!=null&&e.employeeDocuments)?r.jsx("div",{style:{height:"600px"},children:"Loading OSDK media…"}):r.jsx("div",{style:{height:"600px"},children:r.jsx(p,{media:e.employeeDocuments})})},parameters:{docs:{source:{code:`import { PdfViewer } from "@osdk/react-components/experimental/pdf-viewer";

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
