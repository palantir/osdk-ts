import{j as r,M as s}from"./iframe-BlS90ihs.js";import{P as p}from"./pdf-viewer-C8a7ZWXR.js";import{E as d}from"./Employee-BAk2o20h.js";import{u as a}from"./useOsdkObject-CGg1N1uV.js";import"./preload-helper-CO5g6I2w.js";import"./PdfRenderer-WVfK1CiB.js";import"./index-BHOc8LyC.js";import"./PdfViewer-BIUda2Jv.js";import"./PdfViewer.module.css-CYAcg5Kj.js";import"./PdfViewerAnnotationLayer-npoiWMxq.js";import"./constants-DsXMS3N3.js";import"./usePdfDocument-DdBDcM0K.js";import"./PdfViewerOutlineSidebar-CcEsqyj3.js";import"./PdfViewerSidebarHeader-BWxSlSzr.js";import"./useBaseUiId-Cf5AZRTS.js";import"./useControlled-B84OuIK1.js";import"./CompositeRoot-b02DO2xa.js";import"./CompositeItem-DCiFXfQY.js";import"./ToolbarRootContext-BkF9_TGB.js";import"./composite-DLqdT5CV.js";import"./svgIconContainer-LYrWoKiL.js";import"./PdfViewerSearchBar-D2nFDEPv.js";import"./chevron-up-DooDXUJG.js";import"./chevron-down-Cd3C4D7a.js";import"./cross-B_hisJSZ.js";import"./PdfViewerSidebar-CbJBZ-PX.js";import"./index-D3oeH8Dz.js";import"./index-U6MToZTc.js";import"./index-Dx7dMNiV.js";import"./PdfViewerToolbar-CO87HF9q.js";import"./Button-SxoUXmH3.js";import"./chevron-right-Bp13m1E7.js";import"./Input-CeNFNh0n.js";import"./search-CHH1oEbG.js";import"./spin-MMoZZito.js";import"./error-CPJsC_89.js";import"./withOsdkMetrics-Dc64VAF-.js";import"./makeExternalStore-C-0gPcpm.js";const U={title:"Components/DocumentViewer/Renderers/PdfViewer",component:p,tags:["beta"],parameters:{controls:{expanded:!0}}},o={render:()=>{const{object:e,isLoading:n}=a(d,s);return n||!(e!=null&&e.employeeDocuments)?r.jsx("div",{style:{height:"600px"},children:"Loading OSDK media…"}):r.jsx("div",{style:{height:"600px"},children:r.jsx(p,{media:e.employeeDocuments})})},parameters:{docs:{source:{code:`import { PdfViewer } from "@osdk/react-components/experimental/pdf-viewer";

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
