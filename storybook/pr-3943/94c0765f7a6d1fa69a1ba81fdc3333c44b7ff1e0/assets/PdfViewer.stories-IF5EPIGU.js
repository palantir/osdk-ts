import{j as r,M as s}from"./iframe-BdjRDCo-.js";import{P as p}from"./pdf-viewer-DPfdD8BA.js";import{E as d}from"./Employee-BAk2o20h.js";import{u as a}from"./useOsdkObject-06gY0eAU.js";import"./preload-helper-BsLdtZok.js";import"./PdfViewer-DBnxeXcf.js";import"./index-47c2OpeK.js";import"./BasePdfViewer-2v-4JSNP.js";import"./BasePdfViewer.module.css--dYT4ALC.js";import"./PdfViewerAnnotationLayer-BaUg7fXF.js";import"./constants-DsXMS3N3.js";import"./usePdfDocument-mJy-oy9f.js";import"./PdfViewerOutlineSidebar-wDuIW4T1.js";import"./PdfViewerSidebarHeader-CDy06nz0.js";import"./useBaseUiId-D_XUMLa4.js";import"./useControlled-B8Jz7rQz.js";import"./CompositeRoot-CKxTB9k2.js";import"./CompositeItem-C9-QWuFp.js";import"./ToolbarRootContext-B-UKwdIZ.js";import"./composite-CKlKqtP8.js";import"./svgIconContainer-CQO2iyCb.js";import"./PdfViewerSearchBar-CA3syS0y.js";import"./chevron-up-BC1GcLNu.js";import"./chevron-down-CZ95xNZC.js";import"./cross-B5GzLpqa.js";import"./PdfViewerSidebar-CBMxOIKL.js";import"./index-DczRP-BI.js";import"./index-DauSPNF0.js";import"./index-C3FIy_al.js";import"./PdfViewerToolbar-QmeJgeCk.js";import"./Button-BL8FosPK.js";import"./chevron-right--i-1oe-g.js";import"./Input-CxfR2yqt.js";import"./search-C7zMm79O.js";import"./spin-w6bS0RcP.js";import"./error-B9XMEbgf.js";import"./withOsdkMetrics-Cd9aI-bB.js";import"./makeExternalStore-BzujWOSe.js";const U={title:"Components/DocumentViewer/Renderers/PdfViewer",component:p,tags:["beta"],parameters:{controls:{expanded:!0}}},o={render:()=>{const{object:e,isLoading:n}=a(d,s);return n||!(e!=null&&e.employeeDocuments)?r.jsx("div",{style:{height:"600px"},children:"Loading OSDK media…"}):r.jsx("div",{style:{height:"600px"},children:r.jsx(p,{media:e.employeeDocuments})})},parameters:{docs:{source:{code:`import { PdfViewer } from "@osdk/react-components/experimental/pdf-viewer";

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
