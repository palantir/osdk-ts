import{j as r,M as s}from"./iframe-B9vRr-8o.js";import{P as p}from"./pdf-viewer-BWtkRoHN.js";import{E as d}from"./Employee-BAk2o20h.js";import{u as a}from"./useOsdkObject-B8XQBg0d.js";import"./preload-helper-CT6yiVJK.js";import"./PdfViewer-BmQ72CiD.js";import"./index-Db6wxNSm.js";import"./BasePdfViewer-BItVVRoE.js";import"./BasePdfViewer.module.css-BV3zBNix.js";import"./PdfViewerAnnotationLayer-BffYAo6J.js";import"./constants-DsXMS3N3.js";import"./usePdfDocument-CEOkICbW.js";import"./PdfViewerOutlineSidebar-Dv287WQj.js";import"./PdfViewerSidebarHeader-CIgAe9UA.js";import"./useBaseUiId-Zy-hPVme.js";import"./useControlled-Czmg4_Mq.js";import"./CompositeRoot-BTlAqEwn.js";import"./CompositeItem-CAhsvlmM.js";import"./ToolbarRootContext-BnF1ucj1.js";import"./composite-D-Ig3PPA.js";import"./svgIconContainer-jTmjY-5C.js";import"./PdfViewerSearchBar-BC1Cqxfo.js";import"./chevron-up-D0phQj8g.js";import"./chevron-down-KfZfPmTG.js";import"./cross-DS9XOep9.js";import"./PdfViewerSidebar-DFTfp5kZ.js";import"./index-DmmkcNZh.js";import"./index-BqLTNrL3.js";import"./index-BP6meDIf.js";import"./PdfViewerToolbar-BwoNtpVO.js";import"./Button-DInSh6Mg.js";import"./chevron-right-BFVRzzCa.js";import"./Input-49lOIosv.js";import"./search-BLFbd71b.js";import"./spin-C5KBgujv.js";import"./error-DU5bvt7m.js";import"./withOsdkMetrics-BZu7xMYv.js";import"./makeExternalStore-CO4PrvZd.js";const U={title:"Components/DocumentViewer/Renderers/PdfViewer",component:p,tags:["beta"],parameters:{controls:{expanded:!0}}},o={render:()=>{const{object:e,isLoading:n}=a(d,s);return n||!(e!=null&&e.employeeDocuments)?r.jsx("div",{style:{height:"600px"},children:"Loading OSDK media…"}):r.jsx("div",{style:{height:"600px"},children:r.jsx(p,{media:e.employeeDocuments})})},parameters:{docs:{source:{code:`import { PdfViewer } from "@osdk/react-components/experimental/pdf-viewer";

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
