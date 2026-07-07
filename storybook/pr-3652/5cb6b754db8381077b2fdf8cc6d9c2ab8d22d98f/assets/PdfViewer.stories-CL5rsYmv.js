import{j as r,M as s}from"./iframe-DlAjljC0.js";import{P as p}from"./pdf-viewer-BDAsRFOm.js";import{E as d}from"./Employee-BAk2o20h.js";import{u as a}from"./useOsdkObject-D7Kx64jQ.js";import"./preload-helper-qM9rHgtE.js";import"./PdfRenderer-CNxp0IYa.js";import"./index-Mg2TGXTy.js";import"./PdfViewer-BmRzTKFJ.js";import"./PdfViewer.module.css-9-ckCVs6.js";import"./PdfViewerAnnotationLayer-BpkzGjRV.js";import"./constants-DsXMS3N3.js";import"./usePdfDocument-QoaGNPrN.js";import"./PdfViewerOutlineSidebar-CbJd9nYF.js";import"./PdfViewerSidebarHeader-0xqxgwR1.js";import"./useBaseUiId-BMQIEJ1D.js";import"./useControlled-B5yElq7p.js";import"./CompositeRoot-BubmFYWz.js";import"./CompositeItem-BU_QHlMO.js";import"./ToolbarRootContext-DVfDCItW.js";import"./composite-C4Fq0xLo.js";import"./svgIconContainer-BHhVW6zb.js";import"./PdfViewerSearchBar-D5coHeUv.js";import"./chevron-up-BaHqrBp6.js";import"./chevron-down-D5cZouFY.js";import"./cross-CJWcF_W0.js";import"./PdfViewerSidebar-DgR1MAOP.js";import"./index-BSfAJcTr.js";import"./index-DXFrDNW6.js";import"./index-cp2LK2bn.js";import"./PdfViewerToolbar-Q8pqLuEJ.js";import"./Button-UAaeeS_0.js";import"./chevron-right-Cfpk-gfr.js";import"./Input-Cy4Rxry4.js";import"./search-CVyvDaT4.js";import"./spin-CHVq-DBQ.js";import"./error---M2JlJ0.js";import"./withOsdkMetrics-DtsYymFj.js";import"./makeExternalStore-0TiH5D2E.js";const U={title:"Components/DocumentViewer/Renderers/PdfViewer",component:p,tags:["beta"],parameters:{controls:{expanded:!0}}},o={render:()=>{const{object:e,isLoading:n}=a(d,s);return n||!(e!=null&&e.employeeDocuments)?r.jsx("div",{style:{height:"600px"},children:"Loading OSDK media…"}):r.jsx("div",{style:{height:"600px"},children:r.jsx(p,{media:e.employeeDocuments})})},parameters:{docs:{source:{code:`import { PdfViewer } from "@osdk/react-components/experimental/pdf-viewer";

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
