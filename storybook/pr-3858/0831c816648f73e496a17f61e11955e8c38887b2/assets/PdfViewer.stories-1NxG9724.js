import{j as r,M as s}from"./iframe-KsjdEO7I.js";import{P as p}from"./pdf-viewer-CGrJBSRV.js";import{E as d}from"./Employee-BAk2o20h.js";import{u as a}from"./useOsdkObject-DwKX-YKA.js";import"./preload-helper-C0pJc9t5.js";import"./PdfViewer-BmyDRY3r.js";import"./index-BZRO3JpH.js";import"./BasePdfViewer-BNgs-j7j.js";import"./BasePdfViewer.module.css-BCSR5Omg.js";import"./PdfViewerAnnotationLayer-CTWIc6Ew.js";import"./constants-DsXMS3N3.js";import"./usePdfDocument-DHwDI49p.js";import"./PdfViewerOutlineSidebar-B6-vMmRG.js";import"./PdfViewerSidebarHeader-DqLfsLeJ.js";import"./useBaseUiId-C5JviLwb.js";import"./useControlled-gVlU2BHL.js";import"./CompositeRoot-CTEIQ_RS.js";import"./CompositeItem-CmqFJQHv.js";import"./ToolbarRootContext-Dc9sSpUa.js";import"./composite-ByWaRsZl.js";import"./svgIconContainer-BGAWhN04.js";import"./PdfViewerSearchBar-DgrGKYn6.js";import"./chevron-up-CMDQhVpN.js";import"./chevron-down-CUpqK55l.js";import"./cross-CWhIw0VB.js";import"./PdfViewerSidebar-D9uQ4cDH.js";import"./index-BhHreNeB.js";import"./index-DvmmtGln.js";import"./index-C8vmqYWN.js";import"./PdfViewerToolbar-DN1amDnp.js";import"./Button-ilD2Ywfa.js";import"./chevron-right-DV6WAXAv.js";import"./Input-C9qK0nTt.js";import"./search-DGehlEKr.js";import"./spin-CWNuKNsm.js";import"./error-s9sAxwq2.js";import"./withOsdkMetrics-BAP0ApJK.js";import"./makeExternalStore-C8Usq2x_.js";const U={title:"Components/DocumentViewer/Renderers/PdfViewer",component:p,tags:["beta"],parameters:{controls:{expanded:!0}}},o={render:()=>{const{object:e,isLoading:n}=a(d,s);return n||!(e!=null&&e.employeeDocuments)?r.jsx("div",{style:{height:"600px"},children:"Loading OSDK media…"}):r.jsx("div",{style:{height:"600px"},children:r.jsx(p,{media:e.employeeDocuments})})},parameters:{docs:{source:{code:`import { PdfViewer } from "@osdk/react-components/experimental/pdf-viewer";

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
