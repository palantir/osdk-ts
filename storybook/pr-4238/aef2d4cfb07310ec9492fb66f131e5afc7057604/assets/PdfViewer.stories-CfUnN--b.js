import{j as r,M as s}from"./iframe-CazyyGHD.js";import{P as p}from"./pdf-viewer-CxMmcEkP.js";import{E as d}from"./Employee-BAk2o20h.js";import{u as a}from"./useOsdkObject-C_uv6Aod.js";import"./preload-helper-MgT8dc0X.js";import"./PdfViewer-BnIDJz_p.js";import"./index-Bwh0Qzuq.js";import"./BasePdfViewer-Pi_9s7tH.js";import"./BasePdfViewer.module.css-BtX2rKGP.js";import"./PdfViewerAnnotationLayer-maXtJUro.js";import"./constants-DsXMS3N3.js";import"./usePdfDocument-QNWVQ0La.js";import"./PdfViewerOutlineSidebar-O5CA5ROg.js";import"./PdfViewerSidebarHeader-DqtFhz8u.js";import"./useBaseUiId-_VheOjS_.js";import"./useControlled-W6MY3ceN.js";import"./CompositeRoot-CXxN8NO7.js";import"./CompositeItem-rCpLyuDw.js";import"./ToolbarRootContext-Dv2tMkap.js";import"./composite-eyAHIZy6.js";import"./svgIconContainer-D-fln-_9.js";import"./PdfViewerSearchBar-CvkJirNl.js";import"./chevron-up-Dh6DsN47.js";import"./chevron-down-C2D_MUNL.js";import"./cross-Cm-jIUuV.js";import"./PdfViewerSidebar-DfxUZAEc.js";import"./index-k2L1SHEL.js";import"./index-oHFfHIzb.js";import"./index-CtTCUyk6.js";import"./PdfViewerToolbar-Do4a4Ip1.js";import"./Button-ByiOliQr.js";import"./chevron-right-BzF8ESHk.js";import"./Input-BqWLM-qJ.js";import"./search-CwjMn8PH.js";import"./spin-B88M3law.js";import"./error-0vET3H6E.js";import"./withOsdkMetrics-C07As7Qh.js";import"./makeExternalStore-CoBf-2QX.js";const U={title:"Components/DocumentViewer/Renderers/PdfViewer",component:p,tags:["beta"],parameters:{controls:{expanded:!0}}},o={render:()=>{const{object:e,isLoading:n}=a(d,s);return n||!(e!=null&&e.employeeDocuments)?r.jsx("div",{style:{height:"600px"},children:"Loading OSDK media…"}):r.jsx("div",{style:{height:"600px"},children:r.jsx(p,{media:e.employeeDocuments})})},parameters:{docs:{source:{code:`// Access media from an OSDK object's media reference property
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
