import{j as r,M as s}from"./iframe-Bw-Agif6.js";import{P as p}from"./pdf-viewer-BLojbQaL.js";import{E as d}from"./Employee-BAk2o20h.js";import{u as a}from"./useOsdkObject-DGStGsgE.js";import"./preload-helper-wHYoTEvY.js";import"./PdfRenderer-BXJrhT50.js";import"./index-DNmIinQa.js";import"./PdfViewer-Ce2staHo.js";import"./PdfViewer.module.css-D7yW8c4U.js";import"./PdfViewerAnnotationLayer-DrpNjSSD.js";import"./constants-DsXMS3N3.js";import"./usePdfDocument-DPvYObIp.js";import"./PdfViewerOutlineSidebar-CcUU0LvF.js";import"./PdfViewerSidebarHeader-W6cOTUig.js";import"./useBaseUiId-BkzXSrg6.js";import"./useControlled-kEo0k7Py.js";import"./CompositeRoot-BQvic1AK.js";import"./CompositeItem-5WZPpFtM.js";import"./ToolbarRootContext-Cf0AzzGI.js";import"./composite-B_WicqqA.js";import"./svgIconContainer-D0FLeaRo.js";import"./PdfViewerSearchBar-CLdR3At6.js";import"./chevron-up-LxZCqDH8.js";import"./chevron-down-Dngh-QRN.js";import"./cross-D63pv_qh.js";import"./PdfViewerSidebar-PiVITwpt.js";import"./index-B5NpxPBP.js";import"./index-ByJX6_Sx.js";import"./index-CAIuwcNw.js";import"./PdfViewerToolbar-DRqCmmji.js";import"./Button-DHc-O6ds.js";import"./chevron-right-C7ENpeJB.js";import"./Input-BrcHuaTL.js";import"./search-B0cSkiVa.js";import"./spin-B26pY0ti.js";import"./error-Rg-jn8n4.js";import"./withOsdkMetrics-C6Xz7eXL.js";import"./makeExternalStore-Bbb3TB_2.js";const U={title:"Components/DocumentViewer/Renderers/PdfViewer",component:p,tags:["beta"],parameters:{controls:{expanded:!0}}},o={render:()=>{const{object:e,isLoading:n}=a(d,s);return n||!(e!=null&&e.employeeDocuments)?r.jsx("div",{style:{height:"600px"},children:"Loading OSDK media…"}):r.jsx("div",{style:{height:"600px"},children:r.jsx(p,{media:e.employeeDocuments})})},parameters:{docs:{source:{code:`import { PdfViewer } from "@osdk/react-components/experimental/pdf-viewer";

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
