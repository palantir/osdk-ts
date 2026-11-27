import{j as r,M as s}from"./iframe-BKkgtFSo.js";import{P as p}from"./pdf-viewer-ch-Dwds7.js";import{E as d}from"./Employee-BAk2o20h.js";import{u as a}from"./useOsdkObject-BqxdaA4I.js";import"./preload-helper-Dp1pzeXC.js";import"./PdfViewer-CiZfjCZE.js";import"./index-Dvbp0kPd.js";import"./BasePdfViewer-vUJCd4On.js";import"./BasePdfViewer.module.css-CYcBrQCl.js";import"./PdfViewerAnnotationLayer-CavLotMz.js";import"./constants-DsXMS3N3.js";import"./usePdfDocument-DC5SN8qZ.js";import"./PdfViewerOutlineSidebar-CwXgCVqI.js";import"./PdfViewerSidebarHeader-EwjGj17Z.js";import"./useBaseUiId-BfmvZ33T.js";import"./useControlled-CiCRPIrb.js";import"./CompositeRoot-9HaszsTh.js";import"./CompositeItem-B3A9StDG.js";import"./ToolbarRootContext-CGelScnS.js";import"./composite-CVFofIE7.js";import"./svgIconContainer-Ce9VGxQH.js";import"./PdfViewerSearchBar-0fBLyk60.js";import"./chevron-up-YSHwn7pL.js";import"./chevron-down-C5BYt7gU.js";import"./cross-5K119jUx.js";import"./PdfViewerSidebar-BwmodcU_.js";import"./index-CVd367Vi.js";import"./index-CNoy-iis.js";import"./index-BDs07rBu.js";import"./PdfViewerToolbar-DUN__ErM.js";import"./Button-D0Mtf1Wu.js";import"./chevron-right-B2aZsFr8.js";import"./Input-ajiamWew.js";import"./search-VxZ7VsjM.js";import"./spin-DPfQL-HR.js";import"./error-DeWUfdBM.js";import"./withOsdkMetrics-Bs5QRS3m.js";import"./makeExternalStore-Qrh_OJH6.js";const U={title:"Components/DocumentViewer/Renderers/PdfViewer",component:p,tags:["beta"],parameters:{controls:{expanded:!0}}},o={render:()=>{const{object:e,isLoading:n}=a(d,s);return n||!(e!=null&&e.employeeDocuments)?r.jsx("div",{style:{height:"600px"},children:"Loading OSDK media…"}):r.jsx("div",{style:{height:"600px"},children:r.jsx(p,{media:e.employeeDocuments})})},parameters:{docs:{source:{code:`// Access media from an OSDK object's media reference property
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
