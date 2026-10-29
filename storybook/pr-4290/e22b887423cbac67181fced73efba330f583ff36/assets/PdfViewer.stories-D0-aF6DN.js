import{j as r,M as s}from"./iframe-CWg4NKfU.js";import{P as p}from"./pdf-viewer-DRecKcnZ.js";import{E as d}from"./Employee-BAk2o20h.js";import{u as a}from"./useOsdkObject-luAaRF-L.js";import"./preload-helper-CbUGxpFK.js";import"./PdfViewer-DJIPf0MG.js";import"./index-BqvDfMBr.js";import"./BasePdfViewer-HY42n_JJ.js";import"./BasePdfViewer.module.css-CkSjDJz8.js";import"./PdfViewerAnnotationLayer-D_D-XEJF.js";import"./constants-DsXMS3N3.js";import"./usePdfDocument-DPVMth8o.js";import"./PdfViewerOutlineSidebar-0GakoJ-w.js";import"./PdfViewerSidebarHeader-SaQHVQdN.js";import"./useBaseUiId-DspZ6BgH.js";import"./useControlled-CxeE38RI.js";import"./CompositeRoot-D9K-LMLC.js";import"./CompositeItem-B-7NNP1P.js";import"./ToolbarRootContext-DB3lOv4Z.js";import"./composite-BZR9RT0J.js";import"./svgIconContainer-CfhV0gWc.js";import"./PdfViewerSearchBar-BbhHUc7F.js";import"./chevron-up-GSj8drqA.js";import"./chevron-down-GiI9wTRT.js";import"./cross-C4B5H0O1.js";import"./PdfViewerSidebar-C0c9rq_v.js";import"./index-BRlDD1gT.js";import"./index-BwmCKmIG.js";import"./index-Dcq7c99I.js";import"./PdfViewerToolbar-Cmccuq96.js";import"./Button-BMAG39_Z.js";import"./chevron-right-RIlg8MpH.js";import"./Input-CkLJO43y.js";import"./search-Csa8UJRl.js";import"./spin-ByoWVlaR.js";import"./error-DpR2m3gK.js";import"./withOsdkMetrics-Cl-t5p_W.js";import"./makeExternalStore-PjLZ2rt4.js";const U={title:"Components/DocumentViewer/Renderers/PdfViewer",component:p,tags:["beta"],parameters:{controls:{expanded:!0}}},o={render:()=>{const{object:e,isLoading:n}=a(d,s);return n||!(e!=null&&e.employeeDocuments)?r.jsx("div",{style:{height:"600px"},children:"Loading OSDK media…"}):r.jsx("div",{style:{height:"600px"},children:r.jsx(p,{media:e.employeeDocuments})})},parameters:{docs:{source:{code:`// Access media from an OSDK object's media reference property
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
