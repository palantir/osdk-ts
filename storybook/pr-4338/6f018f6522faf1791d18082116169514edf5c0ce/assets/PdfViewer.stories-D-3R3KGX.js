import{j as r,M as s}from"./iframe-DiEwqi1M.js";import{P as p}from"./pdf-viewer-DRM-ZqxP.js";import{E as d}from"./Employee-BAk2o20h.js";import{u as a}from"./useOsdkObject-C64hVJBN.js";import"./preload-helper-ClSjrKqp.js";import"./PdfViewer-BJWCZ9Lj.js";import"./index-C5HZMqqF.js";import"./BasePdfViewer-BSVIZIO4.js";import"./BasePdfViewer.module.css-CzxKMtdF.js";import"./PdfViewerAnnotationLayer-Cxqyuzfx.js";import"./constants-DsXMS3N3.js";import"./usePdfDocument-9n3mE8mo.js";import"./PdfViewerOutlineSidebar-BnkVFwPo.js";import"./PdfViewerSidebarHeader-D99oBUC3.js";import"./useBaseUiId-BzjC-o1k.js";import"./useControlled-BF2DtUKW.js";import"./CompositeRoot-BQDYDRc8.js";import"./CompositeItem-DTryuWNv.js";import"./ToolbarRootContext-D-rTQkYB.js";import"./composite-DPWnr1eN.js";import"./svgIconContainer-DEpavXsM.js";import"./PdfViewerSearchBar-ClHUmAur.js";import"./chevron-up-C7lXuzkr.js";import"./chevron-down-D04sNIFr.js";import"./cross-CTKZHD3L.js";import"./PdfViewerSidebar-DLPfbtC4.js";import"./index-3NYfUjbF.js";import"./index-Cz06B6jq.js";import"./index-lRW4o_Vc.js";import"./PdfViewerToolbar-CBOnGsSv.js";import"./Button-C4dfwxaK.js";import"./chevron-right-C38p3g34.js";import"./Input-DNKlbqfx.js";import"./search-rt5xI3z4.js";import"./spin-mPNHapOj.js";import"./error-CTX_J0NI.js";import"./withOsdkMetrics-CwH_Tict.js";import"./makeExternalStore-QP4ecZbg.js";const U={title:"Components/DocumentViewer/Renderers/PdfViewer",component:p,tags:["beta"],parameters:{controls:{expanded:!0}}},o={render:()=>{const{object:e,isLoading:n}=a(d,s);return n||!(e!=null&&e.employeeDocuments)?r.jsx("div",{style:{height:"600px"},children:"Loading OSDK media…"}):r.jsx("div",{style:{height:"600px"},children:r.jsx(p,{media:e.employeeDocuments})})},parameters:{docs:{source:{code:`// Access media from an OSDK object's media reference property
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
