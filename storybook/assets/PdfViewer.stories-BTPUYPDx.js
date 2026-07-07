import{j as r,M as s}from"./iframe-BQ5bIaEt.js";import{P as p}from"./pdf-viewer-BudoGIhh.js";import{E as d}from"./Employee-BAk2o20h.js";import{u as a}from"./useOsdkObject-Gbmu1u8y.js";import"./preload-helper-Dp1pzeXC.js";import"./PdfRenderer-ybVwd9uY.js";import"./index-CxTof4NU.js";import"./PdfViewer-BQkuWHtx.js";import"./PdfViewer.module.css-DgmLx5ZN.js";import"./PdfViewerAnnotationLayer-nL9yKJ5R.js";import"./constants-DsXMS3N3.js";import"./usePdfDocument-DjfxARvy.js";import"./PdfViewerOutlineSidebar-wL8FuvRn.js";import"./PdfViewerSidebarHeader-_ZEwoQkT.js";import"./useBaseUiId-BssyuYZd.js";import"./useControlled-C0kanQvr.js";import"./CompositeRoot-kbQ1cOsT.js";import"./CompositeItem-B9GjdRlN.js";import"./ToolbarRootContext-DG1gzZaQ.js";import"./composite-C7Kgyyjz.js";import"./svgIconContainer-DxdbcvvB.js";import"./PdfViewerSearchBar-DqM8ABe8.js";import"./chevron-up-YsVky1q5.js";import"./chevron-down-BXiYQBlg.js";import"./cross-oFBvDg8D.js";import"./PdfViewerSidebar-DofVRea-.js";import"./index-JSWJrBox.js";import"./index-hpDNR9J8.js";import"./index-DJPOsElS.js";import"./PdfViewerToolbar-YSmebVan.js";import"./Button-DmOBiAMv.js";import"./chevron-right-BfNuTJde.js";import"./Input-BpgW1-MB.js";import"./search-NcartjHP.js";import"./spin-B4KJwJun.js";import"./error-CS2in6u-.js";import"./withOsdkMetrics-COldZ75L.js";import"./makeExternalStore-BziXXW6L.js";const U={title:"Components/DocumentViewer/Renderers/PdfViewer",component:p,tags:["beta"],parameters:{controls:{expanded:!0}}},o={render:()=>{const{object:e,isLoading:n}=a(d,s);return n||!(e!=null&&e.employeeDocuments)?r.jsx("div",{style:{height:"600px"},children:"Loading OSDK media…"}):r.jsx("div",{style:{height:"600px"},children:r.jsx(p,{media:e.employeeDocuments})})},parameters:{docs:{source:{code:`import { PdfViewer } from "@osdk/react-components/experimental/pdf-viewer";

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
