import{j as r,M as s}from"./iframe-CjvYcpTc.js";import{P as p}from"./pdf-viewer-BqVmMH1-.js";import{E as d}from"./Employee-BAk2o20h.js";import{u as a}from"./useOsdkObject-mPnkk9uz.js";import"./preload-helper-CwAZ_RFp.js";import"./PdfViewer-afqX6Y-L.js";import"./index-DuZ19wcn.js";import"./BasePdfViewer-ENNcpaCj.js";import"./BasePdfViewer.module.css-Bdk8bvao.js";import"./PdfViewerAnnotationLayer-BgdQEiEA.js";import"./constants-DsXMS3N3.js";import"./usePdfDocument-D7ztqwHh.js";import"./PdfViewerOutlineSidebar-DwkoO4zt.js";import"./PdfViewerSidebarHeader-CUUSgjgk.js";import"./useBaseUiId-CZUJXt98.js";import"./useControlled-BgiktbGb.js";import"./CompositeRoot-BOGEONXL.js";import"./CompositeItem-CrZyp1SA.js";import"./ToolbarRootContext-H5FrOgLL.js";import"./composite-Dv8ZzttY.js";import"./svgIconContainer-B4kwPvVG.js";import"./PdfViewerSearchBar-5aL1Xczu.js";import"./chevron-up-BF8EWcTU.js";import"./chevron-down-B6AkEAGC.js";import"./cross-C7lWgdj2.js";import"./PdfViewerSidebar-oPuS_YEr.js";import"./index-BaiLSRkn.js";import"./index-CEXd5f6A.js";import"./index-DNoEMSLE.js";import"./PdfViewerToolbar-BmC0G3Di.js";import"./Button-x48_kffx.js";import"./chevron-right-3ZnYiS86.js";import"./Input-B4ChrBJV.js";import"./search-C9XpCEsC.js";import"./spin-BkDGoIOy.js";import"./error-DdgUBnOy.js";import"./withOsdkMetrics-c8up4Ye7.js";import"./makeExternalStore-CTMnuTK_.js";const U={title:"Components/DocumentViewer/Renderers/PdfViewer",component:p,tags:["beta"],parameters:{controls:{expanded:!0}}},o={render:()=>{const{object:e,isLoading:n}=a(d,s);return n||!(e!=null&&e.employeeDocuments)?r.jsx("div",{style:{height:"600px"},children:"Loading OSDK media…"}):r.jsx("div",{style:{height:"600px"},children:r.jsx(p,{media:e.employeeDocuments})})},parameters:{docs:{source:{code:`// Access media from an OSDK object's media reference property
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
