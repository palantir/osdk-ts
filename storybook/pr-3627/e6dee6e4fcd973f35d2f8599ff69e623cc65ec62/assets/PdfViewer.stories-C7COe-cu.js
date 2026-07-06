import{j as r,M as s}from"./iframe-C3-rU_hh.js";import{P as p}from"./pdf-viewer-Dr7aOmEO.js";import{E as d}from"./Employee-BAk2o20h.js";import{u as a}from"./useOsdkObject-C71F79o5.js";import"./preload-helper-CPEfE7qD.js";import"./PdfRenderer-C1w3qXbd.js";import"./index-BYw8aiNR.js";import"./PdfViewer-DqUFD0Bu.js";import"./PdfViewer.module.css-COgqfFAz.js";import"./PdfViewerAnnotationLayer-UZW8ba6N.js";import"./constants-DsXMS3N3.js";import"./usePdfDocument-Cy4b8mjN.js";import"./PdfViewerOutlineSidebar-2vgTpYFs.js";import"./PdfViewerSidebarHeader-Bik15DR_.js";import"./useBaseUiId-DsMPEtCd.js";import"./useControlled-CcPQuWHH.js";import"./CompositeRoot-CsYCSxn8.js";import"./CompositeItem-DY0mVT1W.js";import"./ToolbarRootContext-B--QW8q6.js";import"./composite-DlMuq_u9.js";import"./svgIconContainer-Cig8za8A.js";import"./PdfViewerSearchBar-5zABL6aX.js";import"./chevron-up-Bob4ytje.js";import"./chevron-down-C9aYBCzt.js";import"./cross-D3LuiZ9e.js";import"./PdfViewerSidebar-CJ4cLwTJ.js";import"./index-DEhiYS1G.js";import"./index-C3cDpDsp.js";import"./index-BBnutprT.js";import"./PdfViewerToolbar-DXgQ00SG.js";import"./Button-CMSgPGf_.js";import"./chevron-right-CQ_J-Bez.js";import"./Input-DNg1rTaI.js";import"./search-Da5SRxod.js";import"./spin-DuIv0CMG.js";import"./error-CM0DFADk.js";import"./withOsdkMetrics-CIwTxNDs.js";import"./makeExternalStore-Co0uKMwo.js";const U={title:"Components/DocumentViewer/Renderers/PdfViewer",component:p,tags:["beta"],parameters:{controls:{expanded:!0}}},o={render:()=>{const{object:e,isLoading:n}=a(d,s);return n||!(e!=null&&e.employeeDocuments)?r.jsx("div",{style:{height:"600px"},children:"Loading OSDK media…"}):r.jsx("div",{style:{height:"600px"},children:r.jsx(p,{media:e.employeeDocuments})})},parameters:{docs:{source:{code:`import { PdfViewer } from "@osdk/react-components/experimental/pdf-viewer";

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
