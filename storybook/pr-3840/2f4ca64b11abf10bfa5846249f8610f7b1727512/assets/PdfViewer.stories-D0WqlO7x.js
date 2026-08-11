import{j as r,M as s}from"./iframe-BYn0Dbkf.js";import{P as p}from"./pdf-viewer-BoV3Uqbp.js";import{E as d}from"./Employee-BAk2o20h.js";import{u as a}from"./useOsdkObject-OHuSQPav.js";import"./preload-helper-Bs3XUXmU.js";import"./PdfRenderer-DwD0Tn1-.js";import"./index-DAPmu22T.js";import"./PdfViewer-3mOvEFzQ.js";import"./PdfViewer.module.css-Bi6gbTtm.js";import"./PdfViewerAnnotationLayer-Bwt5UFBD.js";import"./constants-DsXMS3N3.js";import"./usePdfDocument-CgVPP-X4.js";import"./PdfViewerOutlineSidebar-B40YwFeB.js";import"./PdfViewerSidebarHeader-A9Y98weK.js";import"./useBaseUiId-BF9dGCHt.js";import"./useControlled-BjeGab0J.js";import"./CompositeRoot-DuK0Qz0S.js";import"./CompositeItem-D_irOX6v.js";import"./ToolbarRootContext-CIeppiht.js";import"./composite-DJ1g0dtg.js";import"./svgIconContainer-BVGjJ7Ho.js";import"./PdfViewerSearchBar-DAPH56Eo.js";import"./chevron-up-oitcj6mW.js";import"./chevron-down-CkcBV-EM.js";import"./cross-BXV7hkb7.js";import"./PdfViewerSidebar-C_QMj3PE.js";import"./index-BcYpOZ5o.js";import"./index-XbPpfGjN.js";import"./index-3eUfjQeA.js";import"./PdfViewerToolbar-rKZLvYG-.js";import"./Button-SDlJ1SYG.js";import"./chevron-right-D-8rfpCA.js";import"./Input-JHNZlMmd.js";import"./search-BHLX4gDD.js";import"./spin-zX9FGWGZ.js";import"./error-Ca0TYJkV.js";import"./withOsdkMetrics-C6gKOAoe.js";import"./makeExternalStore-yw69iLs7.js";const U={title:"Components/DocumentViewer/Renderers/PdfViewer",component:p,tags:["beta"],parameters:{controls:{expanded:!0}}},o={render:()=>{const{object:e,isLoading:n}=a(d,s);return n||!(e!=null&&e.employeeDocuments)?r.jsx("div",{style:{height:"600px"},children:"Loading OSDK media…"}):r.jsx("div",{style:{height:"600px"},children:r.jsx(p,{media:e.employeeDocuments})})},parameters:{docs:{source:{code:`import { PdfViewer } from "@osdk/react-components/experimental/pdf-viewer";

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
