import{j as r,M as s}from"./iframe-qUoJ8bD1.js";import{P as p}from"./pdf-viewer-BnzaqtTr.js";import{E as d}from"./Employee-BAk2o20h.js";import{u as a}from"./useOsdkObject-B6v7QAvx.js";import"./preload-helper-ol3ztxLZ.js";import"./PdfRenderer-4xhYMUUK.js";import"./index-vMykFoz6.js";import"./PdfViewer-CJgWnWtu.js";import"./PdfViewer.module.css-BCzXl0gw.js";import"./PdfViewerAnnotationLayer-efF5Mp54.js";import"./constants-DsXMS3N3.js";import"./usePdfDocument-DyFOOwzw.js";import"./PdfViewerOutlineSidebar-CwN2OAmz.js";import"./PdfViewerSidebarHeader-DGuJavPh.js";import"./useBaseUiId-DfL4ZZ8P.js";import"./useControlled-FmFohdHO.js";import"./CompositeRoot-CnBjzeDB.js";import"./CompositeItem-BQsHw04j.js";import"./ToolbarRootContext-B_pSOxlb.js";import"./composite-tj8owiCg.js";import"./svgIconContainer-BFdHToqX.js";import"./PdfViewerSearchBar-BzEUFf3u.js";import"./chevron-up-DPEav-DZ.js";import"./chevron-down-CMcKK_Lk.js";import"./cross-Cb35bm_z.js";import"./PdfViewerSidebar-Bt_mYL7T.js";import"./index-SLkx8Rlc.js";import"./index-DP_UhRTF.js";import"./index-Cz64Jyqa.js";import"./PdfViewerToolbar-DsBpEJa_.js";import"./Button-DKNtfJMf.js";import"./chevron-right-BsWsGYLK.js";import"./Input-CvSd3bUP.js";import"./search-tL4GtzWj.js";import"./spin-eqRvoMQH.js";import"./error-CbX-Ektr.js";import"./withOsdkMetrics-DxfUN9ge.js";import"./makeExternalStore-Os8YTNFV.js";const U={title:"Components/DocumentViewer/Renderers/PdfViewer",component:p,tags:["beta"],parameters:{controls:{expanded:!0}}},o={render:()=>{const{object:e,isLoading:n}=a(d,s);return n||!(e!=null&&e.employeeDocuments)?r.jsx("div",{style:{height:"600px"},children:"Loading OSDK media…"}):r.jsx("div",{style:{height:"600px"},children:r.jsx(p,{media:e.employeeDocuments})})},parameters:{docs:{source:{code:`import { PdfViewer } from "@osdk/react-components/experimental/pdf-viewer";

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
