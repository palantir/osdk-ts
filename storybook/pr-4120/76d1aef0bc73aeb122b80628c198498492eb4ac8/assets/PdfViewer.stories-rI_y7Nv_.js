import{j as r,M as s}from"./iframe-CvsBQ7Bv.js";import{P as p}from"./pdf-viewer-dC2b3HxI.js";import{E as d}from"./Employee-BAk2o20h.js";import{u as a}from"./useOsdkObject-BVBobmjO.js";import"./preload-helper-DlzqvSUq.js";import"./PdfViewer-D-DXVBkw.js";import"./index-zqvYW4SU.js";import"./BasePdfViewer-HvmTZtyi.js";import"./BasePdfViewer.module.css-a3fyadJ3.js";import"./PdfViewerAnnotationLayer-DlodQ2Kk.js";import"./constants-DsXMS3N3.js";import"./usePdfDocument-BtxZff5o.js";import"./PdfViewerOutlineSidebar-BqPPIICZ.js";import"./PdfViewerSidebarHeader-yxIF9cwV.js";import"./useBaseUiId-DJie0QLa.js";import"./useControlled-BMRWc9HY.js";import"./CompositeRoot-DtY7inzu.js";import"./CompositeItem-CgFodWwZ.js";import"./ToolbarRootContext-CUoJwkVG.js";import"./composite-tQAENqA9.js";import"./svgIconContainer-BICOG3-Z.js";import"./PdfViewerSearchBar-DBG8pX30.js";import"./chevron-up-CYHlR5AY.js";import"./chevron-down-pfssoNn9.js";import"./cross-BBfoUyvH.js";import"./PdfViewerSidebar-wYJeSFSd.js";import"./index-CGIOcGM5.js";import"./index-DWqMtX_5.js";import"./index-pktwAYcd.js";import"./PdfViewerToolbar-B9bGqjjL.js";import"./Button--C8rvOfU.js";import"./chevron-right-qDnEmCFX.js";import"./Input-CyAWOOQt.js";import"./search-DMySM0K3.js";import"./spin-CU3zGOi4.js";import"./error-D7W27UGH.js";import"./withOsdkMetrics-B_Zhux1x.js";import"./makeExternalStore-CoY10B_2.js";const U={title:"Components/DocumentViewer/Renderers/PdfViewer",component:p,tags:["beta"],parameters:{controls:{expanded:!0}}},o={render:()=>{const{object:e,isLoading:n}=a(d,s);return n||!(e!=null&&e.employeeDocuments)?r.jsx("div",{style:{height:"600px"},children:"Loading OSDK media…"}):r.jsx("div",{style:{height:"600px"},children:r.jsx(p,{media:e.employeeDocuments})})},parameters:{docs:{source:{code:`// Access media from an OSDK object's media reference property
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
