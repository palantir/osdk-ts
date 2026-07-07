import{j as r,M as s}from"./iframe-DgOZP_Cm.js";import{P as p}from"./pdf-viewer-D0SJs9hD.js";import{E as d}from"./Employee-BAk2o20h.js";import{u as a}from"./useOsdkObject-KB9OK6kF.js";import"./preload-helper-DjIc4MrC.js";import"./PdfRenderer-CWeeVGIu.js";import"./index-BERzUTXk.js";import"./PdfViewer-CxCdkpDp.js";import"./PdfViewer.module.css-CpRQrpNp.js";import"./PdfViewerAnnotationLayer-DovzyEtQ.js";import"./constants-DsXMS3N3.js";import"./usePdfDocument-2Th7bi9o.js";import"./PdfViewerOutlineSidebar-CRWI37PO.js";import"./PdfViewerSidebarHeader-DnCe6OoO.js";import"./useBaseUiId-BPFyUjqK.js";import"./useControlled-CxK-j9x6.js";import"./CompositeRoot-B2T56OCe.js";import"./CompositeItem-CNZwoKOQ.js";import"./ToolbarRootContext-Dux0nsNS.js";import"./composite-5D8VFPSs.js";import"./svgIconContainer-CuggTSBX.js";import"./PdfViewerSearchBar-CTctfSCZ.js";import"./chevron-up-CwxzHXqG.js";import"./chevron-down-Cts10Q8m.js";import"./cross-DcWlG0ZM.js";import"./PdfViewerSidebar-0ptULj_F.js";import"./index-DUN60dp8.js";import"./index-DvSYRibu.js";import"./index-Bq6paZvN.js";import"./PdfViewerToolbar-DJLSCNJ8.js";import"./Button-4HFyInoI.js";import"./chevron-right-DIup9DiB.js";import"./Input-ChTIrDkZ.js";import"./search-dZux87H-.js";import"./spin-DAc98jVh.js";import"./error-4FTnhPW6.js";import"./withOsdkMetrics-DuT7zG16.js";import"./makeExternalStore-C9IfhK9F.js";const U={title:"Components/DocumentViewer/Renderers/PdfViewer",component:p,tags:["beta"],parameters:{controls:{expanded:!0}}},o={render:()=>{const{object:e,isLoading:n}=a(d,s);return n||!(e!=null&&e.employeeDocuments)?r.jsx("div",{style:{height:"600px"},children:"Loading OSDK media…"}):r.jsx("div",{style:{height:"600px"},children:r.jsx(p,{media:e.employeeDocuments})})},parameters:{docs:{source:{code:`import { PdfViewer } from "@osdk/react-components/experimental/pdf-viewer";

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
