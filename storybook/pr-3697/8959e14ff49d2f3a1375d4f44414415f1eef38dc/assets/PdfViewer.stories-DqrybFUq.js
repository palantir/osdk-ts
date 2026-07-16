import{j as r,M as s}from"./iframe-ypGDbWmZ.js";import{P as p}from"./pdf-viewer-JaoVjdDy.js";import{E as d}from"./Employee-BAk2o20h.js";import{u as a}from"./useOsdkObject-BjlQczd1.js";import"./preload-helper-DOKq-ADj.js";import"./PdfRenderer-D0s6XqTN.js";import"./index-Bb1fXhg6.js";import"./PdfViewer-CK5l250O.js";import"./PdfViewer.module.css-crZuTKvS.js";import"./PdfViewerAnnotationLayer-CzE4BE93.js";import"./constants-DsXMS3N3.js";import"./usePdfDocument-w41BGfyX.js";import"./PdfViewerOutlineSidebar-DkTSkPL_.js";import"./PdfViewerSidebarHeader-oAsAAD9Z.js";import"./useBaseUiId-C3R3oVzO.js";import"./useControlled-BuHWxoI9.js";import"./CompositeRoot-D6MuSX11.js";import"./CompositeItem-B2ZiZyws.js";import"./ToolbarRootContext-DKmaOtqD.js";import"./composite-OPXoirfb.js";import"./svgIconContainer-DhmJGll4.js";import"./PdfViewerSearchBar-BBQW7TKP.js";import"./chevron-up-dK24Ag7u.js";import"./chevron-down-Cl0J7uZD.js";import"./cross-BLrUbUvw.js";import"./PdfViewerSidebar-BfzWP9xp.js";import"./index-DkFWgfXu.js";import"./index-Bz5FfFNw.js";import"./index-raFGnCfX.js";import"./PdfViewerToolbar-IO5QxV96.js";import"./Button-DGelSHBk.js";import"./chevron-right-DYejPnj4.js";import"./Input-BNwGntRi.js";import"./search-C-NpwX8I.js";import"./spin-BmJ-hzY5.js";import"./error-DNRz_71B.js";import"./withOsdkMetrics-G3X7P_JF.js";import"./makeExternalStore-CuxCTWSG.js";const U={title:"Components/DocumentViewer/Renderers/PdfViewer",component:p,tags:["beta"],parameters:{controls:{expanded:!0}}},o={render:()=>{const{object:e,isLoading:n}=a(d,s);return n||!(e!=null&&e.employeeDocuments)?r.jsx("div",{style:{height:"600px"},children:"Loading OSDK media…"}):r.jsx("div",{style:{height:"600px"},children:r.jsx(p,{media:e.employeeDocuments})})},parameters:{docs:{source:{code:`import { PdfViewer } from "@osdk/react-components/experimental/pdf-viewer";

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
