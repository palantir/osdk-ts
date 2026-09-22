import{j as r,M as s}from"./iframe-NBWgt9Kz.js";import{P as p}from"./pdf-viewer-D3D8IHmF.js";import{E as d}from"./Employee-BAk2o20h.js";import{u as a}from"./useOsdkObject-BYYkbUCZ.js";import"./preload-helper-dD2tealv.js";import"./PdfViewer-jwO_e0JM.js";import"./index-CvVwqIuN.js";import"./BasePdfViewer-DEppOGhf.js";import"./BasePdfViewer.module.css-BLAyNnQ4.js";import"./PdfViewerAnnotationLayer-DQa2TdTo.js";import"./constants-DsXMS3N3.js";import"./usePdfDocument-DLn-cYe-.js";import"./PdfViewerOutlineSidebar-RgnTfvuu.js";import"./PdfViewerSidebarHeader-Dtv2ikxd.js";import"./useBaseUiId-CQ82DsVx.js";import"./useControlled-CzU7BR2U.js";import"./CompositeRoot-CMO-6k5Q.js";import"./CompositeItem-C9UmmHfT.js";import"./ToolbarRootContext-Ds0fuH8S.js";import"./composite-fJ5Lq9kI.js";import"./svgIconContainer-ClcvIiJ_.js";import"./PdfViewerSearchBar-BfCk336X.js";import"./chevron-up-DmrxnCTU.js";import"./chevron-down-BQb3Bdcv.js";import"./cross-DT-CTOSO.js";import"./PdfViewerSidebar-DkXw8cf2.js";import"./index-Cog39q-i.js";import"./index-zqSU5Gel.js";import"./index-CGp-CZFX.js";import"./PdfViewerToolbar-BIxA2EKZ.js";import"./Button-BFGOLVaf.js";import"./chevron-right-De7N2QS8.js";import"./Input-CslBGOUO.js";import"./search-DE3aPm_j.js";import"./spin-hhxeE2Ae.js";import"./error-EEVYrIXI.js";import"./withOsdkMetrics-P_2UpnBY.js";import"./makeExternalStore-Db1JM_b8.js";const U={title:"Components/DocumentViewer/Renderers/PdfViewer",component:p,tags:["beta"],parameters:{controls:{expanded:!0}}},o={render:()=>{const{object:e,isLoading:n}=a(d,s);return n||!(e!=null&&e.employeeDocuments)?r.jsx("div",{style:{height:"600px"},children:"Loading OSDK media…"}):r.jsx("div",{style:{height:"600px"},children:r.jsx(p,{media:e.employeeDocuments})})},parameters:{docs:{source:{code:`// Access media from an OSDK object's media reference property
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
