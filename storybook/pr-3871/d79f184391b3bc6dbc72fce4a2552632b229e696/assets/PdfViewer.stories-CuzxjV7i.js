import{j as r,M as s}from"./iframe-DUEuiXsv.js";import{P as p}from"./pdf-viewer-CwasB1iA.js";import{E as d}from"./Employee-BAk2o20h.js";import{u as a}from"./useOsdkObject-D7Xabh1A.js";import"./preload-helper-Df6_8uD6.js";import"./PdfViewer-C2ROhn4h.js";import"./index-VBi3p1EG.js";import"./BasePdfViewer-DTE4hitO.js";import"./BasePdfViewer.module.css-CsLJ8lEL.js";import"./PdfViewerAnnotationLayer-Cv7LJ-mW.js";import"./constants-DsXMS3N3.js";import"./usePdfDocument-C5zRjyNf.js";import"./PdfViewerOutlineSidebar-C7455Dcm.js";import"./PdfViewerSidebarHeader-D4utTSfr.js";import"./useBaseUiId-rUHLvqa0.js";import"./useControlled-BNu8ROQV.js";import"./CompositeRoot-DQMHQM21.js";import"./CompositeItem-Bx3c2X42.js";import"./ToolbarRootContext-D11W-0nl.js";import"./composite-BQlLpDbX.js";import"./svgIconContainer-fUfiooYh.js";import"./PdfViewerSearchBar-DEeSfRkC.js";import"./chevron-up-B_UpbUzi.js";import"./chevron-down-D3lkidTG.js";import"./cross-BHSnocIt.js";import"./PdfViewerSidebar-B813MuwW.js";import"./index-CDpKmQsf.js";import"./index-DaaqgxZj.js";import"./index-BSBqPfD7.js";import"./PdfViewerToolbar-DWs6ydJd.js";import"./Button-CDlf2YlH.js";import"./chevron-right-BtvYnfS1.js";import"./Input-DJ0wEJn_.js";import"./search-CQkXJiT6.js";import"./spin-CBHGKmXj.js";import"./error-DhHmTIvC.js";import"./withOsdkMetrics-CPHwq3ys.js";import"./makeExternalStore-LN7J9oHG.js";const U={title:"Components/DocumentViewer/Renderers/PdfViewer",component:p,tags:["beta"],parameters:{controls:{expanded:!0}}},o={render:()=>{const{object:e,isLoading:n}=a(d,s);return n||!(e!=null&&e.employeeDocuments)?r.jsx("div",{style:{height:"600px"},children:"Loading OSDK media…"}):r.jsx("div",{style:{height:"600px"},children:r.jsx(p,{media:e.employeeDocuments})})},parameters:{docs:{source:{code:`import { PdfViewer } from "@osdk/react-components/experimental/pdf-viewer";

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
