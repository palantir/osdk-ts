import{j as r,M as s}from"./iframe-ChS3imFp.js";import{P as p}from"./pdf-viewer-e6B3FacE.js";import{E as d}from"./Employee-BAk2o20h.js";import{u as a}from"./useOsdkObject-CGd--e-U.js";import"./preload-helper-CbLZMJZq.js";import"./PdfViewer-BzNGk4pX.js";import"./index-BhUaDBrt.js";import"./BasePdfViewer-DTM_lVxb.js";import"./BasePdfViewer.module.css-D7QxARHE.js";import"./PdfViewerAnnotationLayer-XOE-KAbZ.js";import"./constants-DsXMS3N3.js";import"./usePdfDocument-BUC1olXm.js";import"./PdfViewerOutlineSidebar-tlB0yFTP.js";import"./PdfViewerSidebarHeader-YdpIyRXt.js";import"./useBaseUiId-D54mwsVu.js";import"./useControlled-BRbOyxdk.js";import"./CompositeRoot-CR-SOxfB.js";import"./CompositeItem-Ciy3kTde.js";import"./ToolbarRootContext-Ciy-U0ts.js";import"./composite-BXiRclhX.js";import"./svgIconContainer-CrPK_Tf2.js";import"./PdfViewerSearchBar-DWO3bo4C.js";import"./chevron-up-BtexXqlJ.js";import"./chevron-down-CE8oNUyN.js";import"./cross-B14JKiqa.js";import"./PdfViewerSidebar-C8ZO7o0l.js";import"./index-x3Y6GJ5x.js";import"./index-q2j62sEE.js";import"./index-jVTOKRrt.js";import"./PdfViewerToolbar-BHdQV_PT.js";import"./Button-DheVbQ5T.js";import"./chevron-right-2186zfFz.js";import"./Input-Ceo2lduN.js";import"./search-DsoYH40Z.js";import"./spin-BsX-XVG5.js";import"./error-qSLqjDm7.js";import"./withOsdkMetrics-uF3PiR7H.js";import"./makeExternalStore-vRVo58Vz.js";const U={title:"Components/DocumentViewer/Renderers/PdfViewer",component:p,tags:["beta"],parameters:{controls:{expanded:!0}}},o={render:()=>{const{object:e,isLoading:n}=a(d,s);return n||!(e!=null&&e.employeeDocuments)?r.jsx("div",{style:{height:"600px"},children:"Loading OSDK media…"}):r.jsx("div",{style:{height:"600px"},children:r.jsx(p,{media:e.employeeDocuments})})},parameters:{docs:{source:{code:`// Access media from an OSDK object's media reference property
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
