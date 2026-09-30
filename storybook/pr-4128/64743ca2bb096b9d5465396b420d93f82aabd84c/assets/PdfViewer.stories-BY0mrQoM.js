import{j as r,M as s}from"./iframe-ClMgtSuk.js";import{P as p}from"./pdf-viewer-iQIVFcTt.js";import{E as d}from"./Employee-BAk2o20h.js";import{u as a}from"./useOsdkObject-DkYY2Usl.js";import"./preload-helper-DTt1WWTr.js";import"./PdfViewer-CFETX3Su.js";import"./index-CldZE-Fz.js";import"./BasePdfViewer-Dn2vddCt.js";import"./BasePdfViewer.module.css-BFJiMt6b.js";import"./PdfViewerAnnotationLayer-BcT0MrR4.js";import"./constants-DsXMS3N3.js";import"./usePdfDocument-BnZhCV3M.js";import"./PdfViewerOutlineSidebar-C1SOxM4q.js";import"./PdfViewerSidebarHeader-L7AQnyA5.js";import"./useBaseUiId-woEv5Hvl.js";import"./useControlled-8r5NxEZn.js";import"./CompositeRoot-DJv74Jyy.js";import"./CompositeItem-DEoo3ITM.js";import"./ToolbarRootContext-dH9njPoH.js";import"./composite-AMpBTCaD.js";import"./svgIconContainer-oOu9mbxW.js";import"./PdfViewerSearchBar-DcGLHVoM.js";import"./chevron-up-BerPpks5.js";import"./chevron-down-DRfUqPRw.js";import"./cross-viQYDEND.js";import"./PdfViewerSidebar-0XlWqXj_.js";import"./index-Dlvw17dt.js";import"./index-BU0jcG4_.js";import"./index-Rnbyd2Wh.js";import"./PdfViewerToolbar-CKPNCMTD.js";import"./Button-BCu1jtHq.js";import"./chevron-right-CFOC_MUK.js";import"./Input-BtIh3kKl.js";import"./search-COwJRDi0.js";import"./spin-BlTY4L1T.js";import"./error-D3qiwtEy.js";import"./withOsdkMetrics-H7JHankc.js";import"./makeExternalStore-v6XUl8OF.js";const U={title:"Components/DocumentViewer/Renderers/PdfViewer",component:p,tags:["beta"],parameters:{controls:{expanded:!0}}},o={render:()=>{const{object:e,isLoading:n}=a(d,s);return n||!(e!=null&&e.employeeDocuments)?r.jsx("div",{style:{height:"600px"},children:"Loading OSDK media…"}):r.jsx("div",{style:{height:"600px"},children:r.jsx(p,{media:e.employeeDocuments})})},parameters:{docs:{source:{code:`// Access media from an OSDK object's media reference property
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
