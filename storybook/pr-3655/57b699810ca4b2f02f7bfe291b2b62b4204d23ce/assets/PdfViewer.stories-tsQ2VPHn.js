import{j as r,M as s}from"./iframe-VIUjn1eL.js";import{P as p}from"./pdf-viewer-DdSxgo98.js";import{E as d}from"./Employee-BAk2o20h.js";import{u as a}from"./useOsdkObject-BrMIOs42.js";import"./preload-helper-ajOtfN6a.js";import"./PdfRenderer-DpKHbQSA.js";import"./index-Au1uUuUe.js";import"./PdfViewer-cpH1MILn.js";import"./PdfViewer.module.css-BZXV-O0H.js";import"./PdfViewerAnnotationLayer-D7idv9mt.js";import"./constants-DsXMS3N3.js";import"./usePdfDocument-7uBkOWQA.js";import"./PdfViewerOutlineSidebar-D4Vj2DEx.js";import"./PdfViewerSidebarHeader-Bfts5ibS.js";import"./useBaseUiId-B1kN4XqW.js";import"./useControlled-DegTIbWT.js";import"./CompositeRoot-B5esjQh_.js";import"./CompositeItem-DZC3pl9A.js";import"./ToolbarRootContext-Mx44cl2Z.js";import"./composite-BDYOoxUc.js";import"./svgIconContainer-ERmnaq0G.js";import"./PdfViewerSearchBar-BP1NSEJI.js";import"./chevron-up-DSCbL-Zz.js";import"./chevron-down-DBFJhWrj.js";import"./cross-CLapw4bX.js";import"./PdfViewerSidebar-C8OeHYsK.js";import"./index-CpLBKENT.js";import"./index-rsvx8CnG.js";import"./index-DymheiCL.js";import"./PdfViewerToolbar-CG23lqN3.js";import"./Button-DezfWdgT.js";import"./chevron-right-DNtcA2hP.js";import"./Input-yUu2PjNk.js";import"./search-CmgKahmk.js";import"./spin-DJYCLdtp.js";import"./error-D_2MdKNg.js";import"./withOsdkMetrics-DDmeV7Nc.js";import"./makeExternalStore-BrmSoAw8.js";const U={title:"Components/DocumentViewer/Renderers/PdfViewer",component:p,tags:["beta"],parameters:{controls:{expanded:!0}}},o={render:()=>{const{object:e,isLoading:n}=a(d,s);return n||!(e!=null&&e.employeeDocuments)?r.jsx("div",{style:{height:"600px"},children:"Loading OSDK media…"}):r.jsx("div",{style:{height:"600px"},children:r.jsx(p,{media:e.employeeDocuments})})},parameters:{docs:{source:{code:`import { PdfViewer } from "@osdk/react-components/experimental/pdf-viewer";

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
