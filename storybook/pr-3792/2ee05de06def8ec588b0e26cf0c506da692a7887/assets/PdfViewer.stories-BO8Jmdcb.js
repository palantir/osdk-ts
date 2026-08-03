import{j as r,M as s}from"./iframe-NH2TPfrt.js";import{P as p}from"./pdf-viewer-Co28uHbn.js";import{E as d}from"./Employee-BAk2o20h.js";import{u as a}from"./useOsdkObject-8rSlZ2-a.js";import"./preload-helper-DnfD210b.js";import"./PdfRenderer-CD2nmLuR.js";import"./index-Dq4weQoF.js";import"./PdfViewer-DHzHm4qS.js";import"./PdfViewer.module.css-DyJB3cNY.js";import"./PdfViewerAnnotationLayer-CctumMIq.js";import"./constants-DsXMS3N3.js";import"./usePdfDocument-CzM1rkaH.js";import"./PdfViewerOutlineSidebar-sL5baTFn.js";import"./PdfViewerSidebarHeader-CqHcqH5T.js";import"./useBaseUiId-4nRGSpr1.js";import"./useControlled-BF8AHFxI.js";import"./CompositeRoot-Dg7h3Xp4.js";import"./CompositeItem-CVj27Z6H.js";import"./ToolbarRootContext-Pl3qLOs4.js";import"./composite-C2uwlMq3.js";import"./svgIconContainer-BUKRs426.js";import"./PdfViewerSearchBar-8xdbow3V.js";import"./chevron-up-CIFFopbi.js";import"./chevron-down-BOaz_Rvj.js";import"./cross-24tcUSkS.js";import"./PdfViewerSidebar-DIdHc_sg.js";import"./index-Ciy6Wj_i.js";import"./index-UEOUqQcW.js";import"./index-Cj-ZNFWv.js";import"./PdfViewerToolbar-D0SyWsdP.js";import"./Button-BHf--f-c.js";import"./chevron-right-Ul-MK7yW.js";import"./Input-A00tbVb5.js";import"./search-3tww_Y-8.js";import"./spin-BLulgxKD.js";import"./error-B94IGPmw.js";import"./withOsdkMetrics-DL-MS1V5.js";import"./makeExternalStore-CwBhR2PL.js";const U={title:"Components/DocumentViewer/Renderers/PdfViewer",component:p,tags:["beta"],parameters:{controls:{expanded:!0}}},o={render:()=>{const{object:e,isLoading:n}=a(d,s);return n||!(e!=null&&e.employeeDocuments)?r.jsx("div",{style:{height:"600px"},children:"Loading OSDK media…"}):r.jsx("div",{style:{height:"600px"},children:r.jsx(p,{media:e.employeeDocuments})})},parameters:{docs:{source:{code:`import { PdfViewer } from "@osdk/react-components/experimental/pdf-viewer";

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
