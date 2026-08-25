import{j as r,M as s}from"./iframe-Ccq8LnzR.js";import{P as p}from"./pdf-viewer-Cwo7zlre.js";import{E as d}from"./Employee-BAk2o20h.js";import{u as a}from"./useOsdkObject--_5B3LcP.js";import"./preload-helper-Dp1pzeXC.js";import"./PdfViewer-BJvaG7qo.js";import"./index-ibpVN2lt.js";import"./BasePdfViewer-BUcJRnxX.js";import"./BasePdfViewer.module.css-B2xn7AsY.js";import"./PdfViewerAnnotationLayer-BKrY_YUv.js";import"./constants-DsXMS3N3.js";import"./usePdfDocument-CQKr5mGV.js";import"./PdfViewerOutlineSidebar-BRE_RWbv.js";import"./PdfViewerSidebarHeader-B247CTWG.js";import"./useBaseUiId-ChrZBL00.js";import"./useControlled-BDMchsxG.js";import"./CompositeRoot-CZE388bz.js";import"./CompositeItem-oGACzHps.js";import"./ToolbarRootContext-C39odqBG.js";import"./composite-CUDUHPUL.js";import"./svgIconContainer-B3MTQTZk.js";import"./PdfViewerSearchBar-Cf9rNqhW.js";import"./chevron-up-pi0Geh_4.js";import"./chevron-down-CcArFodd.js";import"./cross-D61Z2HA7.js";import"./PdfViewerSidebar-CMU01Cle.js";import"./index-CoeZrPs6.js";import"./index-CsxRvKms.js";import"./index-DSa7XzaC.js";import"./PdfViewerToolbar-CqJCNDHS.js";import"./Button-ZG1qj9kz.js";import"./chevron-right-DC47JtUU.js";import"./Input-CDUlKefO.js";import"./search-fYPHsLc6.js";import"./spin-CHlpVkRb.js";import"./error-DHq6tj_T.js";import"./withOsdkMetrics-B2PLhQzs.js";import"./makeExternalStore-_f2hnKfG.js";const U={title:"Components/DocumentViewer/Renderers/PdfViewer",component:p,tags:["beta"],parameters:{controls:{expanded:!0}}},o={render:()=>{const{object:e,isLoading:n}=a(d,s);return n||!(e!=null&&e.employeeDocuments)?r.jsx("div",{style:{height:"600px"},children:"Loading OSDK media…"}):r.jsx("div",{style:{height:"600px"},children:r.jsx(p,{media:e.employeeDocuments})})},parameters:{docs:{source:{code:`import { PdfViewer } from "@osdk/react-components/experimental/pdf-viewer";

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
