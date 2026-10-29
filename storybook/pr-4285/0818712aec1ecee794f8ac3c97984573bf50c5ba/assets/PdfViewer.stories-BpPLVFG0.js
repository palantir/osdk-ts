import{j as r,M as s}from"./iframe-DzAVrHJ1.js";import{P as p}from"./pdf-viewer-DXhDMuu9.js";import{E as d}from"./Employee-BAk2o20h.js";import{u as a}from"./useOsdkObject-B34-3OIn.js";import"./preload-helper-ty-K3PMW.js";import"./PdfViewer-C-KFQu0X.js";import"./index-C292Gvtl.js";import"./BasePdfViewer-Clqu4nYq.js";import"./BasePdfViewer.module.css-Cb602BY7.js";import"./PdfViewerAnnotationLayer-CxobXVjS.js";import"./constants-DsXMS3N3.js";import"./usePdfDocument-E7dwZS2R.js";import"./PdfViewerOutlineSidebar-B5yjqWp8.js";import"./PdfViewerSidebarHeader-BQyR-yBA.js";import"./useBaseUiId-C1k_ZcgS.js";import"./useControlled-P8ZVsLoA.js";import"./CompositeRoot-f8bEw9LB.js";import"./CompositeItem-DvTwYr0k.js";import"./ToolbarRootContext-mfvQj9MT.js";import"./composite-CMwdngwB.js";import"./svgIconContainer-Cjn3QLE6.js";import"./PdfViewerSearchBar-C7bchyxS.js";import"./chevron-up-DidJDvhy.js";import"./chevron-down-BLhnWXgc.js";import"./cross-CwuqZdL9.js";import"./PdfViewerSidebar-BOJ8OM8q.js";import"./index-GsoBtsBJ.js";import"./index-Bz0mU_jm.js";import"./index-eBdvYF3H.js";import"./PdfViewerToolbar-DpY5YfS2.js";import"./Button-G6bICRGy.js";import"./chevron-right-DRqoLzix.js";import"./Input-BlhxiPuo.js";import"./search-Bq5r2eJD.js";import"./spin-CeAWgfmw.js";import"./error-BRilv6DJ.js";import"./withOsdkMetrics-C01mqZCt.js";import"./makeExternalStore-DMxEFrb0.js";const U={title:"Components/DocumentViewer/Renderers/PdfViewer",component:p,tags:["beta"],parameters:{controls:{expanded:!0}}},o={render:()=>{const{object:e,isLoading:n}=a(d,s);return n||!(e!=null&&e.employeeDocuments)?r.jsx("div",{style:{height:"600px"},children:"Loading OSDK media…"}):r.jsx("div",{style:{height:"600px"},children:r.jsx(p,{media:e.employeeDocuments})})},parameters:{docs:{source:{code:`// Access media from an OSDK object's media reference property
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
