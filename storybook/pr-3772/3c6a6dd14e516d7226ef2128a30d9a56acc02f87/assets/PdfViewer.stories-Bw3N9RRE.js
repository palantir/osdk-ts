import{j as r,M as s}from"./iframe-DejlptTF.js";import{P as p}from"./pdf-viewer-FYUwD27Q.js";import{E as d}from"./Employee-BAk2o20h.js";import{u as a}from"./useOsdkObject-227V-V-l.js";import"./preload-helper-t1ZC-fSO.js";import"./PdfViewer-B3zKXS2M.js";import"./index-DeuG-BID.js";import"./BasePdfViewer-CU5ZvqBN.js";import"./BasePdfViewer.module.css-DJp5N8QD.js";import"./PdfViewerAnnotationLayer-CwDrb1Z-.js";import"./constants-DsXMS3N3.js";import"./usePdfDocument-cOEfj-dD.js";import"./PdfViewerOutlineSidebar-Cf1UAWHE.js";import"./PdfViewerSidebarHeader-BHOs_-1x.js";import"./useBaseUiId-DNOeS8k3.js";import"./useControlled-u0rXshqK.js";import"./CompositeRoot-NbUH6Bft.js";import"./CompositeItem-C668gbIC.js";import"./ToolbarRootContext-hKTjuFFe.js";import"./composite-CgiNKm-K.js";import"./svgIconContainer-Bd-w9OF2.js";import"./PdfViewerSearchBar-BE2nqDTh.js";import"./chevron-up-D8pmYVnT.js";import"./chevron-down-R85fLGon.js";import"./cross-DE57w2Hx.js";import"./PdfViewerSidebar-2u61CG5u.js";import"./index-CLFPBot-.js";import"./index-CbKeSWV-.js";import"./index-e8F5O9eW.js";import"./PdfViewerToolbar-D313T5hW.js";import"./Button-S0WXhUVU.js";import"./chevron-right-CnBpOLNB.js";import"./Input-BNct-weu.js";import"./search-BB5SHFcx.js";import"./spin-Xn25mGO3.js";import"./error-ClnW0JkG.js";import"./withOsdkMetrics-CAm6PF-7.js";import"./makeExternalStore-DzmCjszS.js";const U={title:"Components/DocumentViewer/Renderers/PdfViewer",component:p,tags:["beta"],parameters:{controls:{expanded:!0}}},o={render:()=>{const{object:e,isLoading:n}=a(d,s);return n||!(e!=null&&e.employeeDocuments)?r.jsx("div",{style:{height:"600px"},children:"Loading OSDK media…"}):r.jsx("div",{style:{height:"600px"},children:r.jsx(p,{media:e.employeeDocuments})})},parameters:{docs:{source:{code:`// Access media from an OSDK object's media reference property
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
