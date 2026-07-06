import{j as r,M as s}from"./iframe-X6aRn_A_.js";import{P as p}from"./pdf-viewer-DFFzUtGe.js";import{E as d}from"./Employee-BAk2o20h.js";import{u as a}from"./useOsdkObject-Cv0psz8c.js";import"./preload-helper-BVpfEQS6.js";import"./PdfRenderer-BSqagcmM.js";import"./index-Cyl8tkUH.js";import"./PdfViewer-BnkGiZTD.js";import"./PdfViewer.module.css-CxT9m7SO.js";import"./PdfViewerAnnotationLayer-Byl_xSY4.js";import"./constants-DsXMS3N3.js";import"./usePdfDocument-E1lDQz-n.js";import"./PdfViewerOutlineSidebar-Dx9Dvyyi.js";import"./PdfViewerSidebarHeader-BEmN4xIZ.js";import"./useBaseUiId-d62_61Z8.js";import"./useControlled-D_rRgLsE.js";import"./CompositeRoot-DCNJI_cl.js";import"./CompositeItem-wTkB1J4Z.js";import"./ToolbarRootContext-qs1Vhlbe.js";import"./composite-B6kCikc_.js";import"./svgIconContainer-DEQ-IdoH.js";import"./PdfViewerSearchBar-CTmcPLnJ.js";import"./chevron-up-MdgI7O8R.js";import"./chevron-down-D7ddD8SZ.js";import"./cross-U21mFULk.js";import"./PdfViewerSidebar-s5XIRM93.js";import"./index-Dfl2Narl.js";import"./index-mIA1XLzv.js";import"./index-B5lMo9VV.js";import"./PdfViewerToolbar-BKAIaoNg.js";import"./Button-A56P5X5x.js";import"./chevron-right-CCkUWTuN.js";import"./Input-BrrEA2gh.js";import"./search-DbrdMPT_.js";import"./spin-ch5zI2O2.js";import"./error-aHjvdeV3.js";import"./withOsdkMetrics-CJci1eTx.js";import"./makeExternalStore-Ckt6fzv-.js";const U={title:"Components/DocumentViewer/Renderers/PdfViewer",component:p,tags:["beta"],parameters:{controls:{expanded:!0}}},o={render:()=>{const{object:e,isLoading:n}=a(d,s);return n||!(e!=null&&e.employeeDocuments)?r.jsx("div",{style:{height:"600px"},children:"Loading OSDK media…"}):r.jsx("div",{style:{height:"600px"},children:r.jsx(p,{media:e.employeeDocuments})})},parameters:{docs:{source:{code:`import { PdfViewer } from "@osdk/react-components/experimental/pdf-viewer";

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
