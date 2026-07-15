import{j as r,M as s}from"./iframe-CJiq-E_e.js";import{P as p}from"./pdf-viewer-Cb7Xc8zN.js";import{E as d}from"./Employee-BAk2o20h.js";import{u as a}from"./useOsdkObject-Bms7IV-J.js";import"./preload-helper-DS5Tv33m.js";import"./PdfRenderer-Bp1TH5p5.js";import"./index-RG-pe8JG.js";import"./PdfViewer-BNXo40Ny.js";import"./PdfViewer.module.css-C_kALot6.js";import"./PdfViewerAnnotationLayer--0KBRbfg.js";import"./constants-DsXMS3N3.js";import"./usePdfDocument-D4gzLBTE.js";import"./PdfViewerOutlineSidebar-UEDHHn52.js";import"./PdfViewerSidebarHeader-Bciya8RI.js";import"./useBaseUiId-DCcJMylE.js";import"./useControlled-BQYZJGLj.js";import"./CompositeRoot-X33dK4JV.js";import"./CompositeItem-ZPPorMDp.js";import"./ToolbarRootContext-NAVJZ1iN.js";import"./composite-CvR0XMDM.js";import"./svgIconContainer-BAf1AP0X.js";import"./PdfViewerSearchBar-A-zu8nns.js";import"./chevron-up-gt_Fku-Y.js";import"./chevron-down-Csq-RQuV.js";import"./cross-Vl2_w_5N.js";import"./PdfViewerSidebar-DCGubCOo.js";import"./index-habhP5WM.js";import"./index-XtazrHa6.js";import"./index-2vCvkmSC.js";import"./PdfViewerToolbar-DDmJJXAO.js";import"./Button-BEkaDJcE.js";import"./chevron-right-CrJw9LGI.js";import"./Input-BttGwUkn.js";import"./search-CDDtQBtn.js";import"./spin-Ca3CsrB2.js";import"./error-Bk6uebMO.js";import"./withOsdkMetrics-D7xkgiCe.js";import"./makeExternalStore-Dua2Wtk2.js";const U={title:"Components/DocumentViewer/Renderers/PdfViewer",component:p,tags:["beta"],parameters:{controls:{expanded:!0}}},o={render:()=>{const{object:e,isLoading:n}=a(d,s);return n||!(e!=null&&e.employeeDocuments)?r.jsx("div",{style:{height:"600px"},children:"Loading OSDK media…"}):r.jsx("div",{style:{height:"600px"},children:r.jsx(p,{media:e.employeeDocuments})})},parameters:{docs:{source:{code:`import { PdfViewer } from "@osdk/react-components/experimental/pdf-viewer";

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
