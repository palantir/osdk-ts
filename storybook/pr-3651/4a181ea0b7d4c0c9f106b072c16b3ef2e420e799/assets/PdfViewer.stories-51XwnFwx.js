import{j as r,M as s}from"./iframe-3TvHAs4c.js";import{P as p}from"./pdf-viewer-Dcb8W4XB.js";import{E as d}from"./Employee-BAk2o20h.js";import{u as a}from"./useOsdkObject-BBys5D-e.js";import"./preload-helper-DpyMUS3_.js";import"./PdfRenderer-CBkhNx9X.js";import"./index-el2AxoGR.js";import"./PdfViewer-OUrsd2qa.js";import"./PdfViewer.module.css-DcFCQUF_.js";import"./PdfViewerAnnotationLayer-Ov52798E.js";import"./constants-DsXMS3N3.js";import"./usePdfDocument-nHo7dGHe.js";import"./PdfViewerOutlineSidebar-DlsOhKde.js";import"./PdfViewerSidebarHeader-C-xycH7I.js";import"./useBaseUiId-BETBQmwg.js";import"./useControlled-C5N00eW4.js";import"./CompositeRoot-Ckez1U3W.js";import"./CompositeItem-DJK2bU2c.js";import"./ToolbarRootContext-B8HhfBqU.js";import"./composite-feS10yYs.js";import"./svgIconContainer-BFDK97Ko.js";import"./PdfViewerSearchBar-HZSplIA9.js";import"./chevron-up-DYEimXPx.js";import"./chevron-down-BCuah4uX.js";import"./cross-Cuk-Fy3m.js";import"./PdfViewerSidebar-D646taes.js";import"./index-CigjtaUC.js";import"./index-ByPKh7Yl.js";import"./index-B3J93Pkv.js";import"./PdfViewerToolbar-XlCubAwG.js";import"./Button-plhH8piR.js";import"./chevron-right-MIG1kta6.js";import"./Input-DMbJE11S.js";import"./search-C3SJSWRH.js";import"./spin-D5DsJdpu.js";import"./error-CcYbNb79.js";import"./withOsdkMetrics-CGOAGNGX.js";import"./makeExternalStore-zFIIfO9K.js";const U={title:"Components/DocumentViewer/Renderers/PdfViewer",component:p,tags:["beta"],parameters:{controls:{expanded:!0}}},o={render:()=>{const{object:e,isLoading:n}=a(d,s);return n||!(e!=null&&e.employeeDocuments)?r.jsx("div",{style:{height:"600px"},children:"Loading OSDK media…"}):r.jsx("div",{style:{height:"600px"},children:r.jsx(p,{media:e.employeeDocuments})})},parameters:{docs:{source:{code:`import { PdfViewer } from "@osdk/react-components/experimental/pdf-viewer";

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
