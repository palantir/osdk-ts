import{j as r,M as s}from"./iframe-BxhNzdCJ.js";import{P as p}from"./pdf-viewer-BWPr9Phr.js";import{E as d}from"./Employee-BAk2o20h.js";import{u as a}from"./useOsdkObject-q_tlmxhG.js";import"./preload-helper-Ci3X22NU.js";import"./PdfRenderer-DneLakPd.js";import"./index-fanh_WPF.js";import"./PdfViewer-B1RoGN0v.js";import"./PdfViewer.module.css-C8UipMU1.js";import"./PdfViewerAnnotationLayer-OicKBQrm.js";import"./constants-DsXMS3N3.js";import"./usePdfDocument-BA8diN8f.js";import"./PdfViewerOutlineSidebar-CbhEVjjl.js";import"./PdfViewerSidebarHeader-DvwfTOxo.js";import"./useBaseUiId-CTbNHlSx.js";import"./useControlled-DvKCh5A7.js";import"./CompositeRoot-CKwL4TUS.js";import"./CompositeItem-jiPXxB8m.js";import"./ToolbarRootContext-VBUgETwl.js";import"./composite-sISphl_D.js";import"./svgIconContainer-CXD-puPH.js";import"./PdfViewerSearchBar-CKEoYXL-.js";import"./chevron-up-BRrNwous.js";import"./chevron-down-AE2xmaec.js";import"./cross-BOHizEE7.js";import"./PdfViewerSidebar-CjAnFFzK.js";import"./index-DxXXqXtC.js";import"./index-CXR4AaOd.js";import"./index-BGjCYo6U.js";import"./PdfViewerToolbar-CDbqFM5Q.js";import"./Button-Cxe4C__-.js";import"./chevron-right-HQ9Zhlkr.js";import"./Input-Db5psvur.js";import"./search-B_J-Ls4Z.js";import"./spin-P5aHKg51.js";import"./error-DR34QZtV.js";import"./withOsdkMetrics-Cm3IXA24.js";import"./makeExternalStore-D-dfFmaH.js";const U={title:"Components/DocumentViewer/Renderers/PdfViewer",component:p,tags:["beta"],parameters:{controls:{expanded:!0}}},o={render:()=>{const{object:e,isLoading:n}=a(d,s);return n||!(e!=null&&e.employeeDocuments)?r.jsx("div",{style:{height:"600px"},children:"Loading OSDK media…"}):r.jsx("div",{style:{height:"600px"},children:r.jsx(p,{media:e.employeeDocuments})})},parameters:{docs:{source:{code:`import { PdfViewer } from "@osdk/react-components/experimental/pdf-viewer";

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
