import{j as r,M as s}from"./iframe-BuaThpCY.js";import{P as p}from"./pdf-viewer-Bll-T6Ce.js";import{E as d}from"./Employee-BAk2o20h.js";import{u as a}from"./useOsdkObject-C0Hg8WI2.js";import"./preload-helper-DDPJP__E.js";import"./PdfRenderer-BYLQD91t.js";import"./index-Bfa5fFlh.js";import"./PdfViewer-D4O-NFE9.js";import"./PdfViewer.module.css-CIKKuLRi.js";import"./PdfViewerAnnotationLayer-rIoXu7VE.js";import"./constants-DsXMS3N3.js";import"./usePdfDocument-rI7-psn6.js";import"./PdfViewerOutlineSidebar-Ckf94Yq0.js";import"./PdfViewerSidebarHeader-CHwAl6pO.js";import"./useBaseUiId-DSybLx0z.js";import"./useControlled-CX-ZF3Hm.js";import"./CompositeRoot-D6mA9gOE.js";import"./CompositeItem-UqhqC17s.js";import"./ToolbarRootContext-DfriOFVL.js";import"./composite-BsEo-LBr.js";import"./svgIconContainer-1C1jOQ0R.js";import"./PdfViewerSearchBar-B01zh63C.js";import"./chevron-up-Bj0oytIZ.js";import"./chevron-down-DaBbmd4Q.js";import"./cross-DRuNW182.js";import"./PdfViewerSidebar-3H9767Ss.js";import"./index-ByWKtKHT.js";import"./index-CccI9Mtb.js";import"./index-Bopn5WYv.js";import"./PdfViewerToolbar-C3yJFwtb.js";import"./Button-DDFnyr2M.js";import"./chevron-right-DkBUW-eP.js";import"./Input-DauCBVrW.js";import"./search-D5LGh93M.js";import"./spin-BAJ6mjql.js";import"./error-Cb1Tru8b.js";import"./withOsdkMetrics-LCqWI8sO.js";import"./makeExternalStore-CpuGo_RY.js";const U={title:"Components/DocumentViewer/Renderers/PdfViewer",component:p,tags:["beta"],parameters:{controls:{expanded:!0}}},o={render:()=>{const{object:e,isLoading:n}=a(d,s);return n||!(e!=null&&e.employeeDocuments)?r.jsx("div",{style:{height:"600px"},children:"Loading OSDK media…"}):r.jsx("div",{style:{height:"600px"},children:r.jsx(p,{media:e.employeeDocuments})})},parameters:{docs:{source:{code:`import { PdfViewer } from "@osdk/react-components/experimental/pdf-viewer";

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
