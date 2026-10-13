import{j as r,M as s}from"./iframe-CzOy-JTY.js";import{P as p}from"./pdf-viewer-DIddDXqb.js";import{E as d}from"./Employee-BAk2o20h.js";import{u as a}from"./useOsdkObject-C7K0iDS-.js";import"./preload-helper-CIQ1DaMN.js";import"./PdfViewer-DkKeGaJS.js";import"./index-Dumhhqmc.js";import"./BasePdfViewer-D34eaBy-.js";import"./BasePdfViewer.module.css-ComQC5UX.js";import"./PdfViewerAnnotationLayer-DVSVF7NY.js";import"./constants-DsXMS3N3.js";import"./usePdfDocument-CXuwHwU1.js";import"./PdfViewerOutlineSidebar-BYQiWK6l.js";import"./PdfViewerSidebarHeader-BXOsNTU9.js";import"./useBaseUiId-DnUPrOGO.js";import"./useControlled-B2qS0FH4.js";import"./CompositeRoot-DXRrMkcj.js";import"./CompositeItem-BAmKL-U0.js";import"./ToolbarRootContext-BCdc83Ck.js";import"./composite-BVn9jKX7.js";import"./svgIconContainer-DpIclYOT.js";import"./PdfViewerSearchBar-R6fGmbqf.js";import"./chevron-up-r9gOX2c1.js";import"./chevron-down-USLYqae_.js";import"./cross-CWygvYLq.js";import"./PdfViewerSidebar-C52aahJI.js";import"./index-BLqBty1z.js";import"./index-CyYfj6ys.js";import"./index-C62E3V-C.js";import"./PdfViewerToolbar-fut91Eb7.js";import"./Button-emQM4kcG.js";import"./chevron-right-BEpk0ZQ4.js";import"./Input-MeFMWRbL.js";import"./search-BJ6lcKDX.js";import"./spin-Bm0NYlb5.js";import"./error-Dy_Lr_qP.js";import"./withOsdkMetrics-0tSP_r9F.js";import"./makeExternalStore-BilT8BO2.js";const U={title:"Components/DocumentViewer/Renderers/PdfViewer",component:p,tags:["beta"],parameters:{controls:{expanded:!0}}},o={render:()=>{const{object:e,isLoading:n}=a(d,s);return n||!(e!=null&&e.employeeDocuments)?r.jsx("div",{style:{height:"600px"},children:"Loading OSDK media…"}):r.jsx("div",{style:{height:"600px"},children:r.jsx(p,{media:e.employeeDocuments})})},parameters:{docs:{source:{code:`// Access media from an OSDK object's media reference property
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
