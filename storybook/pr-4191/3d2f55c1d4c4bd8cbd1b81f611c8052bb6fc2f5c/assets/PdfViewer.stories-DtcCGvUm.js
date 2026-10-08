import{j as r,M as s}from"./iframe-B1-dVNhS.js";import{P as p}from"./pdf-viewer-Bvjmsc5q.js";import{E as d}from"./Employee-BAk2o20h.js";import{u as a}from"./useOsdkObject-Dg33a8O2.js";import"./preload-helper-C2ProuBv.js";import"./PdfViewer-D6lCkE5n.js";import"./index-WzbH8_Sp.js";import"./BasePdfViewer-D4CJI0GL.js";import"./BasePdfViewer.module.css-gHYhI9mY.js";import"./PdfViewerAnnotationLayer-D0CZrhRp.js";import"./constants-DsXMS3N3.js";import"./usePdfDocument-ZGUeIfTn.js";import"./PdfViewerOutlineSidebar-B2_t-OoF.js";import"./PdfViewerSidebarHeader-CEFT34YV.js";import"./useBaseUiId-B6R5LUY3.js";import"./useControlled-CY-lWJZk.js";import"./CompositeRoot-Cj8dSouc.js";import"./CompositeItem-BkBiNRQD.js";import"./ToolbarRootContext-1bs6h0vw.js";import"./composite-GFxhGtPY.js";import"./svgIconContainer-wdLWihrJ.js";import"./PdfViewerSearchBar-CqFQXEhT.js";import"./chevron-up-7DWG-eXg.js";import"./chevron-down-DucaWjk_.js";import"./cross-DSyUk5jg.js";import"./PdfViewerSidebar-DGZ_tMsU.js";import"./index-C7eChUSe.js";import"./index-Dh-RbIId.js";import"./index-E0TiBTDQ.js";import"./PdfViewerToolbar-D65TiivC.js";import"./Button-B1lo8D22.js";import"./chevron-right-D4K_OOXM.js";import"./Input-DcCcX-hv.js";import"./search-D_Yyj-29.js";import"./spin-2eBjDyRn.js";import"./error-mrqVIVBz.js";import"./withOsdkMetrics-ijmPCvgt.js";import"./makeExternalStore-WUBDRAE1.js";const U={title:"Components/DocumentViewer/Renderers/PdfViewer",component:p,tags:["beta"],parameters:{controls:{expanded:!0}}},o={render:()=>{const{object:e,isLoading:n}=a(d,s);return n||!(e!=null&&e.employeeDocuments)?r.jsx("div",{style:{height:"600px"},children:"Loading OSDK media…"}):r.jsx("div",{style:{height:"600px"},children:r.jsx(p,{media:e.employeeDocuments})})},parameters:{docs:{source:{code:`// Access media from an OSDK object's media reference property
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
