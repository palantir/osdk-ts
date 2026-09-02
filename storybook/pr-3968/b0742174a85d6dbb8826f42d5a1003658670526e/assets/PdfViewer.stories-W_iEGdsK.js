import{j as r,M as s}from"./iframe-CTewSG_j.js";import{P as p}from"./pdf-viewer-BxOE3tUv.js";import{E as d}from"./Employee-BAk2o20h.js";import{u as a}from"./useOsdkObject-BW68GHvH.js";import"./preload-helper-C25ouRIs.js";import"./PdfViewer-TRYJRwrP.js";import"./index-BUWAeCIL.js";import"./BasePdfViewer-DBHZt3nJ.js";import"./BasePdfViewer.module.css-DBgJfVyI.js";import"./PdfViewerAnnotationLayer-icPU3Qkb.js";import"./constants-DsXMS3N3.js";import"./usePdfDocument-CPG8pMkG.js";import"./PdfViewerOutlineSidebar-CdQ3pBAy.js";import"./PdfViewerSidebarHeader-ri6_WWAm.js";import"./useBaseUiId-0-lRFcas.js";import"./useControlled-C5WpgBSN.js";import"./CompositeRoot-Ct7ZgtZC.js";import"./CompositeItem-DkrjMxub.js";import"./ToolbarRootContext-CQyb8mSw.js";import"./composite-DC6Og9Tc.js";import"./svgIconContainer-3JRMjvgA.js";import"./PdfViewerSearchBar-0-XSbde3.js";import"./chevron-up-DDir9p1p.js";import"./chevron-down-sFLW1j78.js";import"./cross-Dyevi5zm.js";import"./PdfViewerSidebar-DCuHQHrh.js";import"./index-DTMs9aOM.js";import"./index-BY0WDCEk.js";import"./index-Cz8uhmbU.js";import"./PdfViewerToolbar-wzCwQMuv.js";import"./Button-X3VWCY6_.js";import"./chevron-right-CIft-MQ9.js";import"./Input-Dy8oaUwS.js";import"./search-CKuhorfg.js";import"./spin-t2lTGTba.js";import"./error-BYYqLL3q.js";import"./withOsdkMetrics-DdgMiKO_.js";import"./makeExternalStore-C3Kcqa4P.js";const U={title:"Components/DocumentViewer/Renderers/PdfViewer",component:p,tags:["beta"],parameters:{controls:{expanded:!0}}},o={render:()=>{const{object:e,isLoading:n}=a(d,s);return n||!(e!=null&&e.employeeDocuments)?r.jsx("div",{style:{height:"600px"},children:"Loading OSDK media…"}):r.jsx("div",{style:{height:"600px"},children:r.jsx(p,{media:e.employeeDocuments})})},parameters:{docs:{source:{code:`import { PdfViewer } from "@osdk/react-components/experimental/pdf-viewer";

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
