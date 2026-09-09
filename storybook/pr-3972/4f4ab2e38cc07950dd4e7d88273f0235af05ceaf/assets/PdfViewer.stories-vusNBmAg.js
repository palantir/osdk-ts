import{j as r,M as s}from"./iframe-CK77c45c.js";import{P as p}from"./pdf-viewer-B_pUELUo.js";import{E as d}from"./Employee-BAk2o20h.js";import{u as a}from"./useOsdkObject-DCSZ3TsQ.js";import"./preload-helper-DbNEja4W.js";import"./PdfViewer-CDVaJkLm.js";import"./index-C442JOIH.js";import"./BasePdfViewer-BJiar6Jb.js";import"./BasePdfViewer.module.css-BYIk-yYd.js";import"./PdfViewerAnnotationLayer-DU3KVDM8.js";import"./constants-DsXMS3N3.js";import"./usePdfDocument-CcdTV5zF.js";import"./PdfViewerOutlineSidebar-L7AKW-QA.js";import"./PdfViewerSidebarHeader-Cnvjpxso.js";import"./useBaseUiId-dVZqGFlU.js";import"./useControlled-jnmU5UAL.js";import"./CompositeRoot-DzPqxPrx.js";import"./CompositeItem-CAzkW6h4.js";import"./ToolbarRootContext-BQcuSjIX.js";import"./composite-Dh-nFKNO.js";import"./svgIconContainer-L_jjiIf-.js";import"./PdfViewerSearchBar-DycebmGN.js";import"./chevron-up-B2kOBdV2.js";import"./chevron-down-CFkNPRkg.js";import"./cross-CwI5OEk2.js";import"./PdfViewerSidebar-DOZIVkPg.js";import"./index-1zjImjvm.js";import"./index-qnj-Mesk.js";import"./index-BoFZ_UqF.js";import"./PdfViewerToolbar-CtAnoy-e.js";import"./Button-CWY22zau.js";import"./chevron-right-BoGmmrtU.js";import"./Input-DeIqzZkQ.js";import"./search-CV_E7rKM.js";import"./spin-3GRPs9aM.js";import"./error-BvwPFshU.js";import"./withOsdkMetrics-7D8iT2W4.js";import"./makeExternalStore-C2N1fTLN.js";const U={title:"Components/DocumentViewer/Renderers/PdfViewer",component:p,tags:["beta"],parameters:{controls:{expanded:!0}}},o={render:()=>{const{object:e,isLoading:n}=a(d,s);return n||!(e!=null&&e.employeeDocuments)?r.jsx("div",{style:{height:"600px"},children:"Loading OSDK media…"}):r.jsx("div",{style:{height:"600px"},children:r.jsx(p,{media:e.employeeDocuments})})},parameters:{docs:{source:{code:`// Access media from an OSDK object's media reference property
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
