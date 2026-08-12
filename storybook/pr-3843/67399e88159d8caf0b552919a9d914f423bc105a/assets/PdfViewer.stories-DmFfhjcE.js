import{j as r,M as s}from"./iframe-B4fcYJiT.js";import{P as p}from"./pdf-viewer-DNM2qdPW.js";import{E as d}from"./Employee-BAk2o20h.js";import{u as a}from"./useOsdkObject-tgv1SJCi.js";import"./preload-helper-5Xw9mBMZ.js";import"./PdfRenderer-DRDGTBg1.js";import"./index-vOfuVkgp.js";import"./PdfViewer-Bix5OpFL.js";import"./PdfViewer.module.css-DYorHLAL.js";import"./PdfViewerAnnotationLayer-DcsEajsw.js";import"./constants-DsXMS3N3.js";import"./usePdfDocument-C1ZbcCti.js";import"./PdfViewerOutlineSidebar-Daq4U1TO.js";import"./PdfViewerSidebarHeader-BtmJmhb3.js";import"./useBaseUiId-B6WbWpXC.js";import"./useControlled-DX4yqe1s.js";import"./CompositeRoot-DiE60TGY.js";import"./CompositeItem-pQ2K7xcn.js";import"./ToolbarRootContext-y8R4SKxQ.js";import"./composite-B-tdErfc.js";import"./svgIconContainer-DPEA_BLS.js";import"./PdfViewerSearchBar-y-vaE5wJ.js";import"./chevron-up-B2WB3VtE.js";import"./chevron-down-D4_4ihME.js";import"./cross-C_JdOVLy.js";import"./PdfViewerSidebar-DC_RD4T4.js";import"./index-Rk3z2JLL.js";import"./index-Bt4bJlhP.js";import"./index-CJQLe4j-.js";import"./PdfViewerToolbar-BjOd53wN.js";import"./Button-D_oMeqth.js";import"./chevron-right-CSgDNdOk.js";import"./Input-DZvTEW1z.js";import"./search-CIBP2gcU.js";import"./spin-CegJRSvv.js";import"./error-BdWXxwFt.js";import"./withOsdkMetrics-BoWW8iWH.js";import"./makeExternalStore-DVTzYonn.js";const U={title:"Components/DocumentViewer/Renderers/PdfViewer",component:p,tags:["beta"],parameters:{controls:{expanded:!0}}},o={render:()=>{const{object:e,isLoading:n}=a(d,s);return n||!(e!=null&&e.employeeDocuments)?r.jsx("div",{style:{height:"600px"},children:"Loading OSDK media…"}):r.jsx("div",{style:{height:"600px"},children:r.jsx(p,{media:e.employeeDocuments})})},parameters:{docs:{source:{code:`import { PdfViewer } from "@osdk/react-components/experimental/pdf-viewer";

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
