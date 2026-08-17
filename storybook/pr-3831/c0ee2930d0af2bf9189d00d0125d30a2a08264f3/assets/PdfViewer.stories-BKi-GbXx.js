import{j as r,M as s}from"./iframe-Dwq9wrDt.js";import{P as p}from"./pdf-viewer-KSTUPosJ.js";import{E as d}from"./Employee-BAk2o20h.js";import{u as a}from"./useOsdkObject-Bix5zwPA.js";import"./preload-helper-B1owdDsL.js";import"./PdfViewer-D6mZEf5a.js";import"./index-DH5QrWNc.js";import"./BasePdfViewer-BZJZXnNr.js";import"./BasePdfViewer.module.css-BbIgOvNB.js";import"./PdfViewerAnnotationLayer-Fs8P5U80.js";import"./constants-DsXMS3N3.js";import"./usePdfDocument-DhQ-XuWL.js";import"./PdfViewerOutlineSidebar-ir22b8PR.js";import"./PdfViewerSidebarHeader-CH9HxsNp.js";import"./useBaseUiId-B7nN8GdQ.js";import"./useControlled-Fc1Z38Dl.js";import"./CompositeRoot-FEeGuvat.js";import"./CompositeItem-C4EX3fG2.js";import"./ToolbarRootContext-D7rqNdCo.js";import"./composite-CEGLGHiv.js";import"./svgIconContainer-D0D9W8JM.js";import"./PdfViewerSearchBar-DOfO1jiS.js";import"./chevron-up-BPfq0L7j.js";import"./chevron-down-BvKwnLh6.js";import"./cross-bOMperPh.js";import"./PdfViewerSidebar-22xDGrw1.js";import"./index-C3biqhR2.js";import"./index-D7NxJNil.js";import"./index-CP796jUP.js";import"./PdfViewerToolbar-B354O1_3.js";import"./Button-D7JoiY-s.js";import"./chevron-right-DuPG5ctX.js";import"./Input-Cx88AEdI.js";import"./search-BMSwG6Z-.js";import"./spin-CU5Dfu_m.js";import"./error-OKwjq5IS.js";import"./withOsdkMetrics-DWFHC7AK.js";import"./makeExternalStore-CaAgBHnr.js";const U={title:"Components/DocumentViewer/Renderers/PdfViewer",component:p,tags:["beta"],parameters:{controls:{expanded:!0}}},o={render:()=>{const{object:e,isLoading:n}=a(d,s);return n||!(e!=null&&e.employeeDocuments)?r.jsx("div",{style:{height:"600px"},children:"Loading OSDK media…"}):r.jsx("div",{style:{height:"600px"},children:r.jsx(p,{media:e.employeeDocuments})})},parameters:{docs:{source:{code:`import { PdfViewer } from "@osdk/react-components/experimental/pdf-viewer";

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
