import{j as r,M as s}from"./iframe-J30hPVdk.js";import{P as p}from"./pdf-viewer-D5Zbuhq6.js";import{E as d}from"./Employee-BAk2o20h.js";import{u as a}from"./useOsdkObject-CoQEpyBk.js";import"./preload-helper-21pBjwGc.js";import"./PdfViewer-Ca89BJA0.js";import"./index-DzFJcvqE.js";import"./BasePdfViewer-JJHvgmpg.js";import"./BasePdfViewer.module.css-eTEN7cF7.js";import"./PdfViewerAnnotationLayer-BWWg0QHR.js";import"./constants-DsXMS3N3.js";import"./usePdfDocument-L-ntsw2x.js";import"./PdfViewerOutlineSidebar-Co-uCZYa.js";import"./PdfViewerSidebarHeader-CIcbzJT4.js";import"./useBaseUiId-BPzj-rci.js";import"./useControlled-CGDYKM6L.js";import"./CompositeRoot-BbFAycp0.js";import"./CompositeItem-Jmu2r9JC.js";import"./ToolbarRootContext-ClVL2vmD.js";import"./composite-BMEMfwlO.js";import"./svgIconContainer-Bmpr-YG-.js";import"./PdfViewerSearchBar-C13kQkA4.js";import"./chevron-up-B4H5o32y.js";import"./chevron-down-CdNGoo9Q.js";import"./cross-1ilXjfTr.js";import"./PdfViewerSidebar-BtELUx5w.js";import"./index-BLPazZJs.js";import"./index-B1uCCcyj.js";import"./index-D8MmmnXz.js";import"./PdfViewerToolbar-8LlcW6xw.js";import"./Button-9RAeKDxl.js";import"./chevron-right-DG3Myan2.js";import"./Input-DW9kemBa.js";import"./search-CBu-pF0G.js";import"./spin-DFo3tP3u.js";import"./error-BSLpMKqj.js";import"./withOsdkMetrics-Bp-1idm_.js";import"./makeExternalStore-DALczlz3.js";const U={title:"Components/DocumentViewer/Renderers/PdfViewer",component:p,tags:["beta"],parameters:{controls:{expanded:!0}}},o={render:()=>{const{object:e,isLoading:n}=a(d,s);return n||!(e!=null&&e.employeeDocuments)?r.jsx("div",{style:{height:"600px"},children:"Loading OSDK media…"}):r.jsx("div",{style:{height:"600px"},children:r.jsx(p,{media:e.employeeDocuments})})},parameters:{docs:{source:{code:`// Access media from an OSDK object's media reference property
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
