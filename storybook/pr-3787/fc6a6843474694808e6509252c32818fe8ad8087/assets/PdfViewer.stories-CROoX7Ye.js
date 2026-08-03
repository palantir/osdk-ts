import{j as r,M as s}from"./iframe-m5MS_AOj.js";import{P as p}from"./pdf-viewer-BTL4GTqn.js";import{E as d}from"./Employee-BAk2o20h.js";import{u as a}from"./useOsdkObject-Yt1rdSUU.js";import"./preload-helper-Cwc8v1fY.js";import"./PdfRenderer-tzDjAXl3.js";import"./index-DLmK-3wj.js";import"./PdfViewer-Bo48Xmym.js";import"./PdfViewer.module.css-BILx0Li_.js";import"./PdfViewerAnnotationLayer-CSQJntg-.js";import"./constants-DsXMS3N3.js";import"./usePdfDocument-DHxSeXin.js";import"./PdfViewerOutlineSidebar-BRUNTZcf.js";import"./PdfViewerSidebarHeader-Dl21Cycd.js";import"./useBaseUiId-Qy_uNuRZ.js";import"./useControlled-22a6dTFJ.js";import"./CompositeRoot-BMQArXyr.js";import"./CompositeItem-W4eWSFb6.js";import"./ToolbarRootContext-Nqff0oCy.js";import"./composite-URT0CF0y.js";import"./svgIconContainer-CN2kOMHj.js";import"./PdfViewerSearchBar-BbLb7RDB.js";import"./chevron-up-Chk2PQ8g.js";import"./chevron-down-CGfzs9sc.js";import"./cross-CnvlWWQf.js";import"./PdfViewerSidebar-Bs-JYB58.js";import"./index-BRTVPirF.js";import"./index-fzOrEoIw.js";import"./index-oqW8MMnv.js";import"./PdfViewerToolbar-Dj8WQZKY.js";import"./Button-DMilPMm4.js";import"./chevron-right-DY13kFHM.js";import"./Input-o1S0gnyB.js";import"./search-CcRTPglH.js";import"./spin-BGc654gw.js";import"./error-Cg5wTyY6.js";import"./withOsdkMetrics-C6tQjPwh.js";import"./makeExternalStore-BIok_NyR.js";const U={title:"Components/DocumentViewer/Renderers/PdfViewer",component:p,tags:["beta"],parameters:{controls:{expanded:!0}}},o={render:()=>{const{object:e,isLoading:n}=a(d,s);return n||!(e!=null&&e.employeeDocuments)?r.jsx("div",{style:{height:"600px"},children:"Loading OSDK media…"}):r.jsx("div",{style:{height:"600px"},children:r.jsx(p,{media:e.employeeDocuments})})},parameters:{docs:{source:{code:`import { PdfViewer } from "@osdk/react-components/experimental/pdf-viewer";

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
