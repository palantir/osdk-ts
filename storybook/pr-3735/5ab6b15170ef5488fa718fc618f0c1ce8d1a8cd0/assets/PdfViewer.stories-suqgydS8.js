import{j as r,M as s}from"./iframe-CI_HynUY.js";import{P as p}from"./pdf-viewer-CfaQl8mZ.js";import{E as d}from"./Employee-BAk2o20h.js";import{u as a}from"./useOsdkObject-DEdxHFMR.js";import"./preload-helper-CIV_stCl.js";import"./PdfRenderer-BEp3aKbx.js";import"./index-0kQGtEwV.js";import"./PdfViewer-DBQav8k3.js";import"./PdfViewer.module.css-BhzRY191.js";import"./PdfViewerAnnotationLayer-DkC9amBf.js";import"./constants-DsXMS3N3.js";import"./usePdfDocument-BYBbooo3.js";import"./PdfViewerOutlineSidebar-DcqIW1Sc.js";import"./PdfViewerSidebarHeader-BuLW3_JB.js";import"./useBaseUiId-CLhtbhfw.js";import"./useControlled-CEg8frKf.js";import"./CompositeRoot-BjHu642t.js";import"./CompositeItem-D6h7EiM2.js";import"./ToolbarRootContext-Bg59D_CY.js";import"./composite-ChmQoEk2.js";import"./svgIconContainer-CBJHfw9Y.js";import"./PdfViewerSearchBar-DzddrMDr.js";import"./chevron-up-CGXRK5lU.js";import"./chevron-down-BLW-Pg3l.js";import"./cross-BfUKNbpN.js";import"./PdfViewerSidebar-DRIdqHId.js";import"./index-BdlH6Nzm.js";import"./index-DyCxF_Yp.js";import"./index-BkBZKr2_.js";import"./PdfViewerToolbar-BX7w7a59.js";import"./Button-BHVlE6--.js";import"./chevron-right-PiOJOF6L.js";import"./Input-Cb1k9hUL.js";import"./search-DA24byco.js";import"./spin-DJ9GV8aV.js";import"./error-C7hCYMbm.js";import"./withOsdkMetrics-CWUy-TNv.js";import"./makeExternalStore-DhTdoCR8.js";const U={title:"Components/DocumentViewer/Renderers/PdfViewer",component:p,tags:["beta"],parameters:{controls:{expanded:!0}}},o={render:()=>{const{object:e,isLoading:n}=a(d,s);return n||!(e!=null&&e.employeeDocuments)?r.jsx("div",{style:{height:"600px"},children:"Loading OSDK media…"}):r.jsx("div",{style:{height:"600px"},children:r.jsx(p,{media:e.employeeDocuments})})},parameters:{docs:{source:{code:`import { PdfViewer } from "@osdk/react-components/experimental/pdf-viewer";

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
