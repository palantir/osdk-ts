import{j as r,M as s}from"./iframe-SSBca1_R.js";import{P as p}from"./pdf-viewer-pt23Xfds.js";import{E as d}from"./Employee-BAk2o20h.js";import{u as a}from"./useOsdkObject-CyibquxP.js";import"./preload-helper-D6lMjEDW.js";import"./PdfRenderer-di3IXrtw.js";import"./index-T2URQXQt.js";import"./PdfViewer-u377_qva.js";import"./PdfViewer.module.css-BxxZCVjw.js";import"./PdfViewerAnnotationLayer-DiTxe0V_.js";import"./constants-DsXMS3N3.js";import"./usePdfDocument-C3YbPtuX.js";import"./PdfViewerOutlineSidebar-BPDm46zK.js";import"./PdfViewerSidebarHeader-BWnjpkJu.js";import"./useBaseUiId-fawM7YtQ.js";import"./useControlled-CS_or-Yo.js";import"./CompositeRoot-7VMH9aKn.js";import"./CompositeItem-B3hudRrX.js";import"./ToolbarRootContext-B6NfFDs2.js";import"./composite-bxrdsVsm.js";import"./svgIconContainer-HIapwXRy.js";import"./PdfViewerSearchBar-D94J19cw.js";import"./chevron-up-CylaVWyQ.js";import"./chevron-down-Dab1IKra.js";import"./cross-DYAXqWW2.js";import"./PdfViewerSidebar-BRm8vN2g.js";import"./index-CqFgTtxT.js";import"./index-oSaY7MBE.js";import"./index-D5eHMYsk.js";import"./PdfViewerToolbar-IJ6RNKYu.js";import"./Button-AgdhMTFe.js";import"./chevron-right-9WwOxSwC.js";import"./Input-CtJlf2nQ.js";import"./search-BN4BO4pT.js";import"./spin-DQ6ULfsN.js";import"./error-Bjv06Ito.js";import"./withOsdkMetrics-D7v0VQYr.js";import"./makeExternalStore-BXWK3of-.js";const U={title:"Components/DocumentViewer/Renderers/PdfViewer",component:p,tags:["beta"],parameters:{controls:{expanded:!0}}},o={render:()=>{const{object:e,isLoading:n}=a(d,s);return n||!(e!=null&&e.employeeDocuments)?r.jsx("div",{style:{height:"600px"},children:"Loading OSDK media…"}):r.jsx("div",{style:{height:"600px"},children:r.jsx(p,{media:e.employeeDocuments})})},parameters:{docs:{source:{code:`import { PdfViewer } from "@osdk/react-components/experimental/pdf-viewer";

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
