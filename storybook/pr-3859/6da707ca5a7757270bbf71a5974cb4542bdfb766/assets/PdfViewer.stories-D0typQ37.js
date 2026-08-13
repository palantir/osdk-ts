import{j as r,M as s}from"./iframe-CyuT7sA8.js";import{P as p}from"./pdf-viewer-C5zDWsFO.js";import{E as d}from"./Employee-BAk2o20h.js";import{u as a}from"./useOsdkObject-lkaGaS_D.js";import"./preload-helper-96BDXHaD.js";import"./PdfRenderer-m5PSXvof.js";import"./index-C_6jq-CI.js";import"./PdfViewer-JQTwHJAw.js";import"./PdfViewer.module.css-By7Ci4Bn.js";import"./PdfViewerAnnotationLayer-YU2u8i2i.js";import"./constants-DsXMS3N3.js";import"./usePdfDocument-CJR-9ZZF.js";import"./PdfViewerOutlineSidebar-Rqj_BzEe.js";import"./PdfViewerSidebarHeader-DArcmqob.js";import"./useBaseUiId-B5H6aoGe.js";import"./useControlled-CNQ4xPOD.js";import"./CompositeRoot-_bYrD9JH.js";import"./CompositeItem-DgOyYKdv.js";import"./ToolbarRootContext-D-yYDS8o.js";import"./composite-CZN4L-Em.js";import"./svgIconContainer-CaGNr8BU.js";import"./PdfViewerSearchBar-CEO22ORY.js";import"./chevron-up-j9lEq9mY.js";import"./chevron-down-DH6c9NVt.js";import"./cross-C5JPqzj3.js";import"./PdfViewerSidebar-CYtm2o6o.js";import"./index-DhRjIIVJ.js";import"./index-C900sVPn.js";import"./index-BUf8UOrQ.js";import"./PdfViewerToolbar-DH4XX76E.js";import"./Button-DEJD33aj.js";import"./chevron-right-D-rp8tdO.js";import"./Input-KCuhgloF.js";import"./search-CKTNg7RE.js";import"./spin-BWEAhBjw.js";import"./error-wRnolQK2.js";import"./withOsdkMetrics-dgGlVNih.js";import"./makeExternalStore-vHKDZBeW.js";const U={title:"Components/DocumentViewer/Renderers/PdfViewer",component:p,tags:["beta"],parameters:{controls:{expanded:!0}}},o={render:()=>{const{object:e,isLoading:n}=a(d,s);return n||!(e!=null&&e.employeeDocuments)?r.jsx("div",{style:{height:"600px"},children:"Loading OSDK media…"}):r.jsx("div",{style:{height:"600px"},children:r.jsx(p,{media:e.employeeDocuments})})},parameters:{docs:{source:{code:`import { PdfViewer } from "@osdk/react-components/experimental/pdf-viewer";

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
