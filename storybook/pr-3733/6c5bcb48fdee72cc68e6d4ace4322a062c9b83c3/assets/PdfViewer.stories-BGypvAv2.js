import{j as r,M as s}from"./iframe-Dveh3_7n.js";import{P as p}from"./pdf-viewer-D3TI25sq.js";import{E as d}from"./Employee-BAk2o20h.js";import{u as a}from"./useOsdkObject-Cd14NHHV.js";import"./preload-helper-BWKUn3l9.js";import"./PdfRenderer-DICX8MDX.js";import"./index-C8o6Ng59.js";import"./PdfViewer-D3dWvi0z.js";import"./PdfViewer.module.css-DeWRKHvp.js";import"./PdfViewerAnnotationLayer-BlDX5NcW.js";import"./constants-DsXMS3N3.js";import"./usePdfDocument-CB7x24sl.js";import"./PdfViewerOutlineSidebar-BJ72hesZ.js";import"./PdfViewerSidebarHeader-BKMuRKMy.js";import"./useBaseUiId-BcWjZ5oo.js";import"./useControlled-BOQZVcOd.js";import"./CompositeRoot-aAtTAQrg.js";import"./CompositeItem-BtmdcoIR.js";import"./ToolbarRootContext-CLsNpSj0.js";import"./composite-CksEg6HI.js";import"./svgIconContainer-2Cwik5a2.js";import"./PdfViewerSearchBar-CAiC6Y_T.js";import"./chevron-up-F_G5vREy.js";import"./chevron-down-BB85PjhU.js";import"./cross-BKyCdW71.js";import"./PdfViewerSidebar-DjmbnpQl.js";import"./index-j3Zla7Xg.js";import"./index-HiXx80UP.js";import"./index-Bcy8BxQF.js";import"./PdfViewerToolbar-B9-COG_J.js";import"./Button-BuMr7WvO.js";import"./chevron-right-DT4DycIL.js";import"./Input-CF6xCn_p.js";import"./search-BePt087D.js";import"./spin-BtrXzCGy.js";import"./error-DlKoKQgC.js";import"./withOsdkMetrics-BeTCQocI.js";import"./makeExternalStore-Bv2nHlRZ.js";const U={title:"Components/DocumentViewer/Renderers/PdfViewer",component:p,tags:["beta"],parameters:{controls:{expanded:!0}}},o={render:()=>{const{object:e,isLoading:n}=a(d,s);return n||!(e!=null&&e.employeeDocuments)?r.jsx("div",{style:{height:"600px"},children:"Loading OSDK media…"}):r.jsx("div",{style:{height:"600px"},children:r.jsx(p,{media:e.employeeDocuments})})},parameters:{docs:{source:{code:`import { PdfViewer } from "@osdk/react-components/experimental/pdf-viewer";

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
