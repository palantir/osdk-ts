import{j as r,M as s}from"./iframe-BGt7IhdS.js";import{P as p}from"./pdf-viewer-CftLz7x_.js";import{E as d}from"./Employee-BAk2o20h.js";import{u as a}from"./useOsdkObject-DvKBCmgA.js";import"./preload-helper-DUkvm5oM.js";import"./PdfViewer-Bq2Ixpzo.js";import"./index-gkzrPHGR.js";import"./BasePdfViewer-BtL8b0R9.js";import"./BasePdfViewer.module.css-CAkhdKqA.js";import"./PdfViewerAnnotationLayer-DQLP1ABV.js";import"./constants-DsXMS3N3.js";import"./usePdfDocument-CvW1catE.js";import"./PdfViewerOutlineSidebar-CkmEZn1R.js";import"./PdfViewerSidebarHeader-DFSY-Dho.js";import"./useBaseUiId-Dcw5wc3b.js";import"./useControlled-BgB3rMOH.js";import"./CompositeRoot-B7PjbCYj.js";import"./CompositeItem-VInoCAcU.js";import"./ToolbarRootContext-DcgyCrBd.js";import"./composite-CtTlfVza.js";import"./svgIconContainer-Bf5Aovc1.js";import"./PdfViewerSearchBar-BXNUwf73.js";import"./chevron-up-Cn1zNPCt.js";import"./chevron-down-DB4w1r6J.js";import"./cross-Cb9gWeTe.js";import"./PdfViewerSidebar-ChFvVS0f.js";import"./index-C1TCtrZ_.js";import"./index-DUEp08qS.js";import"./index-W3km3k8_.js";import"./PdfViewerToolbar-IDDgJ-4C.js";import"./Button-Bf0GrAaJ.js";import"./chevron-right-Pa0ufVUP.js";import"./Input-BDhQTr7d.js";import"./search-B8wvEhc-.js";import"./spin-CNKnPFet.js";import"./error-5t3qELAN.js";import"./withOsdkMetrics-BEwucJks.js";import"./makeExternalStore-Crpu5ieT.js";const U={title:"Components/DocumentViewer/Renderers/PdfViewer",component:p,tags:["beta"],parameters:{controls:{expanded:!0}}},o={render:()=>{const{object:e,isLoading:n}=a(d,s);return n||!(e!=null&&e.employeeDocuments)?r.jsx("div",{style:{height:"600px"},children:"Loading OSDK media…"}):r.jsx("div",{style:{height:"600px"},children:r.jsx(p,{media:e.employeeDocuments})})},parameters:{docs:{source:{code:`// Access media from an OSDK object's media reference property
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
