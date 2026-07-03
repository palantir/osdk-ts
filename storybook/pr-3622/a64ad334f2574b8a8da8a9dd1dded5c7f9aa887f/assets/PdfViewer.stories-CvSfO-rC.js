import{j as r,M as s}from"./iframe-fTHeOU9e.js";import{P as p}from"./pdf-viewer-DS4feJl6.js";import{E as d}from"./Employee-BAk2o20h.js";import{u as a}from"./useOsdkObject-FSES8Y9d.js";import"./preload-helper-DUeFVirN.js";import"./PdfRenderer-BaUy99Bl.js";import"./index-DdvlSDKR.js";import"./PdfViewer-CM86_npk.js";import"./PdfViewer.module.css-DOiZS8gQ.js";import"./PdfViewerAnnotationLayer-sdBV9RBF.js";import"./constants-DsXMS3N3.js";import"./usePdfDocument-C8rv4CKG.js";import"./PdfViewerOutlineSidebar-CO7lYcwn.js";import"./PdfViewerSidebarHeader-D6zh06Xh.js";import"./useBaseUiId-C39bGUma.js";import"./useControlled-DZWSLqlS.js";import"./CompositeRoot-CFJ-AnEs.js";import"./CompositeItem-Zcd7z74I.js";import"./ToolbarRootContext-DrZLqzzc.js";import"./composite-BZWXkR4S.js";import"./svgIconContainer-CGQ29GAT.js";import"./PdfViewerSearchBar-F_6sRjr8.js";import"./chevron-up-IFAuYfXA.js";import"./chevron-down-nHkGM0vO.js";import"./cross-CDJ6pmvk.js";import"./PdfViewerSidebar-D_337SXl.js";import"./index-81aw2kEM.js";import"./index-DAQi22VX.js";import"./index-BGF8JbBC.js";import"./PdfViewerToolbar-CSZ_UTvG.js";import"./Button-C0ysNRwo.js";import"./chevron-right-4FD9ok5S.js";import"./Input-nZbFJSmM.js";import"./search-BWFnuRRX.js";import"./spin-Bn1E6FBR.js";import"./error-DnHe9Z1y.js";import"./withOsdkMetrics-Dub_hgsh.js";import"./makeExternalStore-B0j55Dv3.js";const U={title:"Components/DocumentViewer/Renderers/PdfViewer",component:p,tags:["beta"],parameters:{controls:{expanded:!0}}},o={render:()=>{const{object:e,isLoading:n}=a(d,s);return n||!(e!=null&&e.employeeDocuments)?r.jsx("div",{style:{height:"600px"},children:"Loading OSDK media…"}):r.jsx("div",{style:{height:"600px"},children:r.jsx(p,{media:e.employeeDocuments})})},parameters:{docs:{source:{code:`import { PdfViewer } from "@osdk/react-components/experimental/pdf-viewer";

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
