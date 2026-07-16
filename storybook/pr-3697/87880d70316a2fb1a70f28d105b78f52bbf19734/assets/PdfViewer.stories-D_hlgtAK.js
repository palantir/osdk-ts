import{j as r,M as s}from"./iframe-V5Dsqq0d.js";import{P as p}from"./pdf-viewer-CryvG3BS.js";import{E as d}from"./Employee-BAk2o20h.js";import{u as a}from"./useOsdkObject-Ch4UyPy9.js";import"./preload-helper-Bthw__r8.js";import"./PdfRenderer-MCtZNUba.js";import"./index-B75_VI1p.js";import"./PdfViewer-B6yxH39B.js";import"./PdfViewer.module.css-D9iTqENc.js";import"./PdfViewerAnnotationLayer-BR4Z06cM.js";import"./constants-DsXMS3N3.js";import"./usePdfDocument-XpeLiQ6q.js";import"./PdfViewerOutlineSidebar-B0kwBVTc.js";import"./PdfViewerSidebarHeader-DAfF1OtL.js";import"./useBaseUiId-DXRKShIH.js";import"./useControlled-B6wVKPoP.js";import"./CompositeRoot-Co_R34Wn.js";import"./CompositeItem-DctY2Vmm.js";import"./ToolbarRootContext-Dxo6gOUC.js";import"./composite-hb-h17Su.js";import"./svgIconContainer-Cz3IKSsl.js";import"./PdfViewerSearchBar-D80g31e9.js";import"./chevron-up-DbnpGJUB.js";import"./chevron-down-CweBSDsu.js";import"./cross-jbRB2TJp.js";import"./PdfViewerSidebar-B3SPoXvb.js";import"./index-xE_yDc94.js";import"./index-DgUBVLOU.js";import"./index-_BMAZb8P.js";import"./PdfViewerToolbar-_pH9uS-3.js";import"./Button-tYsz5pPM.js";import"./chevron-right-DFXn3UT9.js";import"./Input-Ck61Hw0f.js";import"./search-Dfvk5b0g.js";import"./spin-CJ37xOag.js";import"./error-BmuFdri0.js";import"./withOsdkMetrics-DCCDg2XQ.js";import"./makeExternalStore-B7BZElb1.js";const U={title:"Components/DocumentViewer/Renderers/PdfViewer",component:p,tags:["beta"],parameters:{controls:{expanded:!0}}},o={render:()=>{const{object:e,isLoading:n}=a(d,s);return n||!(e!=null&&e.employeeDocuments)?r.jsx("div",{style:{height:"600px"},children:"Loading OSDK media…"}):r.jsx("div",{style:{height:"600px"},children:r.jsx(p,{media:e.employeeDocuments})})},parameters:{docs:{source:{code:`import { PdfViewer } from "@osdk/react-components/experimental/pdf-viewer";

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
