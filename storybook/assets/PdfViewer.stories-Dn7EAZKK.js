import{j as r,M as s}from"./iframe-BgOcomY1.js";import{P as p}from"./pdf-viewer-BKxdwnoK.js";import{E as d}from"./Employee-BAk2o20h.js";import{u as a}from"./useOsdkObject-C7tTAF38.js";import"./preload-helper-Dp1pzeXC.js";import"./PdfRenderer-DW97JY74.js";import"./index-B4Fy05Hs.js";import"./PdfViewer-BAhvGtRE.js";import"./PdfViewer.module.css-BJUXcjqs.js";import"./PdfViewerAnnotationLayer-CDAWnjA0.js";import"./constants-DsXMS3N3.js";import"./usePdfDocument-kdzmXjon.js";import"./PdfViewerOutlineSidebar-DuTsIup1.js";import"./PdfViewerSidebarHeader-Bw490K_0.js";import"./useBaseUiId-2i3TXOih.js";import"./useControlled-CDFL_iHK.js";import"./CompositeRoot-CEkjUXvW.js";import"./CompositeItem-BSdcRnox.js";import"./ToolbarRootContext-BRjUsvcz.js";import"./composite-H1Wa0kFX.js";import"./svgIconContainer-B7ISeWKv.js";import"./PdfViewerSearchBar-C0UuKkhw.js";import"./chevron-up-CjqE1fWk.js";import"./chevron-down-DozmMeTK.js";import"./cross-CM39ZxII.js";import"./PdfViewerSidebar-BkP7Orou.js";import"./index-DDMgjQRv.js";import"./index-hjJ69L9b.js";import"./index-BmB0MH-o.js";import"./PdfViewerToolbar-DBPie-5P.js";import"./Button-BlOVwK6T.js";import"./chevron-right-DkXFyQRl.js";import"./Input-BWBlcqWD.js";import"./search-K4mebQJh.js";import"./spin-C-gfrchz.js";import"./error-Dzz3V0Ob.js";import"./withOsdkMetrics-B05mg-EK.js";import"./makeExternalStore-DsKVr37k.js";const U={title:"Components/DocumentViewer/Renderers/PdfViewer",component:p,tags:["beta"],parameters:{controls:{expanded:!0}}},o={render:()=>{const{object:e,isLoading:n}=a(d,s);return n||!(e!=null&&e.employeeDocuments)?r.jsx("div",{style:{height:"600px"},children:"Loading OSDK media…"}):r.jsx("div",{style:{height:"600px"},children:r.jsx(p,{media:e.employeeDocuments})})},parameters:{docs:{source:{code:`import { PdfViewer } from "@osdk/react-components/experimental/pdf-viewer";

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
