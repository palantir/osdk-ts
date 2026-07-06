import{j as r,M as s}from"./iframe-DSDYvTEX.js";import{P as p}from"./pdf-viewer-C2Ka2eMf.js";import{E as d}from"./Employee-BAk2o20h.js";import{u as a}from"./useOsdkObject-C40Du8jX.js";import"./preload-helper-Dr6u7rGJ.js";import"./PdfRenderer-BVgdfhLM.js";import"./index-CKBHXcQb.js";import"./PdfViewer-Dd_DXXKM.js";import"./PdfViewer.module.css-DnX3So10.js";import"./PdfViewerAnnotationLayer-DDtytkD-.js";import"./constants-DsXMS3N3.js";import"./usePdfDocument-BDj0fet8.js";import"./PdfViewerOutlineSidebar-BHUaXQZt.js";import"./PdfViewerSidebarHeader-DdkqCzxu.js";import"./useBaseUiId-DgVrhwJn.js";import"./useControlled-ChBRLApg.js";import"./CompositeRoot-BXXwRAsb.js";import"./CompositeItem-CPTPSi2t.js";import"./ToolbarRootContext-qq8GKlHZ.js";import"./composite-Cns0lU92.js";import"./svgIconContainer-CaL_zwWx.js";import"./PdfViewerSearchBar-esNseKK2.js";import"./chevron-up-XoY0slLD.js";import"./chevron-down-GVx5IIZz.js";import"./cross-BHX4p4QC.js";import"./PdfViewerSidebar-DNFLF9J1.js";import"./index-DpFZVn8R.js";import"./index-CkZ5yLcI.js";import"./index-Dp3mJjdf.js";import"./PdfViewerToolbar-X2wNqzcU.js";import"./Button-DF7htwnw.js";import"./chevron-right-CVH1_qZE.js";import"./Input-Bmt5Hqa7.js";import"./search-BFWUu_nA.js";import"./spin-lcNB7TAd.js";import"./error-BFJ5FkdZ.js";import"./withOsdkMetrics-B6_36Jqy.js";import"./makeExternalStore-C15fAnYJ.js";const U={title:"Components/DocumentViewer/Renderers/PdfViewer",component:p,tags:["beta"],parameters:{controls:{expanded:!0}}},o={render:()=>{const{object:e,isLoading:n}=a(d,s);return n||!(e!=null&&e.employeeDocuments)?r.jsx("div",{style:{height:"600px"},children:"Loading OSDK media…"}):r.jsx("div",{style:{height:"600px"},children:r.jsx(p,{media:e.employeeDocuments})})},parameters:{docs:{source:{code:`import { PdfViewer } from "@osdk/react-components/experimental/pdf-viewer";

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
