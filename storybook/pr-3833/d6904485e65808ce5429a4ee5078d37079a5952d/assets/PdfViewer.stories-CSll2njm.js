import{j as r,M as s}from"./iframe-BYxEOIgJ.js";import{P as p}from"./pdf-viewer-oYX-q6FD.js";import{E as d}from"./Employee-BAk2o20h.js";import{u as a}from"./useOsdkObject-BPXYNUtf.js";import"./preload-helper-CYfeVk8W.js";import"./PdfRenderer-pFKeY0fS.js";import"./index-DKKaubsW.js";import"./PdfViewer-D0-_Ciij.js";import"./PdfViewer.module.css-DZAOWSy6.js";import"./PdfViewerAnnotationLayer-uCo2_YYF.js";import"./constants-DsXMS3N3.js";import"./usePdfDocument-CeNJHr8_.js";import"./PdfViewerOutlineSidebar-hTeIrNPJ.js";import"./PdfViewerSidebarHeader-DjpC2lPM.js";import"./useBaseUiId-nfkORe0E.js";import"./useControlled-CUdaOkZq.js";import"./CompositeRoot-CabvbkUp.js";import"./CompositeItem-DmtenJN8.js";import"./ToolbarRootContext-49DlEGV6.js";import"./composite-Cx4sqESm.js";import"./svgIconContainer-BEmlyg-y.js";import"./PdfViewerSearchBar-_gShvKFT.js";import"./chevron-up-BFp6cqkg.js";import"./chevron-down-CrQY9uCp.js";import"./cross-BIhLN6o-.js";import"./PdfViewerSidebar-BYPX8GQt.js";import"./index-DHS4kq0m.js";import"./index-tQSEfkeh.js";import"./index-BOJvayi6.js";import"./PdfViewerToolbar-Dgr0bDTI.js";import"./Button-BD1cn9XN.js";import"./chevron-right-wWoljt15.js";import"./Input-DjFm0Vep.js";import"./search-D-odk6X_.js";import"./spin-DbZb_ONa.js";import"./error-Cj50jG_k.js";import"./withOsdkMetrics-C8n5_A-t.js";import"./makeExternalStore-MdKyv_9V.js";const U={title:"Components/DocumentViewer/Renderers/PdfViewer",component:p,tags:["beta"],parameters:{controls:{expanded:!0}}},o={render:()=>{const{object:e,isLoading:n}=a(d,s);return n||!(e!=null&&e.employeeDocuments)?r.jsx("div",{style:{height:"600px"},children:"Loading OSDK media…"}):r.jsx("div",{style:{height:"600px"},children:r.jsx(p,{media:e.employeeDocuments})})},parameters:{docs:{source:{code:`import { PdfViewer } from "@osdk/react-components/experimental/pdf-viewer";

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
