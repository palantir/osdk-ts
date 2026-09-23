import{j as r,M as s}from"./iframe-ClVzwAwQ.js";import{P as p}from"./pdf-viewer-BcAIVFON.js";import{E as d}from"./Employee-BAk2o20h.js";import{u as a}from"./useOsdkObject-bhUdI8FU.js";import"./preload-helper-Cv11LvJP.js";import"./PdfViewer-4zbSG2wL.js";import"./index-BGl-ufsM.js";import"./BasePdfViewer-uVWxydKw.js";import"./BasePdfViewer.module.css-j7VGi9ba.js";import"./PdfViewerAnnotationLayer-CkRum2tc.js";import"./constants-DsXMS3N3.js";import"./usePdfDocument-D_7RGOds.js";import"./PdfViewerOutlineSidebar-C86nz1QY.js";import"./PdfViewerSidebarHeader-BUaK1PVE.js";import"./useBaseUiId-DBp6INKz.js";import"./useControlled-CYJtKTqW.js";import"./CompositeRoot-C-00yf4w.js";import"./CompositeItem-B_fSDSC7.js";import"./ToolbarRootContext-D3yxcxuQ.js";import"./composite-cy3jdAoe.js";import"./svgIconContainer-Bay1n-zA.js";import"./PdfViewerSearchBar-DuRGDtB6.js";import"./chevron-up-Duc1UKrz.js";import"./chevron-down-UByA3gj5.js";import"./cross-DkZeF945.js";import"./PdfViewerSidebar-CMcTvYc8.js";import"./index-DL1_yfl9.js";import"./index-CY6w5O7H.js";import"./index-CPJZzp1O.js";import"./PdfViewerToolbar-CEkDZhOO.js";import"./Button-D5bJOK4o.js";import"./chevron-right-Dxl-Dm_2.js";import"./Input-BEJWa7gG.js";import"./search-DY6yvOy6.js";import"./spin-D1DLrlqz.js";import"./error-BmOSQ-Av.js";import"./withOsdkMetrics-B7DbvHC0.js";import"./makeExternalStore-Bgk32_hH.js";const U={title:"Components/DocumentViewer/Renderers/PdfViewer",component:p,tags:["beta"],parameters:{controls:{expanded:!0}}},o={render:()=>{const{object:e,isLoading:n}=a(d,s);return n||!(e!=null&&e.employeeDocuments)?r.jsx("div",{style:{height:"600px"},children:"Loading OSDK media…"}):r.jsx("div",{style:{height:"600px"},children:r.jsx(p,{media:e.employeeDocuments})})},parameters:{docs:{source:{code:`// Access media from an OSDK object's media reference property
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
