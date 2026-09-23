import{j as r,M as s}from"./iframe-DoZpKAuy.js";import{P as p}from"./pdf-viewer-chj4kZhJ.js";import{E as d}from"./Employee-BAk2o20h.js";import{u as a}from"./useOsdkObject-DJBOQLBJ.js";import"./preload-helper-VWDIqFcw.js";import"./PdfViewer-CbbgIlPB.js";import"./index-DI9gHjQw.js";import"./BasePdfViewer-7-BTh_aK.js";import"./BasePdfViewer.module.css-CVrHHv6e.js";import"./PdfViewerAnnotationLayer-_tqhr-5l.js";import"./constants-DsXMS3N3.js";import"./usePdfDocument-CGtzn6CL.js";import"./PdfViewerOutlineSidebar-CPjObfY6.js";import"./PdfViewerSidebarHeader-eoW-DNLT.js";import"./useBaseUiId-DGOpwqqR.js";import"./useControlled-Dtv5pYI4.js";import"./CompositeRoot-DPPeigpD.js";import"./CompositeItem-JZBFttqy.js";import"./ToolbarRootContext-CkYvN6qQ.js";import"./composite-BwuXi3Qd.js";import"./svgIconContainer-DaZ9l-Xt.js";import"./PdfViewerSearchBar-CTas0Epy.js";import"./chevron-up-ChZQ0y89.js";import"./chevron-down-Chs2Nvxl.js";import"./cross-BOIWmSa8.js";import"./PdfViewerSidebar-BKj2x84r.js";import"./index-Dwncc-H5.js";import"./index-CJ3t3vUm.js";import"./index-D3VbgQBY.js";import"./PdfViewerToolbar-DlPmT5ll.js";import"./Button-Bx4A8oJL.js";import"./chevron-right-CxlPTWOA.js";import"./Input-DA4z6leT.js";import"./search-D2oluobe.js";import"./spin-a56SoFi1.js";import"./error-vQUKN10-.js";import"./withOsdkMetrics-wa8YRQpQ.js";import"./makeExternalStore-A-gxfiQg.js";const U={title:"Components/DocumentViewer/Renderers/PdfViewer",component:p,tags:["beta"],parameters:{controls:{expanded:!0}}},o={render:()=>{const{object:e,isLoading:n}=a(d,s);return n||!(e!=null&&e.employeeDocuments)?r.jsx("div",{style:{height:"600px"},children:"Loading OSDK media…"}):r.jsx("div",{style:{height:"600px"},children:r.jsx(p,{media:e.employeeDocuments})})},parameters:{docs:{source:{code:`// Access media from an OSDK object's media reference property
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
