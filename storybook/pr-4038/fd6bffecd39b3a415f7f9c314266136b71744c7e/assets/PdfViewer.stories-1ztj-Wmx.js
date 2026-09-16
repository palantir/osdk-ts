import{j as r,M as s}from"./iframe-voMwDu9I.js";import{P as p}from"./pdf-viewer-BUIb8hzq.js";import{E as d}from"./Employee-BAk2o20h.js";import{u as a}from"./useOsdkObject-RMNZ4wCr.js";import"./preload-helper-YavkZJGd.js";import"./PdfViewer-N4tcMqqu.js";import"./index-C1wISBvp.js";import"./BasePdfViewer-NWgllnIs.js";import"./BasePdfViewer.module.css-DnbjRGsG.js";import"./PdfViewerAnnotationLayer-BKh01_Ok.js";import"./constants-DsXMS3N3.js";import"./usePdfDocument-Non3nyVs.js";import"./PdfViewerOutlineSidebar-DOWiCey9.js";import"./PdfViewerSidebarHeader-Jfm5zDUS.js";import"./useBaseUiId-h_zaYehG.js";import"./useControlled-DQz2j8QF.js";import"./CompositeRoot-Bo_d4cVz.js";import"./CompositeItem-DkKn9mJ-.js";import"./ToolbarRootContext-D3Zw5lJf.js";import"./composite-DmYT7ddW.js";import"./svgIconContainer-BNVNdA9N.js";import"./PdfViewerSearchBar-BzRuSP9a.js";import"./chevron-up-cwuzoM1M.js";import"./chevron-down-C58xTrh7.js";import"./cross-Dtmq2APj.js";import"./PdfViewerSidebar-B2alRwgG.js";import"./index-BRox0REU.js";import"./index-Y79_UCBN.js";import"./index-T2NqJhn0.js";import"./PdfViewerToolbar-WZJI-wxV.js";import"./Button-BuGgzmKH.js";import"./chevron-right-DsUsE-bS.js";import"./Input-fxz47iVN.js";import"./search-C1v65Y4n.js";import"./spin-Cr0_g_EL.js";import"./error-Dh0kRUzk.js";import"./withOsdkMetrics-DiALcgCI.js";import"./makeExternalStore-D4KyXXBP.js";const U={title:"Components/DocumentViewer/Renderers/PdfViewer",component:p,tags:["beta"],parameters:{controls:{expanded:!0}}},o={render:()=>{const{object:e,isLoading:n}=a(d,s);return n||!(e!=null&&e.employeeDocuments)?r.jsx("div",{style:{height:"600px"},children:"Loading OSDK media…"}):r.jsx("div",{style:{height:"600px"},children:r.jsx(p,{media:e.employeeDocuments})})},parameters:{docs:{source:{code:`// Access media from an OSDK object's media reference property
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
