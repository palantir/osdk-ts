import{j as r,M as s}from"./iframe-CyZmVsjD.js";import{P as p}from"./pdf-viewer-C9CKsO3N.js";import{E as d}from"./Employee-BAk2o20h.js";import{u as a}from"./useOsdkObject-BB7kcMzC.js";import"./preload-helper-HEYW5JNb.js";import"./PdfRenderer-DYaANKj6.js";import"./index-BIsnimhh.js";import"./PdfViewer-c9y6ArgU.js";import"./PdfViewer.module.css-Cykc8Eez.js";import"./PdfViewerAnnotationLayer-C3Z_maBo.js";import"./constants-DsXMS3N3.js";import"./usePdfDocument-DmzucFWY.js";import"./PdfViewerOutlineSidebar-IroxDx_k.js";import"./PdfViewerSidebarHeader-gteaH0F6.js";import"./useBaseUiId-DxM_zxss.js";import"./useControlled-xZiD0Urq.js";import"./CompositeRoot-D8MmsrHz.js";import"./CompositeItem-XqkpCBrT.js";import"./ToolbarRootContext-D0SMDc5d.js";import"./composite-XxoSgZbC.js";import"./svgIconContainer-AUYrzoLK.js";import"./PdfViewerSearchBar-BxUEa6Ka.js";import"./chevron-up-BnqqxUiv.js";import"./chevron-down-P34Asnf7.js";import"./cross-B2-IrGzR.js";import"./PdfViewerSidebar--qPN_w2-.js";import"./index-DCxG3zDk.js";import"./index-HhNb9coI.js";import"./index-C7Hi_lc2.js";import"./PdfViewerToolbar-BSa2FxPp.js";import"./Button-CSdeTDcp.js";import"./chevron-right-DsMZPImA.js";import"./Input-Bl-GgjYI.js";import"./search-DjWlgkJN.js";import"./spin-3_KPN5Ec.js";import"./error-Dc4Tyqrk.js";import"./withOsdkMetrics-CKttVeW1.js";import"./makeExternalStore-CDO6Oc7I.js";const U={title:"Components/DocumentViewer/Renderers/PdfViewer",component:p,tags:["beta"],parameters:{controls:{expanded:!0}}},o={render:()=>{const{object:e,isLoading:n}=a(d,s);return n||!(e!=null&&e.employeeDocuments)?r.jsx("div",{style:{height:"600px"},children:"Loading OSDK media…"}):r.jsx("div",{style:{height:"600px"},children:r.jsx(p,{media:e.employeeDocuments})})},parameters:{docs:{source:{code:`import { PdfViewer } from "@osdk/react-components/experimental/pdf-viewer";

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
