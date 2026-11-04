import{j as r,M as s}from"./iframe-DhySATRv.js";import{P as p}from"./pdf-viewer-CWM1RZ6W.js";import{E as d}from"./Employee-BAk2o20h.js";import{u as a}from"./useOsdkObject-BR0vWudD.js";import"./preload-helper-QnXVdlsZ.js";import"./PdfViewer-D4YrOHIf.js";import"./index-By0zFJXy.js";import"./BasePdfViewer-DDzfKFaR.js";import"./BasePdfViewer.module.css-CTXQMSzj.js";import"./PdfViewerAnnotationLayer-_j0L47Mj.js";import"./constants-DsXMS3N3.js";import"./usePdfDocument-SZD9-d90.js";import"./PdfViewerOutlineSidebar-BP5SQtKK.js";import"./PdfViewerSidebarHeader-0N273MoM.js";import"./useBaseUiId-CczNNmwY.js";import"./useControlled-C3JFQqTN.js";import"./CompositeRoot-D_X3yfRq.js";import"./CompositeItem-CfgwqBcM.js";import"./ToolbarRootContext-COgLrlEX.js";import"./composite-B7Q8k8Y1.js";import"./svgIconContainer-DPn7rviW.js";import"./PdfViewerSearchBar-0vBD-JWI.js";import"./chevron-up-Duf7h6j4.js";import"./chevron-down-dCWUIGnY.js";import"./cross-dxd-Id56.js";import"./PdfViewerSidebar-CTKxmEbc.js";import"./index-C3T_yKoM.js";import"./index-B5HI7DFW.js";import"./index-HQYJE3H_.js";import"./PdfViewerToolbar-QDeHzJFU.js";import"./Button-BnJ18iND.js";import"./chevron-right-jp5WQsbF.js";import"./Input-BQwljXsc.js";import"./search-3iLspLPL.js";import"./spin-BXZaRecx.js";import"./error-DzMg1FzE.js";import"./withOsdkMetrics-B8-SwDYi.js";import"./makeExternalStore-CM9PbEJi.js";const U={title:"Components/DocumentViewer/Renderers/PdfViewer",component:p,tags:["beta"],parameters:{controls:{expanded:!0}}},o={render:()=>{const{object:e,isLoading:n}=a(d,s);return n||!(e!=null&&e.employeeDocuments)?r.jsx("div",{style:{height:"600px"},children:"Loading OSDK media…"}):r.jsx("div",{style:{height:"600px"},children:r.jsx(p,{media:e.employeeDocuments})})},parameters:{docs:{source:{code:`// Access media from an OSDK object's media reference property
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
