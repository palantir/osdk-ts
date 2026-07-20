import{j as r,M as s}from"./iframe-BKuJ3YK-.js";import{P as p}from"./pdf-viewer-DJK6du85.js";import{E as d}from"./Employee-BAk2o20h.js";import{u as a}from"./useOsdkObject-DXet3_Kv.js";import"./preload-helper-DYAnbvQu.js";import"./PdfRenderer-BidBN-AC.js";import"./index-DOC-3Q2e.js";import"./PdfViewer-CytoiQ_I.js";import"./PdfViewer.module.css-CdVFb7pW.js";import"./PdfViewerAnnotationLayer-DHvVUQYG.js";import"./constants-DsXMS3N3.js";import"./usePdfDocument-BcszwbCm.js";import"./PdfViewerOutlineSidebar-B5gTmzQo.js";import"./PdfViewerSidebarHeader-DziQbLZR.js";import"./useBaseUiId-CmjMaZif.js";import"./useControlled-Dgcubknr.js";import"./CompositeRoot-COtbJxVp.js";import"./CompositeItem-Dhhm1Ue0.js";import"./ToolbarRootContext-Dcjq1toe.js";import"./composite-CMqWpSV4.js";import"./svgIconContainer-CO4uzBXb.js";import"./PdfViewerSearchBar-CprtFrAZ.js";import"./chevron-up-B2xL2S_P.js";import"./chevron-down-Qa4DBKkN.js";import"./cross-5zQYDp4L.js";import"./PdfViewerSidebar-BlGN1mVM.js";import"./index-D-Lytb1C.js";import"./index-CyPxhMS0.js";import"./index-BL-28NIt.js";import"./PdfViewerToolbar-5g-8BQ7d.js";import"./Button-KVWxQo2x.js";import"./chevron-right-BBuKxsi0.js";import"./Input-BuPE6di9.js";import"./search-C2R58gu2.js";import"./spin-CSnj9Gi5.js";import"./error-xCvq0iiE.js";import"./withOsdkMetrics-BsN0QIgz.js";import"./makeExternalStore-CPmwp_9o.js";const U={title:"Components/DocumentViewer/Renderers/PdfViewer",component:p,tags:["beta"],parameters:{controls:{expanded:!0}}},o={render:()=>{const{object:e,isLoading:n}=a(d,s);return n||!(e!=null&&e.employeeDocuments)?r.jsx("div",{style:{height:"600px"},children:"Loading OSDK media…"}):r.jsx("div",{style:{height:"600px"},children:r.jsx(p,{media:e.employeeDocuments})})},parameters:{docs:{source:{code:`import { PdfViewer } from "@osdk/react-components/experimental/pdf-viewer";

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
