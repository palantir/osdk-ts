import{j as r,M as s}from"./iframe-CAO1B58s.js";import{P as p}from"./pdf-viewer-DVl94_TN.js";import{E as d}from"./Employee-BAk2o20h.js";import{u as a}from"./useOsdkObject-VIv3aIoL.js";import"./preload-helper-Dp1pzeXC.js";import"./PdfRenderer-Dzklr7Y8.js";import"./index-2SlFnaHE.js";import"./PdfViewer-1_fzsxz6.js";import"./PdfViewer.module.css-CQeQKKWQ.js";import"./PdfViewerAnnotationLayer-1fp9UUt1.js";import"./constants-DsXMS3N3.js";import"./usePdfDocument-MuxqEv6Y.js";import"./PdfViewerOutlineSidebar-Bw9FCoIM.js";import"./PdfViewerSidebarHeader-BD_qjYOn.js";import"./useBaseUiId-D72lMfE_.js";import"./useControlled-CMPDUvCd.js";import"./CompositeRoot-B1PXQMr-.js";import"./CompositeItem-BgYEKQXO.js";import"./ToolbarRootContext-BcxrhZv1.js";import"./composite-B06T-Azs.js";import"./svgIconContainer-M6SpqrlV.js";import"./PdfViewerSearchBar-B1kkPE1G.js";import"./chevron-up--_zZELHF.js";import"./chevron-down-p1qYsJXr.js";import"./cross-CLetBbcm.js";import"./PdfViewerSidebar-BU4LA2pz.js";import"./index-D62FQFIO.js";import"./index-CqYJuNzQ.js";import"./index-Dl9K5k5W.js";import"./PdfViewerToolbar-BzByvTFb.js";import"./Button-Cpz-DPHy.js";import"./chevron-right-BHwF2a8D.js";import"./Input-Z-O5GJkg.js";import"./search-CpelYZyf.js";import"./spin-By2Q2OJO.js";import"./error-DCZY56Y1.js";import"./withOsdkMetrics-CCe5tkcF.js";import"./makeExternalStore-whgFatuo.js";const U={title:"Components/DocumentViewer/Renderers/PdfViewer",component:p,tags:["beta"],parameters:{controls:{expanded:!0}}},o={render:()=>{const{object:e,isLoading:n}=a(d,s);return n||!(e!=null&&e.employeeDocuments)?r.jsx("div",{style:{height:"600px"},children:"Loading OSDK media…"}):r.jsx("div",{style:{height:"600px"},children:r.jsx(p,{media:e.employeeDocuments})})},parameters:{docs:{source:{code:`import { PdfViewer } from "@osdk/react-components/experimental/pdf-viewer";

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
