import{j as r,M as s}from"./iframe-D5O5_k9_.js";import{P as p}from"./pdf-viewer-35OV7WA4.js";import{E as d}from"./Employee-BAk2o20h.js";import{u as a}from"./useOsdkObject-2xVK9RIk.js";import"./preload-helper-Dp1pzeXC.js";import"./PdfViewer-BGqbviUl.js";import"./index-BIhwPQ5A.js";import"./BasePdfViewer-BiXiXynx.js";import"./BasePdfViewer.module.css-sUdn3q93.js";import"./PdfViewerAnnotationLayer-D1jiDPgr.js";import"./constants-DsXMS3N3.js";import"./usePdfDocument-B6ayjpqt.js";import"./PdfViewerOutlineSidebar-1taLA8eP.js";import"./PdfViewerSidebarHeader-BunAKhLj.js";import"./useBaseUiId-BK5NoUBi.js";import"./useControlled-hlAYtkod.js";import"./CompositeRoot-ilRAjAv0.js";import"./CompositeItem-BHw_Azd0.js";import"./ToolbarRootContext-7sTGpIsw.js";import"./composite-CMeP4FlW.js";import"./svgIconContainer-Dc8lBmE9.js";import"./PdfViewerSearchBar-gkB1mk8o.js";import"./chevron-up-SZqwrik5.js";import"./chevron-down-VCtVB2U7.js";import"./cross-qoOvfrZB.js";import"./PdfViewerSidebar-DUxQdLUe.js";import"./index-DFB-Kfs7.js";import"./index-DXS8u3_B.js";import"./index-AFBT5mUa.js";import"./PdfViewerToolbar-Cnfmllda.js";import"./Button-74u_STeL.js";import"./chevron-right-Cdx-mE53.js";import"./Input-BO-GptjU.js";import"./search-sOGHpgAJ.js";import"./spin-waO4VYVY.js";import"./error-g0-V9Ywd.js";import"./withOsdkMetrics-B2-MbefI.js";import"./makeExternalStore-CxymVNiv.js";const U={title:"Components/DocumentViewer/Renderers/PdfViewer",component:p,tags:["beta"],parameters:{controls:{expanded:!0}}},o={render:()=>{const{object:e,isLoading:n}=a(d,s);return n||!(e!=null&&e.employeeDocuments)?r.jsx("div",{style:{height:"600px"},children:"Loading OSDK media…"}):r.jsx("div",{style:{height:"600px"},children:r.jsx(p,{media:e.employeeDocuments})})},parameters:{docs:{source:{code:`import { PdfViewer } from "@osdk/react-components/experimental/pdf-viewer";

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
