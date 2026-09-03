import{j as r,M as s}from"./iframe-2mhl-t7p.js";import{P as p}from"./pdf-viewer-DQS7wZzk.js";import{E as d}from"./Employee-BAk2o20h.js";import{u as a}from"./useOsdkObject-BoJ5kku9.js";import"./preload-helper-2-bSzNok.js";import"./PdfViewer-BbOMjXC1.js";import"./index-DLwVeEDH.js";import"./BasePdfViewer-B6NL7utm.js";import"./BasePdfViewer.module.css-BNRN4xSN.js";import"./PdfViewerAnnotationLayer-CgSxGcph.js";import"./constants-DsXMS3N3.js";import"./usePdfDocument-BBYjBGOh.js";import"./PdfViewerOutlineSidebar-diPWW1OC.js";import"./PdfViewerSidebarHeader-CWBkQjxP.js";import"./useBaseUiId-Bh3N5ha8.js";import"./useControlled-DUeDJrRa.js";import"./CompositeRoot-OzzZWgB2.js";import"./CompositeItem-5J0YQgr0.js";import"./ToolbarRootContext-BOy6SvVL.js";import"./composite-BrIxwnLH.js";import"./svgIconContainer-CyuT4HfV.js";import"./PdfViewerSearchBar-DbqW1P4X.js";import"./chevron-up-ka17QwSZ.js";import"./chevron-down-e01h8LWn.js";import"./cross-BxadJhVG.js";import"./PdfViewerSidebar-9NlH5pCY.js";import"./index-CJy79Nz_.js";import"./index-OPTHOOv0.js";import"./index-Bu--4y7I.js";import"./PdfViewerToolbar-CXzdySZR.js";import"./Button-UyWDtgNb.js";import"./chevron-right-B0y7hFqh.js";import"./Input-I-tMjIxS.js";import"./search-D7Fjt3EB.js";import"./spin-BICA3t7j.js";import"./error-BiztdMkG.js";import"./withOsdkMetrics-OSElLXNz.js";import"./makeExternalStore-D2tKT-RY.js";const U={title:"Components/DocumentViewer/Renderers/PdfViewer",component:p,tags:["beta"],parameters:{controls:{expanded:!0}}},o={render:()=>{const{object:e,isLoading:n}=a(d,s);return n||!(e!=null&&e.employeeDocuments)?r.jsx("div",{style:{height:"600px"},children:"Loading OSDK media…"}):r.jsx("div",{style:{height:"600px"},children:r.jsx(p,{media:e.employeeDocuments})})},parameters:{docs:{source:{code:`import { PdfViewer } from "@osdk/react-components/experimental/pdf-viewer";

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
