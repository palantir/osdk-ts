import{j as r,M as s}from"./iframe-Chf_oTGA.js";import{P as p}from"./pdf-viewer-Bi3QHA2M.js";import{E as d}from"./Employee-BAk2o20h.js";import{u as a}from"./useOsdkObject-DAfSNyDD.js";import"./preload-helper-CDTIXXks.js";import"./PdfRenderer-D1BSfH2x.js";import"./index-xJnBoHwJ.js";import"./PdfViewer-CH50uXQj.js";import"./PdfViewer.module.css-BV4Vkhh4.js";import"./PdfViewerAnnotationLayer-BP-7J6ok.js";import"./constants-DsXMS3N3.js";import"./usePdfDocument-D-9GOo2N.js";import"./PdfViewerOutlineSidebar-BwuqUMCT.js";import"./PdfViewerSidebarHeader-CmEoR7Qo.js";import"./useBaseUiId-hHX-f39p.js";import"./useControlled-VvgXxcWd.js";import"./CompositeRoot-Bi0BGJuo.js";import"./CompositeItem-C_RDCmWm.js";import"./ToolbarRootContext-GVFBeBA6.js";import"./composite-BoSTtwUc.js";import"./svgIconContainer-BH22RWVr.js";import"./PdfViewerSearchBar-CCFy1fiM.js";import"./chevron-up-gP8Okfu6.js";import"./chevron-down-BETM3MrF.js";import"./cross-CrnBFQH-.js";import"./PdfViewerSidebar-70SdH4ro.js";import"./index-CMwyLjyb.js";import"./index-CxjHweEz.js";import"./index-BtccUsyA.js";import"./PdfViewerToolbar-C0S_FkPs.js";import"./Button-DKdaKz-_.js";import"./chevron-right-CEJ6oRZy.js";import"./Input-BFq9F5ks.js";import"./search-ygVixVNd.js";import"./spin-Cy0kcW_0.js";import"./error-DgN3iPqH.js";import"./withOsdkMetrics-C4p6K-5h.js";import"./makeExternalStore-BetVxvym.js";const U={title:"Components/DocumentViewer/Renderers/PdfViewer",component:p,tags:["beta"],parameters:{controls:{expanded:!0}}},o={render:()=>{const{object:e,isLoading:n}=a(d,s);return n||!(e!=null&&e.employeeDocuments)?r.jsx("div",{style:{height:"600px"},children:"Loading OSDK media…"}):r.jsx("div",{style:{height:"600px"},children:r.jsx(p,{media:e.employeeDocuments})})},parameters:{docs:{source:{code:`import { PdfViewer } from "@osdk/react-components/experimental/pdf-viewer";

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
