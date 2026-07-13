import{j as r,M as s}from"./iframe-DCqHKbrB.js";import{P as p}from"./pdf-viewer-D6rOqF0H.js";import{E as d}from"./Employee-BAk2o20h.js";import{u as a}from"./useOsdkObject-CbEunBDe.js";import"./preload-helper-BpC0Xix4.js";import"./PdfRenderer-D30IMOWq.js";import"./index-DksTdEAE.js";import"./PdfViewer-BLEZQ31E.js";import"./PdfViewer.module.css-OvieYecK.js";import"./PdfViewerAnnotationLayer-GACQ6Qfz.js";import"./constants-DsXMS3N3.js";import"./usePdfDocument-C1mzaXvZ.js";import"./PdfViewerOutlineSidebar-CzB8TpFA.js";import"./PdfViewerSidebarHeader-DHtKnJKx.js";import"./useBaseUiId-DneFdTlE.js";import"./useControlled-DaKi3qlI.js";import"./CompositeRoot-DlNcDHUA.js";import"./CompositeItem-DnhineeP.js";import"./ToolbarRootContext-CCGnrXPP.js";import"./composite-CQu6WcFD.js";import"./svgIconContainer-C_r3XmUZ.js";import"./PdfViewerSearchBar-BubcJih-.js";import"./chevron-up-DDSKWpV_.js";import"./chevron-down-CGNIDolt.js";import"./cross-CU1mVuqS.js";import"./PdfViewerSidebar-qkHc_GsZ.js";import"./index-BCF8iDXD.js";import"./index-BDBkMqeU.js";import"./index-Cg1yXLif.js";import"./PdfViewerToolbar-AkaMZrYg.js";import"./Button-yOAN8cB8.js";import"./chevron-right-DV7K638A.js";import"./Input-D4PweGk6.js";import"./search-CdpFNP5g.js";import"./spin-BQLcV6xS.js";import"./error-Dy63jnhf.js";import"./withOsdkMetrics-BFTHdOY7.js";import"./makeExternalStore-DMQ9I4QN.js";const U={title:"Components/DocumentViewer/Renderers/PdfViewer",component:p,tags:["beta"],parameters:{controls:{expanded:!0}}},o={render:()=>{const{object:e,isLoading:n}=a(d,s);return n||!(e!=null&&e.employeeDocuments)?r.jsx("div",{style:{height:"600px"},children:"Loading OSDK media…"}):r.jsx("div",{style:{height:"600px"},children:r.jsx(p,{media:e.employeeDocuments})})},parameters:{docs:{source:{code:`import { PdfViewer } from "@osdk/react-components/experimental/pdf-viewer";

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
