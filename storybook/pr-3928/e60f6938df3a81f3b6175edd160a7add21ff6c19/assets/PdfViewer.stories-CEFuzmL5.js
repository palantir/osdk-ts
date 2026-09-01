import{j as r,M as s}from"./iframe-DWCUNAgH.js";import{P as p}from"./pdf-viewer-DRJGT2g2.js";import{E as d}from"./Employee-BAk2o20h.js";import{u as a}from"./useOsdkObject-x3YPAiaE.js";import"./preload-helper-CllRkgj6.js";import"./PdfViewer-D6KABAMz.js";import"./index-vPfXSe3i.js";import"./BasePdfViewer-B45KDcGE.js";import"./BasePdfViewer.module.css-fhIxJcmV.js";import"./PdfViewerAnnotationLayer-D342mnbu.js";import"./constants-DsXMS3N3.js";import"./usePdfDocument-D5jRM6lA.js";import"./PdfViewerOutlineSidebar-Co7oONCY.js";import"./PdfViewerSidebarHeader-CqSMvj6z.js";import"./useBaseUiId-CYOEG7DI.js";import"./useControlled-Ba-PlL56.js";import"./CompositeRoot-CrEaYRoy.js";import"./CompositeItem-CVjfjLok.js";import"./ToolbarRootContext-cpZFd1K3.js";import"./composite-DZBVWi3t.js";import"./svgIconContainer-BHOQdzaM.js";import"./PdfViewerSearchBar-DL2clCrC.js";import"./chevron-up-D1Vkvt4M.js";import"./chevron-down-Bsil1jJ0.js";import"./cross-s4mYc0O3.js";import"./PdfViewerSidebar-BYcloBA8.js";import"./index-D14ZBxmP.js";import"./index-Qe8PCUYJ.js";import"./index-cPCy3bFL.js";import"./PdfViewerToolbar-9WeapfGD.js";import"./Button-D7K0Sf4T.js";import"./chevron-right-CLkt7iWI.js";import"./Input-BMNb_hi9.js";import"./search-D7gKGmcx.js";import"./spin-tKHTXEIS.js";import"./error-_xKRYfae.js";import"./withOsdkMetrics-DUDoeULv.js";import"./makeExternalStore-C7M61MFA.js";const U={title:"Components/DocumentViewer/Renderers/PdfViewer",component:p,tags:["beta"],parameters:{controls:{expanded:!0}}},o={render:()=>{const{object:e,isLoading:n}=a(d,s);return n||!(e!=null&&e.employeeDocuments)?r.jsx("div",{style:{height:"600px"},children:"Loading OSDK media…"}):r.jsx("div",{style:{height:"600px"},children:r.jsx(p,{media:e.employeeDocuments})})},parameters:{docs:{source:{code:`import { PdfViewer } from "@osdk/react-components/experimental/pdf-viewer";

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
