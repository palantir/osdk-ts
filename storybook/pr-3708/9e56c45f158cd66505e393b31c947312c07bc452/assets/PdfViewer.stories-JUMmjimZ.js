import{j as r,M as s}from"./iframe-T6FPxE0K.js";import{P as p}from"./pdf-viewer-DNN6w7EM.js";import{E as d}from"./Employee-BAk2o20h.js";import{u as a}from"./useOsdkObject-a-5d8RsO.js";import"./preload-helper-DVJUo5vD.js";import"./PdfRenderer-BUNBfILm.js";import"./index-BlC5guul.js";import"./PdfViewer-DTq5dEjP.js";import"./PdfViewer.module.css-Dhvlvx1g.js";import"./PdfViewerAnnotationLayer-BAub3w6S.js";import"./constants-DsXMS3N3.js";import"./usePdfDocument-BpabKG3I.js";import"./PdfViewerOutlineSidebar-BUiSYxkH.js";import"./PdfViewerSidebarHeader-BGSu-iFx.js";import"./useBaseUiId-BnaU60oa.js";import"./useControlled-CfGuWGhW.js";import"./CompositeRoot-546OVfkz.js";import"./CompositeItem-D7f9jIF4.js";import"./ToolbarRootContext-onK0JDsx.js";import"./composite-Dy6c4U6m.js";import"./svgIconContainer-Bb-zIN4G.js";import"./PdfViewerSearchBar-DC-uocvp.js";import"./chevron-up-DPVNuzrz.js";import"./chevron-down-Dgx5LT3G.js";import"./cross-DSG_kDqr.js";import"./PdfViewerSidebar-EmCaZZM_.js";import"./index-BCnsaZdT.js";import"./index-fTG3ugIN.js";import"./index-dwgTPRac.js";import"./PdfViewerToolbar-BECgCSTa.js";import"./Button-Bua1XQqN.js";import"./chevron-right-Dzy2ZLZO.js";import"./Input-m9jOnIO0.js";import"./search-W_OdXqz5.js";import"./spin-IBAz0tuV.js";import"./error-BA6G8DtX.js";import"./withOsdkMetrics-DGIMaowm.js";import"./makeExternalStore-B24wNyzO.js";const U={title:"Components/DocumentViewer/Renderers/PdfViewer",component:p,tags:["beta"],parameters:{controls:{expanded:!0}}},o={render:()=>{const{object:e,isLoading:n}=a(d,s);return n||!(e!=null&&e.employeeDocuments)?r.jsx("div",{style:{height:"600px"},children:"Loading OSDK media…"}):r.jsx("div",{style:{height:"600px"},children:r.jsx(p,{media:e.employeeDocuments})})},parameters:{docs:{source:{code:`import { PdfViewer } from "@osdk/react-components/experimental/pdf-viewer";

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
