import{j as r,M as s}from"./iframe-1hfaDqWf.js";import{P as p}from"./pdf-viewer-BEONcpa3.js";import{E as d}from"./Employee-BAk2o20h.js";import{u as a}from"./useOsdkObject-BXguxVxk.js";import"./preload-helper-De53aV0r.js";import"./PdfViewer-o4MZFe0B.js";import"./index-BhraWcfW.js";import"./BasePdfViewer-Dg-kpTyr.js";import"./BasePdfViewer.module.css-C68bitqJ.js";import"./PdfViewerAnnotationLayer-BGrDNYnq.js";import"./constants-DsXMS3N3.js";import"./usePdfDocument-khvi3yWu.js";import"./PdfViewerOutlineSidebar-JidNfzRs.js";import"./PdfViewerSidebarHeader-B5GyeMye.js";import"./useBaseUiId-Deq2cxJf.js";import"./useControlled-D0I97nL6.js";import"./CompositeRoot-D2sWRw05.js";import"./CompositeItem-CmCZmC8c.js";import"./ToolbarRootContext-BuC21FlU.js";import"./composite-DJvOABdy.js";import"./svgIconContainer-CfNLFLUV.js";import"./PdfViewerSearchBar-BZHTQTdM.js";import"./chevron-up-D1ab8PMK.js";import"./chevron-down-oC6N0Ou5.js";import"./cross-BxuxKn8r.js";import"./PdfViewerSidebar-CFI1hwym.js";import"./index-B722iX7j.js";import"./index-CltX__3l.js";import"./index-CNJ7D8B4.js";import"./PdfViewerToolbar-BlLM4KVW.js";import"./Button-CnBcagCx.js";import"./chevron-right-D1PLlVAV.js";import"./Input-D17xgaxz.js";import"./search-ChOCRi6Z.js";import"./spin-DTErXPgb.js";import"./error-BGVtNtZh.js";import"./withOsdkMetrics-pFp3tsBC.js";import"./makeExternalStore-CiOsLXpf.js";const U={title:"Components/DocumentViewer/Renderers/PdfViewer",component:p,tags:["beta"],parameters:{controls:{expanded:!0}}},o={render:()=>{const{object:e,isLoading:n}=a(d,s);return n||!(e!=null&&e.employeeDocuments)?r.jsx("div",{style:{height:"600px"},children:"Loading OSDK media…"}):r.jsx("div",{style:{height:"600px"},children:r.jsx(p,{media:e.employeeDocuments})})},parameters:{docs:{source:{code:`// Access media from an OSDK object's media reference property
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
