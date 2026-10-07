import{j as r,M as s}from"./iframe-CUE_Kfqx.js";import{P as p}from"./pdf-viewer-C_Is_9g1.js";import{E as d}from"./Employee-BAk2o20h.js";import{u as a}from"./useOsdkObject-N--bt9YG.js";import"./preload-helper-AIizN4Br.js";import"./PdfViewer-BTi_s0Q-.js";import"./index-BiahB8So.js";import"./BasePdfViewer-1cAJpwBO.js";import"./BasePdfViewer.module.css-0yhijrPE.js";import"./PdfViewerAnnotationLayer-DMcC3QXJ.js";import"./constants-DsXMS3N3.js";import"./usePdfDocument-dvfI6pTR.js";import"./PdfViewerOutlineSidebar-BEZb-eIO.js";import"./PdfViewerSidebarHeader-0adF68AE.js";import"./useBaseUiId-DGLgADwu.js";import"./useControlled-DMcW3WuP.js";import"./CompositeRoot-CDSz4Y6J.js";import"./CompositeItem-B7RByGkr.js";import"./ToolbarRootContext-_FDeKHlj.js";import"./composite-hPB6o8bz.js";import"./svgIconContainer-BHr2UOEv.js";import"./PdfViewerSearchBar-D2EuCybc.js";import"./chevron-up-DQrrkzRc.js";import"./chevron-down-DAAZF-qc.js";import"./cross-x00S7IUW.js";import"./PdfViewerSidebar-BWHv4jWK.js";import"./index-u0e1YJAK.js";import"./index-Kj8T-xKz.js";import"./index-Dn1aYiaH.js";import"./PdfViewerToolbar-BdBn1yxs.js";import"./Button-Dhiaj79W.js";import"./chevron-right-DNYiOlVT.js";import"./Input-Bbk2_em_.js";import"./search-CrkbBBP3.js";import"./spin-CptlyRpn.js";import"./error-CgrtB7s8.js";import"./withOsdkMetrics-Z4Ee0NlE.js";import"./makeExternalStore-CCErHO8u.js";const U={title:"Components/DocumentViewer/Renderers/PdfViewer",component:p,tags:["beta"],parameters:{controls:{expanded:!0}}},o={render:()=>{const{object:e,isLoading:n}=a(d,s);return n||!(e!=null&&e.employeeDocuments)?r.jsx("div",{style:{height:"600px"},children:"Loading OSDK media…"}):r.jsx("div",{style:{height:"600px"},children:r.jsx(p,{media:e.employeeDocuments})})},parameters:{docs:{source:{code:`// Access media from an OSDK object's media reference property
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
        code: \`// Access media from an OSDK object's media reference property
const employee = useOsdkObject(Employee, employeePk);
<PdfViewer media={employee.employeeDocuments} />\`
      }
    }
  }
}`,...(i=(m=o.parameters)==null?void 0:m.docs)==null?void 0:i.source}}};const W=["Default"];export{o as Default,W as __namedExportsOrder,U as default};
