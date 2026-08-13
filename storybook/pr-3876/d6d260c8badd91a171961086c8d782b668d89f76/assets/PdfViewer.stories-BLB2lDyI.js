import{j as r,M as s}from"./iframe-CTnfI1fn.js";import{P as p}from"./pdf-viewer-CSAmuN_G.js";import{E as d}from"./Employee-BAk2o20h.js";import{u as a}from"./useOsdkObject-BhvasDdM.js";import"./preload-helper-C5m-DnEx.js";import"./PdfViewer-QmLE1L5g.js";import"./index-BPrym6Kl.js";import"./BasePdfViewer-C0Leu1Cf.js";import"./BasePdfViewer.module.css-C-LfKVTz.js";import"./PdfViewerAnnotationLayer-BHwLhVwB.js";import"./constants-DsXMS3N3.js";import"./usePdfDocument-DsVirSDa.js";import"./PdfViewerOutlineSidebar-Pihf9Sod.js";import"./PdfViewerSidebarHeader-DtJAlZ5h.js";import"./useBaseUiId-BSgypfGI.js";import"./useControlled-CBc9j59P.js";import"./CompositeRoot-CSYPABts.js";import"./CompositeItem-CS9C2Hpj.js";import"./ToolbarRootContext-BdrEzidw.js";import"./composite-DP5BYXI_.js";import"./svgIconContainer-BFETNtyc.js";import"./PdfViewerSearchBar-BGqYviIH.js";import"./chevron-up-DCBpQAmh.js";import"./chevron-down-BKx-E6vn.js";import"./cross-D4HJDRmD.js";import"./PdfViewerSidebar-C2FAWYHk.js";import"./index-B3Orgk-A.js";import"./index-Tcjlr1Xh.js";import"./index-CSivwcG6.js";import"./PdfViewerToolbar-CwO3F1_o.js";import"./Button-s38-kdWV.js";import"./chevron-right-q_XTVfnA.js";import"./Input-CpteBLrp.js";import"./search-C2q7wa1q.js";import"./spin-BCszaClM.js";import"./error-BZ1221iV.js";import"./withOsdkMetrics-BxNR9pg9.js";import"./makeExternalStore-DBGKNZLc.js";const U={title:"Components/DocumentViewer/Renderers/PdfViewer",component:p,tags:["beta"],parameters:{controls:{expanded:!0}}},o={render:()=>{const{object:e,isLoading:n}=a(d,s);return n||!(e!=null&&e.employeeDocuments)?r.jsx("div",{style:{height:"600px"},children:"Loading OSDK media…"}):r.jsx("div",{style:{height:"600px"},children:r.jsx(p,{media:e.employeeDocuments})})},parameters:{docs:{source:{code:`import { PdfViewer } from "@osdk/react-components/experimental/pdf-viewer";

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
