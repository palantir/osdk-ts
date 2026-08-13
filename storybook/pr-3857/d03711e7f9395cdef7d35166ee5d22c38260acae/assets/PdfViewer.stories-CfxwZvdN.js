import{j as r,M as s}from"./iframe-TSCXHIvh.js";import{P as p}from"./pdf-viewer-BZoinmrx.js";import{E as d}from"./Employee-BAk2o20h.js";import{u as a}from"./useOsdkObject-B5__MGFx.js";import"./preload-helper-CyN_qzqo.js";import"./PdfRenderer-AWpQFUT8.js";import"./index-CGNWdjig.js";import"./PdfViewer-BaZlywaA.js";import"./PdfViewer.module.css-D6qrJJmS.js";import"./PdfViewerAnnotationLayer-BWKLZN1C.js";import"./constants-DsXMS3N3.js";import"./usePdfDocument-BLkO_wKO.js";import"./PdfViewerOutlineSidebar-CgLJjiI4.js";import"./PdfViewerSidebarHeader-DjCDjVtv.js";import"./useBaseUiId-BRdTeBe9.js";import"./useControlled-BlC2AddR.js";import"./CompositeRoot-C4tSqUPp.js";import"./CompositeItem-0AIS0Bnl.js";import"./ToolbarRootContext-msQZFx_W.js";import"./composite-C_xrzc_v.js";import"./svgIconContainer-Bphs_oGH.js";import"./PdfViewerSearchBar-DPRv_eVE.js";import"./chevron-up-eno5XEMN.js";import"./chevron-down-BoPRMOEq.js";import"./cross-qV010Wi5.js";import"./PdfViewerSidebar-XXM3Nqt0.js";import"./index-CG_ja6Hi.js";import"./index-DJNFZ_0Y.js";import"./index-CyvvuY01.js";import"./PdfViewerToolbar-610T3NVK.js";import"./Button-DshrbGne.js";import"./chevron-right-QvhBZjaq.js";import"./Input-CKK_09LY.js";import"./search-CbBOTsc7.js";import"./spin-D4_4N-mt.js";import"./error-B7F78YrU.js";import"./withOsdkMetrics-q66YyN3A.js";import"./makeExternalStore-B-opuCj0.js";const U={title:"Components/DocumentViewer/Renderers/PdfViewer",component:p,tags:["beta"],parameters:{controls:{expanded:!0}}},o={render:()=>{const{object:e,isLoading:n}=a(d,s);return n||!(e!=null&&e.employeeDocuments)?r.jsx("div",{style:{height:"600px"},children:"Loading OSDK media…"}):r.jsx("div",{style:{height:"600px"},children:r.jsx(p,{media:e.employeeDocuments})})},parameters:{docs:{source:{code:`import { PdfViewer } from "@osdk/react-components/experimental/pdf-viewer";

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
