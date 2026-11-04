import{j as r,M as s}from"./iframe-DWecEh6Z.js";import{P as p}from"./pdf-viewer-B1tP5hcj.js";import{E as d}from"./Employee-BAk2o20h.js";import{u as a}from"./useOsdkObject-BdShE2br.js";import"./preload-helper-Bbi2Z730.js";import"./PdfViewer-DgkLANJF.js";import"./index-6GDxt5zW.js";import"./BasePdfViewer-CyY_OiyY.js";import"./BasePdfViewer.module.css-CTTWDZ_s.js";import"./PdfViewerAnnotationLayer-63lmwRa2.js";import"./constants-DsXMS3N3.js";import"./usePdfDocument-D71YEwS3.js";import"./PdfViewerOutlineSidebar-D4LTu_7q.js";import"./PdfViewerSidebarHeader-CDH1ZJbP.js";import"./useBaseUiId-DGtSF2d7.js";import"./useControlled-DxZ-cBby.js";import"./CompositeRoot-BmQXXL_v.js";import"./CompositeItem-K9AR25LJ.js";import"./ToolbarRootContext-D-1OWq12.js";import"./composite-Dkoqcymr.js";import"./svgIconContainer-CzZM0mPh.js";import"./PdfViewerSearchBar-C3MQhOZ0.js";import"./chevron-up-DhCvWGQU.js";import"./chevron-down-C6k7Uas0.js";import"./cross-DJ8vlukc.js";import"./PdfViewerSidebar-DOdMwek5.js";import"./index-B-5_Mr4U.js";import"./index-DwNzNK9a.js";import"./index-CgyINOqj.js";import"./PdfViewerToolbar-Bf-tYwjG.js";import"./Button-Cipj2Ppc.js";import"./chevron-right-DtJFkUEs.js";import"./Input-CalqcJQf.js";import"./search-Dq1J9kTw.js";import"./spin-CupVo15E.js";import"./error-BHOwo5JQ.js";import"./withOsdkMetrics-BTTMLJya.js";import"./makeExternalStore-BKGvKQz7.js";const U={title:"Components/DocumentViewer/Renderers/PdfViewer",component:p,tags:["beta"],parameters:{controls:{expanded:!0}}},o={render:()=>{const{object:e,isLoading:n}=a(d,s);return n||!(e!=null&&e.employeeDocuments)?r.jsx("div",{style:{height:"600px"},children:"Loading OSDK media…"}):r.jsx("div",{style:{height:"600px"},children:r.jsx(p,{media:e.employeeDocuments})})},parameters:{docs:{source:{code:`// Access media from an OSDK object's media reference property
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
