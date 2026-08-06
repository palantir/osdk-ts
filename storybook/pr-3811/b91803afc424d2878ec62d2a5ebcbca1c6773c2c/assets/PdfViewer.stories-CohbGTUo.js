import{j as r,M as s}from"./iframe-DP3WXvf2.js";import{P as p}from"./pdf-viewer-D6pR0Q_o.js";import{E as d}from"./Employee-BAk2o20h.js";import{u as a}from"./useOsdkObject-CnBm9snV.js";import"./preload-helper-BrwfpXMJ.js";import"./PdfRenderer-DerOum6W.js";import"./index-tWkBFRv4.js";import"./PdfViewer-IICigHIg.js";import"./PdfViewer.module.css-Tk14qk_H.js";import"./PdfViewerAnnotationLayer-CMkVe4Lh.js";import"./constants-DsXMS3N3.js";import"./usePdfDocument-B-kml1FN.js";import"./PdfViewerOutlineSidebar-D20yMQaF.js";import"./PdfViewerSidebarHeader-CezVIny2.js";import"./useBaseUiId-BOLy-sbk.js";import"./useControlled-DXyaPIDf.js";import"./CompositeRoot-DZs3KMpP.js";import"./CompositeItem-CAMOw487.js";import"./ToolbarRootContext-DomAOERZ.js";import"./composite-Bs_HXNR1.js";import"./svgIconContainer-D5YO1S9t.js";import"./PdfViewerSearchBar-KRGh5IL_.js";import"./chevron-up-BYYD0_7S.js";import"./chevron-down-DveMJf_3.js";import"./cross-D7VOxDSd.js";import"./PdfViewerSidebar-8OIawX3X.js";import"./index-D_FYBlgp.js";import"./index-4F4S8ihM.js";import"./index-dP7GtPgB.js";import"./PdfViewerToolbar-CJc3z46i.js";import"./Button-BlADiT-L.js";import"./chevron-right-Bn9W5rIp.js";import"./Input-C7i9bi6Y.js";import"./search-COU45aDA.js";import"./spin-DQumw9iC.js";import"./error-DEAaKdsx.js";import"./withOsdkMetrics-D03opsaL.js";import"./makeExternalStore-DqGepTDF.js";const U={title:"Components/DocumentViewer/Renderers/PdfViewer",component:p,tags:["beta"],parameters:{controls:{expanded:!0}}},o={render:()=>{const{object:e,isLoading:n}=a(d,s);return n||!(e!=null&&e.employeeDocuments)?r.jsx("div",{style:{height:"600px"},children:"Loading OSDK media…"}):r.jsx("div",{style:{height:"600px"},children:r.jsx(p,{media:e.employeeDocuments})})},parameters:{docs:{source:{code:`import { PdfViewer } from "@osdk/react-components/experimental/pdf-viewer";

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
