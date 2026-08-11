import{j as r,M as s}from"./iframe-Yz96DrPS.js";import{P as p}from"./pdf-viewer-BYO4Eer4.js";import{E as d}from"./Employee-BAk2o20h.js";import{u as a}from"./useOsdkObject-eeYrApnY.js";import"./preload-helper-DSFQiPJa.js";import"./PdfRenderer-BtejNv2I.js";import"./index-CA1nYKRZ.js";import"./PdfViewer-CkVLNRt4.js";import"./PdfViewer.module.css-Dkqh-siW.js";import"./PdfViewerAnnotationLayer-Bb9nO2LO.js";import"./constants-DsXMS3N3.js";import"./usePdfDocument-DqFi5GYp.js";import"./PdfViewerOutlineSidebar-BCiJjUqE.js";import"./PdfViewerSidebarHeader-4iFtzHsw.js";import"./useBaseUiId-Bc9L5zEM.js";import"./useControlled-khTqGeBT.js";import"./CompositeRoot-BDJi-ptN.js";import"./CompositeItem-CaVP6J8g.js";import"./ToolbarRootContext-k35ZWRp2.js";import"./composite-1RMje4bP.js";import"./svgIconContainer-IHZKkt63.js";import"./PdfViewerSearchBar-D4XW36NY.js";import"./chevron-up-B13InWWa.js";import"./chevron-down-D2BRaLqM.js";import"./cross-BL7_pA6T.js";import"./PdfViewerSidebar-98OSfjq5.js";import"./index-BobGwXvv.js";import"./index-DmVlcIuM.js";import"./index-D76oELgs.js";import"./PdfViewerToolbar-CRJ-GLCN.js";import"./Button-D4d_fs9b.js";import"./chevron-right-Dkg0LE1L.js";import"./Input-BRSvXeIv.js";import"./search-CxWHrvts.js";import"./spin-Dy-6Sy7A.js";import"./error-D7GMvIdW.js";import"./withOsdkMetrics-AzfXO0By.js";import"./makeExternalStore-BEyUkIfG.js";const U={title:"Components/DocumentViewer/Renderers/PdfViewer",component:p,tags:["beta"],parameters:{controls:{expanded:!0}}},o={render:()=>{const{object:e,isLoading:n}=a(d,s);return n||!(e!=null&&e.employeeDocuments)?r.jsx("div",{style:{height:"600px"},children:"Loading OSDK media…"}):r.jsx("div",{style:{height:"600px"},children:r.jsx(p,{media:e.employeeDocuments})})},parameters:{docs:{source:{code:`import { PdfViewer } from "@osdk/react-components/experimental/pdf-viewer";

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
