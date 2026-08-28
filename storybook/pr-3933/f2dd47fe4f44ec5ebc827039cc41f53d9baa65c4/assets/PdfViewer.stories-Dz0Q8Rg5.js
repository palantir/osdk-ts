import{j as r,M as s}from"./iframe-DL4FbcwS.js";import{P as p}from"./pdf-viewer-SBHyYX2W.js";import{E as d}from"./Employee-BAk2o20h.js";import{u as a}from"./useOsdkObject-2RpQI4wo.js";import"./preload-helper-D-Y5E90C.js";import"./PdfViewer-5Pa-ggqx.js";import"./index-Br0G3foT.js";import"./BasePdfViewer-tmobpDqp.js";import"./BasePdfViewer.module.css-1iLC43Hb.js";import"./PdfViewerAnnotationLayer-C77QB0HD.js";import"./constants-DsXMS3N3.js";import"./usePdfDocument-DFU7aJIh.js";import"./PdfViewerOutlineSidebar-DogHCgbr.js";import"./PdfViewerSidebarHeader-V9qq9ES9.js";import"./useBaseUiId-CP7gZe2z.js";import"./useControlled-QO3Raoq-.js";import"./CompositeRoot-BwLKkhBe.js";import"./CompositeItem-BT24yxUg.js";import"./ToolbarRootContext-Dvyrl1Ns.js";import"./composite-WIX2LHhX.js";import"./svgIconContainer-CE-AmYzF.js";import"./PdfViewerSearchBar-BjyqW6Gy.js";import"./chevron-up-Rqbw3zTJ.js";import"./chevron-down-CJf371D2.js";import"./cross-BgWeKxEC.js";import"./PdfViewerSidebar-psm6dISk.js";import"./index-1dYW8fLm.js";import"./index-CDxRvv5g.js";import"./index-XqdSQUcL.js";import"./PdfViewerToolbar-BSnkS16c.js";import"./Button-B99bddLT.js";import"./chevron-right-D4TLgdL3.js";import"./Input-CoqvOIT8.js";import"./search-DR1h9EWJ.js";import"./spin-BOIeFhWr.js";import"./error-CQAN26ZF.js";import"./withOsdkMetrics-tOkw8TA4.js";import"./makeExternalStore-CfOH3M3i.js";const U={title:"Components/DocumentViewer/Renderers/PdfViewer",component:p,tags:["beta"],parameters:{controls:{expanded:!0}}},o={render:()=>{const{object:e,isLoading:n}=a(d,s);return n||!(e!=null&&e.employeeDocuments)?r.jsx("div",{style:{height:"600px"},children:"Loading OSDK media…"}):r.jsx("div",{style:{height:"600px"},children:r.jsx(p,{media:e.employeeDocuments})})},parameters:{docs:{source:{code:`import { PdfViewer } from "@osdk/react-components/experimental/pdf-viewer";

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
