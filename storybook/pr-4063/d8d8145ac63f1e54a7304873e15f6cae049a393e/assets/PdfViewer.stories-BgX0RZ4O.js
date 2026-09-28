import{j as r,M as s}from"./iframe-Bhffutgo.js";import{P as p}from"./pdf-viewer-B7QwkZ_A.js";import{E as d}from"./Employee-BAk2o20h.js";import{u as a}from"./useOsdkObject-CMqMr-UD.js";import"./preload-helper-CijB9Qe5.js";import"./PdfViewer-BvKUgmCh.js";import"./index-Cy8HD2CD.js";import"./BasePdfViewer-Dx9mEE68.js";import"./BasePdfViewer.module.css-B3KyGMXj.js";import"./PdfViewerAnnotationLayer-NCkzaQhe.js";import"./constants-DsXMS3N3.js";import"./usePdfDocument-CgQSoF9M.js";import"./PdfViewerOutlineSidebar-CE8SL3eo.js";import"./PdfViewerSidebarHeader-DmbaUPh1.js";import"./useBaseUiId--v1O0VA1.js";import"./useControlled-B1I8CTdR.js";import"./CompositeRoot-DLWouLsD.js";import"./CompositeItem-BZDrB-0o.js";import"./ToolbarRootContext-CmYX2cG0.js";import"./composite-DtoUIyyt.js";import"./svgIconContainer-Cic0cef0.js";import"./PdfViewerSearchBar-B-YvZ03s.js";import"./chevron-up-Bipj_s4U.js";import"./chevron-down-BcqETG9N.js";import"./cross-B-UQ3Jxc.js";import"./PdfViewerSidebar-shY8QMyY.js";import"./index-srbhg0-l.js";import"./index-JMjhMIpk.js";import"./index-DRActumb.js";import"./PdfViewerToolbar-D_MtcHi_.js";import"./Button-_SLvpwek.js";import"./chevron-right-DlE-C0qH.js";import"./Input-OY1OZr6O.js";import"./search-IXw9ma12.js";import"./spin-LfcZ_N17.js";import"./error-IjGqGtmT.js";import"./withOsdkMetrics-DAy7jDWc.js";import"./makeExternalStore-NyFQcR5i.js";const U={title:"Components/DocumentViewer/Renderers/PdfViewer",component:p,tags:["beta"],parameters:{controls:{expanded:!0}}},o={render:()=>{const{object:e,isLoading:n}=a(d,s);return n||!(e!=null&&e.employeeDocuments)?r.jsx("div",{style:{height:"600px"},children:"Loading OSDK media…"}):r.jsx("div",{style:{height:"600px"},children:r.jsx(p,{media:e.employeeDocuments})})},parameters:{docs:{source:{code:`// Access media from an OSDK object's media reference property
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
