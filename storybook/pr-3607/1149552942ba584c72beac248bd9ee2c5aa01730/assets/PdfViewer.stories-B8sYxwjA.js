import{j as r,M as s}from"./iframe-C8dlgqYY.js";import{P as p}from"./pdf-viewer-CcbA539j.js";import{E as d}from"./Employee-BAk2o20h.js";import{u as a}from"./useOsdkObject-EZZTldLh.js";import"./preload-helper-CWbhagD0.js";import"./PdfRenderer-DT0aAEo8.js";import"./index-CnQA6rQ3.js";import"./PdfViewer-Bid5FiFp.js";import"./PdfViewer.module.css-DjLByXHO.js";import"./PdfViewerAnnotationLayer-BcnH2RZ9.js";import"./constants-DsXMS3N3.js";import"./usePdfDocument-CM7Robxo.js";import"./PdfViewerOutlineSidebar-CS6peQmt.js";import"./PdfViewerSidebarHeader-Q2_Uux8L.js";import"./useBaseUiId-_6FFW2OV.js";import"./useControlled-BCmr5ykD.js";import"./CompositeRoot-BnYYc-SY.js";import"./CompositeItem-JtbuSoSZ.js";import"./ToolbarRootContext-oy1tnWyM.js";import"./composite-04XSjFBl.js";import"./svgIconContainer-D3qOb3Wv.js";import"./PdfViewerSearchBar-DonWPWui.js";import"./chevron-up-4X7_Luwz.js";import"./chevron-down-CjubnvJD.js";import"./cross-CMsZxCOM.js";import"./PdfViewerSidebar-KM1pLbSI.js";import"./index-kxOa3iJi.js";import"./index-Sgo8BhwG.js";import"./index-Bi9bkNdn.js";import"./PdfViewerToolbar-DR6Ylxup.js";import"./Button-BIdJBxoe.js";import"./chevron-right-ChYkYbXY.js";import"./Input-BUkQZb9J.js";import"./minus-BMIvb8R1.js";import"./search-Tg9h_Dc7.js";import"./spin-BRZ9EiyV.js";import"./error-CnsD_CBJ.js";import"./withOsdkMetrics-uNG63cyk.js";import"./makeExternalStore-DYcIJLnt.js";const W={title:"Components/DocumentViewer/Renderers/PdfViewer",component:p,tags:["beta"],parameters:{controls:{expanded:!0}}},o={render:()=>{const{object:e,isLoading:n}=a(d,s);return n||!(e!=null&&e.employeeDocuments)?r.jsx("div",{style:{height:"600px"},children:"Loading OSDK media…"}):r.jsx("div",{style:{height:"600px"},children:r.jsx(p,{media:e.employeeDocuments})})},parameters:{docs:{source:{code:`import { PdfViewer } from "@osdk/react-components/experimental/pdf-viewer";

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
}`,...(i=(m=o.parameters)==null?void 0:m.docs)==null?void 0:i.source}}};const X=["Default"];export{o as Default,X as __namedExportsOrder,W as default};
