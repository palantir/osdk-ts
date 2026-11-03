import{j as r,M as s}from"./iframe-CRdsH5HZ.js";import{P as p}from"./pdf-viewer-BgklgEra.js";import{E as d}from"./Employee-BAk2o20h.js";import{u as a}from"./useOsdkObject-DFLkUpNi.js";import"./preload-helper-CKZQslH7.js";import"./PdfViewer-DRio2Em8.js";import"./index-DTd5KXcK.js";import"./BasePdfViewer-CsB03WuQ.js";import"./BasePdfViewer.module.css-BnHlU_LS.js";import"./PdfViewerAnnotationLayer-BsnK4Pqj.js";import"./constants-DsXMS3N3.js";import"./usePdfDocument-C96RBkX3.js";import"./PdfViewerOutlineSidebar-CNeKQTdb.js";import"./PdfViewerSidebarHeader-BsEg7dwG.js";import"./useBaseUiId-CclOULO6.js";import"./useControlled-DWxXLpHB.js";import"./CompositeRoot-DBS3cJLp.js";import"./CompositeItem-2Hw_8anp.js";import"./ToolbarRootContext-CqwjH-y3.js";import"./composite-83cwJd-q.js";import"./svgIconContainer-B82w1dNX.js";import"./PdfViewerSearchBar-DZQpUv2J.js";import"./chevron-up-CUHtYWh-.js";import"./chevron-down-0O9k5DT8.js";import"./cross-Ck_cirtk.js";import"./PdfViewerSidebar-CvQSajXx.js";import"./index-IbJqJxEo.js";import"./index-Cn4z51Ds.js";import"./index-CF0tZzS5.js";import"./PdfViewerToolbar-BAAoaiu3.js";import"./Button-DC0lWoOP.js";import"./chevron-right-CoucKDb9.js";import"./Input-C5MZZ2uA.js";import"./search-BLamqbky.js";import"./spin-Dh_G0oN4.js";import"./error-Cy0mbDhX.js";import"./withOsdkMetrics-CI0orLhd.js";import"./makeExternalStore-DkeRNmA2.js";const U={title:"Components/DocumentViewer/Renderers/PdfViewer",component:p,tags:["beta"],parameters:{controls:{expanded:!0}}},o={render:()=>{const{object:e,isLoading:n}=a(d,s);return n||!(e!=null&&e.employeeDocuments)?r.jsx("div",{style:{height:"600px"},children:"Loading OSDK media…"}):r.jsx("div",{style:{height:"600px"},children:r.jsx(p,{media:e.employeeDocuments})})},parameters:{docs:{source:{code:`// Access media from an OSDK object's media reference property
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
