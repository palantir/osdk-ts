import{j as r,M as s}from"./iframe-Cuh-yC9g.js";import{P as p}from"./pdf-viewer-DKpKtbrx.js";import{E as d}from"./Employee-BAk2o20h.js";import{u as a}from"./useOsdkObject-DWNYbTc-.js";import"./preload-helper-Co1xc5DN.js";import"./PdfViewer-CGY5Md0B.js";import"./index-DWUob4WV.js";import"./BasePdfViewer-CgyPCocM.js";import"./BasePdfViewer.module.css-B_wagGaz.js";import"./PdfViewerAnnotationLayer-iOObxc8D.js";import"./constants-DsXMS3N3.js";import"./usePdfDocument-BXB52l8R.js";import"./PdfViewerOutlineSidebar-DLLUSZ6t.js";import"./PdfViewerSidebarHeader-skd2Ld6A.js";import"./useBaseUiId-Czk2OPtm.js";import"./useControlled-7KsxQpTK.js";import"./CompositeRoot-CECaS8CW.js";import"./CompositeItem-BJ_X-ts8.js";import"./ToolbarRootContext-D0bBBUnA.js";import"./composite-BCtP-Clm.js";import"./svgIconContainer-GL6glClw.js";import"./PdfViewerSearchBar-DqEnxbow.js";import"./chevron-up-DWz3mbq0.js";import"./chevron-down-Bl1gRnzA.js";import"./cross-BjB39GcZ.js";import"./PdfViewerSidebar-BbkTGSju.js";import"./index-EP_PqEfu.js";import"./index-3lcaIBPr.js";import"./index-wPALhrfN.js";import"./PdfViewerToolbar-devLS6B7.js";import"./Button-B6v4dcvN.js";import"./chevron-right-CRejjZE0.js";import"./Input-LmihMdos.js";import"./search-B0_wC5Cw.js";import"./spin-7vWpYbSD.js";import"./error-0z2irTLT.js";import"./withOsdkMetrics-2__WXqYS.js";import"./makeExternalStore-BdhPqHms.js";const U={title:"Components/DocumentViewer/Renderers/PdfViewer",component:p,tags:["beta"],parameters:{controls:{expanded:!0}}},o={render:()=>{const{object:e,isLoading:n}=a(d,s);return n||!(e!=null&&e.employeeDocuments)?r.jsx("div",{style:{height:"600px"},children:"Loading OSDK media…"}):r.jsx("div",{style:{height:"600px"},children:r.jsx(p,{media:e.employeeDocuments})})},parameters:{docs:{source:{code:`// Access media from an OSDK object's media reference property
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
