import{j as r,M as s}from"./iframe-CQJeOMd0.js";import{P as p}from"./pdf-viewer-Cj2wYyb8.js";import{E as d}from"./Employee-BAk2o20h.js";import{u as a}from"./useOsdkObject-C1ssD6n2.js";import"./preload-helper-DYgGZ5xf.js";import"./PdfViewer-BJlzWNgX.js";import"./index-ZrJt1iGx.js";import"./BasePdfViewer-CtaF_biw.js";import"./BasePdfViewer.module.css-CK1FK93k.js";import"./PdfViewerAnnotationLayer-BaasQFMZ.js";import"./constants-DsXMS3N3.js";import"./usePdfDocument-BI3k-CA0.js";import"./PdfViewerOutlineSidebar-3gWDhq_X.js";import"./PdfViewerSidebarHeader-BZJxSwtd.js";import"./useBaseUiId-UYsDOBIH.js";import"./useControlled-DiW8shJx.js";import"./CompositeRoot-C3iUD0YR.js";import"./CompositeItem-BlyLfX91.js";import"./ToolbarRootContext-BZfxaQ_Q.js";import"./composite-B-fR2hSY.js";import"./svgIconContainer-By2ff4hT.js";import"./PdfViewerSearchBar-C172Ll-I.js";import"./chevron-up-oXUixRK4.js";import"./chevron-down-BsREGsZS.js";import"./cross-DwSzg9Eu.js";import"./PdfViewerSidebar-D6TnFdx1.js";import"./index-DTaUM21t.js";import"./index-Bfc4h_Hy.js";import"./index-CazEHWy5.js";import"./PdfViewerToolbar-DZ_sgt6a.js";import"./Button-CNntGJtS.js";import"./chevron-right-p7RTCciC.js";import"./Input-D3KZDZ9i.js";import"./search-CdEhbnO_.js";import"./spin-lXdVA0Gt.js";import"./error-pXwI3jKa.js";import"./withOsdkMetrics-BvV17iLP.js";import"./makeExternalStore-D7pp3thE.js";const U={title:"Components/DocumentViewer/Renderers/PdfViewer",component:p,tags:["beta"],parameters:{controls:{expanded:!0}}},o={render:()=>{const{object:e,isLoading:n}=a(d,s);return n||!(e!=null&&e.employeeDocuments)?r.jsx("div",{style:{height:"600px"},children:"Loading OSDK media…"}):r.jsx("div",{style:{height:"600px"},children:r.jsx(p,{media:e.employeeDocuments})})},parameters:{docs:{source:{code:`// Access media from an OSDK object's media reference property
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
