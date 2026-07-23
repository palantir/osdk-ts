import{j as r,M as s}from"./iframe-CkbYc2pP.js";import{P as p}from"./pdf-viewer-BQ0OkeN4.js";import{E as d}from"./Employee-BAk2o20h.js";import{u as a}from"./useOsdkObject-L0lCfH3U.js";import"./preload-helper-DWws0Fe8.js";import"./PdfRenderer-DeJrylSy.js";import"./index-B7qybUT7.js";import"./PdfViewer-Bqxam7c9.js";import"./PdfViewer.module.css-n22PLokA.js";import"./PdfViewerAnnotationLayer-Cmhl89ki.js";import"./constants-DsXMS3N3.js";import"./usePdfDocument--E7_NWf8.js";import"./PdfViewerOutlineSidebar-jkf0XbB1.js";import"./PdfViewerSidebarHeader-CBZ2QjTj.js";import"./useBaseUiId-vvHGjGIN.js";import"./useControlled-BVzdlM3Q.js";import"./CompositeRoot-9JfkRhBb.js";import"./CompositeItem-BszmLGHn.js";import"./ToolbarRootContext-CzW8ESD7.js";import"./composite-BMFfaa_y.js";import"./svgIconContainer-BePuMkB2.js";import"./PdfViewerSearchBar-BFrBCYfT.js";import"./chevron-up-DpbCwatY.js";import"./chevron-down-C4_wMWuh.js";import"./cross-B-KVwLek.js";import"./PdfViewerSidebar-Yg87UwmY.js";import"./index-Burs7DZR.js";import"./index-COpZ_srd.js";import"./index-BLluPW5F.js";import"./PdfViewerToolbar-yhjLu34R.js";import"./Button-BigCnc-F.js";import"./chevron-right-CCTInvz8.js";import"./Input-TCA2ZWZm.js";import"./search-4l5VikIh.js";import"./spin-ZxvWFZmt.js";import"./error-dHO47Anr.js";import"./withOsdkMetrics-DQxmGXeb.js";import"./makeExternalStore-BkbUVh1s.js";const U={title:"Components/DocumentViewer/Renderers/PdfViewer",component:p,tags:["beta"],parameters:{controls:{expanded:!0}}},o={render:()=>{const{object:e,isLoading:n}=a(d,s);return n||!(e!=null&&e.employeeDocuments)?r.jsx("div",{style:{height:"600px"},children:"Loading OSDK media…"}):r.jsx("div",{style:{height:"600px"},children:r.jsx(p,{media:e.employeeDocuments})})},parameters:{docs:{source:{code:`import { PdfViewer } from "@osdk/react-components/experimental/pdf-viewer";

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
