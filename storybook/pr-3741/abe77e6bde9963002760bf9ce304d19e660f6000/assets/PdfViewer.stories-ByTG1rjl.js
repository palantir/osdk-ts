import{j as r,M as s}from"./iframe-BRewJKLI.js";import{P as p}from"./pdf-viewer-DEcQGurM.js";import{E as d}from"./Employee-BAk2o20h.js";import{u as a}from"./useOsdkObject-fj1gDEUd.js";import"./preload-helper-Th7jsi9T.js";import"./PdfRenderer-BeygjeVF.js";import"./index-CsEIXvZI.js";import"./PdfViewer-BXD3olw2.js";import"./PdfViewer.module.css-CROSnZiA.js";import"./PdfViewerAnnotationLayer-DMU-nYtY.js";import"./constants-DsXMS3N3.js";import"./usePdfDocument-0lxvKrtW.js";import"./PdfViewerOutlineSidebar-wQ274vBY.js";import"./PdfViewerSidebarHeader-rC67U2R7.js";import"./useBaseUiId-BirOMeO-.js";import"./useControlled-BuUPxEIC.js";import"./CompositeRoot-Bs4NQfwZ.js";import"./CompositeItem-8uv7pmSI.js";import"./ToolbarRootContext-5hsijlsK.js";import"./composite-DPZfXKt9.js";import"./svgIconContainer-YEGGrYC5.js";import"./PdfViewerSearchBar-BdH7gJ7f.js";import"./chevron-up-D3QUWoZI.js";import"./chevron-down-C8r7y8He.js";import"./cross-CRuUYbdJ.js";import"./PdfViewerSidebar-BpwivBZE.js";import"./index-B-MYbMMb.js";import"./index-CdNujWPa.js";import"./index-DLtzTCbX.js";import"./PdfViewerToolbar-DH8WrISI.js";import"./Button-D-a4uE4Q.js";import"./chevron-right-DZos3b3W.js";import"./Input-Dfhle3pE.js";import"./search-CNN9U08N.js";import"./spin-BZviNF4M.js";import"./error-DE-DySAz.js";import"./withOsdkMetrics-DXH1scdv.js";import"./makeExternalStore-BJhUGNS3.js";const U={title:"Components/DocumentViewer/Renderers/PdfViewer",component:p,tags:["beta"],parameters:{controls:{expanded:!0}}},o={render:()=>{const{object:e,isLoading:n}=a(d,s);return n||!(e!=null&&e.employeeDocuments)?r.jsx("div",{style:{height:"600px"},children:"Loading OSDK media…"}):r.jsx("div",{style:{height:"600px"},children:r.jsx(p,{media:e.employeeDocuments})})},parameters:{docs:{source:{code:`import { PdfViewer } from "@osdk/react-components/experimental/pdf-viewer";

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
