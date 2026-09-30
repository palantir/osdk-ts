import{j as r,M as s}from"./iframe-DRNk89ZH.js";import{P as p}from"./pdf-viewer-Cw0p5tGI.js";import{E as d}from"./Employee-BAk2o20h.js";import{u as a}from"./useOsdkObject-B_Kgfm2f.js";import"./preload-helper-CL4j9Mgj.js";import"./PdfViewer-DEattE6P.js";import"./index-CS7yPxi2.js";import"./BasePdfViewer-C_xqcC6u.js";import"./BasePdfViewer.module.css-DMQcBg_k.js";import"./PdfViewerAnnotationLayer-CVK1pxjW.js";import"./constants-DsXMS3N3.js";import"./usePdfDocument-CH2zpf9s.js";import"./PdfViewerOutlineSidebar-B54pDTiH.js";import"./PdfViewerSidebarHeader-wFIdG2ZE.js";import"./useBaseUiId-DA__XCsT.js";import"./useControlled-CE505VKa.js";import"./CompositeRoot-l49tAaAH.js";import"./CompositeItem-DF-AHu7i.js";import"./ToolbarRootContext-BDHJtdhK.js";import"./composite-8utJ-QhI.js";import"./svgIconContainer-BYMe6jPQ.js";import"./PdfViewerSearchBar-BKRUJfUt.js";import"./chevron-up-Cc-nqik3.js";import"./chevron-down-CphPepB3.js";import"./cross-CdajDpt0.js";import"./PdfViewerSidebar-CcSwzjBS.js";import"./index-CMtFadZ1.js";import"./index-DZWIzD1L.js";import"./index-Du8pqTKc.js";import"./PdfViewerToolbar-DQhpaxAG.js";import"./Button-Br4k3ffi.js";import"./chevron-right-BHGFlhB-.js";import"./Input-DehlDyjB.js";import"./search-Cy6sHHpP.js";import"./spin-Dxm1yMxQ.js";import"./error-B_EjGR4-.js";import"./withOsdkMetrics-B1ACrfWT.js";import"./makeExternalStore-B6lEYqi9.js";const U={title:"Components/DocumentViewer/Renderers/PdfViewer",component:p,tags:["beta"],parameters:{controls:{expanded:!0}}},o={render:()=>{const{object:e,isLoading:n}=a(d,s);return n||!(e!=null&&e.employeeDocuments)?r.jsx("div",{style:{height:"600px"},children:"Loading OSDK media…"}):r.jsx("div",{style:{height:"600px"},children:r.jsx(p,{media:e.employeeDocuments})})},parameters:{docs:{source:{code:`// Access media from an OSDK object's media reference property
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
