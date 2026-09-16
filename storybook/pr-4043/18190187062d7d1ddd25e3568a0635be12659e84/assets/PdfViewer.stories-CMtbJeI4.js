import{j as r,M as s}from"./iframe-B7clUVHt.js";import{P as p}from"./pdf-viewer-C6KyME8t.js";import{E as d}from"./Employee-BAk2o20h.js";import{u as a}from"./useOsdkObject-Drg2QRIS.js";import"./preload-helper-CUPfdM8_.js";import"./PdfViewer-CSgwckd7.js";import"./index-BJuITS90.js";import"./BasePdfViewer-D3SRq9gi.js";import"./BasePdfViewer.module.css-Dyy6RQSZ.js";import"./PdfViewerAnnotationLayer-C_uh5Kix.js";import"./constants-DsXMS3N3.js";import"./usePdfDocument-B_AlQ9vp.js";import"./PdfViewerOutlineSidebar-CxKJeb2i.js";import"./PdfViewerSidebarHeader-CGqkPvkM.js";import"./useBaseUiId-DVrDHycI.js";import"./useControlled-ccc4EKlt.js";import"./CompositeRoot-o-Rz0IEc.js";import"./CompositeItem-DVh6-70_.js";import"./ToolbarRootContext-CjbBLH2h.js";import"./composite-DyK7yBlQ.js";import"./svgIconContainer-BJLnErPQ.js";import"./PdfViewerSearchBar-DbkPwkVv.js";import"./chevron-up-CHEo39G-.js";import"./chevron-down-M1DCZVuw.js";import"./cross-CmeT_My2.js";import"./PdfViewerSidebar-yiDNJ9ZP.js";import"./index-CjqIP0d4.js";import"./index-aq1Wm6Yn.js";import"./index-DD_iU2uX.js";import"./PdfViewerToolbar-Czf3GT8o.js";import"./Button-BsEC03FF.js";import"./chevron-right-fNto6Rxu.js";import"./Input-CT_I8RKH.js";import"./search-D5J8qnAm.js";import"./spin-C60HKyjM.js";import"./error-gkpqEfzK.js";import"./withOsdkMetrics-Tq1KK3ST.js";import"./makeExternalStore-B3i8xKry.js";const U={title:"Components/DocumentViewer/Renderers/PdfViewer",component:p,tags:["beta"],parameters:{controls:{expanded:!0}}},o={render:()=>{const{object:e,isLoading:n}=a(d,s);return n||!(e!=null&&e.employeeDocuments)?r.jsx("div",{style:{height:"600px"},children:"Loading OSDK media…"}):r.jsx("div",{style:{height:"600px"},children:r.jsx(p,{media:e.employeeDocuments})})},parameters:{docs:{source:{code:`// Access media from an OSDK object's media reference property
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
