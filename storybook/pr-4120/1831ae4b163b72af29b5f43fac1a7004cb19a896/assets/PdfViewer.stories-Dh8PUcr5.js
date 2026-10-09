import{j as r,M as s}from"./iframe-BiR0bSaX.js";import{P as p}from"./pdf-viewer-BsB-n8VK.js";import{E as d}from"./Employee-BAk2o20h.js";import{u as a}from"./useOsdkObject-CcwTlkQ8.js";import"./preload-helper-CREsIwfv.js";import"./PdfViewer-DdqYMzCq.js";import"./index-D0Rro4ck.js";import"./BasePdfViewer-CZtyStp_.js";import"./BasePdfViewer.module.css-DdsG4Cab.js";import"./PdfViewerAnnotationLayer-DWFBoEJY.js";import"./constants-DsXMS3N3.js";import"./usePdfDocument-DZVPOiZQ.js";import"./PdfViewerOutlineSidebar-Cz5-uaB9.js";import"./PdfViewerSidebarHeader-8xtW8atO.js";import"./useBaseUiId-D3ocUoYR.js";import"./useControlled-BCuMNdH3.js";import"./CompositeRoot-DQK_VK1F.js";import"./CompositeItem-yCWRfwkd.js";import"./ToolbarRootContext-DZbYzNul.js";import"./composite-Cg5vG0V3.js";import"./svgIconContainer-DdJYmAvv.js";import"./PdfViewerSearchBar-Czy-B6E7.js";import"./chevron-up-Bc72vOOm.js";import"./chevron-down-wSopSebG.js";import"./cross-gKG73r0q.js";import"./PdfViewerSidebar-C82A6cwM.js";import"./index-Pp8hdIUW.js";import"./index-CwYWk3f5.js";import"./index-CDTZ5otF.js";import"./PdfViewerToolbar-D8AM1UT7.js";import"./Button-BjLfCn0d.js";import"./chevron-right-Cy1b3NWy.js";import"./Input-CR7mkMB4.js";import"./search-BVH0nxuW.js";import"./spin-BkPZHezf.js";import"./error-DI1HaZkw.js";import"./withOsdkMetrics-Ft25XtI9.js";import"./makeExternalStore-8TAGYWzx.js";const U={title:"Components/DocumentViewer/Renderers/PdfViewer",component:p,tags:["beta"],parameters:{controls:{expanded:!0}}},o={render:()=>{const{object:e,isLoading:n}=a(d,s);return n||!(e!=null&&e.employeeDocuments)?r.jsx("div",{style:{height:"600px"},children:"Loading OSDK media…"}):r.jsx("div",{style:{height:"600px"},children:r.jsx(p,{media:e.employeeDocuments})})},parameters:{docs:{source:{code:`// Access media from an OSDK object's media reference property
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
