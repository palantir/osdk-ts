import{j as r,M as s}from"./iframe-CJTx5Nc3.js";import{P as p}from"./pdf-viewer-CmZik_Ah.js";import{E as d}from"./Employee-BAk2o20h.js";import{u as a}from"./useOsdkObject-DzFWMHfe.js";import"./preload-helper-D-r58fd9.js";import"./PdfRenderer-Dtlhg56d.js";import"./index-C8rYvdZc.js";import"./PdfViewer-hDYeAotR.js";import"./PdfViewer.module.css-CzseI9pj.js";import"./PdfViewerAnnotationLayer-BCZW8WYV.js";import"./constants-DsXMS3N3.js";import"./usePdfDocument-DOQGDUEr.js";import"./PdfViewerOutlineSidebar-CMVxaAFc.js";import"./PdfViewerSidebarHeader-xjcxqlsU.js";import"./useBaseUiId-BzozfAEW.js";import"./useControlled-BBTN_Td4.js";import"./CompositeRoot-BlF3pU2G.js";import"./CompositeItem-BY4abYzO.js";import"./ToolbarRootContext-B0uHWv9_.js";import"./composite-Dz_mNTG5.js";import"./svgIconContainer-BTsaG1Ft.js";import"./PdfViewerSearchBar-C2xabPch.js";import"./chevron-up-BySeUTrM.js";import"./chevron-down-CXfwTRt6.js";import"./cross-CfGQeXwx.js";import"./PdfViewerSidebar-CTdrq3Gc.js";import"./index-IEnbKD5-.js";import"./index-DGIB4jaL.js";import"./index-eHvJavxO.js";import"./PdfViewerToolbar-CfqdGJDD.js";import"./Button-DQWGETyO.js";import"./chevron-right-3sZKSaqY.js";import"./Input-ByoS9MHC.js";import"./search-CjC9oxyN.js";import"./spin-CGesXZdV.js";import"./error-K1PirtOR.js";import"./withOsdkMetrics-CJf0ufYd.js";import"./makeExternalStore-Dns-qLi8.js";const U={title:"Components/DocumentViewer/Renderers/PdfViewer",component:p,tags:["beta"],parameters:{controls:{expanded:!0}}},o={render:()=>{const{object:e,isLoading:n}=a(d,s);return n||!(e!=null&&e.employeeDocuments)?r.jsx("div",{style:{height:"600px"},children:"Loading OSDK media…"}):r.jsx("div",{style:{height:"600px"},children:r.jsx(p,{media:e.employeeDocuments})})},parameters:{docs:{source:{code:`import { PdfViewer } from "@osdk/react-components/experimental/pdf-viewer";

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
