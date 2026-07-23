import{j as r,M as s}from"./iframe-Cb9yL1OG.js";import{P as p}from"./pdf-viewer-BnIWtSmv.js";import{E as d}from"./Employee-BAk2o20h.js";import{u as a}from"./useOsdkObject-CjdeYKoZ.js";import"./preload-helper-DQv3Mqd6.js";import"./PdfRenderer-BwTM1maI.js";import"./index-DLq4a5hn.js";import"./PdfViewer-4FQhSzW8.js";import"./PdfViewer.module.css-D_yqdhAT.js";import"./PdfViewerAnnotationLayer-BAjYOVvA.js";import"./constants-DsXMS3N3.js";import"./usePdfDocument-BbiukDJ_.js";import"./PdfViewerOutlineSidebar-DdRKKCaO.js";import"./PdfViewerSidebarHeader-Ch_KvG9L.js";import"./useBaseUiId-Bzh_EjHo.js";import"./useControlled-z-zi7rAe.js";import"./CompositeRoot-Wxf3rApU.js";import"./CompositeItem-0ISc6yQY.js";import"./ToolbarRootContext-Cabc9txw.js";import"./composite-lnU5aQzY.js";import"./svgIconContainer-DBEZVoeW.js";import"./PdfViewerSearchBar-C-WmJp_T.js";import"./chevron-up-DXPBjAKv.js";import"./chevron-down-B_N-V52K.js";import"./cross-CB3_uWKZ.js";import"./PdfViewerSidebar-EyxNaXoS.js";import"./index-Db9g3KRS.js";import"./index-DN_IeP_N.js";import"./index-PfYakjmh.js";import"./PdfViewerToolbar-B-itySsN.js";import"./Button-6NKxmn-i.js";import"./chevron-right-DbuHTbM-.js";import"./Input-DLTVeyAC.js";import"./search-DrEW_jBF.js";import"./spin-CBHkPEcl.js";import"./error-Cp0EJWJK.js";import"./withOsdkMetrics-MSnSO192.js";import"./makeExternalStore-DJapPci5.js";const U={title:"Components/DocumentViewer/Renderers/PdfViewer",component:p,tags:["beta"],parameters:{controls:{expanded:!0}}},o={render:()=>{const{object:e,isLoading:n}=a(d,s);return n||!(e!=null&&e.employeeDocuments)?r.jsx("div",{style:{height:"600px"},children:"Loading OSDK media…"}):r.jsx("div",{style:{height:"600px"},children:r.jsx(p,{media:e.employeeDocuments})})},parameters:{docs:{source:{code:`import { PdfViewer } from "@osdk/react-components/experimental/pdf-viewer";

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
