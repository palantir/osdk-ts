import{j as r,M as s}from"./iframe-BtBIXkF3.js";import{P as p}from"./pdf-viewer-B44Ut3oq.js";import{E as d}from"./Employee-BAk2o20h.js";import{u as a}from"./useOsdkObject-xRA-Tiqo.js";import"./preload-helper-KCRTf-fU.js";import"./PdfViewer-BMYIG6R7.js";import"./index-BGAjKCp6.js";import"./BasePdfViewer-DqcCEdDU.js";import"./BasePdfViewer.module.css-C7vLGJV9.js";import"./PdfViewerAnnotationLayer-DAm5_aaa.js";import"./constants-DsXMS3N3.js";import"./usePdfDocument-DukBRc4O.js";import"./PdfViewerOutlineSidebar-Cx0VS6Ec.js";import"./PdfViewerSidebarHeader-Bp0o2aFq.js";import"./useBaseUiId-CzkvuYxc.js";import"./useControlled-Bsm9yLUZ.js";import"./CompositeRoot-B-jp7Oin.js";import"./CompositeItem-BCTeJPmX.js";import"./ToolbarRootContext-B_9qz0NR.js";import"./composite-Bn3hBJno.js";import"./svgIconContainer-CclLyuS6.js";import"./PdfViewerSearchBar-B86OoI1B.js";import"./chevron-up-BaMY7_Jh.js";import"./chevron-down-BHLBt5vn.js";import"./cross-B9mjFWYU.js";import"./PdfViewerSidebar-Ck-gF0-9.js";import"./index-C81F4-IO.js";import"./index-DnxktrWp.js";import"./index-Bg1G_Vw4.js";import"./PdfViewerToolbar-js1ORctc.js";import"./Button-FoDlRoyn.js";import"./chevron-right-CUjU5_04.js";import"./Input-CZ_pHuwE.js";import"./search-DV3YNQgX.js";import"./spin-DQ_PzC6b.js";import"./error-VXjIMzYn.js";import"./withOsdkMetrics-CEusHpqR.js";import"./makeExternalStore-CMGSbNhD.js";const U={title:"Components/DocumentViewer/Renderers/PdfViewer",component:p,tags:["beta"],parameters:{controls:{expanded:!0}}},o={render:()=>{const{object:e,isLoading:n}=a(d,s);return n||!(e!=null&&e.employeeDocuments)?r.jsx("div",{style:{height:"600px"},children:"Loading OSDK media…"}):r.jsx("div",{style:{height:"600px"},children:r.jsx(p,{media:e.employeeDocuments})})},parameters:{docs:{source:{code:`// Access media from an OSDK object's media reference property
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
