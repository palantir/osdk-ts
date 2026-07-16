import{j as r,M as s}from"./iframe-DCDT_GEC.js";import{P as p}from"./pdf-viewer-BAgmiXMT.js";import{E as d}from"./Employee-BAk2o20h.js";import{u as a}from"./useOsdkObject-Ca0cXo9z.js";import"./preload-helper-Bib2WHN0.js";import"./PdfRenderer-D1Tn2AI3.js";import"./index-DQF2gROF.js";import"./PdfViewer-DTSNZQbz.js";import"./PdfViewer.module.css-BfXntsZk.js";import"./PdfViewerAnnotationLayer-CPhs8nDt.js";import"./constants-DsXMS3N3.js";import"./usePdfDocument-UNGmZWqM.js";import"./PdfViewerOutlineSidebar-C_7xSzSI.js";import"./PdfViewerSidebarHeader-C5tkY816.js";import"./useBaseUiId-FuvCdJd6.js";import"./useControlled-CPbv6-hY.js";import"./CompositeRoot-BEZqsBxN.js";import"./CompositeItem-EJcBvamT.js";import"./ToolbarRootContext-TK-ZGDXl.js";import"./composite-DH_q14qD.js";import"./svgIconContainer-zVAc1HP4.js";import"./PdfViewerSearchBar-DfVHuhke.js";import"./chevron-up-cjboUtyO.js";import"./chevron-down-Dn1IJT36.js";import"./cross-D0ezV9wV.js";import"./PdfViewerSidebar-Cyyo-FeF.js";import"./index-C_ovaKx1.js";import"./index-CU-EXkPD.js";import"./index-C5ieCprR.js";import"./PdfViewerToolbar-DTvb5X84.js";import"./Button-DYyYqqv7.js";import"./chevron-right-BWTrgSu5.js";import"./Input-D0Bf3WdC.js";import"./search-D9zbOR7d.js";import"./spin-B3N2bgi5.js";import"./error-DzLrnjHD.js";import"./withOsdkMetrics-DnKnMeSY.js";import"./makeExternalStore-5BoqGt7e.js";const U={title:"Components/DocumentViewer/Renderers/PdfViewer",component:p,tags:["beta"],parameters:{controls:{expanded:!0}}},o={render:()=>{const{object:e,isLoading:n}=a(d,s);return n||!(e!=null&&e.employeeDocuments)?r.jsx("div",{style:{height:"600px"},children:"Loading OSDK media…"}):r.jsx("div",{style:{height:"600px"},children:r.jsx(p,{media:e.employeeDocuments})})},parameters:{docs:{source:{code:`import { PdfViewer } from "@osdk/react-components/experimental/pdf-viewer";

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
