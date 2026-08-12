import{j as r,M as s}from"./iframe-Ccflwbci.js";import{P as p}from"./pdf-viewer-D343R4fJ.js";import{E as d}from"./Employee-BAk2o20h.js";import{u as a}from"./useOsdkObject-zbnqzTcG.js";import"./preload-helper-wr7_iP2o.js";import"./PdfRenderer-BI-46FXr.js";import"./index-CpsvpGUe.js";import"./PdfViewer-p_lqzF87.js";import"./PdfViewer.module.css-C6sfPpc5.js";import"./PdfViewerAnnotationLayer-BrNCtXot.js";import"./constants-DsXMS3N3.js";import"./usePdfDocument-TcOYK1Ig.js";import"./PdfViewerOutlineSidebar-Bn1I24K5.js";import"./PdfViewerSidebarHeader-1dD7v6wo.js";import"./useBaseUiId-WPl9OK4D.js";import"./useControlled-CPTTGrVV.js";import"./CompositeRoot-Dnp6Qofg.js";import"./CompositeItem-cdsIBR5_.js";import"./ToolbarRootContext-D_-uFHqt.js";import"./composite-C9Rp5H4o.js";import"./svgIconContainer-Cepk_4ly.js";import"./PdfViewerSearchBar-C7W2u9US.js";import"./chevron-up-DizFQiFV.js";import"./chevron-down-DOhdBcS5.js";import"./cross-CMgZFgZF.js";import"./PdfViewerSidebar-BDg8gBw0.js";import"./index-qYGSMIpd.js";import"./index-DnQt8rFF.js";import"./index-Ch-qdtZV.js";import"./PdfViewerToolbar-DB4l0JHv.js";import"./Button-CTcQr_p3.js";import"./chevron-right-P7VvILaX.js";import"./Input-DL3wG5cx.js";import"./search-xzH4WAuR.js";import"./spin-CUBviXsG.js";import"./error-F0UcLgfA.js";import"./withOsdkMetrics-gAWdhCc4.js";import"./makeExternalStore-B9YW9e1O.js";const U={title:"Components/DocumentViewer/Renderers/PdfViewer",component:p,tags:["beta"],parameters:{controls:{expanded:!0}}},o={render:()=>{const{object:e,isLoading:n}=a(d,s);return n||!(e!=null&&e.employeeDocuments)?r.jsx("div",{style:{height:"600px"},children:"Loading OSDK media…"}):r.jsx("div",{style:{height:"600px"},children:r.jsx(p,{media:e.employeeDocuments})})},parameters:{docs:{source:{code:`import { PdfViewer } from "@osdk/react-components/experimental/pdf-viewer";

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
