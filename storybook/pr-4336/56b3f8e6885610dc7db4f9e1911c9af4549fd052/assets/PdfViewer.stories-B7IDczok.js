import{j as r,M as s}from"./iframe-D0kdPAo3.js";import{P as p}from"./pdf-viewer-BVbjr5zr.js";import{E as d}from"./Employee-BAk2o20h.js";import{u as a}from"./useOsdkObject-DdRzRFsW.js";import"./preload-helper-X5HFotRj.js";import"./PdfViewer-BTj_hg9Y.js";import"./index-C2K0wsys.js";import"./BasePdfViewer-DJqky_JE.js";import"./BasePdfViewer.module.css-DnEkwBZQ.js";import"./PdfViewerAnnotationLayer-Bv5o2BJh.js";import"./constants-DsXMS3N3.js";import"./usePdfDocument-DzHHh5O-.js";import"./PdfViewerOutlineSidebar-CY1C-cN4.js";import"./PdfViewerSidebarHeader-DUkb3ynd.js";import"./useBaseUiId-C6KTtyrN.js";import"./useControlled-DZabxLnK.js";import"./CompositeRoot-BAywc98U.js";import"./CompositeItem-Sp5SCghr.js";import"./ToolbarRootContext-CsF2L-Zy.js";import"./composite-DFD2cJI4.js";import"./svgIconContainer-BmwAZIQM.js";import"./PdfViewerSearchBar-D37Nq3NM.js";import"./chevron-up-B39l2e78.js";import"./chevron-down-PTlaQvf9.js";import"./cross-Dp20Xkzu.js";import"./PdfViewerSidebar-Czgx4HKU.js";import"./index-4VxIXF47.js";import"./index-BeFxKd2J.js";import"./index-BZY0MS25.js";import"./PdfViewerToolbar-BHWhu_vT.js";import"./Button-DI6m0SX0.js";import"./chevron-right-B9SlYtV3.js";import"./Input-CZD7bnty.js";import"./search-C3AmiWbF.js";import"./spin-B5awq5Pu.js";import"./error-LXdit3w4.js";import"./withOsdkMetrics-C30AWaoV.js";import"./makeExternalStore-BHFwut4R.js";const U={title:"Components/DocumentViewer/Renderers/PdfViewer",component:p,tags:["beta"],parameters:{controls:{expanded:!0}}},o={render:()=>{const{object:e,isLoading:n}=a(d,s);return n||!(e!=null&&e.employeeDocuments)?r.jsx("div",{style:{height:"600px"},children:"Loading OSDK media…"}):r.jsx("div",{style:{height:"600px"},children:r.jsx(p,{media:e.employeeDocuments})})},parameters:{docs:{source:{code:`// Access media from an OSDK object's media reference property
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
