import{j as r,M as s}from"./iframe-B_zRUDuE.js";import{P as p}from"./pdf-viewer-kSmm3hsB.js";import{E as d}from"./Employee-BAk2o20h.js";import{u as a}from"./useOsdkObject-DedMrGNE.js";import"./preload-helper-CxVJftgz.js";import"./PdfViewer-CDRw56ON.js";import"./index-sn9mtHlU.js";import"./BasePdfViewer-DL2PVFS_.js";import"./BasePdfViewer.module.css-CWqfZV37.js";import"./PdfViewerAnnotationLayer-DjT6i1Ue.js";import"./constants-DsXMS3N3.js";import"./usePdfDocument-BvfWs4CC.js";import"./PdfViewerOutlineSidebar-CZ-v93ul.js";import"./PdfViewerSidebarHeader-Cupy7n1_.js";import"./useBaseUiId-8u_jCgH6.js";import"./useControlled-DlwI9PYM.js";import"./CompositeRoot-DabLffaR.js";import"./CompositeItem-LThRFFEu.js";import"./ToolbarRootContext-Bj3x-8aq.js";import"./composite-CiMgDYUm.js";import"./svgIconContainer-CxXL_oXh.js";import"./PdfViewerSearchBar-bIVaehP_.js";import"./chevron-up-Cu1qiw7I.js";import"./chevron-down-C87rVGKO.js";import"./cross-_ERVYG6L.js";import"./PdfViewerSidebar-CrlOHY6d.js";import"./index-Cq4s-83z.js";import"./index-o0vWfmid.js";import"./index-DT6FHhAE.js";import"./PdfViewerToolbar-O6wtHzX6.js";import"./Button-CY0tELjq.js";import"./chevron-right-Bx8U6jva.js";import"./Input-Db4KedVJ.js";import"./search-C1xWyvK0.js";import"./spin-BtbQsrFZ.js";import"./error-Co0vxDqJ.js";import"./withOsdkMetrics-DrGnBbgp.js";import"./makeExternalStore-DD9WI4JF.js";const U={title:"Components/DocumentViewer/Renderers/PdfViewer",component:p,tags:["beta"],parameters:{controls:{expanded:!0}}},o={render:()=>{const{object:e,isLoading:n}=a(d,s);return n||!(e!=null&&e.employeeDocuments)?r.jsx("div",{style:{height:"600px"},children:"Loading OSDK media…"}):r.jsx("div",{style:{height:"600px"},children:r.jsx(p,{media:e.employeeDocuments})})},parameters:{docs:{source:{code:`// Access media from an OSDK object's media reference property
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
