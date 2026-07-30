import{j as r,M as s}from"./iframe-BKvHrTnY.js";import{P as p}from"./pdf-viewer-CS-u1Jdf.js";import{E as d}from"./Employee-BAk2o20h.js";import{u as a}from"./useOsdkObject-CcKTAN7P.js";import"./preload-helper-CoRksuzd.js";import"./PdfRenderer-By5FljlC.js";import"./index-rUQDaSAn.js";import"./PdfViewer-CiMNxuuR.js";import"./PdfViewer.module.css-BgzelqRr.js";import"./PdfViewerAnnotationLayer-CMiW-lkt.js";import"./constants-DsXMS3N3.js";import"./usePdfDocument-nbrL2o0u.js";import"./PdfViewerOutlineSidebar-Ck4liHBj.js";import"./PdfViewerSidebarHeader-CjR_eJWC.js";import"./useBaseUiId-CGTe-Nun.js";import"./useControlled-DhbqroXM.js";import"./CompositeRoot-BsnS5b8b.js";import"./CompositeItem-Duo2TAMh.js";import"./ToolbarRootContext-xvHuYAEc.js";import"./composite-BbDh-O6T.js";import"./svgIconContainer-PUQwmYf6.js";import"./PdfViewerSearchBar-C9xzeKfD.js";import"./chevron-up-BOGCSoF5.js";import"./chevron-down-DabCumzI.js";import"./cross-DA7ChnMu.js";import"./PdfViewerSidebar-BAsq_xWo.js";import"./index-X0S4TuAp.js";import"./index-BpNIUQVs.js";import"./index-CLKVOUxl.js";import"./PdfViewerToolbar-D3o43PBt.js";import"./Button-DuFY6WZV.js";import"./chevron-right-CxAoUsUK.js";import"./Input-C4eLCz5A.js";import"./search-Dbb6-sbu.js";import"./spin-9FaBbeK3.js";import"./error-DTZ2scD_.js";import"./withOsdkMetrics-4uldwMwY.js";import"./makeExternalStore-Da6NdYn7.js";const U={title:"Components/DocumentViewer/Renderers/PdfViewer",component:p,tags:["beta"],parameters:{controls:{expanded:!0}}},o={render:()=>{const{object:e,isLoading:n}=a(d,s);return n||!(e!=null&&e.employeeDocuments)?r.jsx("div",{style:{height:"600px"},children:"Loading OSDK media…"}):r.jsx("div",{style:{height:"600px"},children:r.jsx(p,{media:e.employeeDocuments})})},parameters:{docs:{source:{code:`import { PdfViewer } from "@osdk/react-components/experimental/pdf-viewer";

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
