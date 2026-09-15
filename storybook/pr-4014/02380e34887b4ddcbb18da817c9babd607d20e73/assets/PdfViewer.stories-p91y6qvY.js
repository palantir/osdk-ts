import{j as r,M as s}from"./iframe-DVYiR4EF.js";import{P as p}from"./pdf-viewer-BvvADqzm.js";import{E as d}from"./Employee-BAk2o20h.js";import{u as a}from"./useOsdkObject-DQCDrO51.js";import"./preload-helper-Dxk87wO7.js";import"./PdfViewer-BhQDfhRe.js";import"./index-BHhu1kj6.js";import"./BasePdfViewer-BoF3U1s_.js";import"./BasePdfViewer.module.css-BdI8SJYJ.js";import"./PdfViewerAnnotationLayer-D1eZduW0.js";import"./constants-DsXMS3N3.js";import"./usePdfDocument-BFlIsvBZ.js";import"./PdfViewerOutlineSidebar-C9kz0hqW.js";import"./PdfViewerSidebarHeader-zTtwew1N.js";import"./useBaseUiId-zYEXD-mx.js";import"./useControlled-DcB6TY6E.js";import"./CompositeRoot-BrWZddBx.js";import"./CompositeItem-DR-oTCoP.js";import"./ToolbarRootContext-DQtyGnCu.js";import"./composite-C7v8Qqey.js";import"./svgIconContainer-DdXGKFJg.js";import"./PdfViewerSearchBar-C5p1eSd8.js";import"./chevron-up-X87KG-YV.js";import"./chevron-down-DS4rSc_R.js";import"./cross-Clyp6xFe.js";import"./PdfViewerSidebar-CiBJhpsu.js";import"./index-F6YJXidF.js";import"./index-DIoaGE9P.js";import"./index-yOUNHIkz.js";import"./PdfViewerToolbar-B2eX7LBU.js";import"./Button-B_OVrsNR.js";import"./chevron-right-CDIc0jri.js";import"./Input-DXhcExkR.js";import"./search-CYXYxyYM.js";import"./spin-DurZJxgI.js";import"./error-BkP1c58R.js";import"./withOsdkMetrics-B0MkRVBC.js";import"./makeExternalStore-CYe5TaAL.js";const U={title:"Components/DocumentViewer/Renderers/PdfViewer",component:p,tags:["beta"],parameters:{controls:{expanded:!0}}},o={render:()=>{const{object:e,isLoading:n}=a(d,s);return n||!(e!=null&&e.employeeDocuments)?r.jsx("div",{style:{height:"600px"},children:"Loading OSDK media…"}):r.jsx("div",{style:{height:"600px"},children:r.jsx(p,{media:e.employeeDocuments})})},parameters:{docs:{source:{code:`// Access media from an OSDK object's media reference property
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
