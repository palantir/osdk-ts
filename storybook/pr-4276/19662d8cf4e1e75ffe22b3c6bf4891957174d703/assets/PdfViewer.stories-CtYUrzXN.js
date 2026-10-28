import{j as r,M as s}from"./iframe-CStnt8bf.js";import{P as p}from"./pdf-viewer-B_OmWVGp.js";import{E as d}from"./Employee-BAk2o20h.js";import{u as a}from"./useOsdkObject-DuN-g8F7.js";import"./preload-helper-BHFu-ydw.js";import"./PdfViewer-DaiJ-gk1.js";import"./index-bIM1mjE2.js";import"./BasePdfViewer-BuWzKMO2.js";import"./BasePdfViewer.module.css-CReFPeB7.js";import"./PdfViewerAnnotationLayer-Dn4uyifR.js";import"./constants-DsXMS3N3.js";import"./usePdfDocument-DgShWaFq.js";import"./PdfViewerOutlineSidebar-CbjmMI7K.js";import"./PdfViewerSidebarHeader-DdovGpqr.js";import"./useBaseUiId-D9TkSWZv.js";import"./useControlled-B4F-euPl.js";import"./CompositeRoot-Blxr2LDg.js";import"./CompositeItem-BdSAWgXI.js";import"./ToolbarRootContext-Dy3DBHgn.js";import"./composite-DIpMeE4S.js";import"./svgIconContainer-CBrsISO6.js";import"./PdfViewerSearchBar-NKcHOw_p.js";import"./chevron-up-DMi2jV1g.js";import"./chevron-down-DP-5q6nZ.js";import"./cross-CzL3ilF7.js";import"./PdfViewerSidebar-zIkHSlsG.js";import"./index-BZfBBfBl.js";import"./index-Dubonfnq.js";import"./index-VT6Dn2OL.js";import"./PdfViewerToolbar-Ddt2JNyz.js";import"./Button-BTOFQ1SZ.js";import"./chevron-right-46xrePg9.js";import"./Input-BxZoPAuB.js";import"./search-BrGXguj5.js";import"./spin-Dn1lcJk7.js";import"./error-CM07sBvh.js";import"./withOsdkMetrics-8Qsa17lA.js";import"./makeExternalStore-Cv8ow0-9.js";const U={title:"Components/DocumentViewer/Renderers/PdfViewer",component:p,tags:["beta"],parameters:{controls:{expanded:!0}}},o={render:()=>{const{object:e,isLoading:n}=a(d,s);return n||!(e!=null&&e.employeeDocuments)?r.jsx("div",{style:{height:"600px"},children:"Loading OSDK media…"}):r.jsx("div",{style:{height:"600px"},children:r.jsx(p,{media:e.employeeDocuments})})},parameters:{docs:{source:{code:`// Access media from an OSDK object's media reference property
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
