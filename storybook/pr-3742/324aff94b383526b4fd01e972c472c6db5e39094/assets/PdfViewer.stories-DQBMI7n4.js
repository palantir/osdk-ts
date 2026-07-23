import{j as r,M as s}from"./iframe-Cos_ofCy.js";import{P as p}from"./pdf-viewer-Mpfad4QZ.js";import{E as d}from"./Employee-BAk2o20h.js";import{u as a}from"./useOsdkObject-CjeWlIPm.js";import"./preload-helper-CdGuEwVx.js";import"./PdfRenderer-BUx1sOsE.js";import"./index-DDSQGeHq.js";import"./PdfViewer-3dw3iUqA.js";import"./PdfViewer.module.css-DWZq1a1k.js";import"./PdfViewerAnnotationLayer-B-AqAYvE.js";import"./constants-DsXMS3N3.js";import"./usePdfDocument-DPC7BUCk.js";import"./PdfViewerOutlineSidebar-CeD7IyU6.js";import"./PdfViewerSidebarHeader-DjJwxzfv.js";import"./useBaseUiId-BoCR0mVM.js";import"./useControlled-CU8iec4I.js";import"./CompositeRoot-DjoI1JOC.js";import"./CompositeItem-CfU3YuOz.js";import"./ToolbarRootContext-uScdLbZ3.js";import"./composite-C2bzS_eC.js";import"./svgIconContainer-BOcgzqTL.js";import"./PdfViewerSearchBar-py7ChpZa.js";import"./chevron-up-AeNKhBdP.js";import"./chevron-down-DDQApabx.js";import"./cross-Cs_o1IBr.js";import"./PdfViewerSidebar-Cfj6sCEN.js";import"./index-Bw8KyJ0j.js";import"./index-D7gjn-bC.js";import"./index-C68uuJyt.js";import"./PdfViewerToolbar-D3ogAMam.js";import"./Button-DJJJIJ8U.js";import"./chevron-right-ChFkrmOZ.js";import"./Input-BKyhRKRB.js";import"./search-C9QPdOJ2.js";import"./spin-DozdMSq_.js";import"./error-DyQZ58wH.js";import"./withOsdkMetrics-0H3uZ0eq.js";import"./makeExternalStore-D4qNgwYa.js";const U={title:"Components/DocumentViewer/Renderers/PdfViewer",component:p,tags:["beta"],parameters:{controls:{expanded:!0}}},o={render:()=>{const{object:e,isLoading:n}=a(d,s);return n||!(e!=null&&e.employeeDocuments)?r.jsx("div",{style:{height:"600px"},children:"Loading OSDK media…"}):r.jsx("div",{style:{height:"600px"},children:r.jsx(p,{media:e.employeeDocuments})})},parameters:{docs:{source:{code:`import { PdfViewer } from "@osdk/react-components/experimental/pdf-viewer";

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
