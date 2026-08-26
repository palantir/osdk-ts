import{j as r,M as s}from"./iframe-BLZOZW6T.js";import{P as p}from"./pdf-viewer-b5KD6kMR.js";import{E as d}from"./Employee-BAk2o20h.js";import{u as a}from"./useOsdkObject-psp4U3pT.js";import"./preload-helper-BHT5lAru.js";import"./PdfViewer-aiPu-Hgr.js";import"./index-Ahi5oMOt.js";import"./BasePdfViewer-e67OT130.js";import"./BasePdfViewer.module.css-DdXwcN2M.js";import"./PdfViewerAnnotationLayer-BQlXSgQP.js";import"./constants-DsXMS3N3.js";import"./usePdfDocument-CW6JbyFr.js";import"./PdfViewerOutlineSidebar-DtQkRygu.js";import"./PdfViewerSidebarHeader-tR7zB8QW.js";import"./useBaseUiId-DZK7RG_f.js";import"./useControlled-COYf85Oy.js";import"./CompositeRoot-BZy6hGZX.js";import"./CompositeItem-C1uYFHLI.js";import"./ToolbarRootContext-J2Xa_TG-.js";import"./composite-CRbvEibM.js";import"./svgIconContainer-5vRPxuG5.js";import"./PdfViewerSearchBar-CzfnI1BC.js";import"./chevron-up-DAIxEc1D.js";import"./chevron-down-Cs3lx4vz.js";import"./cross-tEyjMRHD.js";import"./PdfViewerSidebar-D4Gc4fUg.js";import"./index-DwKU9nYV.js";import"./index-DTxc1Osh.js";import"./index-ew_UyycK.js";import"./PdfViewerToolbar-DlDwaOks.js";import"./Button-DIO4S2kj.js";import"./chevron-right-CwYExUnk.js";import"./Input-BOnD-W6r.js";import"./search-FYqqa5v1.js";import"./spin-BO78IhNl.js";import"./error-BZramTgy.js";import"./withOsdkMetrics-CD2XJjA_.js";import"./makeExternalStore-M7RjktEr.js";const U={title:"Components/DocumentViewer/Renderers/PdfViewer",component:p,tags:["beta"],parameters:{controls:{expanded:!0}}},o={render:()=>{const{object:e,isLoading:n}=a(d,s);return n||!(e!=null&&e.employeeDocuments)?r.jsx("div",{style:{height:"600px"},children:"Loading OSDK media…"}):r.jsx("div",{style:{height:"600px"},children:r.jsx(p,{media:e.employeeDocuments})})},parameters:{docs:{source:{code:`import { PdfViewer } from "@osdk/react-components/experimental/pdf-viewer";

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
