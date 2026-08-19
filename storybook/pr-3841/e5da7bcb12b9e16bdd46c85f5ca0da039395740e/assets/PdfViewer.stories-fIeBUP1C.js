import{j as r,M as s}from"./iframe-BYL7doMn.js";import{P as p}from"./pdf-viewer-DqoRzmxb.js";import{E as d}from"./Employee-BAk2o20h.js";import{u as a}from"./useOsdkObject-DtCwAr7D.js";import"./preload-helper-WjgK3yby.js";import"./PdfViewer-X67YwvYC.js";import"./index-DGp8JCsS.js";import"./BasePdfViewer-Bo_5m67F.js";import"./BasePdfViewer.module.css-D-f8Np5p.js";import"./PdfViewerAnnotationLayer-BXCxLx51.js";import"./constants-DsXMS3N3.js";import"./usePdfDocument-Bt6esefl.js";import"./PdfViewerOutlineSidebar-BtoxDtAA.js";import"./PdfViewerSidebarHeader-Dx35JbWt.js";import"./useBaseUiId-BDHrOOKV.js";import"./useControlled-v5GLNOSM.js";import"./CompositeRoot-B5nF7UJT.js";import"./CompositeItem--33NfDsU.js";import"./ToolbarRootContext-BRf2421Z.js";import"./composite-DVT3Eov_.js";import"./svgIconContainer-_aqU2ceG.js";import"./PdfViewerSearchBar-B9NX81cA.js";import"./chevron-up-A_Jijcjv.js";import"./chevron-down-CE9oTrOB.js";import"./cross-As5FKXY-.js";import"./PdfViewerSidebar-CZVutLQ9.js";import"./index-C_YsYgd4.js";import"./index-BNCWFBwe.js";import"./index-B9iEbSri.js";import"./PdfViewerToolbar-CkSHqwdE.js";import"./Button-D8YUSgO5.js";import"./chevron-right-Bx5Q_iNH.js";import"./Input-CdbOxxHJ.js";import"./search-D5xrbzeg.js";import"./spin-a-5dDDHV.js";import"./error-CTTbPhSu.js";import"./withOsdkMetrics-Cw_wIhS5.js";import"./makeExternalStore-DN7NmVRj.js";const U={title:"Components/DocumentViewer/Renderers/PdfViewer",component:p,tags:["beta"],parameters:{controls:{expanded:!0}}},o={render:()=>{const{object:e,isLoading:n}=a(d,s);return n||!(e!=null&&e.employeeDocuments)?r.jsx("div",{style:{height:"600px"},children:"Loading OSDK media…"}):r.jsx("div",{style:{height:"600px"},children:r.jsx(p,{media:e.employeeDocuments})})},parameters:{docs:{source:{code:`import { PdfViewer } from "@osdk/react-components/experimental/pdf-viewer";

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
