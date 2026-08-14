import{j as r,M as s}from"./iframe-iQYe401C.js";import{P as p}from"./pdf-viewer-BfIdnTI0.js";import{E as d}from"./Employee-BAk2o20h.js";import{u as a}from"./useOsdkObject-CU2eBLHz.js";import"./preload-helper-BJxdJnS2.js";import"./PdfViewer-BJH93PSR.js";import"./index-Cj4wtDol.js";import"./BasePdfViewer-OTjBqQfE.js";import"./BasePdfViewer.module.css-Dqp7EQ9D.js";import"./PdfViewerAnnotationLayer-C0B3FcmG.js";import"./constants-DsXMS3N3.js";import"./usePdfDocument-BvyvwLhD.js";import"./PdfViewerOutlineSidebar-BrWgq152.js";import"./PdfViewerSidebarHeader-DY0M9wp8.js";import"./useBaseUiId-BaHVsYFy.js";import"./useControlled-DFWRskTz.js";import"./CompositeRoot-C1Ga4Sbd.js";import"./CompositeItem-CnHJu7Fq.js";import"./ToolbarRootContext-Qv2LHZju.js";import"./composite-XRaaCNpo.js";import"./svgIconContainer-D--fuUS3.js";import"./PdfViewerSearchBar-DYdyDxRt.js";import"./chevron-up-DQcZwPwJ.js";import"./chevron-down-CJ48f6Cy.js";import"./cross-TYvUZ_zv.js";import"./PdfViewerSidebar-uWDWpDXI.js";import"./index-BtxoyDek.js";import"./index-CdUd9ljx.js";import"./index-CRQmWOJF.js";import"./PdfViewerToolbar-CrfcOjeJ.js";import"./Button-Cg1RHP_F.js";import"./chevron-right-CAMZ1ENC.js";import"./Input-BwZPvKdY.js";import"./search-B3fBbeLu.js";import"./spin-C5e8CVRZ.js";import"./error-5BtLRQh_.js";import"./withOsdkMetrics-BYb2lN1I.js";import"./makeExternalStore-CHwacdcE.js";const U={title:"Components/DocumentViewer/Renderers/PdfViewer",component:p,tags:["beta"],parameters:{controls:{expanded:!0}}},o={render:()=>{const{object:e,isLoading:n}=a(d,s);return n||!(e!=null&&e.employeeDocuments)?r.jsx("div",{style:{height:"600px"},children:"Loading OSDK media…"}):r.jsx("div",{style:{height:"600px"},children:r.jsx(p,{media:e.employeeDocuments})})},parameters:{docs:{source:{code:`import { PdfViewer } from "@osdk/react-components/experimental/pdf-viewer";

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
