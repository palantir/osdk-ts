import{j as r,M as s}from"./iframe-B5hHVZQu.js";import{P as p}from"./pdf-viewer--epH8trh.js";import{E as d}from"./Employee-BAk2o20h.js";import{u as a}from"./useOsdkObject-rQxW4zkw.js";import"./preload-helper-DyqMQgY0.js";import"./PdfRenderer-DHTOSch4.js";import"./index-DaYiiRu5.js";import"./PdfViewer-DBp4JJhh.js";import"./PdfViewer.module.css-DoY4so0E.js";import"./PdfViewerAnnotationLayer-DpVtQwdH.js";import"./constants-DsXMS3N3.js";import"./usePdfDocument-B9ixii2c.js";import"./PdfViewerOutlineSidebar-CEBP2sX0.js";import"./PdfViewerSidebarHeader-CbLbhxsv.js";import"./useBaseUiId-CRlCyX-w.js";import"./useControlled-By0Ac4RD.js";import"./CompositeRoot-CH_FS7sE.js";import"./CompositeItem-BtNP4ARS.js";import"./ToolbarRootContext-DJjlFlUm.js";import"./composite-CK8SD67A.js";import"./svgIconContainer-DXyLBKXl.js";import"./PdfViewerSearchBar-CDHu5t41.js";import"./chevron-up-e9tr8Qba.js";import"./chevron-down-Cc8R_gLM.js";import"./cross-CTSJrujW.js";import"./PdfViewerSidebar-CGevhb8k.js";import"./index-CfwqnS6H.js";import"./index-Cu4Ah4up.js";import"./index-ylobHPnE.js";import"./PdfViewerToolbar-BdaVsBIk.js";import"./Button-C90dbigt.js";import"./chevron-right-B1xoDlvD.js";import"./Input-b2ptVJAS.js";import"./search-CxznAXlW.js";import"./spin-DIW6Y7__.js";import"./error-DRrdgJam.js";import"./withOsdkMetrics-DvK36u8X.js";import"./makeExternalStore-004jpP0-.js";const U={title:"Components/DocumentViewer/Renderers/PdfViewer",component:p,tags:["beta"],parameters:{controls:{expanded:!0}}},o={render:()=>{const{object:e,isLoading:n}=a(d,s);return n||!(e!=null&&e.employeeDocuments)?r.jsx("div",{style:{height:"600px"},children:"Loading OSDK media…"}):r.jsx("div",{style:{height:"600px"},children:r.jsx(p,{media:e.employeeDocuments})})},parameters:{docs:{source:{code:`import { PdfViewer } from "@osdk/react-components/experimental/pdf-viewer";

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
