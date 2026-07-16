import{j as r,M as s}from"./iframe-sWXw0paa.js";import{P as p}from"./pdf-viewer-Is-YvvVS.js";import{E as d}from"./Employee-BAk2o20h.js";import{u as a}from"./useOsdkObject-B7bmtKEt.js";import"./preload-helper-Dp1pzeXC.js";import"./PdfRenderer-BS8H4DJQ.js";import"./index-COXIAl6B.js";import"./PdfViewer-ucC57A4B.js";import"./PdfViewer.module.css-CSGUA7yR.js";import"./PdfViewerAnnotationLayer-DqYXzj8g.js";import"./constants-DsXMS3N3.js";import"./usePdfDocument-wLWXlMb6.js";import"./PdfViewerOutlineSidebar-BP43wcxc.js";import"./PdfViewerSidebarHeader-CYvnxKKG.js";import"./useBaseUiId-JcRrdfwu.js";import"./useControlled-B82lWbcA.js";import"./CompositeRoot-CxFmOCQT.js";import"./CompositeItem-DeOncA4j.js";import"./ToolbarRootContext-DLkg6cV0.js";import"./composite-DkaDsYOf.js";import"./svgIconContainer-CcTjygR-.js";import"./PdfViewerSearchBar-DeH_5AEU.js";import"./chevron-up-BQWlBxrx.js";import"./chevron-down-CTbS8u6n.js";import"./cross-Ci5p4MdC.js";import"./PdfViewerSidebar-FEVQ08d9.js";import"./index-DGkFQZVQ.js";import"./index-mSr7oA2b.js";import"./index-DDYmgTwS.js";import"./PdfViewerToolbar-aFzhN8_h.js";import"./Button-Q5pECRtn.js";import"./chevron-right-Bip3xzaD.js";import"./Input-gZgAwopS.js";import"./search-Bsjz8L6Y.js";import"./spin-BIanoev8.js";import"./error-CibIcrEX.js";import"./withOsdkMetrics-CfavPITI.js";import"./makeExternalStore-DEwyoj8c.js";const U={title:"Components/DocumentViewer/Renderers/PdfViewer",component:p,tags:["beta"],parameters:{controls:{expanded:!0}}},o={render:()=>{const{object:e,isLoading:n}=a(d,s);return n||!(e!=null&&e.employeeDocuments)?r.jsx("div",{style:{height:"600px"},children:"Loading OSDK media…"}):r.jsx("div",{style:{height:"600px"},children:r.jsx(p,{media:e.employeeDocuments})})},parameters:{docs:{source:{code:`import { PdfViewer } from "@osdk/react-components/experimental/pdf-viewer";

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
