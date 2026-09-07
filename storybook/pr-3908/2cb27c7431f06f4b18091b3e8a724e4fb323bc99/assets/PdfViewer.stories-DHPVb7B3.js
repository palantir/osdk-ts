import{j as r,M as s}from"./iframe-jVZSa0_O.js";import{P as p}from"./pdf-viewer-CZ0m1i03.js";import{E as d}from"./Employee-BAk2o20h.js";import{u as a}from"./useOsdkObject-D2BxGZ8H.js";import"./preload-helper-B0JsgF0Q.js";import"./PdfViewer-DW_eRDQY.js";import"./index-cz87o1u2.js";import"./BasePdfViewer-Bg-_rCra.js";import"./BasePdfViewer.module.css-9y043NI2.js";import"./PdfViewerAnnotationLayer-CgiOjAbQ.js";import"./constants-DsXMS3N3.js";import"./usePdfDocument-Dkm-vK6I.js";import"./PdfViewerOutlineSidebar-Dusly85D.js";import"./PdfViewerSidebarHeader-C_kJ8EY_.js";import"./useBaseUiId-Dh7cbX1i.js";import"./useControlled-PPoFg-g2.js";import"./CompositeRoot-C9Vt8VFM.js";import"./CompositeItem-Bdw-jz1U.js";import"./ToolbarRootContext-W1O_4HxY.js";import"./composite-B1R1VOU-.js";import"./svgIconContainer-CCkoUGO-.js";import"./PdfViewerSearchBar-WooVDK4y.js";import"./chevron-up-t4wLVQYF.js";import"./chevron-down-vgR9jQm9.js";import"./cross-D_kf2VMY.js";import"./PdfViewerSidebar-9Q6gqzaE.js";import"./index-DprOP2mE.js";import"./index-CFlWgQDO.js";import"./index-DRJcVra2.js";import"./PdfViewerToolbar-B8f76iUU.js";import"./Button-ruj5eHNw.js";import"./chevron-right--CjNk6a9.js";import"./Input-DE-dqgbb.js";import"./search-y5GiQxVJ.js";import"./spin-BZt4imx5.js";import"./error-BkWT_eOO.js";import"./withOsdkMetrics-C6vVTJkI.js";import"./makeExternalStore-D0xCnJrG.js";const U={title:"Components/DocumentViewer/Renderers/PdfViewer",component:p,tags:["beta"],parameters:{controls:{expanded:!0}}},o={render:()=>{const{object:e,isLoading:n}=a(d,s);return n||!(e!=null&&e.employeeDocuments)?r.jsx("div",{style:{height:"600px"},children:"Loading OSDK media…"}):r.jsx("div",{style:{height:"600px"},children:r.jsx(p,{media:e.employeeDocuments})})},parameters:{docs:{source:{code:`// Access media from an OSDK object's media reference property
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
