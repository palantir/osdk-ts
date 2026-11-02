import{j as r,M as s}from"./iframe-DeBKMUKb.js";import{P as p}from"./pdf-viewer-_45uXzGu.js";import{E as d}from"./Employee-BAk2o20h.js";import{u as a}from"./useOsdkObject-CN0KQGJ4.js";import"./preload-helper-DtsY9CO2.js";import"./PdfViewer-Bya5_d9j.js";import"./index-CSt4SVDo.js";import"./BasePdfViewer-DPkbaSYj.js";import"./BasePdfViewer.module.css-toR9V286.js";import"./PdfViewerAnnotationLayer-DdAqpaDJ.js";import"./constants-DsXMS3N3.js";import"./usePdfDocument-BCq1KDlF.js";import"./PdfViewerOutlineSidebar-DOIt540Z.js";import"./PdfViewerSidebarHeader-SdS_4fNq.js";import"./useBaseUiId-gjqV4iyZ.js";import"./useControlled-Cz39Exnz.js";import"./CompositeRoot-C8g2nDb4.js";import"./CompositeItem-DxScAMY-.js";import"./ToolbarRootContext-FIq2uNrn.js";import"./composite-CmHTi2sT.js";import"./svgIconContainer-O2AZIUYH.js";import"./PdfViewerSearchBar-DcJF2LRg.js";import"./chevron-up-COmqXx7x.js";import"./chevron-down-9YGLxBlF.js";import"./cross-BJHF5Gx6.js";import"./PdfViewerSidebar-Cfsx2pPY.js";import"./index-DwmniFco.js";import"./index-CPngYotl.js";import"./index-Ch6RGO_N.js";import"./PdfViewerToolbar-MeH5mpYc.js";import"./Button-UgQJdLdU.js";import"./chevron-right-DkpopWl7.js";import"./Input-DiiDZzec.js";import"./search-nMx4jBID.js";import"./spin-CQqVY11M.js";import"./error-N6V_Mqjh.js";import"./withOsdkMetrics-Cw8Hicid.js";import"./makeExternalStore-tOV9_u_X.js";const U={title:"Components/DocumentViewer/Renderers/PdfViewer",component:p,tags:["beta"],parameters:{controls:{expanded:!0}}},o={render:()=>{const{object:e,isLoading:n}=a(d,s);return n||!(e!=null&&e.employeeDocuments)?r.jsx("div",{style:{height:"600px"},children:"Loading OSDK media…"}):r.jsx("div",{style:{height:"600px"},children:r.jsx(p,{media:e.employeeDocuments})})},parameters:{docs:{source:{code:`// Access media from an OSDK object's media reference property
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
