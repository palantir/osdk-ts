import{j as r,M as s}from"./iframe-DIhyjTQM.js";import{P as p}from"./pdf-viewer-CH4lSZbs.js";import{E as d}from"./Employee-BAk2o20h.js";import{u as a}from"./useOsdkObject-D2C10S5f.js";import"./preload-helper-BITLElC1.js";import"./PdfViewer-D0pBGcbe.js";import"./index-C8ppAklG.js";import"./BasePdfViewer-Bu_qg7iJ.js";import"./BasePdfViewer.module.css-B535sbvE.js";import"./PdfViewerAnnotationLayer-Di5O4nJG.js";import"./constants-DsXMS3N3.js";import"./usePdfDocument-Bcr1m80M.js";import"./PdfViewerOutlineSidebar-B_cIoP-t.js";import"./PdfViewerSidebarHeader-ejgB7zwp.js";import"./useBaseUiId-BRDIOgH7.js";import"./useControlled-vI7L-1v7.js";import"./CompositeRoot-DjhLx-rZ.js";import"./CompositeItem-D7Gjn2M2.js";import"./ToolbarRootContext-DDTggrNs.js";import"./composite-BkQZGQ9U.js";import"./svgIconContainer-BVwGEvqe.js";import"./PdfViewerSearchBar-DSffQ_ma.js";import"./chevron-up-DKTrmeoY.js";import"./chevron-down-fg_D-X7z.js";import"./cross-BVmbGj7v.js";import"./PdfViewerSidebar-D8-kInvd.js";import"./index-GGFmpVOs.js";import"./index-kla4dWAe.js";import"./index-SCNohOo6.js";import"./PdfViewerToolbar-DqnQ-XO9.js";import"./Button-BU0w-MK8.js";import"./chevron-right-D77rmiMA.js";import"./Input-BCY1gssj.js";import"./search-D7TMRqS5.js";import"./spin-C8fkLuzm.js";import"./error-BcXd4Yso.js";import"./withOsdkMetrics-DKqvGaZy.js";import"./makeExternalStore-DUGVOR6Q.js";const U={title:"Components/DocumentViewer/Renderers/PdfViewer",component:p,tags:["beta"],parameters:{controls:{expanded:!0}}},o={render:()=>{const{object:e,isLoading:n}=a(d,s);return n||!(e!=null&&e.employeeDocuments)?r.jsx("div",{style:{height:"600px"},children:"Loading OSDK media…"}):r.jsx("div",{style:{height:"600px"},children:r.jsx(p,{media:e.employeeDocuments})})},parameters:{docs:{source:{code:`// Access media from an OSDK object's media reference property
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
