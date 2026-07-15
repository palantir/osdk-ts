import{j as r,M as s}from"./iframe-Dgzah4Ez.js";import{P as p}from"./pdf-viewer-Whw3Gbs2.js";import{E as d}from"./Employee-BAk2o20h.js";import{u as a}from"./useOsdkObject-DPljOEfr.js";import"./preload-helper-26Cs7xve.js";import"./PdfRenderer-Zjt0MsRH.js";import"./index-B1YqTsok.js";import"./PdfViewer-D5NOARpR.js";import"./PdfViewer.module.css-CpGzPqOT.js";import"./PdfViewerAnnotationLayer-BlTJlPaU.js";import"./constants-DsXMS3N3.js";import"./usePdfDocument-Cf8EZwrA.js";import"./PdfViewerOutlineSidebar-ljZJEBcG.js";import"./PdfViewerSidebarHeader-Cd13Bc_m.js";import"./useBaseUiId-C7dFyywe.js";import"./useControlled-LGs8Aok6.js";import"./CompositeRoot-CIamDVsR.js";import"./CompositeItem-BJZxdgFq.js";import"./ToolbarRootContext-CMDx9_oV.js";import"./composite-C_apnA4T.js";import"./svgIconContainer-CZHa7DiX.js";import"./PdfViewerSearchBar-D15OVtNT.js";import"./chevron-up-797lOfw2.js";import"./chevron-down-C3jDER8P.js";import"./cross-BbfuF5iR.js";import"./PdfViewerSidebar-gGo_ywzL.js";import"./index-UACqA1Dm.js";import"./index-BZqsoeZU.js";import"./index-fDV0Uoju.js";import"./PdfViewerToolbar-oLNgSTkK.js";import"./Button-BBGhnGuz.js";import"./chevron-right-DcbvFx9i.js";import"./Input-C8gEKolu.js";import"./search-YMKDi33D.js";import"./spin-Bv7H1iu_.js";import"./error-B9L1dBU3.js";import"./withOsdkMetrics-BJBuqmdH.js";import"./makeExternalStore-COFDyZ69.js";const U={title:"Components/DocumentViewer/Renderers/PdfViewer",component:p,tags:["beta"],parameters:{controls:{expanded:!0}}},o={render:()=>{const{object:e,isLoading:n}=a(d,s);return n||!(e!=null&&e.employeeDocuments)?r.jsx("div",{style:{height:"600px"},children:"Loading OSDK media…"}):r.jsx("div",{style:{height:"600px"},children:r.jsx(p,{media:e.employeeDocuments})})},parameters:{docs:{source:{code:`import { PdfViewer } from "@osdk/react-components/experimental/pdf-viewer";

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
