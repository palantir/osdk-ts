import{j as r,M as s}from"./iframe-CBRNe0Dg.js";import{P as p}from"./pdf-viewer-Cq7YuYCv.js";import{E as d}from"./Employee-BAk2o20h.js";import{u as a}from"./useOsdkObject-DLgY_P7b.js";import"./preload-helper-DJi7bbUl.js";import"./PdfViewer-yNDlL9l3.js";import"./index-BSRDLVEM.js";import"./BasePdfViewer-04g7vQiD.js";import"./BasePdfViewer.module.css-DPpHIgJX.js";import"./PdfViewerAnnotationLayer-DFqZrsJ0.js";import"./constants-DsXMS3N3.js";import"./usePdfDocument-CHuYHA7N.js";import"./PdfViewerOutlineSidebar-B6ONdN3t.js";import"./PdfViewerSidebarHeader-DOc2L7XY.js";import"./useBaseUiId-D_HMOfD5.js";import"./useControlled-DvLu4sEA.js";import"./CompositeRoot-C920c645.js";import"./CompositeItem-Di3J0NmB.js";import"./ToolbarRootContext-DULN64W3.js";import"./composite-BuD5KbGT.js";import"./svgIconContainer-BBVFHmV2.js";import"./PdfViewerSearchBar-DlLXRQeF.js";import"./chevron-up-Cv2oPjUI.js";import"./chevron-down-B0oPEK-O.js";import"./cross-DAsoWhzO.js";import"./PdfViewerSidebar-CA9V5cvp.js";import"./index-BZ5chbDc.js";import"./index-DyLUaQFL.js";import"./index-BL4-PH8Q.js";import"./PdfViewerToolbar-Ccsr0-5H.js";import"./Button-BwFbzqgO.js";import"./chevron-right-IAhUlUF1.js";import"./Input-DE2kadHj.js";import"./search-vRSw7SVB.js";import"./spin-DpOy9Ptu.js";import"./error-BdLYnG0k.js";import"./withOsdkMetrics-BL4vab8_.js";import"./makeExternalStore-BNcpWlh9.js";const U={title:"Components/DocumentViewer/Renderers/PdfViewer",component:p,tags:["beta"],parameters:{controls:{expanded:!0}}},o={render:()=>{const{object:e,isLoading:n}=a(d,s);return n||!(e!=null&&e.employeeDocuments)?r.jsx("div",{style:{height:"600px"},children:"Loading OSDK media…"}):r.jsx("div",{style:{height:"600px"},children:r.jsx(p,{media:e.employeeDocuments})})},parameters:{docs:{source:{code:`// Access media from an OSDK object's media reference property
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
