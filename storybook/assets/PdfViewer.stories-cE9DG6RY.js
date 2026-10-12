import{j as r,M as s}from"./iframe-DYtUFfpV.js";import{P as p}from"./pdf-viewer-CLxp-jQR.js";import{E as d}from"./Employee-BAk2o20h.js";import{u as a}from"./useOsdkObject-DMZBlDh0.js";import"./preload-helper-Dp1pzeXC.js";import"./PdfViewer-faeJuChS.js";import"./index-B_B03ZgQ.js";import"./BasePdfViewer-BH08eWX3.js";import"./BasePdfViewer.module.css-DKkT4Dl0.js";import"./PdfViewerAnnotationLayer-DuPdYHBe.js";import"./constants-DsXMS3N3.js";import"./usePdfDocument-SJyJnig9.js";import"./PdfViewerOutlineSidebar-u-pQa6W4.js";import"./PdfViewerSidebarHeader-DJ-Egg44.js";import"./useBaseUiId-DGMDSr1w.js";import"./useControlled-CTXIF64s.js";import"./CompositeRoot-B32B850V.js";import"./CompositeItem-BjuvjbZw.js";import"./ToolbarRootContext-DcFxLx-B.js";import"./composite-5PJSFBR3.js";import"./svgIconContainer-DFzm68WI.js";import"./PdfViewerSearchBar-C2Vm8AXE.js";import"./chevron-up-BITAyD3g.js";import"./chevron-down-tphWLm1B.js";import"./cross-BnbnB9qW.js";import"./PdfViewerSidebar-DD_Cwp1s.js";import"./index-DYE6Durp.js";import"./index-ByCETvNt.js";import"./index-DLk7paK9.js";import"./PdfViewerToolbar-mpCxsn0B.js";import"./Button-CBBF9I1J.js";import"./chevron-right-0INjhKot.js";import"./Input-Rz5gB3-F.js";import"./search-DZ2fRThm.js";import"./spin-B-URBNm4.js";import"./error-B2G3Ssl-.js";import"./withOsdkMetrics-CSoHl_un.js";import"./makeExternalStore-ByCDRZNg.js";const U={title:"Components/DocumentViewer/Renderers/PdfViewer",component:p,tags:["beta"],parameters:{controls:{expanded:!0}}},o={render:()=>{const{object:e,isLoading:n}=a(d,s);return n||!(e!=null&&e.employeeDocuments)?r.jsx("div",{style:{height:"600px"},children:"Loading OSDK media…"}):r.jsx("div",{style:{height:"600px"},children:r.jsx(p,{media:e.employeeDocuments})})},parameters:{docs:{source:{code:`// Access media from an OSDK object's media reference property
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
