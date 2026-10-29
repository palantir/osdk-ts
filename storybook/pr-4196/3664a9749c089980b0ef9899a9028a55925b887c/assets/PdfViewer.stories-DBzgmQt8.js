import{j as r,M as s}from"./iframe-fQxG4Lg8.js";import{P as p}from"./pdf-viewer-DC3ZK_kX.js";import{E as d}from"./Employee-BAk2o20h.js";import{u as a}from"./useOsdkObject-UKgkq0ev.js";import"./preload-helper-C3S-rczw.js";import"./PdfViewer-DhoWxtJi.js";import"./index-ltdpE_X9.js";import"./BasePdfViewer-ZPPLVFSJ.js";import"./BasePdfViewer.module.css-B2ajlB4D.js";import"./PdfViewerAnnotationLayer-DSHMHRQE.js";import"./constants-DsXMS3N3.js";import"./usePdfDocument-K7CvI-wz.js";import"./PdfViewerOutlineSidebar-BIC2G8HK.js";import"./PdfViewerSidebarHeader-C8qArBem.js";import"./useBaseUiId-BLPigAyn.js";import"./useControlled-DqDDQqjZ.js";import"./CompositeRoot-0p2XXahR.js";import"./CompositeItem-DICXTkJC.js";import"./ToolbarRootContext-CBJvqLZU.js";import"./composite-DDCMOEB3.js";import"./svgIconContainer-DiG6bowi.js";import"./PdfViewerSearchBar-DR2zbh3x.js";import"./chevron-up-BOgYKdwN.js";import"./chevron-down-C1z-grQd.js";import"./cross-DCa3-fIn.js";import"./PdfViewerSidebar-Ca8zTXeD.js";import"./index-C-pt0ouP.js";import"./index-BJBu7OXz.js";import"./index-B903ktB6.js";import"./PdfViewerToolbar-4Y9YSbCV.js";import"./Button-BifFo4zB.js";import"./chevron-right-BQgt1BMj.js";import"./Input-CaYmWuD7.js";import"./search-Cty6Jhmh.js";import"./spin-By0_0JY-.js";import"./error-DITUlsDB.js";import"./withOsdkMetrics-M9jqBL_m.js";import"./makeExternalStore-bm_X3lw2.js";const U={title:"Components/DocumentViewer/Renderers/PdfViewer",component:p,tags:["beta"],parameters:{controls:{expanded:!0}}},o={render:()=>{const{object:e,isLoading:n}=a(d,s);return n||!(e!=null&&e.employeeDocuments)?r.jsx("div",{style:{height:"600px"},children:"Loading OSDK media…"}):r.jsx("div",{style:{height:"600px"},children:r.jsx(p,{media:e.employeeDocuments})})},parameters:{docs:{source:{code:`// Access media from an OSDK object's media reference property
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
