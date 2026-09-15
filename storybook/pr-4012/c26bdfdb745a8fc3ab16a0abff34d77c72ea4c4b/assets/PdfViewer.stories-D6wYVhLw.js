import{j as r,M as s}from"./iframe-D6uAV5TU.js";import{P as p}from"./pdf-viewer-B_EabvuR.js";import{E as d}from"./Employee-BAk2o20h.js";import{u as a}from"./useOsdkObject-DrtJADhK.js";import"./preload-helper-DgVxICfb.js";import"./PdfViewer-VAAUUKcO.js";import"./index-CY-pWkIE.js";import"./BasePdfViewer-oIR09LdC.js";import"./BasePdfViewer.module.css-f3ioNwi0.js";import"./PdfViewerAnnotationLayer-C8vFmWrF.js";import"./constants-DsXMS3N3.js";import"./usePdfDocument-Cw7KnlnN.js";import"./PdfViewerOutlineSidebar-xDD-W3Kd.js";import"./PdfViewerSidebarHeader-BVK9GOBe.js";import"./useBaseUiId-Cm0jnEPf.js";import"./useControlled-CNCN21-B.js";import"./CompositeRoot-jDpLqAnB.js";import"./CompositeItem-BovdAW9J.js";import"./ToolbarRootContext-Cj-ulQf0.js";import"./composite-BEzxj37g.js";import"./svgIconContainer-to51jCpQ.js";import"./PdfViewerSearchBar-BieDe_4z.js";import"./chevron-up-BkLRKk8D.js";import"./chevron-down-y6Dx4H3i.js";import"./cross-C1qbDIAe.js";import"./PdfViewerSidebar-5nekJYcg.js";import"./index-CF_buGa8.js";import"./index-bpYghXGo.js";import"./index-JG_tkU8g.js";import"./PdfViewerToolbar-6XjOzi7F.js";import"./Button-D1LcAXjL.js";import"./chevron-right-BR5y3-2g.js";import"./Input-DgviHqP4.js";import"./search-BkhC58qY.js";import"./spin-CYkSSr3V.js";import"./error-AQL_lZl-.js";import"./withOsdkMetrics-C88Xzccf.js";import"./makeExternalStore-DWEUTaD3.js";const U={title:"Components/DocumentViewer/Renderers/PdfViewer",component:p,tags:["beta"],parameters:{controls:{expanded:!0}}},o={render:()=>{const{object:e,isLoading:n}=a(d,s);return n||!(e!=null&&e.employeeDocuments)?r.jsx("div",{style:{height:"600px"},children:"Loading OSDK media…"}):r.jsx("div",{style:{height:"600px"},children:r.jsx(p,{media:e.employeeDocuments})})},parameters:{docs:{source:{code:`// Access media from an OSDK object's media reference property
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
