import{j as r,M as s}from"./iframe-DurHOd68.js";import{P as p}from"./pdf-viewer-CDplUK_W.js";import{E as d}from"./Employee-BAk2o20h.js";import{u as a}from"./useOsdkObject-Dd6cUmO-.js";import"./preload-helper-C4a5shVs.js";import"./PdfViewer-B5y9hGi4.js";import"./index-BigoyWey.js";import"./BasePdfViewer-he5_2n8e.js";import"./BasePdfViewer.module.css-CA69LkUy.js";import"./PdfViewerAnnotationLayer-CXafDrRa.js";import"./constants-DsXMS3N3.js";import"./usePdfDocument-C3s6W_M2.js";import"./PdfViewerOutlineSidebar-DaLa9Vmd.js";import"./PdfViewerSidebarHeader-C3-yIMDa.js";import"./useBaseUiId-D0K6ks6X.js";import"./useControlled-558BXAYv.js";import"./CompositeRoot-CzPBGh_k.js";import"./CompositeItem-BTa5eFJ1.js";import"./ToolbarRootContext-CchGHx-p.js";import"./composite-pf8Nf7Cg.js";import"./svgIconContainer-DQNR0e5i.js";import"./PdfViewerSearchBar-DzbWpuF9.js";import"./chevron-up-CZmOlDz3.js";import"./chevron-down-BWeyWOzk.js";import"./cross-CZn1rHNq.js";import"./PdfViewerSidebar-D_iMWlBL.js";import"./index-0NVWzQhh.js";import"./index-BEccjITX.js";import"./index-DMktHvtp.js";import"./PdfViewerToolbar-eLrnSyil.js";import"./Button-C6XRWyAz.js";import"./chevron-right-Dmy62zmY.js";import"./Input-CgTzbB35.js";import"./search-BHV29iQ4.js";import"./spin-DOrC5dtA.js";import"./error-BsWyzq_c.js";import"./withOsdkMetrics-ClFS2p81.js";import"./makeExternalStore-DkbSeVDT.js";const U={title:"Components/DocumentViewer/Renderers/PdfViewer",component:p,tags:["beta"],parameters:{controls:{expanded:!0}}},o={render:()=>{const{object:e,isLoading:n}=a(d,s);return n||!(e!=null&&e.employeeDocuments)?r.jsx("div",{style:{height:"600px"},children:"Loading OSDK media…"}):r.jsx("div",{style:{height:"600px"},children:r.jsx(p,{media:e.employeeDocuments})})},parameters:{docs:{source:{code:`import { PdfViewer } from "@osdk/react-components/experimental/pdf-viewer";

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
