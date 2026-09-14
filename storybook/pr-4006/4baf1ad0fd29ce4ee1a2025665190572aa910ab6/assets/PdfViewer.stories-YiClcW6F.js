import{j as r,M as s}from"./iframe-CGyuUHxy.js";import{P as p}from"./pdf-viewer-BCWjKNZ3.js";import{E as d}from"./Employee-BAk2o20h.js";import{u as a}from"./useOsdkObject-CIdG_cRM.js";import"./preload-helper-CHXR4TEM.js";import"./PdfViewer-CApdawDB.js";import"./index-BY9adCgo.js";import"./BasePdfViewer-C1boMg4z.js";import"./BasePdfViewer.module.css-CSPSbT6S.js";import"./PdfViewerAnnotationLayer-BCqjLVxx.js";import"./constants-DsXMS3N3.js";import"./usePdfDocument-D8rDgZ1a.js";import"./PdfViewerOutlineSidebar-CMCUL_4V.js";import"./PdfViewerSidebarHeader-an3DgX2c.js";import"./useBaseUiId-CxRjJ2eA.js";import"./useControlled-DMowJxn0.js";import"./CompositeRoot-2FnPGbNx.js";import"./CompositeItem-C9KCjhut.js";import"./ToolbarRootContext-B3Ikfeie.js";import"./composite-Ccbhb-G_.js";import"./svgIconContainer-BsIK3M0v.js";import"./PdfViewerSearchBar-IcJ7nQPb.js";import"./chevron-up-Cv2Ke0fm.js";import"./chevron-down-DvkSXyV_.js";import"./cross-IJIRpi8I.js";import"./PdfViewerSidebar-DRMuTRBR.js";import"./index-GV80kSzg.js";import"./index-BAxLRNzk.js";import"./index-CiafOJ6c.js";import"./PdfViewerToolbar-phMfEOY6.js";import"./Button-BCdalSJc.js";import"./chevron-right-CZqFLzOo.js";import"./Input-C3-P_z4v.js";import"./search-lH3pU1gQ.js";import"./spin-CoxZsxLn.js";import"./error-2nP38RK7.js";import"./withOsdkMetrics-BUGq6PJK.js";import"./makeExternalStore-DIn4B4sN.js";const U={title:"Components/DocumentViewer/Renderers/PdfViewer",component:p,tags:["beta"],parameters:{controls:{expanded:!0}}},o={render:()=>{const{object:e,isLoading:n}=a(d,s);return n||!(e!=null&&e.employeeDocuments)?r.jsx("div",{style:{height:"600px"},children:"Loading OSDK media…"}):r.jsx("div",{style:{height:"600px"},children:r.jsx(p,{media:e.employeeDocuments})})},parameters:{docs:{source:{code:`// Access media from an OSDK object's media reference property
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
