import{j as r,M as s}from"./iframe-Cp41aqP7.js";import{P as p}from"./pdf-viewer-DjC2BR2D.js";import{E as d}from"./Employee-BAk2o20h.js";import{u as a}from"./useOsdkObject-CcLNbSv7.js";import"./preload-helper-Dp1pzeXC.js";import"./PdfRenderer-DZPfVJwc.js";import"./index-D0Tljy_b.js";import"./PdfViewer-CVnjiLEt.js";import"./PdfViewer.module.css-CunFloQ5.js";import"./PdfViewerAnnotationLayer-DEPSU1mx.js";import"./constants-DsXMS3N3.js";import"./usePdfDocument-CFY1Pa4P.js";import"./PdfViewerOutlineSidebar-BWWxUQ1n.js";import"./PdfViewerSidebarHeader-KJPyukqY.js";import"./useBaseUiId-BVY_Ln8A.js";import"./useControlled-BMwYrgu0.js";import"./CompositeRoot-ecQMSLcr.js";import"./CompositeItem-DMNMCzbX.js";import"./ToolbarRootContext-glPgGB04.js";import"./composite-BsDaV1nn.js";import"./svgIconContainer-DVVwszt5.js";import"./PdfViewerSearchBar-B4AP9vMq.js";import"./chevron-up-DG5iFDkD.js";import"./chevron-down-BfKEa5Yk.js";import"./cross-Cbaea3iY.js";import"./PdfViewerSidebar-CcFv9h6x.js";import"./index-DfsF6fb0.js";import"./index-Dz9kJjLp.js";import"./index-BlcK1Y7H.js";import"./PdfViewerToolbar-DmsxCnIR.js";import"./Button-C-PrS_MA.js";import"./chevron-right-7ToTbQS5.js";import"./Input-DOfJ9Smz.js";import"./search-DHgRsLWA.js";import"./spin-BZ8a6dey.js";import"./error-Do9MFOLD.js";import"./withOsdkMetrics-BeNDlcLW.js";import"./makeExternalStore-BUN0j2Qi.js";const U={title:"Components/DocumentViewer/Renderers/PdfViewer",component:p,tags:["beta"],parameters:{controls:{expanded:!0}}},o={render:()=>{const{object:e,isLoading:n}=a(d,s);return n||!(e!=null&&e.employeeDocuments)?r.jsx("div",{style:{height:"600px"},children:"Loading OSDK media…"}):r.jsx("div",{style:{height:"600px"},children:r.jsx(p,{media:e.employeeDocuments})})},parameters:{docs:{source:{code:`import { PdfViewer } from "@osdk/react-components/experimental/pdf-viewer";

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
