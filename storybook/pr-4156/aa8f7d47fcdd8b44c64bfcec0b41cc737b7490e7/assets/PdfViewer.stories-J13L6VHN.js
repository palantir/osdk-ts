import{j as r,M as s}from"./iframe-CDX-NTfD.js";import{P as p}from"./pdf-viewer-CJdEqM3u.js";import{E as d}from"./Employee-BAk2o20h.js";import{u as a}from"./useOsdkObject-D-nNfVFG.js";import"./preload-helper-CSvLju02.js";import"./PdfViewer-XDp_F-Yp.js";import"./index-D6xAz9PB.js";import"./BasePdfViewer-DP9LUQGI.js";import"./BasePdfViewer.module.css-_ZcHSgrJ.js";import"./PdfViewerAnnotationLayer-BZGBZWXz.js";import"./constants-DsXMS3N3.js";import"./usePdfDocument-DyakSSVV.js";import"./PdfViewerOutlineSidebar-BMgEnIHa.js";import"./PdfViewerSidebarHeader-6qS8tWOt.js";import"./useBaseUiId-CM3Yhx5P.js";import"./useControlled-CLUlXrHb.js";import"./CompositeRoot-G0IwBiJo.js";import"./CompositeItem-nsBHK6f-.js";import"./ToolbarRootContext-BX6M6ShK.js";import"./composite-CpWLo2c3.js";import"./svgIconContainer-99TPvqBc.js";import"./PdfViewerSearchBar-CoHsy8la.js";import"./chevron-up-CWV7V4BU.js";import"./chevron-down-r7sEOhf_.js";import"./cross-CUWzhEFb.js";import"./PdfViewerSidebar-BsRMtAEj.js";import"./index-DTEUSjqo.js";import"./index-qkQ_SGyl.js";import"./index-DmFJgdYe.js";import"./PdfViewerToolbar-DzuKCBQV.js";import"./Button-CscfG-hh.js";import"./chevron-right-DIyekDiy.js";import"./Input-Dz-cSGCu.js";import"./search-DvrI77MS.js";import"./spin-C05TSbS2.js";import"./error-BplB6VbP.js";import"./withOsdkMetrics-CUdmlJda.js";import"./makeExternalStore-DXrOIATy.js";const U={title:"Components/DocumentViewer/Renderers/PdfViewer",component:p,tags:["beta"],parameters:{controls:{expanded:!0}}},o={render:()=>{const{object:e,isLoading:n}=a(d,s);return n||!(e!=null&&e.employeeDocuments)?r.jsx("div",{style:{height:"600px"},children:"Loading OSDK media…"}):r.jsx("div",{style:{height:"600px"},children:r.jsx(p,{media:e.employeeDocuments})})},parameters:{docs:{source:{code:`// Access media from an OSDK object's media reference property
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
