import{j as r,M as s}from"./iframe-MMW7dAwl.js";import{P as p}from"./pdf-viewer-BTBA6GUV.js";import{E as d}from"./Employee-BAk2o20h.js";import{u as a}from"./useOsdkObject-BaowLfMF.js";import"./preload-helper-B0ldkDPT.js";import"./PdfRenderer-CfdTiPjV.js";import"./index-Bsiwb6dc.js";import"./PdfViewer-K0jDvNya.js";import"./PdfViewer.module.css-CiUi8cqX.js";import"./PdfViewerAnnotationLayer-C-8X_b-M.js";import"./constants-DsXMS3N3.js";import"./usePdfDocument-B6Mo4AMe.js";import"./PdfViewerOutlineSidebar-CiinnqQB.js";import"./PdfViewerSidebarHeader-Bmkrw-Uz.js";import"./useBaseUiId-HrNAgH2Y.js";import"./useControlled-BCMHUgBa.js";import"./CompositeRoot-BsAF0cuk.js";import"./CompositeItem--prBu0t1.js";import"./ToolbarRootContext-C9oTADe7.js";import"./composite-D2ldOjEm.js";import"./svgIconContainer-C6Uusp65.js";import"./PdfViewerSearchBar-CNlN9K_9.js";import"./chevron-up-B_9Mk1EQ.js";import"./chevron-down-CE52ay4J.js";import"./cross-Cwg16VXF.js";import"./PdfViewerSidebar-Be81-4VY.js";import"./index-BbTzuwcU.js";import"./index-DB82zLXB.js";import"./index-C7Hp3s63.js";import"./PdfViewerToolbar-D5S1f5--.js";import"./Button-CTqxWZbn.js";import"./chevron-right-BPuv2RcG.js";import"./Input-CNsR-Nss.js";import"./search-9a9jkQTY.js";import"./spin-apsBSD3d.js";import"./error-BMLkI-Ib.js";import"./withOsdkMetrics-CLxjdcRk.js";import"./makeExternalStore-CkcVg9cu.js";const U={title:"Components/DocumentViewer/Renderers/PdfViewer",component:p,tags:["beta"],parameters:{controls:{expanded:!0}}},o={render:()=>{const{object:e,isLoading:n}=a(d,s);return n||!(e!=null&&e.employeeDocuments)?r.jsx("div",{style:{height:"600px"},children:"Loading OSDK media…"}):r.jsx("div",{style:{height:"600px"},children:r.jsx(p,{media:e.employeeDocuments})})},parameters:{docs:{source:{code:`import { PdfViewer } from "@osdk/react-components/experimental/pdf-viewer";

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
