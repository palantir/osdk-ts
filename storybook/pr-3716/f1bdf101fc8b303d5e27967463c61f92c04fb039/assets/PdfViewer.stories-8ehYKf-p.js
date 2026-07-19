import{j as r,M as s}from"./iframe-CbsILOX1.js";import{P as p}from"./pdf-viewer-D08h9c6_.js";import{E as d}from"./Employee-BAk2o20h.js";import{u as a}from"./useOsdkObject-fq8CLiaq.js";import"./preload-helper-KH2jXVqe.js";import"./PdfRenderer-DW91SnJO.js";import"./index-mQCFUMVC.js";import"./PdfViewer-DOaq2S5m.js";import"./PdfViewer.module.css-CCkRPf2Q.js";import"./PdfViewerAnnotationLayer-DsKfeGDT.js";import"./constants-DsXMS3N3.js";import"./usePdfDocument-D1v7cvJ1.js";import"./PdfViewerOutlineSidebar-CEw7fjQI.js";import"./PdfViewerSidebarHeader-MFBu6a-V.js";import"./useBaseUiId-CkS0AEKj.js";import"./useControlled-CJ4srf6k.js";import"./CompositeRoot-0f7-9C9G.js";import"./CompositeItem-KKNWKktM.js";import"./ToolbarRootContext-JBI4exUW.js";import"./composite-CGEAG7vP.js";import"./svgIconContainer-CtABKPcK.js";import"./PdfViewerSearchBar-CqZPlhnd.js";import"./chevron-up-CbCaGtcc.js";import"./chevron-down-CejGVoVr.js";import"./cross-WEN_kq-R.js";import"./PdfViewerSidebar-Cic2WWfe.js";import"./index-NMVopm4U.js";import"./index-CNGY0cN4.js";import"./index-BoeCby8s.js";import"./PdfViewerToolbar-Dmv3qK7A.js";import"./Button-C5SAlHVZ.js";import"./chevron-right-Dc2OBGCv.js";import"./Input-C5UdO1XA.js";import"./search-rwF0nNiT.js";import"./spin-CQFbHMAe.js";import"./error-BPCdK3mN.js";import"./withOsdkMetrics-BRd-n6f9.js";import"./makeExternalStore-BUQE3Sxe.js";const U={title:"Components/DocumentViewer/Renderers/PdfViewer",component:p,tags:["beta"],parameters:{controls:{expanded:!0}}},o={render:()=>{const{object:e,isLoading:n}=a(d,s);return n||!(e!=null&&e.employeeDocuments)?r.jsx("div",{style:{height:"600px"},children:"Loading OSDK media…"}):r.jsx("div",{style:{height:"600px"},children:r.jsx(p,{media:e.employeeDocuments})})},parameters:{docs:{source:{code:`import { PdfViewer } from "@osdk/react-components/experimental/pdf-viewer";

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
