import{j as r,M as s}from"./iframe-DZ1IfAc9.js";import{P as p}from"./pdf-viewer-CC2G6C7D.js";import{E as d}from"./Employee-BAk2o20h.js";import{u as a}from"./useOsdkObject-7Qpqm3mh.js";import"./preload-helper-FioNmaYc.js";import"./PdfViewer-Cx1Yws7P.js";import"./index-DlgarWWe.js";import"./BasePdfViewer-CekYCUCx.js";import"./BasePdfViewer.module.css-dKS3BHsA.js";import"./PdfViewerAnnotationLayer-CP2VUMNp.js";import"./constants-DsXMS3N3.js";import"./usePdfDocument-C1BLprXr.js";import"./PdfViewerOutlineSidebar-DHun3e0Q.js";import"./PdfViewerSidebarHeader-B-Nkoj9a.js";import"./useBaseUiId-D5mFLOde.js";import"./useControlled-CK492yS4.js";import"./CompositeRoot-CxJC_zTS.js";import"./CompositeItem-BRIYvu0B.js";import"./ToolbarRootContext-ATEsw9kW.js";import"./composite-naZtYWyA.js";import"./svgIconContainer-BMPgpSIt.js";import"./PdfViewerSearchBar-BhGfquqq.js";import"./chevron-up-BTu3XJwr.js";import"./chevron-down-ClTS_TF6.js";import"./cross-9jSrVJX7.js";import"./PdfViewerSidebar-BaSdSleo.js";import"./index-DqffqbdW.js";import"./index-BqCJp_mQ.js";import"./index-Dm0H4d0k.js";import"./PdfViewerToolbar-eSXNSBZa.js";import"./Button-CEdONvfh.js";import"./chevron-right-Dnd7PAGt.js";import"./Input-BVSO0T6H.js";import"./search-DX_EHnIw.js";import"./spin-zBHEqw0u.js";import"./error-CK66UUTY.js";import"./withOsdkMetrics-DkI7OiMa.js";import"./makeExternalStore-DT9sfKcd.js";const U={title:"Components/DocumentViewer/Renderers/PdfViewer",component:p,tags:["beta"],parameters:{controls:{expanded:!0}}},o={render:()=>{const{object:e,isLoading:n}=a(d,s);return n||!(e!=null&&e.employeeDocuments)?r.jsx("div",{style:{height:"600px"},children:"Loading OSDK media…"}):r.jsx("div",{style:{height:"600px"},children:r.jsx(p,{media:e.employeeDocuments})})},parameters:{docs:{source:{code:`// Access media from an OSDK object's media reference property
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
