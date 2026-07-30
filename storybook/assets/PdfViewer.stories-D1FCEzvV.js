import{j as r,M as s}from"./iframe-sFkKU2EW.js";import{P as p}from"./pdf-viewer-xP8y0opj.js";import{E as d}from"./Employee-BAk2o20h.js";import{u as a}from"./useOsdkObject-DX3V2YD_.js";import"./preload-helper-Dp1pzeXC.js";import"./PdfRenderer-xg3quqsF.js";import"./index-C1mtpbbb.js";import"./PdfViewer-C7C59x8i.js";import"./PdfViewer.module.css-JCrNijVg.js";import"./PdfViewerAnnotationLayer-Db-TPfq6.js";import"./constants-DsXMS3N3.js";import"./usePdfDocument-DGxux5ej.js";import"./PdfViewerOutlineSidebar-Cy7mXl-t.js";import"./PdfViewerSidebarHeader-CaO2za1z.js";import"./useBaseUiId-2GBtkKH8.js";import"./useControlled-CO-q6SPI.js";import"./CompositeRoot-CHsZ7ghn.js";import"./CompositeItem-eIp0TU0l.js";import"./ToolbarRootContext-D3tP2Ava.js";import"./composite-BWqY2mYD.js";import"./svgIconContainer-CTKs33eW.js";import"./PdfViewerSearchBar-NCjfUayh.js";import"./chevron-up-WykXTaDe.js";import"./chevron-down-ClDz1vs8.js";import"./cross-Bblj5XEn.js";import"./PdfViewerSidebar-5o-v3DsD.js";import"./index-KH1gmPLT.js";import"./index-D9YZPkpb.js";import"./index-MBbYPXaC.js";import"./PdfViewerToolbar-dvyV93EP.js";import"./Button-BzrUlVJG.js";import"./chevron-right-Dnl1FZFn.js";import"./Input-HNcQN8UH.js";import"./search-C5MyxlXn.js";import"./spin-BDqKHnUS.js";import"./error-BZvSZmgV.js";import"./withOsdkMetrics-BHzd1wiG.js";import"./makeExternalStore-CocMOkpk.js";const U={title:"Components/DocumentViewer/Renderers/PdfViewer",component:p,tags:["beta"],parameters:{controls:{expanded:!0}}},o={render:()=>{const{object:e,isLoading:n}=a(d,s);return n||!(e!=null&&e.employeeDocuments)?r.jsx("div",{style:{height:"600px"},children:"Loading OSDK media…"}):r.jsx("div",{style:{height:"600px"},children:r.jsx(p,{media:e.employeeDocuments})})},parameters:{docs:{source:{code:`import { PdfViewer } from "@osdk/react-components/experimental/pdf-viewer";

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
