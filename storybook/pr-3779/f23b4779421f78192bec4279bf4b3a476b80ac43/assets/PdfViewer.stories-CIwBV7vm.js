import{j as r,M as s}from"./iframe-BAGpRzfr.js";import{P as p}from"./pdf-viewer-BYIRtMaM.js";import{E as d}from"./Employee-BAk2o20h.js";import{u as a}from"./useOsdkObject-5nmRUbyJ.js";import"./preload-helper-Corf789j.js";import"./PdfRenderer-CFCiewVO.js";import"./index-Ga7CUyAH.js";import"./PdfViewer-D6yQrFeH.js";import"./PdfViewer.module.css-ZQ7jsk9X.js";import"./PdfViewerAnnotationLayer-CNn4huzW.js";import"./constants-DsXMS3N3.js";import"./usePdfDocument-ByUvr8Or.js";import"./PdfViewerOutlineSidebar-BdJX76Sf.js";import"./PdfViewerSidebarHeader-D8teumsD.js";import"./useBaseUiId-D8Vsok84.js";import"./useControlled-DQLWPkxR.js";import"./CompositeRoot-8CP05omE.js";import"./CompositeItem-R8h4HgYz.js";import"./ToolbarRootContext-BadKTZpQ.js";import"./composite-sMcVC9eI.js";import"./svgIconContainer-sR-3_vAH.js";import"./PdfViewerSearchBar-ClnP9ZzE.js";import"./chevron-up-sCvbxBtQ.js";import"./chevron-down-CPue3q8s.js";import"./cross-CB_xYTlG.js";import"./PdfViewerSidebar-DdKgMlQ3.js";import"./index-BlZ0oTgw.js";import"./index-DxphW_No.js";import"./index-BStldZKH.js";import"./PdfViewerToolbar-CUj09KFN.js";import"./Button-B1tJprBL.js";import"./chevron-right-BCryAUW_.js";import"./Input-CkPyvI53.js";import"./search-Cim2wrYi.js";import"./spin-RG5oCcVF.js";import"./error-Cx7q6m8o.js";import"./withOsdkMetrics-DboyezXq.js";import"./makeExternalStore-DHV-TvQm.js";const U={title:"Components/DocumentViewer/Renderers/PdfViewer",component:p,tags:["beta"],parameters:{controls:{expanded:!0}}},o={render:()=>{const{object:e,isLoading:n}=a(d,s);return n||!(e!=null&&e.employeeDocuments)?r.jsx("div",{style:{height:"600px"},children:"Loading OSDK media…"}):r.jsx("div",{style:{height:"600px"},children:r.jsx(p,{media:e.employeeDocuments})})},parameters:{docs:{source:{code:`import { PdfViewer } from "@osdk/react-components/experimental/pdf-viewer";

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
