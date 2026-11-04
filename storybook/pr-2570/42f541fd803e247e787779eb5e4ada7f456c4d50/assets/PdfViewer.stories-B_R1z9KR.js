import{j as r,M as s}from"./iframe-Dhbpz2gi.js";import{P as p}from"./pdf-viewer-DstRjPEl.js";import{E as d}from"./Employee-BAk2o20h.js";import{u as a}from"./useOsdkObject-eRp8wqfl.js";import"./preload-helper-pmClhyIA.js";import"./PdfViewer-aWHlm7V2.js";import"./index-DSV0RL80.js";import"./BasePdfViewer-BSW1mATC.js";import"./BasePdfViewer.module.css-Do5UEvzl.js";import"./PdfViewerAnnotationLayer-eAk7FRIK.js";import"./constants-DsXMS3N3.js";import"./usePdfDocument-BtMKjIBR.js";import"./PdfViewerOutlineSidebar-Dp4yj9lc.js";import"./PdfViewerSidebarHeader-DKvdUcpJ.js";import"./useBaseUiId-CACE2Sja.js";import"./useControlled-VMxlV8-z.js";import"./CompositeRoot-B8-0DYhw.js";import"./CompositeItem-lexcaFgm.js";import"./ToolbarRootContext-Bg810oqs.js";import"./composite-DOBXXfvc.js";import"./svgIconContainer-D2dXNiPy.js";import"./PdfViewerSearchBar-BxduJ_YS.js";import"./chevron-up-x9brra2q.js";import"./chevron-down-CiaZa2yM.js";import"./cross-CFyO1iLs.js";import"./PdfViewerSidebar-DKJQo5_T.js";import"./index-DXREmQu7.js";import"./index-Ca39Bid0.js";import"./index-CnSMSR0R.js";import"./PdfViewerToolbar-6YPHAE9j.js";import"./Button-BBeJRgfu.js";import"./chevron-right-B3OBkkd8.js";import"./Input-BnzP7kbL.js";import"./search-u8YFrvlf.js";import"./spin-SSSjErG-.js";import"./error-BXnEUtGZ.js";import"./withOsdkMetrics-D8w7KGDl.js";import"./makeExternalStore-BBmrBF7y.js";const U={title:"Components/DocumentViewer/Renderers/PdfViewer",component:p,tags:["beta"],parameters:{controls:{expanded:!0}}},o={render:()=>{const{object:e,isLoading:n}=a(d,s);return n||!(e!=null&&e.employeeDocuments)?r.jsx("div",{style:{height:"600px"},children:"Loading OSDK media…"}):r.jsx("div",{style:{height:"600px"},children:r.jsx(p,{media:e.employeeDocuments})})},parameters:{docs:{source:{code:`// Access media from an OSDK object's media reference property
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
