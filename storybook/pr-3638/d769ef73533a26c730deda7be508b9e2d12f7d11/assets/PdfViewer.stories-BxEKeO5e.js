import{j as r,M as s}from"./iframe-CX-sP4Tv.js";import{P as p}from"./pdf-viewer-D1GOn0Ec.js";import{E as d}from"./Employee-BAk2o20h.js";import{u as a}from"./useOsdkObject-B7e_Ve52.js";import"./preload-helper-BzgZvTLk.js";import"./PdfRenderer-B1Y2dEAY.js";import"./index-BlSa73HA.js";import"./PdfViewer-BwpQPDTc.js";import"./PdfViewer.module.css-X6ZwBqDm.js";import"./PdfViewerAnnotationLayer-CePg5igw.js";import"./constants-DsXMS3N3.js";import"./usePdfDocument-C2zE-kBq.js";import"./PdfViewerOutlineSidebar-BLj0fHHk.js";import"./PdfViewerSidebarHeader-Fd-9IvYf.js";import"./useBaseUiId-DD5z2hLn.js";import"./useControlled-CYkygGyb.js";import"./CompositeRoot-BxeX4NfR.js";import"./CompositeItem-CZmRyaee.js";import"./ToolbarRootContext-Cb1sWF7-.js";import"./composite-CaFP9Fxm.js";import"./svgIconContainer-CEDLAgmv.js";import"./PdfViewerSearchBar-CgPed6JU.js";import"./chevron-up-Bb7tjwmd.js";import"./chevron-down-B-YXbf_u.js";import"./cross-D7XIgIX-.js";import"./PdfViewerSidebar-Ds7kiQGt.js";import"./index-CBrE2CXF.js";import"./index-Do4gF6AI.js";import"./index-Pzjslykk.js";import"./PdfViewerToolbar-DEVm6m1c.js";import"./Button-vqs6okwn.js";import"./chevron-right-BSEj7qgY.js";import"./Input-BaqWZUGz.js";import"./search-DtfJWnKA.js";import"./spin-5vb5f-jk.js";import"./error-7XeQ4j0i.js";import"./withOsdkMetrics-DxmmVtDF.js";import"./makeExternalStore-DcZ_RkV8.js";const U={title:"Components/DocumentViewer/Renderers/PdfViewer",component:p,tags:["beta"],parameters:{controls:{expanded:!0}}},o={render:()=>{const{object:e,isLoading:n}=a(d,s);return n||!(e!=null&&e.employeeDocuments)?r.jsx("div",{style:{height:"600px"},children:"Loading OSDK media…"}):r.jsx("div",{style:{height:"600px"},children:r.jsx(p,{media:e.employeeDocuments})})},parameters:{docs:{source:{code:`import { PdfViewer } from "@osdk/react-components/experimental/pdf-viewer";

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
