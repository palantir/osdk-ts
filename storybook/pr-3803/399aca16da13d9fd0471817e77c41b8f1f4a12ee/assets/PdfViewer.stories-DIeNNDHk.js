import{j as r,M as s}from"./iframe-BIPFZdnt.js";import{P as p}from"./pdf-viewer-D1iw28CC.js";import{E as d}from"./Employee-BAk2o20h.js";import{u as a}from"./useOsdkObject-CXFbZKE7.js";import"./preload-helper-DULsO4Op.js";import"./PdfRenderer-DJ2THe2U.js";import"./index-6cFzeUf5.js";import"./PdfViewer-CUG5AKU2.js";import"./PdfViewer.module.css-CzSl_AzC.js";import"./PdfViewerAnnotationLayer-Box95JKr.js";import"./constants-DsXMS3N3.js";import"./usePdfDocument-C5fmTCwb.js";import"./PdfViewerOutlineSidebar-RPU3ZBV4.js";import"./PdfViewerSidebarHeader-FUiEBbu_.js";import"./useBaseUiId-B393kpwA.js";import"./useControlled-dYV3UboW.js";import"./CompositeRoot-1FLysCtv.js";import"./CompositeItem-C9VVNI4z.js";import"./ToolbarRootContext-QEEdrt7Q.js";import"./composite-nxEx2m3K.js";import"./svgIconContainer-OcBsH039.js";import"./PdfViewerSearchBar-BhjU3Ikn.js";import"./chevron-up-BlWnoKfc.js";import"./chevron-down-DgPtyBzm.js";import"./cross-B2RfYXui.js";import"./PdfViewerSidebar-37A9MwNA.js";import"./index-BfX4-kUd.js";import"./index-B2oB8T93.js";import"./index-WnBH7n6a.js";import"./PdfViewerToolbar-CrpSxBEA.js";import"./Button-DvODXE55.js";import"./chevron-right-C-ZLfq6A.js";import"./Input-DY9incTR.js";import"./search-BgTvK5dn.js";import"./spin-CH4EMqCc.js";import"./error-Fv9LpI3F.js";import"./withOsdkMetrics-nVQK5dsv.js";import"./makeExternalStore-DP3axzc1.js";const U={title:"Components/DocumentViewer/Renderers/PdfViewer",component:p,tags:["beta"],parameters:{controls:{expanded:!0}}},o={render:()=>{const{object:e,isLoading:n}=a(d,s);return n||!(e!=null&&e.employeeDocuments)?r.jsx("div",{style:{height:"600px"},children:"Loading OSDK media…"}):r.jsx("div",{style:{height:"600px"},children:r.jsx(p,{media:e.employeeDocuments})})},parameters:{docs:{source:{code:`import { PdfViewer } from "@osdk/react-components/experimental/pdf-viewer";

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
