import{j as r,M as s}from"./iframe-Da9MDiTI.js";import{P as p}from"./pdf-viewer-CSZumMqD.js";import{E as d}from"./Employee-BAk2o20h.js";import{u as a}from"./useOsdkObject-DR_4qJC3.js";import"./preload-helper-Dd6abAIO.js";import"./PdfRenderer-ChEGb6io.js";import"./index-Bjs-izmB.js";import"./PdfViewer-DDDuTyXg.js";import"./PdfViewer.module.css-BqvAHBgn.js";import"./PdfViewerAnnotationLayer-DHS-F-cp.js";import"./constants-DsXMS3N3.js";import"./usePdfDocument-BaWwG9et.js";import"./PdfViewerOutlineSidebar-t1PWdsxy.js";import"./PdfViewerSidebarHeader-CXlAMQrn.js";import"./useBaseUiId-BayoovkJ.js";import"./useControlled-3ADGh7jp.js";import"./CompositeRoot-BM73pr3C.js";import"./CompositeItem-C0Jbe1ov.js";import"./ToolbarRootContext-Dc0wNS2-.js";import"./composite-BaDdnoh8.js";import"./svgIconContainer-BJth7iyz.js";import"./PdfViewerSearchBar-BCQaoVBJ.js";import"./chevron-up-DYbaPiEH.js";import"./chevron-down-CY9Oj2p3.js";import"./cross-Ddpno7b6.js";import"./PdfViewerSidebar-DXZk5AUb.js";import"./index-CBjdGpQ-.js";import"./index-DcIVUlGH.js";import"./index-DKfY6EcW.js";import"./PdfViewerToolbar-B5JsUMhu.js";import"./Button-g9bDBW5N.js";import"./chevron-right-C9smBdts.js";import"./Input-BgILf_TN.js";import"./search-CZHusTi7.js";import"./spin-DPhjmYCr.js";import"./error-D7APwBuJ.js";import"./withOsdkMetrics-B9D4iGy_.js";import"./makeExternalStore-BEHro4Nx.js";const U={title:"Components/DocumentViewer/Renderers/PdfViewer",component:p,tags:["beta"],parameters:{controls:{expanded:!0}}},o={render:()=>{const{object:e,isLoading:n}=a(d,s);return n||!(e!=null&&e.employeeDocuments)?r.jsx("div",{style:{height:"600px"},children:"Loading OSDK media…"}):r.jsx("div",{style:{height:"600px"},children:r.jsx(p,{media:e.employeeDocuments})})},parameters:{docs:{source:{code:`import { PdfViewer } from "@osdk/react-components/experimental/pdf-viewer";

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
