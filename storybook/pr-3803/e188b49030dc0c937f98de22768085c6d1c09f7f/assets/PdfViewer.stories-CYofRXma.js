import{j as r,M as s}from"./iframe-Dn0pOY-8.js";import{P as p}from"./pdf-viewer-BkhqqM0T.js";import{E as d}from"./Employee-BAk2o20h.js";import{u as a}from"./useOsdkObject-sCU8_8ik.js";import"./preload-helper-D3q3y7aq.js";import"./PdfRenderer-BXeTndrv.js";import"./index-BE-XY2ni.js";import"./PdfViewer-CDH62cj7.js";import"./PdfViewer.module.css-bPbsIGOc.js";import"./PdfViewerAnnotationLayer-Diz9At2k.js";import"./constants-DsXMS3N3.js";import"./usePdfDocument-sgv_q1OD.js";import"./PdfViewerOutlineSidebar-BTic3Qir.js";import"./PdfViewerSidebarHeader-CnSJtcQ7.js";import"./useBaseUiId-Do0azpaM.js";import"./useControlled-BI9A7g3Y.js";import"./CompositeRoot-D5OUpsYU.js";import"./CompositeItem-DLwnYDeG.js";import"./ToolbarRootContext-BWlGQFTf.js";import"./composite-DS8xZpiv.js";import"./svgIconContainer-DTaLY8It.js";import"./PdfViewerSearchBar-2tJHk9fM.js";import"./chevron-up-BbSMFAHh.js";import"./chevron-down-BGIvV33R.js";import"./cross-n8lwrCaB.js";import"./PdfViewerSidebar-PKNgHBFy.js";import"./index-D5xxfjMw.js";import"./index-DJYmYZuk.js";import"./index-R8QcWJSj.js";import"./PdfViewerToolbar-DrOmEaL7.js";import"./Button-CC-Ty1WR.js";import"./chevron-right-BWp_HaQJ.js";import"./Input-BCcDRsSE.js";import"./search-C3gVcqfq.js";import"./spin-Ba7I6Piv.js";import"./error-D8wDGNsv.js";import"./withOsdkMetrics-LKNyPTl9.js";import"./makeExternalStore-Dqwllyj5.js";const U={title:"Components/DocumentViewer/Renderers/PdfViewer",component:p,tags:["beta"],parameters:{controls:{expanded:!0}}},o={render:()=>{const{object:e,isLoading:n}=a(d,s);return n||!(e!=null&&e.employeeDocuments)?r.jsx("div",{style:{height:"600px"},children:"Loading OSDK media…"}):r.jsx("div",{style:{height:"600px"},children:r.jsx(p,{media:e.employeeDocuments})})},parameters:{docs:{source:{code:`import { PdfViewer } from "@osdk/react-components/experimental/pdf-viewer";

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
