import{j as r,M as s}from"./iframe-CxgKmfts.js";import{P as p}from"./pdf-viewer-CZE7tU8-.js";import{E as d}from"./Employee-BAk2o20h.js";import{u as a}from"./useOsdkObject-BULCULJQ.js";import"./preload-helper-B1ZVO4RI.js";import"./PdfViewer-DLc9vcUG.js";import"./index-CWB08-R4.js";import"./BasePdfViewer-C3pYfwdr.js";import"./BasePdfViewer.module.css-DDexgXhJ.js";import"./PdfViewerAnnotationLayer-B5MjZsmp.js";import"./constants-DsXMS3N3.js";import"./usePdfDocument-DYZIEVa9.js";import"./PdfViewerOutlineSidebar-B-gj9td5.js";import"./PdfViewerSidebarHeader-C5C4KAaf.js";import"./useBaseUiId-D_ExVr6r.js";import"./useControlled-_CoSROd4.js";import"./CompositeRoot-I_AwGijV.js";import"./CompositeItem-CMYBs2xS.js";import"./ToolbarRootContext-BpJLr83A.js";import"./composite-CxoyATG1.js";import"./svgIconContainer-I9PvnlO_.js";import"./PdfViewerSearchBar-DnZA6iFS.js";import"./chevron-up-DMIu1X6S.js";import"./chevron-down-BxImBJhJ.js";import"./cross-Cgtr1c1V.js";import"./PdfViewerSidebar-Ch74vUEQ.js";import"./index-pKyJ291Y.js";import"./index-DV2VvHyn.js";import"./index-BDjSCwox.js";import"./PdfViewerToolbar-DfQejHyj.js";import"./Button-DtbGY7fi.js";import"./chevron-right-CDT5aFt7.js";import"./Input-BORueW5n.js";import"./search-Dxx8Wlti.js";import"./spin-CfiB-1CG.js";import"./error-BlkeWzi2.js";import"./withOsdkMetrics-PSzjLOa4.js";import"./makeExternalStore-Dg2idi7m.js";const U={title:"Components/DocumentViewer/Renderers/PdfViewer",component:p,tags:["beta"],parameters:{controls:{expanded:!0}}},o={render:()=>{const{object:e,isLoading:n}=a(d,s);return n||!(e!=null&&e.employeeDocuments)?r.jsx("div",{style:{height:"600px"},children:"Loading OSDK media…"}):r.jsx("div",{style:{height:"600px"},children:r.jsx(p,{media:e.employeeDocuments})})},parameters:{docs:{source:{code:`import { PdfViewer } from "@osdk/react-components/experimental/pdf-viewer";

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
