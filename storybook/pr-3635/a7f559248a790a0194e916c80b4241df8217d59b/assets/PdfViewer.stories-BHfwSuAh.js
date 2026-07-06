import{j as r,M as s}from"./iframe-DGvxDu2V.js";import{P as p}from"./pdf-viewer-I0mGK6AO.js";import{E as d}from"./Employee-BAk2o20h.js";import{u as a}from"./useOsdkObject-VIt8VqwJ.js";import"./preload-helper-CjwweEI9.js";import"./PdfRenderer-BNU6-X3L.js";import"./index-BLI4KS2e.js";import"./PdfViewer-B-VlAfjo.js";import"./PdfViewer.module.css-Dw0LVVJZ.js";import"./PdfViewerAnnotationLayer-C_SJmLsS.js";import"./constants-DsXMS3N3.js";import"./usePdfDocument-BBUXJLQo.js";import"./PdfViewerOutlineSidebar-Df1JHit5.js";import"./PdfViewerSidebarHeader-p33AyIaI.js";import"./useBaseUiId-U8qJsqeA.js";import"./useControlled-BkBZLlyH.js";import"./CompositeRoot-CvbuJCUD.js";import"./CompositeItem-DHHLz0tQ.js";import"./ToolbarRootContext-C1NypoNo.js";import"./composite-Cjf3r8sg.js";import"./svgIconContainer-CklyPDEC.js";import"./PdfViewerSearchBar-DfBtN_12.js";import"./chevron-up-Dbm0azDA.js";import"./chevron-down-HUhZiKdq.js";import"./cross-48xujm3y.js";import"./PdfViewerSidebar-DSIXP2aT.js";import"./index-DHSiX2cU.js";import"./index-Dkw8b54F.js";import"./index-BX44DUfM.js";import"./PdfViewerToolbar-BxUrKy87.js";import"./Button-CguTijQF.js";import"./chevron-right-CdtqJVmh.js";import"./Input-B1mSGRcb.js";import"./search-CB6PS3R5.js";import"./spin-DRiSumIX.js";import"./error-CKgHHedm.js";import"./withOsdkMetrics-BUeU_N-i.js";import"./makeExternalStore-BQx10Vzl.js";const U={title:"Components/DocumentViewer/Renderers/PdfViewer",component:p,tags:["beta"],parameters:{controls:{expanded:!0}}},o={render:()=>{const{object:e,isLoading:n}=a(d,s);return n||!(e!=null&&e.employeeDocuments)?r.jsx("div",{style:{height:"600px"},children:"Loading OSDK media…"}):r.jsx("div",{style:{height:"600px"},children:r.jsx(p,{media:e.employeeDocuments})})},parameters:{docs:{source:{code:`import { PdfViewer } from "@osdk/react-components/experimental/pdf-viewer";

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
