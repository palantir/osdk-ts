import{j as r,M as s}from"./iframe-Ced8wIim.js";import{P as p}from"./pdf-viewer-Bz7FcEdO.js";import{E as d}from"./Employee-BAk2o20h.js";import{u as a}from"./useOsdkObject-GHhe4y5p.js";import"./preload-helper-BvnlfMzD.js";import"./PdfViewer-9kU2H9yr.js";import"./index-DwlP8Kq2.js";import"./BasePdfViewer-BOAQlTLT.js";import"./BasePdfViewer.module.css-DBnZpTfa.js";import"./PdfViewerAnnotationLayer-CcnZ65-H.js";import"./constants-DsXMS3N3.js";import"./usePdfDocument-zRNimOSa.js";import"./PdfViewerOutlineSidebar-C9zWW-Xm.js";import"./PdfViewerSidebarHeader-Cp_zwPgl.js";import"./useBaseUiId-ZzsV-V0Z.js";import"./useControlled-Bx5lxC0c.js";import"./CompositeRoot-C04S684x.js";import"./CompositeItem-CKE15s8h.js";import"./ToolbarRootContext-BjCMra_B.js";import"./composite-gyhDmABu.js";import"./svgIconContainer-_H4YWiIz.js";import"./PdfViewerSearchBar-CSTRmbWZ.js";import"./chevron-up-Gx5vPmev.js";import"./chevron-down-DpwNucWD.js";import"./cross-C1ezeDDh.js";import"./PdfViewerSidebar-BSQon-gg.js";import"./index-mKFRvtOv.js";import"./index-LDJzIvQD.js";import"./index-Cm78izMo.js";import"./PdfViewerToolbar-Cd1RkxOo.js";import"./Button-D2RSl0IU.js";import"./chevron-right-C3aGEb_f.js";import"./Input-KnIMm_iE.js";import"./search-QSUOXDqi.js";import"./spin-DQxC9wyx.js";import"./error-yQjggD5T.js";import"./withOsdkMetrics-DKNE68LV.js";import"./makeExternalStore-Cb-8iveq.js";const U={title:"Components/DocumentViewer/Renderers/PdfViewer",component:p,tags:["beta"],parameters:{controls:{expanded:!0}}},o={render:()=>{const{object:e,isLoading:n}=a(d,s);return n||!(e!=null&&e.employeeDocuments)?r.jsx("div",{style:{height:"600px"},children:"Loading OSDK media…"}):r.jsx("div",{style:{height:"600px"},children:r.jsx(p,{media:e.employeeDocuments})})},parameters:{docs:{source:{code:`// Access media from an OSDK object's media reference property
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
