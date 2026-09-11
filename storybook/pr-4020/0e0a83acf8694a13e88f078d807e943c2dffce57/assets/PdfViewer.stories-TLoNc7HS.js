import{j as r,M as s}from"./iframe-t6gOiOpP.js";import{P as p}from"./pdf-viewer-CZcWAQQS.js";import{E as d}from"./Employee-BAk2o20h.js";import{u as a}from"./useOsdkObject-C6PeMvTI.js";import"./preload-helper-CV5pzfbJ.js";import"./PdfViewer-fB94u-9f.js";import"./index-B8f3749n.js";import"./BasePdfViewer-DwdDXEom.js";import"./BasePdfViewer.module.css-BzhlJOTX.js";import"./PdfViewerAnnotationLayer-B7Rtecib.js";import"./constants-DsXMS3N3.js";import"./usePdfDocument-CUtL7KE-.js";import"./PdfViewerOutlineSidebar-B73BuUpG.js";import"./PdfViewerSidebarHeader-YuTmCq6S.js";import"./useBaseUiId-D0UWHXkS.js";import"./useControlled-BZFiwdLD.js";import"./CompositeRoot-BEpYd6BS.js";import"./CompositeItem-BYApWBRb.js";import"./ToolbarRootContext-DZ6RrQxV.js";import"./composite-CFO_COst.js";import"./svgIconContainer-B5Lj2eIE.js";import"./PdfViewerSearchBar-CbZeRF5L.js";import"./chevron-up-CcFOAH3K.js";import"./chevron-down-DJ9UCW_x.js";import"./cross-DD5o22Zb.js";import"./PdfViewerSidebar-Dbf65Yuk.js";import"./index-Dqwb4kGz.js";import"./index-DaGdI8vt.js";import"./index-8kYg-C7M.js";import"./PdfViewerToolbar-Co6P_7nX.js";import"./Button-CSkSEq0A.js";import"./chevron-right-BZ-o4s1o.js";import"./Input-DFrbhTU8.js";import"./search-DBk5UsI-.js";import"./spin-DCPBLHX3.js";import"./error-CgIajBJj.js";import"./withOsdkMetrics-Bdbjb4hh.js";import"./makeExternalStore-Y2a1OF7x.js";const U={title:"Components/DocumentViewer/Renderers/PdfViewer",component:p,tags:["beta"],parameters:{controls:{expanded:!0}}},o={render:()=>{const{object:e,isLoading:n}=a(d,s);return n||!(e!=null&&e.employeeDocuments)?r.jsx("div",{style:{height:"600px"},children:"Loading OSDK media…"}):r.jsx("div",{style:{height:"600px"},children:r.jsx(p,{media:e.employeeDocuments})})},parameters:{docs:{source:{code:`// Access media from an OSDK object's media reference property
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
