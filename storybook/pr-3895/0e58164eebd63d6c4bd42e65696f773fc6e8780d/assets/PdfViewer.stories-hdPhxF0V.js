import{j as r,M as s}from"./iframe-DVwkDS8L.js";import{P as p}from"./pdf-viewer-Dw9hdJHE.js";import{E as d}from"./Employee-BAk2o20h.js";import{u as a}from"./useOsdkObject-Bn1Z45PG.js";import"./preload-helper-CuM_C8uX.js";import"./PdfViewer-ClZ-uYvP.js";import"./index-B2DFp03X.js";import"./BasePdfViewer-CM1T_MxZ.js";import"./BasePdfViewer.module.css-BzWuMu9P.js";import"./PdfViewerAnnotationLayer-CaFDfmUA.js";import"./constants-DsXMS3N3.js";import"./usePdfDocument-C9psKZOU.js";import"./PdfViewerOutlineSidebar-FBPVL6_u.js";import"./PdfViewerSidebarHeader-CEVoifU7.js";import"./useBaseUiId-D7rE6SNe.js";import"./useControlled-CIDtoIkt.js";import"./CompositeRoot-CiJYn_XZ.js";import"./CompositeItem-oNLn9P67.js";import"./ToolbarRootContext-s0DCpxFM.js";import"./composite-CNYsr7GG.js";import"./svgIconContainer-r5K4UgUA.js";import"./PdfViewerSearchBar-DlF92yq5.js";import"./chevron-up-UZuDrQaj.js";import"./chevron-down-9KBxjP_q.js";import"./cross-COGhdLyT.js";import"./PdfViewerSidebar-sJN01F5g.js";import"./index-BuNntoD4.js";import"./index-Bb7J_5Af.js";import"./index-Bh-tKDNJ.js";import"./PdfViewerToolbar-Bd0eIsgU.js";import"./Button-BqtiPfOB.js";import"./chevron-right-CXeZJ7ru.js";import"./Input-BqPh0cED.js";import"./search-CaKxRlqq.js";import"./spin-Vy51cvhv.js";import"./error-D_Hj0Ztb.js";import"./withOsdkMetrics-D89qfQxD.js";import"./makeExternalStore-DelJbyGr.js";const U={title:"Components/DocumentViewer/Renderers/PdfViewer",component:p,tags:["beta"],parameters:{controls:{expanded:!0}}},o={render:()=>{const{object:e,isLoading:n}=a(d,s);return n||!(e!=null&&e.employeeDocuments)?r.jsx("div",{style:{height:"600px"},children:"Loading OSDK media…"}):r.jsx("div",{style:{height:"600px"},children:r.jsx(p,{media:e.employeeDocuments})})},parameters:{docs:{source:{code:`import { PdfViewer } from "@osdk/react-components/experimental/pdf-viewer";

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
