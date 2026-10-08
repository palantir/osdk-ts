import{j as r,M as s}from"./iframe-COeKHpt9.js";import{P as p}from"./pdf-viewer-CJ8hEw4L.js";import{E as d}from"./Employee-BAk2o20h.js";import{u as a}from"./useOsdkObject-AsniiUCu.js";import"./preload-helper-BpPSpj7h.js";import"./PdfViewer-Dd_L20df.js";import"./index--VOZVAr7.js";import"./BasePdfViewer-CLdMYJin.js";import"./BasePdfViewer.module.css-D_JGphQd.js";import"./PdfViewerAnnotationLayer-B5cC5IXq.js";import"./constants-DsXMS3N3.js";import"./usePdfDocument-MzNE9TyU.js";import"./PdfViewerOutlineSidebar-DPMm3TkC.js";import"./PdfViewerSidebarHeader-iRKT3yII.js";import"./useBaseUiId-AZYk0Vbu.js";import"./useControlled-Bj6n9A7a.js";import"./CompositeRoot-CgJy1gw_.js";import"./CompositeItem-Dt_9zGFK.js";import"./ToolbarRootContext-DpPmKmnD.js";import"./composite-DvaIADEs.js";import"./svgIconContainer-DtZ0wDAF.js";import"./PdfViewerSearchBar-ClKBpUMw.js";import"./chevron-up-BHvOrBFw.js";import"./chevron-down-BCN0Zf9y.js";import"./cross-D5gXcdmB.js";import"./PdfViewerSidebar-DPaTPb5b.js";import"./index-ImvirjPY.js";import"./index-vOPTDT5X.js";import"./index-Crl2o2c4.js";import"./PdfViewerToolbar-qL7sgOed.js";import"./Button-BcUZxYUb.js";import"./chevron-right-D3gDBDhi.js";import"./Input-BgvgMSkQ.js";import"./search-CcRznbWc.js";import"./spin-BtGo-Wcu.js";import"./error-cky3iDMt.js";import"./withOsdkMetrics-b9tLwYR2.js";import"./makeExternalStore-BnwQyhvv.js";const U={title:"Components/DocumentViewer/Renderers/PdfViewer",component:p,tags:["beta"],parameters:{controls:{expanded:!0}}},o={render:()=>{const{object:e,isLoading:n}=a(d,s);return n||!(e!=null&&e.employeeDocuments)?r.jsx("div",{style:{height:"600px"},children:"Loading OSDK media…"}):r.jsx("div",{style:{height:"600px"},children:r.jsx(p,{media:e.employeeDocuments})})},parameters:{docs:{source:{code:`// Access media from an OSDK object's media reference property
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
