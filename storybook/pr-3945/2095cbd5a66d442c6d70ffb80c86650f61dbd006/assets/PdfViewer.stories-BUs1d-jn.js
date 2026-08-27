import{j as r,M as s}from"./iframe-CymrrUap.js";import{P as p}from"./pdf-viewer-gH2TSOQG.js";import{E as d}from"./Employee-BAk2o20h.js";import{u as a}from"./useOsdkObject-DhINwlK1.js";import"./preload-helper-ehSUgiiL.js";import"./PdfViewer-3w6gaxeK.js";import"./index-DA-oUp9z.js";import"./BasePdfViewer-CQbacLYP.js";import"./BasePdfViewer.module.css-Ul4BaJ9Y.js";import"./PdfViewerAnnotationLayer-DfQApKOw.js";import"./constants-DsXMS3N3.js";import"./usePdfDocument-Du-Xwc_6.js";import"./PdfViewerOutlineSidebar-BXZIEPvR.js";import"./PdfViewerSidebarHeader-BwLud-Y0.js";import"./useBaseUiId-DBVrwlNg.js";import"./useControlled-F4dJPm4K.js";import"./CompositeRoot-CbnxaYj4.js";import"./CompositeItem-Dj6qYNKV.js";import"./ToolbarRootContext-BsZ0cva1.js";import"./composite-CPmOeLm-.js";import"./svgIconContainer-DmC2tGob.js";import"./PdfViewerSearchBar-SYp6C6B-.js";import"./chevron-up-DylsgTGR.js";import"./chevron-down-DOWVkS2T.js";import"./cross-D80OmHTw.js";import"./PdfViewerSidebar-B1a73-UV.js";import"./index-BNNz_fAv.js";import"./index-CkbGSZqd.js";import"./index-BMFjKR_h.js";import"./PdfViewerToolbar-DhJ7WxPZ.js";import"./Button-ZWSn3dX-.js";import"./chevron-right-iO25DjKR.js";import"./Input-BVeDMVsS.js";import"./search-D73uP9Os.js";import"./spin-B4BGBGRN.js";import"./error-xVwU37JI.js";import"./withOsdkMetrics-CA9bgf-6.js";import"./makeExternalStore-3pbdXedN.js";const U={title:"Components/DocumentViewer/Renderers/PdfViewer",component:p,tags:["beta"],parameters:{controls:{expanded:!0}}},o={render:()=>{const{object:e,isLoading:n}=a(d,s);return n||!(e!=null&&e.employeeDocuments)?r.jsx("div",{style:{height:"600px"},children:"Loading OSDK media…"}):r.jsx("div",{style:{height:"600px"},children:r.jsx(p,{media:e.employeeDocuments})})},parameters:{docs:{source:{code:`import { PdfViewer } from "@osdk/react-components/experimental/pdf-viewer";

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
