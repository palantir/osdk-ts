import{j as r,M as s}from"./iframe-DHJcRMo1.js";import{P as p}from"./pdf-viewer-LRr-6ceP.js";import{E as d}from"./Employee-BAk2o20h.js";import{u as a}from"./useOsdkObject-B62WOBYV.js";import"./preload-helper-BrigsJda.js";import"./PdfRenderer-DOjUqtHR.js";import"./index-vko8ddJv.js";import"./PdfViewer-CZvitH7T.js";import"./PdfViewer.module.css-f7t70XBI.js";import"./PdfViewerAnnotationLayer-2GMS6RtG.js";import"./constants-DsXMS3N3.js";import"./usePdfDocument-D7_0jcMk.js";import"./PdfViewerOutlineSidebar-CjrcuDM3.js";import"./PdfViewerSidebarHeader-BudvPzYm.js";import"./useBaseUiId-67EydAK4.js";import"./useControlled-kucBpkMe.js";import"./CompositeRoot-CqcCmUpD.js";import"./CompositeItem-BFFuJeHH.js";import"./ToolbarRootContext-Cg9GYqXm.js";import"./composite-BVMojmvB.js";import"./svgIconContainer-C0gcdsgX.js";import"./PdfViewerSearchBar-CAX2d9y0.js";import"./chevron-up-D7t86zdc.js";import"./chevron-down-Coyt6YKY.js";import"./cross-6JjUZ1sO.js";import"./PdfViewerSidebar-ChPNTwhs.js";import"./index-DXiwM2ji.js";import"./index-UHlx9MBB.js";import"./index-tuGOm3ZG.js";import"./PdfViewerToolbar-DYz5TmtB.js";import"./Button-DD6En_dP.js";import"./chevron-right-bKcT3-uo.js";import"./Input-BNa8a8E-.js";import"./search-Be6SHPQr.js";import"./spin-WrrYUQU8.js";import"./error-DiK0Ne3K.js";import"./withOsdkMetrics-Cdbiilck.js";import"./makeExternalStore-BqO749be.js";const U={title:"Components/DocumentViewer/Renderers/PdfViewer",component:p,tags:["beta"],parameters:{controls:{expanded:!0}}},o={render:()=>{const{object:e,isLoading:n}=a(d,s);return n||!(e!=null&&e.employeeDocuments)?r.jsx("div",{style:{height:"600px"},children:"Loading OSDK media…"}):r.jsx("div",{style:{height:"600px"},children:r.jsx(p,{media:e.employeeDocuments})})},parameters:{docs:{source:{code:`import { PdfViewer } from "@osdk/react-components/experimental/pdf-viewer";

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
