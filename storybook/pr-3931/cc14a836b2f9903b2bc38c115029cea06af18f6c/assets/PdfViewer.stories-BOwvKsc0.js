import{j as r,M as s}from"./iframe-t8JLfFrV.js";import{P as p}from"./pdf-viewer-CeUl_x5G.js";import{E as d}from"./Employee-BAk2o20h.js";import{u as a}from"./useOsdkObject-CMz_RjZR.js";import"./preload-helper-CpG0vhNh.js";import"./PdfViewer-DAcvpE9P.js";import"./index-BKF13I8U.js";import"./BasePdfViewer-BT8MvsdY.js";import"./BasePdfViewer.module.css-BBoIOh4h.js";import"./PdfViewerAnnotationLayer-CsEn2Hs1.js";import"./constants-DsXMS3N3.js";import"./usePdfDocument-QwxUNfsn.js";import"./PdfViewerOutlineSidebar-CplwF18W.js";import"./PdfViewerSidebarHeader-1vdkh9tc.js";import"./useBaseUiId-D6QmQGbw.js";import"./useControlled-BPo532GT.js";import"./CompositeRoot-BZ39vSqV.js";import"./CompositeItem-DoQHaS8J.js";import"./ToolbarRootContext-Dlh09ihf.js";import"./composite-DucXBgYZ.js";import"./svgIconContainer-qWhULtlh.js";import"./PdfViewerSearchBar-Dy3L_chw.js";import"./chevron-up-DP2JKoQz.js";import"./chevron-down-Dnk4XBCN.js";import"./cross-DHcY-_Dr.js";import"./PdfViewerSidebar-BWpQBnsd.js";import"./index-z9AQc1g7.js";import"./index-FDv4gW4k.js";import"./index-CdIm4hCh.js";import"./PdfViewerToolbar-EbmmNe3C.js";import"./Button-CsTwwOik.js";import"./chevron-right-DntTi3pT.js";import"./Input-xRhXFxI5.js";import"./search-4QP789O7.js";import"./spin-BcqNZlPi.js";import"./error-DjVNd1sK.js";import"./withOsdkMetrics-CJGbJg3y.js";import"./makeExternalStore-BN9bUK5B.js";const U={title:"Components/DocumentViewer/Renderers/PdfViewer",component:p,tags:["beta"],parameters:{controls:{expanded:!0}}},o={render:()=>{const{object:e,isLoading:n}=a(d,s);return n||!(e!=null&&e.employeeDocuments)?r.jsx("div",{style:{height:"600px"},children:"Loading OSDK media…"}):r.jsx("div",{style:{height:"600px"},children:r.jsx(p,{media:e.employeeDocuments})})},parameters:{docs:{source:{code:`import { PdfViewer } from "@osdk/react-components/experimental/pdf-viewer";

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
