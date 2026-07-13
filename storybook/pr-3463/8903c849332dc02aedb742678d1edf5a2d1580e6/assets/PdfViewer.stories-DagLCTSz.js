import{j as r,M as s}from"./iframe-CPyJpJV3.js";import{P as p}from"./pdf-viewer-BCWNY5SH.js";import{E as d}from"./Employee-BAk2o20h.js";import{u as a}from"./useOsdkObject-BFtTVyxM.js";import"./preload-helper-BvTlYPt-.js";import"./PdfRenderer-BhfgexiH.js";import"./index-CCBRf6K7.js";import"./PdfViewer-DbZtniao.js";import"./PdfViewer.module.css-BX7I-rXj.js";import"./PdfViewerAnnotationLayer-DNiX3VRt.js";import"./constants-DsXMS3N3.js";import"./usePdfDocument-DkO-WEBr.js";import"./PdfViewerOutlineSidebar-D6bCngG2.js";import"./PdfViewerSidebarHeader-sGrOf2Bh.js";import"./useBaseUiId-BE1FwJpN.js";import"./useControlled-B21cgT_m.js";import"./CompositeRoot-BN2fJJY8.js";import"./CompositeItem-aCyuzOz7.js";import"./ToolbarRootContext-lu3yZz9D.js";import"./composite-CxH0eoEz.js";import"./svgIconContainer-BVg4uZ_a.js";import"./PdfViewerSearchBar-DW-x8IkZ.js";import"./chevron-up-DFcp8hj4.js";import"./chevron-down-fZFgM6nc.js";import"./cross-YpKbhgG7.js";import"./PdfViewerSidebar-6BMarjN6.js";import"./index-B0OCIQRa.js";import"./index-Ds70Lr5a.js";import"./index-CcX6hWx6.js";import"./PdfViewerToolbar-BImza9_4.js";import"./Button-CMM3K_74.js";import"./chevron-right-DmGpmubL.js";import"./Input-DmeWRyym.js";import"./search-C_SizRhc.js";import"./spin-CjqDSbTQ.js";import"./error-unHp6fXd.js";import"./withOsdkMetrics-BuMST-fT.js";import"./makeExternalStore-CWLDTFqJ.js";const U={title:"Components/DocumentViewer/Renderers/PdfViewer",component:p,tags:["beta"],parameters:{controls:{expanded:!0}}},o={render:()=>{const{object:e,isLoading:n}=a(d,s);return n||!(e!=null&&e.employeeDocuments)?r.jsx("div",{style:{height:"600px"},children:"Loading OSDK media…"}):r.jsx("div",{style:{height:"600px"},children:r.jsx(p,{media:e.employeeDocuments})})},parameters:{docs:{source:{code:`import { PdfViewer } from "@osdk/react-components/experimental/pdf-viewer";

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
