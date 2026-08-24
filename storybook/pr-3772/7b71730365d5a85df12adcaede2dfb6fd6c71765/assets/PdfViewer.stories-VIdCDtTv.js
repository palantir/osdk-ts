import{j as r,M as s}from"./iframe-BPocqIVt.js";import{P as p}from"./pdf-viewer-hug7qPlb.js";import{E as d}from"./Employee-BAk2o20h.js";import{u as a}from"./useOsdkObject-SDuLtEcM.js";import"./preload-helper-DJuEbehX.js";import"./PdfViewer-CmOg11c2.js";import"./index-D8gxTUyX.js";import"./BasePdfViewer-DWspykaO.js";import"./BasePdfViewer.module.css-DEA860zM.js";import"./PdfViewerAnnotationLayer-BneI_C-t.js";import"./constants-DsXMS3N3.js";import"./usePdfDocument-BF2BDgSa.js";import"./PdfViewerOutlineSidebar-DZFa10MM.js";import"./PdfViewerSidebarHeader-BVgBzTu5.js";import"./useBaseUiId-DHiAnipM.js";import"./useControlled-Cn9j2jZh.js";import"./CompositeRoot-B-52lFFf.js";import"./CompositeItem-uae9ym8T.js";import"./ToolbarRootContext-Bx5UxeGF.js";import"./composite-Bsm441N4.js";import"./svgIconContainer-lu5MT20R.js";import"./PdfViewerSearchBar-CEY5kJUZ.js";import"./chevron-up-DjdevGIw.js";import"./chevron-down-DzujtnRS.js";import"./cross-CP14YMB5.js";import"./PdfViewerSidebar-CHs_NgUl.js";import"./index-QphKDK17.js";import"./index-DUErGcWd.js";import"./index-wB13koOt.js";import"./PdfViewerToolbar-3LKpzbTO.js";import"./Button-BAjtVZWF.js";import"./chevron-right-ByrQhoGa.js";import"./Input-DoB758NI.js";import"./search-CPyRqeCk.js";import"./spin-CMN-Jgxq.js";import"./error-SprCq_Ye.js";import"./withOsdkMetrics-DyR4A0wB.js";import"./makeExternalStore-DNWt0sPl.js";const U={title:"Components/DocumentViewer/Renderers/PdfViewer",component:p,tags:["beta"],parameters:{controls:{expanded:!0}}},o={render:()=>{const{object:e,isLoading:n}=a(d,s);return n||!(e!=null&&e.employeeDocuments)?r.jsx("div",{style:{height:"600px"},children:"Loading OSDK media…"}):r.jsx("div",{style:{height:"600px"},children:r.jsx(p,{media:e.employeeDocuments})})},parameters:{docs:{source:{code:`import { PdfViewer } from "@osdk/react-components/experimental/pdf-viewer";

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
