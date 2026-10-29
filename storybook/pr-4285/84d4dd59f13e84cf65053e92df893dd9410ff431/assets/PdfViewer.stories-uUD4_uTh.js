import{j as r,M as s}from"./iframe-BJfHzdWS.js";import{P as p}from"./pdf-viewer-CATJ1eVb.js";import{E as d}from"./Employee-BAk2o20h.js";import{u as a}from"./useOsdkObject-DlGQ-H1w.js";import"./preload-helper-Be4hJibr.js";import"./PdfViewer-n0cjVmm4.js";import"./index-BSLvxwbk.js";import"./BasePdfViewer-KdeffuTo.js";import"./BasePdfViewer.module.css-C75J53X4.js";import"./PdfViewerAnnotationLayer-D1v_ZGgu.js";import"./constants-DsXMS3N3.js";import"./usePdfDocument-BqUTEMNT.js";import"./PdfViewerOutlineSidebar-9lGX-Q6c.js";import"./PdfViewerSidebarHeader-Dq1fV2SU.js";import"./useBaseUiId-Xn3MqoRt.js";import"./useControlled-wFQSRpl4.js";import"./CompositeRoot-CglYgtPC.js";import"./CompositeItem-BKpyjtDM.js";import"./ToolbarRootContext-C9Lowhby.js";import"./composite-CrQSucJ3.js";import"./svgIconContainer-BhMqWeRt.js";import"./PdfViewerSearchBar-CJJxKOmT.js";import"./chevron-up-CR-MXKfI.js";import"./chevron-down-DcDfg2mn.js";import"./cross-VeKqoNmu.js";import"./PdfViewerSidebar-DHop_Jw8.js";import"./index-N4ZXm_T-.js";import"./index-C38cjlXr.js";import"./index-2WXta-5x.js";import"./PdfViewerToolbar-CagV8zoW.js";import"./Button-CRGaJZKK.js";import"./chevron-right-DAIckWCd.js";import"./Input-D-4Pcd1I.js";import"./search-BzsA8JvQ.js";import"./spin-C9j1pkXp.js";import"./error-D3R8RgSf.js";import"./withOsdkMetrics-DUXg2PFQ.js";import"./makeExternalStore-DIVL--_e.js";const U={title:"Components/DocumentViewer/Renderers/PdfViewer",component:p,tags:["beta"],parameters:{controls:{expanded:!0}}},o={render:()=>{const{object:e,isLoading:n}=a(d,s);return n||!(e!=null&&e.employeeDocuments)?r.jsx("div",{style:{height:"600px"},children:"Loading OSDK media…"}):r.jsx("div",{style:{height:"600px"},children:r.jsx(p,{media:e.employeeDocuments})})},parameters:{docs:{source:{code:`// Access media from an OSDK object's media reference property
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
