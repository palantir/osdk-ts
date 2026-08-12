import{j as r,M as s}from"./iframe-BBL_-HCt.js";import{P as p}from"./pdf-viewer-BRBq4Aa1.js";import{E as d}from"./Employee-BAk2o20h.js";import{u as a}from"./useOsdkObject-CPzZF_f5.js";import"./preload-helper-gXeNWTZD.js";import"./PdfRenderer-C733sITG.js";import"./index-D4yzeBJ6.js";import"./PdfViewer-6X6AwX7L.js";import"./PdfViewer.module.css-CSHSuuhr.js";import"./PdfViewerAnnotationLayer-Cb31ejVU.js";import"./constants-DsXMS3N3.js";import"./usePdfDocument-BJ6V-Khm.js";import"./PdfViewerOutlineSidebar-C-bDgBvg.js";import"./PdfViewerSidebarHeader-BdMYi90d.js";import"./useBaseUiId-IvbF4hDj.js";import"./useControlled-DMuu4KBX.js";import"./CompositeRoot-CK-Yoe0r.js";import"./CompositeItem-CT2M5Fdg.js";import"./ToolbarRootContext-BVwYgSHG.js";import"./composite-B4fmYlB2.js";import"./svgIconContainer-C5h8dyp4.js";import"./PdfViewerSearchBar-DKQdRoUf.js";import"./chevron-up-CBtkIbt4.js";import"./chevron-down-Bg0k9Oko.js";import"./cross-BTBqqo2m.js";import"./PdfViewerSidebar-BkvyDwzX.js";import"./index-CeI-2DnP.js";import"./index-DkKFi5X-.js";import"./index-OLnc9ViJ.js";import"./PdfViewerToolbar-CiZ5dHeN.js";import"./Button-SEe7AN0N.js";import"./chevron-right-CCi9D0WG.js";import"./Input-C1KaTSDP.js";import"./search-BqwbKAei.js";import"./spin-c9qeKa3h.js";import"./error-BeEhm9we.js";import"./withOsdkMetrics-DYro2wY1.js";import"./makeExternalStore-DqPT6bfI.js";const U={title:"Components/DocumentViewer/Renderers/PdfViewer",component:p,tags:["beta"],parameters:{controls:{expanded:!0}}},o={render:()=>{const{object:e,isLoading:n}=a(d,s);return n||!(e!=null&&e.employeeDocuments)?r.jsx("div",{style:{height:"600px"},children:"Loading OSDK media…"}):r.jsx("div",{style:{height:"600px"},children:r.jsx(p,{media:e.employeeDocuments})})},parameters:{docs:{source:{code:`import { PdfViewer } from "@osdk/react-components/experimental/pdf-viewer";

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
