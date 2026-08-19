import{j as r,M as s}from"./iframe-Bm9OwjZM.js";import{P as p}from"./pdf-viewer-dBonPxfx.js";import{E as d}from"./Employee-BAk2o20h.js";import{u as a}from"./useOsdkObject-Cep-xmVL.js";import"./preload-helper-Bxv9zFay.js";import"./PdfViewer-DGUpiNeW.js";import"./index-CObn2eDC.js";import"./BasePdfViewer-B9o5_P3T.js";import"./BasePdfViewer.module.css-DUyejLF3.js";import"./PdfViewerAnnotationLayer-BTCxv0c8.js";import"./constants-DsXMS3N3.js";import"./usePdfDocument-Ben8JhRx.js";import"./PdfViewerOutlineSidebar-D7kulJA2.js";import"./PdfViewerSidebarHeader-CezGVGge.js";import"./useBaseUiId-D5G-UFce.js";import"./useControlled-DagSlxnt.js";import"./CompositeRoot-DYZdgE92.js";import"./CompositeItem-Dks46NaI.js";import"./ToolbarRootContext-BzeWV0Ij.js";import"./composite-CV2pmKck.js";import"./svgIconContainer-CGp9KnXA.js";import"./PdfViewerSearchBar-DbQ7W8yz.js";import"./chevron-up-B6vWgUJ9.js";import"./chevron-down-Ykcn_Zyn.js";import"./cross-Bo0UY3wT.js";import"./PdfViewerSidebar-DNlcpbuX.js";import"./index-DzghPfIw.js";import"./index-CYRBkEMI.js";import"./index-CZ4br5bx.js";import"./PdfViewerToolbar-Bopp4iXb.js";import"./Button-DH8D07bO.js";import"./chevron-right-9Mob4Ajv.js";import"./Input-BBarF8jI.js";import"./search-CMsxyB6o.js";import"./spin-CrE-gR2u.js";import"./error-CCuJWU5M.js";import"./withOsdkMetrics-OOsnIMnD.js";import"./makeExternalStore-B2bSqcMJ.js";const U={title:"Components/DocumentViewer/Renderers/PdfViewer",component:p,tags:["beta"],parameters:{controls:{expanded:!0}}},o={render:()=>{const{object:e,isLoading:n}=a(d,s);return n||!(e!=null&&e.employeeDocuments)?r.jsx("div",{style:{height:"600px"},children:"Loading OSDK media…"}):r.jsx("div",{style:{height:"600px"},children:r.jsx(p,{media:e.employeeDocuments})})},parameters:{docs:{source:{code:`import { PdfViewer } from "@osdk/react-components/experimental/pdf-viewer";

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
