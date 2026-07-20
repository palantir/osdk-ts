import{j as r,M as s}from"./iframe-B918LNJv.js";import{P as p}from"./pdf-viewer-Cuqn6gsG.js";import{E as d}from"./Employee-BAk2o20h.js";import{u as a}from"./useOsdkObject-Bv6nSNW_.js";import"./preload-helper-C38s4CUI.js";import"./PdfRenderer-cho3VhoR.js";import"./index-B_P01xA3.js";import"./PdfViewer-DcaxIjrD.js";import"./PdfViewer.module.css-DezuXf2U.js";import"./PdfViewerAnnotationLayer-DqbWVHfQ.js";import"./constants-DsXMS3N3.js";import"./usePdfDocument-Bt6Z29yg.js";import"./PdfViewerOutlineSidebar-B9hWEu4P.js";import"./PdfViewerSidebarHeader-BWb9pZai.js";import"./useBaseUiId-BTl9y6re.js";import"./useControlled-DNdvLczM.js";import"./CompositeRoot-Bi2v2o3F.js";import"./CompositeItem-Be-t-AGf.js";import"./ToolbarRootContext-BZH61At9.js";import"./composite-h6Zbgi7F.js";import"./svgIconContainer-BYiAy6p0.js";import"./PdfViewerSearchBar-DZtEKlIF.js";import"./chevron-up-D6Bl0fSc.js";import"./chevron-down-Cw1bkhVm.js";import"./cross-27JxqPSS.js";import"./PdfViewerSidebar-DlHt8hk8.js";import"./index-Dv_wS8KW.js";import"./index-fXEPz3SF.js";import"./index-DDOR1c1N.js";import"./PdfViewerToolbar-COTBTUl0.js";import"./Button-DfdrGLkG.js";import"./chevron-right-Uz7XmdFr.js";import"./Input-98UmijnR.js";import"./search-D4u31a2J.js";import"./spin-Dns_XKwG.js";import"./error-DW-GsfBB.js";import"./withOsdkMetrics-BtNBzEPB.js";import"./makeExternalStore-i_cH52O7.js";const U={title:"Components/DocumentViewer/Renderers/PdfViewer",component:p,tags:["beta"],parameters:{controls:{expanded:!0}}},o={render:()=>{const{object:e,isLoading:n}=a(d,s);return n||!(e!=null&&e.employeeDocuments)?r.jsx("div",{style:{height:"600px"},children:"Loading OSDK media…"}):r.jsx("div",{style:{height:"600px"},children:r.jsx(p,{media:e.employeeDocuments})})},parameters:{docs:{source:{code:`import { PdfViewer } from "@osdk/react-components/experimental/pdf-viewer";

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
