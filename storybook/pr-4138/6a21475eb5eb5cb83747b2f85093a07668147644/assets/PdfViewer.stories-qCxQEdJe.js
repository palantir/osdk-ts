import{j as r,M as s}from"./iframe-DxhkFI2j.js";import{P as p}from"./pdf-viewer-NXkjRvK9.js";import{E as d}from"./Employee-BAk2o20h.js";import{u as a}from"./useOsdkObject-D-mDGfz7.js";import"./preload-helper--cN_jItM.js";import"./PdfViewer-JXU8CJJC.js";import"./index-DVJz8wW_.js";import"./BasePdfViewer-PZoSP8UA.js";import"./BasePdfViewer.module.css-BuUFDhas.js";import"./PdfViewerAnnotationLayer-B158iWlc.js";import"./constants-DsXMS3N3.js";import"./usePdfDocument-FyChWT_0.js";import"./PdfViewerOutlineSidebar-Cm1o_NJO.js";import"./PdfViewerSidebarHeader-kBpzXfGn.js";import"./useBaseUiId-C54mcYTS.js";import"./useControlled-CrH9oqwV.js";import"./CompositeRoot-yM2I9tSe.js";import"./CompositeItem-Cf1SIU17.js";import"./ToolbarRootContext-e2y-n1Yh.js";import"./composite-CohQOjSI.js";import"./svgIconContainer-DVO7NdYN.js";import"./PdfViewerSearchBar-DUTKQYdc.js";import"./chevron-up-hJ197JYd.js";import"./chevron-down-DTSGl_xB.js";import"./cross-BLpXMPe1.js";import"./PdfViewerSidebar-e_CKruWc.js";import"./index-BD1sd-aL.js";import"./index-C1nkpuUA.js";import"./index-BpgIDDBL.js";import"./PdfViewerToolbar-Z8C-ewm1.js";import"./Button-Cavox7D-.js";import"./chevron-right-3lfZFAzb.js";import"./Input-COHFDix-.js";import"./search-E8ja1e9g.js";import"./spin-Dj3dCTa4.js";import"./error-BmTcrgoE.js";import"./withOsdkMetrics-BMPSufl2.js";import"./makeExternalStore-CoWtabiz.js";const U={title:"Components/DocumentViewer/Renderers/PdfViewer",component:p,tags:["beta"],parameters:{controls:{expanded:!0}}},o={render:()=>{const{object:e,isLoading:n}=a(d,s);return n||!(e!=null&&e.employeeDocuments)?r.jsx("div",{style:{height:"600px"},children:"Loading OSDK media…"}):r.jsx("div",{style:{height:"600px"},children:r.jsx(p,{media:e.employeeDocuments})})},parameters:{docs:{source:{code:`// Access media from an OSDK object's media reference property
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
