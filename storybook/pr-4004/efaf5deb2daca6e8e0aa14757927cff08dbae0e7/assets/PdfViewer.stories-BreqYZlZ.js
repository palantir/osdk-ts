import{j as r,M as s}from"./iframe-DsKrzcRN.js";import{P as p}from"./pdf-viewer-BBk4qpBD.js";import{E as d}from"./Employee-BAk2o20h.js";import{u as a}from"./useOsdkObject-C6fdmMq4.js";import"./preload-helper-XXW3l9t_.js";import"./PdfViewer-CN4NnUi0.js";import"./index-CsPIGNQb.js";import"./BasePdfViewer-Bgv_r-Qt.js";import"./BasePdfViewer.module.css-wfcBe7Ut.js";import"./PdfViewerAnnotationLayer-DsWGtWGl.js";import"./constants-DsXMS3N3.js";import"./usePdfDocument-3pZoTLBA.js";import"./PdfViewerOutlineSidebar-CpMG8lYq.js";import"./PdfViewerSidebarHeader-BsvCwCbc.js";import"./useBaseUiId-BwjaGsvj.js";import"./useControlled-Bqn_3IUK.js";import"./CompositeRoot-DRk1ZgIV.js";import"./CompositeItem-D26JRJU9.js";import"./ToolbarRootContext-DxArarjC.js";import"./composite-4l0PTrfd.js";import"./svgIconContainer-BOG8o0Qp.js";import"./PdfViewerSearchBar-CKZ_-iju.js";import"./chevron-up-LJ_-hQRF.js";import"./chevron-down-DEsS9nYL.js";import"./cross-BW2NuQAF.js";import"./PdfViewerSidebar-CWurLSkP.js";import"./index-BFmUqTIz.js";import"./index-CbFdJYZA.js";import"./index-v8oVnP18.js";import"./PdfViewerToolbar-DE-A7F9m.js";import"./Button-BKP0-2mJ.js";import"./chevron-right-BWJKde38.js";import"./Input-C_GhTUPn.js";import"./search-Dj7j7f4C.js";import"./spin-CWucZYXU.js";import"./error-CfVMT4Jh.js";import"./withOsdkMetrics-DQcV-4YY.js";import"./makeExternalStore-lpe8zccP.js";const U={title:"Components/DocumentViewer/Renderers/PdfViewer",component:p,tags:["beta"],parameters:{controls:{expanded:!0}}},o={render:()=>{const{object:e,isLoading:n}=a(d,s);return n||!(e!=null&&e.employeeDocuments)?r.jsx("div",{style:{height:"600px"},children:"Loading OSDK media…"}):r.jsx("div",{style:{height:"600px"},children:r.jsx(p,{media:e.employeeDocuments})})},parameters:{docs:{source:{code:`// Access media from an OSDK object's media reference property
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
